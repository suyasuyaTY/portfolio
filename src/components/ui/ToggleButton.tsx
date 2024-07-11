import { cn } from '@/utils/classname';

type ToggleButtonProps = {
  open: boolean;
  handleOpen: () => void;
};

export function ToggleButton(props: ToggleButtonProps) {
  const barClass: string = 'block h-[3px] rounded-sm bg-black absolute left-2 transition-all duration-500';
  return (
    <button onClick={props.handleOpen} className="relative flex size-full">
      <span className={cn(barClass, 'w-8 top-4', props.open && 'top-4 translate-y-2 rotate-[-135deg] w-8')} />
      <span className={cn(barClass, 'w-6 top-6', props.open && 'opacity-0')} />
      <span className={cn(barClass, 'w-4 top-8', props.open && '-translate-y-2 rotate-[135deg] w-8')} />
    </button>
  );
}
