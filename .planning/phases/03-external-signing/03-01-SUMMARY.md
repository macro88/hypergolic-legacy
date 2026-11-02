---
phase: 03-external-signing
plan: "01"
status: implemented_with_gates_open
completed: 2026-10-14
requirements_completed: []
---

# Plan 01 execution — native signing core

The disposable native review-to-sign slice is implemented on Android and iOS.
It is available through a trusted developer check and an isolated Expo entry.
Production account migration and all Phase 3 requirements remain open. Phase 2
acceptance is unchanged. The owner explicitly authorized this execution order.

## Delivered behavior

- Native-generated ephemeral keys remain inside the C primitive. The bridge exposes
  public keys, review requests, signed public results and cancellation only.
- Native runtime ownership, immutable event capture and a native approval button
  govern each signature. Approval handles stay native and are consumed once.
- Rejection, replay, stale ownership, expiry, backgrounding and runtime destruction
  deny or revoke authority. Generation starts a ten-minute key lifetime that repeat
  generation cannot extend. Explicit reactivation creates a new disposable session.
- The shell independently verifies the returned signature and exact requested
  fields. No publication or saved-key access occurs through this check.
- Pinned bitcoin-core/secp256k1 v0.8.0 supplies the primitive. Both products package
  its unmodified MIT license. No new JavaScript dependency or lockfile change was
  needed; notice manifests changed only for the two added package scripts.

The [native contract](../../../docs/signing-core.md) records the public API,
platform bounds, source pins and memory/process limits.

## Evidence

| Check | Observed result | Boundary |
| --- | --- | --- |
| Shared C primitive, including sanitizer run | 331 assertions; 19 official BIP-340 verification vectors and four exact signatures | Host crypto and owned-buffer checks |
| Shared signer adapter | 12 tests | Host contract, altered results, refusal and exact activation result |
| Android owning native suite | 52 native + 7 independent checks | Actual emulator Java/JNI/review UI; native fault cases include injected clocks |
| Android actual Expo bridge | 20 workflow checks | Real AppContext, module, approval/rejection, repeat check, remount and background key replacement |
| iOS owning native suite | 15 cases, 62 native assertions + 6 independent checks | Actual Simulator; 41 core and 21 UI assertions |
| iOS actual Expo bridge | 3 UI journeys | Real AppContext/module, approved verified result, rejection/remount and background reactivation |
| Existing shared security and bootstrap | 368 + 13 tests | Includes the new signer contract |
| Installed dependency patch regressions | 74 tests | Existing Forge/braces patch evidence |
| TypeScript and ordinary Android/iOS exports | Passed | Includes the isolated entry in TypeScript coverage |
| Android prebuild and native builds | Passed | Actual Expo Release fixture and JNI compilation |
| iOS native integration | Passed | Full Expo Simulator Release product after public-header fix |

The Android native receipt binds 205 inputs; its Expo receipt binds 635. The iOS
native receipt binds 206 inputs. The final iOS Expo build binds 1,273 unchanged
inputs and 150 product files, and the bridge checks the supplied product against
that receipt before and after execution. Screenshots and public results were
inspected. All task-owned test applications were removed; before/after app
inventories agree. The task-owned Android emulator was stopped. Retained apps
were not installed over, reset or migrated.

## Review and fixes

Sol 6.1 builders worked on the shared primitive and the two native adapters, with
an independent Sol 6.1 security reviewer. The review caught the activation return
contract, retry/recovery, eager key cleanup and evidence-binding gaps. Runtime
checks also exposed permissive Android JSON control characters and an iOS public
C-header integration issue. Each was corrected and the affected checks rerun.
No open source-level high-priority signer finding remained in the bounded review.
This review is not an external security audit.

Failed intermediate runs remain failed: iOS runner launch failures required an
explicit build/install/test sequence; a later no-reset test had the wrong operation
order and was corrected before the final native pass. Android's first bridge
observer timed out before installation; its retry exercised the same sealed APK.

The implementation keeps the tracer separate from the legacy approval adapter,
using `src/security/native-signer-core.ts`. This deliberate plan adjustment avoids
mixing a disposable key with production accounts before migration. The existing
TypeScript vault and production signing routes remain in place for Plan 02.

## Quality and remaining work

React Doctor is **100/100** with zero findings. Complete aislop is **98/100**: its
format, lint, code-quality and AI-slop engines report zero issues; security reports
only the existing Forge and braces advisories. All engines ran, and no gate,
suppression, dependency version or exception scope was changed. The existing local
patches still pass 74 checks. Root audit reports those two high advisories, the
quality tool audit reports braces, and the runtime audit is clean.

`pnpm run check` stops at the existing Expo version check: 20/21 checks pass, with
eight pinned patch versions behind its recommendations. The later quality/audit
commands were run separately. Full quality acceptance is **not complete**; the
100/100 requirement remains open.

This slice does not prove protected storage, native account migration, physical
device acceptance, full napplet/publication routing, external signer clients or
security parity with Amber. Android's Expo unmount check invokes cancellation
without a pending review; pending-review cancellation through that bridge has no
dedicated trace yet. The platform parsers also have different disposable input
bounds, which must be reconciled before production migration.

Next: Plan 02 native persistence/import/migration and retirement of secret-bearing
JavaScript paths, with explicit recovery and preserved account data. NIP-46 then
precedes NIP-55. Source changes remain local and unpushed.
