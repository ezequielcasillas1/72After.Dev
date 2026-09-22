import styles from "./Description.module.scss";

function Description({ className = "", id, text = "" }) {
  return (
    <div id={id} className={`${styles.descriptionContainer} ${className}`.trim()}>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

export default Description;
