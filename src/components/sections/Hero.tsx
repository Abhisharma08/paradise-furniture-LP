"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg =
    PlaceHolderImages.find((img) => img.id === "hero-office") || {
      imageUrl: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755593249/1920x1080_ahs9n3.jpg",
      description: "Office workspace",
      imageHint: "office workspace",
    };

  return (
    <section className="relative h-[85vh] sm:h-[90vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background with Adjusted Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg.imageUrl}
          alt={heroImg.description}
          fill
          priority
          sizes="100vw"
          className="object-cover w-full h-full"
        />
        {/* Reference image jaisa dark look dene ke liye overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          
          {/* Heading: Refined sizes for Mobile (text-2xl) to Desktop (text-7xl) */}
          <h1 className="font-headline text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.2]">
            Buy{" "}
            <span className="text-[#ff3131]"> {/* Reference image wala exact red color */}
              Office Chairs in Varanasi
            </span>{" "}
            – Authorized Dealer of{" "}
            <span className="text-[#ff3131]">Paradise</span> Furniture
          </h1>

          {/* Description: Mobile par font thoda aur chota (text-xs/sm) kiya hai readability ke liye */}
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-sm sm:max-w-3xl md:max-w-4xl mx-auto font-medium">
            Elevate your workspace with authentic Paradise Furniture office chairs — now available through our trusted authorized dealership in Varanasi. Whether you’re upgrading a home office or outfitting a corporate space, we offer the perfect blend of comfort, style, and durability.
          </p>

          {/* Button: Size and padding adjusted for mobile responsive feel */}
          <div className="pt-2 sm:pt-4 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#c61a1a] hover:bg-[#a01515] px-6 sm:px-10 md:px-12 h-11 sm:h-14 md:h-16 text-xs sm:text-base md:text-lg font-bold rounded-md shadow-lg transition-all hover:scale-105"
            >
              <Link href="#quote">Download Our Catalogue</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}