import { Platform, TechTopic, WorkLink } from '@/consts/works';
import styles from '@/styles/Work/Card.module.css';
import Image from 'next/image';

const getTopicStyle = (topic: TechTopic): React.CSSProperties => {
  switch (topic) {
    case 'Next.js':
      return { color: 'blue' };
    // 他のトピックに対するスタイルもここに追加
    default:
      return {};
  }
};

const getPlatformStyle = (platform: Platform): React.CSSProperties => {
  switch (platform) {
    case 'Website':
      return { backgroundColor: 'blue' };
    case 'github':
      return { backgroundColor: 'gray' };
    // 他のトピックに対するスタイルもここに追加
    default:
      return {};
  }
};

const imageStyle = {
  borderRadius: '5%',
  border: '1px solid #fff',
};

export function Card(props: WorkLink) {
  return (
    <div className={styles.card}>
      <div className={styles.topic_wrapper}>
        {props.topics.map((topic) => (
          <span key={topic} style={getTopicStyle(topic)} className={styles.topic}>
            {topic}
          </span>
        ))}
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.image}>
          <Image src="/portfolio.png" alt="portfolio" width={280} height={160} style={imageStyle} />
        </div>

        <div className={styles.links}>
          {props.links.map((link) => (
            <span key={link.href} style={getPlatformStyle(link.description)} className={styles.link}>
              <a href={link.href} target="_blank">
                {link.description}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
