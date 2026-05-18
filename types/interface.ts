import { LucideIcon } from "lucide-react";


// Dashboard related interfaces
export interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}