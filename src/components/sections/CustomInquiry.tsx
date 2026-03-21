
import { MultiStepCatalogueForm } from "@/components/forms/MultiStepCatalogueForm";
import { MessageSquare, LayoutGrid, Paintbrush } from "lucide-react";

export function CustomInquiry() {
  return (
    <section id="quote" className="py-24 bg-[#f2e9e9]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-foreground">Need a Custom Design?</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Every office space is unique. If our standard collections don't quite fit your vision, our team of designers in Varanasi can help you create custom seating solutions tailored to your specific brand identity and spatial constraints.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Space Planning</h4>
                  <p className="text-muted-foreground">Free spatial analysis of your office to optimize layout for workflow efficiency.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Material Selection</h4>
                  <p className="text-muted-foreground">Choose from hundreds of premium fabrics, leathers, and mesh options.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Expert Support</h4>
                  <p className="text-muted-foreground">Dedicated project manager from design conceptualization to final installation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-2 -z-10"></div>
            <MultiStepCatalogueForm />
          </div>
        </div>
      </div>
    </section>
  );
}
