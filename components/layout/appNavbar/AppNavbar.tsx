import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import { RiSearchLine } from "react-icons/ri";
import ToggleSidebarButton from "../appSidebar/ToggleSidebarButton";

export default function AppNavbar() {
  return (
    <div className="px-5 z-10 py-3 flex justify-between gap-4 w-full sticky top-0 bg-gray-950">
      <ToggleSidebarButton />
      <InputGroup className="max-w-xs p-0.5! h-auto! rounded-xl bg-gray-900!">
        <InputGroupInput placeholder="Search..." className="text-base!" />
        <InputGroupAddon>
          <RiSearchLine className="size-4 text-white" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
    </div>
  );
}
