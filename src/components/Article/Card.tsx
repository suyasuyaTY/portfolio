import styles from "@/styles/Article/ArticleCard.module.css";
import { ArticleLink } from "@/consts/note/article";

export function Card(props: ArticleLink) {
  return (
    <div className={styles.card}>
      <p className={styles.date}>
        {props.published_at}
        <span>-{props.description}</span>
      </p>
      <a href={props.href} target="_blank">
        <h4 className={styles.title}>{props.title}</h4>
      </a>
    </div>
  );
}
