"use client"
import * as React from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

import {NextUIProvider} from "@nextui-org/react";
/**
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exhibition App",
  description: "Exhibition App",
};
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /**className={inter.className}*/>
        <NextUIProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
        </NextUIProvider>  
      </body>
    </html>
  );
}
