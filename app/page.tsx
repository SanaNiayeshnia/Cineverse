import GridBannerGallery from "@/components/banners/GridBannerGallery";
import LegendBanner from "@/components/banners/LegendBanner";
import PeakyBlindersBanner from "@/components/banners/PeakyBlindersBanner";
import ContentList from "@/components/content/ContentList";
import ContentByGenre from "@/components/content/genres/ContentByGenre";
import RecommendedForYou from "@/components/content/userSpace/RecommendedForYou";
import HomeSlider from "@/components/home/HomeSlider";
import HotNewsSwiper from "@/components/news/HotNewsSwiper";

export default function Home() {
  return (
    <div className="relative pt-3 px-4 sm:px-5 space-y-12 max-w-full">
      <div className="grid   xl:place-items-start grid-cols-1 xl:grid-cols-[1fr_1fr_0.6fr] gap-x-8 gap-y-12 ">
        <div className=" xl:col-span-2 w-full">
          <HomeSlider />
        </div>
        <div className="xl:col-start-3 xl:row-span-2">
          <HotNewsSwiper />
        </div>
        <div className="row-start-2 xl:col-span-2 xl:row-start-2">
          <RecommendedForYou />
        </div>
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
