import { IconType } from "react-icons";

export type SidebarItem = { title: string; url: string; icon: IconType };

export type SidebarGroupItem = {
  title: string;
  url?: string;
  icon: IconType;
  children?: SidebarItem[];
};
