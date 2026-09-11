# HSF Digital System Boundaries

**Effective:** 11 September 2026  
**Contract:** HSF Digital Institutional System Contract v1.0.0

## Operational ERP

The HSF ERP is the protected operational system of record for sensitive and transactional organizational data, including programme operations, finance, procurement, inventory, HR, payroll and approved administrative records.

The ERP may contain sensitive learner, patient, employee, financial and other operational records only when production authentication, authorization, persistence, privacy and audit controls are in place.

## Knowledge Hub

The Knowledge Hub is the controlled institutional knowledge layer. It owns policies, standards, frameworks, SOPs, MEAL governance, communication governance, brand governance and approved institutional references. It does not replace the ERP as the operational database.

## Public Platform

The public platform contains only approved website content, public reports, approved statistics, stories and social communication.

## Required information flow

`ERP / Operational Dataset → Verification & MEAL → Approved Information → Reports / Website / Social Media`

No raw operational record should be exposed directly to a public system.

## Implementation consequence

A complete-looking management UI is not proof that a domain is implemented. The ERP must distinguish:

- blueprint/UI availability;
- implemented server authorization;
- implemented persistence;
- implemented workflow/audit controls;
- production readiness.
