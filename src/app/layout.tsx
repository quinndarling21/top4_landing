import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top 4",
    template: "%s · Top 4",
  },
  description:
    "Top 4 turns any hangout into a high-energy showdown. Draft categories, debate your picks, and vote for the best list. Download for iOS.",
  metadataBase: new URL("https://top4.app"),
  openGraph: {
    title: "Top 4",
    description:
      "Build outrageous Top 4 lists with friends, pitch your picks, and vote for the champion. Available now on iOS.",
    url: "https://top4.app",
    siteName: "Top 4",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Top 4 app hero artwork",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 4",
    description:
      "The party game for friends who love to debate rankings. Grab it on iOS.",
    creator: "@top4game",
  },
  icons: {
    icon: [
      { url: "/top4-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/top4-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/top4-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: {
      url: "/top4-apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/top4-icon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
