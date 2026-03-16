import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIT Chess Club | Harbin Institute of Technology",
  description: "Welcome to the premier chess community at Harbin Institute of Technology. Join us for tournaments, casual play, and instruction from grandmasters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground`}>
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
