import styles from "./Quote.module.scss";

function Quote({ className = "", id, text = "" }) {
  return (
    <div id={id} className={`${styles.quoteContainer} ${className}`.trim()}>
      <div className={styles.quote}>
        <p className={styles.description}>
          {text}
          <br></br>
        </p>
      </div>
    </div>
  );
}

export default Quote;
