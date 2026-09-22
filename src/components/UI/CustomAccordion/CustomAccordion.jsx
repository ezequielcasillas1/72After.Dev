import Accordion from "react-bootstrap/Accordion";
import Section from "@/components/Common/Section/Section";
import styles from "./CustomAccordion.module.scss";

function CustomAccordion({ className = "", id, data = [] }) {
  return (
    <Section>
      <Accordion defaultActiveKey="0" flush id={id} className={`${styles.accordionContainer} ${className}`.trim()}>
        {data.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()} className={styles.accordionItem}>
            <Accordion.Header className={styles.headerText}>{item.title}</Accordion.Header>
            <Accordion.Body className={styles.bodyText}>{item.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Section>
  );
}

export default CustomAccordion;
