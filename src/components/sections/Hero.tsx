"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-office");

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Varanasi's #1 Furniture Partner
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Buy Office Chairs in Varanasi – Authorized Dealer of <span className="text-primary">Paradise Furniture</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experience the perfect blend of comfort and style. Our ergonomic seating solutions are designed to maximize productivity and transform your workspace into a hub of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 text-base font-semibold">
                <Link href="#quote">
                  Download Our Catalogue <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 h-14 text-base font-semibold">
                <Link href="#products">
                  Explore Series <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
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
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-0"></div>
    </section>
  );
}
