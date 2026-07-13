const enabled = process.env.WORKER_ENABLED === "true";

if (!enabled) {
  console.log(
    "HSF ERP worker foundation is disabled. Set WORKER_ENABLED=true when jobs are implemented.",
  );
} else {
  console.log("HSF ERP worker foundation is enabled, but no production queues are registered yet.");
}
