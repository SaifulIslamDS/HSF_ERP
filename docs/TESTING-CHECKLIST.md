# HSF ERP Testing Checklist

## Repository

- [ ] Required structure exists
- [ ] No prohibited sensitive files
- [ ] Environment example contains no real secret
- [ ] Lockfile committed

## Formatting and lint

- [ ] `pnpm format:check`
- [ ] `pnpm lint`

## Type safety

- [ ] `pnpm typecheck`

## Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] Permission tests
- [ ] Workflow tests
- [ ] Import validation tests
- [ ] `pnpm test:run`

## Database

- [ ] `pnpm db:format`
- [ ] `pnpm db:validate`
- [ ] `pnpm db:generate`
- [ ] Migration reviewed
- [ ] Migration applied to test database
- [ ] Rollback implications reviewed

## Finance invariants

- [ ] Debit equals credit
- [ ] Internal transfers do not create income or expense
- [ ] IOU remains an advance until adjustment
- [ ] Approved and posted records cannot be directly edited
- [ ] Closed periods are locked
- [ ] Requester cannot final-approve own request
- [ ] Budget commitment is not double counted
- [ ] Reversal retains audit history

## Security

- [ ] Project scope enforced
- [ ] Location scope enforced
- [ ] Sensitive fields protected
- [ ] Unauthorized exports blocked
- [ ] Audit events created
- [ ] No real HSF data in fixtures, tests, logs, or screenshots

## Build

- [ ] `pnpm build`

## Manual QA

- [ ] Desktop
- [ ] Android-sized viewport
- [ ] Keyboard navigation
- [ ] Error states
- [ ] Empty states
- [ ] Loading states
- [ ] Bangla text entry
- [ ] Low-bandwidth behavior

## Documentation

- [ ] Current status updated
- [ ] Acceptance criteria checked
- [ ] Relevant ADR or specification updated
- [ ] Release note created when needed
