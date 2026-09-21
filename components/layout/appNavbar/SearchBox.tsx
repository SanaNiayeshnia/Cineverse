import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  return (
    <InputGroup className="max-w-max md:max-w-xs group h-auto! rounded-xl bg-transparent! border-none! md:bg-primary-40! dark:md:bg-gray-900! focus-within:ring-primary-20! transition-all duration-200">
      <InputGroupInput
        placeholder="Search..."
        className="text-base! hidden md:block placeholder:text-gray-600 dark:placeholder:text-gray-400"
      />
      <InputGroupAddon className="py-1.5! px-2.5! group-active:text-primary-50 transition-all duration-300">
        <RiSearchLine className="size-4.5! text-gray-950 dark:text-white" />
      </InputGroupAddon>
      <InputGroupAddon
        align="inline-end"
        className="hidden md:block text-gray-600 dark:text-gray-400"
      >
        12 results
      </InputGroupAddon>
    </InputGroup>
  );
}
