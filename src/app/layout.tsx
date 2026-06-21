import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jardín & Doux | Bistro J&D — Las Rozas, Madrid",
  description:
    "Bistro Jardín & Doux (J&D) — Café, Bar y Restaurante en Las Rozas, Madrid. Cocina paraguaya y argentina auténtica, desayunos, tapas, copas y menú vegano y sin gluten.",
  keywords: [
    "bistro las rozas",
    "restaurante las rozas madrid",
    "cocina paraguaya madrid",
    "cocina argentina madrid",
    "cafe las rozas",
    "jardin doux",
    "bistro jd",
    "vegano las rozas",
    "sin gluten madrid",
    "desayunos las rozas",
  ],
  openGraph: {
    title: "Jardín & Doux | Bistro J&D — Las Rozas, Madrid",
    description: "Café, Bar y Restaurante en Las Rozas, Madrid. Cocina paraguaya y argentina, desayunos y copas frente al parque.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect para Google Fonts — mejora LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect para Google Maps */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
