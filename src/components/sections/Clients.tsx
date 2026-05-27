"use client";

import Image from "next/image";

export function Clients() {

  const clientLogos = [
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/Untitled-design-23-r0oi9jd5hckodqekmpsz6h91kf23abxn3g27zr7y80/Untitled-design-23-r0oi9jd5hckodqekmpsz6h91kf23abxn3g27zr7y80.png?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/paradise-images-12-r2qk5wrp2xilyr6gdswd4oo705g82kllql330q0zy8/paradise-images-12-r2qk5wrp2xilyr6gdswd4oo705g82kllql330q0zy8.jpg?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/Untitled-design-52-r1f2vdbi3vdbv7j5vnqaj7n20fd7zhqnuw0d6dwjk0/Untitled-design-52-r1f2vdbi3vdbv7j5vnqaj7n20fd7zhqnuw0d6dwjk0.png?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/Untitled-design-25-r0oihi1xdth4qsu54nq6sywmqxt1i0jruv1bd5evi8/Untitled-design-25-r0oihi1xdth4qsu54nq6sywmqxt1i0jruv1bd5evi8.png?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/Untitled-design-27-r0oih8njhh49ip7snjnx41a0t33dd1ighkigkdst8g/Untitled-design-27-r0oih8njhh49ip7snjnx41a0t33dd1ighkigkdst8g.png?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/paradise-images-09-r2qk5p8zk98bdvhdlpnckqki92haczrr1jv76ic5c0/paradise-images-09-r2qk5p8zk98bdvhdlpnckqki92haczrr1jv76ic5c0.jpg?_i=AA",
    "https://res.cloudinary.com/dfb0umklg/images/c_scale,w_248,h_59,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/Untitled-design-81-r2qpyi4bqd2cfi6pcguuyjporfbl8hp7f0x60aqt4w/Untitled-design-81-r2qpyi4bqd2cfi6pcguuyjporfbl8hp7f0x60aqt4w.png?_i=AA",
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-14">

      <div className="container mx-auto max-w-7xl px-2 text-center">

        <h2 className="mb-3 text-3xl font-bold text-primary">
          CLIENTS WE SERVE
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
          Trusted by growing retail brands, franchise businesses,
          and emerging D2C companies across India.
        </p>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="marquee flex w-max items-center gap-6">

            {[...clientLogos, ...clientLogos].map((logo, index) => (

              <div
                key={index}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={140}
                  height={70}
                  className="h-auto max-h-12 w-auto object-contain transition duration-300 hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}