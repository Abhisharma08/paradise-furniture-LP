import { MultiStepCatalogueForm } from "@/components/forms/MultiStepCatalogueForm";
import { CheckCircle2 } from "lucide-react";

export function CustomInquiry() {
  return (
    <section id="quote" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-6">
              Our Commitment
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 text-foreground leading-[1.1]">
              Experience the Paradise Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
              Choose Paradise Furniture for unmatched quality, ergonomic innovation, and exceptional service. Every product is certified with BIFMA, ISO 14001:2009, and ISO 9001:15000, ensuring lasting performance and reliability.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">BIFMA Certified</h4>
                  <p className="text-muted-foreground text-sm font-medium">Meeting the highest industry standards for safety and durability.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ISO 9001:15000</h4>
                  <p className="text-muted-foreground text-sm font-medium">Assuring quality management systems for consistent excellence.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ISO 14001:2009</h4>
                  <p className="text-muted-foreground text-sm font-medium">Committed to environmentally responsible manufacturing processes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <MultiStepCatalogueForm />
          </div>
        </div>
      </div>
    </section>
  );
}
