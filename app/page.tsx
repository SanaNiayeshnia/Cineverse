import ContentList from "@/components/content/ContentList";
import HomeSlider from "@/components/home/HomeSlider";
import HotNewsSwiper from "@/components/news/HotNewsSwiper";

export default function Home() {
  return (
    <div className="relative pt-3 space-y-12 max-w-full">
      <div className="flex gap-6 px-5">
        <div className="space-y-12">
          <HomeSlider />
          <ContentList
            title="Recommended for You"
            viewAllUrl="/recommended"
            swiperBreakpoints={{
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4.5,
              },
            }}
          />
        </div>

        <HotNewsSwiper />
      </div>
      <ContentList title="fdgdg" viewAllUrl="/recommended" />

      <ContentList title="rtyryr" viewAllUrl="/recommended" />
    </div>
  );
}
