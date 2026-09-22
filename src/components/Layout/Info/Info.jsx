import styles from "./Info.module.scss";
import Separator from "@/components/UI/Separator/Separator";

function Info({ className = "", id, number = "", topTitle = "", title = "" }) {
  return (
    <div id={id} className={className}>
      <Separator />
      <div className={styles.infoContainer}>
        <div className={styles.topText}>
          {number && <span>{number}</span>}
          {number && topTitle && <hr />}
          {topTitle && <span>{topTitle}</span>}
        </div>
        <h2>{title}</h2>
      </div>
      <Separator />
    </div>
  );
}

export default Info;
