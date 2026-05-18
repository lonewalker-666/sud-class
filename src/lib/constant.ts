import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck2,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Settings,
} from "lucide-react";

export const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Classes",
    path: "/classes",
    icon: BookOpen,
  },

  {
    name: "Bookings",
    path: "/bookings",
    icon: CalendarCheck2,
  },

  {
    name: "Teachers",
    path: "/teachers",
    icon: BriefcaseBusiness,
  },

  {
    name: "Students",
    path: "/students",
    icon: Users,
  },

  {
    name: "Schedule Planner",
    path: "/schedule-planner",
    icon: CalendarDays,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export const BACKEND_URI: string | undefined =
  process.env.NEXT_PUBLIC_BACKEND_URI;

