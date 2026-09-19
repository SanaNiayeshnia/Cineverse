import { fakeMovies } from "@/lib/constants/ui/temporary.db";
import Image from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight } from "react-icons/tb";

export default function GridBannerGallery() {
  return (
    <div className="grid grid-cols-3 h-200 gap-6 rounded-lg overflow-hidden">
      {fakeMovies?.slice(0, 3).map((item, index) => (
        <div
          key={item?.id}
          className={`relative shadow-md group/banner ${
            index <= 1 ? "col-span-2" : ""
          } ${index === 2 ? "row-start-1 col-start-3 row-span-2" : ""}`}
        >
          <Image
            src={item?.image}
            alt={item?.title}
            fill
            className="object-cover object-center brightness-90 group-hover/banner:brightness-100 group-hover/banner:contrast-105 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 to-transparent to-35%"></div>
          <div
            className={`flex flex-col justify-between h-full p-4 relative ${
              index === 2 ? "items-center" : ""
            }`}
          >
            <div className="h-max self-end">
              <AppButton kind="primary" className=" shadow-lg" isMagnetic>
                More Details <TbArrowRight />
              </AppButton>
            </div>

            <div className="space-y-1">
              <p
                className={`space-x-1 font-medium flex ${
                  index === 2 ? "justify-center" : ""
                }`}
              >
                {item?.genres?.slice(0, 3).map((genre, index) => (
                  <span key={index} className="text-gray-300">
                    {genre}
                    <span className="text-primary-50">
                      {index < item?.genres?.slice(0, 3)?.length - 1 && ","}
                    </span>
                  </span>
                ))}
              </p>
              <p
                className={`text-5xl font-anton! tracking-wide ${
                  index === 2 ? "text-center" : ""
                }`}
              >
                {item?.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
