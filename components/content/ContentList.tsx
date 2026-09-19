"use client";
import { fakeMovies } from "@/lib/constants/ui/temporary.db";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

import ContentListSwiper from "./ContentListSwiper";
import ContentCard from "./ContentCard";
import { SwiperOptions } from "swiper/types";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";

type ContentListPropsType = {
  title: string;
  viewAllUrl?: string;
  all?: boolean;
  swiperBreakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  activeGenre?: string;
  setGenre?: Dispatch<SetStateAction<string>>;
  genreList?: string[];
};

export default function ContentList({
  title,
  all = false,
  viewAllUrl,
  swiperBreakpoints,
  activeGenre,
  setGenre,
  genreList = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Mystery",
    "Crime",
    "Animation",
  ],
}: ContentListPropsType) {
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  return (
    <section className=" max-w-full space-y-6 grid">
      <div className="space-y-3">
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
        {activeGenre && (
          <div className="flex items-center gap-2 px-2">
            {genreList?.slice(0, 10).map((genre) => (
              <p
                key={genre}
                className={`relative px-1.5 py-1 text-white/70  rounded-sm  transition-all duration-300 ${
                  genre === activeGenre
                    ? " cursor-default text-gray-950!"
                    : " cursor-pointer"
                }`}
                onClick={() => setGenre?.(genre)}
                onMouseEnter={() => setHoveredGenre(genre)}
              >
                {genre === activeGenre && (
                  <motion.div
                    layoutId="selected-genre"
                    className="absolute rounded-sm bg-primary-50 inset-0 size-full -z-1"
                  ></motion.div>
                )}

                {genre === hoveredGenre && (
                  <motion.div
                    layoutId="hovered-genre"
                    className="absolute rounded-sm bg-white/10 inset-0 size-full -z-1"
                  ></motion.div>
                )}

                {genre}
              </p>
            ))}
          </div>
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
