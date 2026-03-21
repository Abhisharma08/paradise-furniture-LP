import { MultiStepCatalogueForm } from "@/components/forms/MultiStepCatalogueForm";
import { CheckCircle2 } from "lucide-react";

export function CustomInquiry() {
  return (
    <section id="quote" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[12px] font-black uppercase tracking-widest mb-8">
              Our Commitment
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 text-foreground leading-[1.05] tracking-tighter">
              Experience the Paradise Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-semibold opacity-80">
              Choose Paradise Furniture for unmatched quality, ergonomic innovation, and exceptional service. Every product is certified to meet international excellence.
            </p>
            
            <div className="grid gap-8">
              <div className="flex gap-5 p-6 rounded-2xl bg-muted/30 border border-muted transition-all hover:bg-muted/50">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 text-foreground">BIFMA Certified</h4>
                  <p className="text-muted-foreground font-semibold leading-relaxed">Meeting the highest industry standards for safety and durability.</p>
                </div>
              </div>
              
              <div className="flex gap-5 p-6 rounded-2xl bg-muted/30 border border-muted transition-all hover:bg-muted/50">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 text-foreground">ISO 9001:15000</h4>
                  <p className="text-muted-foreground font-semibold leading-relaxed">Assuring quality management systems for consistent excellence.</p>
                </div>
              </div>
              
              <div className="flex gap-5 p-6 rounded-2xl bg-muted/30 border border-muted transition-all hover:bg-muted/50">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 text-foreground">ISO 14001:2009</h4>
                  <p className="text-muted-foreground font-semibold leading-relaxed">Committed to environmentally responsible manufacturing processes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10"></div>
            <MultiStepCatalogueForm />
          </div>
        </div>
      </div>
    </section>
  );
}
