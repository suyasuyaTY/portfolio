import { tv } from "tailwind-variants";
import { CareerCategory } from "../const/career";
import { time } from "console";

export const careerCheckboxVariants = tv({
  slots: {
    button:
      "relative cursor-pointer rounded-sm shadow-2xl pl-6 py-0.5 pr-2 text-sm transition-colors duration-200 bg-[--background] text-[--foreground]",
    dot: "absolute left-2 top-1/2 -translate-y-1/2 inline-block w-2 h-2 rounded-full",
  },
  variants: {
    category: {
      intern: {},
      activity: {},
      achievement: {},
    } as Record<string, {}>,
    isChecked: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // --- インターン ---
    {
      category: "intern",
      isChecked: true,
      class: {
        button: "bg-intern shadow-md shadow-intern text-white",
        dot: "bg-white",
      },
    },
    {
      category: "intern",
      isChecked: false,
      class: {
        button: "group text-intern bg-white hover:bg-intern-light",
        dot: "bg-white group-hover:bg-intern",
      },
    },
    // --- 活動 ---
    {
      category: "activity",
      isChecked: true,
      class: {
        button: "bg-activity shadow-md shadow-activity text-white",
        dot: "bg-white",
      },
    },
    {
      category: "activity",
      isChecked: false,
      class: {
        button: "group text-activity/80 bg-white hover:bg-activity-light",
        dot: "bg-white group-hover:bg-activity",
      },
    },
    // --- 実績 ---
    {
      category: "achievement",
      isChecked: true,
      class: {
        button: "bg-achievement/80 shadow-md shadow-achievement text-white",
        dot: "bg-white",
      },
    },
    {
      category: "achievement",
      isChecked: false,
      class: {
        button: "group text-achievement bg-white hover:bg-achievement-light",
        dot: "bg-white group-hover:bg-achievement",
      },
    },
  ],
  defaultVariants: {
    isChecked: false,
  },
});

export const timelineItemVariants = tv({
  slots: {
    container: "relative group border-l-1 px-8 pb-6",
    icon: "absolute w-2 h-2 rounded-full -left-1 top-2 border-1 transition-all duration-300 group-hover:scale-150 group-hover:bg-white",
    time: "text-xs font-light text-gray-100",
  },
  variants: {
    category: {
      intern: {
        container: "border-intern",
        icon: "bg-intern border-intern",
        time: "text-intern",
      },
      activity: {
        container: "border-activity",
        icon: "bg-activity border-activity",
        time: "text-activity",
      },
      achievement: {
        container: "border-achievement",
        icon: "bg-achievement border-achievement",
        time: "text-achievement",
      },
    } as Record<
      CareerCategory,
      { container: string; icon: string; time: string }
    >,
  },
});
