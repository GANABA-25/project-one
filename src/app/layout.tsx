import type { Metadata } from "next";
import Footer from "@/components/homeItems/Footer";
import NavBar from "@/components/navigations/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Siriboe Institute of Agribusiness and Skills Development",
    template: "%s | SIASD",
  },
  description: "Obi nnim a, obi kyere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      
      <body className="montserrat-bold">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
