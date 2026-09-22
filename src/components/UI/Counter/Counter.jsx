import styles from "./Counter.module.scss";
import CountUp from "react-countup";

function Counter({ className = "", id, title = "", number = 0, unit = "" }) {
  return (
    <div id={id} className={className}>
      <h3 className={styles.sizeText}>{title}</h3>
      <h1 className={styles.sizeNumber}>
        <CountUp end={number} duration={3} enableScrollSpy scrollSpyOnce />
      </h1>
      <h3 className={styles.sizeText}>{unit}</h3>
    </div>
  );
}

export default Counter;
