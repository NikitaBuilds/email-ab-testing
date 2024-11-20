// src/types/test.ts
export type TestStatus = "running" | "completed" | "stopped" | "draft";

export interface Test {
  id: string;
  name: string;
  status: TestStatus;
  performance: {
    variantA: number;
    variantB: number;
    confidence: number;
    totalSent?: number;
  };
  startDate: Date;
  endDate?: Date;
  type: "subject" | "content" | "timing";
  description?: string;
}
