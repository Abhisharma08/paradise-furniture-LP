"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section - Need a Custom Design? */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Need a <span className="text-[#c61a1a]">Custom</span> Design?
          </h2>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 font-normal">
            Looking for something unique? We can tailor your furniture to fit your style and requirements perfectly.
          </p>
          <Button 
            asChild 
            className="bg-[#c61a1a] hover:bg-[#a01515] text-white font-bold px-10 h-12 rounded-md text-base transition-all"
          >
            <Link href="#quote">Enquire Now</Link>
          </Button>
        </div>
      </section>

      {/* Main Footer Bar - Exactly like reference image */}
      <div className="bg-white py-6 md:py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          
          {/* Paradise Furniture Logo - Left Aligned */}
          <div className="flex items-center">
            <div className="relative w-36 h-10 md:w-44 md:h-12">
              <Image
                src="https://res.cloudinary.com/demfgmwjk/image/upload/v1775528217/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74_wjyffw.webp"
                alt="Paradise Furniture Varanasi"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Copyright Text - Right Aligned with accurate styling */}
          <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 font-normal">
            © 2026 Paradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}