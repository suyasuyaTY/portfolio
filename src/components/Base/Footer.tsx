import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-6">
      <div className="flex justify-between max-w-4xl w-[95%] mx-auto">
        <div>&copy; 2024 suyasuyaTY</div>
        <div className="flex gap-2">
          <IconImage src={'/icon/x.svg'} alt="x" />
          <IconImage src={'/icon/note.svg'} alt="note" />
          <IconImage src={'/icon/zenn.svg'} alt="zenn" />
          <IconImage src={'/icon/github.svg'} alt="github" />
        </div>
      </div>
    </footer>
  );
}

type iconImageProps = {
  src: string;
  alt: string;
};

function IconImage(props: iconImageProps) {
  return (
    <Image src={props.src} alt={props.alt} width={24} height={24} className="bg-slate-100 border-2 rounded-md p-1" />
  );
}
