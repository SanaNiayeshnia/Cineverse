import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  return (
    <InputGroup className="max-w-max md:max-w-xs group h-auto! rounded-xl bg-transparent! border-none! md:bg-gray-900!">
      <InputGroupInput
        placeholder="Search..."
        className="text-base! hidden md:block"
      />
      <InputGroupAddon className="py-1.5! px-2.5! group-active:text-primary-50 transition-all duration-300">
        <RiSearchLine className="size-4.5! text-white" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end" className="hidden md:block">
        12 results
      </InputGroupAddon>
    </InputGroup>
  );
}
