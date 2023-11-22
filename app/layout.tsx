import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Learning",
  description: "Deep Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>

        <div className="flex">
          <Sidebar />
          <main className="relative overflow-hidden main">{children}</main>
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
