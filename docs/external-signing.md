# External signing

## Code completion before the final test campaign — 2 November 2026

Source audit finds the selected native/local, NIP-46, Android NIP-55 and route
integrations present. Two uncertainty-reporting defects are corrected with separate
security review and focused host regressions. The remaining known code-freeze
blocker is dependency/quality closeout. Broad device, interoperability and final
acceptance checks are scheduled together after the code-freeze candidate is ready;
no earlier failure or acceptance result is changed. See [the current code checkpoint](../.planning/phases/03-external-signing/03-CODE-COMPLETION.md).

Phase 3 is in progress. The shared signing-method model, Settings controls and
account transitions are implemented and tested with native-port doubles. Native
NIP-46 storage, connection and dispatch have scoped owning-test evidence on both
platforms. An ordinary Android app trace also covers connection, relay refresh and
offline disconnect. Remaining ordinary-app routes and external-authentication acceptance checks stay
open. A separately reviewed host run now verifies the Swift client against the pinned nak signer below. Ordinary app and full Amber interoperability remain open, as does Phase 2 acceptance.

## Android authorization failure fix and refreshed test build — 30 October 2026

The Android client fix is applied: authentication-challenge denial or expiry
after a possible signing send reports SIGNER_UNCERTAIN. Pre-send and unrelated
errors remain unchanged, with no resend or deadline extension. The regression reproduced the
original failure; the corrected client passes 30 cases and 152 assertions.
Independent event/count verification passes 165 checks. Local signer checks pass 70 tests and typecheck
passes. Android generation, export and the ordinary-entry test build also pass.

Static review verifies the native fix in the new disposable, debug-signed ARM64
APK, with exact notices and retained source-map provenance. Scoped source and
native scaffold contents remain unchanged by generation/build. This is packaging
evidence, not an ordinary-app cancellation, distribution or physical result.
The last cancellation attempt still fails its caption check after Cancel input;
its actual caption/cause and late-response behavior remain unproved.

State continuity, protected-device checks, unavailable iPhone work, controlled
receiver, final quality and full acceptance remain open. Preparation for a later
caption observation or State route grants no runtime or acceptance claim.

## Build Properties integration and incomplete cancellation checks — 30 October 2026

Build Properties 57.0.22 is applied with its exact dependency closure and both
notice guards verified. Config, typecheck and native generation pass in a copied
project. Four compared native files match the retained baseline; the fresh iOS
plist omits the architecture flag added by React Native Pods post-install. The
live flag remains true. This does not establish native-output equivalence or
update the retained iPhone binary.

Ordinary Android pending-signature cancellation remains unverified. The latest
attempt confirms the public Settings view and connects, then stops at the strict
lab-launcher label guard before opening the lab or requesting a signature.
Earlier failed attempts and their exact cleanup remain recorded. The actual
label subcondition, geometry and cause are unknown; no guard relaxation follows.
A disposable, debug-signed test build from the ordinary app entry passes static
packaging review. Its runtime entries and manifest match the prior build; no
runtime or distribution acceptance follows.
Prior scoped Outbox and Blossom proofs do not close cancellation,
controlled-receiver, protected-device, iPhone continuity or full acceptance.
Fresh full quality has not run; permissions, phases and counters are unchanged.

See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#build-properties-integration-and-incomplete-cancellation-checks--30-october-2026).

## Android Outbox flow and separate verification — 30 October 2026

The ordinary Android NIP-46 two-event Outbox flow is independently verified:
exact seed and primary signatures, separate native relay receipts, Close Results
and the genuine SDK completion. The original automated result remains failed
because its final verifier assumed different wire and SDK field sets. A separate
offline supplement passes on the unchanged artifacts, and a later one-request
public readback retrieves both exact signed events. These results do not rewrite
the failed original. Ancillary duplicate acceptance and readback do not establish
a new forwarding delivery or controlled receiver consumption. Exact cleanup
verifies; the original outer uncertainty remains recorded separately.

A separate Build Properties 57.0.22 candidate passes normal-policy resolution
and frozen installation only in an isolated copy. Live dependencies, product18
and quality recommendations are unchanged; copied-project, native-output and
notice validation remain open. The iPhone owner is unavailable. Full quality,
protected-device/accessibility, real-signer/lifecycle and Phase 2/full Phase 3
acceptance remain open, with counters and source-push ownership unchanged.

See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#android-outbox-flow-and-separate-verification--30-october-2026).

## Classifier setup failure and local guard pass — 30 October 2026

The first no-peer classifier stops during setup before recorded account or label
evidence. Its failed automatic cleanup and original uncertainty remain unchanged;
separate root reconciliation verifies exact owned-app/scratch and inventory/host/
lease cleanup. The failed command and cause remain unknown.

A separately reviewed metadata-only successor passes the local Identity-expanded
launcher guard without tapping it. Seven fixed navigation events, both sole-relay
checks and exact cleanup verify; there is no peer, guest submit, signing, image or
retained raw XML. This local layout did not reproduce the remote Outbox failure,
and no new full-route retry is cleared. Checkpoint59, iPhone/quality permissions,
phase counters and full acceptance limits remain unchanged. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#classifier-setup-failure-and-local-guard-pass--30-october-2026).

## Outbox launcher guard stop — 30 October 2026

The next ordinary Android NIP-46 Outbox attempt completes a fresh remote connection
but stops at the exact launcher-label guard before opening Approval Lab or submitting
the seed. Three connection RPCs and zero signatures verify. A pre-peer Connections
collapse and timely public Settings witness pass; neither proves the later remote-
account launcher or full route. No seed witness, event review, application event publication or
readback occurs. The actual failing label condition, text, geometry and cause are
unknown because guarded navigation XML stays transient.

A reviewed preparation-only diagnostic would record fixed bounded label counts
only on the existing failure and then rethrow it. It changes no acceptance rule
and supplies no runnable profile or full-route retry permission.

The original failed route and outer uncertainty remain unchanged beside verified
automatic/fresh cleanup. The next work is a bounded source-led diagnostic, not an
unchanged full-route retry or relaxed matching. Checkpoint58's upload/navigation
passes stay scoped; full Outbox, iPhone continuity, quality permissions and Phase 2/
full Phase 3 acceptance remain open. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#outbox-launcher-guard-stop--30-october-2026).

## Android remote upload and guarded navigation — 30 October 2026

An ordinary Android NIP-46 upload passes bounded review: the generated public
71-byte PNG has complete preapproval image/hash witnesses, one exact remote upload
authority signature, native server confirmation and pushed SDK completion. Six
RPCs and one signature verify. Confirmation arrives inside the conservative
60-second file grant; provider readback, durable storage and authorization
enforcement remain unproved. The earlier failed preview remains failed.

A separate no-peer navigation successor now closes expanded Connections and opens
Approval Lab, returns to Settings, then opens Feed Lab under the same public
account. Both launchers and their labels are fully visible before their taps.
Its earlier guard failure, original uncertainty and separate cleanup remain
unchanged; the unknown fields and historical cause are not inferred. Exact cleanup
verifies for both scoped runs. Full Android Outbox is still preparation only;
iPhone continuity, quality permissions and Phase 2/full Phase 3 acceptance remain
open. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#android-remote-upload-and-guarded-navigation--30-october-2026).

## Navigation and upload-preview stops — 30 October 2026

The no-peer navigation attempt stops at a Settings entry guard before any lab tap.
Both sole-relay checks pass; no signing, guest submit or image occurs, and exact
cleanup verifies. Source and prior AX support a narrow default-field correction,
but the actual rejected field was not retained. Outbox integration remains held.

A separately reviewed upload admission successor completes its NIP-46 connection
and opens one fixed public PNG review. The public preview shows the generated
photo and request context, but MIME type and size are clipped. The observer writes
no success marker and root stops the owned run before approval. Three connection
RPCs and zero signatures, file approvals, native signing approvals or PUTs are
verified. The original route remains failed; cleanup passes separately.

A future per-image witness proposal separates request bindings from visible fields
and requires jointly complete coverage before approval. It is not a runtime pass,
and future hash pixels remain unobserved. No product privacy defect is inferred.
iPhone owner availability, quality permissions, protected-device and full Phase 2
and Phase 3 acceptance remain open. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#navigation-and-upload-preview-stops--30-october-2026).

## Android seed SDK result and public file mapping — 30 October 2026

An ordinary Android NIP-46 seed now reaches exact shell/native review, a verified
peer signature and the same-ID SDK publication result, with no pending request.
Native and terminal guest images remain black; exact review and completion evidence
uses accessibility records and offline cryptography. Public preaction witnesses
are readable. Independent publication readback and controlled receiver proof remain
open.

The full Outbox attempt stays failed during Feed Lab navigation, before any
primary request. Conflicting parsed foreground records stop the observer; their
raw values, cause and final tap outcome are unproved. Separate cleanup restores
the retained inventory. Earlier failures and uncertainty records remain unchanged.

A no-image prerequisite maps the fixed public PNG file review and rejects it.
It approves no file, signs no event and performs no PUT; full Android NIP-46 Blossom
remains open. A prerequisite review-order miss is retained separately from later
prospective continuation at the public gate, with original clocks unchanged.

Next navigation and full upload work remain preparation only. iPhone work waits
for owner availability; no new phone observation or dispatch occurs. Full quality,
protected-device, controlled receiver, ancillary forwarding and Phase 2 and Phase 3
acceptance remain open. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#android-seed-sdk-result-and-public-file-mapping--30-october-2026).

## Android route preparation and public capture limits — 30 October 2026

