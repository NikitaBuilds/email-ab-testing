// src/components/dashboard/top-subject-lines.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SubjectLine {
  id: string;
  text: string;
  openRate: number;
  clickRate: number;
  tags: string[];
}

interface TopSubjectLinesProps {
  subjectLines?: SubjectLine[];
  className?: string;
}

const topSubjectLines = [
  {
    id: "1",
    text: "🔥 Last Chance: Don't Miss Out on 50% Off",
    openRate: 0.32,
    clickRate: 0.15,
    tags: ["urgent", "promotion", "emoji"],
  },
  {
    id: "2",
    text: "Is your email marketing ready for 2024?",
    openRate: 0.28,
    clickRate: 0.12,
    tags: ["question", "timely"],
  },
  {
    id: "3",
    text: "Here's what we learned from analyzing 1M emails",
    openRate: 0.27,
    clickRate: 0.14,
    tags: ["data", "insights"],
  },
  {
    id: "4",
    text: "[New Guide] 10 Email Templates That Convert",
    openRate: 0.26,
    clickRate: 0.13,
    tags: ["resource", "templates"],
  },
];

export function TopSubjectLines({
  subjectLines = topSubjectLines,
  className,
}: TopSubjectLinesProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Performing Subject Lines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjectLines.map((subject) => (
            <div
              key={subject.id}
              className="flex flex-col space-y-2 rounded-lg border p-3"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{subject.text}</p>
                  <div className="flex gap-1 flex-wrap">
                    {subject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="text-right">
                    <p className="text-muted-foreground">Open Rate</p>
                    <p className="font-medium">
                      {(subject.openRate * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Click Rate</p>
                    <p className="font-medium">
                      {(subject.clickRate * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
