import type { Metadata } from "next";
import { Geist, Geist_Mono, Luckiest_Guy } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const luckiest_Guy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

export const metadata: Metadata = {
  title: "EZEmail",
  description: "Generate Email/learn with Proffetional tone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <UserProvider>
        <body
          className={`${geistSans.variable} ${luckiest_Guy.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
