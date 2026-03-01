import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Psicoclub | Psicología infantil y orientación a padres",
  description:
    "Acompañamiento psicológico para niños, niñas y familias. Terapia infantil, orientación a padres y evaluaciones con un enfoque cálido y profesional.",
  icons: {
    icon: "/icons/logoPsicoclub.jpg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen w-full flex-col py-6">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

