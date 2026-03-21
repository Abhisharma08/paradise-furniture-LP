
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Productivity() {
  const prodImg = PlaceHolderImages.find((img) => img.id === "productivity-office");

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Maximize Your Productivity with <span className="text-primary">Ergonomic Seating</span> Solutions
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
              At R R Agencies, Varanasi's authorized dealer of Paradise Furniture, we bring you premium seating solutions that enhance comfort and productivity. Our collections are designed for every need — from corporate offices and startups to training rooms, cafes, and lounges.
            </p>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem]">
              {prodImg && (
                <Image
                  src={prodImg.imageUrl}
                  alt={prodImg.description}
                  fill
                  className="object-cover"
                  data-ai-hint={prodImg.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
