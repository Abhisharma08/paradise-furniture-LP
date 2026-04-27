"use client";

export function Productivity() {
  return (
    <section className="w-full overflow-hidden bg-black py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          
          <div className="flex w-full justify-center animate-in fade-in slide-in-from-left-8 duration-700 lg:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://res.cloudinary.com/dfb0umklg/images/v1776222279/WhatsApp-Image-2026-04-14-at-6.41.58-PM/WhatsApp-Image-2026-04-14-at-6.41.58-PM.jpeg"
                alt="Productivity Setup"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-2xl flex-col items-start space-y-5 animate-in fade-in slide-in-from-right-8 duration-700 md:space-y-6 lg:mx-0">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Maximize Your Productivity with{" "}
              <span className="text-[#ff3131]"> 
                Ergonomic Seating
              </span>{" "}
              Solutions
            </h2>
            
            <p className="max-w-xl text-sm font-normal leading-relaxed text-white/70 sm:text-base">
              Paradise Furniture offers a diverse range of ergonomic and stylish seating solutions designed to enhance both comfort and productivity. With a focus on quality craftsmanship, their products include office chairs, workstations, and lounge seating, all tailored to meet modern workspace needs.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
