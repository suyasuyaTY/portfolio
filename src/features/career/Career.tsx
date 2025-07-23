import Anchor from "@/components/common/Anchor";
import Checkbox from "@/components/common/CheckBox";
import H2 from "@/components/common/H2";
import {
  CareerCategory,
  careerData,
  careerTags,
} from "@/features/career/const/career";
import {
  careerCheckboxVariants,
  timelineItemVariants,
} from "@/features/career/style/style";
import { useMemo, useState } from "react";

export default function Career() {
  const [selectedCategory, setSelectedCategory] =
    useState<CareerCategory | null>(null);

  const fileteredCareerData = useMemo(
    () =>
      selectedCategory === null
        ? careerData
        : careerData.filter((data) => data.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-start gap-2 md:gap-8 md:items-end">
        <H2>Career Timeline</H2>
        <div>
          <Checkbox<CareerCategory>
            options={careerTags}
            selected={selectedCategory}
            onChange={setSelectedCategory}
            variants={careerCheckboxVariants}
            variantKey="category"
          />
        </div>
      </div>
      <ul className="my-4 pl-1">
        {fileteredCareerData.map((career, index) => {
          const { container, icon, time } = timelineItemVariants({
            category: career.category,
          });

          return (
            <li key={index} className={container()}>
              <div className={icon()} />

              <time className={time()}>{career.date}</time>
              <h3 className="text-xl font-semibold text-black">
                <Anchor url={career.link}>{career.title}</Anchor>
              </h3>
              <h4 className="my-1 text-xs font-light text-black">
                {career.subTitle}
              </h4>
              <div className="font-normal">{career.description}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
