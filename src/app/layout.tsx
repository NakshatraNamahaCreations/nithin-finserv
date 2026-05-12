import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-playfair" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Nithin Finserv | AMFI Registered Mutual Fund Distributor Bengaluru | SIP ELSS Insurance",
  description:
    "Nithin Finserv — AMFI Registered MFD in Bengaluru. Start SIP from ₹500, invest in ELSS, get free portfolio review. 40+ AMC partners. ARN: 307760.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
