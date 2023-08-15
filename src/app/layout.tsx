import OffCanvas from "@/components/ui/offcanvas/offcanvas";

import "bootstrap-icons/font/bootstrap-icons.css";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Providers } from "@/redux/providers";

import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neweet",
  description: "(Twitter Clone Built by Hosein Sedaqat 2023)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-bs-theme='dark'>
      <body className={inter.className}>
        <Providers>
          <OffCanvas />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
