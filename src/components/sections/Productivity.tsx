"use client";

import Image from "next/image";

export function Productivity() {
  return (
    <section className="bg-black text-white py-12 md:py-20 lg:py-28 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT SIDE IMAGE */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-start animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-w-[550px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
              <img
                src="https://res.cloudinary.com/demfgmwjk/image/upload/v1775623322/550x310_xz6kvl_gnzgrr.webp"
                alt="Productivity Setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE TEXT AREA */}
          <div className="w-full lg:w-[50%] flex flex-col items-start space-y-5 md:space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Maximize Your Productivity with{" "}
              <span className="text-[#ff3131]"> 
                Ergonomic Seating
              </span>{" "}
              Solutions
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-normal max-w-lg">
              Paradise Furniture offers a diverse range of ergonomic and stylish seating solutions designed to enhance both comfort and productivity. With a focus on quality craftsmanship, their products include office chairs, workstations, and lounge seating, all tailored to meet modern workspace needs.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}