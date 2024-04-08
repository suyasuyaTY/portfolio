import styles from "@/styles/Careers/Card.module.css";
import { Career } from "@/consts/careers";

export function Card(props: Career) {
  return (
    <div className={styles.card}>
      <p className={styles.date}>
        {props.startDate}~{props.endDate}
      </p>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        {props.note ? <p className={styles.note}>※{props.note}</p> : ""}
      </div>
    </div>
  );
}
