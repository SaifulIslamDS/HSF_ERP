# HSF ERP — Pre-Presentation UI Review

**Review date:** 12 September 2026  
**Purpose:** Management-presentation readiness and Field Data Gateway integration review

## Overall assessment

The ERP has a strong and broad management UI blueprint. The current architecture is suitable for extension rather than redesign. The most mature programme-specific UI is A2PHC; E4BL and several institutional domains still rely primarily on generic reusable page patterns.

## Strengths observed

- Responsive executive shell and searchable module navigation.
- Broad route catalogue covering planning, projects, requisitions, procurement, finance, HR, payroll, E4BL, A2PHC, Climate Action, inventory, donors/grants, MEAL, documents, reports and administration.
- Clear synthetic-data notice throughout the preview.
- A2PHC has dedicated patient registration, visit queue, consultation, clinical sign-off, camp, equipment and field-expense concepts.
- Existing role-preview model includes executives, programme coordinators, medical supervisors, doctors, E4BL teachers/head teachers, finance, HR, auditors and system administration.
- Database foundation already models user/role, project access, location access, fiscal periods and audit events.

## Presentation risks / cleanup priorities

1. **Synthetic metrics can look operational.** Values such as illustrative student totals, budgets, staffing or service coverage must continue to be labelled synthetic and should not be spoken as current HSF facts.
2. **Women Empowerment remains a blueprint/unconfirmed domain.** Its presence in UI must never be presented as proof of an active programme.
3. **E4BL needs a dedicated field workspace.** Teacher attendance, learner follow-up and assessments should eventually receive programme-specific UX comparable to A2PHC.
4. **Mobile navigation is management-oriented.** Production field roles should have role-aware quick navigation such as Queue/Consult/Sync for doctors and Class/Attendance/Students/Sync for teachers.
5. **Offline state was not previously first-class.** The Field Data Gateway now adds explicit local draft, sync, conflict, attachment and verification concepts.
6. **Real finance account heads are not yet configured.** The first controlled master should be derived from the FY2025–26 payment dataset and approved by Finance.

## New UI decision

The management UI now includes **Field Data Gateway** as a cross-cutting domain. The gateway supports an offline-first operating concept for:

- A2PHC patient/service capture;
- E4BL learner/attendance/assessment capture;
- field activity/evidence capture;
- field expense/bill/voucher submission.

## Non-claim

This review concerns the management UI blueprint. Production offline persistence, encryption, background synchronization, authentication/RBAC, server authorization, database persistence and accounting/clinical business rules remain functional implementation work.
