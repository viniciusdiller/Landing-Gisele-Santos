import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gisele S. Andrade | Corretora e Consultora Imobiliária em Saquarema",
  description: "Curadoria de imóveis de alto padrão e oportunidades exclusivas em Saquarema e Região dos Lagos. Casas em Itaúna, Gravatá, Vilatur e Beira-Lagoa. CRECI RJ 81717.",
  openGraph: {
    title: "Gisele S. Andrade | Imóveis em Saquarema",
    description: "Curadoria imobiliária pessoal e transparente. CRECI RJ 81717.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        {/* Clash Display Webfont from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAFAF8] text-[#0D161F] antialiased selection:bg-[#0E7058] selection:text-white">
        {children}
      </body>
    </html>
  );
}
