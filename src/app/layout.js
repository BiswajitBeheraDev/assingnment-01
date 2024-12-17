"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { HighContrastProvider } from "./Highconstract_toogle/layoutt";
import HighContrastToggle from "./Highconstract_toogle/page";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <HighContrastProvider>
          {pathname !== "/" && <HighContrastToggle />}
          {children}
        </HighContrastProvider>
      </body>
    </html>
  );
}
