import styles from "./Footer.module.scss";
import Separator from "@/components/UI/Separator/Separator";

import { siteInfo, socialMediaLinks } from "@/data/footer";
import Section from "@/components/Common/Section/Section";

function Footer({ className = "", id, children = null }) {
  return (
    <>
      <footer id={id} className={`${styles.footerContainer} ${className}`.trim()}>
        <Separator />
        <div className={styles.footerTitle}>
          <video className={styles.bgVideo} src={siteInfo.backgroundVideo} autoPlay loop muted playsInline preload="none" loading="lazy" />
          <div className={styles.title}>
            {siteInfo.nameTop}
            {siteInfo.nameBottom && (
              <>
                <br />
                {siteInfo.nameBottom}
              </>
            )}
          </div>
        </div>
        <Separator />

        {children && <div>{children}</div>}

        <div className={styles.linksContainer}>
          <a href="#" className={styles.brandText}>
            <span className={styles.brandPrimary}>72</span>
            <span className={styles.brandSecondary}>AFTER</span>
          </a>

          <Section>
            <div className={styles.socialMedia}>
              {socialMediaLinks.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </Section>

          <p>&copy; All Rights Reserved.</p>
        </div>
        <Separator />
      </footer>
    </>
  );
}

export default Footer;
