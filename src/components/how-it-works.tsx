"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/data/content";
import {
  Sparkles,
  ListChecks,
  UsersRound,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "list-checks": ListChecks,
  users: UsersRound,
};

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto max-w-6xl rounded-3xl border border-white/5 bg-white/5 px-6 py-16 backdrop-blur-xl md:mt-32 md:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-section)] opacity-60" />
      <SectionHeading
        eyebrow="How it works"
        title="Three simple steps. Endless debate."
        description="Each match follows a quick-fire format that keeps everyone involved—from the first draft to the final vote."
      />
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {howItWorks.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group rounded-3xl border border-white/10 bg-[#141f3f]/80 p-6 shadow-[0_25px_50px_-30px_rgba(8,13,35,0.8)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition group-hover:bg-white/15">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
