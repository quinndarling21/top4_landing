import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works";
import { CommunitySection } from "@/components/community-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-4 pb-24 md:px-8 lg:px-10">
        <Hero />
        <HowItWorks />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
}

function HowItWorks() {
  return <HowItWorksSection />;
}

function Community() {
  return <CommunitySection />;
}

function FAQ() {
  return <FAQSection />;
}
