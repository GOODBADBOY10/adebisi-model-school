import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adebisi Model School",
  description: "Adebisi Model School Website",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header will always be at the top */}
        <Header />

        {/* Main page content */}
        <main className="flex-1">{children}</main>

        {/* Footer will always be at the bottom */}
        <Footer />
      </body>
    </html>
  );
}