import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import { Tracking } from "./components/Tracking";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Targetologist, Ads and Automation That Turn Leads Into Booked Calls",
  description:
    "We run your ads on Meta, Google, LinkedIn and other social platforms, and build the CRM and follow-up automation behind them. Book a free strategy call.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
