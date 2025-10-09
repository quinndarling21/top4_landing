import Link from "next/link";
import { footerLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="mx-auto mt-32 max-w-6xl border-t border-white/10 px-4 py-10 text-white/60">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">
            Top 4
          </p>
          <p className="mt-3 text-sm text-white/55">
            © {new Date().getFullYear()} Top 4 Labs. Draft. Debate. Decide.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
