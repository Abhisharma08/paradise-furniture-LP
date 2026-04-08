export async function POST(req) {
  try {
    const body = await req.json();

    // 1️⃣ Try to create contact
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          email: body.email,
          firstname: body.name,
          phone: body.phone,
          company: body.company,
        },
      }),
    });

    const data = await res.json();

    // 2️⃣ If already exists → UPDATE
    if (data.category === "CONFLICT") {
      const contactId = data.message.match(/\d+/)[0]; // extract ID

      const updateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
          },
          body: JSON.stringify({
            properties: {
              firstname: body.name,
              phone: body.phone,
              company: body.company,
            },
          }),
        }
      );

      const updateData = await updateRes.json();

      return Response.json({
        success: true,
        message: "Contact updated successfully",
        data: updateData,
      });
    }

    // 3️⃣ New contact created
    return Response.json({
      success: true,
      message: "Contact created successfully",
      data,
    });

  } catch (error) {
    return Response.json({ success: false, error });
  }
}