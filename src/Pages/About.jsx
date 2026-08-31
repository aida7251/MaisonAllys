import HeroAbout from "../components/about/HeroAbout";
import StorySection from "../components/about/StorySection";
import VisionSection from "../components/about/VisionSection";
import ValuesSection from "../components/about/ValuesSection";
import ExperienceSection from "../components/about/ExperienceSection";
import CommitmentsSection from "../components/about/CommitmentsSection";
import CTAAbout from "../components/about/CTAAbout";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <HeroAbout />

      <StorySection />

      {/* <VisionSection />

      <ValuesSection /> */}

      <ExperienceSection />

      <CommitmentsSection />

      <CTAAbout />
      <ArticlesSection />
      <Footer />
    </>
  );
}