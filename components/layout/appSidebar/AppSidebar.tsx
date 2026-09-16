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

export function AppSidebar() {
  const [openItem, setOpenItem] = useState<string | null>("Main");

  return (
    <Sidebar className=" border-0! ">
      <div
        className="border h-full rounded-md py-4 flex flex-col"
        style={{
          borderImage:
            "linear-gradient(to bottom, transparent, white, transparent) 1",
        }}
      >
        <div className="grow space-y-6">
          <SidebarHeader>
            <Logo />
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
            <hr className="mx-4 mt-2 mb-2 border-white/30" />
            <SidebarGroup className="text-white py-0">
              <SidebarGroupContent>
                <SidebarMenu className=" space-y-4">
                  <SidebarMenuItem>
                    <Link
                      href="/settings"
                      className="flex hover:bg-white/7 rounded-sm items-center gap-2 text-lg transition-all duration-300 p-2"
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
