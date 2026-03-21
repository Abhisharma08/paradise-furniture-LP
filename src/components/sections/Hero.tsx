"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-office");

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/65 z-10"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            Buy <span className="text-primary underline decoration-primary/30 underline-offset-8">Office Chairs in Varanasi</span> – Authorized Dealer of <span className="text-primary">Paradise</span> Furniture
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium opacity-95">
            Elevate your workspace with authentic Paradise Furniture office chairs — now available through our trusted authorized dealership in Varanasi. Whether you’re upgrading a home office or outfitting a corporate space, we offer the perfect blend of comfort, style, and durability.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 h-16 text-lg font-black rounded-xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Link href="#quote">
                Download Our Catalogue
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-12 h-16 text-lg font-black rounded-xl">
              <Link href="#products">
                Explore Series
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
