import Hero from "@/components/Layout/Hero/Hero";
import ImageGallery from "@/components/Galleries/ImageGallery/ImageGallery";
import Navigation from "@/components/Layout/Navigation/Navigation";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import PageMeta from "@/components/Special/PageMeta";
import { mainNav } from "@/data/navigation";
import Footer from "@/components/Layout/Footer/Footer";

const meta = {
  title: "72After — Our Work",
  description: "Explore recent work from 72After — AI-powered apps, platforms, and prototypes shipped at the speed of thought.",
};

function Gallery() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={mainNav} />

      <Hero
        slides={[
          {
            media: "/assets/images/gallery/1.webp",
            topText: "Explore",
            title: "Our Work",
            buttonText: "View Gallery",
            buttonLink: "#gallery",
          },
        ]}
      />

      <ImageGallery
        id="gallery"
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

      <Footer />

      <ToTopArrow />
      <VerticalLines />
    </>
  );
}

export default Gallery;
