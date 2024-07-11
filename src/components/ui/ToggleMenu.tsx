import { cn } from '@/utils/classname';
import { InternalLink } from './InternalLink';

type Props = {
  open: boolean;
  items: { title: string; url: string }[];
  handleClose: () => void;
};

export function ToggleMenu({ open, items, handleClose }: Props) {
  return (
    <ul>
      {items.map(({ title, url }) => (
        <li key={url} className={cn('transition-all ease-out duration-300 border-t-0', open && 'border-t')}>
          <p
            className={cn(
              'transition-all ease-out duration-300 h-0 opacity-0 invisible',
              open && 'h-12 opacity-100 visible',
            )}
          >
            <InternalLink title={title} url={url} handleClose={handleClose} />
          </p>
        </li>
      ))}
    </ul>
  );
}
