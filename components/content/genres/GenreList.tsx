"use client";
import { motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type GenreListPropsType = {
  genres: string[];
  activeGenre: string | null;
  setActiveGenre: Dispatch<SetStateAction<string | null>>;
};

export default function GenreList({
  genres = [
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
  activeGenre,
  setActiveGenre,
}: GenreListPropsType) {
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  return (
    <div className="grid place-content-start w-full max-w-full px-2">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        className="max-w-full "
        breakpoints={{
          400: { slidesPerView: 4 },
          640: { slidesPerView: 5 },

          768: { slidesPerView: 6 },

          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 10 },
        }}
      >
        {genres?.slice(0, 10).map((genre) => (
          <SwiperSlide key={genre} className="relative min-w-max max-w-max">
            <p
              className={`px-1.5 py-1 text-white/70  rounded-sm  transition-all duration-300 text-center ${
                genre === activeGenre
                  ? " cursor-default text-gray-950!"
                  : " cursor-pointer"
              }`}
              onClick={() => setActiveGenre?.(genre)}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
