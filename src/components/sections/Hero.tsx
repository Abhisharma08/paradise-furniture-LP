"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-office");

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Buy <span className="text-primary">Office Chairs in Varanasi</span> – Authorized Dealer of <span className="text-primary">Paradise</span> Furniture
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
            Elevate your workspace with authentic Paradise Furniture office chairs — now available through our trusted authorized dealership in Varanasi. Whether you’re upgrading a home office or outfitting a corporate space, we offer the perfect blend of comfort, style, and durability.
          </p>
          
          <div className="pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 h-14 text-base font-bold rounded-md">
              <Link href="#quote">
                Download Our Catalogue
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
