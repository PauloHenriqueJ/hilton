import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google'



export const metadata: Metadata = {
  title: "HM Pinturas",
  description: "Pintamos com excelência, transformamos com paixão",
  keywords: ["pintura", "revitalizar", "Serviço pintura", "HM Pinturas, pintura salvador"],
  openGraph: {
    type: "website",
    url: "https://hm-pinturas.vercel.app/",
    title: "HM Pinturas",
    description: "Pintamos com excelência, transformamos com paixão",
    images: [
      {
        url: "https://imgur.com/h3V3ClZ.png",
        width: 800,
        height: 600,
        alt: "Imagem do lar pintado",
      },
      
    ],
  }
};

const font = Montserrat ({
  subsets:['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
