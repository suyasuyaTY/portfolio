import { tv } from "tailwind-variants";

export const articleCheckboxVariants = tv({
  slots: {
    button:
      "relative cursor-pointer rounded-sm shadow-2xl pl-6 py-0.5 pr-2 text-sm transition-colors duration-200 bg-[--background] text-[--foreground]",
    dot: "absolute left-2 top-1/2 -translate-y-1/2 inline-block w-2 h-2 rounded-full",
  },
  variants: {
    category: {
      tech: {},
      note: {},
      blog: {},
    },
    isChecked: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // --- Tech ---
    {
      category: "tech",
      isChecked: true,
      class: {
        button: "bg-base-1 shadow-md shadow-base-1 text-white",
        dot: "bg-white",
      },
    },
    {
      category: "tech",
      isChecked: false,
      class: {
        button: "group text-base-1 bg-white hover:bg-base-1-light",
        dot: "bg-white group-hover:bg-base-1",
      },
    },
    // --- note ---
    {
      category: "note",
      isChecked: true,
      class: {
        button: "bg-base-2 shadow-md shadow-base-2 text-white",
        dot: "bg-white",
      },
    },
    {
      category: "note",
      isChecked: false,
      class: {
        button: "group text-base-2 bg-white hover:bg-base-2-light",
        dot: "bg-white group-hover:bg-base-2",
      },
    },
    // --- blog ---
    {
      category: "blog",
      isChecked: true,
      class: {
        button: "bg-base-3 shadow-md shadow-base-3 text-white",
        dot: "bg-white",
      },
    },
    {
      category: "blog",
      isChecked: false,
      class: {
        button: "group text-base-3 bg-white hover:bg-base-3-light",
        dot: "bg-white group-hover:bg-base-3",
      },
    },
  ],
  defaultVariants: {
    isChecked: false,
  },
});
