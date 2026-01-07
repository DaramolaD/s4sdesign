import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { BackToTop } from "@/components/ui/BackToTop";
import { Analytics } from "@vercel/analytics/next"

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
// });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

export const metadata: Metadata = {
  title: "S4S Design | Sepideh Sayad's Stylish Spaces",
  description: "Modern, elegant, and sophisticated interior design services worldwide. 10+ years of experience in residential and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased text-secondary bg-background`}>
        <Navbar />
        <main className="min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
