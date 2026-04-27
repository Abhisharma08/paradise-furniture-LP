"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-12 xl:px-16">
        <div className="flex min-w-0 items-center">
          <Link href="/" className="group flex min-w-0 items-center gap-2" aria-label="Paradise Furniture home">
            <div className="flex shrink-0 items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_170,h_42,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74.png?_i=AA"
                alt="Paradise Furniture"
                width={150}
                height={54}
                className="h-auto w-32 object-contain sm:w-36 md:w-40"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="shrink-0">
          <Button asChild className="h-11 rounded-md bg-primary px-8 text-sm font-black text-white transition-transform hover:scale-105 hover:bg-primary/90 active:scale-95">
            <Link href="/#quote">Enquire Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
