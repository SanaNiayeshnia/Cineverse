import ToggleSidebarButton from "../appSidebar/ToggleSidebarButton";
import Logo from "../Logo";
import SearchBox from "./SearchBox";

export default function AppNavbar() {
  return (
    <div className="px-5 z-10 py-3 flex justify-between gap-4 w-full sticky top-0 bg-gray-950">
      <Logo className="lg:hidden" />
      <div className="flex flex-row-reverse lg:flex-row lg:justify-between  lg:gap-4 lg:grow">
        <ToggleSidebarButton />
        <SearchBox />
      </div>
    </div>
  );
}
