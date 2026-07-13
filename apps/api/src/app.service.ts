import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getServiceInfo() {
    return {
      name: "HSF ERP API",
      version: "0.1.0",
      status: "foundation",
    };
  }
}
