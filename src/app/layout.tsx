import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phantom Thieves Website",
  description: "Website for the Phantom Thieves of Hearts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
