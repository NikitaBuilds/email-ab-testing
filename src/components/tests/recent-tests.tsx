// src/components/dashboard/tests/recent-tests.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { MoreHorizontal, ExternalLink, StopCircle } from "lucide-react";
import { Test, TestStatus } from "@/types/test";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecentTestsProps {
  tests?: Test[];
  onStopTest: (testId: string) => void;
  className?: string;
}

const statusConfig: Record<
  TestStatus,
  {
    label: string;
    variant: "default" | "destructive" | "secondary" | "outline";
  }
> = {
  running: { label: "Running", variant: "default" },
  completed: { label: "Completed", variant: "secondary" },
  stopped: { label: "Stopped", variant: "destructive" },
  draft: { label: "Draft", variant: "outline" },
};

const recentTests: Test[] = [
  {
    id: "1",
    name: "Homepage CTA Test",
    status: "running",
    type: "content",
    performance: {
      variantA: 0.234,
      variantB: 0.256,
      confidence: 0.87,
      totalSent: 5000,
    },
    startDate: new Date("2024-03-15"),
    description: "Testing new CTA copy variations",
  },
  {
    id: "2",
    name: "Email Subject Line Test",
    status: "completed",
    type: "subject",
    performance: {
      variantA: 0.189,
      variantB: 0.167,
      confidence: 0.96,
      totalSent: 10000,
    },
    startDate: new Date("2024-03-10"),
    endDate: new Date("2024-03-14"),
    description: "Question vs. Statement subject lines",
  },
  {
    id: "3",
    name: "Send Time Optimization",
    status: "running",
    type: "timing",
    performance: {
      variantA: 0.212,
      variantB: 0.198,
      confidence: 0.76,
      totalSent: 7500,
    },
    startDate: new Date("2024-03-18"),
    description: "Morning vs. Evening delivery",
  },
  {
    id: "4",
    name: "Newsletter Format Test",
    status: "completed",
    type: "content",
    performance: {
      variantA: 0.245,
      variantB: 0.278,
      confidence: 0.92,
      totalSent: 15000,
    },
    startDate: new Date("2024-03-05"),
    endDate: new Date("2024-03-12"),
    description: "Single-column vs. Two-column layout",
  },
];

function formatPerformance(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

function StatusBadge({ status }: { status: TestStatus }) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

function PerformanceCell({
  performance,
}: {
  performance: Test["performance"];
}) {
  const winner = performance.variantA > performance.variantB ? "A" : "B";
  const winningRate = Math.max(performance.variantA, performance.variantB);
  const confidence = performance.confidence;

  return (
    <div className="flex flex-col gap-0.5">
      <div className="text-sm font-medium">
        Variant {winner}: {formatPerformance(winningRate)}
      </div>
      <div className="text-xs text-muted-foreground">
        {confidence >= 0.95 ? "Statistically Significant" : "Gathering Data..."}
      </div>
    </div>
  );
}

export function RecentTests({
  tests = recentTests,
  onStopTest,
  className,
}: RecentTestsProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Tests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[200px]">Performance</TableHead>
                <TableHead className="w-[100px]">Started</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.id}>
                  <TableCell className="font-medium">{test.name}</TableCell>
                  <TableCell>
                    <StatusBadge status={test.status} />
                  </TableCell>
                  <TableCell>
                    <PerformanceCell performance={test.performance} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(test.startDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/tests/${test.id}`}
                            className="flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        {test.status === "running" && (
                          <DropdownMenuItem
                            onClick={() => onStopTest(test.id)}
                            className="text-red-600 focus:text-red-600"
                          >
                            <StopCircle className="mr-2 h-4 w-4" />
                            Stop Test
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
