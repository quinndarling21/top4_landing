import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { faq } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://top4game.com");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Top 4 – Party Ranking Game",
      operatingSystem: "iOS 17.0+",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: "Top 4",
        url: "https://top4game.com",
      },
      sameAs: [
        "https://www.instagram.com/top4_game/",
        "https://www.tiktok.com/@top4_game",
        "https://www.reddit.com/r/Top4Game/",
        "https://discord.gg/crJ9WQ3q",
      ],
      applicationSubCategory: "Party game",
      url: "https://top4game.com",
      image: "https://top4game.com/opengraph-image",
      description:
        "Top 4 is the fast-paced iOS party game where friends draft, debate, and crown outrageous rankings in minutes.",
      featureList: [
        "Draft prompts and custom Top 4 lists",
        "Pass-and-play support for 2-8 players",
        "Offline-friendly party play",
      ],
      author: {
        "@type": "Person",
        name: "Quinn Darling",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Home", item: "https://top4game.com/" },
        { name: "Support", item: "https://top4game.com/support" },
        { name: "Privacy Policy", item: "https://top4game.com/privacy" },
        { name: "Terms of Use", item: "https://top4game.com/terms" },
        { name: "Press Kit", item: "https://top4game.com/press" },
      ].map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Top 4 – Party Ranking Game",
  title: {
    default: "Top 4 Party Game",
    template: "%s · Top 4 Party Game",
  },
  description:
    "Top 4 is the fast-paced iOS party game where friends draft outrageous rankings, debate their picks, and crown a champion in minutes.",
  keywords: [
    "party game app",
    "iOS debate game",
    "ranking game",
    "pass and play party game",
    "top 4 game",
  ],
  category: "games",
  creator: "Quinn Darling",
  publisher: "Top 4",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  other: {
    "apple-itunes-app":
      "app-id=6752107223, app-argument=https://top4game.com/",
    "smartbanner-pinned": "true",
  },
  openGraph: {
    title: "Top 4 Party Game",
    description:
      "Draft outrageous Top 4 lists, debate your friends, and vote for the champion. Available now on iOS.",
    url: "https://top4game.com/",
    locale: "en_US",
    siteName: "Top 4",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Top 4 – Draft. Debate. Decide.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@top4game",
    title: "Top 4 Party Game",
    description:
      "The iOS party game for friends who love to draft and debate outrageous rankings.",
    creator: "@top4game",
    images: ["/opengraph-image"],
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
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/top-4/id6752107223",
      app_store_id: "6752107223",
    },
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
