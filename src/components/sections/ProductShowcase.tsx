import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const series = [
  {
    id: "premium-series",
    title: "Premium Series",
    description: "Ultimate luxury with advanced synchro-tilt mechanism and adjustable headrests.",
    image: PlaceHolderImages.find(i => i.id === "premium-series"),
  },
  {
    id: "diamond-series",
    title: "Diamond Series",
    description: "The gold standard for executive comfort with high-grade breathable mesh.",
    image: PlaceHolderImages.find(i => i.id === "diamond-series"),
  },
  {
    id: "platinum-series",
    title: "Platinum Series",
    description: "Versatile seating solutions perfect for open workstations and collaborative spaces.",
    image: PlaceHolderImages.find(i => i.id === "platinum-series"),
  },
  {
    id: "standard-series",
    title: "Standard Series",
    description: "Durable and efficient seating designed for high-traffic office environments.",
    image: PlaceHolderImages.find(i => i.id === "standard-series") || { imageUrl: "https://picsum.photos/seed/standard/600/600", description: "Standard Office Chair" },
  }
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Exclusive Product Series</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our curated collections designed to meet the diverse needs of modern professionals in Varanasi.
            </p>
          </div>
          <Button asChild variant="link" className="text-primary font-semibold text-lg">
            <Link href="#quote">View All Collections</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {series.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border transition-all hover:shadow-xl flex flex-col h-full">
              <div className="relative aspect-square overflow-hidden">
                {item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    Best Seller
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{item.description}</p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all">
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
