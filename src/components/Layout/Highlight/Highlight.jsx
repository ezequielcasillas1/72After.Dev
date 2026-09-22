import styles from "./Highlight.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

import Lightbox from "yet-another-react-lightbox";
import { GoStarFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";

function Highlight({ className = "", id, slides = [], background = "var(--color-background-primary)" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const images = slides.map((item) => ({ src: item.image }));

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [slides]);

  return (
    <>
      <div id={id} className={`${styles.highlightContainer} ${className}`.trim()}>
        <Lightbox
          open={openIndex !== null}
          close={() => setOpenIndex(null)}
          carousel={{ finite: true }}
          slides={images} // full gallery
          index={openIndex || 0}
          controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
          render={{ buttonPrev: () => null, buttonNext: () => null }}
        />
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            1440: { slidesPerView: 3, spaceBetween: 50 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 20 },
          }}
          touchStartPreventDefault={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.slide} ${index % 2 === 0 ? styles.slideEven : styles.slideOdd}`}>
                <div className={styles.slideImage}>
                  <img src={item.image} alt={item.title} loading="lazy" className={`${styles.slide} ${index % 2 === 0 ? styles.even : styles.odd}`} />
                  <button className={styles.descriptionButton} type="button" onClick={() => setOpenIndex(index)}>
                    {item.title}
                  </button>
                </div>

                <div className={styles.slideText} style={{ background: background }}>
                  {item.stars && (
                    <div className={styles.starsWrapper}>
                      <GoStarFill className={styles.stars} size="14px" />
                      <GoStarFill className={styles.stars} size="14px" />
                      <GoStarFill className={styles.stars} size="14px" />
                      <GoStarFill className={styles.stars} size="14px" />
                      <GoStarFill className={styles.stars} size="14px" />
                    </div>
                  )}
                  <h2>{item.title}</h2>
                  {item.timeOpen && <span>{item.timeOpen}</span>}
                  <p>{item.description}</p>

                  {item.buttonLink && item.buttonText && (
                    <AnimatedButton text={item.buttonText} href={item.buttonLink} newTab={false} className={styles.customButton} />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.sliderButtonWrapper}>
          <button ref={prevRef} className={`${styles.prevArrow} ${isBeginning ? styles.disabled : ""}`}>
            <IoIosArrowBack size="16px" />
          </button>

          <button ref={nextRef} className={`${styles.nextArrow} ${isEnd ? styles.disabled : ""}`}>
            <IoIosArrowForward size="16px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Highlight;
