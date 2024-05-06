import Image from 'next/image';
import Link from 'next/link';

export function Profile() {
  return (
    <div className="w-64 md:w-full mx-auto md:max-w-3xl md:mb-16">
      <div className="px-4 md:flex md:justify-between">
        <div className="flex items-center justify-center md:w-2/5">
          <Image src="/myIcon.jpg" alt="myicon" width={224} height={224} className="rounded-full" />
        </div>
        <div className="mt-4 md:mt-0 md:w-2/5">
          <h3 className="text-4xl text-blue-300">suyasuyaTY</h3>
          <div className="mt-3">
            <h4 className="text-xs text-teal-400">所属</h4>
            <p>
              東京工業大学情報通信系 (21B)
              <br />
              Titech App Project
            </p>
          </div>
          <div className="mt-3">
            <h4 className="text-xs text-teal-400">趣味</h4>
            <p>ボカロ / プロセカ / スプラ</p>
          </div>
          <div className="mt-3">
            <h4 className="text-xs text-teal-400">最近の流行り</h4>
            <p>IMAWANOKIWA</p>
          </div>
        </div>
        <div className="text-center mt-2 md:text-start md:w-1/5 md:relative">
          <Link href={'/profile'} className="text-blue-500 group md:absolute md:bottom-0">
            もっと見る <span className="inline-block transition duration-100 group-hover:translate-x-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
