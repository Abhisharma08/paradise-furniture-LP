import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CustomInquiry } from "@/components/sections/CustomInquiry";
import { Productivity } from "@/components/sections/Productivity";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CustomInquiry />
        <Productivity />
        <ProductShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
