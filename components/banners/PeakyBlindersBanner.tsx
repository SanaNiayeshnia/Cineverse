"use client";
import PB_BG from "@/assets/images/banners/PB-bg.png";
import PB_CHARACTER from "@/assets/images/banners/PB-character.png";
import Image from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function PeakyBlindersBanner() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-7/2 px-5 mt-55 group/banner"
    >
      <Image
        src={PB_BG}
        placeholder="blur"
        alt=""
        className="object-cover object-center w-full h-full"
      />
      <AnimatePresence>
        {isHovered && (
          <div className="absolute left-20 top-15 max-w-1/2 gap-8">
            <BannerTitle isHovered={isHovered} />
            <p className="mt-3 line-clamp-5 text-white/60">
              Peaky Blinders is a British crime drama about the Shelby family in
              post-World War I Birmingham, as they build their power through
              criminal activities. Led by the cunning Tommy Shelby, the show
              mixes intense drama with historical grit.
            </p>
          </div>
        )}

        {!isHovered && <BannerTitle isHovered={isHovered} />}
      </AnimatePresence>

      <motion.div
        animate={{
          x: isHovered ? "0%" : "-50%",
        }}
        className={`absolute left-1/2 
         bottom-0  h-[145%] w-1/2`}
        transition={{
          layout: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
          x: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
      >
        <Image
          src={PB_CHARACTER}
          placeholder="blur"
          alt=""
          className={` w-full h-full object-cover`}
        />
      </motion.div>

      <AppButton href="" kind="primary" className="absolute bottom-13 right-20">
        Discover More <TbArrowRight />
      </AppButton>
    </div>
  );
}

function BannerTitle({ isHovered = false }: { isHovered: boolean }) {
  return (
    <motion.p
      layoutId="banner-title"
      className={`font-semibold bottom-4 left-1/2 z-2  flex items-center ${
        isHovered
          ? "static translate-x-0 text-4xl gap-2"
          : "absolute -translate-x-1/2 text-7xl gap-3"
      }`}
      transition={{
        layout: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
    >
      <span className="text-primary-50 font-playfair!">PEAKY</span>
      <span className="font-playfair!">BLINDERS</span>
    </motion.p>
  );
}
