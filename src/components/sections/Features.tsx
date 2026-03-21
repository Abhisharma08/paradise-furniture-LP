import { Award, IndianRupee, Sparkles, Truck, Users, ThumbsUp } from "lucide-react";

const features = [
  {
    title: "Authorized Dealer",
    description: "100% genuine Paradise Furniture with warranty.",
    icon: Award,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates across all models.",
    icon: IndianRupee,
  },
  {
    title: "Latest Designs",
    description: "Access to the newest ergonomic and stylish collections.",
    icon: Sparkles,
  },
  {
    title: "On-Time Delivery",
    description: "Safe, reliable delivery to your home or workspace.",
    icon: Truck,
  },
  {
    title: "Bulk Order Support",
    description: "Custom quotes & priority delivery for large requirements.",
    icon: Users,
  },
  {
    title: "Personalized Assistance",
    description: "Expert help to choose the right chair for your needs.",
    icon: ThumbsUp,
  },
];

export function Features() {
  return (
    <section id="why-us" className="bg-[#F8F9FA] py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-muted text-[10px] font-bold text-muted-foreground mb-4 uppercase tracking-wider">
            Why Us?
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-foreground">
            Your Trusted Furniture Partner
          </h2>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            As the official authorized dealer in Varanasi, we provide more than just furniture. We offer peace of mind, value, and dedicated service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-transparent hover:border-muted-foreground/10 transition-all text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_20px_-5px_rgba(220,38,38,0.15)] border border-primary/5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-black mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
