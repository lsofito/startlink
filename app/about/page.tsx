import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import ObjectiveGoal from "@/components/about/ObjectiveGoal";
import Features from "@/components/about/Features";
import Expertise from "@/components/about/Expertise";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Achievements from "@/components/about/Achievements";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "STARLINK Business Setup - 20+ years of experience helping entrepreneurs establish successful businesses in the UAE. Streamlined business solutions tailored to your goals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Empowering businesses to build, grow, and succeed with confidence"
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />
      <OurStory />
      <ObjectiveGoal />
      <Features />
      <Expertise />
      <Values />
      <Team />
      <Achievements />
      <CTABanner />
    </>
  );
}
