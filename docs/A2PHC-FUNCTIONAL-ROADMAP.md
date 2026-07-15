# A2PHC Functional Implementation Roadmap

## Roadmap objective

Convert the approved A2PHC UI into a safe, usable field system while keeping the
rest of HSF ERP stable.

Each release should functionalize a complete vertical slice:

```text
UI
+ validation
+ API
+ authorization
+ database
+ audit
+ tests
+ documentation
```

## Phase A — Baseline and access foundation

### A1. Baseline verification

- apply and validate `v0.1.5`;
- run all repository gates;
- verify non-A2PHC UI integrity;
- verify responsive behavior;
- verify role-preview behavior;
- document exact results.

### A2. Authentication

- Supabase Auth integration;
- sign in and sign out;
- password recovery;
- secure session;
- protected dashboard;
- API token validation;
- authentication audit.

### A3. Internal authorization

- internal HSF user;
- account status;
- role;
- project assignment;
- location assignment;
- server-side module and route protection;
- API permission checks;
- denied-access audit.

## Phase B — A2PHC master data

- district;
- upazila;
- union;
- village or char;
- camp point;
- Doctor;
- Medical Supervisor;
- field team;
- assignment dates;
- equipment category;
- expense category;
- approved clinical and operational reference data.

## Phase C — Camp planning

- camp plan draft;
- assignment;
- schedule;
- route and travel plan;
- equipment checklist;
- approval;
- start and complete camp;
- cancellation and reason;
- camp audit history.

## Phase D — Patient and visit foundation

### D1. Patient Master

- controlled patient registration;
- duplicate search;
- geographic data;
- consent;
- restricted identity access.

### D2. Patient Visit

- open visit;
- link to camp, Doctor, and Supervisor;
- new/follow-up status;
- queue;
- approved basic measurements;
- visit status.

## Phase E — Doctor clinical workflow

- consultation opening;
- relevant history;
- findings;
- provisional/final diagnosis;
- prescription;
- test advice;
- referral;
- follow-up;
- high-risk flag;
- clinical sign-off;
- controlled correction after sign-off;
- clinical audit.

Do not make unapproved clinical fields mandatory.

## Phase F — Reporting

- daily camp summary;
- Supervisor monthly achievement;
- Doctor monthly achievement;
- district and union reach;
- consultation completion;
- referral and follow-up;
- data-quality dashboard;
- project management report;
- project achievement report;
- privacy-safe export.

## Phase G — Equipment and field finance

- equipment issue and custody;
- daily checklist;
- condition;
- maintenance;
- calibration;
- repair and replacement;
- fuel and transport;
- boat fare;
- communication;
- field expense;
- bill and evidence;
- advance adjustment.

## Phase H — Requisition and MFR integration

```text
Supervisor Requisition
→ Coordinator Review
→ Consolidation
→ A2PHC MFR
→ Finance Review
→ Approval
→ Disbursement
→ Expense and Evidence
→ Adjustment
```

## Phase I — Offline and low-connectivity support

- local draft;
- visible sync status;
- conflict prevention;
- secure offline storage;
- recovery after app closure;
- retry and error handling;
- device-loss process.

## Phase J — Pilot and rollout

- synthetic-data testing;
- staging;
- one-team pilot;
- training;
- usability observation;
- privacy review;
- data reconciliation;
- management acceptance;
- five-district rollout;
- controlled retirement of Google Forms.

## Future medicine phase

Do not enable medicine dispensing until policy and funding are approved.

Future slice may include:

- medicine budget;
- procurement;
- item and batch;
- expiry;
- stock by team or camp;
- prescription-linked issue;
- return and adjustment;
- donor/fund source;
- reconciliation and report.
