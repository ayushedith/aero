import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const atlasSans = Space_Grotesk({
  variable: "--font-atlas-sans",
  subsets: ["latin"],
  display: "swap",
});

const atlasMono = IBM_Plex_Mono({
  variable: "--font-atlas-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AERO | Serverless Cloud Infrastructure Monitor",
  description:
    "A focused, serverless dashboard for AWS telemetry. Monitor compute, storage, and cost signals with clarity and speed.",
  keywords: [
    "AWS",
    "cloud monitoring",
    "serverless",
    "EC2",
    "S3",
    "dashboard",
    "infrastructure",
    "observability",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atlasSans.variable} ${atlasMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
