import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CustomInquiry } from "@/components/sections/CustomInquiry";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Footer } from "@/components/sections/Footer";
import { Clients } from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <CustomInquiry />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
