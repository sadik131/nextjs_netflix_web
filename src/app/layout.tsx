import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./components/ReduxProvider";
import { AuthProvider } from "./components/Provider";
import SessionWrapper from "@/utils/Wrapper";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main>
          <AuthProvider>
            <ReduxProvider>
              <SessionWrapper />
              <Navbar />
              {children}
            </ReduxProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
