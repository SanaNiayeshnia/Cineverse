import ContentCard from "./ContentCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Content } from "@/types/ui/content.types";
import AppButton from "../layout/AppButton";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

type ContentListSwiperPropsType = { items: Content[]; listTitle: string };

export default function ContentListSwiper({
  items,
  listTitle,
}: ContentListSwiperPropsType) {
  return (
    <div className="w-full grid relative">
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{
          prevEl: `.prev-${listTitle}`,
          nextEl: `.next-${listTitle}`,
        }}
        spaceBetween={24}
        slidesPerView={4}
        className="w-full max-w-full overflow-hidden"
        breakpoints={{
          1024: {
            slidesPerView: 5.5,
          },
          1280: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 6.5,
          },
        }}
      >
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            <ContentCard content={item} listTitle={listTitle} />
          </SwiperSlide>
        ))}
      </Swiper>
      <AppButton
        className={`absolute -left-2.5 top-1/2 prev-${listTitle} z-2 px-1.5! py-1.5! h-auto opacity-50 hover:opacity-100 backdrop-blur-lg hover:bg-primary-50!`}
        kind="primary"
      >
        <TbChevronLeft className="size-6!" />
      </AppButton>
      <AppButton
        className={`absolute -right-2.5 top-1/2 next-${listTitle} z-2 px-1.5! py-1.5! h-auto opacity-50 hover:opacity-100 backdrop-blur-lg hover:bg-primary-50!`}
        kind="primary"
      >
        <TbChevronRight className="size-6!" />
      </AppButton>
    </div>
  );
}
