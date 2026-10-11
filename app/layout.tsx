import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOIR / Independent Digital Studio",
  description: "Experimental digital studio designing memorable brand experiences.",
  openGraph: {
    title: "NOIR — Digital experiences, differently.",
    description: "Independent digital studio. Design, interaction, and technology.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
