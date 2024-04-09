export type Career = {
  title: string;
  imageLink: string;
  startDate: string;
  endDate?: string;
  note?: string;
};

export const careers: Career[] = [
  {
    title: '国学院高等学校',
    imageLink: '/kokugakuin.jpg',
    startDate: '2018/04',
    endDate: '2021/03',
  },
  {
    title: '東京工業大学工学院情報通信系',
    imageLink: '',
    startDate: '2021/04',
    endDate: '2021/03',
    note: '系に所属したのは2022/04から',
  },
];
