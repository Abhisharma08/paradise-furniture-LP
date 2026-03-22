"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const series = [
  {
    id: "Premium Series",
    title: "Premium Series",
    description: "Elegant high-back designs with knee-tilt mechanism and plush upholstery.",
    image: PlaceHolderImages.find(i => i.id === "task-ergo"),
  },
  {
    id: "Diamond Series",
    title: "Diamond Series",
    description: "Luxury and support with high-back design and premium finishes.",
    image: PlaceHolderImages.find(i => i.id === "divinity-series"),
  },
  {
    id: "Platinum Series",
    title: "Platinum Series",
    description: "Sleek low-back style in leatherette for a sophisticated edge.",
    image: PlaceHolderImages.find(i => i.id === "training-series"),
  },
  {
    id: "Gold Series",
    title: "Gold Series",
    description: "Classic comfort with plush cushioning and timeless design.",
    image: PlaceHolderImages.find(i => i.id === "premium-series"),
  },
  {
    id: "Silver Series",
    title: "Silver Series",
    description: "Functional, stylish, and budget-friendly office seating.",
    image: PlaceHolderImages.find(i => i.id === "diamond-series"),
  },
  {
    id: "Ergo Series",
    title: "Ergo Series",
    description: "Adjustable synchro mechanism with 4-way arms for tailored comfort.",
    image: PlaceHolderImages.find(i => i.id === "platinum-series"),
  },
  {
    id: "Task Ergo Series",
    title: "Task Ergo Series",
    description: "Compact, efficient seating for focused work.",
    image: PlaceHolderImages.find(i => i.id === "gold-series"),
  },
  {
    id: "Divinity Series",
    title: "Divinity Series",
    description: "Chrome frame and wood arm accents for an elevated look.",
    image: PlaceHolderImages.find(i => i.id === "silver-series"),
  },
  {
    id: "Lounge Series",
    title: "Lounge Series",
    description: "Relaxed seating for reception and casual spaces.",
    image: PlaceHolderImages.find(i => i.id === "ergo-series"),
  },
  {
    id: "Training Series",
    title: "Training Series",
    description: "Lightweight, functional seating for learning environments.",
    image: PlaceHolderImages.find(i => i.id === "cafeteria-series"),
  },
  {
    id: "Bistro Series",
    title: "Bistro Series",
    description: "Perfect for cafes, pantries, and breakout zones.",
    image: PlaceHolderImages.find(i => i.id === "lounge-series"),
  }
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Updated Heading Section to match Reference Image exactly */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="px-4 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
              Our Collection
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
            A Wide Range of <span className="text-[#c61a1a]">Seating Solutions</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            With 25+ years of design expertise, Paradise Furniture blends quality craftsmanship with modern ergonomics. Our extensive range includes:
          </p>
        </div>

        {/* Grid Section - Updated Card UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {series.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="p-3 pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  {item.image && (
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item.image.imageHint}
                    />
                  )}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-6 flex-1 leading-relaxed font-medium">
                  {item.description}
                </p>
                <Button 
                  asChild 
                  className="w-full bg-[#c61a1a] hover:bg-[#a01515] h-12 text-base font-bold rounded-md shadow-md transition-all active:scale-[0.97]"
                >
                  <Link href="#quote">Enquire Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}