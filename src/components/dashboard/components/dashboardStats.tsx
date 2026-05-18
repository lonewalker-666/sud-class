

import {
    GraduationCap,
    BriefcaseBusiness,
    BookOpen,
    TrendingUp,
} from "lucide-react";
import StatsCard from "../../common/statsCard";

const DashboardStats = () => {
    return (
        <section
            className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      "
        >
            <StatsCard
                title="Total Students"
                value="248"
                change="12% this month"
                icon={GraduationCap}
                iconBg="bg-[#E8E7FF]"
                iconColor="text-[#4F46E5]"
            />

            <StatsCard
                title="Total Teachers"
                value="18"
                change="2 new"
                icon={BriefcaseBusiness}
                iconBg="bg-[#F4E8FF]"
                iconColor="text-[#9333EA]"
            />

            <StatsCard
                title="Active Classes"
                value="32"
                icon={BookOpen}
                iconBg="bg-[#DCFCE7]"
                iconColor="text-[#16A34A]"
            />

            <StatsCard
                title="Avg Performance"
                value="83%"
                change="5% improvement"
                icon={TrendingUp}
                iconBg="bg-[#E8EFFF]"
                iconColor="text-[#2563EB]"
            />
        </section>
    );
};

export default DashboardStats;