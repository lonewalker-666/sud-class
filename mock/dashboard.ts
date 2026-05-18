import { Activity } from "@/types/interface";
import { UserPlus, Wallet, RefreshCw, Mail } from "lucide-react";

export const activities: Activity[] = [
  {
    id: 1,
    title: "Student Enrollment",
    description:
      'Elena Gilbert joined "Modern Abstract Painting"',
    time: "2m ago",
    icon: UserPlus,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#4F46E5]",
  },

  {
    id: 2,
    title: "Fee Payment Received",
    description:
      "Payment of $1,200 received from Marcus Holloway",
    time: "15m ago",
    icon: Wallet,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
  },

  {
    id: 3,
    title: "Schedule Update",
    description:
      'Workshop "Light & Shadow" moved to Room 402',
    time: "1h ago",
    icon: RefreshCw,
    iconBg: "bg-[#FFEDD5]",
    iconColor: "text-[#EA580C]",
  },

  {
    id: 4,
    title: "System Notification",
    description:
      "Weekly automated report generated and mailed",
    time: "3h ago",
    icon: Mail,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
  },
];