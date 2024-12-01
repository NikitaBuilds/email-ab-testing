import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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
        <Table>
          <TableBody>
            {subjectLines.map((subject) => (
              <TableRow
                key={subject.id}
                className="hover:bg-muted/50 transition-colors"
              >
                <TableCell className="align-top">
                  <div className="space-y-2">
                    <p className="font-medium">{subject.text}</p>
                    <div className="flex gap-1 flex-wrap">
                      {subject.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  <CardTitle className="opacity-50">Open Rate</CardTitle>
                  <p className="font-bold">
                    {(subject.openRate * 100).toFixed(1)}%
                  </p>
                  <CardTitle className="opacity-50">Click Rate</CardTitle>
                  <p className="font-bold">
                    {(subject.clickRate * 100).toFixed(1)}%
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default TopSubjectLines;
