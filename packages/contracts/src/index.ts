export interface HealthResponse {
  service: string;
  status: "ok" | "degraded";
  version: string;
  timestamp?: string;
}
