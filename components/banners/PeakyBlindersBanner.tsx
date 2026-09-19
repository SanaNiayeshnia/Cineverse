import AnimatedBannerWrrapper from "./AnimatedBannerWrapper";
import PB_BG from "@/assets/images/banners/PB-bg.png";
import PB_CHARACTER from "@/assets/images/banners/PB-character.png";
export default function PeakyBlindersBanner() {
  return (
    <AnimatedBannerWrrapper
      title="PEAKY BLINDERS"
      description="Peaky Blinders is a British crime drama about the Shelby family in post-World War I Birmingham, as they build their power through criminal activities. Led by the cunning Tommy Shelby, the show follows their rise through violence, ambition, and political intrigue, mixing intense family drama with historical grit and a dark, atmospheric world."
      href="/movies/peaky-blinders"
      characterImageData={PB_CHARACTER}
      bgImageData={PB_BG}
    />
  );
}
