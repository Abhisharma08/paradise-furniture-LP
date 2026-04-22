"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function Hero() {
  const heroImg = {
    imageUrl:
      "https://res.cloudinary.com/ddqqlfsjp/image/upload/q_auto/f_auto/v1775655040/80jptvzyb5rmt0cx54rvrtt4gr_result_0.jpg_stecw0.jpg",
  };

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [savingStep, setSavingStep] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    lookingFor: "",
    quantity: "1-5 Chairs",
  });

  const saveLeadStep = async (stepNumber: number) => {
    const payload =
      stepNumber === 1
        ? {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            step: stepNumber,
          }
        : {
            ...formData,
            step: stepNumber,
          };

    const res = await fetch("/api/hubspot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    if (data.success !== true) {
      throw new Error(data.error || "HubSpot save failed");
    }

    return data;
  };

  const handleNext = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    setSavingStep(true);

    try {
      await saveLeadStep(1);
      setStep(2);
    } catch (err) {
      console.error("Step 1 Save Error:", err);
      alert("Something went wrong while saving your details");
    }

    setSavingStep(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = await saveLeadStep(2);

      if (data.success === true) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-12 md:min-h-[calc(100vh-5rem)] md:py-16">
      <div className="absolute inset-0">
        <img
          src={heroImg.imageUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 text-white sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-12 xl:gap-12 xl:px-16">
        <div className="mx-auto max-w-xl space-y-5 text-center lg:mx-0 lg:text-left">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-red-500">Your Destination</span><br />
            <span className="text-red-500">for</span> Office Chairs
          </h1>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/80 sm:text-base lg:mx-0">
            Elevate your workspace with our extensive selection of office chairs and experience the Paradise difference for yourself today!
          </p>

          <Button className="hidden md:inline-block rounded-md bg-red-600 hover:bg-red-700">
            Download Catalogue
          </Button>
        </div>

        <div id="quote" className="mx-auto w-full max-w-md scroll-mt-24 rounded-lg bg-white p-5 text-black shadow-xl sm:p-6 lg:mx-0 lg:justify-self-start">
          <h2 className="text-center text-xl font-bold">
            Request for Catalogue
          </h2>

          <p className="mb-4 text-center text-sm tracking-wide text-red-500">
            STEP {step} OF 2
          </p>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  placeholder="username@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <Button
                onClick={handleNext}
                disabled={savingStep}
                className="w-full rounded-md bg-red-600 hover:bg-red-700"
              >
                {savingStep ? "Saving..." : "Next"}
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Company Name</label>
                <Input
                  placeholder="Enter your organization"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">City</label>
                <Input
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Looking For
                </label>

                <Select
                  value={formData.lookingFor}
                  onValueChange={(value) =>
                    setFormData({ ...formData, lookingFor: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Office">Office</SelectItem>
                    <SelectItem value="Living Room">Living Room</SelectItem>
                    <SelectItem value="Bistro/Cafe">Bistro/Cafe</SelectItem>
                    <SelectItem value="Classroom">Classroom</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Estimated Quantity
                </label>

                <Select
                  value={formData.quantity}
                  onValueChange={(value) =>
                    setFormData({ ...formData, quantity: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="1-5 Chairs">1-5 Chairs</SelectItem>
                    <SelectItem value="5-20 Chairs">5-20 Chairs</SelectItem>
                    <SelectItem value="20-50 Chairs">20-50 Chairs</SelectItem>
                    <SelectItem value="50+ Bulk">50+ (Bulk Enquiry)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-medium"
                >
                  Back
                </button>

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full rounded-md bg-red-600 hover:bg-red-700"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
