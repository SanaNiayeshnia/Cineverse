"use client";

import { ReactNode } from "react";
import GlobalContextProvider from "./global/GlobalContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <GlobalContextProvider>
      <TooltipProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </TooltipProvider>
    </GlobalContextProvider>
  );
}
