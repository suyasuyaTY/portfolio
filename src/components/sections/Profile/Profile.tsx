import { ExternalLinkCard } from '@/components/card/ExternalLinkCard';
import { links } from '@/consts/link';
import Image from 'next/image';

export function Profile() {
  return (
    <div className="mb-8 px-4 py-6">
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center max-lg:flex-col max-lg:gap-6">
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 sm:grid-cols-2 lg:w-2/3">
          <div className="flex w-60 items-center justify-center">
            <Image src="/myIcon.png" alt="myicon" width={224} height={224} className="rounded-full" />
          </div>
          <div className="grid w-64 grid-cols-1">
            <h3 className="text-4xl text-blue-300">suyasuyaTY</h3>
            <div>
              <h4 className="text-xs text-teal-400">所属</h4>
              <p className="text-sm text-slate-900">
                東京工業大学情報通信系 (21B)
                <br />
                Titech App Project
              </p>
            </div>
            <div>
              <h4 className="text-xs text-teal-400">学んでいること</h4>
              <p className="text-sm text-slate-900">キャラクター/機械学習/Web系</p>
            </div>
            <div>
              <h4 className="text-xs text-teal-400">好きなもの</h4>
              <p className="text-sm text-slate-900">ボカロ / プロセカ / スプラ</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400">アイコンは変更予定</p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid gap-2 sm:grid-cols-2 lg:w-1/3 lg:grid-cols-1 lg:gap-4">
          {links.map((link, index) => {
            return (
              <ExternalLinkCard
                key={index}
                platform={link.platform}
                name={link.name}
                url={link.url}
                color={link.color}
                icon={link.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
