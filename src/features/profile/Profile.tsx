import Image from "next/image";
import { links } from "./const/link";

export default function Profile() {
  return (
    <>
      <div className="flex md:flex-row gap-8 flex-col">
        <Image
          src="/icon.jpg"
          alt="myIcon"
          className="rounded-full mx-auto"
          width={296}
          height={296}
          priority
        />
        <div>
          <div className="text-center text-3xl md:text-start sm:text-5xl font-bold font-quicksand">
            suyasuyaTY
          </div>
          <p className="text-center mt-2 md:text-start  text-slate-700/80 font-bold text-sm">
            つよつよプログラマーになる予定
          </p>
          <p className="my-8 text-base/relaxed">
            現在は、東京科学大学で物理エンジンの研究をしています <br />
            一番熱中していることは競プロですが、UI/UXやネットワーク、セキュリティにも興味があります
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-center text-3xl">外部サービス</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8">
          {links.map((item) => {
            return (
              <div key={item.platform}>
                <a
                  href={item.url}
                  className={`shadow-lg rounded-sm flex items-center justify-between py-1 px-4 transition-colors duration-300 ${item.baseBgClass} ${item.hoverBgClass} transition-transform hover:-translate-y-1`}
                >
                  <div>
                    <p className="text-slate-200 font-bold">{item.platform}</p>
                    <p className="text-xs text-slate-300">{item.name}</p>
                  </div>
                  <Image
                    src={item.icon.url}
                    alt=""
                    width={32 * item.icon.scale}
                    height={32 * item.icon.scale}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
