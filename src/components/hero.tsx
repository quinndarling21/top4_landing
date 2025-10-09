"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { heroContent } from "@/data/content";
import { ButtonLink } from "./ui/button-link";

const phoneGradient =
  "bg-[radial-gradient(circle_at_80%_20%,rgba(255,168,75,0.6),transparent_55%),radial-gradient(circle_at_30%_20%,rgba(255,45,146,0.85),transparent_50%),radial-gradient(circle_at_50%_120%,rgba(22,201,255,0.55),transparent_60%)]";

const mockPlayers = [
  {
    name: "Q",
    status: "Drafting now",
    accent: "from-[#ff2d92] to-[#ffa84b]",
    badge: "bg-[#16c9ff]",
    picks: [
      "Battle goose with anger issues",
      "Honey badger of pure hatred",
      "Octopus of mass deception",
      "Sloth of strategic inaction",
    ],
  },
];

export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-12 pt-10 md:flex-row md:items-center md:pt-0">
      <MotionGlow />
      <div className="relative z-10 flex-1">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          {heroContent.badge}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="mt-6 w-full max-w-[360px]"
        >
          <Image
            src="/top4_3d.png"
            alt="Top 4 logo"
            width={360}
            height={220}
            className="h-auto w-full object-contain drop-shadow-[0_12px_40px_rgba(22,201,255,0.35)]"
            priority
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 max-w-xl text-lg text-white/70 md:text-xl"
        >
          {heroContent.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <ButtonLink href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={heroContent.secondaryCta.href}
            variant="secondary"
            showArrow
          >
            {heroContent.secondaryCta.label}
          </ButtonLink>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 grid max-w-lg grid-cols-2 gap-6 text-sm text-white/70 sm:grid-cols-3"
        >
          {heroContent.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
            >
              <dt className="text-2xl font-semibold text-white">
                {metric.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-white/60">
                {metric.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-1 justify-center md:justify-end"
      >
        <div className="relative h-[540px] w-[270px] shrink-0 rounded-[42px] border border-white/20 bg-[rgba(16,26,52,0.85)] p-3 shadow-[0_30px_60px_-30px_rgba(22,201,255,0.4)] backdrop-blur-3xl md:h-[580px] md:w-[290px]">
          <div className="absolute inset-x-12 top-4 h-[26px] rounded-full bg-white/10" />
          <div
            className={`relative mt-12 flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1634] ${phoneGradient}`}
          >
            <div className="flex items-center justify-between px-6 pt-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/55">
            </div>
            <div className="px-6 pt-4">
              <div className="rounded-3xl border border-white/15 bg-white/12 p-5 text-left text-white shadow-[0_20px_48px_rgba(8,12,40,0.45)] backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/55">
                  Draft progress
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Animals to go into war with
                </h3>
                <div className="mt-4 h-2 rounded-full bg-white/15">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#16c9ff] via-[#ffa84b] to-[#ff2d92]" />
                </div>
                <p className="mt-4 text-xs text-white/70">Pick 5 of 8</p>
              </div>
            </div>
            <div className="mt-5 flex-1 space-y-4 overflow-hidden px-6 pb-8">
              {mockPlayers.map((player, index) => {
                const isActive = index === 0;
                return (
                  <div
                    key={player.name}
                    className={clsx(
                      "rounded-3xl border px-4 py-5 text-white/80 shadow-[0_26px_46px_-34px_rgba(8,12,32,0.85)] backdrop-blur transition",
                      isActive
                        ? "border-white/20 bg-white/20"
                        : "border-white/12 bg-white/10",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-[#04091c]",
                            player.badge,
                          )}
                        >
                          {player.name}
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                            {player.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm">
                      {player.picks.map((pick, slot) => (
                        <li
                          key={`${player.name}-${pick}`}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-[11px] text-white/65">
                            {slot + 1}
                          </span>
                          <span className="flex-1 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/80">
                            {pick}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <div className="rounded-3xl border border-white/10 bg-white/8 p-4 text-sm text-white/70 shadow-[0_20px_40px_-32px_rgba(8,12,34,0.8)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Pick queue
                </p>
                <p className="mt-3 text-xs text-white/65">
                  Enter your pick… something that says “strategic chaos.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MotionGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
    >
      <div className="h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.35),rgba(4,9,28,0))] blur-3xl" />
    </motion.div>
  );
}
