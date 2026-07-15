# Codex Next Task after v0.1.5
## Replace UI Role Preview with Authenticated RBAC Foundation

Do not functionalize the complete A2PHC module in one task.

The next approved vertical slice should:

1. verify the `v0.1.5` UI baseline;
2. implement secure authentication and server session handling;
3. create role, project, and location assignments;
4. enforce route access on the server;
5. preserve the current role-visibility UI as a development preview only;
6. test E4BL/A2PHC separation for Guest, Teacher, Head Teacher, Medical Supervisor, Doctor, Coordinator, Finance, Executive, Auditor, and System Administrator;
7. record denied-route audit events without exposing patient or child data.

Excluded from that task:

- patient persistence;
- Doctor clinical records;
- medicine inventory;
- finance posting;
- production data migration;
- Google Forms retirement.
