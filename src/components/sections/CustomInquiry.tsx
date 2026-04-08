import { CheckCircle2 } from "lucide-react";

export function CustomInquiry() {
  return (
    <section id="quote" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TWO COLUMN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT (same as before) */}
          <div className="max-w-4xl mx-auto animate-in fade-in duration-700">

            <div className="inline-block px-3 py-1 rounded-md bg-muted text-[9px] font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Our Commitment
            </div>

            <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-6 text-foreground leading-tight tracking-tight">
              Experience the Paradise Difference
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              Choose Paradise Furniture for unmatched quality, ergonomic innovation, and exceptional service. Every product is certified with BIFMA, ISO 14001:2009, and ISO 9001:15000, ensuring lasting performance and reliability.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

              <div className="flex gap-3 items-start">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1 text-foreground">
                    BIFMA Certified
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Meeting the highest industry standards for safety and durability.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1 text-foreground">
                    ISO 9001:15000
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Assuring quality management systems for consistent excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start md:col-span-2">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1 text-foreground">
                    ISO 14001:2009
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Committed to environmentally responsible manufacturing processes.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE (NEW) */}
          <div className="w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/demfgmwjk/image/upload/v1775622508/WhatsApp_Image_2026-04-07_at_11.16.19_AM_w0jt1x.jpg"
              alt="Paradise Furniture"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}