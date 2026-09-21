"use client";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useEffect } from "react";
import useGlobalContext from "@/contexts/global/useGlobalContext";
import { ModeType } from "@/contexts/global/GlobalContext";

export default function ModeSwitch() {
  const { mode, toggleMode } = useGlobalContext();
  const isDarkMode = mode === "dark";

  useEffect(() => {
    const activeMode = localStorage.getItem("mode") as ModeType;
    if (activeMode === "dark" || !activeMode)
      document.documentElement.classList.add("dark");
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          onClick={toggleMode}
          className={`p-1 rounded-full text-2xl transition-all duration-300 cursor-pointer hover:scale-115 active:scale-90 hover:rotate-360 ${
            isDarkMode
              ? "text-primary-50 bg-gray-800 active:ring-3 hover:text-amber-500 active:ring-primary-50/50"
              : "bg-sky-900 active:ring-3 active:ring-sky-200/50"
          }`}
        >
          {isDarkMode ? (
            <TbSunFilled />
          ) : (
            <TbMoonFilled className="text-white!" />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>{isDarkMode ? "Light Mode" : "Dark Mode"}</TooltipContent>
    </Tooltip>
  );
}
