"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto mt-32 max-w-5xl px-2">
      <SectionHeading
        eyebrow="FAQ"
        title="Quick answers before you start."
        align="center"
      />
      <div className="mt-10 w-full space-y-4">
        {faq.map((item, index) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-[#101730]/85 p-4 text-white/80 shadow-[0_24px_40px_-30px_rgba(5,10,25,0.9)] backdrop-blur"
          >
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-3 text-left text-base font-semibold text-white">
              <span className="flex-1 break-words">{item.question}</span>
              <ChevronDown className="h-5 w-5 text-white/60 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 break-words text-sm text-white/65">
              {item.answer}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
