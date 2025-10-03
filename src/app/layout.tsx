import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adebisi Model School",
  description: "Adebisi Model School Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}