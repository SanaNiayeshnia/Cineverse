"use client";
import { Content } from "@/types/ui/content.types";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { TbStarFilled } from "react-icons/tb";

type ContentCardPropsType = {
  content: Content;
  listTitle: string;
};

export default function ContentCard({
  listTitle,
  content,
}: ContentCardPropsType) {
  const genres = content?.genres?.slice(0, 3);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-gray-800 p-2 rounded-lg overflow-hidden relative group/card cursor-pointer"
    >
      <Image
        src={content?.image}
        alt={content?.title}
        fill
        className="object-cover object-center rounded-lg"
      />
      <div className="absolute inset-0 backdrop-blur-2xl backdrop-brightness-50 bg-linear-to-t from-gray-950"></div>

      <div className="w-45 h-58 relative rounded-md overflow-hidden">
        <p className="absolute top-2 left-2 z-2 text-xs flex items-center gap-1 bg-gray-900 rounded py-0.5 px-1 group-hover/card:left-1/2 group-hover/card:-translate-x-1/2  group-hover/card:bg-transparent transition-all duration-300">
          <TbStarFilled className="text-primary-50" size={13} />
          {content?.imdb}/10
        </p>
        <Image
          src={content?.image}
          alt={content?.title}
          fill
          className="object-cover object-center rounded-md"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-950 flex items-end justify-center ">
          <div className="translate-y-full group-hover/card:translate-y-0 absolute inset-0 bg-gray-950/60 transition-all duration-300 flex items-center">
            {isHovered && (
              <motion.div
                layoutId={`${listTitle}-${content?.id}-content-details`}
                className="space-y-3"
              >
                <div className="space-y-1.5 flex flex-col items-center">
                  <motion.p
                    layoutId={`${listTitle}-${content?.id}-content-details-title`}
                    className="font-medium text-sm line-clamp-1"
                  >
                    {content?.title}
                  </motion.p>
                  <p className="text-xs text-white/80">
                    {content?.type} ({content?.releaseYear})
                  </p>
                </div>
                <p className="text-xs line-clamp-4 text-center text-pretty text-white/80">
                  {content?.description}
                </p>
              </motion.div>
            )}
          </div>
          {!isHovered && (
            <motion.div
              layoutId={`${listTitle}-${content?.id}-content-details`}
              className="space-y-1.5 flex flex-col items-center"
            >
              <motion.p
                layoutId={`${listTitle}-${content?.id}-content-details-title`}
                className="font-medium text-sm line-clamp-1"
              >
                {content?.title}
              </motion.p>
              <p className="flex items-center text-white/80">
                {genres?.map((genre, index) => (
                  <span key={index} className="text-xs me-0.5">
                    {genre}
                    {index !== genres?.length - 1 && ","}
                  </span>
                ))}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
