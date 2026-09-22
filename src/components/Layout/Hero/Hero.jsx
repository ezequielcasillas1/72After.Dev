import styles from "./Hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { scrollToId } from "@/utils/scrollToId.js";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeroMedia({ media, title }) {
  return media.endsWith(".mp4") ? (
    <video className={styles.heroVideo} src={media} autoPlay loop muted playsInline />
  ) : (
    <img className={styles.heroImage} src={media} alt={`${title} Image`} />
  );
}

function HeroContent({ top, title, link, btnText }) {
  const [toggler, setToggler] = useState(false);

  // Check if link is on youtube or vimeo
  const isVideo = link?.includes("youtube.com") || link?.includes("youtu.be") || link?.includes("vimeo.com");
  const isScrollLink = link?.startsWith("#");

  const handleLinkClick = (e) => {
    if (isVideo) {
      e.preventDefault();
      setToggler(!toggler); // Open the video modal
    } else if (isScrollLink) {
      e.preventDefault();
      const targetId = link.replace("#", "");
      if (typeof scrollToId === "function") {
        scrollToId(targetId);
      }
    }
  };

  return (
    <div className={styles.heroContent}>
      <div>
        <span>
          {top || (
            <>
              {[...Array(5)].map((_, i) => (
                <GoStarFill key={i} className={styles.stars} size="14px" />
              ))}
            </>
          )}
        </span>
        <h1>{title}</h1>

        {link && btnText && (
          <>
            {isVideo || isScrollLink ? (
              <a href={link} onClick={handleLinkClick} className={styles.pulseButtonWrapper}>
                <span className={styles.pulseButton}>{btnText}</span>
              </a>
            ) : (
              /* Normal page link */
              <Link to={link} className={styles.pulseButtonWrapper}>
                <span className={styles.pulseButton}>{btnText}</span>
              </Link>
            )}

            {/* Add the video lightbox */}
            {isVideo && <FsLightbox toggler={toggler} sources={[link]} />}
          </>
        )}
      </div>
    </div>
  );
}

function Hero({ className = "", id, slides = [] }) {
  if (!slides || slides.length === 0) return null;

  // Render function to avoid code duplication between single and multi slide
  const renderSlideContent = (item) => (
    <>
      <HeroMedia media={item.media} title={item.title} />
      <HeroContent
        top={item.topText}
        title={item.title}
        link={item.buttonLink} // #section or /link
        btnText={item.buttonText}
      />
    </>
  );

  if (slides.length === 1) {
    return (
      <>
        <div id={id} className={`${styles.mediaContainer} ${styles.mediaContainerSingle} ${className}`.trim()}>
          {renderSlideContent(slides[0], true)}
          <div className={styles.scrollContainer}>
            <div className={styles.scrollWrapper}>
              <div className={styles.scrollLine}></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div id={id} className={`${styles.mediaContainer} ${className}`.trim()}>
        <Swiper
          modules={[Parallax, Navigation]}
          parallax={true}
          navigation={{
            prevEl: `.${styles.slideButtonLeft}`,
            nextEl: `.${styles.slideButtonRight}`,
          }}
          loop={true}
          speed={1000}
        >
          {slides.map((item, i) => (
            <SwiperSlide className={styles.slide} key={i}>
              {renderSlideContent(item, false)}
            </SwiperSlide>
          ))}
        </Swiper>

        <button className={styles.slideButtonLeft}>
          <IoIosArrowBack size="16px" color="black" />
        </button>

        <button className={styles.slideButtonRight}>
          <IoIosArrowForward size="16px" color="black" />
        </button>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollWrapper}>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
