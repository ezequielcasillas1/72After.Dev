import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Hero from "@/components/Layout/Hero/Hero";
import ContactForm from "@/components/Layout/ContactForm/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import { mainNav } from "@/data/navigation";

const meta = {
  title: "72After — Contact",
  description: "Start a project with 72After. Tell us what you want to build — we reply within hours, not weeks.",
};

function Contact() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={mainNav} />

      <Hero
        slides={[
          {
            media: "/assets/images/contact/1.webp",
            topText: "Let's Build",
            title: "Start a Project",
            buttonText: "Use the Form",
            buttonLink: "#contact",
          },
        ]}
      />

      <Section id="contact" fluid={true}>
        <ContactForm />
      </Section>

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Contact;
