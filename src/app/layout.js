import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductContextProvider } from "@/context/ProductContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className='flex flex-col min-h-screen'>
        <ProductContextProvider className="bg-sky-100 flex flex-col flex-1">
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </ProductContextProvider>
      </body>
    </html>
  );
}
