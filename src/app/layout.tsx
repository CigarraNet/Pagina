import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Cigarra.Net",
  description: "Cigarra.Net un inventario bien echo habla bien de tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${prompt.className}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
