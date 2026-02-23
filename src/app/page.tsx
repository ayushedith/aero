import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Architecture } from "@/components/landing/Architecture";
import { TerminalDemo } from "@/components/landing/TerminalDemo";
import { CTA } from "@/components/landing/CTA";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnderConstructionModal } from "@/components/landing/UnderConstructionModal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <UnderConstructionModal />
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <TerminalDemo />
      <CTA />
      <Footer />
    </main>
  );
}
