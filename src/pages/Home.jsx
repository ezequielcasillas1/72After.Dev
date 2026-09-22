import ImageGallery from "@/components/Galleries/ImageGallery/ImageGallery";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Info from "@/components/Layout/Info/Info";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Hero from "@/components/Layout/Hero/Hero";
import Highlight from "@/components/Layout/Highlight/Highlight";
import Footer from "@/components/Layout/Footer/Footer";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import ContactCard from "@/components/Layout/ContactCard/ContactCard";

import { mainNav } from "@/data/navigation";

const meta = {
  title: "72After — AI Vibe Coding Team",
  description: "72After is an AI-native vibe coding team. We design, build, and ship production software at the speed of thought — live beyond time.",
};

function Home() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={mainNav} />

      <Hero
        slides={[
          {
            media: "/assets/images/background/hero-bg-1.webp",
            title: "Ship at the Speed of Thought",
            buttonText: "See Our Work",
            buttonLink: "/gallery",
          },
          {
            media: "https://www.11-76.com/html5-videos-22/luxex/luxex.mp4",
            title: "An AI-Native Coding Team",
            buttonText: "How We Work",
            buttonLink: "#process",
          },
          {
            media: "/assets/images/background/hero-bg-4.webp",
            title: "From Prompt to Production",
            buttonText: "Start a Project",
            buttonLink: "/contact",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          brandPanel={true}
          number="01"
          topTitle="Who We Are"
          title="72After"
          description="72After is an AI vibe coding team. We pair senior engineering taste with frontier AI models to design, build, and ship software in days — not months. The clock never stops, and neither do we."
          ctaLabel="Start a project"
          contactText="Email us at hello@72after.dev"
          contactLink="mailto:hello@72after.dev"
        />

        <Separator />

        <Testimonials
          media="https://www.11-76.com/html5-videos-22/luxex/luxex.mp4"
          testimonials={[
            "72After turned a rough idea into a working product in under a week. The pace feels unreal.",
            "It's like having a senior team on call around the clock — because it literally is.",
            "Clean architecture, real tests, shipped fast. The AI workflow just works.",
            "We went from prompt to production in 72 hours. The name checks out.",
          ]}
        />

        <Section id="work" fluid={true}>
          <Info number="02" topTitle="What We" title="Build" />

          <Highlight
            slides={[
              {
                image: "/assets/images/rooms/rooms-single/1.webp",
                title: "AI-Powered Apps",
                description: "Custom applications with AI at the core — agents, automation, and intelligent user experiences.",
                buttonText: "Details",
                buttonLink: "/about",
              },
              {
                image: "/assets/images/rooms/rooms-single/2.webp",
                title: "Web Platforms",
                description: "Marketing sites, dashboards, and full-stack platforms on modern stacks, edge-deployed.",
                buttonText: "Details",
                buttonLink: "/about",
              },
              {
                image: "/assets/images/rooms/rooms-single/3.webp",
                title: "Rapid Prototypes",
                description: "Validate ideas in days, not quarters. Clickable, testable, production-ready foundations.",
                buttonText: "Details",
                buttonLink: "/about",
              },
              {
                image: "/assets/images/rooms/rooms-single/4.webp",
                title: "Agentic Workflows",
                description: "MCP servers, tool-use pipelines, and AI agents wired directly into your business.",
                buttonText: "Details",
                buttonLink: "/about",
              },
            ]}
          />
        </Section>

        <Separator />

        <Testimonials
          media="https://www.11-76.com/html5-videos-22/luxex/luxex-2.mp4"
          testimonials={[
            "Taste is the moat. Models are the engine.",
            "Ship small, ship daily, ship always.",
            "Every line reviewed. Every slice vertical.",
            "The best code is the code already in production.",
          ]}
        />
      </Section>

      <Section id="process" background="var(--color-background-primary)" fluid={true}>
        <Info number="03" topTitle="How We" title="Work" />

        <Highlight
          background="var(--color-background-secondary)"
          slides={[
            {
              image: "/assets/images/facilities/1.webp",
              title: "Discover",
              timeOpen: "Phase 01 — Hours, Not Weeks",
              description: "We scope your idea live, cut the noise, and define the thinnest vertical slice that proves value.",
            },
            {
              image: "/assets/images/facilities/2.webp",
              title: "Design",
              timeOpen: "Phase 02 — Vibe First",
              description: "Brand, tokens, and UX direction locked early, so every screen feels intentional from day one.",
            },
            {
              image: "/assets/images/facilities/3.webp",
              title: "Build",
              timeOpen: "Phase 03 — AI-Accelerated",
              description: "Frontier models write with us, seniors review everything. Vertical slices land daily.",
            },
            {
              image: "/assets/images/facilities/4.webp",
              title: "Ship",
              timeOpen: "Phase 04 — Deploy + Iterate",
              description: "Edge-deployed delivery with previews, observability, and iteration baked in from the start.",
            },
          ]}
        />

        <Separator />
      </Section>

      <Section id="gallery" background="var(--color-background-secondary)">
        <Info number="04" topTitle="Recent" title="Work" />
      </Section>

      <ImageGallery
        images={[
          "/assets/images/photoswipe/photos/large/1.webp",
          "/assets/images/photoswipe/photos/large/2.webp",
          "/assets/images/photoswipe/photos/large/3.webp",
          "/assets/images/photoswipe/photos/large/4.webp",
          "/assets/images/photoswipe/photos/large/5.webp",
          "/assets/images/photoswipe/photos/large/6.webp",
        ]}
      />

      <Testimonials
        media="/assets/images/background/parallax-image-bg-1.webp"
        testimonials={[
          "The fastest build cycle we have ever experienced. Period.",
          "72After feels less like a vendor and more like a superpower.",
          "From kickoff call to deployed product in days. Unreal.",
          "Our roadmap went from six months to six days of momentum.",
        ]}
      />

      <Footer>
        <ContactCard />
      </Footer>

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Home;
