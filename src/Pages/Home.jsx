import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Services from "../components/Services";
import LuxuryExperience from "../components/LuxuryExperience";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Presentation />

      <Services />

      <LuxuryExperience />

      <Process />

      <WhyChooseUs />

      <Testimonials />

      
      <ArticlesSection />
      <CTA />
      <Footer />
    </>
  );
}