import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " E-Com Store",
  description: "Next Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
