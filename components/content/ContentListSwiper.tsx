import ContentCard from "./ContentCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Content } from "@/types/ui/content.types";
import AppButton from "../layout/AppButton";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { SwiperOptions } from "swiper/types";

type ContentListSwiperPropsType = {
  items: Content[];
  listTitle: string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
};

export default function ContentListSwiper({
  items,
  listTitle,
  breakpoints,
}: ContentListSwiperPropsType) {
  const defaultBreakpoints = {
    400: { slidesPerView: 2.3 },
    500: { slidesPerView: 3 },

    640: {
      slidesPerView: 4,
    },
    750: { slidesPerView: 4.5 },
    850: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4.5,
    },
    1150: {
      slidesPerView: 5.5,
    },
    1280: {
      slidesPerView: 6,
    },
    1536: {
      slidesPerView: 6.5,
    },
  };

  return (
    <div className="w-full grid relative">
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{
          prevEl: `.prev-${listTitle}`,
          nextEl: `.next-${listTitle}`,
        }}
        spaceBetween={16}
        slidesPerView={1.8}
        className="w-full max-w-full overflow-hidden"
        breakpoints={breakpoints || defaultBreakpoints}
      >
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            <ContentCard content={item} listTitle={listTitle} />
          </SwiperSlide>
        ))}
      </Swiper>
      <AppButton
        className={`absolute -left-2.5 top-1/2 prev-${listTitle} z-2 px-1.5! py-1.5! h-auto hidden sm:block`}
        kind="primary"
      >
        <TbChevronLeft className="size-6!" />
      </AppButton>
      <AppButton
        className={`absolute -right-2.5 top-1/2 next-${listTitle} z-2 px-1.5! py-1.5! h-auto hidden sm:block`}
        kind="primary"
      >
        <TbChevronRight className="size-6!" />
      </AppButton>
    </div>
  );
}
