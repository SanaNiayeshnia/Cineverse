import { SidebarGroupItem } from "@/types/ui/sidebar.types";
import {
  TbHome,
  TbTrendingUp,
  TbCompass,
  TbMovie,
  TbDeviceTv,
  TbHeart,
  TbBookmark,
  TbStar,
  TbHistory,
  TbMasksTheater,
  TbWorld,
  TbCalendar,
  TbTrophy,
  TbSettings,
  TbUser,
  TbLayoutDashboard,
  TbUserHeart,
  TbCategory,
} from "react-icons/tb";
export const sidebarItems: SidebarGroupItem[] = [
  {
    title: "Main",
    icon: TbLayoutDashboard,
    children: [
      {
        title: "Home",
        url: "/",
        icon: TbHome,
      },
      {
        title: "Trending",
        url: "/trending",
        icon: TbTrendingUp,
      },
      {
        title: "Discover",
        url: "/discover",
        icon: TbCompass,
      },
      {
        title: "Movies",
        url: "/movies",
        icon: TbMovie,
      },
      {
        title: "TV Shows",
        url: "/tv-shows",
        icon: TbDeviceTv,
      },
    ],
  },

  {
    title: "Your Space",
    icon: TbUserHeart,
    children: [
      {
        title: "Favorites",
        url: "/favorites",
        icon: TbHeart,
      },
      {
        title: "Watchlist",
        url: "/watchlist",
        icon: TbBookmark,
      },
      {
        title: "My Ratings",
        url: "/ratings",
        icon: TbStar,
      },
      {
        title: "Watch History",
        url: "/history",
        icon: TbHistory,
      },
    ],
  },

  {
    title: "Explore",
    icon: TbCategory,
    children: [
      {
        title: "Genres",
        url: "/genres",
        icon: TbMasksTheater,
      },
      {
        title: "Countries",
        url: "/countries",
        icon: TbWorld,
      },
      {
        title: "Coming Soon",
        url: "/coming-soon",
        icon: TbCalendar,
      },
      {
        title: "Top Rated",
        url: "/top-rated",
        icon: TbTrophy,
      },
    ],
  },
];
