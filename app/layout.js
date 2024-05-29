"use client";

import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopUpForm from "@/components/ui/PopUpForm";
import RealWidget from "@/components/Widget";
import "./loading.js";

const playfair = Libre_Franklin({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const metadata = {
  title: "Blue Horizon Exteriors",
  description: "Protecting your home. Elevating your view.",
  url: "https://www.bluehorizonexteriors.com",
  image: "/opengraph-image.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <title>{metadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metadata.description} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:title" content="Blue Horizon Exteriors" />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.url} />
      <body>
        <Navbar />
        <RealWidget />
        <main>{children}</main>
        <PopUpForm />
        <Footer />
      </body>
    </html>
  );
}
