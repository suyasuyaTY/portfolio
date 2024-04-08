import styles from "@/styles/Article/ArticleCard.module.css";
import { ArticleLink } from "@/consts/note/article";
import Image from "next/image";

export function Card(props: ArticleLink) {
  return (
    <div className={styles.card}>
      <a href={props.href} target="_blank">
        <Image
          src={props.imageLink}
          alt={props.title}
          width={320}
          height={180}
        />
        <div className={styles.content}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.info}>
            <span className={styles.description}>{props.description}</span>
            <span className={styles.date}>{props.published_at}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
