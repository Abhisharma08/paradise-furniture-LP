import { Sofa } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-black mb-6">
            Need a <span className="text-primary">Custom Design?</span>
          </h2>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium">
            Looking for something unique? We can tailor your furniture to fit your style and requirements perfectly.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-black px-10 h-14 rounded-lg text-lg transition-transform hover:scale-105 active:scale-95">
            <Link href="#quote">Enquire Now</Link>
          </Button>
        </div>
      </section>

      {/* Main Footer Bar */}
      <div className="bg-white py-8 border-t border-muted">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <Sofa className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline text-lg font-black tracking-tighter text-primary">
                PARADISE
              </span>
              <span className="font-headline text-[8px] font-bold tracking-[0.2em] text-foreground/40 uppercase">
                FURNITURE
              </span>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            © 2026 R R Agencies, Varanasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
