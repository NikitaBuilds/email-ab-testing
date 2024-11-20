"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

// Types for our A/B test data
interface TestData {
  date: string;
  variantA: number;
  variantB: number;
}

// Test configuration
const chartConfig = {
  variantA: {
    label: "Variant A",
    color: "hsl(var(--chart-1))",
  },
  variantB: {
    label: "Variant B",
    color: "hsl(var(--chart-2))",
  },
} as const;

// Generate realistic A/B test data
const generateTestData = (): TestData[] => {
  const data: TestData[] = [];
  const startDate = new Date("2024-01-01");

  for (let i = 0; i < 90; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    // Generate realistic open rates with some variance
    const baseRate = 25 + Math.random() * 10;
    data.push({
      date: date.toISOString(),
      variantA: Number((baseRate + Math.random() * 5).toFixed(1)),
      variantB: Number((baseRate + Math.random() * 5).toFixed(1)),
    });
  }

  return data;
};

const chartData = generateTestData();

// Calculate totals for display
const total = {
  variantA:
    chartData.reduce((acc, curr) => acc + curr.variantA, 0) / chartData.length,
  variantB:
    chartData.reduce((acc, curr) => acc + curr.variantB, 0) / chartData.length,
};

export function CampaignPerformance() {
  const [activeVariant, setActiveVariant] = React.useState<
    "variantA" | "variantB"
  >("variantA");

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Email A/B Test Performance</CardTitle>
          <CardDescription>
            Comparing open rates between email variants over time
          </CardDescription>
        </div>
        <div className="flex">
          {["variantA", "variantB"].map((key) => {
            const variant = key as keyof typeof chartConfig;
            return (
              <button
                key={variant}
                data-active={activeVariant === variant}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveVariant(variant)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[variant].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[variant].toFixed(1)}%
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="openRate"
                  labelFormatter={(value: string) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  //   valueFormatter={(value: any) => `${value}%`}
                />
              }
            />
            <Bar
              dataKey={activeVariant}
              fill={`var(--color-${activeVariant})`}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import { format } from "date-fns";
// import { Download } from "lucide-react";
// import { useState } from "react";

// interface CampaignData {
//   id: string;
//   name: string;
//   date: string;
//   sentCount: number;
//   openRate: number;
//   clickRate: number;
//   conversionRate: number;
//   revenue: number;
//   category: string;
// }

// // Your existing campaignData array stays the same

// const categories = [
//   "All Campaigns",
//   "Newsletter",
//   "Promotional",
//   "Onboarding",
//   "Product Updates",
//   "Event Invitations",
// ];

// const timeRanges = [
//   { label: "Last 7 days", value: "7d" },
//   { label: "Last 14 days", value: "14d" },
//   { label: "Last 30 days", value: "30d" },
// ];

// const metrics = [
//   { label: "Open Rate (%)", value: "openRate" },
//   { label: "Click Rate (%)", value: "clickRate" },
//   { label: "Conversion Rate (%)", value: "conversionRate" },
//   { label: "Revenue ($)", value: "revenue" },
// ];

// export function CampaignPerformance() {
//   const [selectedMetric, setSelectedMetric] = useState("openRate");
//   const [selectedCategory, setSelectedCategory] = useState("All Campaigns");
//   const [timeRange, setTimeRange] = useState("30d");

//   const filteredData = campaignData
//     .filter(
//       (campaign) =>
//         selectedCategory === "All Campaigns" ||
//         campaign.category === selectedCategory
//     )
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//     .slice(-10); // Show last 10 campaigns for better visibility

//   const getBarColor = () => {
//     switch (selectedMetric) {
//       case "openRate":
//         return "hsl(var(--chart-1))";
//       case "clickRate":
//         return "hsl(var(--chart-2))";
//       case "conversionRate":
//         return "hsl(var(--chart-3))";
//       case "revenue":
//         return "hsl(var(--chart-4))";
//       default:
//         return "hsl(var(--chart-1))";
//     }
//   };

//   const formatYAxis = (value: number) => {
//     if (selectedMetric === "revenue") {
//       return `$${value.toLocaleString()}`;
//     }
//     return `${value.toFixed(1)}%`;
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle>Campaign Performance</CardTitle>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Analyze your campaign metrics over time
//               </p>
//             </div>
//             <Button variant="outline" size="icon">
//               <Download className="h-4 w-4" />
//             </Button>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             <Select value={selectedMetric} onValueChange={setSelectedMetric}>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select metric" />
//               </SelectTrigger>
//               <SelectContent>
//                 {metrics.map((metric) => (
//                   <SelectItem key={metric.value} value={metric.value}>
//                     {metric.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select
//               value={selectedCategory}
//               onValueChange={setSelectedCategory}
//             >
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Filter by type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {categories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Select value={timeRange} onValueChange={setTimeRange}>
//               <SelectTrigger className="w-[140px]">
//                 <SelectValue placeholder="Time range" />
//               </SelectTrigger>
//               <SelectContent>
//                 {timeRanges.map((range) => (
//                   <SelectItem key={range.value} value={range.value}>
//                     {range.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[400px] mt-4">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={filteredData}
//               margin={{ top: 20, right: 20, bottom: 20, left: 35 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
//               <XAxis
//                 dataKey="date"
//                 tickFormatter={(date) => format(new Date(date), "MMM d")}
//                 className="text-sm"
//               />
//               <YAxis tickFormatter={formatYAxis} className="text-sm" />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (!active || !payload) return null;
//                   const campaign = filteredData.find((c) => c.date === label);
//                   return (
//                     <div className="rounded-lg border border-border bg-card p-3 shadow-md">
//                       <p className="font-medium text-card-foreground mb-1">
//                         {campaign?.name}
//                       </p>
//                       <p className="text-sm text-muted-foreground mb-2">
//                         {format(new Date(label), "MMM d, yyyy")}
//                       </p>
//                       <div className="flex flex-col gap-1 text-sm">
//                         <p className="text-card-foreground">
//                           Sent:{" "}
//                           <span className="font-medium">
//                             {campaign?.sentCount.toLocaleString()}
//                           </span>
//                         </p>
//                         <p className="text-card-foreground">
//                           {
//                             metrics.find((m) => m.value === selectedMetric)
//                               ?.label
//                           }
//                           :{" "}
//                           <span className="font-medium">
//                             {selectedMetric === "revenue"
//                               ? `$${payload[0].value.toLocaleString()}`
//                               : `${payload[0].value.toFixed(1)}%`}
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 }}
//               />
//               <Bar
//                 dataKey={selectedMetric}
//                 fill={getBarColor()}
//                 radius={[4, 4, 0, 0]}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// const campaignData: CampaignData[] = [
//   {
//     id: "1",
//     name: "March Newsletter",
//     date: "2024-03-20",
//     sentCount: 25000,
//     openRate: 28.5,
//     clickRate: 4.2,
//     conversionRate: 2.1,
//     revenue: 3450,
//     category: "Newsletter",
//   },
//   {
//     id: "2",
//     name: "Spring Sale Announcement",
//     date: "2024-03-19",
//     sentCount: 50000,
//     openRate: 32.1,
//     clickRate: 6.8,
//     conversionRate: 3.4,
//     revenue: 8920,
//     category: "Promotional",
//   },
//   {
//     id: "3",
//     name: "New Feature Update",
//     date: "2024-03-18",
//     sentCount: 15000,
//     openRate: 45.2,
//     clickRate: 12.3,
//     conversionRate: 5.1,
//     revenue: 2780,
//     category: "Product Updates",
//   },
//   {
//     id: "4",
//     name: "Customer Appreciation Event",
//     date: "2024-03-17",
//     sentCount: 35000,
//     openRate: 38.7,
//     clickRate: 8.9,
//     conversionRate: 4.2,
//     revenue: 6340,
//     category: "Event Invitations",
//   },
//   {
//     id: "5",
//     name: "Welcome Series - Day 1",
//     date: "2024-03-16",
//     sentCount: 3000,
//     openRate: 65.3,
//     clickRate: 22.1,
//     conversionRate: 8.5,
//     revenue: 4250,
//     category: "Onboarding",
//   },
//   {
//     id: "6",
//     name: "February Newsletter Digest",
//     date: "2024-03-15",
//     sentCount: 24500,
//     openRate: 26.8,
//     clickRate: 3.9,
//     conversionRate: 1.8,
//     revenue: 2890,
//     category: "Newsletter",
//   },
//   {
//     id: "7",
//     name: "Flash Sale - 24h Only",
//     date: "2024-03-14",
//     sentCount: 45000,
//     openRate: 41.2,
//     clickRate: 15.6,
//     conversionRate: 7.2,
//     revenue: 12450,
//     category: "Promotional",
//   },
//   {
//     id: "8",
//     name: "Product Launch - Pro Plan",
//     date: "2024-03-13",
//     sentCount: 20000,
//     openRate: 48.5,
//     clickRate: 18.2,
//     conversionRate: 6.8,
//     revenue: 15780,
//     category: "Product Updates",
//   },
//   {
//     id: "9",
//     name: "Welcome Series - Day 2",
//     date: "2024-03-12",
//     sentCount: 2800,
//     openRate: 58.9,
//     clickRate: 19.5,
//     conversionRate: 7.1,
//     revenue: 3560,
//     category: "Onboarding",
//   },
//   {
//     id: "10",
//     name: "Webinar Invitation",
//     date: "2024-03-11",
//     sentCount: 18000,
//     openRate: 35.6,
//     clickRate: 9.8,
//     conversionRate: 3.9,
//     revenue: 4670,
//     category: "Event Invitations",
//   },
//   {
//     id: "11",
//     name: "Security Update Notice",
//     date: "2024-03-10",
//     sentCount: 55000,
//     openRate: 52.3,
//     clickRate: 15.7,
//     conversionRate: 2.8,
//     revenue: 1890,
//     category: "Product Updates",
//   },
//   {
//     id: "12",
//     name: "Early Bird Special",
//     date: "2024-03-09",
//     sentCount: 30000,
//     openRate: 39.8,
//     clickRate: 12.4,
//     conversionRate: 5.6,
//     revenue: 9340,
//     category: "Promotional",
//   },
//   {
//     id: "13",
//     name: "Welcome Series - Day 3",
//     date: "2024-03-08",
//     sentCount: 2600,
//     openRate: 54.2,
//     clickRate: 17.8,
//     conversionRate: 6.4,
//     revenue: 2980,
//     category: "Onboarding",
//   },
//   {
//     id: "14",
//     name: "Weekend Workshop Series",
//     date: "2024-03-07",
//     sentCount: 12000,
//     openRate: 42.7,
//     clickRate: 13.2,
//     conversionRate: 4.8,
//     revenue: 5670,
//     category: "Event Invitations",
//   },
//   {
//     id: "15",
//     name: "Monthly Product Roundup",
//     date: "2024-03-06",
//     sentCount: 28000,
//     openRate: 31.5,
//     clickRate: 7.8,
//     conversionRate: 2.9,
//     revenue: 4320,
//     category: "Newsletter",
//   },
//   {
//     id: "16",
//     name: "Exclusive Member Discount",
//     date: "2024-03-05",
//     sentCount: 40000,
//     openRate: 44.6,
//     clickRate: 16.3,
//     conversionRate: 7.8,
//     revenue: 18900,
//     category: "Promotional",
//   },
//   {
//     id: "17",
//     name: "API Documentation Update",
//     date: "2024-03-04",
//     sentCount: 8000,
//     openRate: 58.9,
//     clickRate: 25.4,
//     conversionRate: 4.2,
//     revenue: 3450,
//     category: "Product Updates",
//   },
//   {
//     id: "18",
//     name: "Welcome Series - Day 4",
//     date: "2024-03-03",
//     sentCount: 2400,
//     openRate: 51.2,
//     clickRate: 16.5,
//     conversionRate: 5.8,
//     revenue: 2670,
//     category: "Onboarding",
//   },
//   {
//     id: "19",
//     name: "Virtual Conference 2024",
//     date: "2024-03-02",
//     sentCount: 22000,
//     openRate: 46.8,
//     clickRate: 18.9,
//     conversionRate: 8.2,
//     revenue: 22450,
//     category: "Event Invitations",
//   },
//   {
//     id: "20",
//     name: "Winter Newsletter Recap",
//     date: "2024-03-01",
//     sentCount: 26000,
//     openRate: 29.4,
//     clickRate: 5.6,
//     conversionRate: 2.3,
//     revenue: 3780,
//     category: "Newsletter",
//   },
//   {
//     id: "21",
//     name: "Premium Feature Preview",
//     date: "2024-02-29",
//     sentCount: 15000,
//     openRate: 49.7,
//     clickRate: 20.3,
//     conversionRate: 6.9,
//     revenue: 8900,
//     category: "Product Updates",
//   },
//   {
//     id: "22",
//     name: "Last Chance Sale",
//     date: "2024-02-28",
//     sentCount: 48000,
//     openRate: 36.8,
//     clickRate: 13.5,
//     conversionRate: 6.2,
//     revenue: 15670,
//     category: "Promotional",
//   },
//   {
//     id: "23",
//     name: "Welcome Series - Day 5",
//     date: "2024-02-27",
//     sentCount: 2200,
//     openRate: 48.5,
//     clickRate: 15.2,
//     conversionRate: 5.4,
//     revenue: 2340,
//     category: "Onboarding",
//   },
// ];
