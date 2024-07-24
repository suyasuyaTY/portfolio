import { works } from '@/consts/works';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  params: {
    name: string;
  };
};

export default function Work(props: Props) {
  const work = works.filter((work) => work.title == props.params.name)[0];
  return (
    <main>
      <div className="mx-auto max-w-lg px-4">
        <div>
          <Image src={work.image} alt={work.title} width={1600} height={900} className="rounded-md" />
          <div>
            <h2 className="text-center text-3xl">{work.title}</h2>
            <p className="text-center">{work.description}</p>
          </div>
        </div>
        <div>
          <Details title="URL">
            <a href={work.url} className="text-teal-400 duration-200 visited:text-purple-800 hover:text-teal-800">
              {work.url}
            </a>
          </Details>
          <Details title="リポジトリ">
            {work.repositories.map((repository, index) => {
              return (
                <a
                  href={repository}
                  key={index}
                  className="text-teal-400 duration-200 visited:text-purple-800 hover:text-teal-800"
                >
                  {repository}
                </a>
              );
            })}
          </Details>
          <Details title="開発に使った技術">
            {work.TechStack.map(({ label }, index) => {
              return <span key={index}>{label} / </span>;
            })}
          </Details>
          <Details title="機能">{work.features}</Details>
          <Details title="開発予定">{work.updates}</Details>
          {work.comments ? work.comments : ''}
          <Link
            href={'/works'}
            className="mb-2 me-2 flex justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

const Details = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className="my-2 md:grid md:grid-cols-3">
      <h2 className="text-xs text-slate-900 md:col-span-1 md:text-base">{props.title}</h2>
      <div className="md:col-span-2">{props.children}</div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const paths = await works.map((work) => ({
    params: { name: work.title },
  }));
  return paths.map((post) => {
    post.params;
  });
};
