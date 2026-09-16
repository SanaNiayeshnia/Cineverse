import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TbChevronDownFilled, TbChevronUp } from "react-icons/tb";
import { SidebarGroupItem } from "@/types/ui/sidebar.types";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

type SidebarCollapsibleGroupPropsType = {
  groupItem: SidebarGroupItem;
  openItem: string | null;
  setOpenItem: Dispatch<SetStateAction<string | null>>;
};

export default function SidebarCollapsibleGroup({
  groupItem,
  openItem,
  setOpenItem,
}: SidebarCollapsibleGroupPropsType) {
  const pathname = usePathname();
  const isGroupOpen = openItem === groupItem?.title;
  const GroupIcon = groupItem?.icon;
  return (
    <Collapsible
      open={isGroupOpen}
      onOpenChange={() =>
        setOpenItem((openItem) =>
          openItem === groupItem?.title ? null : groupItem?.title
        )
      }
      defaultOpen={groupItem?.title === "Main"}
      className="m-0!"
    >
      <SidebarGroup className="text-white! py-0!">
        <CollapsibleTrigger
          className={`cursor-pointer py-2 transition-all duration-300 hover:bg-white/7 rounded-sm`}
        >
          <SidebarGroupLabel className="text-white! text-base flex items-center gap-2 justify-between ">
            <div className="flex items-center gap-2 text-lg">
              <GroupIcon size={24} />
              {groupItem?.title}
            </div>
            <span
              className={`transition-all duration-300 ${
                isGroupOpen ? "text-primary-50" : ""
              }`}
            >
              {isGroupOpen ? <TbChevronUp /> : <TbChevronDownFilled />}
            </span>
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarGroupContent className="px-4">
            <SidebarMenu
              className={isGroupOpen ? "border-r" : ""}
              style={{
                borderImage:
                  "linear-gradient(to bottom, transparent, #e7bc0f, transparent) 1",
              }}
            >
              {groupItem?.children?.map((child) => (
                <SidebarMenuItem key={child?.title} className="relative py-1">
                  <Link
                    href={child?.url}
                    className={`flex items-center gap-2 transition-all duration-300 hover:ps-2`}
                  >
                    {pathname === child?.url && (
                      <div className="absolute top-0 bottom-0 -left-12 bg-primary-50 size-8 rounded-sm me-2"></div>
                    )}

                    <span
                      className={`text-base  ${
                        pathname === child?.url
                          ? "font-semibold text-primary-50!"
                          : "text-white/70!"
                      }`}
                    >
                      {child?.title}
                    </span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
