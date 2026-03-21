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
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sofa className="h-6 w-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline text-xl font-black tracking-tighter text-primary">
                PARADISE
              </span>
              <span className="font-headline text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                FURNITURE
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Catalogue
          </Link>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 font-bold">
            <Link href="#quote">Get a Quote Now</Link>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-background border-b", isOpen ? "block" : "hidden")}>
        <div className="flex flex-col gap-4 p-4">
          <Link href="#experience" onClick={() => setIsOpen(false)} className="text-base font-medium">
            Experience
          </Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-base font-medium">
            Testimonials
          </Link>
          <Link href="#products" onClick={() => setIsOpen(false)} className="text-base font-medium">
            Catalogue
          </Link>
          <Button asChild className="w-full">
            <Link href="#quote" onClick={() => setIsOpen(false)}>Get a Quote Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}