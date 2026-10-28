import type { Metadata } from "next";
import "@fontsource-variable/lora";
import "@fontsource-variable/inter";
import "./globals.css";
import { organization } from "@/data/site";

export const metadata: Metadata = {
  title: `${organization.name} | A Caring Home for a Happier Tomorrow`,
  description: organization.heroText,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
