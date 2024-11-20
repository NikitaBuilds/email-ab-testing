"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Mail,
  FlaskConical,
  Users,
  BarChart,
  Settings2,
  HelpCircle,
  Send,
  Inbox,
  Clock,
  Tag,
  AlertCircle,
  BookOpen,
  CreditCard,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Nikita",
    email: "nikita@nikitagurbatov.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: Mail,
      items: [
        {
          title: "All Campaigns",
          url: "/campaigns",
        },
        {
          title: "Drafts",
          url: "/campaigns/drafts",
        },
        {
          title: "Scheduled",
          url: "/campaigns/scheduled",
        },
        {
          title: "Sent",
          url: "/campaigns/sent",
        },
      ],
    },
    {
      title: "A/B Tests",
      url: "/tests",
      icon: FlaskConical,
      items: [
        {
          title: "Active Tests",
          url: "/tests/active",
        },
        {
          title: "Results",
          url: "/tests/results",
        },
        {
          title: "Templates",
          url: "/tests/templates",
        },
        {
          title: "Archive",
          url: "/tests/archive",
        },
      ],
    },
    {
      title: "Audience",
      url: "/audience",
      icon: Users,
      items: [
        {
          title: "Subscribers",
          url: "/audience/subscribers",
        },
        {
          title: "Segments",
          url: "/audience/segments",
        },
        {
          title: "Growth",
          url: "/audience/growth",
        },
        {
          title: "Engagement",
          url: "/audience/engagement",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart,
      items: [
        {
          title: "Overview",
          url: "/analytics/overview",
        },
        {
          title: "Performance",
          url: "/analytics/performance",
        },
        {
          title: "Reports",
          url: "/analytics/reports",
        },
        {
          title: "Export",
          url: "/analytics/export",
        },
      ],
    },
    {
      title: "Content Library",
      url: "/content",
      icon: Inbox,
      items: [
        {
          title: "Templates",
          url: "/content/templates",
        },
        {
          title: "Media",
          url: "/content/media",
        },
        {
          title: "Snippets",
          url: "/content/snippets",
        },
      ],
    },
    {
      title: "Automation",
      url: "/automation",
      icon: Clock,
      items: [
        {
          title: "Workflows",
          url: "/automation/workflows",
        },
        {
          title: "Triggers",
          url: "/automation/triggers",
        },
        {
          title: "Rules",
          url: "/automation/rules",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Team",
          url: "/settings/team",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
    {
      title: "Support",
      url: "/support",
      icon: HelpCircle,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Mail className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Email A/B</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
