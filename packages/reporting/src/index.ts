export interface ReportRequest {
  reportCode: string;
  requestedBy: string;
  parameters: Record<string, unknown>;
}
