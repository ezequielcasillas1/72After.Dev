import styles from "./AboutUs.module.scss";
import { IoMailOutline } from "react-icons/io5";

function AboutUs({
  className = "",
  id,
  image = "",
  brandPanel = false,
  number = "",
  topTitle = "",
  title = "",
  description = "",
  ctaLabel = "Start a project",
  contactText = "",
  contactLink = "",
}) {
  return (
    <>
      <div id={id} className={`${styles.aboutContainer} ${className}`.trim()}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <div className={styles.topText}>
                {number && <span>{number}</span>}
                {number && topTitle && <hr />}
                {topTitle && <span>{topTitle}</span>}
              </div>
              <h1>{title}</h1>
              <p>{description}</p>
              <span>
                {ctaLabel} <IoMailOutline />
              </span>
              {contactLink && (
                <a href={contactLink}>
                  <p>{contactText}</p>
                </a>
              )}
            </div>
          </div>
          <div className={styles.imageContainer}>
            {brandPanel ? (
              <div className={styles.brandPanel}>
                <span className={styles.brandName}>72AFTER</span>
                <span className={styles.brandTagline}>Live Beyond Time</span>
              </div>
            ) : (
              <img src={image} alt={`${title} Image`} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
