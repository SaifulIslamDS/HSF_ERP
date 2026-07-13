# ADR-0003: Use PostgreSQL and Prisma

**Status:** Accepted for foundation

PostgreSQL is the source-of-truth database. Prisma provides schema management, migrations, and type-safe access.

Financial invariants must also be protected by database constraints and tested domain logic.
