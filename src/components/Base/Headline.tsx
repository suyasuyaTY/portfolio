export type headlineProps = {
  title: string;
  releaseDate: string;
  updateDate: string;
};

export function Headline(props: headlineProps) {
  return (
    <div className="flex justify-between px-4 border-b-2">
      <h2 className="text-3xl">{props.title}</h2>
      <div>
        <p>公開日: {props.releaseDate}</p>
        <p>更新日: {props.updateDate}</p>
      </div>
    </div>
  );
}
