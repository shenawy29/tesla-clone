import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electric Cars, Solar & Clean Energy | Tesla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="h-[100vh]">{children}</body>
    </html>
  );
}
