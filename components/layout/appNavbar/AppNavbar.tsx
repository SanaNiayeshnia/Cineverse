import ToggleSidebarButton from "../appSidebar/ToggleSidebarButton";
import SearchBox from "./SearchBox";

export default function AppNavbar() {
  return (
    <div className="px-5 z-10 py-3 flex justify-between gap-4 w-full sticky top-0 bg-gray-950">
      <ToggleSidebarButton />
      <SearchBox />
    </div>
  );
}
