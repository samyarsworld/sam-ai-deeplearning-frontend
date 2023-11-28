import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

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
          <main className="flexCenter flex-col flex-1 overflow-hidden p-10 mr-[110px]">
            {children}
          </main>
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
