
import { Sofa, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Sofa className="h-6 w-6" />
              </div>
              <span className="font-headline text-xl font-bold tracking-tight text-white">
                PARADISE <span className="opacity-70">FURNISHINGS</span>
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              The leading authorized dealer of Paradise Furniture in Varanasi. We specialize in ergonomic office seating and innovative furniture solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link href="#" className="hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Product Series</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Sigra Road, Varanasi, Uttar Pradesh - 221010</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@paradisefurnishings.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-xs opacity-50">
          <p>© {new Date().getFullYear()} Paradise Furnishings Varanasi. All Rights Reserved. Authorized Dealer.</p>
        </div>
      </div>
    </footer>
  );
}
