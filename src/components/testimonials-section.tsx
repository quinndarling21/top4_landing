"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section id="social-proof" className="mx-auto mt-32 max-w-6xl px-2">
      <SectionHeading
        eyebrow="Player love"
        title="Party-tested by game night regulars."
        description="Field-tested with trivia hosts, family reunions, and road-trip crews. Here’s what they keep telling us."
        align="center"
      />
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/7 p-8 shadow-[0_30px_60px_-35px_rgba(5,10,28,0.9)] backdrop-blur-xl"
          >
            <Quote className="absolute -top-6 -left-2 h-16 w-16 text-white/10" />
            <p className="text-lg text-white/80">{testimonial.quote}</p>
            <footer className="mt-8">
              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {testimonial.tag}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
