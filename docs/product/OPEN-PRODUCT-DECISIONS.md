# HSF ERP Open Product Decisions

This register contains unresolved product decisions introduced or clarified by
the latest product-vision update.

Codex must not invent answers to these items.

| ID      | Decision                                               | Required before                      | Current position                                                |
| ------- | ------------------------------------------------------ | ------------------------------------ | --------------------------------------------------------------- |
| OPD-001 | Authentication provider and session architecture       | Auth implementation                  | Open                                                            |
| OPD-002 | Final role-to-daily/monthly reporting-frequency matrix | Achievement reporting implementation | Open                                                            |
| OPD-003 | Monthly field-requisition cut-off date                 | Requisition rollout                  | Configurable until approved                                     |
| OPD-004 | Field-requisition reviewer and escalation rules        | Requisition workflow                 | Project Coordinator review is expected; detailed authority open |
| OPD-005 | MFR approval authority and thresholds                  | Finance workflow                     | Must follow approved authority matrix                           |
| OPD-006 | Final Doctor patient-level clinical fields             | A2PHC clinical implementation        | Recommendation documented; approval pending                     |
| OPD-007 | Final Doctor daily camp-summary fields                 | A2PHC doctor reporting               | Recommendation documented; approval pending                     |
| OPD-008 | Mandatory vitals and responsible recorder              | Patient-visit implementation         | Open                                                            |
| OPD-009 | Diagnosis coding method                                | Clinical reporting                   | Open                                                            |
| OPD-010 | Prescription, referral, and follow-up policy           | Clinical workflow                    | Open                                                            |
| OPD-011 | Digital clinical sign-off policy                       | Clinical workflow                    | Open                                                            |
| OPD-012 | Teacher daily-entry minimum fields                     | E4BL implementation                  | Recommended list exists; final minimum open                     |
| OPD-013 | Achievement indicator weights                          | Performance scoring                  | No weighted score until approved                                |
| OPD-014 | Evidence requirements by activity type                 | Reporting implementation             | Open                                                            |
| OPD-015 | Centre-level fee and waiver approval for Uttara        | E4BL fee module                      | Open                                                            |
| OPD-016 | Data retention and deletion policy                     | Production readiness                 | Open                                                            |
| OPD-017 | Child and patient safeguarding/privacy policy          | Sensitive-data implementation        | Open                                                            |
| OPD-018 | Human-readable numbering schemes                       | Transaction implementation           | Open                                                            |
| OPD-019 | Historical Excel import scope and cut-off              | Data migration                       | Open                                                            |
| OPD-020 | Production hosting for API, database, files, and jobs  | Production backend deployment        | Open                                                            |

## Decision process

For each decision:

1. Record the question and options.
2. Identify the HSF decision owner.
3. Document operational, security, and technical implications.
4. Obtain approval.
5. Update the controlling requirement.
6. Add an ADR when architecture is affected.
7. Mark the decision closed with date and reference.
