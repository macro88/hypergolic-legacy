---
phase: 03-external-signing
status: implementing
updated: 2026-10-14
---

# Phase 3: external signing and native signing foundation

## Selected decisions

- D-01: Start Phase 3 research and planning while Phase 2 acceptance remains open. This was the initial planning authorization; the later execution decision below starts the native-core slice.
- D-02: Build NIP-46 remote-signer support for Android and iOS before NIP-55 Android signer-app integration. Native signing foundations precede both adapters.
- D-03: Include a native signing core in this phase. Move local key handling and signing out of trusted React Native JavaScript, including creation, import, storage reads, migration and recovery. Moving only the final signature operation is insufficient.
- D-04: Long term, Hypergolic should itself serve as an external signer, with security at least comparable to Amber as an engineering target. Serving other apps is future scope; comparative security is not established by this plan.
- D-05: One account per public identity. Attaching an external signer to an existing npub preserves its napplet data and exposes an explicit signing-method choice. Failure never silently selects another signer or creates another identity.

## Existing decisions retained

Keep Expo/React Native, Kehto, Applesauce and the existing source checkout. First launch still creates a local identity; connecting a signer belongs in trusted settings. Preserve public-key-based data namespaces, approved versions and app IDs. The later pre-release transition decision below removes the requirement to retain accounts from the old JavaScript vault. No source push or remote change is authorized.

Every user event keeps individual trusted review. Remote permissions do not waive shell review, and an external signer may ask for its own approval. Preserve separate ordinary-publication and Blossom-upload signing authority; do not introduce a general guest signer or encryption API. Cancellation, exact event validation, queue limits and unknown-publication handling remain requirements.

Use simulator/emulator and automated coverage for what they can faithfully exercise. Physical checks during development need a named simulator limitation. Full cross-capability E2E remains at feature-complete builds. Phase 2.11/CAP-14 and its existing 61-row matrix remain open; this plan neither closes nor renumbers them. The existing roadmap execution dependency on Phase 2.11 remains unchanged unless the owner explicitly reschedules it.

## Design proposals for implementation review

Use a small native key and approval authority, with public metadata and opaque operation handles crossing the React Native boundary. Make the trusted approval gesture native-owned so replacing a JavaScript callback cannot create permission to sign. Preserve the existing shell appearance and per-event review details. This narrows the trust boundary; native code in the same process is not OS-enforced process isolation.

Prefer a maintained secp256k1 implementation through narrow native wrappers. Pin and review the actual library, toolchain, Schnorr and NIP-44 contracts before adoption. No dependency was installed or selected as production-ready during planning. Do not equate wrapped-key protection with hardware-contained Nostr signing.

Start remote connection with explicit bunker-URL entry. Add client-initiated nostrconnect onboarding only after its product scope is selected. For Android, the initial proposal uses explicit Activity-result requests; ContentProvider access and remembered permissions need a separate profile decision. These are bounded implementation proposals, not claims of complete NIP coverage.

## Future boundary

Future incoming requests from other apps must carry their own authenticated requester identity and permissions into the same native policy authority. Do not export signer activities/providers, run a NIP-46 signer service, forward third-party requests to another signer, or reuse a napplet's grant for an external caller in this phase. Value and zaps remain Phase 4. The future signer-provider phase is not numbered here.

## Execution entry

Before application changes, review the proposed transport profile and native migration/approval design, resolve the Phase 2.11 dependency, and obtain implementation authorization. These checkpoints are recorded in Plan 01. Existing keys and retained devices must not be used for migration experiments.

## Execution authorization — 14 October 2026

The owner explicitly authorized Phase 3 implementation beginning with the native signing core while keeping Phase 2 acceptance open. This supersedes the planning-only entry checkpoint and reschedules the Phase 2.11 dependency for this implementation slice; no acceptance requirement is waived. Use Sol 6.1 subagents, parallelize independent ownership areas, prefer simple code, and retain full security and quality checks. The owner also supplied Amber's repository as a comparison reference.

Plan 01 implements a disposable native key/review/sign trace with an actual native owner binding. Existing account migration and production napplet-signing integration remain Plan 02; external clients follow. Selecting and reviewing the maintained native cryptography release is an implementation decision within this authorization. No account migration, reset, source push or production signer-provider exposure follows from this first slice. The shared checkout is retained with file ownership separated across generic GSD-adapted builder agents and an independent reviewer.


## Full-phase continuation — 14 October 2026

The owner authorized completion of all Phase 3 work, continuing with native
persistence, import and account transition. This is pre-release software: existing
accounts need not be preserved. Plan 02 therefore uses a fresh native vault namespace
and does not build a legacy account migration journal. The new vault still requires
atomic authenticated storage, verified readback, restart reuse and failure without
replacement keys when established state is missing or corrupt. This scope correction
does not permit silently changing signing methods or losing napplet data when methods
are attached to a current account.

Use Sol 6.1 builders with independent security review. Phase 2 acceptance stays open.
Remote NIP-46 support remains first, followed by Android NIP-55. Source push remains
owner-controlled. Simulator and emulator evidence remains distinct from physical
storage, authentication and capture evidence.

## Code completion before final acceptance — 2 November 2026

The owner directed the next milestone to finish Phase 3 coding, then run one
coordinated final Android/iOS test campaign covering Phase 2 and Phase 3. Phase 2
feature implementation through Outbox is complete; its acceptance remains open.
Use focused automated regressions, native compilation and independent security
review while changing code. Defer the broad device/interoperability/acceptance
campaign until the code-freeze candidate is ready. Any final-round defect requires
a fix and affected retests, rather than a promise of one flawless test pass.

The [code-completion checkpoint](03-CODE-COMPLETION.md) separates implemented
features, concrete corrections and the remaining dependency/quality blocker from
final acceptance. This sequencing changes no requirement, score threshold, phase
completion count or source-push ownership. Incoming signer services and Value/zaps
remain outside Phase 3.
