import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MatrixVisual } from "@/components/sections/MatrixVisual";
import { Features } from "@/components/sections/Features";
import { UXHighlights } from "@/components/sections/UXHighlights";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MatrixVisual />
      <Features />
      <UXHighlights />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
