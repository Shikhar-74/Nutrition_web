import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Prashant | Premium Nutrition & Wellness",
  description: "Transform your health with personalized nutrition plans and expert guidance tailored to your unique lifestyle by Dr. Prashant.",
  keywords: ["Nutritionist", "Dietitian", "Weight Loss", "PCOS Diet", "Diabetes Management", "Healthy Lifestyle"],
  openGraph: {
    title: "Dr. Prashant | Premium Nutrition & Wellness",
    description: "Expert nutrition advice, wellness guidance, and personalized diet plans by Dr. Prashant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <SmoothScrollProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <WhatsAppFloatingButton />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
