import H2 from "@/components/common/H2";
import Section from "@/components/common/Section";
import { useMemo, useState } from "react";
import { ArticleCategory, articleData, articleTags } from "./const/article";
import Checkbox from "@/components/common/CheckBox";
import { articleCheckboxVariants } from "./style/style";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

export default function Articles() {
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategory | null>(null);

  const fileteredArticleData = useMemo(
    () =>
      selectedCategory === null
        ? articleData
        : articleData.filter((data) => data.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-8 md:items-end">
        <H2>Articles</H2>
        <div className="">
          <Checkbox<ArticleCategory>
            options={articleTags}
            selected={selectedCategory}
            onChange={setSelectedCategory}
            variants={articleCheckboxVariants}
            variantKey="category"
          />
        </div>
      </div>
      <div className="mt-4 px-2 grid md:grid-cols-2 gap-4">
        {fileteredArticleData.map((article, index) => {
          return (
            <div
              key={index}
              className="rounded-lg bg-sky-200/20 shadow-lg hover:shadow-inner transition-all duration-200 cursor-pointer hover:opacity-80"
            >
              <a href={article.link}>
                <div className="relative">
                  <Image
                    src={article.imageLink}
                    alt={article.title}
                    width={240}
                    height={100}
                    className="w-full object-cover rounded-t-md"
                  />

                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 p-1.5 rounded">
                    <p className="flex items-center gap-1.5">
                      <FaRegClock /> {article.createdAt}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <GrUpdate /> {article.updatedAt}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black font-gothic">
                    {article.title}
                  </h3>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="py-8 grid grid-cols-2 gap-4"></div>
    </Section>
  );
}
