import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/providers/Toast-provider";
import ModalProvider from "@/providers/Modal-provider";

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
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
