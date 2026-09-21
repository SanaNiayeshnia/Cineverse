"use client";

import Image, { StaticImageData } from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

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
  padding = 60,
}: AnimatedBannerWrrapperPropsType) {
  const [isHovered, setIsHovered] = useState(false);
  const isLtr = dir === "ltr";
  const { open } = useSidebar();
  const isMobile = useIsMobile({ mobileBreakpoint: 1024 });
  const isLessThan1280 = useIsMobile({ mobileBreakpoint: 1280 });

  const padd = padding + (!open ? 25 : 0) - (isLessThan1280 ? 25 : 0);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-5/2 md:aspect-7/2 mt-40 min-[500px]:mt-55 md:mt-40 xl:mt-46 2xl:mt-55 group/banner"
    >
      <Image
        src={bgImageData}
        placeholder="blur"
        alt=""
        className="object-cover object-center w-full h-full rounded-xl"
      />
      <AnimatePresence>
        {isHovered && !isMobile && (
          <div
            className={`absolute ${
              isLtr ? "left-0" : "right-0"
            } max-w-[45%] xl:max-w-140 gap-4 xl:gap-8 top-[4%] xl:top-[15%]`}
            style={{
              [isLtr ? "left" : "right"]: `${padd}px`,
            }}
          >
            <BannerTitle
              title={title}
              isHovered={isHovered}
              font={font}
              isMobile={isMobile}
            />
            <p
              className={`mt-3 line-clamp-4 xl:line-clamp-5 text-white/60 text-pretty xl:text-lg ${
                font === "playfair" ? "font-playfair!" : ""
              }`}
            >
              {description}
            </p>
          </div>
        )}

        {(!isHovered || isMobile) && (
          <BannerTitle
            title={title}
            isHovered={isHovered}
            font={font}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          x: isHovered && !isMobile ? "0%" : isLtr ? "-50%" : "50%",
        }}
        className={`absolute ${isLtr ? "left-1/2" : "right-1/2"}  
         bottom-0 h-[175%]  md:h-[145%] w-[90%] md:w-1/2`}
        transition={{
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
          className={`w-full h-full object-contain`}
        />
      </motion.div>

      <AppButton
        href={href}
        kind="primary"
        className="absolute hidden lg:bottom-[4%] xl:bottom-[15%] lg:block"
        style={{ right: `${padd}px` }}
      >
        <span className="hidden lg:block">Discover</span>
        <span>More</span>
        <TbArrowRight />
      </AppButton>
    </div>
  );
}

function BannerTitle({
  isHovered = false,
  title,
  font,
  isMobile = false,
}: {
  isHovered: boolean;
  title: string;
  font: "default" | "playfair";
  isMobile: boolean;
}) {
  const titleArray = title.split(" ");
  return (
    <motion.p
      {...(!isMobile ? { layoutId: `${title}-banner-title` } : {})}
      className={`font-semibold bottom-2 sm:bottom-4 left-1/2 z-2  flex items-center ${
        isHovered && !isMobile
          ? "static translate-x-0 text-3xl xl:text-4xl gap-2"
          : "absolute -translate-x-1/2 text-3xl sm:text-4xl md:text-5xl xl:text-7xl gap-3"
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
          font === "playfair" ? "font-playfair!" : "font-anton! tracking-wider"
        }`}
      >
        {titleArray?.slice(0, 1)}
      </span>
      {titleArray?.length > 1 && (
        <span
          className={`text-white! ${
            font === "playfair"
              ? "font-playfair!"
              : "font-anton! tracking-wider"
          }`}
        >
          {titleArray?.slice(1)}
        </span>
      )}
    </motion.p>
  );
}
