"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-lg bg-white p-8 text-center shadow-xl md:p-12">

          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-800 md:text-3xl">
            Application Received!
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
            Thank you for your interest. Your details have been successfully submitted.
            Our team will connect with you shortly.
          </p>

          <div className="mb-8 rounded-lg bg-gray-100 p-5 md:p-6">
            <h3 className="mb-2 font-semibold text-gray-700">
              What happens next?
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Our expert will contact you within the next 24 hours to discuss your
              requirements and guide you through the next steps.
            </p>
          </div>

          <div className="mb-6 border-t border-gray-200" />

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 transition hover:bg-gray-100"
          >
            ← Back to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
