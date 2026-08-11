# HSF ERP — Temporary Management Preview PIN Gate

**Introduced:** v0.1.6  
**Purpose:** Protect the management-preview UI before production authentication is implemented.

## Scope

The PIN gate is a temporary outer access layer for the current HSF ERP UI.
It does not replace Supabase authentication, HSF user accounts, RBAC, project/location scope, or database authorization.

## Request flow

```text
Browser request
→ Next.js proxy
→ valid preview-session cookie?
   ├─ Yes → existing ERP UI
   └─ No  → /access
→ six-digit PIN verified server-side
→ signed HttpOnly session cookie
→ return to originally requested ERP route
```

## Environment variables

Set these in Netlify for the web application:

```text
HSF_ERP_ACCESS_PIN=<actual six-digit PIN>
HSF_ERP_ACCESS_SECRET=<long random server-only secret, recommended>
HSF_ERP_ACCESS_SESSION_HOURS=12
```

Optional:

```text
HSF_ERP_ACCESS_GATE_ENABLED=true
```

Never prefix these values with `NEXT_PUBLIC_`.

The actual PIN and secret must never be committed.

## Generate a session secret in PowerShell

```powershell
$bytes = New-Object byte[] 48
[Security.Cryptography.RandomNumberGenerator]::Fill($bytes)
[Convert]::ToBase64String($bytes)
```

Copy the generated value into Netlify as `HSF_ERP_ACCESS_SECRET`.

## Protected surface

All ERP UI routes are protected, including direct URLs such as:

- `/`
- `/dashboard`
- `/e4bl/...`
- `/a2phc/...`
- `/finance/...`
- `/hr/...`

Static Next.js assets and branding files are allowed so the access screen can render.

`/api/health` remains public for hosting/monitoring health checks.
The access verification and logout endpoints are also public by necessity.
Other API routes receive `401` when the preview session is missing.

## Session behavior

- Server-side PIN comparison
- Signed preview-session token
- HttpOnly cookie
- Secure cookie in production
- SameSite=Lax
- 12-hour default lifetime
- PIN rotation invalidates existing preview sessions
- Safe return to the originally requested internal route

## Rate limiting

The verification handler implements lightweight, best-effort in-memory throttling:

- five failed attempts in a 15-minute window;
- 15-minute lockout after the threshold.

This is sufficient for a temporary management-preview gate, but it is not a globally distributed security control. Serverless instances may maintain independent counters.

Production user authentication must use the approved Supabase Auth + HSF authorization architecture.

## Local development

When no PIN is configured, development mode does not force the gate unless `HSF_ERP_ACCESS_GATE_ENABLED=true` is explicitly set.

To test locally:

```env
HSF_ERP_ACCESS_GATE_ENABLED=true
HSF_ERP_ACCESS_PIN=654321
HSF_ERP_ACCESS_SECRET=replace-with-a-long-local-secret
HSF_ERP_ACCESS_SESSION_HOURS=12
```

Do not reuse the sample PIN in Netlify or production.

## Lock the preview session

The endpoint exists for a future UI lock button:

```text
POST /api/access/logout
```

It clears the preview-access cookie and returns to `/access`.

## Security boundary

This feature provides temporary preview protection only.

It does not provide:

- individual identity;
- role-based authentication;
- project/location authorization;
- clinical authorization;
- financial approval authority;
- durable distributed brute-force protection;
- user-level audit attribution.

Those controls remain part of the functional authentication and RBAC milestones.
