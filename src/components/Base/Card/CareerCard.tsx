import styles from '@/styles/Careers/Card.module.css';
import { Career } from '@/consts/careers';
import Image from 'next/image';

export function CareerCard(props: Career) {
  return (
    <div className="relative">
      <div className="absolute left-[5px] h-full border-l-2" />
      <div className="size-3 rounded-full bg-gray-200" />
      <div className="pb-10 pl-8">
        <time className="absolute -top-0.5 text-xs font-normal leading-none text-gray-400">
          {props.startDate} ~ {props.endDate}
        </time>
        <div className="flex justify-start gap-x-20">
          <Image src={props.imageLink} alt="koukou" width={80} height={80} />
          <div>
            <div className="text-lg font-bold">{props.title}</div>
            <div>{props.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
