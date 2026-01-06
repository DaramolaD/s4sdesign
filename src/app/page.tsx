import { Hero } from "@/components/sections/Hero";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { TransformationsCarousel } from "@/components/sections/TransformationsCarousel";
import { RenovationServices } from "@/components/sections/RenovationServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { VideoSection } from "@/components/sections/VideoSection";
// import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection videoId={1} />
      <AboutNarrative />
      <AwardsSection />
      {/* <VideoSection videoId={2} /> */}
      <TransformationsCarousel />
      <RenovationServices />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <QuoteSection />
      {/* <ContactCTA /> */}
    </>
  );
}
