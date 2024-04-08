import styles from '@/styles/Base/Headline.module.css';

type headlineProps = {
  title: string;
  releaseDay: string;
  lastUpdateDay: string;
};

export function Headline(props: headlineProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.date}>
        <p>公開: {props.releaseDay}</p>
        <p>最終更新: {props.lastUpdateDay}</p>
      </div>
    </div>
  );
}
