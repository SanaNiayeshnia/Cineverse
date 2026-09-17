"use client";
import { fakeMovies } from "@/lib/constants/ui/temporary.db";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

import ContentListSwiper from "./ContentListSwiper";
import ContentCard from "./ContentCard";

type ContentListPropsType = {
  title: string;
  viewAllUrl?: string;
  all?: boolean;
};

export default function ContentList({
  title,
  all = false,
  viewAllUrl,
}: ContentListPropsType) {
  return (
    <section className=" max-w-full space-y-3 grid  px-5">
      <div className="flex justify-between gap-2">
        <h2 className="font-semibold text-2xl">{title}</h2>

        {viewAllUrl && !all && (
          <Link
            href={viewAllUrl}
            className="flex items-center gap-1 transition-all duration-300 hover:gap-3 hover:text-primary-50"
          >
            View All
            <TbArrowRight size={20} className="text-primary-50" />
          </Link>
        )}
      </div>
      {all ? (
        <div className="grid grid-cols-6 gap-6">
          {fakeMovies?.map((item) => (
            <ContentCard
              key={item?.id}
              content={item}
              listTitle={title?.split(" ")?.join("-")}
            />
          ))}
        </div>
      ) : (
        <ContentListSwiper
          listTitle={title?.split(" ")?.join("-")}
          items={fakeMovies}
        />
      )}
    </section>
  );
}
