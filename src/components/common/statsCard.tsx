import { TrendingDown, TrendingUp, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;

  icon: LucideIcon;

  iconBg?: string;
  iconColor?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  icon: Icon,

  iconBg = "bg-[var(--info-bg)]",
  iconColor = "text-[var(--info)]",
}: StatsCardProps) => {
  const isNegative = change?.trim().startsWith("-");

  return (
    <div
      className="
        bg-white
        border
        border-[var(--border)]
        rounded-[28px]
        p-6
        min-h-[145px]
        flex flex-col
        shadow-sm
        hover:shadow-md
        transition-all duration-300
      "
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-[var(--text-secondary)]">
          {title}
        </h3>

        <div
          className={`
            w-11 h-11 rounded-2xl
            flex items-center justify-center
            ${iconBg}
          `}
        >
          <Icon size={20} className={iconColor} />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-2">
        <h4 className="leading-none font-bold text-[var(--text-primary)] tracking-tight">
          {value}
        </h4>

        {change && (
          <p
            className={`
              inline-flex items-center gap-1.5
              text-sm font-semibold
              ${
                isNegative
                  ? "text-[var(--danger)]"
                  : "text-[var(--success)]"
              }
            `}
          >
            {isNegative ? (
              <TrendingDown size={15} />
            ) : (
              <TrendingUp size={15} />
            )}

            <span>{change.replace("-", "")}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;