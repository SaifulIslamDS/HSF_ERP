# HSF ERP — Field Data Gateway & Offline-First Architecture

**Status:** Management-review UI/architecture baseline  
**Date:** 12 September 2026  
**Implementation state:** UI blueprint only; functional offline sync is not yet implemented

## Purpose

The Field Data Gateway is the controlled field-facing entry layer of HSF ERP. It allows authorized users to capture programme and field-finance records where connectivity may be weak or unavailable, then synchronize them to the central ERP when connectivity returns.

The gateway is not a separate public database and must not bypass ERP authorization, verification, MEAL, finance or audit controls.

## Institutional flow

`Field Reality → Offline Capture → Synchronization → Operational ERP → Verification / Approval → MEAL / Finance / Management → Approved Information`

## Initial capture domains

- **A2PHC:** patient registration, patient visit, consultation, referral, follow-up, camp summary and approved camp-linked expenses.
- **E4BL:** learner registration, enrolment, attendance, assessment, progression, material distribution and student-support follow-up.
- **Finance:** field expense, bill/voucher evidence, IOU adjustment and requisition/MFR linkage.
- **Programme delivery:** activity completion, participant/reach data, field evidence and implementation notes.

## Offline record states

1. `LOCAL_DRAFT` — stored only on the authorized device.
2. `READY_TO_SYNC` — locally validated and queued.
3. `SYNCING` — transfer in progress.
4. `SYNCED_SUBMITTED` — central ERP has received the record.
5. `PENDING_VERIFICATION` — awaiting designated review.
6. `VERIFIED` — accepted according to programme/finance/MEAL rules.
7. `CONFLICT` — server/local values require resolution.
8. `RETURNED` — reviewer requires correction.
9. `FAILED` — technical sync failure requiring retry/support.

Offline/sync status is a transport/workflow state. It is never an evidence-quality label. `SYNCED` does not mean `VERIFIED`.

## Offline-first requirements

- Mobile-first responsive field interface.
- Structured records saved locally when no network is available.
- Attachment queue independent from structured-record synchronization.
- Visible last-sync time and pending-record count.
- Deterministic local record identifiers to prevent duplicate submission.
- Server-issued canonical IDs after successful sync.
- Retry-safe/idempotent submissions.
- Conflict detection and explicit resolution; never silent overwrite.
- Minimal necessary data stored on device.
- Local cache encrypted where technically feasible and cleared according to retention/session rules.
- Device/session registration for sensitive field roles.
- No unrestricted export of patient/learner data to the device filesystem.

## Authorization

Every synchronized record must carry server-verifiable context for:

- authenticated user;
- role;
- project/programme;
- location/duty station;
- record type and sensitivity;
- capture timestamp and sync timestamp;
- workflow/evidence state;
- audit event history.

The client may hide unauthorized modules for usability, but the server must enforce role, project, location, sensitivity and ownership rules.

## Safeguarding and privacy

Patient and learner records are RESTRICTED operational data. The Field Gateway must use minimum-necessary collection, protect identifiers, avoid unnecessary local retention, and ensure that finance/reporting roles do not gain unrestricted clinical or learner-level access.

## Finance boundary

Field users may submit an expense/bill/voucher package, but submission does not post an accounting entry automatically.

Recommended flow:

`Field capture → Supervisor/Coordinator review → Finance verification → Approval → Voucher/Journal posting → Reconciliation → Audit`

The finance record should separate:

- Account Head;
- Account Group;
- Project;
- Location / Cost Centre;
- Fund / Donor;
- Activity / Budget line;
- Payment method;
- Requisition/MFR/PO/IOU references;
- Supporting evidence.

## FY2025–26 account-head source

HSF intends to derive the first controlled Chart of Accounts/account-head master from the FY2025–26 payment dataset. The raw transaction dataset must remain outside the public repository. Only the management/Finance-approved standardized account-head master should be configured in the ERP.

## Implementation sequence

1. Management approval of this architecture.
2. Finalize data-classification, device and offline-retention rules.
3. Finalize FY2025–26 account-head mapping with Finance.
4. Implement authentication/RBAC/project/location authorization.
5. Implement shared offline sync engine and local encrypted store.
6. Pilot A2PHC patient/visit capture.
7. Reuse the gateway for E4BL attendance/learner workflows.
8. Add field finance and evidence capture.
9. Add MEAL verification/quality queues and management reporting.

## Non-claim

The presence of Field Data Gateway screens in the management UI does not mean offline storage, synchronization, encryption, conflict handling or production persistence is operational.
