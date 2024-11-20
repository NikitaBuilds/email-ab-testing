// src/components/ui/kpi-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
  description?: string;
  className?: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

export function KpiCard({
  title,
  value,
  trend,
  icon: Icon,
  description,
  className,
  valuePrefix,
  valueSuffix,
}: KpiCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            {valuePrefix && (
              <span className="text-xl text-muted-foreground">
                {valuePrefix}
              </span>
            )}
            <span className="text-2xl font-bold tracking-tight">
              {typeof value === "number" ? value.toLocaleString() : value}
            </span>
            {valueSuffix && (
              <span className="text-xl text-muted-foreground">
                {valueSuffix}
              </span>
            )}
          </div>
          {(trend !== undefined || description) && (
            <div className="flex items-center gap-1 text-sm">
              {trend !== undefined && (
                <span
                  className={cn(
                    "flex items-center gap-0.5",
                    trend > 0 ? "text-green-500" : "text-red-500"
                  )}
                >
                  {trend > 0 ? "↑" : "↓"}
                  {Math.abs(trend)}%
                </span>
              )}
              {description && (
                <span className="text-muted-foreground">{description}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
