import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Hero from "@/components/Layout/Hero/Hero";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import Info from "@/components/Layout/Info/Info";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Highlight from "@/components/Layout/Highlight/Highlight";
import Footer from "@/components/Layout/Footer/Footer";
import Team from "@/components/Layout/Team/Team";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";

import { mainNav } from "@/data/navigation";

const meta = {
  title: "72After — About",
  description: "Meet 72After: an AI vibe coding team compressing the distance between idea and production software.",
};

function About() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={mainNav} />

      <Hero
        slides={[
          {
            media: "/assets/images/about/1.webp",
            topText: "",
            title: "We Are 72After",
            buttonText: "What We Do",
            buttonLink: "#services",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          brandPanel={true}
          number="01"
          topTitle="Our Mission"
          title="Live Beyond Time"
          description="Software used to take quarters. Now it takes conversations. 72After exists to compress the distance between idea and product — an AI-native team that ships while others are still planning."
          ctaLabel="Start a project"
          contactText="Email us at hello@72after.dev"
          contactLink="mailto:hello@72after.dev"
        />

        <Separator />

        <Testimonials
          media="https://www.11-76.com/html5-videos-22/luxex/luxex.mp4"
          testimonials={[
            "Taste is the moat. Models are the engine.",
            "Ship small, ship daily, ship always.",
            "Every line reviewed. Every slice vertical.",
            "The best code is the code already in production.",
          ]}
        />
      </Section>

      <Section id="services" background="var(--color-background-primary)" fluid={true}>
        <Info number="02" topTitle="What We" title="Do" />

        <Highlight
          background="var(--color-background-secondary)"
          slides={[
            {
              image: "/assets/images/about/services/1.webp",
              title: "AI App Development",
              timeOpen: "Core Service",
              description: "From copilots to full agentic systems — we build software where AI is the engine, not a feature.",
            },
            {
              image: "/assets/images/about/services/2.webp",
              title: "Web Platforms",
              timeOpen: "Core Service",
              description: "React, Vite, Next.js — modern stacks, edge-deployed, fast by default.",
            },
            {
              image: "/assets/images/about/services/3.webp",
              title: "Design Engineering",
              timeOpen: "Core Service",
              description: "Brand systems, design tokens, and interfaces that feel alive on every screen.",
            },
            {
              image: "/assets/images/about/services/4.webp",
              title: "DevOps & Delivery",
              timeOpen: "Core Service",
              description: "CI/CD, preview environments, and observability wired in from the first commit.",
            },
          ]}
        />

        <Separator />
      </Section>

      <Section id="team" background="var(--color-background-secondary)" fluid={true}>
        <Info number="03" topTitle="Meet The" title="Team" />
        <Team />
        <Separator />
      </Section>

      <Footer />

      <ToTopArrow />
      <VerticalLines />
    </>
  );
}

export default About;
