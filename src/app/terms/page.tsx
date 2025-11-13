import type { Metadata } from "next";

const TERMS_EFFECTIVE_DATE = "January 15, 2025";

export const metadata: Metadata = {
  title: "Terms of Use · Top 4 Party Game",
  description:
    "Review the official Top 4 Terms of Use covering player conduct, service changes, and how to reach the team for legal questions.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Top 4 Terms of Use",
    description:
      "Understand the rules for playing Top 4, including acceptable use, service updates, and contacts.",
    url: "https://top4game.com/terms",
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
    title: "Top 4 Terms of Use",
    description:
      "Read the Terms of Use for the Top 4 party game, including conduct guidelines and contact info.",
    card: "summary",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "Acceptance of terms",
    body:
      "By downloading or using Top 4 you agree to these Terms of Use.",
  },
  {
    title: "User conduct",
    body:
      "You agree not to use Top 4 for unlawful purposes, to harass other players, or to share content that violates the rights of others. We reserve the right to suspend access for violations.",
  },
  {
    title: "Changes to the service",
    body:
      "We may update, pause, or discontinue features. We will communicate material changes via in-app notices or email when possible.",
  },
  {
    title: "Limitation of liability",
    body:
      "Top 4 is provided \"as is\" without warranties of any kind. Our liability is limited to the fullest extent permitted by law.",
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white/80">
      <h1 className="text-4xl font-semibold text-white">Terms of Use</h1>
      <p className="mt-4 text-sm text-white/60">
        Effective {TERMS_EFFECTIVE_DATE}
      </p>
      <div className="mt-10 space-y-6 text-sm leading-7">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3">{section.body}</p>
          </section>
        ))}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3">
            Questions about these terms? Email{" "}
            <a className="text-white underline" href="mailto:legal@top4.app">
              legal@top4.app
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
