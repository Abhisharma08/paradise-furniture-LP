"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// ❌ removed placeholder import

export function Hero() {
  const router = useRouter();

  // ✅ direct image (no placeholder)
  const heroImg = {
    imageUrl:
      "https://paradisefurniture.in/wp-content/uploads/2026/03/4v2kb0jk01rmt0cx54t8wfd1pc_result_0.jpg-scaled.jpeg",
  };

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    quantity: "1-5 Chairs",
  });

  const handleNext = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all fields");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/hubspot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("API STATUS:", res.status);

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();
      console.log("API RESPONSE:", data);

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
    <section className="relative h-[85vh] min-h-[600px] flex items-center">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg.imageUrl}
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-20 mx-auto px-6 flex justify-between items-center text-white">

        {/* LEFT CONTENT */}
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Buy <span className="text-red-500">Office Chairs in</span><br />
            <span className="text-red-500">Varanasi</span> – Authorized Dealer of Paradise Furniture
          </h1>

          <p className="text-sm text-white/80">
            Elevate your workspace with authentic Paradise Furniture office chairs — now available through our trusted authorized dealership in Varanasi. Whether you’re upgrading a home office or outfitting a corporate space, we offer the perfect blend of comfort, style, and durability.
          </p>

          <Button className="bg-red-600">Download Catalogue</Button>
        </div>

        {/* FORM */}
        <div className="bg-white text-black p-6 rounded-2xl w-[380px] shadow-xl">

          <h2 className="text-xl font-bold text-center">
            Request for Catalogue
          </h2>

          <p className="text-center text-red-500 text-sm mb-4 tracking-wide">
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
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Next
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

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-sm font-medium"
                >
                  Back
                </button>

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700"
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