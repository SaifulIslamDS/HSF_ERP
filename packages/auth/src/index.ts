export const Permission = {
  MfrCreate: "finance.mfr.create",
  MfrSubmit: "finance.mfr.submit",
  MfrBudgetCheck: "finance.mfr.budget_check",
  MfrApprove: "finance.mfr.approve",
  VoucherPost: "finance.voucher.post",
  PeriodClose: "finance.period.close",
  StudentView: "education.student.view",
  PatientEdit: "health.patient.edit",
} as const;

export type PermissionCode = (typeof Permission)[keyof typeof Permission];
