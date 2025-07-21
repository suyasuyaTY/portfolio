interface Song {
  thumbnailUrl: string;
  title: string;
  composer: string;
  youtubeUrl: string;
}

export const songs: Song[] = [
  {
    thumbnailUrl: "http://img.youtube.com/vi/HkcAuqAsWfY/sddefault.jpg",
    title: "フューエル",
    composer: "鬱P",
    youtubeUrl: "https://www.youtube.com/watch?v=HkcAuqAsWfY",
  },
  {
    thumbnailUrl: "http://img.youtube.com/vi/d3Eqz55SxlA/sddefault.jpg",
    title: "アンチユー",
    composer: "Chinozo",
    youtubeUrl: "https://www.youtube.com/watch?v=d3Eqz55SxlA",
  },
];
