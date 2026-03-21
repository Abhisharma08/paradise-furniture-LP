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
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Sofa className="h-6 w-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline text-xl font-black tracking-tighter text-primary italic">
                PARADISE
              </span>
              <span className="font-headline text-[9px] font-bold tracking-[0.2em] text-foreground/40 uppercase">
                FURNITURE
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="#experience" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#products" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#why-us" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
            Why Us
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-black px-8 h-11 rounded-md text-sm transition-transform hover:scale-105 active:scale-95">
            <Link href="#quote">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
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
            Products
          </Link>
          <Link href="#why-us" onClick={() => setIsOpen(false)} className="text-base font-bold">
            Why Us
          </Link>
          <Button asChild className="w-full bg-primary h-12 font-bold text-white">
            <Link href="#quote" onClick={() => setIsOpen(false)}>Enquire Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
