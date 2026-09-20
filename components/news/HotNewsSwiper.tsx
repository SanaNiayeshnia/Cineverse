"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "./NewsCard";
import { fakeNews } from "@/lib/constants/ui/temporary.db";
import { Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css/effect-flip";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HotNewsSwiper() {
  const { open: isSidebarOpen } = useSidebar();
  const isMobile = useIsMobile({});
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
        className={`w-full max-w-xs min-[400px]:max-w-[350px] sm:max-w-[590px] md:max-w-172  xl:max-w-80 grid ${
          !isMobile && !isSidebarOpen ? "lg:max-w-225" : "lg:max-w-150"
        }`}
      >
        {fakeNews?.map((news, index) => (
          <SwiperSlide key={news?.id} className="relative">
            <NewsCard
              news={news}
              indexLabel={`${index + 1}/${fakeNews?.length}`}
            />
            <div className="bg-primary-50 rounded-xl w-full h-full absolute inset-0 -rotate-2 -z-1"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
