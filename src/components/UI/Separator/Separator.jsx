import styles from "./Separator.module.scss";

function Separator({ className = "", id, color = "var(--color-text-primary)" }) {
  return (
    <>
      <div id={id} className={`${styles.lineContainer} ${className}`.trim()}>
        <div className={styles.line} style={{ backgroundColor: color }}></div>
      </div>
    </>
  );
}

export default Separator;
