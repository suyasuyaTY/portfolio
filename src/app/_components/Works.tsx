import { works } from '@/consts/works';
import { FaPen } from 'react-icons/fa';
import { PageTitle } from '@/components/common/PageTitle';
import { CardList } from '@/components/common/CardList';
import { LinkCard } from '@/components/card/LinkCard';

export function Works() {
  return (
    <div>
      <PageTitle>
        <div className="flex items-center justify-center">
          <FaPen className="size-6" />
          <p className="ml-2 text-3xl">Works</p>
        </div>
      </PageTitle>
      <CardList>
        {works.map(({ title, description, image }) => {
          return (
            <LinkCard key={title} image={image} title={title} url={`/works/${title}`} isExternal={true}>
              <p className="mb-2 text-xs text-slate-500">{description}</p>
            </LinkCard>
          );
        })}
      </CardList>
    </div>
  );
}
