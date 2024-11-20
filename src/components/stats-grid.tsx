// src/components/dashboard/stats-grid.tsx
import { cn } from "@/lib/utils";
import { KpiCard } from "./kpi-card";
import { Users, Mail, MousePointer, Activity } from "lucide-react";

interface StatsData {
  subscribers: number;
  openRate: number;
  clickRate: number;
}

interface StatsGridProps {
  data?: StatsData;
  className?: string;
}

const statsData = {
  subscribers: 14567,
  openRate: 24.8,
  clickRate: 3.2,
};

export function StatsGrid({ data = statsData, className }: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 transition-all",
        "grid-cols-1  lg:grid-cols-3",
        className
      )}
    >
      <KpiCard
        title="Total Subscribers"
        value={data.subscribers}
        trend={12.5}
        icon={Users}
        description="vs. last month"
      />
      <KpiCard
        title="Open Rate"
        value={data.openRate}
        valueSuffix="%"
        trend={-2.3}
        icon={Mail}
        description="vs. last month"
      />
      <KpiCard
        title="Click Rate"
        value={data.clickRate}
        valueSuffix="%"
        trend={5.7}
        icon={MousePointer}
        description="vs. last month"
      />
    </div>
  );
}
