"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, LucideIcon } from "lucide-react";
import { socialLinks } from "@/data/content";
import { ButtonLink } from "./ui/button-link";
import { SectionHeading } from "./section-heading";

const socialIcons: Record<string, LucideIcon> = {
  Threads: MessageCircle,
};

const customIcons: Record<string, string> = {
  TikTok: "/TikTok_Icon_Black_Circle.png",
  Reddit: "/Reddit_Icon_2Color.svg",
  Discord: "/Discord-Symbol-White.svg",
  Instagram: "/Instagram_Glyph_Gradient.svg",
};

export function CommunitySection() {
  return (
    <section
      id="community"
      className="mx-auto mt-32 max-w-6xl rounded-3xl border border-white/5 bg-gradient-to-br from-white/8 via-white/5 to-white/10 px-6 py-16 backdrop-blur-2xl md:px-12"
    >
      <SectionHeading
        eyebrow="Stay in the loop"
        title="Keep up with the Top 4 crew."
        description="Watch hilarious drafts, share your best moments and get the latest updates."
      />
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid gap-4 sm:grid-cols-2"
      >
        {socialLinks.map((social) => {
          const iconSrc = customIcons[social.label];
          const Icon = socialIcons[social.label] ?? MessageCircle;
          const ctaLabel = social.cta ?? "Follow";
          return (
            <li
              key={social.label}
              className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/8 px-5 py-4 text-sm text-white/75 shadow-[0_25px_40px_-35px_rgba(6,10,30,0.85)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white/12 text-white">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={`${social.label} logo`}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </span>
                <div>
                  <p className="font-semibold text-white">{social.label}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {social.handle}
                  </p>
                </div>
              </div>
              <ButtonLink
                href={social.href}
                variant="ghost"
                size="sm"
                showArrow
              >
                {ctaLabel}
              </ButtonLink>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}
