"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import Logo from "../Logo";
import { motion } from "motion/react";

export default function ToggleSidebarButton() {
  const { open, toggleSidebar } = useSidebar();

  const Icon = open ? TbMenu2 : TbMenu3;
  return (
    <div className="flex items-center gap-4">
      <Icon
        size={38}
        className="text-primary-50 cursor-pointer hover:bg-white/10 transition-all duration-300 rounded-full p-2 hover:scale-120 active:scale-80"
        onClick={toggleSidebar}
      />
      {!open && (
        <motion.div
          layoutId="logo"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo />
        </motion.div>
      )}
    </div>
  );
}
