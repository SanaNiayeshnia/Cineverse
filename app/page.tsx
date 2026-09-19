import GridBannerGallery from "@/components/banners/GridBannerGallery";
import LegendBanner from "@/components/banners/LegendBanner";
import PeakyBlindersBanner from "@/components/banners/PeakyBlindersBanner";
import ContentList from "@/components/content/ContentList";
import ContentByGenre from "@/components/content/genres/ContentByGenre";
import HomeSlider from "@/components/home/HomeSlider";
import HotNewsSwiper from "@/components/news/HotNewsSwiper";

export default function Home() {
  return (
    <div className="relative pt-3 px-5 space-y-12 max-w-full">
      <div className="flex justify-start gap-6 ">
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
      <ContentList title="Trending Movies" viewAllUrl="/trending/movies" />
      <PeakyBlindersBanner />
      <ContentList title="Trending Series" viewAllUrl="/trending/series" />
      <ContentByGenre />
      <GridBannerGallery />
      <ContentList title="Trending TV Shows" viewAllUrl="/trending/tv-shows" />
      <ContentList title="Top Rated" viewAllUrl="/top-rated" />
      <LegendBanner />
      <ContentList title="My WatchList" viewAllUrl="/me/watchlist" />
    </div>
  );
}
