"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import Logo from "../Logo";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ToggleSidebarButton() {
  const { open: isSidebarOpen, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile({ mobileBreakpoint: 1024 });
  const Icon = isSidebarOpen ? TbMenu2 : TbMenu3;

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Icon
        size={38}
        className="hover:text-primary-50 active:text-primary-50 cursor-pointer hover:bg-white/10 transition-all duration-300 rounded-full p-2 hover:scale-120 active:scale-80"
        onClick={toggleSidebar}
      />
      {!isSidebarOpen && !isMobile && (
        <motion.div
          {...(!isMobile ? { layoutId: "logo" } : {})}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo />
        </motion.div>
      )}
    </div>
  );
}
