const HUBSPOT_BASE_URL = "https://api.hubapi.com";

function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
  };
}

function compactProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function searchContactByEmail(email) {
  const res = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/search`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      properties: ["email", "firstname", "phone", "company"],
      limit: 1,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "HubSpot contact search failed");
  }

  return data.results?.[0] || null;
}

async function upsertContact(properties) {
  const existingContact = await searchContactByEmail(properties.email);

  if (existingContact) {
    const res = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${existingContact.id}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify({ properties }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "HubSpot contact update failed");
    }

    return data;
  }

  const res = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ properties }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "HubSpot contact creation failed");
  }

  return data;
}

async function addStepNote(contactId, body) {
  const quantityLine = body.quantity ? `<li>Estimated Quantity: ${escapeHtml(body.quantity)}</li>` : "";
  const companyLine = body.company ? `<li>Company: ${escapeHtml(body.company)}</li>` : "";
  const cityLine = body.city ? `<li>City: ${escapeHtml(body.city)}</li>` : "";
  const lookingForLine = body.lookingFor ? `<li>Looking For: ${escapeHtml(body.lookingFor)}</li>` : "";

  const res = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/notes`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: `
          <strong>Catalogue Request - Step ${escapeHtml(body.step || "unknown")}</strong>
          <ul>
            <li>Name: ${escapeHtml(body.name)}</li>
            <li>Phone: ${escapeHtml(body.phone)}</li>
            <li>Email: ${escapeHtml(body.email)}</li>
            ${companyLine}
            ${cityLine}
            ${lookingForLine}
            ${quantityLine}
          </ul>
        `,
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202,
            },
          ],
        },
      ],
    }),
  });

  return res.ok;
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!process.env.HUBSPOT_TOKEN) {
      return Response.json({ success: false, error: "HubSpot token is missing" }, { status: 500 });
    }

    if (!body.email || !body.name || !body.phone) {
      return Response.json(
        { success: false, error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    const properties = compactProperties({
      email: body.email,
      firstname: body.name,
      phone: body.phone,
      company: body.company,
      city: body.city,
      required_quantity: body.quantity,
      looking_for: body.lookingFor,
    });

    const contact = await upsertContact(properties);
    const noteSaved = await addStepNote(contact.id, body);

    return Response.json({
      success: true,
      message: `Step ${body.step || "unknown"} saved successfully`,
      contactId: contact.id,
      noteSaved,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "HubSpot request failed",
      },
      { status: 500 }
    );
  }
}
