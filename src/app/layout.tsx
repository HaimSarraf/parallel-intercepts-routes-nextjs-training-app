import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Its Forked From DaveGray's repo @ github/gitdagray ",
  description: "Its a fork from a same project Published by Dave Gray",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {modal}
        {children}
      </body>
    </html>
  );
}
