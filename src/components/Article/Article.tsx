import { ArticleLink, articleNoteLinks } from '@/consts/note/article';
import { Card } from './Card';
import styles from '@/styles/Article/Article.module.css';

export function Article() {
  return (
    <div className={styles.wrapper}>
      <ul>
        {articleLinks().map((link, index) => (
          <li key={index} className={styles.card}>
            <Card
              title={link.title}
              href={link.href}
              imageLink={link.imageLink}
              published_at={link.published_at}
              description={link.description}
              tags={link.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function articleLinks(): ArticleLink[] {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  return [...note].sort((a, b) => (a.published_at === b.published_at ? 0 : a.published_at < b.published_at ? 1 : -1));
}
