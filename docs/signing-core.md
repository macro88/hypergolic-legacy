# Native signing core

Phase 3 Plan 01 supplies a tested disposable native review-to-sign path on Android
and iOS. Plan 02 is in progress: production TypeScript now delegates account
operations and all signing routes to a public-only native vault contract. Native
persistence, import, backup, deletion and route binding are being integrated and
require platform runtime evidence. The shared external-method contract and NIP-44 primitive are now integrated;
native remote connection adapters are in progress. Provider endpoints remain future scope. Phase 2 acceptance stays open.

## Disposable trace: authority and key boundary

The trusted shell claims its existing native identity-owner context, then activates
the signer module. Each module binds an ephemeral key to that native context.
JavaScript supplies an unsigned event for review and receives only a public key or
a signed public event. It cannot pass an approval decision, owner identifier,
operation handle, entropy source or secret to the bridge.

The platform captures the event before displaying its native review. The review
shows the fixed trusted-shell requester, disposable signing method and exact event.
Only the native approval button can consume that private operation and sign it.
Rejection, cancellation, stale ownership, replay and expiry deny the operation.
Backgrounding or destroying the runtime destroys the disposable key. Its maximum
foreground lifetime is ten minutes; generation starts native cleanup scheduling.
Repeated generation does not extend that deadline. A later explicit activation can
start a new disposable session.

The key lives in an opaque C allocation. Native OS randomness supplies generation,
context randomization and per-signature auxiliary randomness. Native wrappers
serialize access and clear their owned secret buffers before freeing them. This is
a boundary within the app process. It does not establish process isolation,
hardware-contained secp256k1 signing or protection from a compromised app process.

## Bridge surface

| Operation | Input | Result |
| --- | --- | --- |
| `activateEphemeralSigner` | None; native owner is checked | `true`, or failure |
| `generateDisposableIdentityAsync` | None | Disposable public key |
| `reviewAndSignDisposableEventAsync` | Exact unsigned event JSON | Signed event after native approval |
| `cancelDisposableReviewAsync` | None | Cancels outstanding review |

These operations are not forwarded to napplets. The private C digest-signing
function is not an Expo export. The disposable trace has no key import, export or persistence API. The developer-tools **Native signer check** signs a fixed test event
and independently verifies the returned bytes with the existing shared verifier;
it has no publication operation and does not open saved identity storage.

Native input accepts exactly `pubkey`, `created_at`, `kind`, `tags` and `content`.
It rejects duplicate or extra keys, ambiguous integers, malformed Unicode, invalid
escapes, mismatched public keys and excessive input. Both platforms limit the
canonical event to 2 MiB of UTF-8 and allow 256 additional bytes for the input JSON
wrapper. Tag rows must contain at least one string. These bounds match the selected
production signing profile. Timestamps are nonnegative safe integers and kinds are
0–65,535. Native NIP-01 canonicalization
determines the signed digest. The shell independently checks the signature, digest
and every requested field before accepting the result.

## Production Expo interface and future provider boundary

This source/interface inventory compares the Android
[`SignerCoreModule`](../modules/signer-core/android/src/main/java/org/nostrocket/hypergolic/signercore/SignerCoreModule.kt),
iOS [`HypergolicSignerCoreModule`](../modules/signer-core/ios/HypergolicSignerCoreModule.swift)
and shared [`NativeVaultModule`](../src/security/native-vault-contract.ts).
Both modules declare the following production export names. The four disposable
exports documented above remain separate and unchanged.

