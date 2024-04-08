import styles from "@/styles/Base/Section.module.css";

type sectionlineProps = {
  title: string;
};

export function Sectionline(props: sectionlineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
}
