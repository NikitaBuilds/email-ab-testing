// src/lib/breadcrumbs.ts
interface BreadcrumbConfig {
  title: string;
  href?: string;
}

export const routeConfig: Record<string, BreadcrumbConfig> = {
  dashboard: { title: "Dashboard" },
  campaigns: { title: "Campaigns" },
  "campaigns/drafts": { title: "Drafts" },
  "campaigns/scheduled": { title: "Scheduled" },
  "campaigns/sent": { title: "Sent" },
  tests: { title: "A/B Tests" },
  "tests/active": { title: "Active Tests" },
  "tests/results": { title: "Results" },
  "tests/templates": { title: "Templates" },
  "tests/archive": { title: "Archive" },
  audience: { title: "Audience" },
  "audience/subscribers": { title: "Subscribers" },
  "audience/segments": { title: "Segments" },
  "audience/growth": { title: "Growth" },
  "audience/engagement": { title: "Engagement" },
  analytics: { title: "Analytics" },
  "analytics/overview": { title: "Overview" },
  "analytics/performance": { title: "Performance" },
  "analytics/reports": { title: "Reports" },
  "analytics/export": { title: "Export" },
  content: { title: "Content Library" },
  "content/templates": { title: "Templates" },
  "content/media": { title: "Media" },
  "content/snippets": { title: "Snippets" },
  settings: { title: "Settings" },
  "settings/general": { title: "General" },
  "settings/team": { title: "Team" },
  "settings/billing": { title: "Billing" },
  "settings/integrations": { title: "Integrations" },
};
