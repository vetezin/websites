import type { Metadata, Viewport } from "next";
import { assetPath } from "@/data/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conveniência Zero18 | Presidente Prudente",
  description: "Bebidas, cervejas, gin e copão na Conveniência Zero18. Visite a Rua Júlio Peruche, 474, Jardim Maracanã, Presidente Prudente – SP.",
  openGraph: {
    title: "Conveniência Zero18 | Sua parada antes do rolê",
    description: "Sua conveniência no Jardim Maracanã, em Presidente Prudente. Conheça a Zero18 e saiba como chegar.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: assetPath("/zero18/logo-zero18.png"), apple: assetPath("/zero18/logo-zero18.png") },
};

export const viewport: Viewport = { themeColor: "#0b0c0c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
