type CheckboxVariantFunction = (props: any) => {
  button: () => string;
  dot: () => string;
};

interface CheckboxProps<T extends string> {
  options: ReadonlyArray<{ key: T; label: string }>;
  selected: T | null;
  onChange: (value: T | null) => void;
  variants: CheckboxVariantFunction;
  variantKey?: string;
}

export default function Checkbox<T extends string>({
  options,
  selected,
  onChange,
  variants,
  variantKey = "category",
}: CheckboxProps<T>) {
  return (
    <ul className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isChecked = selected === option.key;

        const { button, dot } = variants({
          [variantKey]: option.key,
          isChecked,
        });

        const handleClick = () => {
          onChange(isChecked ? null : option.key);
        };

        return (
          <li key={option.key}>
            <button type="button" className={button()} onClick={handleClick}>
              <span className={dot()} />
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
