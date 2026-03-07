import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Prashant | Professional Nutritionist",
  description: "Expert nutrition advice, wellness guidance, and personalized diet plans by Dr. Prashant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="grow">{children}</main>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
