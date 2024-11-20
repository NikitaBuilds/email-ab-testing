"use client";

import { StatsGrid } from "@/components/stats-grid";
import { RecentTests } from "@/components/tests/recent-tests";
import { Test } from "@/types/test";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CampaignPerformance } from "@/components/campaign-performance";
import { TopSubjectLines } from "@/components/top-subject-lines";

export default function Page() {
  const handleStopTest = (testId: string) => {
    console.log("Stopping test:", testId);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Monitor your email testing performance and metrics.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Test
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
          {/* Stats Section - Full Width */}
          <section className="xl:col-span-3" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="sr-only">
              Performance Statistics
            </h2>
          </section>

          {/* Main Content Area */}
          <section className="xl:col-span-3 space-y-8">
            <StatsGrid />
            <CampaignPerformance />
            <RecentTests
              // tests={recentTests}
              onStopTest={handleStopTest}
              className="shadow-sm"
            />
          </section>

          {/* Sidebar Area */}
          <aside className="xl:col-span-1">
            <TopSubjectLines />
          </aside>
        </div>
      </div>
    </>
  );
}
