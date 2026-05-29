import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingEnquireButton } from "@/components/FloatingEnquireButton";

export const metadata: Metadata = {
  title: "Unmatched Comfort with Paradise Office Chairs",
  description:
    "Explore Paradise Furniture's wide range of certified ergonomic office chairs. Experience superior comfort and support for your workspace.",
  keywords: [
    "ergonomic chairs",
    "office furniture",
    "paradise",
    "comfort",
    "certified quality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Google Tag Manager */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16479245566" />
        <Script id="google-analytics" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16479245566');
          `,
        }} />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
        <Toaster />
        <FloatingEnquireButton />
      </body>
    </html>
  );
}
