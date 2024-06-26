export type headlineProps = {
  title: string;
  releaseDate: string;
  updateDate: string;
};

export function Headline(props: headlineProps) {
  return (
    <div className="mb-8 flex justify-between border-b-2 px-4">
      <h2 className="text-3xl">{props.title}</h2>
      <div>
        <p>公開日: {props.releaseDate}</p>
        <p>更新日: {props.updateDate}</p>
      </div>
    </div>
  );
}
