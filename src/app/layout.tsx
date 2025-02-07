import type { Metadata } from "next";
import { Orbitron } from 'next/font/google';
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  variable: '--font-orbitron' 
});
const roboto = Roboto({
   subsets: ['latin'], 
   variable: '--font-roboto',
   weight:"400"
   });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${roboto.variable} 
        antialiased font-mono font-medium text-zinc-800`}
      >

        <main>
          <Header/>
          {children}
          <Footer/>
        </main>
        
      </body>
    </html>
  );
}