A signed ordinary Android build and supported readiness checks are reviewed.
Three NIP-46 attempts connect but stop before seed submission, without event
signatures. A guarded public-only comparison finds different guest and console
captures; it does not establish a cause or general protection guarantee. The later
attempts stop at a visual-witness deadline and then during navigation. Android
Outbox and Blossom, controlled-receiver and ancillary-forwarding proof remain open.
Quality, iPhone continuity, protected-device and full Phase 2 and Phase 3 acceptance
remain incomplete. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#android-route-preparation-and-bounded-capture-results--30-october-2026).

## Applied tooling, cancellation checks and native builds — 30 October 2026

Dependency updates and notices are applied; focused integration checks pass.
A native host test confirms that cancelling a valid signed reply before resuming
withholds the result and preserves uncertainty without retrying. Its change is
only a test; controlled transport and pause callbacks do not prove device behavior.
Ordinary unsigned Android and iPhoneOS Release builds pass independent review.
Quality is incomplete: aislop scores 99 with a high node-forge finding; Expo Doctor
passes 20 of 21 checks. The local React Doctor scan has no findings but no score.
Numeric scoring and separate audit commands did not run; metadata approval is pending.
iPhone account continuity, restart and disconnect journeys, protected-device checks
and full Phase 2 and Phase 3 acceptance remain open.

## Native no-fallback regression applied — 30 October 2026

Three owning native cases keep both same-account methods attached and remote
selected: failure at first preflight, before signing dispatch and after possible
signing dispatch. Each returns no signature, with no implicit local fallback or
retry; possible dispatch remains uncertain. Vault/method state is unchanged, and
explicit local selection then signs successfully.