| Group | Production exports |
| --- | --- |
| Vault entry | `activateNativeVault`, `isNativeVaultAvailableAsync`, `openNativeVaultAsync` |
| Native import and identity selection | `prepareNativeImportAsync`, `cancelNativeImport`, `commitNativeImportAsync`, `selectNativeIdentityAsync` |
| Method metadata and changes | `getNativeSigningMethodsAsync`, `selectNativeSigningMethodAsync`, `disconnectNativeSigningMethodAsync`, `deleteNativeLocalKeyAsync` |
| NIP-46 connection | `prepareNativeRemoteConnectionAsync`, `cancelNativeRemoteConnection`, `commitNativeRemoteConnectionAsync` |
| NIP-46 relay refresh | `prepareNativeRemoteRefreshAsync`, `cancelNativeRemoteRefresh`, `commitNativeRemoteRefreshAsync` |
| Android signer connection | `prepareNativeAndroidSignerAsync`, `cancelNativeAndroidSigner`, `commitNativeAndroidSignerAsync` |
| Native authentication and account actions | `isNativeVaultAuthenticationAvailableAsync`, `showNativeBackupAsync`, `deleteNativeIdentityAsync`, `cancelNativeVaultAction` |
| Source-bound signing and handoff state | `reviewAndSignNativeEventAsync`, `cancelNativeSigning`, `nativeSigningHandoffState`, `nativeRemotePreparationHandoffState` |

These are trusted-shell React Native interfaces, not napplet APIs or incoming
signer services. Public snapshots, candidate handles and signed public events
cross this boundary; secret entry and backup presentation stay in native UI.
On iOS, Android-signer prepare and commit first require a valid vault lease,
then fail with `SIGNER_UNSUPPORTED`; cancellation is a no-op. iOS method
selection supports `local` and `nip46`, and disconnect accepts only `nip46`.
The shared TypeScript interface includes Android's `nip55` choice without making
it supported on iOS.

Any future incoming provider needs separate decisions about:

- Authenticated caller identity: how to establish and revalidate an app or remote
  caller, handle package/signing-identity changes, and bind its request to review.
- Permission scope and storage: which operations, accounts and payloads a grant
  covers, whether any permission is remembered, and how it is isolated from
  napplet grants and protected at rest.
- Revocation and lifetime: expiry, one-use versus persistent authority, caller or
  account changes, background/lock, process death and uncertain in-flight results.

No provider policy is selected here. Phase 3 remains outgoing-only: no exported
signer Activity/ContentProvider, incoming NIP-46 service or third-party forwarding
is introduced. This inventory is source documentation, not compiled-export,
runtime, security-parity or Amber-equivalence acceptance.

## Production vault integration in progress

The owner waived preservation of accounts from the pre-release JavaScript vault.
The new store uses a separate native namespace. It must distinguish a completely
absent store from missing or corrupt established state; the latter cannot generate
a replacement identity. A single authenticated record contains account metadata
and key material. A successful mutation requires a durable write and verified
readback, with native ownership and lifecycle checked at the mutation boundary.

JavaScript receives only public account snapshots, an expiring import candidate
handle and signed public events. Native UI accepts the nsec; JavaScript never
receives the input. After workspace flush, native confirmation binds import or
selection to the expected vault revision. Backup and deletion retain native device
authentication and lifecycle cancellation. Import candidates expire after two
minutes and are cleared on cancellation or loss of ownership.

Ordinary approvals, Outbox, Blossom authorization and the development fixture
publisher now call the native adapter. Each request carries a native host source
correlation, exact public event and expected vault revision. Native code must check
the original request and destination before showing its own review; a JavaScript
approval flag is not consent. Ordinary signing rejects relay-authentication and
upload-authorization kinds. The upload lane keeps its separate exact-byte and
destination authority. The shared adapter independently verifies every result and
rejects late results after cancellation or an identity change.

