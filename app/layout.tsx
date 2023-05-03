import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeGee",
  description: "Pokedex created by Gian Denorte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Providers> */}
      <body className={inter.className}>{children}</body>
      {/* </Providers> */}
    </html>
  );
}
