import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductContextProvider } from "@/context/ProductContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Store",
  description: "Next.js Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductContextProvider>
          <Navbar />
          {children}
        </ProductContextProvider>
      </body>
    </html>
  );
}
