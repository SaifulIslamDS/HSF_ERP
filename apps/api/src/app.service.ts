import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getServiceInfo() {
    return {
      name: "HSF ERP API",
      version: "0.1.6",
      status: "foundation",
    };
  }
}
