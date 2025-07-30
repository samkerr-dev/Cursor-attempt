import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hipages: Australia's Largest Online Tradie Marketplace",
  description: "Connect with trusted tradies. Get quotes for home improvement, renovations, and repairs. Australia's #1 platform with 33,000+ professional tradies.",
  keywords: "tradies, home improvement, renovations, quotes, Australia, electrician, plumber, painter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
