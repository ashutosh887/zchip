import { appDescription, appName } from "@/config/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "greek"],
});

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
