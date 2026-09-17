import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { RiSearchLine } from "react-icons/ri";

export default function AppNAvbar() {
  return (
    <div className="px-2 py-3 flex justify-end gap-4 w-full sticky top-0 bg-gray-950">
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