The public contract is in
[`native-vault-contract.ts`](../src/security/native-vault-contract.ts). Shared tests
cover malformed public snapshots, forged and replayed import handles, stale
identity state, wrong signing lanes, changed results and cancellation. A production
Metro source-map audit excludes the six old secret-bearing JavaScript modules.
The Android owning suite also exercises actual Keystore/AtomicFile persistence,
cold process restart, native imports, corrupt and missing-key states, stored-key
review/signing and deterministic cancellation races. The iOS suite exercises the
native encrypted record, C crypto and mutation gate with explicit in-memory
Keychain/file ports; it does not establish physical storage protection. Independent
source review found and verified fixes for lock ordering, stale operation epochs,
import deadlines and exact-token cancellation. The source-sealed ordinary Android
app also passes generation, import, duplicate-account handling, native selection
and cold restart. Its OS-authenticated backup/deletion observer remains incomplete.
Post-write cancellation must report a cache-closing uncertainty error; a dedicated
iOS regression confirms this behavior. Android now passes the corresponding durable
import, selection and deletion cancellation cases, including cold readback of each
changed record. These owning tests do not close the separate OS-authenticated UI gap.
Targeted physical protection checks remain open.

The generic SecureStore bridge now has a pinned native configuration-only patch.
All five data exports require the exact configuration service, scope-key format and
protection options. Both platforms are configured to build this module from source.
Policy tests and the production configuration caller pass. The actual Android
Expo bridge denies all 25 restricted calls, completes async/sync configuration
round trips and preserves seeded legacy encrypted rows and their Keystore alias.
The iOS bridge also denies all restricted calls; its configuration write currently
fails with `ERR_KEY_CHAIN` in the disposable Simulator app. A scoped signing
retry failed before app launch; this remains a named Simulator harness gap. Old encrypted
identity records stay untouched. No legacy-key deletion is part of this change.


Android import and connection panels close an undelivered prepared resource when
prompt coroutine cancellation wins after resume. The
[cancellation regression](../tests/native/signer-core/panel-cancellation/README.md)
uses the resolved coroutines 1.8.1 API and real queued dispatch. Its 36 assertions
and two removed-cleanup negative controls use close-counter resources; they do not
prove Android dialog or JNI teardown. The ordinary Android build compiles this
repair without changing coroutine dependencies.

The iOS session now gives each remote preparation and signing request its own
native operation ID. Panel actions, queued tasks, timers and completions must
still own that ID before changing request state. A cancelled request's late
success or failure cannot consume a newer reply or clear its timer, panel or
source. Existing account, epoch, deadline and uncertain-dispatch checks remain.
The [operation regression](../tests/native/signer-core/operation-completion/README.md)
passes 95 actual-method host checks. Six delayed signing-delivery cases hold panel
dismissal, install replacement work, then deliver the old callback. The 48 added
checks preserve replacement state and require uncertainty after possible dispatch,
denial before dispatch/local delivery, and success only with unchanged authority.
Disabling the existing final delivery guard in a staged control produces four
expected failures; iOS production code is unchanged. Real Swift tasks and
continuations use explicit UI, authority, key and network/core ports.

Android now preserves uncertainty at four external-result boundaries: the final
operation guard, NIP-46 Resume, native completion and handoff-ticket validity.
Lost authority after a possible send or a confirmed external result cannot imply
that nothing was signed. Live wrong-ID and duplicate-result failures remain
invalid, while pre-send certainty and peer refusal/invalid events remain distinct.
Local paths and the result-completion mapper preserve actionable readback, recovery
and storage errors; final operation-guard failures after possible dispatch remain
uncertain. The
[focused regression](../tests/native/signer-core/remote-operation/README.md) passes
70 cases and 189 checks using actual operation/ticket classes and extracted owning
bodies with explicit host ports. These checks do not establish Android/Expo
lifecycle, protected storage or ordinary-app acceptance.

Unrelated import cleanup leaves a pending authentication timer intact. Session
authentication now carries one absolute 60-second monotonic deadline through its
completion, backup read and reveal, and both deletion permits. Late completion is
rejected even when the timer callback is delayed. Old callbacks and cleanup can
only clear their own authentication attempt.

The [action lifetime regression](../tests/native/signer-core/action-timeout/README.md)
passes 77 checks, retaining the original 24 timer-ownership checks. The prior
session source compiles but fails 34 assertions. The harness compiles actual
session methods and the mutation gate with an explicit test clock and UI/auth/key
ports. It does not exercise UIKit, OS authentication or protected device storage.
The source change and red/green evidence passed independent review; integrated
iPhone compilation and physical acceptance remain open.

