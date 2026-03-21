"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sofa } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Sofa className="h-6 w-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline text-xl font-black tracking-tighter text-primary">
                PARADISE
              </span>
              <span className="font-headline text-[10px] font-bold tracking-[0.2em] text-secondary-foreground/60 uppercase">
                FURNITURE
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="#experience" className="text-sm font-bold hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#products" className="text-sm font-bold hover:text-primary transition-colors">
            Product Series
          </Link>
          <Link href="#testimonials" className="text-sm font-bold hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#quote" className="text-sm font-bold hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 font-bold px-8 h-11 rounded-lg">
            <Link href="#quote">Enquire Now</Link>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-background border-b animate-in slide-in-from-top duration-300", isOpen ? "block" : "hidden")}>
        <div className="flex flex-col gap-4 p-6">
          <Link href="#experience" onClick={() => setIsOpen(false)} className="text-base font-bold">
            Experience
          </Link>
          <Link href="#products" onClick={() => setIsOpen(false)} className="text-base font-bold">
            Product Series
          </Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-base font-bold">
            Testimonials
          </Link>
          <Link href="#quote" onClick={() => setIsOpen(false)} className="text-base font-bold">
            Contact Us
          </Link>
          <Button asChild className="w-full bg-primary h-12 font-bold">
            <Link href="#quote" onClick={() => setIsOpen(false)}>Enquire Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
