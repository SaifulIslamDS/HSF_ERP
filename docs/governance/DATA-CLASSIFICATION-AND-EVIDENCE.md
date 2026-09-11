# HSF ERP Data Classification and Evidence Standard

## Data classification

- `PUBLIC` — approved for public disclosure.
- `INTERNAL` — routine internal information not intended for public publication.
- `CONFIDENTIAL` — information requiring restricted organizational access.
- `RESTRICTED` — highly sensitive operational or personal information requiring strict least-privilege access.

Examples normally treated as restricted/confidential include identifiable patient records, learner/safeguarding records, HR/payroll information, bank/payment information and sensitive donor records.

## Evidence states

- `RAW`
- `CLEANED`
- `VERIFIED`
- `CALCULATED`
- `ESTIMATED`
- `INFERRED`

These states describe evidence quality/provenance; they are not workflow approvals.

A record may be `CALCULATED` and management-approved for a report without becoming a `VERIFIED` raw operational record.

## Design rule

Future schemas and reporting contracts should keep evidence status, verification status, approval status, classification and publication state as distinct concepts.
