import H2 from "@/components/common/H2";
import Section from "@/components/common/Section";
import { works } from "./const/work";
import Image from "next/image";

export default function Works() {
  return (
    <Section>
      <H2>Works</H2>
      <div className="py-8 grid grid-cols-2 gap-4">
        {works.map((work) => {
          return (
            <div
              key={work.title}
              className="rounded-lg bg-sky-300/20 shadow-lg hover:shadow-inner transition-all duration-200 cursor-pointer hover:-translate-y-1"
            >
              <Image
                src={work.imageUrl}
                alt={work.title}
                width={800}
                height={308}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-black font-sofia">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 font-gothic">
                  {work.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
