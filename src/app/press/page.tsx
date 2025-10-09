import type { Metadata } from "next";
import Link from "next/link";
import { pressHighlights } from "@/data/content";

export const metadata: Metadata = {
  title: "Press Kit",
};

export default function PressPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-white/80">
      <h1 className="text-4xl font-semibold text-white">Press Kit</h1>
      <p className="mt-4 text-base text-white/60">
        Covering Top 4? Here&apos;s a quick snapshot of the product, team, and assets.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {pressHighlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/6 p-6 text-sm backdrop-blur">
        <h2 className="text-lg font-semibold text-white">What&apos;s inside the upcoming press kit</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/65">
          <li>App icon in multiple sizes and colorways</li>
          <li>High-resolution product screenshots for phone and tablet</li>
          <li>Launch trailer footage and b-roll</li>
          <li>Brand guidelines with typography and color values</li>
        </ul>
        <p className="mt-4">
          Need something specific? Email{" "}
          <Link className="text-white underline" href="mailto:press@top4.app">
            press@top4.app
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