The isolated iOS suite passes 42 tests/474 assertions. Its Core/test/scene-host
changes are applied; 70 signer contracts, typecheck and Python AST pass. Controlled
transport, store and authority ports do not establish physical offline behavior
or a new ordinary-app result. See [validation](../.planning/phases/03-external-signing/03-VALIDATION.md#native-regression-integration-and-pending-continuations--30-october-2026)
for the isolated dependency candidate and corrected phone-retry evidence. Full
Phase 2/Phase 3 acceptance and quality remain open.

## Local marker readback and UI-automation boundary — 30 October 2026

A2 passes one fixed public shared/sample Write followed by one fresh Read in the
retained ordinary iPhone State Lab. Eight saved identities and local selection
remain exact; request labels advance 1→2→3, with matching marker, terminal status
and native input. Exact 109-record ownership cleanup verifies. This is
same-session local readback, not cold persistence or remote-method continuity.

Preserve the remote continuation's original startup failure and separate host
reconciliation, then its one-connect/relay-ACK early-observer failure and later
fresh expiry/local-state reconciliation. A subsequent observer reaches the exact
candidate/consents and three RPCs with zero user-event signatures, then fails a
post-commit Settings query after the epoch remount. It does not prove the current
saved method; no failed result is rewritten or connection replay inferred.

The separate B-tail cannot initialize XCTest: Code 1000 times out enabling
automation mode before either method body. Zero bodies and zero Reads execute;
one runner-initialization error is not an application-case failure. Wrapper time
is 71.635 seconds and exact 109-record ownership cleanup verifies. Current method
observation/readback remains open, C/D/E is unrun/HOLD, and the owner's question
about an authorization sheet is pending. Its cause and grant timing are not
established. Resolve the automation gate first, then fresh no-peer state/Read.

The isolated owning iOS Simulator suite passes 41 cases and 434 assertions. With
both same-account methods attached and remote selected, transport faults cover
get_public_key and sign_event after valid preflights. No signed result is returned
for either remote failure; record/method state stays unchanged, and explicit
local selection then verifies a valid signature. Network exchange, Keychain/files
and host-service ports are controlled doubles. Core test-seam/regression and
scene-host harness changes remain unapplied. Cleanup is receipt/driver evidence;
raw Simulator inventories were not retained. Physical remote-offline fallback
resistance and post-dispatch uncertainty remain unproved.

Checkpoint 51 application and subsequent private Notes sync verify; its capture
stays immutable. Doctor 100/aislop 99 and Expo 20/21 remain dated, with no new full
quality scan or waiver. Forge approval remains unanswered/unapplied. Phase 2/full
Phase 3 remain open, counters unchanged, EXT-09 alone complete, no source push.

## iPhone native import and initial State Lab Read — 30 October 2026

Corrected A1 passes two independently reviewed ordinary iPhone tests. Fresh
seven-account/current-remote/peer/no-pending admission precedes native Paste and
explicit shell/native consent for the intentional public fixture. The observed
eighth account has local selected and preserves all seven previous saved IDs.
A fresh State Lab then performs one shared/sample Read: Requests 0 becomes
Requests 1 and No value saved. is observed. Its nine-row Result map is retained.
Exact 109-record metadata, runner/group/lease cleanup and no uncertainty verify.
No guest storage Write, peer, signature or publication occurs. Native import
intentionally writes the vault; this is not nonempty-data or method-continuity
acceptance.

The preceding mapping-only run remains separately passed. Its identifiers are
empty; use observed control/counter labels and fresh geometry, not stale frames
or the U+FFFC-bearing counter value. The first A1 and separate observation/Cancel
runs remain failed/skipped. Later observation maps duplicate same-frame title/
explanation aliases and verifies Cancel, but its broad TextField guard prevents
final seven-account proof. Corrected A1's fresh initial admission supplies that
separate public-state proof; it does not rewrite either earlier result.

Both COPY payloads and derive-public-copy.log are excluded from capture; only
hash/length, receipts and public-vector source remain. Checkpoint 50 application/
canonical copy and private Notes sync verify. Its Doctor 100/aislop 99 and Expo
20/21 remain dated; no new quality scan, Forge age approval, waiver or suppression
is claimed. Phase 2/full Phase 3 and counters remain open or unchanged; EXT-09 alone
is complete. No source commit/push occurs. Nonempty persistence and same-npub
method/lifecycle acceptance remain open; [validation scope](../.planning/phases/03-external-signing/03-VALIDATION.md#iphone-native-import-and-initial-state-lab-read--30-october-2026)
keeps the completed slice and earlier failures distinct.

## iPhone Blossom and Android vault barriers checkpoint — 30 October 2026

The ordinary physical iPhone route verifies the generated public 71-byte PNG,
exact native file review, one kind-24242 authorization signature and the pushed
SDK upload completion. Independent review matches 25 native taps, six RPCs on
one client and one Schnorr signature. Server confirmation is observed after
32.469 seconds within the unchanged 60-second file grant; the event's 120-second
expiry is a separate bound. Seven saved accounts, the selected remote peer, no
pending request and exact 109-record ownership cleanup verify.

The original offline extraction failure stays false. A separately reviewed
Python 3.9 numeric-offset compatibility change re-extracts the same finalized
results and passes; it changes no app behavior or runtime result. Later public
readback also stays separate: the first GET returns 307; Location was not
retained. HEAD returns 200 without a body or Location, and an instrumented GET
records 307 with a Location. A separately admitted target GET then returns 200
and the exact 71 bytes/hash. Totals are three GETs and one HEAD, with no
automatic redirect following or retry. This establishes later known-byte
retrieval, not new storage, authentication enforcement or a fresh app status
query.

Checkpoint 49's application normalization has independent review and its private
Notes sync is verified. Its original failures and immutable capture remain intact.
The checked Android vault barriers are now applied: file sync precedes
AtomicFile.finishWrite; directory and parent syncs precede decrypted readback.
Post-rename uncertainty fails without automatic retry. The live owning regression
passes 12 cases/34 assertions with explicit Android fault doubles and real host
AES-GCM/files; Android 36 API compilation, prebuild and Android export pass.
These are source/host checks, not vendor, device, hardware-protection or power-loss proof. See
[the storage contract](identity-storage.md#current-native-vault--phase-3).

The ordinary unsigned offline ARM64 Android Release build passes. Independent
review verifies the applied source and packaged barriers; broader acceptance
remains false with quality and physical-device gates open. Fresh full
quality completes at Doctor 100/aislop 99 with all five engines active: the known
node-forge high finding keeps the root audit/full gate failed; nine other audits
are clean. Input/output source hashes match. Expo remains 20/21 with eight patch
mismatches. Forge 1.4.2 age approval is unanswered and its proposal is unapplied. No
score/audit waiver or suppression is proposed. Phase 2/full Phase 3 and counters
remain open or unchanged; EXT-09 alone is complete. No source push occurs. State
Lab mapping and same-npub continuity remain outside this checkpoint. The
[validation scope](../.planning/phases/03-external-signing/03-VALIDATION.md#iphone-blossom-and-android-vault-barriers--30-october-2026)
keeps native upload, offline extraction, public retrieval and host validation distinct.

## iPhone connection lifecycle and tooling checkpoint — 29 October 2026

Scoped ordinary iPhone runs verify remote connection/cold restore and explicit
disconnect/no-method cold restore without fallback. The earlier account workspace
retains the original saved account and four tab descriptor IDs/titles; this does
not prove retained runtime authority, nonces or opaque guest data.

R4 remains failed: its real seed signature is followed by an unobserved outcome
at the 45-second wait, with the failure image 46.5 seconds after approval returns.
Later exact public readback and fresh SDK/native published status reconcile that
seed. Home is unused; timing, cause and lifecycle cancellation remain unproved.

R5 also remains failed at its one-second receipt helper. Independent review
verifies both exact signatures, separate accepted receipt groups and the retained
SDK reply. A separate successful tail closes that same receipt and verifies the
full foreground SDK reply, six saved accounts, remote peer and no pending request.
Two-ID public readback separately retrieves both signed events. Together these
complete the observed ordinary return path for those events, not controlled
receiver consumption or distinct forwarding of the duplicate relay list. Exact
cleanup preserves all 109 metadata records. Earlier input/observer failures remain
false; the retained app stays installed for the ongoing batch.

The original native-vault source/regression review remains source-only. Follow-up
[pinned official AOSP source](https://android.googlesource.com/platform/frameworks/base/+/1cdfff555f4a21f71ccc978290e2e212e2f8b168/core/java/android/util/AtomicFile.java#172) verifies a failure-propagation gap: finishWrite logs
sync/close failures and continues; the caller's readback can acknowledge cached
bytes without a checked durability barrier. A minimal checked-sync proposal is
being prepared in TEMP. No live fix or physical/vendor durability proof exists;
real storage/authentication acceptance remains open.

Tooling/merge checks pass 84 regressions and both notice guards. Live quality remains
Doctor 100/aislop 99, Forge-only root finding, nine clean audits and Expo 20/21.
The reviewed Forge 1.4.2 proposal awaits early release-age approval and is unapplied.
Full quality remains open; no score/audit waiver or suppression is proposed. See the
[merge implementation](dependency-patches.md#expo-configuration-merge-implementation--29-october-2026).

Phase 2/full Phase 3 and counters remain open or unchanged; EXT-09 alone is complete.
No source push occurs. The private checkpoint 49 capture is planned;
[validation scope](../.planning/phases/03-external-signing/03-VALIDATION.md#iphone-connection-lifecycle-and-tooling--29-october-2026)
keeps original failures, later evidence and remaining acceptance separate.

## iPhone UI automation investigation — 29 October 2026

Ordinary physical iPhone UI control is restored for the bounded native test:
taps, exact short typing and clearing, Done, Home/background, reactivation and
Settings verification. The completed test takes 95.352 seconds; wrapper runtime
is 108.782 seconds. Four native edit calls observe empty → o → ok → o → empty.
Both Network and Lookup retain only wss://nos.lol with empty drafts. Independent
review verifies the real result, screenshots, observed values and action logs;
exact cleanup preserves all 109 app metadata records, removes the owned runner
and leaves host groups absent and the lease free. The retained ordinary app
remains installed for the ongoing batch.

The original 17-character bulk URL input still fails with two missing s characters;
its cause is unknown. The longer acknowledged attempt remains interrupted with
an incomplete xcresult and partial log; its separate exact cleanup passes. Short
input success proves neither a long-URL fix nor arbitrary-text reliability.
No signer peer, signature or publication starts. Phase 2/full Phase 3, acceptance
counters and final quality remain open: Doctor 100/aislop 97 and Expo 20/21.
No source push occurs.

Full Xcode selection and bare xcrun lookup now work after visible Terminal
authorization. This host lookup correction is separate from the observed native
XCTest authorization sheet during a pre-method initialization stall. One frame
before credential entry shows “Enter iPhone Passcode for XCTest” / “Enable UI
Automation,” with no entered credential visible. After the attempt ends and
capture stops, the owner authenticates only on the phone. A fresh observer test
then passes in 0.711 seconds before the separate native input/navigation proof.
Original Code 1000 initialization failures remain failed; this observed grant
does not establish the cause of every historical timeout.

Device log collection exits 74 with Device not configured and warns that the
attached-device predicate is ignored. No archive or filtering proof exists.
The USB observation does not establish wired transport. The owner cancels the
manual transfer detour; its listener is closed and no peer starts.

See [the development runbook](development.md#physical-iphone-ui-automation).

## iPhone startup repair — 29 October 2026

Two crash reports match the installed test app and executable UUID; both trap in
UIKit's missing scene-lifecycle evaluator before showing UI. The generated app
has no scene manifest or delegate. This is separate from the earlier CLI argument
error. Apple's [scene migration guidance](https://developer.apple.com/documentation/Technotes/tn3187-Migrating-to-the-UIKit-scene-based-life-cycle)
explains the platform requirement.

The durable Expo plugin now creates a scene-owned window and retains one React
runtime across scene replacement. It preserves cold and warm links, forwards
Expo lifecycle subscribers, and leaves application-wide notifications to UIKit.
It rejects incompatible templates and simultaneous second scenes. Independent
review catches and corrects a session-replacement issue before the build. Twelve
scene-generation checks and four existing codec-plugin checks pass, as do
TypeScript and one ordinary iPhone Release build. These host checks do not
establish device lifecycle or signing cancellation behavior.

Prebuild regenerates iOS; deployment-mode Pods and cached Release selection
restore the reviewed inputs. All 769 source inputs and 97,611 dependency entries
match through compilation. Only six stale Podspec files differ from the prior
dependency snapshot. The first dSYM mapping uses different path strings; its
receipt remains preserved before the generated-path correction. Product review
verifies the 153-file app, actual scene delegate and manifest, existing signing
identity and unchanged JavaScript payload.

The first update stops before mutation because the old test process is still
listed. A separate reviewed update stops only that process, updates the same test
app, and launches it. Root and the independent reviewer inspect the screenshot:
the ordinary shell and UX Lab are visible with no error alert. All 108 retained
app metadata records match. The owner reports counter 2 after Home/reopen and a
second tap, without a crash as asked. This is a user report; no new screenshot or
process observation accompanies it.
The owner confirms that both Network and Lookup contain only `wss://nos.lol`.
The later manual transfer detour is cancelled at the owner’s request and its
local listener is closed. See the automation investigation above.
Both earlier failed receipts remain unchanged.

Fresh full quality reports React Doctor 100/100 and aislop 97/100. All source
engines have zero findings; five dependency diagnostics cover six advisory IDs.
Eight audits pass and two fail. Expo remains 20/21 with eight patch mismatches.
No dependency, suppression or waiver changes accompany this repair; the normal
100/100 quality gate stays open.

No signer peer, signature or publication starts during the startup-repair batch.
The test app remains installed for continued investigation and needs exact cleanup
afterward. Signing, broader lifecycle, protected-device and remaining routes stay
open. EXT-09 alone is complete; Phase 2/full Phase 3 acceptance and all counters
remain unchanged.

## Manual iPhone check preparation — 29 October 2026

The owner is available for a guided manual check. The current ordinary app is
copied into a fresh disposable identity, labelled **Hypergolic Check**, and signed
with the existing development certificate and a separate singleton Keychain
group. Exact before/after checks match all 768 source inputs and 97,617 dependency
entries. Independent review verifies 153 app files, unchanged JavaScript, notices
and 53 Mach-O payload sections; only identity/display metadata and signature data
change. No source recompilation or product-code change is needed.

Installation succeeds and adds only the test app; all 108 retained app metadata
records match. The following direct-launch command fails locally with exit 64
because its options follow the bundle identifier. Its original failed receipt is
preserved, with a separate review confirming the argument-parser failure occurred
before launch. The owner is asked to open the app manually. No XCTest retry,
signer connection, signature or publication occurs in this preparation.

The test app remains installed for this ongoing manual batch. Remove that exact
app after the batch and verify the retained inventory; uninstall alone does not
prove Keychain erasure. The disposable peer is not started. Human observations,
peer receipts and public relay readback will remain separate evidence types.
Remaining routes, protected checks and quality stay open. Latest complete quality
remains Doctor 100/aislop 98 and Expo 20/21, with no new scan or waiver. EXT-09 alone
is complete; Phase 2/full Phase 3 acceptance and counters are unchanged.

## iPhone automation attempt and cleanup — 28 October 2026

After the owner confirms the phone is unlocked on Home Screen, one reviewed
ordinary iPhone Outbox attempt still fails while XCTest enables automation.
The original result records zero test cases and one initialization error. The
controlled NIP-46 peer records zero requests and signatures; this is scoped to
that peer. No signing or Outbox acceptance follows. A separate diagnostic-tool
lookup error does not establish the cause of the initialization timeout.

Before dispatch, the observer is corrected to preserve the full six-field SDK
reply, validate its type and response ID shape, and check its exact payload.
Its build and independent product review pass. Twenty focused host controls
cover the runtime interruption, durable command records, uncertainty and deadline
changes. The ordinary app is unchanged; these checks do not replace device proof.

The failed 79.70-second attempt defers device cleanup because its mutation outcome
is uncertain. A separately reviewed 9.80-second cleanup then verifies the exact
two owned apps, removes them and restores all 108 retained app metadata records.
Owned processes are absent and the device lease is released. The original failed
receipt stays false; uninstall does not prove isolated Keychain erasure.

No automation retry is scheduled. A guided manual ordinary-app check is available
pending owner availability; it requires a fresh disposable app identity and must
keep human observations distinct from XCTest input/timing evidence. Remaining
routes, protected-device checks and final quality stay open. Latest complete
quality remains Doctor 100/aislop 98 and Expo 20/21, without a new scan or waiver.
EXT-09 alone is complete; Phase 2/full Phase 3 acceptance and counters are unchanged.

## Current ordinary iPhone package — 28 October 2026

One fresh ordinary iPhone Release build passes compilation, signing and exact
before/after input checks. All 768 source inputs and 97,617 dependency entries
remain unchanged during the build. Independent product review verifies the
153-file app, ordinary entry, native signing components and existing signing
identity. The packaged notice manifest matches current source; JavaScript bundle
bytes match the previous product. Only the root package manifest, lockfile and
iOS notice manifest differ from that product's source inputs. No prebuild or Pod
refresh is needed.

This is packaging evidence. The phone is not contacted, and the existing runtime
test packet is not rebound or executed. Ordinary iPhone signing journeys still
await the existing readiness reply and fresh runtime admission. Source revocation
during pending external signing, remaining routes, protected-device checks and
final quality remain open. Latest complete quality remains Doctor 100/aislop 98
and Expo 20/21; no new scan or waiver occurs. EXT-09 alone is complete. Phase 2
and full Phase 3 acceptance and counters remain unchanged.

## Android native signing interoperability — 28 October 2026

The Android native NIP-46 client completes one emulator run against pinned nak
v0.21.2 through production DNS, TLS and WSS at `wss://nos.lol`. All six requests
and responses correlate: one connection, two public-key lookups, two relay-refresh
requests and one signing request. The returned event exactly matches the fixed
test input; native and independent verification confirm its ID and signature.
Native execution takes 6.548 seconds within its original 30-second limit. The test
uses disposable credentials and does not invoke note publication.

The host observer now distinguishes an absent result from read or parse failure
using the remote shell exit status. Nineteen exact pending responses precede the
complete result. Earlier failed attempts remain unchanged; the preceding run's
native completion remains unknown. Independent review verifies the new APK, certificate, 150 current
production inputs and retired build key before execution. Cleanup removes only
the temporary app and private config, restores all 253 package records and releases
the emulator lease. The complete run takes 11.349 seconds.

Separately, ordinary Android build 17 compiles and passes independent packaging
review. Its 721 recorded inputs match current source; only the notice manifest
asset differs from build 16. The fresh upload-review Home test stops at its first
UI capture, which exits 137 before any connection or upload action is dispatched.
Its failed result remains recorded. Exact cleanup restores all package records
and selected settings. This establishes neither a product defect nor cancellation
behavior.

The native run establishes client, JNI and transport interoperability. Ordinary
app approval, account storage, routes, iPhone, protected-device and broader fault
coverage remain open. The latest complete quality scan remains Doctor 100/aislop
98 with four advisory IDs; no new scan or waiver occurs. iPhone execution awaits
the existing screen-readiness reply. EXT-09 alone is complete; Phase 2 and full
Phase 3 acceptance and counters remain unchanged.

## Tooling update and interrupted cancellation test — 28 October 2026

The planned ordinary Android upload-review Home/foreground test stops during its
connection setup. The observer first assumes a clickable chooser ancestor, then
expects Settings where native confirmation and the ordinary shell actually appear.
The fresh signer account is visibly selected within the original 120-second budget,
but a redundant observation hits that deadline. The run remains failed; no upload,
Home transition, native signing approval or signature occurs. Provider records show
one public-key lookup and return. All 110 dispatched commands complete with exit
zero. Exact cleanup restores all 253 package records and selected settings, removes
the two owned apps and scratch XML, and releases the actual emulator lease. Neither
physical phone is contacted. The cancellation scenario remains unrun.

A separately reviewed [Expo CLI Zod update](dependency-patches.md#expo-cli-zod-update--28-october-2026)
removes the remaining Zod 3 tooling dependency. Offline and actual installed
consumer checks, TypeScript, existing dependency regressions, both production
exports and notice validation pass. The original probe failures remain preserved;
its corrected distinct-consumer assertion passes without changing test cases.
This tooling change adds no signing-route acceptance or new native package.
iPhone execution still awaits the existing screen-readiness reply. EXT-09 alone
is complete; Phase 2/full Phase 3 acceptance and all counters remain unchanged.

## External-result authority loss — 28 October 2026

Android now preserves uncertainty when native authority is lost after a possible
signing send or a confirmed external result. Four checks cover the final operation
gate, NIP-46 Resume, native result delivery and handoff-ticket validity. Cancelled,
expired or replaced authority is distinct from a live wrong-ID or duplicate-result
failure. Pre-send failures remain certain, and explicit peer refusal and invalid
events still fail. Local paths and the result-completion mapper preserve actionable
readback, recovery and storage errors; final remote-operation guard failures after
possible dispatch remain uncertain. No deadline, approval policy, transport or
exported API changes.

The focused Android regressions pass 70 cases and 189 checks. They compile the
actual operation and ticket and extract the owning completion/controller bodies,
with explicit host ports. The existing iOS delivery guard passes 95 actual-method
checks, including delayed panel dismissal and replacement work. Disabling only
that final guard in a staged negative control produces four expected failures;
iOS production code is unchanged. Neither result proves OS lifecycle, protected
storage, ordinary-app integration or physical-device acceptance.

TypeScript, 432 security tests plus 13 preflight tests, 106 Outbox tests and 73
upload tests pass. Android prebuild and production export pass. A fresh ordinary
Android package compiles and passes independent source, manifest and signature
review. Its 721 recorded inputs match the reviewed source; only compiled code
changes from the prior package. No device is contacted. The full quality gate
remains open at Doctor 100/aislop 97, five advisory IDs and Expo 20/21; no findings
are suppressed. iPhone owner readiness, remaining
runtime coverage and Phase 2/full Phase 3 acceptance stay open. EXT-09 alone is
complete; acceptance counters are unchanged.

## Android external-signer upload and current iPhone packaging — 28 October 2026

One ordinary Android emulator journey completes the reviewed 71-byte PNG upload
through a disposable NIP-55 signer. The file preview, exact native authorization,
returned signature, explicit Resume, server confirmation and SDK/status receipt
agree. The provider records one public-key lookup and one signature. Connection
finishes in 70.480 seconds; the upload finishes in 51.858 seconds within its
original 60-second grant. Cleanup restores all 253 package records and selected
settings, with owned processes and UIAutomation absent and the lease released.

The first run remains failed: its test expected the HTML hash instead of the
aggregate napplet version. Native Reject produces cancellation before signing.
A separately reviewed fresh run derives the correct version from packaged bytes.
Its original complete-verifier result also remains failed because the returned
account subdomain is outside the test's three fixed readback hosts. A separate
literal-host supplement preserves the raw receipt and every other check. One
auth-free normal-TLS readback follows one redirect and returns the exact 71-byte
PNG with its expected hash in 1.689 seconds. This confirms retrieval; fresh server
storage and authorization enforcement remain unproved. Neither failure changes
production policy or retries an upload within the same run.

The current ordinary iPhone app compiles and passes host signature and entitlement
checks. Its original wrapper receipt stays false because the build adds 12 dSYM
source-remapping files. Independent product verification reproduces each addition,
accounts for all 97,646 dependency entries and preserves the failed whole-tree
comparison. The unchanged app seal and freshly built test observer pass review.
This is packaging evidence; physical execution still awaits the existing owner
screen-readiness reply and fresh runtime admission.

No product code or acceptance counter changes. This Android test-provider route
does not establish Amber, NIP-46/iPhone upload, controlled-receiver or protected-device
acceptance. The latest quality result remains Doctor 100/aislop 97 and Expo 20/21;
no new scan or waiver is claimed. EXT-09 alone remains complete. Phase 2 and full
Phase 3 acceptance stay open; neither physical phone is contacted.

## Ordinary Android NIP-55 Outbox — 28 October 2026

One ordinary Android emulator journey passes through a disposable NIP-55 test
provider with a fresh key held only in native memory. The connection, selected
account, exact shell/native event reviews and explicit Resume steps complete.
Three correlated Intent requests and returns produce exactly two signatures.
Approval Lab publishes a kind-10002 relay list naming only nos.lol; Feed Lab's
genuine SDK Outbox request signs and publishes the reviewed kind-1 note, with the
existing signed relay list presented separately for redistribution.

Native receipts show the primary event Accepted and the existing list Accepted
with a duplicate message. Independent canonical-hash and signature checks match
the reviewed fields, provider results and SDK event. One normal-TLS readback from
nos.lol returns both exact signed events. The full SDK response is preserved;
a reviewed host-only adapter projects its payload for the unchanged verifier.
The request UUID was not independently captured before the response.

Independent review verifies all 310 successful device command pairs and the
original deadlines: connection 83.975 seconds, seed 106.490 seconds and primary
110.226 seconds, each below 120 seconds. Cleanup restores all 253 package/path/
UID/version records and original selected settings in 998.602 seconds, removes
both owned apps and scratch data, and releases the exclusive test lease. Neither
physical phone is contacted. Preparation assumptions and their corrections remain
recorded; the earlier failed observer run is unchanged.

The tested ordinary build includes the current qs tooling metadata. Its 721
source/archive inputs and signature verify; only the notice manifest differs from
the preceding APK. Product code, capture protection and dependency policy are
unchanged. The latest full scan remains Doctor 100/100 and aislop 97/100, with
five advisory IDs open; the required Expo check remains 20/21.

This adds scoped EXT-05/06/07/08 evidence. The provider uses the production native
crypto core, so it does not establish Amber or independent-signer interoperability.
NIP-46 Outbox, iPhone, Blossom, lifecycle/fault, accessibility and protected-device
coverage remain open. Duplicate acceptance and stored readback do not establish
fresh ancillary storage, controlled-receiver consumption or global send counts.
EXT-09 alone remains complete; Phase 2 and full Phase 3 acceptance stay open.

## Upload authorization status and cancellation — 28 October 2026

An ordinary Android emulator check exposed two misleading upload messages: the
shell said it was waiting for the server while native authorization was pending,
then called a rejected request an upload failure. The service now distinguishes
pending authorization from transfer. Transfer starts only after the exact signed
event is verified, with authority checked again after notifying listeners.

A native authorization denial becomes user cancellation only when native dispatch
history is exactly false. Unknown, malformed or failed history checks retain an
uncertain outcome; an earlier terminal result is preserved. The shell now shows
“Waiting for authorization” during review and “Upload stopped: user cancelled”
after native Reject. No protocol fields or native approval policy change.

Five focused regression cases reproduce four failures before the repair. All 35
owning service tests and all 73 upload tests pass afterward, with no skips.
TypeScript and both production JavaScript exports pass. A fresh ordinary Android
package contains the correction; its native libraries, DEX and manifest are
unchanged. Independent review verifies the code and exact packaged source.

A second emulator run verifies both corrected messages, one exact kind-24242
PNG authorization review and one native Reject after 17.907 seconds. The SDK
result and subsequent status read agree on cancellation without a completion
descriptor. All 88 commands complete successfully; cleanup restores all 253
package records and original selected settings within 329.209 seconds. Independent
security review finds no material defect. Neither physical phone is contacted.

This covers local rejection and presentation, not successful upload, external
signing, independently measured zero network traffic or protected-device security.
iPhone readiness, broader routes and full quality remain open. EXT-09 alone is
complete; Phase 2 and full Phase 3 acceptance remain open.

## Android large-text signing review — 28 October 2026

The current ordinary Android package passes a bounded emulator check with system
font scale 2.0. Public account keys, the selected local signing method and both
external-signer connection buttons remain readable and reachable by scrolling.
The shell review and native review retain visible action buttons while their
contents scroll. The native requester, method, destinations and complete event
remain readable; its canonical event ID matches the shell review exactly.

One Approval Lab note reaches native review and is rejected there. The visible
SDK result reports approval denied, one request created and none pending. No
native approval is dispatched. This is observed UI and denial evidence, not an
independent network measurement. Exact cleanup restores all 253 package records,
font scale 1.0 and the original accessibility settings, then removes only the
temporary app and scratch. Independent security review finds no material defect.

This check covers one local-note route and accessibility-node/layout evidence.
TalkBack speech/focus, other signing-method states, iOS accessibility and full
protected-device acceptance remain open. No product code, quality report or
acceptance counter changes; Phase 2 and full Phase 3 acceptance remain open.

## Ordinary Android Outbox preparation — 28 October 2026

The current ordinary Android Release package compiles after the dependency updates.
Independent review binds all 721 current and archived inputs, the signed ARM64 APK,
outgoing-only components and 102 packaged notice assets. A separate test provider
uses one fresh native key held only in memory, with no private-key input or export.
Neither package is a new owner-phone installation or a runtime acceptance result.

One emulator run verifies the public Settings image, exact provider package and
certificate, public-key Activity result, native Resume and matching candidate. It
reaches the final native connection consent, then the observer's 180-second
connection-phase deadline stops its next UI dump. The final commit tap is not
sent. The provider records only one lookup and its return, with zero signatures;
neither the relay-list seed nor the Outbox primary is submitted. The original
runtime receipt remains failed. This is no Outbox, Amber or independent-signer pass.

The incomplete UI dump initially defers cleanup. A separate supported accessibility
service dump and fresh process checks establish that operation has stopped. Exact
adjacent APK and package metadata checks then permit removal of only the two
temporary packages and their XML scratch; all 253 baseline records are restored.
The disposable build-signing key is also removed. Independent review verifies this
separate cleanup without changing the original failed receipt.

The readiness helper's activity-instrumentation query returns an unsupported-command
message despite exit zero. Its derived absence claim is invalid and is explicitly
withdrawn; future use must reject unsupported or incomplete status output. The
complete supported accessibility dump is separate evidence for the one pending UI
operation. This checkpoint does not repair or retry the observer, change product
protection, or reopen the earlier capture diagnostic.

No product code or acceptance counter changes. The iPhone still awaits owner screen
readiness. Ordinary Outbox and Blossom routes, protected-device checks, current
interoperability gaps and final quality remain open. EXT-09 alone remains complete;
Phase 2 and full Phase 3 acceptance stay open.

## Native client interoperability with nak — 27 October 2026

The unchanged Swift NIP-46 client, protocol, crypto and production WSS transport
complete one host run against the official [nak v0.21.2 release](https://github.com/fiatjaf/nak/releases/tag/v0.21.2).
The tag resolves to `633f25c2ba2080dfd56fccf57068e2581abee074`; the macOS ARM64
no-database binary matches its official SHA-256
`92dfae234b3ae13281c597561144ff30c636a506b696c83dc6ade6f88ffd5a30`.
Twenty production Swift files and six C sources compile for macOS without test
transport doubles, a fixture trust anchor or a network-proof build flag.

Fresh disposable keys use normal public DNS and TLS through `wss://nos.lol`.
The native client and the signer's captured request records agree on six RPCs:
one `connect`, two `get_public_key`, two `switch_relays` and one `sign_event`.
All six IDs correlate without errors. The exact returned event, ordered tags,
canonical hash and Schnorr signature pass native and independent verification.
The runner invokes no user-event publisher and enables no relay AUTH flags.

Independent review verifies current source pins and cleanup of both processes
and the private control socket. Raw signer output stays in memory because it
contains credentials; only public results and counts are retained. Nak's global
initialization reads the machine identity before the disposable key overrides its
default, so this is not a claim that the process handles only one key.

This adds actual interoperability with a separately maintained signer. It remains
a macOS host test of the Swift components: app review, protected storage, handoff,
Android compatibility, ordinary Outbox/Blossom routes and full EXT-04/08 acceptance
are unproved by this run. Nak uses the same key for its signer and user roles;
distinct-role coverage remains in the separate controlled-peer tests.

## Android interoperability preparation — 28 October 2026

A disposable Android package compiles 33 unchanged production Java sources and
the actual JNI crypto with the default native DNS/TLS transport. All 13 build
commands pass. It supplies one bounded test operation, not ordinary app review,
vault or workspace authority. No application source changes are needed for this
composition.

The Android runtime result remains failed. Two attempts stop at installer-output
assertions before starting a signer. A third starts nak but stops at the private
input metadata check before launching the Activity. Inspection of the pinned ADB
binary identifies double quoting and missing remote exit status in `exec-in`.
A separate public-input probe verifies `shell_v2` stdin and both success and
deliberate failure status; the corrected delivery passes its private mode/size
check in the fourth attempt.

That fourth attempt launches the Activity, then its first result read fails JSON
decoding. ADB `exec-out` also returns transport completion without the remote
command's status. The raw read was not retained, so its precise contents, native
completion and signer request/signature counts remain unknown. This is not an
Android interoperability pass or evidence of a product defect. All original
failed receipts are preserved; no further runtime retry follows this checkpoint.

Independent review and fresh cleanup checks restore all 253 emulator package,
path, UID and version records after each attempt. The exact temporary app, owned
host processes, private signer config/socket and disposable build key are absent.
The physical Android remains released, and the iPhone retry still awaits owner
screen readiness. EXT-09 alone remains complete; Phase 2 and the remaining Phase 3
acceptance gates stay open.

## One account, explicit method

An account is identified by its Nostr public key. Connecting a signer for an
existing key adds a method to that account and preserves its napplet data. A method
change flushes the workspace, asks for native confirmation, advances the vault
revision and restarts the same account's sessions. Old signing replies cannot
authorize publication after that change.

The shared method types are `local`, `nip46` and Android-only `nip55`. Android
native NIP-55 persistence and Activity integration are implemented; production
runtime verification remains partial. A selected method is explicit; there is no fallback to another key or signer. Disconnecting the selected external
method leaves no method selected. The account and saved data remain available.
Saved connection metadata does not imply that the signer is online.

A local key can remain when a remote method is selected. Settings states that fact.
Removing the local key is a separate native confirmation and OS-authenticated
action; it retains the account, remote connections and napplet data. A whole
inactive-account deletion removes all its saved methods and requires the existing
authenticated deletion flow. Neither operation deletes legacy key records from the
pre-release JavaScript vault.

## Native connection contract

The selected NIP-46 profile uses a `bunker:` link entered in native UI. The transport
client key, signer peer key and returned user key are separate values. Native code
validates the user key as a secp256k1 x-only point, authenticates the peer's outer
event, then verifies and decrypts NIP-44 content. A connection returns only an
opaque expiring candidate and the public user key to JavaScript. Connection links,
handshake secrets and transport keys never enter React state or guest messages.

Native confirmation shows the account, signer peer, signer relays and whether a
local key remains. Connecting and selecting the signer is one explicit durable
mutation. A second remote method for the same account requires disconnecting the
first; it cannot silently replace the saved connection.

Local, NIP-46 and Android signer-app methods are stored in the authenticated native
vault record. The Android HGV4 record includes the installed package and full
signing-certificate set; older HGV3 records remain readable without a passive
rewrite. Public metadata
is bound to its vault ID and revision. Every mutation must distinguish cancellation
before a durable effect from uncertain acknowledgement after a write. The latter
closes the cached account state and requires recovery; it cannot resume old
workspace authority.

## Request and transport limits

Signer relays are separate from event publication relays. At most three unique
WSS destinations pass the existing public DNS and TLS policy. Relay changes must
pass the same policy before storage or connection. Requests have bounded IDs,
deadlines and aggregate traffic limits across all connections. The sign path stops
when the peer reports changed relays. Settings has an explicit relay-refresh flow. It keeps the client key, signer peer,
account and selected method, verifies the proposed destinations, then requires
workspace flush and native confirmation before saving them. The owning native
checks cover both platforms; the ordinary Android UI trace also verifies the new
relay list after a cold restart.

Every signing request retains its native host source, frozen event, account and
vault revision. Native review is required for each event. After dispatch, native
code checks every returned event field, canonical ID and Schnorr signature before
returning the public result. The shared verifier checks it again before publication.
Remote signature success and relay publication success are separate outcomes.

NIP-44 plaintext is limited to 4,202,496 bytes; its maximum encoded payload is
6,990,604 bytes. RPC escaping and relay framing need separate bounds from the
2 MiB canonical event limit. Unsupported or oversized requests fail before send.
There is no automatic retry when a signing request may have reached the peer.
A new attempt requires new review.

External authentication uses a separate one-use native continuation. Read-only
pending queries preserve the admitted request while native handoff is pausing or
asking for origin consent; execution remains denied. Ordinary Android and iPhone
note-publication journeys have scoped evidence for signing-time browser return,
native Resume and an independently verified exact-event signature against a
controlled peer. The dated publication checkpoints below retain their request and
relay counts; full route and real-signer interoperability acceptance remain open.

On Android, native consent precedes transfer of the authorization URL to the
selected installed browser. On iOS, the continuation uses the native Safari view.
The original operation retains its deadline; no challenged request is resent.
These journeys do not establish website login or authentication by a real signer.

The continuation requires native Resume and a verified final response to the
original request before restoring that request's authority. Browser navigation
is not authentication evidence. The iOS path keeps a visible native Safari view
inside the active app; genuine backgrounding or an external browser hop cancels.
Android requires an exact operation ticket for the intentional handoff. Lock,
account or method changes, cancellation and expired deadlines still revoke work.
These continuations are not yet accepted.

## Android signer-app profile

The selected NIP-55 profile uses one explicit Activity request at a time. Native
code chooses an installed signer; JavaScript cannot supply an arbitrary package.
The account stores the selected package and its complete current signing-certificate
SHA-256 set. A changed certificate set requires explicit reconnection, including
a legitimate signing-key rotation. A returned package string does not establish
caller identity. Each result must match the outstanding request, current account
and exact approved event before its signature can be used.

The selected profile follows [NIP-55 at the pinned revision](https://github.com/nostr-protocol/nips/blob/a79e21d90fce5465b50ef385dd368bba99ec4a0b/55.md).
It also accepts the redundant Activity-result fields emitted by
[Amber 6.6.6](https://github.com/greenart7c3/Amber/blob/fc2e0de5ddcc6f25ac1ae08f43a0073440a70355/app/src/main/java/com/greenart7c3/nostrsigner/service/IntentUtils.kt#L943).
For public-key lookup, optional `signature` and `event` fields must each be a
String exactly equal to the validated `result` public key. For signing, optional
`signature` must equal `result` and the verified event signature. These fields
cannot substitute for required results. Conflicting, null, non-String and unknown
extras are rejected. Request, package, certificate, account, event and native
signature checks remain required. This compatibility extension does not add
ContentProvider or callback support.

The shared adapter and Settings controls are implemented and covered by adversarial
bridge-double tests, including same-account data continuity and no fallback.
The native picker, one-request Activity controller and encrypted vault are wired to
Expo. They bind the actual Activity, native owner, installed certificate set,
request ID, original deadline and frozen event. The intentional app hop uses the
same bounded continuation and native Resume gate as browser authorization. Native
code rechecks the installed certificate set before restoring the exact source.
Results are consumed once; cancellation targets captured operations and source
stages so delayed cleanup cannot cancel a newer request.

Completed public source captures remain revocable after signing, including local
signing without a handoff. Native protected actions revoke them independently of
JavaScript. A bounded collection preserves concurrent uploads; admitting a new
signing request does not cancel an earlier approved transfer. Full production runtime
verification and Amber interoperability remain open.
iOS reports this method as unsupported. Batch requests, ContentProvider signing,
web callbacks and incoming signer-provider endpoints are outside this profile.

## Validation status

Shared tests cover exact metadata, forged/replayed candidate objects, same-key
linking, saved-data continuity, cancellation during both source and destination
workspace I/O, post-write uncertainty, late signatures, and no fallback. A fatal
preparation error revokes the account session even after cancellation; a late error
cannot overwrite a newer healthy session. The combined storage and native-vault bridge-double suite passes 148 tests. The native NIP-44 primitive has
separate vector, sanitizer and interoperability evidence. These checks do not
substitute for an installed native connection and controlled publication trace.

Owning NIP-46 proofs use the actual native protocol, crypto and TLS transport
against an independent controlled peer. The Android refresh checkpoint passes
92 native assertions across 24 native review gestures and 142 independent checks.
The iOS refresh checkpoint passes 17 cases, 103 native assertions and 29 independent
checks. Its
full-read validation rejects malformed trailing frames before delivering an early
valid reply. Both receipts seal source/product inputs and verify fixture cleanup.

These proofs use explicit test transport/storage ports where documented. They do
not prove production Expo source admission, all signing routes, browser handoff,
public relay publication, protected hardware or real-signer interoperability.
Ordinary Outbox plan/approval regressions pass 106 Android and 113 iOS assertions,
including rejection of Unicode normalization that changes the approved bytes;
these are native core checks, not publication traces. Ordinary iOS HTTPS/WSS
Simulator regressions pass 10 and 9 checks, and the production iOS Pod compiles.

A separate ordinary Android Expo build uses the production entry and native
network policy against a disposable peer on configured public WSS relays. Its
18 artifact checks cover connection entry cancellation, exact native confirmation,
cold account/method persistence, unchanged and changed relay refresh, and offline
disconnect followed by a cold restart with no method selected. The build seals
707 source inputs. The peer processed one connect, four public-key queries and
three relay queries; it produced no user-event signature. The temporary app was
removed and the original package inventory restored. The secure connection panel
produced a black screenshot; its confirmation evidence is native hierarchy and
input, not readable visual capture. This trace does not cover
authentication handoff, user-event signing, publication or physical protection.

An earlier iOS handoff checkpoint passes 39 owning cases with 375 assertions and
6 independent checks, plus 20 controlled-wire cases with 136 assertions and
35 independent checks. The native core passes 15 cases with 62 assertions and
6 independent checks. The production Pod compiles from 380 sealed source inputs.
These results retain their documented storage and consent doubles; they do not
close the ordinary Safari Resume or production Expo journey.

Android native validator checks pass 53 assertions on API 36 and seven independent
signature checks. They cover exact event bytes, malformed result types and IDs,
wrong keys, URI encoding, file descriptors and the measured complete-Intent cap
of 512 KiB. This cap does not change the local/NIP-46 canonical event limit.
The later controller proof below separately exercises installed-package lookup
and Activity correlation.

A disposable Android NIP-55 provider and caller pass seven actual Activity-result
cases with 60 independent checks and three verified signatures. Encoded Unicode,
percent, plus, hash and question-mark content round-trip exactly. Deliberately
changed content and wrong IDs remain identifiable rejection inputs; refusal,
non-OK failure and null results remain distinct. This checks the fixture's raw
results, not production client acceptance, durable selection or Amber. Both
temporary apps were removed and the original package inventory was restored.

The earlier internal controller checkpoint passes five API 36 cases with 53 native assertions and
14 independent checks, from 242 unchanged source inputs. Actual PackageManager
discovery, native picker input and a changed installed certificate are exercised.
Accepted results use explicit native owner/launch doubles. A real provider hop
returns through Android but grants no public result after background cancellation.
The size case starts with a 300,708-byte request and a valid exact signed response
whose Intent is 601,152 bytes, above the 524,288-byte cap; the controller rejects it.
Both temporary apps were removed and the original 253-package inventory restored.
This proof does not cover production Expo, durable signer selection, source
resumption, publication or Amber. Android prebuild and targeted signer-library
Kotlin/Java compilation and manifest merge also pass. At that checkpoint the
manifest adds only the outgoing `nostrsigner` discovery query. The current
integration also declares browser/HTTPS discovery queries; it exports no Activity
or provider.

A subsequent Android storage run passes 367 native assertions, eight fresh-state
checks and seven independent exact-event checks. Its 263 sealed inputs cover
bytes-identical passive HGV3 open, HGV4 cold reopen preserving both credentials and
account metadata, candidate purpose/replay/expiry, no fallback and uncertain
acknowledgement after a committed write. The disposable package was removed and
the original inventory restored. This is native storage evidence, separate from
Expo consent and signer-app handoff.

The integrated Android module compiles through Kotlin, Java and manifest merge
with 125 unchanged source inputs. An ordinary-entry release APK also builds from
721 sealed inputs. Builds alone establish neither runtime acceptance nor security
parity with another signer.

The integrated Android owning proof passes 84 assertions from 326 unchanged
inputs. It covers stale operation cleanup, sticky screen-lock revocation, fresh
Resume checks, completed-source capacity and concurrent sources. Six authenticated
NIP-46 cases exercise the actual client: the valid result restores its source;
changed events, refusal, missing results, wrong public keys and changed relay lists
restore none. Native owner/browser/consent and loopback trust ports are explicit
test doubles. This does not establish ordinary Expo/browser acceptance. A separate
host-JVM proof passes 20 fixture-stage cancellation assertions using the sealed
production classes. Three failed owning attempts retain their exact source and
failure records; test-setup corrections do not turn those attempts into passes.

An ordinary production Android signer-app trace completes 64 UI assertions before
stopping at a local-copy text visibility assertion. It observes installed-package
and certificate selection, two independent `get_public_key` Activity results,
native Resume, candidate cancellation, and native connection commit for the
unchanged selected identity. The UI lists local and Android methods, with Android
selected. The fixture log has two distinct public-key lookups and no signing
requests. Post-connect account inventory, cold restart, explicit method changes
and offline disconnect were not performed. The full scenario remains failed;
this visibility failure establishes no key loss or native storage defect. Its
721 current app inputs and 212 pinned provider inputs are sealed separately. Both
disposable apps are removed and the original 253-package inventory restored.
Secure screenshots can be black; public hierarchy/input evidence does not provide
readable visual acceptance. An earlier 21-assertion attempt stopped before the
picker on an observer scroll error. Both attempts and their exact observers are
retained; no further observer retry was made in this batch.

The single ordinary Android browser-preparation attempt reaches native HTTPS
origin consent and verifies the selected installed Chrome package, then fails at
browser foreground verification after two checks. The peer receives one challenged
connect and no final completion. Browser return, native Resume and candidate
delivery are unperformed; no product cause is established. All 721 app inputs and
seven fixture/observer/artifact inputs remain sealed, and cleanup restores the
253-package inventory. No retry was made. Token-bearing URL transfer, website
login, event signing and publication remain outside this attempt's evidence.

The [central native driver](../tests/native/signer-core/README.md) composes `core`,
`migration`, `nip46` and Android `nip55`. The `all` selection runs the applicable
fixture suites; it does not represent full Phase 3 acceptance. An explicit emulator
or Simulator and, for NIP-55, a reviewed provider build are required. Twelve host
regressions verify dispatch and failure handling using fake native receipts. The
combined native suites have not been rerun at this integration checkpoint; owning
receipts retain their individual scope.
Android signer-app implementation follows the remote-signing foundation; incoming
signer-provider endpoints remain future scope. Amber is a source and interoperability reference,
not evidence of equivalent security.


## Resumed browser and account checks — 15 October 2026

The Android secret-entry panels close a prepared native resource if coroutine
cancellation discards it before delivery. The repair uses the resolved coroutines
1.8.1 API. Its durable host regression passes 36 assertions and two removed-cleanup
negative controls with real coroutine dispatch and close-counter resources. It
does not prove Android dialog or JNI teardown. Ordinary build04 compiles from 721
sealed inputs; failed build03 remains recorded separately as an API mismatch.

Account07 passes 150 ordinary account checks, including picker/candidate
cancellation, two provider returns/native Resume, same-account connection, cold
restoration, explicit method changes, offline disconnect with persistent NO_METHOD,
and explicit local recovery/cold restoration. It proves UI/public account metadata.
The provider receives two public-key requests and no signing request.

State Lab02 separately passes 215 checks. One public string written through the
bundled napplet's actual SDK remains readable after signer connection, explicit
local/NIP-55 changes, offline disconnect, cold NO_METHOD before recovery, and final
cold local recovery. The native npub stays unchanged. Each read requires a fresh
request-count increment, terminal status and exact original value; no later read
reseeds it. The provider receives one public-key request and no signing request.
Failed01 remains a failed observer-navigation run. The reviewed optional
`--state-data` mode retains this journey while preserving the default account
cancellation checks. Integration guards are separate from the original runtime.
Other storage namespaces, NIP-46 data parity, usable-key signing, Amber and physical
protection remain open.

Independent review found and repaired an iOS response-ordering defect. A changed
relay list in signing preflight is now rejected before it can authenticate the
handoff or release the paused source. The durable actual-client/crypto host test
passes 24 assertions; the old source reproduces four forbidden-release failures.
Early and late Resume, unchanged-list signing, explicit refresh and handshake
proposals are covered. Exchange, pause and transport support remain test doubles.

A fresh isolated iOS build from 261 sealed inputs includes the repaired client.
One actual native review, Safari Close and Resume journey returns one independently
verified signature for the exact canonical event and account captured before
approval. Its peer records six distinct requests and six raw incoming EVENT frames:
one connect, two public-key queries, two relay queries and one signing request.
There is one authentication completion, no observed resend and no pending
authentication in this run.
Real matched-controller delegate and dismissal callbacks are retained. The initial
offline verifier failed because the signature library added a non-JSON cache
symbol to its comparison object; a separately reviewed clone correction verifies
the same retained evidence. The original failed receipt is preserved; no second
live run occurred. The earlier minimal center-input check also passes, without
establishing the cause of prior failed Close inputs. This evidence uses a controlled
loopback relay, ephemeral key and isolated native source. Ordinary Expo/vault,
public-relay, publication and physical acceptance remain separate.

Android browser04 reaches Chrome FirstRunActivity and returns, but its peer rejects
a mismatched connection token before ACK. Browser05 stops before submission at
152 masked characters for a 171-character link, with zero peer requests. A reviewed
paced-entry observer retains strict length/token checks and passes 45 host checks.
Browser06 remains unexecuted. The later approved browser07 check below verifies
ordinary preparation/Resume; the earlier failures remain historical.
Earlier failed synthetic input probes remain stopped and preserved.

Android runs restore the exact 253-package inventory. The iOS runs restore all
56 original app entries. Owned test apps are removed; independent review verifies
source/product/observer seals and cleanup. Private input and peer credentials are
excluded from public receipts. Protected black captures are not readable UI proof.

The recorded full-quality baseline is Doctor 100/100 and aislop 98/100, with all
five engines, matching supported-file coverage and the existing node-forge/braces
advisories. Each changed source snapshot requires its own complete report. The
normal 100/100 gate remains open; no finding or file is suppressed. Phase 2 and
Phase 3 acceptance remain open.

The next SDK publication slice needs separate peer-signature and receiver counts.
Existing third-party relays can provide scoped observation; the repository has no
configured controlled public WSS receiver with OS-trusted TLS. Do not substitute
the legacy scalar-2 loopback/local-key fixture for ordinary external-signing proof.


## Browser Resume, publication boundary and iPhone automation — 15 October 2026

The owner's destination-specific approval covers the disposable encrypted NIP-46
browser test through `wss://nos.lol` and its fixed example.org authorization URL.
The owner selected existing public relays for the later publication check and
reported that the iPhone's Enable UI Automation setting is on. The earlier pending
questions are resolved; no new relay policy or release approval follows.

Android browser07 passes 11 checks in the ordinary app. Native origin consent
opens the selected installed Chrome package, the peer completes the original
challenged connect request while Chrome is foreground, and Back reaches native
Resume. The public candidate is then cancelled, preserving the original selected
account. Three distinct peer requests, one authentication completion and zero
signatures are recorded. Resume and candidate screenshots are readable; the
origin screenshot is black. Chrome remained on FirstRunActivity, so destination
page loading, website login and token-bearing URL behavior are not proven.
The earlier browser04/05 failures and unexecuted browser06 remain preserved.

The first ordinary SDK publication attempt commits a fresh disposable remote
account and prepares harmless public content, but its screenshot is black at the
required readable-key witness. The attempt stops before SDK submission: zero
requests, zero signatures, zero publication and no receiver readback. The original
FAILED40 receipt remains unchanged. Source review found that connection/import
capture protection targets native dialog windows and found no justified activity
flag change. The black image alone does not establish a flag leak or its cause.
The reviewed script corrections affect only RPC accounting and strict input/error
handling; they do not relax native deadlines or event verification.

The ordinary Android NIP-55 cancellation evidence from checkpoint16 also remains:
one exact reviewed signature, native Resume cancellation, and a subsequent missing
provider failure without local fallback. This is not a successful publication.
Both current Android attempts restore all 253 original package records and retire
their private peer scratch. No retained account or credential is used.

A fresh iPhone app identity is derived from the previously built ordinary product.
The original derivation58 guard failure is preserved. Separate offline61 allows
only the exact Info.plist resource hash change and verifies the existing signed
153-file product; no application rebuild or signing retry occurred. Observer63
builds once with the previously successful destination-artifact orchestration.
Physical65 then installs both fresh IDs and again times out enabling UI automation
before any test body: tests0/error1 and no attachments. Account, Cancel and cold
launch remain unverified. Cleanup restores all 105 app records exactly, removes
both temporary apps and stops their processes. Retire these IDs and Keychain
groups; uninstall is not proof of Keychain purge. No further settings guess or
device retry is justified by the retained evidence.


Approval Lab now includes its current public key in the output's accessible name.
The same identity-update path clears both text and name for unavailable or invalid
values, including a trailing newline after an otherwise valid key. The previous
bundled artifact is retained byte-for-byte as v3 for saved views; both native hosts
admit that exact archive and continue to reject unknown variants. Archived
versions remain excluded from new opens and fixture publication. Browser computed
names and native admission tests do not establish TalkBack or visual acceptance.

Independent Sol 6.1 review19 checks the original results, sealed inputs, portable
products and exact cleanup. It does not establish a production capture defect,
controlled-receiver observation, Amber parity or a formal security audit. Ordinary
iOS protected-store, successful SDK publication and final quality/acceptance stay
open. Phase 2 and Phase 3 acceptance counters are unchanged. No application-source
commit or push occurred.


## Android artifact and signing handoff boundary — 15 October 2026

Both production exports and Android prebuild complete successfully. The ordinary
Android APK then builds from 721 recorded inputs. Every step preserves those
inputs, all 52 native configuration files and the 28 integration pins. Actual APK
runtime assets match the reviewed generated files; signature verification passes.
No device result is inferred from packaging.

The fresh ordinary publication02 run passes connection authorization through
Chrome, the original connect acknowledgment, native Resume and exact remote-account
commitment. Android's exported accessible name contains the full current key. Root
and independent review also read the full key and selected Note type in the fresh
screenshot. The actual SDK submits one request. Native review then binds the exact
canonical event, account, signer peer and three publication destinations before
approval.

The run stops after the signing-origin consent gesture because Chrome foreground
cannot be verified. Its original FAILED72 receipt is preserved. The peer records
six valid distinct requests, one completed connection authorization, one pending
signing authorization and zero signatures. No signing Resume, successful SDK
result, publication or receiver readback is claimed. The observer records only
successful foreground parses; its generic error does not distinguish a parse or
command failure from failure to observe Chrome over the full wait. No native
cause or production repair is established. Follow-up observation is staged without
extending deadlines, adding gestures or weakening the visual/signature checks.
No further device attempt is part of this batch.

Cleanup restores all 253 original packages and independently verifies the proof
app, temporary XML, peer process and private scratch are absent. Source/product
pins remain exact. Reviews19–21 preserve their separate scopes. The full quality
report preceded this final documentation-only reconciliation; its application and
build inputs are unchanged. Its strict red gate, ordinary iPhone automation gap,
successful SDK signing/publication and Phase 2/3 acceptance remain open.

## Android signing Resume and public relay observation — 16 October 2026

Publication04 passes 90 checks in the ordinary Android app using the unchanged
build05. A fresh disposable account passes connection authorization, readable
key/Note review, exact native event/account/peer/destination approval, Chrome
handoff and explicit native signing Resume. The peer returns one verified
signature for the original request. It records six distinct RPC IDs, six valid
deliveries, two authorization completions and no pending authorization.

The SDK reports one published request and no pending work. The screenshot shows
the exact harmless content and full event ID, plus the native aggregate
“Published to 3 of 3 relays.” A text-selection toolbar partially covers the result
row heading; this is not an unobscured image of every label. Separate exact-ID
retrieval verifies the event on nos.lol and bucket.coracle.social. Damus times out
after 20 seconds; that does not prove absence. There is one readback request per
relay, without resending the event. Aggregate acknowledgments, retrieval and
controlled receiver consumption remain distinct evidence.

Publication03 remains FAILED81. It verified one signature and the signing Resume
gesture, then its observer read the guest counter while the native sheet still
said “Signing and publishing…”. Publication may have started; its outcome remains
unknown. The retained tree reproduces the premature read. The reviewed observer
correction waits for the exact busy sheet to settle and the same-account guest to
return within the original total 35-second budget. It preserves native deadlines,
event checks and approval count. Its 44 focused guards and 81 inherited checks are
host evidence. No application-code or capture-protection change was needed.

Both runs restore all 253 original package records. Independent closeout verifies
owned apps, temporary XML, peer processes and private scratch are absent. Exact
source/build seals remain intact. The reused quality baseline is Doctor 100/100
and aislop 98/100 with the two existing advisories; the normal gate remains open.
No source commit or push occurred. Chrome FirstRunActivity does not prove website
login; controlled receivers, remaining routes, ordinary iPhone automation, Amber,
physical protection and Phase 2/3 acceptance remain open. Counters are unchanged.

## Amber compatibility and iPhone startup — 16 October 2026

The Android result parser now accepts Amber's redundant fields only when they
exactly match the required result. The old parser fails the new valid-response
regression; the repaired parser passes 67 native Android assertions and seven
independent event/signature checks. A fresh ordinary Android build includes the
repair. Request, provider, account and signature validation remain unchanged.

In an owner-operated check with Amber 6.6.6, Connect → public-key approval → return
→ Resume shows the expected disposable identity. The owner supplies the complete
candidate public key and reports that Keep current settings preserves the original
account. This is manual public-key interoperability evidence. Timing, persistent
method selection, signing and publication are not established by this check.
Failed installation and screen-read attempts remain recorded separately.

Earlier physical iPhone XCTest attempts reached the test body after separate
initialization failures, but the ordinary app showed identity recovery before the
account journey. The first private diagnostic recorded `AUTHORIZATION_DENIED` in
the vault-opening step without native detail because its error payload was lost at
the Expo bridge. Those failures remain recorded. The corrected diagnostic and
subsequent native repair are described below; neither establishes the cause of the
earlier XCTest service timeouts.

The complete quality report gives React Doctor 100/100 and aislop 98/100, with
the existing node-forge and braces advisories. Expo Doctor passes 20 of 21 checks
and reports eight existing patch recommendations. No new waiver or suppression
was added. Phase 2 acceptance, Phase 3 acceptance and the normal quality gates
remain open. Source was not committed or pushed.

## Native iPhone startup and account check — 16 October 2026

A corrected private diagnostic records inactive application state at native vault
entry, with protected data available and an admitted owner. Core, storage,
initialization and readback were not reached in that run. The canonical native
opener now waits up to five seconds for initial activation, then rechecks the same
native owner and epoch before dispatch. It rejects backgrounding, lost protected
data, cancellation and expiry without entering the core. No JavaScript retry or
production diagnostic instrumentation was added.

The repaired source passes 18 host admission regressions. One ordinary physical
iPhone XCTest then passes the public account/local-method, empty native Import
Cancel and app cold-restart steps. Screenshots show the empty native sheet and the
same full public identity and selected local method afterwards. Three public
snapshots match, and the test records the app stopped before relaunch. The test did
not enter a private key, sign an event or perform a remote-signer handoff.

The original wrapper receipt remains false: the XCTest run was configured to
delete automatic system attachments on success, and its required raw touch samples
are absent.
Retained tap activities and visible transitions support the scoped journey, while
sample-level input verification remains open. Earlier observer failures are
preserved; the final observer recognises one nested accessibility text pair without
loosening interactive control or account assertions. Both temporary app identifiers
are absent, retained app metadata is restored and source/product hashes are
unchanged. App removal does not establish Keychain erasure.

This unblocks ordinary iPhone startup. Browser Resume, remote-account restart and
disconnect, remaining signing/publication routes and full protected-device
acceptance remain open. React Doctor is 100/100; full aislop remains 98/100 with the
existing node-forge and braces advisories. No suppression or new waiver was added.
Phase 2 acceptance remains open and Phase 3 remains in progress.


## Ordinary iPhone remote accounts — 16 October 2026

One ordinary physical iPhone XCTest completes native remote connection, the fixed
example.org Safari handoff, explicit Resume, account confirmation, cold restart,
disconnection and another cold restart with no selected method. Five public
snapshots verify the same remote npub and the original local account remaining
saved and unselected. Independent review verifies 21 actual touch records against
recorded control centres. The controlled signer reports three distinct RPCs, one
authentication completion, no pending authentication and zero signatures.

The original overall receipt remains false. Its parser rejected XCTest's timezone
format; a separate retained-only correction verifies the original artifacts but
still fails the strict lower time bounds. Phone marker timestamps and host action
timestamps differ by about a tenth of a second in the opposite order. The reviewed
source/log sequence and visible results remain evidence; strict cross-clock timing
is unproven. No clock tolerance, rewritten receipt or live retry was used.

Both temporary apps are removed, all 105 retained app metadata records match,
owned processes stop and private peer scratch is removed. Uninstall does not prove
Keychain erasure; those test identities are retired. This case does not establish
signing/publication, same-npub local-plus-remote fallback resistance, SDK data
continuity or full physical security. Phase 2 and Phase 3 acceptance remain open.


## Ordinary iPhone signing and publication — 16 October 2026

One ordinary physical iPhone journey connects a fresh remote account and publishes
one harmless Approval Lab note. Both connection and signing use the reviewed
example.org Safari handoff, actual Close input and explicit native Resume. The
native review captures the exact account, requester, version, actual session UUID,
method, signer peer, private signing relay, public destinations and canonical event
before approval. Independent verification matches that canonical UTF-8 hash to
the returned event ID, verifies its Schnorr signature and matches the SDK result.
The controlled signer records six distinct RPCs, two original-ID authentication
completions and one signature. Twenty-one raw centre-tap records verify the recorded centre taps.

The native aggregate reports publication to three of three relays. A separate
bounded read retrieves the exact signed event from nos.lol. The bucket relay ends
its query without that event, and Damus times out. These observations do not prove
global absence, delivery counts or consumption by a controlled receiver. Phone
marker/Close/Resume ordering and host control elapsed time use their own clock
domains; no synchronized-clock claim or tolerance is introduced. Earlier failed
account timing receipts remain unchanged.

Both temporary apps and owned processes are removed; all 105 retained app metadata
records match. Private signer scratch is removed and the disposable identities are
retired. App removal does not establish Keychain erasure. The corrected observer
binds the actual native UUID session; its earlier unused fixed-number observer
and runtime plan remain preserved. The app's production code was unchanged for
this journey.

The central iOS fixture run separately passes all three applicable native suites.
Android's central run exposes a double handoff-cancellation notification; the small
per-request atomic repair passes all six focused controller modes and independent
review. The original Android aggregate stays failed. Both batches restore their
retained inventories. Full quality still reports Doctor 100/aislop 98 and Expo
20/21. Actual Amber signing, Outbox/Blossom routes, configuration and protected
account checks, accessibility, and Phase 2/3 acceptance remain open.


## Request ownership and upload approval — 16 October 2026

iOS now binds remote preparation and signing callbacks to a native operation ID.
Late work from a cancelled request leaves replacement work alone; queued tasks
also check ownership before installing a handoff or entering signing. The durable
host regression compiles actual session methods and passes 47 checks. A separate
24-check regression verifies that unrelated import cleanup preserves the local
authentication deadline. These checks use explicit host ports and do not prove
physical authentication, signing or provider behavior.

The iOS upload registry now requires file approval before native signing capture
and claim, matching Android. Native signing consent and the later exact-file PUT
permit remain required. The existing upload host suite passes, including 104 iOS
registry checks for pre-approval denial, one-use claims, pause/resume, cancellation,
revocation and expiry. It does not establish a controlled public upload. The first
suite run stopped at sandbox compiler-cache access; its failure is retained
separately from the successful run with normal compiler access.

Independent security review verified the applied changes and canonical results.
Full native/physical routes, accessibility, quality and Phase 2/3 acceptance remain
open; no source commit or push is part of this checkpoint.

## Owner-operated Amber and Android update — 16 October 2026

The owner confirmed the expected disposable Amber account, explicit signer choice
and cold-restored selection. A reported Request 2 event has the expected author,
kind and ordered sequence tags, a valid canonical hash/Schnorr signature, and
exact-ID retrieval from nos.lol. Its content omits the requested final full stop;
the strict exact-text check remains failed. The owner reported three attempts,
so the original one-submit contract remains unmet. Native review contents and
total signing/publication counts are not independently established.

The owner then confirmed disconnect and cold persistence of the same account with
no selected signing method and no pending request. The owner-reported original account suffix remained
listed before restart. The temporary proof app was removed and the exact retained
package inventory restored. At the owner's request, a fresh ordinary Android build
was installed over the retained package with its existing certificate and launched.
No uninstall or data clear occurred; account-data equality was not tested. All
Android operations are complete. This is a development build, not release acceptance.

One ordinary iPhone async configuration Save/read/cold-read also has separately
reviewed evidence. Its original wrapper stays failed at a truncated activity-title
check; raw input and typed SDK results verify the narrower journey. Both temporary
apps were removed. Other configuration operations and protected storage remain open.
