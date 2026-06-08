import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

const Clients = dynamic(() => import("@/components/sections/Clients").then((mod) => mod.Clients), {
  loading: () => <div className="h-48 bg-gray-50/50 animate-pulse" />,
});

const CustomInquiry = dynamic(() => import("@/components/sections/CustomInquiry").then((mod) => mod.CustomInquiry), {
  loading: () => <div className="h-96 bg-gray-50/50 animate-pulse" />,
});

const ProductShowcase = dynamic(() => import("@/components/sections/ProductShowcase").then((mod) => mod.ProductShowcase), {
  loading: () => <div className="h-96 bg-gray-50/50 animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer").then((mod) => mod.Footer), {
  loading: () => <div className="h-48 bg-gray-50/50 animate-pulse" />,
});

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
