import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support · Top 4 Party Game",
  description:
    "Need help with the Top 4 party game? Reach our team for bug reports, account questions, and general support.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Top 4 Support",
    description:
      "Find the fastest way to contact the Top 4 team for troubleshooting, feedback, or privacy questions.",
    url: "https://top4game.com/support",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Top 4 party game hero artwork",
      },
    ],
  },
  twitter: {
    title: "Top 4 Support",
    description:
      "Email the Top 4 team for help with the party game, feature requests, or bug reports.",
    card: "summary",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const supportChannels = [
  {
    title: "Email support",
    description: "Need help or found a bug? Email us anytime at support@top4game.com.",
    href: "mailto:support@top4game.com",
    actionLabel: "Email support",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white/80">
      <h1 className="text-4xl font-semibold text-white">Support</h1>
      <p className="mt-4 text-base text-white/60">
        We&apos;re here to keep your game nights running smoothly. Choose the best way to reach us below.
      </p>
      <section className="mt-10 grid gap-6">
        {supportChannels.map((channel) => (
          <div
            key={channel.title}
            className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-white">{channel.title}</h2>
            <p className="mt-3 text-sm">{channel.description}</p>
            {channel.href ? (
              <Link
                href={channel.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-white underline"
              >
                {channel.actionLabel}
              </Link>
            ) : null}
          </div>
        ))}
      </section>
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm backdrop-blur">
        <h2 className="text-lg font-semibold text-white">
          Looking for the privacy policy?
        </h2>
        <p className="mt-2">
          You can find it <Link href="/privacy" className="text-white underline">
            here
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
