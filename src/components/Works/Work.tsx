import { works } from "@/consts/works";
import styles from "@/styles/Work/Work.module.css";
import { Card } from "@/components/Works/Card";
import { Headline } from "../Base/Headline";

export function Work() {
  return (
    <div className={styles.wrapper}>
      <Headline
        title="Work"
        releaseDay="2024/04/20"
        lastUpdateDay="2024/04/20"
      />
      {works.map((work, index) => (
        <Card
          key={index}
          title={work.title}
          description={work.description}
          topics={work.topics}
          links={work.links}
        />
      ))}
    </div>
  );
}
