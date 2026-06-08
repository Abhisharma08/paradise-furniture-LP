import type {Metadata} from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { FloatingEnquireButton } from "@/components/FloatingEnquireButton";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

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
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16479245566" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload" dangerouslySetInnerHTML={{
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
        <FloatingEnquireButton />
      </body>
    </html>
  );
}
