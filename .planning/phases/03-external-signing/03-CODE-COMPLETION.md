# Phase 3 code-completion checkpoint

Date: 2 November 2026

Status: selected product implementations are present. The source audit found two
error-classification defects; both are fixed with independent review and focused
regressions. **Code freeze remains pending dependency and quality closeout.**
Phase 2/3 acceptance, CAP-14 and release readiness remain open.

The agreed sequence is to finish the selected product code, complete focused
regressions and quality/build closeout, then run one combined final Android/iOS
acceptance round. That round can expose defects requiring fixes and focused
retests; it is not a promise that every journey will pass on its first attempt.

## Implemented scope

Phase 2 product features extend through Outbox and are code complete. Phase 2.11
acceptance and CAP-14 remain open. Value transfers and zaps remain Phase 4.

Source review traced these selected Phase 3 features through their actual callers,
native adapters and owning implementations:

| Requirements | Implemented behavior | Main source evidence |
| --- | --- | --- |
| EXT-01, EXT-02 | Native key creation, import, protected persistence, backup, deletion and exact-event signing; public snapshots and opaque handles cross the JavaScript bridge. | `src/security/trusted-identity-owner.ts`, `src/security/native-identity-vault.ts`, `modules/signer-core/`, `docs/signing-core.md` |
| EXT-03 | One account per public key; explicit signing-method choice; same-account data continuity; cancellation and disconnect without automatic fallback. | `src/security/identity-transition.ts`, `src/security/signing-methods.ts`, `src/storage/database.ts` |
| EXT-04 | Native-owned bunker connections, persisted credentials, peer/request validation, relay refresh and bounded external-auth continuation on Android and iOS. | `modules/signer-core/android/`, `modules/signer-core/ios/`, `docs/external-signing.md` |
| EXT-05 | Selected signing methods serve ordinary publication, Outbox primary events and reviewed ancillary publication, Blossom authorization and the trusted fixture publisher. | `src/security/approval-service.ts`, `src/uploads/upload-service.ts`, `src/fixture-release/`, `modules/napplet-host/` |
| EXT-06 | Android signer selection, package/certificate binding, exact Activity results and explicit Resume. | `NativeAndroidSignerActions.kt`, `NativeAndroidSignerActivityController.java` under `modules/signer-core/android/`; `src/shell/SignerSettings.tsx` |
| EXT-07 | One-use review, cancellation, handoff, expiry, restart and revocation guards; exact result verification and uncertain-outcome handling. The two corrections below finish identified classification defects. | `src/security/signing-handoff.ts`, `src/security/native-identity-vault.ts`, native session/handoff implementations |
| EXT-08 | Shared and native regression suites and source-bound evidence machinery exist. Final quality and acceptance evidence remain outstanding. | `tests/security/`, `tests/storage/identity-transition.test.ts`, `tests/native/signer-core/`, `.planning/phases/03-external-signing/03-VALIDATION.md` |
| EXT-09 | Outgoing signing architecture is implemented without exposing incoming signer services. | `src/security/native-vault-contract.ts`, native module exports/manifests, `.planning/phases/03-external-signing/03-CONTEXT.md` |

Legacy account preservation was waived on 14 October. The fresh native vault
therefore needs no legacy migration journal. Hypergolic acting as another app's
signer remains future scope. Neither item is unfinished Phase 3 product code.

## Focused corrections and code gate

- Android preserves possible NIP-55 dispatch when the native review panel completes
  before the signer coroutine reports its result. The marker belongs to the original
  pending operation; explicit errors and all authority checks remain intact.
  `SignerCoreModule.kt` and `NativeAndroidSignerActions.kt` contain the change.
  The actual-body host suite passes 62 cases / 158 assertions, including six new
  completion cases. These host ports do not prove Android scheduling or UI behavior.
- iOS distinguishes plain expiry from invalid transport budgets, preserving signing
  uncertainty after possible dispatch. Poisoned, mismatched and exhausted budgets
  remain invalid. Only expiry propagates from pong admission; other pong failures
  cannot become a retryable unavailable result. `NativeSignerRelayTransport.swift`
  contains the change. Live-source host regressions pass 14 budget/lifetime and five
  pong assertions. Network.framework and device scheduling remain untested here.
- Separate Sol 6.1 reviewers checked each patch. The first iOS proposal was rejected
  for a potential retry and was corrected before application. No authority check,
  deadline, package binding, result validation or no-fallback rule was relaxed.
- Typecheck and 699 shared security/bootstrap, storage, shell and quality-verifier
  tests pass. The quality-verifier tests exercise the evidence checker; they are
  not React Doctor, aislop or dependency-audit scores.
- Offline Android generation, export and the ordinary-entry ARM64 test build pass;
  scoped source contents are unchanged by the build. The unsigned iPhoneOS Release build also passes with scoped source contents unchanged. No product was installed or exercised on a device.

The remaining known code-freeze blocker is dependency/quality closeout: the
`node-forge` finding, a policy-admitted dependency update with affected notices,
and complete current quality/audit reports. Dependency/configuration changes may
still be needed. No finding is waived and neither 100/100 score is claimed here.

This review found no additional missing selected product route. Keep code freeze
pending until its remaining blocker is resolved; final acceptance can still expose
bugs requiring changes and focused retests.

## Final combined acceptance

Keep existing requirement identifiers, failed receipts and separately scoped
successes. Complete the following on the final source-bound Android/iOS products:

- Native account creation/import, restart, same-account method changes and State
  data continuity; disconnect/offline restore and unavailable-method states.
- Local and NIP-46 publication, Outbox and Blossom journeys; Android NIP-55 and
  real-Amber exact signing interoperability, with independent results/readback
  appropriate to each route.
- Reject/cancel, expiry, late or duplicate replies, remote/browser handoff,
  background/lock, process death and revocation, including uncertain outcomes and
  absence of unauthorized publication or automatic fallback.
- Physical protected-storage/authentication/capture checks where simulators cannot
  supply the required evidence; large text, screen reader, input and navigation.
- Combined Phase 2/3 acceptance reconciliation, exact test-owned cleanup and final
  quality/build records. Record actual results and retain any open rows.

The code milestone and acceptance decision are separate records. Source coverage,
host doubles, successful compilation and packaged artifacts do not by themselves
prove device protection, real-signer interoperability or full acceptance.

Scope references: `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`,
`.planning/STATE.md`, `.planning/phases/03-external-signing/03-CONTEXT.md`,
`03-02-PLAN.md` through `03-06-PLAN.md` in that phase directory,
`docs/architecture.md`, `docs/signing-core.md`, `docs/external-signing.md`.
