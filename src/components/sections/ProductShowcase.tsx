
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const series = [
  {
    id: "task-ergo",
    title: "Task Ergo Series",
    description: "Compact, efficient seating for focused work.",
    image: PlaceHolderImages.find(i => i.id === "task-ergo"),
  },
  {
    id: "divinity-series",
    title: "Divinity Series",
    description: "Chrome frame and wood arm accents for an elevated look.",
    image: PlaceHolderImages.find(i => i.id === "divinity-series"),
  },
  {
    id: "training-series",
    title: "Training Series",
    description: "Lightweight, functional seating for collaborative environments.",
    image: PlaceHolderImages.find(i => i.id === "training-series"),
  },
  {
    id: "premium-series",
    title: "Premium Series",
    description: "Elegant high-back designs with mesh till mechanism and plush upholstery.",
    image: PlaceHolderImages.find(i => i.id === "premium-series"),
  },
  {
    id: "diamond-series",
    title: "Diamond Series",
    description: "Durable and stylish with high-back design and premium fabrics.",
    image: PlaceHolderImages.find(i => i.id === "diamond-series"),
  },
  {
    id: "platinum-series",
    title: "Platinum Series",
    description: "Ergonomic mid-back fit for workstations and sophisticated edges.",
    image: PlaceHolderImages.find(i => i.id === "platinum-series"),
  },
  {
    id: "gold-series",
    title: "Gold Series",
    description: "Superior lumbar support with breathable mesh for all-day comfort.",
    image: PlaceHolderImages.find(i => i.id === "gold-series"),
  },
  {
    id: "silver-series",
    title: "Silver Series",
    description: "Versatile and durable, ideal for multi-purpose workspace needs.",
    image: PlaceHolderImages.find(i => i.id === "silver-series"),
  },
  {
    id: "ergo-series",
    title: "Ergo Series",
    description: "Precision-engineered for ultimate posture support and productivity.",
    image: PlaceHolderImages.find(i => i.id === "ergo-series"),
  },
  {
    id: "cafeteria-series",
    title: "Cafeteria Series",
    description: "Vibrant and easy-to-clean seating for breakrooms and dining areas.",
    image: PlaceHolderImages.find(i => i.id === "cafeteria-series"),
  },
  {
    id: "lounge-series",
    title: "Lounge Series",
    description: "Luxurious comfort for waiting areas and reception spaces.",
    image: PlaceHolderImages.find(i => i.id === "lounge-series"),
  }
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-foreground mb-4">
            Explore Our Exclusive Product Series
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {series.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-muted flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={item.image.imageHint}
                  />
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-headline text-2xl font-black mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed font-medium">
                  {item.description}
                </p>
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-black rounded-lg shadow-lg shadow-primary/10 transition-all active:scale-[0.98]"
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
