import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'School Portal',
  description: 'Student and admin management system',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
  // return (
  //   <html lang="en">
  //     <body className="flex flex-col min-h-screen">
  //       {/* Header will always be at the top */}
  //       <Header />

  //       {/* Main page content */}
  //       <main className="flex-1">{children}</main>

  //       {/* Footer will always be at the bottom */}
  //       <Footer />
  //     </body>
  //   </html>
  // );
}