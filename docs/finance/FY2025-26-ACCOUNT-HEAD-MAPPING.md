# FY2025–26 Payment Dataset → HSF ERP Account-Head Mapping

**Status:** Source-controlled mapping framework; raw dataset not stored in this public repository  
**Date:** 12 September 2026

## Source rule

The first HSF ERP account-head master will be derived from HSF's actual FY2025–26 payment dataset. No account head should be invented merely to complete the UI.

## Mapping method

For each distinct payment description/head in the source dataset, Finance should approve:

| Source payment description  | Proposed standardized account head | Account group | Proposed code | Project-specific? | Review status |
| --------------------------- | ---------------------------------- | ------------- | ------------- | ----------------- | ------------- |
| _Pending controlled import_ |                                    |               |               |                   | Pending       |

## Design rule

Account Head describes **what was spent or received**. Project, location/cost centre, fund/donor and activity should normally be maintained as separate accounting/reporting dimensions rather than embedded into the account-head name.

Example architecture:

`Training Expense` + `E4BL` + `Hazaribagh` + `General Fund` + `Teacher Development`

rather than a permanent account head named `E4BL Hazaribagh Teacher Training Expense`.

## Data protection

The payment dataset may contain real transaction information and must not be committed to the public GitHub repository. Analysis should happen in an approved local/restricted environment. Only the approved master list of account heads/codes and non-sensitive configuration metadata should enter the repository.