## Cryptography and provenance

The primitive uses unmodified
[bitcoin-core/secp256k1 v0.8.0](https://github.com/bitcoin-core/secp256k1/releases/tag/v0.8.0),
commit `6e2c8bc4ecdc6e71dbe7a368f360d8d453ce435d`. Extrakeys, Schnorr and ECDH
modules are enabled. The source manifest records file hashes, compile definitions,
the MIT license and provenance limits. Both mobile products package the license.
GitHub reports the signed release tag; local GPG verification was not performed
because GPG is unavailable. Pins and test vectors are not a security audit.

Official BIP-340 vectors are pinned at bitcoin/bips commit
`927b6de9915c9262615a6399de51b200f81e5aa4`. The host suite covers all 19 verification
vectors, four exact signatures, altered data, entropy and allocation failures,
invalid sampled keys and owned-buffer cleanup. See the
[primitive contract](../modules/signer-core/shared/README.md).

## Native remote encryption

The NIP-44 v2 implementation follows NIPs revision
`a79e21d90fce5465b50ef385dd368bba99ec4a0b`, including the extended plaintext-length
prefix. It uses the opaque native key, upstream secp256k1 ECDH, unmodified
Monocypher 4.0.3 ChaCha20 and platform-supplied HMAC-SHA256 and OS entropy. Inputs
are bounded before allocation, the MAC is verified before decryption, and owned
temporary buffers are cleared. The native caller must verify the outer event,
peer and recipient before invoking decryption. No encryption or shared-secret API
is exposed to JavaScript.

Independent host review and sanitizer runs cover 15,190 assertions, official
vectors, authenticated invalid UTF-8/padding, callback/allocation failures and
exact interoperability with nostr-tools at the extended-length boundaries and
4,202,496-byte limit. These are primitive and host-build results. Platform adapters,
relay transport and native operation lifetimes still need their own evidence.
See the [NIP-44 contract](../modules/signer-core/tests/nip44/README.md) and
[external-signing contract](external-signing.md).

## Native handoff response validation

The iOS client validates signing-preflight relay equality before authenticating a
paused handoff. A syntactically valid changed list fails with
`SIGNER_RELAYS_CHANGED`; even an earlier native Resume cannot release that source.
Explicit refresh and connection may still propose changed relays for confirmation.

The [durable host regression](../tests/native/signer-core/relay-ordering/README.md)
runs the actual client, handoff and native cryptography against encrypted
original-ID replies. It passes 24 assertions; the prior client reproduces four
transient-release failures. Its exchange, pause and transport ports are doubles.
The fresh iOS native UI proof is separately scoped in
[external signing](external-signing.md#resumed-browser-and-account-checks--15-october-2026).

## Reproducing checks

Use the pinned local toolchains. Native commands require the Android SDK/emulator
or Xcode/Simulator; they fail when the environment is unavailable.

```sh
source .tools/use-local-tools.sh
python3 modules/signer-core/tests/run-host.py --sanitize
python3 modules/signer-core/tests/nip44/run.py --sanitize
pnpm run test:signer
pnpm run test:signer:native -- --platform android --suite core --serial "${HYPERGOLIC_TEST_ANDROID_SERIAL:?Select a reviewed disposable emulator}"
pnpm run test:signer:native -- --platform android --suite migration --serial "${HYPERGOLIC_TEST_ANDROID_SERIAL:?Select a reviewed disposable emulator}"
source .tools/use-ios-tools.sh
python3 tests/native/signer-core/relay-ordering/run.py --output /tmp/signer-relay-ordering
pnpm run test:signer:native -- --platform ios --suite core --udid "${HYPERGOLIC_TEST_IOS_UDID:?Select a reviewed Simulator}"
pnpm run test:signer:native -- --platform ios --suite migration --udid "${HYPERGOLIC_TEST_IOS_UDID:?Select a reviewed Simulator}"
```

The `core` and `migration` suites are implemented. The latter tests the fresh
native vault; it does not migrate legacy JavaScript accounts. Its iOS storage ports
are explicit doubles, and production protected-vault availability remains false
on Simulator. The `nip46` suite runs the scoped native protocol/TLS checks
described in [external signing](external-signing.md#validation-status). The
[central runner](../tests/native/signer-core/README.md) now composes Android `nip55`
and the applicable suites for `all`; iOS NIP-55 is explicitly not applicable.
Select the disposable target through the environment variables above and supply
a reviewed provider build for Android NIP-55/all. Unknown suites, unavailable
environments and zero cases cannot produce success. Twelve host orchestration
regressions pass. The earlier iOS aggregate passes all three applicable groups
(74 cases, 573 native assertions and 47 independent checks). The historical Android
all01 aggregate stopped at its controller group; a once-only cancellation repair then passed all
six focused controller modes. A fresh all02 aggregate now passes all five child
invocations: core 52 native/7 independent checks, persistence 381/7, NIP-46 92/142,
NIP-55 validators 67 native checks, and controller 71/14. These are each child's
reported counts, not a sum of distinct security properties. The original failed
aggregate stays unchanged. Independent review verifies all five receipts and exact
cleanup: 253 package metadata records restored, owned apps/XML/reverse mappings absent and peer
processes stopped. The preexisting emulator stays running; only test ownership
is released. This covers the defined native fixture suites, not ordinary-app, physical Amber,
protected-storage, all-route or full Phase 3 acceptance.
Native receipts record executed counts, source hashes, public results, visible
review evidence and cleanup of their owned temporary applications.

`index.signer.fixture.tsx` is a separate Expo entry for verifying the real owner,
module registration, JavaScript/native calls and review UI. It claims the native
context without initializing the production vault. Build it under the disposable
`org.nostrocket.hypergolic.signercore.bridgeproof` app ID. Its production entry
remains `index.ts`. Do not install a fixture over the retained app.

The integrated bridge drivers also build or accept a source-sealed disposable app:

```sh
python3 tests/native/signer-core/android/bridge.py --serial EMULATOR_SERIAL --output /tmp/signer-android-bridge
python3 tests/native/signer-core/ios/build-bridge.py --udid SIMULATOR_UUID --output /tmp/signer-ios-build
python3 tests/native/signer-core/ios/run-bridge.py --udid SIMULATOR_UUID \
  --app /tmp/signer-ios-build/derived/Build/Products/Release-iphonesimulator/Hypergolic.app \
  --build-receipt /tmp/signer-ios-build/build.json --output /tmp/signer-ios-bridge
```

Use fresh output directories. The Android script builds its isolated package using
a Gradle initialization script; the iOS builder supplies an explicit disposable
bundle ID and entry file. The observers refuse an unexpected app ID and remove
their owned applications after recording the journeys.

## Current evidence and limits

The execution report lives in the
[Plan 01 summary](../.planning/phases/03-external-signing/03-01-SUMMARY.md).
Host, emulator/Simulator, integrated Expo and physical evidence are recorded
separately. No protected-record migration or physical-device acceptance is claimed
by the disposable path. The full Phase 3 requirements remain open.

The independent source review used
[Amber at 9b6d2a5](https://github.com/greenart7c3/Amber/tree/9b6d2a5bab81740fcbd6e15f7d66bbab8c00fda2)
as a reference for native request handling, Keystore wrapping and migration safety.
Amber parity is unproven: this was a narrow source comparison, without an Amber
runtime test or an independent audit of either application.


## Ordinary integration checkpoint — 15 October 2026

The ordinary Android app now has scoped browser preparation/Resume, same-account
restart/disconnect and one shared SDK data-value trace. A separate SDK signature
cancellation test verifies refusal without fallback. The first NIP-46 publication
attempt stops before SDK submission because its required public-key image is
unreadable; no signature or event is produced. Capture protections are unchanged.

The ordinary signed iPhone product and a fresh identity-only derivation pass
separate offline verification. Two physical account attempts stop during XCTest
automation initialization with zero tests executed and exact cleanup. Product
build/signature verification does not prove account, Cancel, cold-launch or
protected-store behavior. The original failed receipts remain separate from later
offline verifier corrections. See [external signing](external-signing.md#browser-resume-publication-boundary-and-iphone-automation--15-october-2026)
for current scope. Both phases, final quality, successful publication and Amber
interoperability remain open.

The rebuilt ordinary Android artifact includes the accessible-key repair and exact
archived-fixture admission. Publication02 verifies the accessible key, a
readable key/Note image and native exact-event review, then stops at signing-browser
foreground observation. One SDK request reaches the remote challenge; no signature
or publication results. The original failed receipt and exact cleanup are retained.
A generic observer error leaves the native cause unknown. No capture protection or
signing authority is relaxed.

## Ordinary Android signing Resume — 16 October 2026

The unchanged ordinary build05 now passes one complete NIP-46 SDK note journey
(publication04, 90 checks). Fresh readable identity and exact native event review
precede approval; Chrome handoff and explicit Resume return one verified signature
for the original request. The SDK reports one published request and no pending
work, with exact content/event ID visible. The native aggregate reports 3/3 relays;
independent exact-ID retrieval verifies nos.lol and bucket.coracle.social. Damus
readback times out, which does not establish absence or controlled receiver counts.
A selection toolbar partly covers the result heading; not every label is visually
unobscured.

The preceding FAILED81 run verified a signature, then read the guest while the
trusted native sheet was still busy. Its publication outcome remains unknown. The
reviewed observer correction waits within the original total 35 seconds; no native
code, signing policy or capture protection changed. Both runs have exact owned
cleanup and unchanged source/build seals. Other routes, ordinary iOS, physical
protection, Amber and Phase 2/3 acceptance remain open. The verified unchanged
quality baseline remains Doctor 100/aislop 98; no new waiver is introduced.

## Amber result compatibility — 16 October 2026

The Android Activity-result parser accepts optional public-key `signature` and
`event` fields only as exact copies of the required `result`; an optional signing
`signature` must likewise match the required result and verified event signature.
Missing authoritative results, conflicting aliases, wrong types and unknown
fields still fail. Provider/request/account binding and native signature checks
remain unchanged. The repair passes 67 native Android assertions and seven
independent event/signature checks. An owner-operated Amber public-key/Resume/
candidate-cancellation check succeeds; no actual Amber signature is claimed.

The corrected physical iPhone diagnostic identifies an inactive native vault
entry before any core or storage dispatch. `NativeVaultSession.open()` now permits
one bounded activation wait, then rechecks the original native owner, epoch and
protected-data availability. Other operations remain blocked during opening;
backgrounding, cancellation, revocation and expiry still fail closed. The helper
uses the existing activation observer and compiled session file. No JavaScript
retry, production diagnostic code or dependency change was added.

All 18 host admission regressions pass. One ordinary physical iPhone XCTest passes
public account/local-method, empty native Import Cancel and cold restart, with
three equal public snapshots and readable screenshots. The original wrapper
receipt remains false because automatic raw touch samples were not retained;
retained activities and visible transitions support only this scoped journey.
Temporary apps are removed and retained app metadata restored. This does not close
OS-authenticated import/export, protected-device acceptance or ordinary iPhone
remote signing. Earlier failures remain recorded. React Doctor is 100/100 and full
aislop is 98/100 with existing dependency findings; the normal quality gate and
Phase 2/3 acceptance remain open.


## Android cancellation ownership — 16 October 2026

A captured request now notifies its handoff of cancellation at most once. Explicit
cancellation and error completion share one per-request atomic guard, set before
calling the handoff. Cancellation still revokes the request immediately from a
worker thread; its completion runs on the main thread. A stale captured callback
cannot cancel a replacement request. The owning native controller tests cover
these cases and retain the original once-only assertion that exposed the defect.
