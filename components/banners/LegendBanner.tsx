import AnimatedBannerWrrapper from "./AnimatedBannerWrapper";
import LEGEND_BG from "@/assets/images/banners/legend-bg.png";
import LEGEND_CHARACTER from "@/assets/images/banners/legend-characters.png";

export default function LegendBanner() {
  return (
    <AnimatedBannerWrrapper
      title="LEGEND"
      description="Legend is a 2015 biographical gangster film written and directed by Brian Helgeland. The film follows the Kray twins' career and relationship together through their convictions for murder and sentencing to life imprisonment in 1969. Tom Hardy plays both Reggie and Ron Kray in a dual role."
      href="/movies/legend"
      characterImageData={LEGEND_CHARACTER}
      bgImageData={LEGEND_BG}
      dir="rtl"
      padding={15}
    />
  );
}
