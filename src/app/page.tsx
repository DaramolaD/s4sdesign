import { Hero } from "@/components/sections/Hero";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { TransformationsCarousel } from "@/components/sections/TransformationsCarousel";
import { RenovationServices } from "@/components/sections/RenovationServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { AwardsSection } from "@/components/sections/AwardsSection";
// import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutNarrative />
      <AwardsSection />
      <RenovationServices />
      <TransformationsCarousel />
      <Testimonials />
      <FAQ />
      <QuoteSection />
      <InstagramFeed />
      {/* <ContactCTA /> */}
    </>
  );
}
