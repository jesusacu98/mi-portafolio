import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesús Vizcarra - Desarrollador Fullstack Senior",
  description: "Desarrollador Fullstack Senior especializado en construir sistemas escalables y aplicaciones de alto rendimiento.",
  keywords: ["Jesús Vizcarra", "Desarrollador Fullstack", "Ingeniero de Software", "Desarrollador Senior", "Node.js", "Microservicios", "Cloud"],
  openGraph: {
    title: "Jesús Vizcarra - Desarrollador Fullstack Senior",
    description: "Desarrollador Fullstack Senior especializado en construir sistemas escalables y aplicaciones de alto rendimiento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-white/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
