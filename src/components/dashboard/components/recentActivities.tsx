import { UserPlus, Wallet, RefreshCw, Mail, LucideIcon } from "lucide-react";
import { activities } from "@/mock/dashboard";

const RecentActivities = () => {
  return (
    <section
      className="
        bg-white
        border border-[var(--border)]
        rounded-[32px]
        md:p-8
        px-6 py-8
        shadow-sm
      "
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h4 className="font-bold text-[var(--text-primary)] tracking-[-0.02em]">
            Recent Activities
          </h4>

          <p className="mt-1 text-[15px] text-[var(--text-secondary)]">
            Live updates from the faculty and student portals.
          </p>
        </div>

        <button
          className="
            text-[15px]
            font-semibold
            text-[var(--text-primary)]
            hover:opacity-70
            transition
          "
        >
          View All Logs
        </button>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="
                flex items-center justify-between
                gap-5
                md:rounded-[24px] rounded-[16px]
                bg-[#F8F9FB]
                md:px-4 md:py-3
                px-3 py-2
                transition-all duration-300
                hover:bg-[#F3F5F8]
              "
            >
              {/* LEFT */}
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className={`
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    shrink-0
                    ${activity.iconBg}
                  `}
                >
                  <Icon size={22} className={activity.iconColor} />
                </div>

                <div className="min-w-0">
                  <p
                    className="font-semibold text-[var(--text-primary)] overflow-hidden
      text-ellipsis
      line-clamp-2
      leading-5"
                  >
                    {activity.title}
                  </p>

                  <p
                    className="
      text-xs
      text-[var(--text-secondary)]
      overflow-hidden
      text-ellipsis
      line-clamp-2
      leading-5
    "
                  >
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* TIME */}
              <span
                className="
                  text-[14px]
                  font-medium
                  text-[var(--text-secondary)]
                  shrink-0
                "
              >
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivities;
