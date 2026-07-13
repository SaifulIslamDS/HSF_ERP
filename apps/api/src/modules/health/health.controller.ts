import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  check() {
    return {
      service: "hsf-api",
      status: "ok",
      version: "0.1.0",
      timestamp: new Date().toISOString(),
    };
  }
}
