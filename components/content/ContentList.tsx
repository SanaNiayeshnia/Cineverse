"use client";
import { fakeMovies } from "@/lib/constants/ui/temporary.db";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

import ContentListSwiper from "./ContentListSwiper";
import ContentCard from "./ContentCard";
import { SwiperOptions } from "swiper/types";
import { Dispatch, SetStateAction } from "react";
import GenreList from "./genres/GenreList";

type ContentListPropsType = {
  title: string;
  viewAllUrl?: string;
  all?: boolean;
  swiperBreakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  activeGenre?: string | null;
  setGenre?: Dispatch<SetStateAction<string | null>>;
  genreList?: string[];
};

export default function ContentList({
  title,
  all = false,
  viewAllUrl,
  swiperBreakpoints,
  activeGenre,
  setGenre,
  genreList,
}: ContentListPropsType) {
  return (
    <section className=" max-w-full space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between gap-2">
          <h2 className="font-semibold text-xl sm:text-2xl">{title}</h2>

          {viewAllUrl && !all && (
            <Link
              href={viewAllUrl}
              className="flex items-center gap-1 transition-all duration-300 hover:gap-3 hover:text-primary-60 dark:hover:text-primary-50 text-sm sm:text-base"
            >
              View All
              <TbArrowRight
                size={20}
                className="text-primary-60 dark:text-primary-50"
              />
            </Link>
          )}
        </div>
        {activeGenre && setGenre && genreList && (
          <GenreList
            genres={genreList}
            activeGenre={activeGenre}
            setActiveGenre={setGenre as Dispatch<SetStateAction<string | null>>}
          />
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
          items={fakeMovies?.slice(0, 10)}
          breakpoints={swiperBreakpoints}
        />
      )}
    </section>
  );
}
