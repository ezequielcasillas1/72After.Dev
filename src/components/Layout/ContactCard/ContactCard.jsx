import styles from "./ContactCard.module.scss";
import Separator from "@/components/UI/Separator/Separator";
import Section from "@/components/Common/Section/Section";
import { contactInfo } from "@/data/contact";

function ContactCard({ className = "", id }) {
  return (
    <>
      <div id={id} className={className}>
        <Section>
          <div className={styles.contactContainer}>
            {contactInfo.map((item, i) => (
              <div className={styles.contactData} key={i}>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Separator />
    </>
  );
}

export default ContactCard;
