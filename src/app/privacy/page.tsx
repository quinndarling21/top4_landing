import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white/80">
      <h1 className="text-4xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-white/60">
        Last updated {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
      <section className="mt-10 space-y-8 text-sm leading-7">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">1. Information we collect</h2>
          <p className="mt-3">
            We collect the minimum data required to run Top 4, including account
            details you provide, diagnostics that help improve the game, and
            usage analytics so we can understand how players interact with
            features. Sensitive personal information is never required to play.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">2. How we use data</h2>
          <p className="mt-3">
            Player data helps us maintain performance, detect abuse, send
            product updates you opt into, and personalize category
            recommendations. We never sell your personal information and only
            share data with vetted processors that enable core functionality.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">3. Contact</h2>
          <p className="mt-3">
            Questions about this policy? Reach out to{" "}
            <Link className="text-white underline" href="mailto:support@top4.app">
              support@top4.app
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
