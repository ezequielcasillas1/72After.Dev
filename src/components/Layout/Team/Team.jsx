import styles from "./Team.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { teamData } from "@/data/team";

function Team({ className = "", id }) {
  const [openIndex, setOpenIndex] = useState(null);
  // make a flat array of slides
  const slides = teamData.map((item) => ({ src: item.image }));

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Initialize navigation after swiper & refs exist
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy(); // safe destroy if already initialized
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current, prevRef.current, nextRef.current]);

  return (
    <div id={id} className={`${styles.teamContainer} ${className}`.trim()}>
      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={slides} // full gallery
        index={openIndex || 0} // start at the clicked image
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
      />
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          1440: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 20 },
        }}
        touchStartPreventDefault={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {teamData.map((member, i) => {
          return (
            <SwiperSlide>
              <div key={i} className={styles.teamWrapper}>
                <div className={styles.teamImageContainer}>
                  <img className={styles.teamImage} src={member.image} alt="Team Photo" loading="lazy" />

                  {/* Hover overlay */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.buttonCircle}>
                      <button type="button" onClick={() => setOpenIndex(i)}>
                        <FaMagnifyingGlass size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.teamText} onClick={() => setOpenIndex(i)}>
                  {member.name}
                  <span>{member.role}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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
  );
}

export default Team;
