import { CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    title: "Ergonomic Excellence",
    description: "Scientifically designed backrests and seat cushions for maximum posture support.",
    icon: ShieldCheck,
  },
  {
    title: "Certified Quality",
    description: "ISO certified products ensuring long-term durability and safety standards.",
    icon: CheckCircle2,
  },
  {
    title: "Varanasi Delivery",
    description: "Fast and reliable doorstep delivery and installation across Varanasi.",
    icon: Zap,
  },
  {
    title: "Expert Consultation",
    description: "Dedicated support team to help you choose the right furniture for your needs.",
    icon: Users,
  },
];

export function Features() {
  const cert1 = PlaceHolderImages.find(i => i.id === "certification-1");
  const cert2 = PlaceHolderImages.find(i => i.id === "certification-2");

  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Experience the Paradise Difference</h2>
          <p className="text-muted-foreground text-lg">
            We are more than just a furniture dealer; we are your partners in creating high-performance workspaces that inspire greatness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-background border hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Maximize Your Productivity with Ergonomic Seating Solutions</h2>
              <p className="text-lg opacity-90 mb-8">
                Your chair is the most important tool in your office. Our Diamond and Premium series are crafted with precision to ensure you stay comfortable through long hours of focused work.
              </p>
              <div className="flex gap-6 items-center">
                {cert1 && <Image src={cert1.imageUrl} alt="ISO Certified" width={80} height={80} className="grayscale brightness-200" />}
                {cert2 && <Image src={cert2.imageUrl} alt="Quality Assured" width={80} height={80} className="grayscale brightness-200" />}
                <div className="border-l border-white/20 pl-6">
                  <p className="font-bold text-2xl">100%</p>
                  <p className="text-sm uppercase tracking-wider opacity-70">Genuine Paradise Products</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white/5 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="h-40 w-40 opacity-20" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
