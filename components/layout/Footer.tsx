import Logo from "./Logo";
import { socialMedia } from "@/lib/constants/ui/footer.db";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Footer() {
  return (
    <div className="mx-5 mt-12 mb-5 bg-primary-50 text-gray-950 px-4 py-6 rounded-sm grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 sm:gap-4 items-center">
      <div className="flex justify-center sm:justify-start">
        <Logo variant="dark" />
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <p className="font-medium flex flex-wrap gap-1 justify-center">
          All rights reserved by <span>Sana Niayeshnia</span>
        </p>
        <p className="">Developed in 2026</p>
      </div>
      <div className="flex items-center justify-center sm:justify-end gap-3">
        {socialMedia?.map((item) => {
          const Icon = item?.icon;
          return (
            <Tooltip key={item?.title}>
              <TooltipTrigger className="hover:scale-115 active:scale-90 transition-all duration-300">
                <Link href={item?.url} target="_blank">
                  <Icon size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="[&_*]:bg-gray-950 bg-gray-950 text-white">
                {item?.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
