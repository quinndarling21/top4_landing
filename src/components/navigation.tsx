"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ui/button-link";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#community", label: "Community" },
  { href: "#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-4 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/5 bg-white/5 px-6 py-3 backdrop-blur-lg">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white/10 p-1 shadow-[0_12px_24px_rgba(12,20,45,0.55)] transition group-hover:bg-white/15">
            <Image
              src="/top4_3d.png"
              alt="Top 4 logo"
              width={80}
              height={80}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center gap-3">
          <ButtonLink
            href="https://apps.apple.com/"
            variant="primary"
            size="sm"
            ariaLabel="Download Top 4 on the App Store"
          >
            Get the app
          </ButtonLink>
        </div>
      </nav>
    </motion.header>
  );
}
