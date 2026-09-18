"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "./NewsCard";
import { fakeNews } from "@/lib/constants/ui/temporary.db";
import { Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css/effect-flip";

export default function HotNewsSwiper() {
  return (
    <div className="max-w-full grid relative">
      <Swiper
        modules={[Autoplay, EffectFlip]}
        autoplay={{ delay: 4000 }}
        loop
        effect="flip"
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={2}
        className="w-full max-w-80 grid"
      >
        {fakeNews?.map((news, index) => (
          <SwiperSlide key={news?.id}>
            <NewsCard
              news={news}
              indexLabel={`${index + 1}/${fakeNews?.length}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-primary-50 rounded-xl w-full h-full absolute inset-0 -rotate-2"></div>
    </div>
  );
}
