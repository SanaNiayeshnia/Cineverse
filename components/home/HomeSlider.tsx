"use client";
import Image from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const fakeSlides = [
  {
    id: "1",
    title: "Game of Thrones",
    genres: ["Action", "Adventure", "Drama"],
    imdb: "9.1",
    description:
      "It's the story of the intricate and bloody battles of several noble families in the fictional land of Westeros. These families, including the Starks, the Lannisters, and the Targaryens, fight for control of the Iron Throne, the symbol of power in the Seven Kingdoms.",
    image: "/assets/images/test.png",
  },
  {
    id: "2",
    title: "The Lord of the Rings: The Return of the King",
    genres: ["Adventure", "Drama", "Fantasy"],
    imdb: "9.0",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image: "/assets/images/test2.png",
  },
  {
    id: "3",
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    imdb: "8.7",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and former NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    image: "/assets/images/test3.png",
  },
  {
    id: "4",
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama", "something"],
    imdb: "9.0",
    description:
      "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "/assets/images/test4.png",
  },
];

export default function HomeSlider() {
  return (
    <section className="grow">
      <Swiper
        loop
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".home-slider-prev",
          nextEl: ".home-slider-next",
        }}
        effect="fade"
        className="w-full max-w-full relative"
      >
        {fakeSlides?.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <div className="relative h-70 sm:h-90 md:h-100">
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent from-1% via-30% z-2 p-4 flex items-end">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-anton! tracking-wider line-clamp-1 md:line-clamp-2 text-white">
                    {slide?.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <p className="flex items-center gap-2 text-gray-300">
                      <span className="bg-primary-50 rounded-xs text-xs text-black font-medium px-1 py-0.5">
                        IMDB
                      </span>
                      {slide?.imdb}
                    </p>
                    <p className="hidden sm:flex items-center divide-x-2 divide-primary-50">
                      {slide?.genres?.slice(0, 3).map((genre, index) => (
                        <span key={index} className="px-2 text-gray-300">
                          {genre}
                        </span>
                      ))}
                    </p>
                    <AppButton
                      kind="primary"
                      className="text-xs! sm:text-base"
                      href={`/details/${slide?.id}`}
                    >
                      More Details <TbArrowRight />
                    </AppButton>
                  </div>
                </div>
              </div>
              <Image
                src={slide?.image}
                alt={slide?.title}
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-4 right-4 z-3 flex gap-2 sm:gap-3 items-center">
          <AppButton
            className={`home-slider-prev px-1.5! py-1.5! h-auto`}
            kind="primary"
          >
            <TbChevronLeft className="size-4!" />
          </AppButton>
          <AppButton
            className={`home-slider-next px-1.5! py-1.5! h-auto`}
            kind="primary"
          >
            <TbChevronRight className="size-4!" />
          </AppButton>
        </div>
      </Swiper>
    </section>
  );
}
