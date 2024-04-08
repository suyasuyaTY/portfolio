export type Career = {
  title: string;
  startDate: string;
  endDate?: string;
  note?: string;
};

export const careers: Career[] = [
  {
    title: "国学院高等学校",
    startDate: "2018/04",
    endDate: "2021/03",
  },
  {
    title: "東京工業大学工学院情報通信系",
    startDate: "2021/04",
    endDate: "2021/03",
    note: "系に所属したのは2022/04から",
  },
];
