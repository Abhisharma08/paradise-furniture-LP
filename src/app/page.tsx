
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CustomInquiry } from "@/components/sections/CustomInquiry";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductShowcase />
        
        {/* Experience Section Headline Highlight */}
        <section className="bg-primary text-primary-foreground py-16 overflow-hidden relative">
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-6">Your Trusted Furniture Partner in Varanasi</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join 500+ businesses who have transformed their office culture through ergonomic comfort.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </section>

        <CustomInquiry />
      </main>
      <Footer />
    </div>
  );
}
