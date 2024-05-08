import { cn } from '@/utils/classname';
import { LinkItem } from './LinkItem';

type Props = {
  open: boolean;
  items: { title: string; url: string }[];
};

export function ToggleMenu(props: Props) {
  return (
    <ul>
      {props.items.map(({ title, url }) => (
        <li key={url} className={cn('transition-all ease-out duration-300 border-t-0', props.open && 'border-t')}>
          <p
            className={cn(
              'transition-all ease-out duration-300 h-0 opacity-0 invisible',
              props.open && 'h-12 opacity-100 visible',
            )}
          >
            <LinkItem title={title} url={url} />
          </p>
        </li>
      ))}
    </ul>
  );
}
