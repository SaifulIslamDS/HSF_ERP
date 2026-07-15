export function GET() {
  return Response.json({
    service: "hsf-web",
    status: "ok",
    version: "0.1.4",
  });
}
