import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import { preconnect } from "react-dom";
import { Tracking } from "./components/Tracking";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Targetologist, Turn Paid Ads Into Qualified Leads & Booked Calls",
  description:
    "We manage Google, Meta and LinkedIn advertising for US businesses, from campaign strategy and tracking to ongoing optimization. Book a call.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Open the connection to Calendly early, so the hero calendar starts
  // loading as soon as the booking card asks for it.
  preconnect("https://calendly.com");
  preconnect("https://assets.calendly.com");

  return (
    <html lang="en" className={`${fredoka.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
