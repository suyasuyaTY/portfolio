import { works } from '@/consts/works';
import styles from '@/styles/Work/Work.module.css';
import { Card } from '@/components/Works/Card';

export function Works() {
  return (
    <div className={styles.wrapper}>
      {works.map((work, index) => (
        <Card key={index} title={work.title} description={work.description} topics={work.topics} links={work.links} />
      ))}
    </div>
  );
}
