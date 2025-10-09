import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

const sections = [
  {
    title: "Acceptance of terms",
    body:
      "By downloading or using Top 4 you agree to these Terms of Use. If you are under 13, you may not use the app. If you are between 13 and 18, you must have parental permission.",
  },
  {
    title: "User conduct",
    body:
      "You agree not to use Top 4 for unlawful purposes, to harass other players, or to share content that violates the rights of others. We reserve the right to suspend access for violations.",
  },
  {
    title: "Purchases & subscriptions",
    body:
      "Optional premium packs or subscriptions are billed through Apple. Prices are subject to change with notice. Apple handles payment processing and refund requests.",
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
        Effective {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
