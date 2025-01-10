import { Inter } from "next/font/google";
import "./globals.css";
import Contact from "@/components/Contact";
import Mail from "@/components/Mail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Erfan Akbari",
  description: "This page is Akbari's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-800 text-slate-300 relative`}
        suppressHydrationWarning={true}
      >
        <Contact />
        <Mail />
        {children}
      </body>
    </html>
  );
}
