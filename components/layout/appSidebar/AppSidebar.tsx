"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../Logo";
import SidebarCollapsibleGroup from "./SidebarCollapsibleGroup";
import { sidebarItems } from "@/lib/constants/ui/sidebar.db";
import { useState } from "react";
import { TbSettings } from "react-icons/tb";
import SidebarProfileItem from "./SidebarProfileItem";
import Link from "next/link";
import { motion } from "motion/react";
import useGlobalContext from "@/contexts/global/useGlobalContext";

export function AppSidebar() {
  const [openItem, setOpenItem] = useState<string | null>("Main");
  const { mode } = useGlobalContext();

  return (
    <Sidebar className=" border-0! ">
      <div
        className="border-2 h-full rounded-md py-4 flex flex-col"
        style={{
          borderImage: `linear-gradient(to bottom, transparent, ${
            mode === "dark" ? "white" : "#e7bc0f"
          }, transparent) 1`,
        }}
      >
        <div className="grow space-y-6">
          <SidebarHeader>
            <motion.div
              layoutId="logo"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo />
            </motion.div>
          </SidebarHeader>

          <SidebarContent className="space-y-2">
            {sidebarItems?.map((groupItem) => (
              <SidebarCollapsibleGroup
                key={groupItem?.title}
                groupItem={groupItem}
                openItem={openItem}
                setOpenItem={setOpenItem}
              />
            ))}
            <hr className="mx-4 mt-2 mb-2 border-primary-50 dark:border-white/30" />
            <SidebarGroup className=" py-0">
              <SidebarGroupContent>
                <SidebarMenu className=" space-y-4">
                  <SidebarMenuItem>
                    <Link
                      href="/settings"
                      className="flex hover:bg-primary-10 dark:hover:bg-white/7 rounded-sm items-center gap-2 text-lg transition-all duration-300 p-2"
                    >
                      <TbSettings size={24} />
                      Settings
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
        <SidebarFooter>
          <SidebarProfileItem />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
