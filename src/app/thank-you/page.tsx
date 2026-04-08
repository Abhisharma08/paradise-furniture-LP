"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Application Received!
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
          Thank you for your interest. Your details have been successfully submitted.
          Our team will connect with you shortly.
        </p>

        {/* Info Box */}
        <div className="bg-gray-100 rounded-xl p-5 md:p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-2">
            What happens next?
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Our expert will contact you within the next 24 hours to discuss your
            requirements and guide you through the next steps.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6" />

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}