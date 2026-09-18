import { News } from "@/types/ui/global.types";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";

type NewsCardsPropsType = { news: News; indexLabel: string };

export default function NewsCard({ news, indexLabel }: NewsCardsPropsType) {
  return (
    <div className="rounded-xl p-4 bg-gray-900 flex flex-col gap-4 w-full h-full">
      <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
        <Image
          fill
          src={news?.image}
          alt={news?.title}
          className="object-cover object-center"
        />
      </div>

      <div className="grow flex flex-col justify-between gap-6">
        <div className="space-y-2 grow">
          <h4 className="font-semibold text-lg text-primary-50 flex items-center gap-1">
            <HiBadgeCheck size={24} />
            Hot News
          </h4>
          <p className="line-clamp-20">{news?.description}</p>
        </div>

        <div className="flex justify-between gap-2 items-center text-sm text-white/70">
          <p>{news?.date}</p>
          <p>{indexLabel}</p>
        </div>
      </div>
    </div>
  );
}
