import Image from "next/image";

import H2 from "@/components/common/H2";

import { MdMusicNote } from "react-icons/md";
import { FaBuilding, FaCommentDots, FaPlane } from "react-icons/fa";

import { songs } from "./const/song";

export default function About() {
  return (
    <>
      <H2>About me</H2>
      <div className="my-4">
        <h3 className="text-black text-lg font-bold flex items-center gap-2">
          <FaBuilding />
          所属
        </h3>
        <p className="my-1">東京科学大学大学院工学院情報通信コース 修士1年</p>
      </div>
      <div className="my-2">
        <h3 className="text-black text-lg font-bold flex items-center gap-2">
          <FaPlane />
          趣味
        </h3>
        <p className="my-1">
          プログラミング（競プロ・Webなど）、らーめん巡り、ランニング
        </p>
      </div>
      <div className="my-2">
        <h3 className="text-black text-lg font-bold flex items-center gap-1.5">
          <MdMusicNote />
          好きな曲
        </h3>
        <div className="my-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {songs.map((song) => (
            <a
              key={song.youtubeUrl}
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg/30"
            >
              <Image
                src={song.thumbnailUrl}
                alt={song.title}
                width={480}
                height={360}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 from-0% to-black/20 to-60% opacity-0 group-hover:opacity-100 z-10 duration-300 transition-opacity" />
              <div className="absolute text-white bottom-2 left-2 z-20 group-hover:-translate-y-4 transition-transform">
                <p className="text-base font-semibold">{song.title}</p>
                <p className="text-xs">{song.composer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="my-2">
        <h3 className="text-black text-lg font-bold flex items-center gap-2">
          <FaCommentDots />
          ひとこと
        </h3>
        <p className="my-1">
          研究から逃れるために、個人サイト構築・競プロ・就活が捗っています
        </p>
      </div>
    </>
  );
}
