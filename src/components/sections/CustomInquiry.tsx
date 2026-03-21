import { MultiStepCatalogueForm } from "@/components/forms/MultiStepCatalogueForm";
import { CheckCircle2 } from "lucide-react";

export function CustomInquiry() {
  return (
    <section id="quote" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-block px-3 py-1 rounded-md bg-muted text-[10px] font-bold text-muted-foreground mb-6 uppercase tracking-wider">
              Our Commitment
            </div>
            <h2 className="font-headline text-5xl md:text-6xl font-black mb-8 text-foreground leading-[1.1] tracking-tight">
              Experience the Paradise Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
              Choose Paradise Furniture for unmatched quality, ergonomic innovation, and exceptional service. Every product is certified with BIFMA, ISO 14001:2009, and ISO 9001:15000, ensuring lasting performance and reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex gap-4 items-start">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-foreground">BIFMA Certified</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Meeting the highest industry standards for safety and durability.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-foreground">ISO 9001:15000</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Assuring quality management systems for consistent excellence.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start md:col-span-2">
                <div className="h-6 w-6 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-foreground">ISO 14001:2009</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Committed to environmentally responsible manufacturing processes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <MultiStepCatalogueForm />
          </div>
        </div>
      </div>
    </section>
  );
}
