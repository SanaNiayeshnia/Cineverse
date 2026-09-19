"use client";

import Image, { StaticImageData } from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useSidebar } from "../ui/sidebar";

type AnimatedBannerWrrapperPropsType = {
  title: string;
  description: string;
  href: string;
  font?: "default" | "playfair";
  bgImageData: StaticImageData;
  characterImageData: StaticImageData;
  dir?: "rtl" | "ltr";
  padding?: number;
};

export default function AnimatedBannerWrrapper({
  title,
  description,
  href,
  font = "default",
  bgImageData,
  characterImageData,
  dir = "ltr",
  padding = 70,
}: AnimatedBannerWrrapperPropsType) {
  const [isHovered, setIsHovered] = useState(false);
  const isLtr = dir === "ltr";
  const { open } = useSidebar();
  const padd = padding + (!open ? 25 : 0);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-7/2 mt-55 group/banner"
    >
      <Image
        src={bgImageData}
        placeholder="blur"
        alt=""
        className="object-cover object-center w-full h-full rounded-xl"
      />
      <AnimatePresence>
        {isHovered && (
          <div
            className={`absolute ${
              isLtr ? "left-0" : "right-0"
            } top-15 max-w-140 gap-8`}
            style={{
              [isLtr ? "left" : "right"]: `${padd}px`,
            }}
          >
            <BannerTitle title={title} isHovered={isHovered} font={font} />
            <p
              className={`mt-3 line-clamp-5 text-white/60 text-pretty text-lg ${
                font === "playfair" ? "font-playfair!" : ""
              }`}
            >
              {description}
            </p>
          </div>
        )}

        {!isHovered && (
          <BannerTitle title={title} isHovered={isHovered} font={font} />
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          x: isHovered ? "0%" : isLtr ? "-50%" : "50%",
        }}
        className={`absolute ${isLtr ? "left-1/2" : "right-1/2"}  
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
          src={characterImageData}
          placeholder="blur"
          alt=""
          className={`w-full h-full object-cover`}
        />
      </motion.div>

      <AppButton
        href={href}
        kind="primary"
        className="absolute bottom-13"
        style={{ right: `${padd}px` }}
      >
        Discover More <TbArrowRight />
      </AppButton>
    </div>
  );
}

function BannerTitle({
  isHovered = false,
  title,
  font,
}: {
  isHovered: boolean;
  title: string;
  font: "default" | "playfair";
}) {
  const titleArray = title.split(" ");
  return (
    <motion.p
      layoutId={`${title}-banner-title`}
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
      <span
        className={`text-primary-50 ${
          font === "playfair" ? "font-playfair!" : "font-anton! tracking-wide"
        }`}
      >
        {titleArray?.slice(0, 1)}
      </span>
      {titleArray?.length > 1 && (
        <span
          className={
            font === "playfair" ? "font-playfair!" : "font-anton! tracking-wide"
          }
        >
          {titleArray?.slice(1)}
        </span>
      )}
    </motion.p>
  );
}
