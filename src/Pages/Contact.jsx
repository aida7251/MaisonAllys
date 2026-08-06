import HeroContact from "../components/contact/HeroContact";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";
// import FAQContact from "../components/contact/FAQContact";
// import CTAContact from "../components/contact/CTAContact";

export default function Contact() {
  return (
    <>
      <HeroContact />
      <ContactInfo />
      <ContactForm />
      <ArticlesSection />
      <Footer />
      {/* <FAQContact />
      <CTAContact /> */}
    </>
  );
}