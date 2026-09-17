import ContentList from "@/components/content/ContentList";
import HomeSlider from "@/components/home/HomeSlider";

export default function Home() {
  return (
    <div className="relative  pt-5 space-y-10 max-w-full">
      <HomeSlider />
      <ContentList title="Recommended for You" viewAllUrl="/recommended" />
      <ContentList title="fdgdg" viewAllUrl="/recommended" />

      <ContentList title="rtyryr" viewAllUrl="/recommended" />
    </div>
  );
}
