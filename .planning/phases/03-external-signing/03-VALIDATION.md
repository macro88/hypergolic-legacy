---
phase: "03"
slug: external-signing
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-10-14
---

# Phase 3 validation strategy

## Code completion before the final test campaign — 2 November 2026

Source audit finds the selected native/local, NIP-46, Android NIP-55 and route
integrations present. Two uncertainty-reporting defects are corrected with separate
security review and focused host regressions. The remaining known code-freeze
blocker is dependency/quality closeout. Broad device, interoperability and final
acceptance checks are scheduled together after the code-freeze candidate is ready;
no earlier failure or acceptance result is changed. See [the current code checkpoint](03-CODE-COMPLETION.md).

Plan 01 has scoped execution evidence in its summary. Selected product implementations for Plans 02–06 are present with scoped evidence; their acceptance and final quality remain open. Use pinned local tools from `.tools/use-local-tools.sh` and iOS tooling where required. Existing Node tests, native compiler drivers, SDK fixtures and receiver harnesses are the starting point.

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

Build Properties 57.0.22 is applied under the unchanged dependency policy.
The exact closure, frozen install and both notice guards pass independent review.
Copied-project config, typecheck and Android/iOS generation pass. Four compared
native files match; the fresh iOS plist lacks only the architecture flag written
by normal React Native Pods post-install. The live true flag is preserved. This
source-backed stage explanation is not a new Pods execution or binary proof.

Three ordinary Android cancellation test runs stopped before signing. The first stops on
a console retention-mode mismatch; the lane-only correction keeps AX transient
and all actual public-image guards. The second expires without a timely root
visual marker; its image has no verified pixel readability. The third has a
timely public Settings witness and three connection RPCs, then fails the exact
launcher-label guard before any lab tap, signing request, Cancel or late reply.
Original failures and outer uncertainty remain beside independently verified
253-record and owned-resource cleanup. No cancellation acceptance is established.
A disposable, debug-signed test build from the ordinary app entry passes static
packaging review. Its runtime entries and manifest match the prior build; no
runtime or distribution acceptance follows.
Fresh full quality was not rerun. Last measured scores and scoped permissions
retain their limits; iPhone continuity, real-signer/protected-device checks,
controlled receiver and Phase 2 and full Phase 3 acceptance remain open.

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

The route records nine RPCs and two signatures. The first verifier mismatch is
Android's source-defined four-field wire template versus the native unsigned
body including pubkey; the second is the SDK's exact six-key type/id envelope.
The reviewed offline correction retains native/returned pubkey, canonical event,
ID, signature and retained SDK equality checks. The original outbound request ID
was not independently retained. The later readback uses one normal-TLS nos.lol
request without publication, reconnection or retry; raw returned frames are not
retained, so its event equality/signature evidence is source execution rather
than independent frame replay. No global storage or physical guarantee follows.

Two timely public console witnesses are readable; native/guest black images do
not prove readable protected pixels. Original failure and outer uncertainty stay
separate from verified automatic and fresh 253-record inventory, owned app,
scratch, peer/private and joined host/lease cleanup. Earlier failures and unknown
causes remain unchanged. No new signing, UI retry or republication is needed.

A separate Build Properties 57.0.22 candidate passes normal-policy resolution
and frozen installation only in an isolated copy. Live dependencies, product18
and quality recommendations are unchanged; copied-project, native-output and
notice validation remain open. The iPhone owner is unavailable. Full quality,
protected-device/accessibility, real-signer/lifecycle and Phase 2/full Phase 3
acceptance remain open, with counters and source-push ownership unchanged.

## Classifier setup failure and local guard pass — 30 October 2026

Classifier 01 fails during setup before any recorded account, navigation or label
classification. Original automatic cleanup remains false/uncertain: its after
inventory contains only the temporary APK beyond all 253 unchanged baseline
records, and owned scratch remains. Root separately verifies adjacent exact APK
ownership, removes only that APK/scratch and confirms fresh exact inventory,
process/group absence and joined runtime/lease cleanup. Neither the failed command
nor cause is identified, and original receipts/uncertainty remain unchanged.

The separately reviewed successor adds fixed operation/status/observed host exit-
code metadata, retaining command arguments, deadlines, guards and uncertainty.
Actual classifier02 passes the local public Identity-expanded guard without a
launcher tap. Seven navigation events record Connections collapse, Identity
expansion and guard pass; both sole-relay checks and the same public account
verify. This is source-bound transient AX guard evidence, with no retained target
geometry or independent pixel proof. No firstFailedOperation is recorded. That supplies no diagnosis of the
first run's failure. Automatic and fresh exact 253-record/APK/scratch/process/
group/lease cleanup pass without uncertainty.

Both attempts have no peer, guest submit, signature, application publication,
upload, secret entry, screenshot or retained raw XML. This does not rule out app
startup/setup inputs or ordinary application queries. The local guard pass does
not reproduce remote Outbox07 or establish its failing label, geometry or cause.
No full-route retry or matcher/foreground/clock/authority relaxation is cleared.
Checkpoint59's earlier scopes, all acceptance/counters, unavailable iPhone and
quality/Forge permission limits remain unchanged.

## Outbox launcher guard stop — 30 October 2026

The final reviewed Outbox source integrates the previously reviewed guarded
navigation, once-only pre-peer Connections collapse, transient navigation XML and
exact Nav04 predecessor admission. Existing event, visual, native authority, peer
caps, deadlines and cleanup gates remain unchanged. Its actual attempt still fails
before the Approval Lab launcher tap: launcher-label-not-exact. The source emits
that stop when the expected descendant label is not unique or its ownership/
password attributes fail. The current failed subcondition, label text and geometry
were not retained; clipping, wrong identity and product-defect explanations are
not inferred.

The pre-peer collapse succeeds, and the full original public npub is readable in
the timely root/reviewer-viewed Settings image. Remote connection and selected
method are separately observed in public AX. Three connection RPCs, one client and
three accepted encrypted outer replies verify, with zero inner signatures. There
is no launcher-bound/tap/title event, seed console image/marker or guest submission,
native event-signing approval, primary submission, application event publication
or public readback. This does not claim no outer control publication or ordinary
app identity/relay queries.

The failed runtime and conservative outer uncertainty remain original. Automatic
cleanup and separate fresh root checks verify the exact 253 package/path/version/
UID records, adjacent owned APK removal, scratch/process/peer/listener/private
folder/log absence and joined runtime/lease release. Connection-consent evidence
is not event-signing evidence; its existing native PNG is neither copied nor used
as a visual witness here. Only the reviewed public Settings PNG is selected.

A preparation-only fixed label-count proposal passes 11 pure controls. Its
unintegrated patch adds only failure classification and rethrows the unchanged
guard. It retains transient XML and exports no raw text, ID, class or geometry.
A future no-peer/no-launcher-tap Identity-expanded classification still needs
implementation and separate review; local state may not reproduce the remote
post-connect state.

Further work is static guard investigation and a separately reviewed bounded
no-peer diagnostic if needed. No matching tolerance, field widening, clipping
assumption or blind full signing retry follows. Checkpoint58's scoped upload and
local-account navigation passes remain distinct. iPhone owner availability,
quality permissions, Forge's age exception, protected-device, controlled receiver,
ancillary-forwarding and full Phase 2/Phase 3 acceptance remain open; counters and
source-push ownership are unchanged.

## Android remote upload and guarded navigation — 30 October 2026

The per-image upload source candidate is held before dispatch for a stale existing
contract output. A separately preserved metadata-only successor aligns the fresh
output, retaining actions, authority, visual guards, peer caps and deadlines.
Its ordinary Android NIP-46 route passes scoped review. Three public root/reviewer-
viewed images prove the initial account, generated red/green preview and request
context, then filename/MIME/71 bytes/full hash. Both file witnesses have jointly
complete required fields before the single file approval; AX is not substituted
for missing pixels.

The exact kind-24242 event, native details and Schnorr signature verify with six
RPCs and one signature. Native server confirmation occurs 16.685 seconds after the
conservative start before file approval, inside the unchanged 60-second grant;
the guest receives the exact pushed SDK descriptor. Declared host-wall expiry and
120-second private monotonic retirement execute before public release. Precise
monotonic start/end samples are not separately persisted, so this is source/receipt
execution evidence, not independent clock attestation or provider enforcement.
No native/terminal screenshot, fresh status query, provider GET/HEAD/readback,
delete or independent durable-storage proof is obtained.

The next no-peer navigation attempt still fails its strict entry guard after both
sole-relay checks and before any launcher action. Its bounded diagnostic reports
two unknown owned, nonpassword, enabled fields, with no retained IDs, values, hints
or raw AX. Unknown-form value/hint flags are false by construction. The original
failed wrapper and uncertainty remain unchanged beside automatic and fresh root
cleanup; no field identity, historical cause or product defect is inferred.

A separately reviewed close-only section successor freshly binds ordinary Settings
and the selected account, taps the exact expanded Connections header once, then
observes its collapsed state before unchanged strict Developer/launcher guards.
Actual navigation now passes: Approval Lab 4 opens, Settings preserves the full
public npub, and Feed Lab 5 opens. Eleven durable navigation records include the
collapse and two intended/returned launcher taps with fully contained button and
label bounds; two sole-relay checks are separate. No peer, guest submit, signature,
publication, upload, secret input, screenshot or retained raw XML occurs. Ordinary
application identity/relay queries are not ruled out by zero guest submit actions.
Automatic/fresh exact 253-record inventories, adjacent owned APK removal, scratch/
process/group absence and joined runtime/lease cleanup verify for both attempts.

The held full Outbox draft also has a reviewed navigation-local privacy correction:
Settings/section/controller XML stays transient, and the prior private flag is
restored on success or failure. These scoped source and navigation proofs do not
constitute a new Outbox signing run. Its final route source/admission and actual
result remain separate work; all earlier failed outcomes stay unchanged.

Checkpoint57 and product18 remain unchanged. The iPhone owner is unavailable, with
no current phone observation or dispatch. Quality permissions and Forge's age
exception remain unanswered/unapplied. Protected-device, controlled receiver,
ancillary-forwarding and full Phase 2/Phase 3 acceptance remain open; counters and
source-push ownership are unchanged.

## Navigation and upload-preview stops — 30 October 2026

The first no-peer navigation candidate is held before a lease: an undefined
validation function and missing temporary child-deadline clipping need correction.
The separate successor fixes both and passes focused branch/deadline controls.
Its actual run still fails a Settings entry guard before any launcher event/tap,
after both sole-relay checks. No raw field ID/value/hint is retained. There is no
peer, guest submit, signature, upload, image or retained raw XML; automatic/fresh
253-record and joined owned-host/lease cleanup verify. Original false/outer
uncertainty records remain unchanged.

Source and four prior ordinary Settings AX frames prove that the naddr-only guard
rejects two supported idle Developer editors with exact public defaults. A reviewed
strict-form/failure-category proposal keeps unknown, changed, private, foreign and
duplicate forms denied. It does not identify the actual failing field or cause,
change endpoint authority or admit a new navigation/Outbox runtime.

The full upload source candidate is first held for newer predecessor admission.
A separately reviewed successor binds completed navigation cleanup before lease.
Its actual attempt completes three connection RPCs and one public PNG request.
Root views a readable red/green preview, lab, full npub, destination and filename;
MIME and size are clipped below the visible area. Root correctly refuses the
success marker and requests the exact owned stop rather than inferring pixels
from AX. No file or native signing approval, signature or PUT occurs. The upload stays failed.

Automatic and fresh exact retained inventory, adjacent APK ownership, scratch/
process/peer/listener/private-folder absence and joined host/lease cleanup verify.
The zero-signature cleanup branch is exercised; signed-bearer expiry/retirement is
not. No native/terminal image, provider readback, SDK upload completion, storage,
auth enforcement, controlled receiver or physical proof is obtained.

A future witness proposal separates common request bindings from each image's
visible fields. Preview would prove image/context; hash view would prove filename,
MIME, size and exact hash. Both same-request, image-bound markers and their full
union would be required before approval. This is preparation only: future hash
pixels and the full route are unobserved. Existing authority, capture privacy,
peer caps and deadlines remain unchanged; no product privacy defect is claimed.

Checkpoint56 remains immutable. The owner is unavailable at the iPhone, with no
new phone state or dispatch. Quality metadata approvals and Forge's age exception
remain unanswered. Phase 2/full Phase 3 and all acceptance counters remain open.

## Android seed SDK result and public file mapping — 30 October 2026

The next three ordinary Android NIP-46 attempts remain failed as full routes.
The first reaches one SDK seed request but misses the details label before exact
review/signing. Its original automatic cleanup remains false and uncertain;
separate root reconciliation verifies adjacent owned APK removal, all 253 retained
records, scratch/process absence and released ownership. The next reaches exact
native seed review and one independently verified peer signature, then demands a
WebView while the approved sheet is still busy. Its native acceptance, publication
and SDK completion remain unproved; automatic and fresh cleanup verify separately.

The bounded passive transition then succeeds: one exact native-reviewed seed
signature matches the actual same-ID SDK publication result, Created 1 / Active 0
and shell outcome Published to 1 of 1 relays. Six RPCs and one inner signature
are verified. Native/terminal guest images remain black, so these claims use AX
and offline cryptography rather than readable native/terminal pixels. Six outer
reply ACKs are separate from the seed publication result. No independent seed
readback or controlled receiver is claimed.

Opening Feed Lab then stops at resumed-record-ambiguous before a primary draft or
request. Current parser logic proves distinct parsed components, not identical
duplicates alone. Raw competitors, chosen-label counts, cause and final tap outcome
are unproved. Last AX has a 38-pixel launcher and inverted child label. That is a
separate observed geometry defect, not a demonstrated ambiguity cause. Automatic
and fresh 253-record, peer/listener/private-scratch and joined host/lease cleanup
verify; the original false result and outer uncertainty stay unchanged.

The fixed public PNG preapproval mapping independently passes one request and its
own Reject. It retains only allowlisted projections, with zero images/raw host XML,
peer/provider queries, file/signing approvals, signatures or PUTs. Exact 253 cleanup
passes. Preview and hash are observed at different scroll positions; this is not
simultaneous visual proof, capture clearance or a full Blossom upload.

The later route was started before independent mapper review completed, contrary
to its prerequisite. This ordering miss remains explicit. At the public-before-
secret gate, a separate prospective review permits only the same owned child with
zero RPCs/signatures and original clocks; root then views and writes the timely
Settings witness. Later clearance does not retroactively satisfy original order.

A pure launcher-visibility guard and bounded failure-only label/count diagnostic
are proposed, not executed. Full upload preparation is likewise undispatched.
The owner answers the fresh iPhone question unavailable; current phone automation,
method and continuity are unobserved, with no iPhone dispatch. Historical acceptance
is not fresh authorization. Quality metadata approvals and Forge's age exception
remain unanswered and unapplied. Phase 2/full Phase 3, requirement counters and
source push are unchanged.

## Android route preparation and bounded capture results — 30 October 2026

The offline/no-daemon build helper and route-evidence reconciliation are applied.
Signed ordinary Android product18 passes build and static review, with separately
hashed native-map preservation. Existing iPhone route tails and Android NIP55
results remain distinct from missing ordinary Android NIP46 route acceptance.

Three attempts each complete three connection RPCs with zero inner signatures.
The first refuses a black public seed capture. A separate plain Android control
then finds a readable console image where the guest capture is black, after empty
protected-field focus and Cancel. Fresh public-state guards precede each capture;
no protected dialog is captured. The cause and simultaneous rendering state remain
unknown. The next attempt expires before its live seed witness; a later readable
observation supplies no approval. The final attempt stops during navigation before
the seed title, capture or submission. Its exact failing branch and cause remain
unproved. Original failures and separate ownership-cleanup reconciliations remain.

No seed or Outbox event is signed or published in these attempts. Android NIP46
Outbox and Blossom, controlled receiver, ancillary forwarding, physical checks and
full acceptance remain open. Quality, counters and unanswered permissions are unchanged.

## Applied integration, native builds and incomplete quality — 30 October 2026

Font and System UI 57.0.4, six scoped SemVer 7.8.5 overrides and notices are live.
Both notice guards, 16 notice regressions, typecheck, 84 quality regressions and
70 signer contracts pass. The native host suite passes 32 assertions: cancellation
after a valid signed reply but before resuming withholds the result with uncertainty,
without retry or unpause. Its test-only change is applied; transport and pause ports
are controlled. Ordinary unsigned Android and iPhoneOS Release builds pass review.
Builds and packaged attribution checks do not establish device behavior, full
attribution completeness or bundle equivalence with the separate export.

Expo Doctor passes 20 of 21 checks with six patch recommendations remaining.
Local React Doctor completes 497 files with no findings and scoring disabled.
Aislop scores 99; all five engines run, with one high node-forge finding. Neither
the numeric score request nor ten separate audits ran: automatic approval review
blocked their metadata uploads, and scoped permission requests remain pending.
Full quality, iPhone account continuity, restart and disconnect journeys,
protected-device checks, Phase 2 and Phase 3 acceptance stay open; counters and
Forge approval remain unchanged. No waiver or source publication is implied.

## Native regression integration and pending continuations — 30 October 2026

The isolated iOS suite passes 42 tests/474 assertions with both methods attached:
remote failures at preflight, before signing dispatch and after possible dispatch
return no signature or implicit fallback/retry; explicit local selection signs.
The four tested Core/test/harness files are applied; 70 signer contracts, typecheck
and Python AST pass. Controlled ports do not prove physical offline behavior or an app build.

The isolated dependency comparison has 96 pairs: 93 agree; three Babel empty-range
cases differ, supported by pinned upstream tests. Preserve the first closure
failure on extra deprecation metadata and its reviewed frozen-install continuation.
The actual project passes config/typecheck, 84 regressions and both platform exports.
Live dependencies/policies stay unchanged; notice/live integration review remains open.

B-tail r2 enters zero bodies/Reads and preserves all 109 app records. Root misread
an old owner acceptance as fresh after compaction; the retry premise was invalid,
not failure after fresh authorization. Preserve the false and separate correction.
Fresh owner input/current method/Read/C/D/E remain pending; the historical-product
bridge is provenance-only, with dispatch disabled. Phase 2/full Phase 3 stay open;
counters, dated quality and Forge scope stay unchanged.

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

See the [checkpoint scope](../../../docs/external-signing.md#local-marker-readback-and-ui-automation-boundary--30-october-2026).

## iPhone native import and initial State Lab Read — 30 October 2026

Two corrected A1 tests pass independently: actual fresh seven/current-remote/peer/
no-pending checks, masked public-fixture Paste and explicit native import consent,
then eight exact IDs/local selected. One shared/sample Read observes Requests 0
→ Requests 1 and No value saved.; a nine-row Result map is retained. Fourteen taps,
one long press and ten drags match actual input. Exact 109 cleanup and no
uncertainty verify. No guest Write, peer, signature or publication occurs; native
import does write the vault. Nonempty data/method continuity is not accepted.

The mapping-only pass and two earlier skipped/false runs remain separate. Original
A1 never reaches native entry; its COPY is not import proof. Observation/Cancel
maps duplicate same-frame aliases and returns Cancel, then stops at a broad
TextField guard before final seven proof. Corrected A1 freshly admits that state
before import; it does not convert earlier outcomes into passes. Exclude payloads
and derivation logs; retain COPY hashes/length/receipts and public source only.

Checkpoint 50 application/canonical copy and private Notes sync verify. Its prior
Doctor 100/aislop 99 and Expo 20/21 remain dated; full quality and Forge age admission
remain open. Phase 2/full Phase 3 and counters stay open or unchanged; EXT-09 alone
is complete. No source commit/push occurs. See the
[checkpoint scope](../../../docs/external-signing.md#iphone-native-import-and-initial-state-lab-read--30-october-2026).

## iPhone Blossom and Android vault barriers — 30 October 2026

The independently passed ordinary iPhone route verifies exact generated public
PNG/native file review, kind-24242 canonical authorization/Schnorr signature,
six RPCs/one client/one signature and the pushed SDK terminal descriptor. Its 25
native taps match actual input records. The 32.469-second observed file grant is
below 60 seconds; event expiry remains a separate 120 seconds. Seven accounts,
selected remote peer/no pending and exact 109-record ownership cleanup verify.

Keep the original extractor failure and separate offset-only re-extraction pass.
Keep the public readback chain distinct: GET 307/Location not retained, HEAD 200/no body or Location, instrumented
GET 307 with Location, then separately admitted target GET 200/exact 71
bytes/hash. Three GETs and one HEAD occur, without automatic redirects or retry.
Known-byte retrieval does not prove new storage, auth enforcement or a fresh
status query. The original R4/R5 results and their later scoped
reconciliation/tail remain unchanged.

Checkpoint 49 application normalization and private Notes sync are verified. The
Android checked file/directory/parent barriers are applied; 12 live owning cases
and 34 assertions, Android 36 API compilation, prebuild and Android export pass. Explicit fault
doubles and host cryptography/files do not establish vendor/device power-loss or
Keystore/authentication acceptance. The ordinary unsigned offline ARM64 Release build passes. Independent review verifies the applied source and packaged barriers; overall acceptance remains false. Fresh Doctor
100/aislop 99 completes with all five engines active and matching input/output
hashes; only the known node-forge high/root-audit finding remains, with nine other
audits clean. The full gate stays failed. Expo remains 20/21/eight patch mismatches
and Forge age approval is unanswered/unapplied, without a score/audit waiver or
suppression. Phase 2/full Phase 3 and counters stay open or
unchanged; EXT-09 alone is complete. State Lab mapping and same-npub continuity remain outside this checkpoint. See the
[scoped checkpoint](../../../docs/external-signing.md#iphone-blossom-and-android-vault-barriers-checkpoint--30-october-2026).

## iPhone connection lifecycle and tooling — 29 October 2026

Scoped runs verify remote cold restore and explicit disconnect/no-method cold
restore without fallback, preserving the original account and four descriptor
IDs/titles. Authority/nonces, opaque guest data and queues are outside that claim.

R4 remains failed with a real seed signature; later readback and SDK/native
publication reconcile its outcome, with Home unused. The 46.5-second timing
correction does not prove cause or timely completion. R5 remains failed at its
one-second receipt helper. Independent signing/native receipt evidence plus a
successful same-event Close Results/foreground SDK tail and separate two-ID
readback complete that observed return path. Six saved accounts, remote peer,
no pending request and exact 109-record cleanup verify. Controlled receiver and
distinct duplicate forwarding remain unproved. See the
[scoped checkpoint](../../../docs/external-signing.md#iphone-connection-lifecycle-and-tooling-checkpoint--29-october-2026).

The original vault review is source-only. Pinned official AOSP follow-up verifies
that finishWrite logs sync/close failure and continues; the caller has no checked
durability barrier before readback. A checked-sync proposal is being prepared in
TEMP. No live fix or physical/vendor durability proof follows.
Tooling/merge checks pass 84 regressions and both notice guards. Live quality stays
Doctor 100/aislop 99, Forge-only root finding, nine clean audits and Expo 20/21.
Forge 1.4.2 awaits early age approval and is unapplied. Full quality remains open;
no score/audit waiver or suppression is proposed. Phase 2/full Phase 3 and counters
stay open or unchanged; EXT-09 alone is complete. No source push occurs.

## iPhone automation authorization and control — 29 October 2026

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

The native device authorization is observed and completed by the owner before
the passing probes. Host tool selection is corrected separately. Failed log
collection supplies no archive/filter proof and USB inventory supplies no wired
claim. See [the investigation](../../../docs/external-signing.md#iphone-ui-automation-investigation--29-october-2026)
and [the runbook](../../../docs/development.md#physical-iphone-ui-automation).

## iPhone startup repair — 29 October 2026

Two exact app crash reports identify the missing UIKit scene lifecycle. The
durable Expo plugin, 16 generation/codec checks, TypeScript and ordinary Release
build pass independent review. Actual packaging contains the scene delegate and
expanded manifest. A reviewed same-ID update opens the shell and UX Lab; root and
the independent reviewer inspect its screenshot. All 108 retained app metadata
records match. Earlier failed receipts remain unchanged.
See [the scoped result](../../../docs/external-signing.md#iphone-startup-repair--29-october-2026).

The owner reports counter 2 after Home/reopen and a second tap, without a crash
as asked. This is a user report, with no new screenshot or process observation.
The owner confirms that both Network and Lookup contain only `wss://nos.lol`.
The later manual transfer detour is cancelled at the owner’s request and its
local listener is closed. See the automation investigation above.
No signer peer, signature or publication starts during that startup-repair batch;
the retained test app still needs exact cleanup. Startup and host generation
contracts do not prove pending-signature cancellation, link delivery,
protected-device or broader route acceptance. Fresh quality is Doctor 100/aislop
97, six advisory IDs and Expo 20/21; no suppression or waiver. EXT-09 alone is
complete; Phase 2/full Phase 3 and counters stay unchanged.

## Manual iPhone check preparation — 29 October 2026

A fresh ordinary test copy passes exact input/package checks and independent
review. Installation adds only that app while all 108 retained app metadata
records match. The following launch command fails locally during argument
parsing; preserve its original false receipt and separate reconciliation.
See [the scoped result](../../../docs/external-signing.md#manual-iphone-check-preparation--29-october-2026).

The owner is guided to open the installed app manually. No peer, signature,
publication or XCTest retry starts. The ongoing batch still requires its exact
app cleanup. Manual observations cannot stand in for XCTest input/timing evidence.
No acceptance counter or quality gate changes; Phase 2/full Phase 3 remain open.

## iPhone automation attempt and cleanup — 28 October 2026

One owner-ready ordinary iPhone attempt fails during XCTest automation
initialization: the original xcresult contains zero tests and one error. The
controlled peer receives no requests or signatures. Observer packaging and twenty
focused host controls pass separately; they do not prove an app journey.
See [the scoped result](../../../docs/external-signing.md#iphone-automation-attempt-and-cleanup--28-october-2026).

The original runtime remains failed with deferred cleanup. Separate reviewed root
cleanup removes exactly the two owned apps and restores all 108 retained metadata
records, with owned processes absent and the lease released. Keychain erasure is
not established. Guided manual execution awaits owner availability and a fresh
disposable identity; no further automation retry is scheduled. Quality remains
Doctor 100/aislop 98 and Expo 20/21. EXT-09 alone is complete; Phase 2/full Phase 3
acceptance and counters remain unchanged.

## Current ordinary iPhone package — 28 October 2026

One ordinary Release build passes with exact before/after equality for all 768
source inputs and 97,617 dependency entries. Independent product review verifies
the 153-file signed iPhoneOS app, ordinary entry, native signing components and
current packaged notice bytes. Its JavaScript bundle matches the previous product.
See [the scoped result](../../../docs/external-signing.md#current-ordinary-iphone-package--28-october-2026).

No physical device is contacted or runtime test executed. Ordinary iPhone journeys still
await the existing readiness reply and fresh runtime admission. Pending-signature
source revocation, other routes, protected-device and final quality gates remain
open. Latest complete quality remains Doctor 100/aislop 98 and Expo 20/21, without
a new scan or waiver. EXT-09 alone is complete; Phase 2/full Phase 3 acceptance
and counters remain unchanged.

## Android native signing interoperability — 28 October 2026

One Android native client/JNI/production-transport emulator run against pinned nak
passes six correlated RPCs, one exact signing request and independent event-ID and
signature verification. Native execution takes 6.548 seconds; complete execution
and cleanup take 11.349 seconds. Temporary app/config removal, all 253 baseline
package records and emulator lease release verify. Earlier failed observers remain
failed. See [the scoped result](../../../docs/external-signing.md#android-native-signing-interoperability--28-october-2026).

Ordinary build 17 passes independent packaging review; only its notice manifest
asset changes from build 16. The new upload-review Home test stops at initial UI
capture exit 137 before connection or upload actions. Exact cleanup passes, but
cancellation remains untested. Client interoperability does not establish ordinary
approval, storage, route or physical acceptance. No physical phone is contacted.
Latest complete quality remains Doctor 100/aislop 98 with four advisory IDs.
iPhone readiness, Phase 2/full Phase 3 and all counters remain open or unchanged;
EXT-09 alone is complete.

## Tooling update and interrupted cancellation test — 28 October 2026

The ordinary Android pending-review Home test remains unrun: connection UI observer
mistakes consume its original 120-second budget. Fresh selected-account evidence
exists before expiry, but the run stays failed and no operation-end receipt is
backdated. One public-key lookup returns; no upload or signing approval occurs.
Exact cleanup restores all 253 package records and selected settings and releases
the emulator lease. No physical phone is contacted. See [the scoped result](../../../docs/external-signing.md#tooling-update-and-interrupted-cancellation-test--28-october-2026).

The exact Expo CLI Zod override passes independent compatibility and lock review,
frozen installation, 386 offline and 330 corrected installed-probe controls,
TypeScript, 75 dependency regressions, both production export/composition checks,
and two notice guards with 16 notice tests. Earlier observer/probe failures remain
recorded. [Dependency scope and differences](../../../docs/dependency-patches.md#expo-cli-zod-update--28-october-2026)
stay explicit. No native package is rebuilt or relabelled. Remaining quality,
iPhone readiness and full Phase 2/3 acceptance stay open; EXT-09 alone is complete.

## External-result authority loss — 28 October 2026

Four Android authority-loss boundaries now preserve uncertainty after a possible
signing send or confirmed external result. Pre-send certainty and live-correlation
or peer failures remain distinct. Local paths and the result-completion mapper
preserve actionable storage errors; post-send final guard failures remain uncertain.
The actual operation/ticket and extracted owning bodies pass 70 cases/189 checks.
The unchanged iOS final delivery guard passes 95 actual-method checks, including
delayed dismissal and replacement state; a guard-disabled control fails the four
expected authority-loss cases. Explicit host ports limit both results; no ordinary
lifecycle, protected-device or integration acceptance follows.

TypeScript, security (432 plus 13 preflight), Outbox (106) and uploads (73) pass.
Android prebuild, production export and fresh native compilation pass. Independent
product review verifies all 721 recorded source inputs, the existing certificate
and nondebuggable package. No device is contacted. See [the scoped change](../../../docs/external-signing.md#external-result-authority-loss--28-october-2026).
Latest full quality remains Doctor 100/aislop 97, five advisories open and Expo
20/21. iPhone owner readiness, runtime coverage and Phase 2/full Phase 3 acceptance
remain open; EXT-09 alone is complete and counters are unchanged.

## Android upload and current iPhone packaging — 28 October 2026

The ordinary Android NIP-55 test-provider upload reaches native confirmation and
matching SDK/status completion inside the original 60-second grant. Exact event,
signature and provider-count checks pass. The initial aggregate-version test error
and later fixed-readback-host assumption remain recorded separately; neither
original failure is promoted. A reviewed literal-host supplement passes receipt
checks and one auth-free normal-TLS public readback: one redirect, the exact
71-byte PNG and matching hash. Fresh server storage and authorization enforcement
remain unproved. Exact emulator cleanup passes.

The current iPhone app and test observer pass separate product review. The original
app wrapper remains false for 12 classified generated additions, with whole-tree
dependency equality still false. Neither physical device is contacted; the iPhone
awaits the existing screen-readiness response and fresh runtime admission. See
[the scoped evidence](../../../docs/external-signing.md#android-external-signer-upload-and-current-iphone-packaging--28-october-2026).
No product code, quality waiver or acceptance counter changes. Phase 2 and full
Phase 3 remain open; EXT-09 alone is complete.

## Ordinary Android NIP-55 Outbox — 28 October 2026

One ordinary emulator journey passes the complete disposable-provider path:
native connection, exact shell/native review, three Intent requests/returns, two
signatures and explicit Resume. Genuine SDK requests publish the kind-10002 seed
and kind-1 Outbox primary. Native receipts separately accept the primary and the
unchanged existing list, with a duplicate message for the latter. Independent
event/signature, SDK and exact-two-ID public-relay readback checks pass.

Independent review verifies original deadlines, current package/source bindings
and exact cleanup to all 253 records and original selected settings. The full SDK
envelope and reviewed payload projection are retained. See [the scoped result](../../../docs/external-signing.md#ordinary-android-nip-55-outbox--28-october-2026).

This supports only the tested Android NIP-55 provider route. Amber, NIP-46 Outbox,
iPhone, Blossom, wider faults/lifecycle and controlled-receiver acceptance remain
open. No product code, acceptance counter or quality waiver changes; EXT-09 alone
is complete. Phase 2 and full Phase 3 remain open, and iPhone execution still
awaits the existing owner-readiness response.

## Upload authorization status and cancellation — 28 October 2026

The ordinary Android local-upload rejection journey exposed and now verifies a
repair to misleading authorization and cancellation messages. Five focused cases
produce four failures before the change; afterward all 35 owning service tests
and 73 upload tests pass without skips. TypeScript, both production JavaScript
exports and fresh ordinary Android packaging pass. Native approval policy and
protocol fields remain unchanged.

Independent code, package and runtime review verifies the exact event, corrected
messages, matching cancelled SDK/status results and cleanup to all 253 package
records and original selected settings. The run rejects one native authorization;
it does not establish successful upload, external signing, zero network traffic
or protected-device acceptance. See [the scoped result](../../../docs/external-signing.md#upload-authorization-status-and-cancellation--28-october-2026).

The required check still fails Expo recommendations at 20/21. After the reviewed qs
tooling remediation, the complete scan reports Doctor 100 and aislop 97, with eight
clean audits and two failed audits. The qs advisory is absent; five other advisory
IDs remain. No finding or acceptance requirement is waived.
Phase 2 and full Phase 3 remain open; iPhone execution awaits owner readiness.

## Android large-text signing review — 28 October 2026

A bounded ordinary Android emulator journey passes at system font scale 2.0:
public Identity controls, scrolling shell/native event review and one native
Reject. The exact native event matches the shell; the visible SDK result has one
created request, approval denied and zero pending. Independent review verifies
readable controls and exact restoration of all 253 package records and original
font/accessibility settings. See [the scoped result](../../../docs/external-signing.md#android-large-text-signing-review--28-october-2026).

This adds layout and accessibility-node evidence for one local-note route only.
TalkBack speech/focus, other signing methods, iOS and protected-device acceptance
remain open. No independently measured network-count claim, quality rerun or
acceptance-counter change follows; Phase 2 and full Phase 3 remain open.

## Ordinary Android Outbox preparation — 28 October 2026

The current ordinary Android package and fresh RAM-key NIP-55 test provider pass
independent packaging/source review. One emulator run reaches final native
connection consent after the exact public-key handoff, but its connection-phase
deadline expires before the final commit tap. No event is submitted or signed.
The original runtime receipt stays failed. Separate supported quiescence checks
and owned cleanup restore all 253 package records; the unsupported instrumentation
query's absence claim is withdrawn. See [the scoped result](../../../docs/external-signing.md#ordinary-android-outbox-preparation--28-october-2026).

No runtime retry, product change or quality rerun occurs. The latest full quality
report remains Doctor 100/100 and aislop 97/100 from the dependency checkpoint.
iPhone readiness, ordinary Outbox/Blossom and other Phase 3 gates remain open;
EXT-09 alone is complete and Phase 2 acceptance remains open.

## Compatible dependency remediation — 28 October 2026

The six compatible tooling updates are applied after independent review. All ten
frozen installs preserve the resolved dependency closure, policies and patches.
TypeScript, installed dependency regressions, both production JavaScript exports
and signing-composition checks pass. The trusted runtime passes 298 browser tests;
the four napplet browser suites pass 168 tests, and all seven napplet type, build
and conformance commands pass (five conformance checks run and five skip per report). See [the exact changes and remaining constraints](../../../docs/dependency-patches.md#compatible-security-updates--28-october-2026).

Zod 3 compatibility and the remaining release-age/trust constraints stay open.
No physical device is used and no native runtime result is inferred from these
tooling checks. EXT-09 alone remains complete; Phase 2 and full Phase 3 acceptance
remain open. The following Android/quality checkpoint predates these updates.

## Earlier Android preparation and quality — 28 October 2026

The standalone Android native-client/JNI/production-WSS package compiles, but its
runtime observer does not establish interoperability. Attempts 01–03 stop before
Activity launch; attempt 04 passes private input metadata and launches once, then
fails on the first result JSON read. Native completion and signing activity remain
unknown. Independent review verifies exact temporary-app/process cleanup and all
253 retained package records. The ADB input and result-status limitations are
recorded in [the preparation result](../../../docs/external-signing.md#android-interoperability-preparation--28-october-2026).

A fresh full quality bundle completes all 12 prescribed commands against one
unchanged source snapshot. React Doctor passes at 100/100; aislop reports 96/100
with eight security-package findings, and all ten discovered-lock audits fail.
Independent review counts 20 distinct advisory IDs across nine modules. All five
aislop engines complete without suppression. TypeScript passes; Expo reports
20/21 with eight package-version recommendations. These superseded the older 98-point
aislop baseline at that checkpoint; they did not pass the final gate.

Read-only dependency triage identifies compatible, age-eligible candidates for
MCP, Hono, ip-address, fast-uri, Zod 4 consumers and Vite. They were not installed or
validated at that checkpoint; the remediation above supersedes that status. Expo CLI's Zod 3 compatibility remains unresolved; body-parser,
the GSD/Fallow parent update and Forge still have release-age constraints. Keep
the existing trust/age rules and JSI, SecureStore, braces and runtime patches.
No Phase 2 or Phase 3 acceptance requirement closes.

## Real-signer host interoperability — 27 October 2026

One source-bound macOS run of the unchanged Swift client, protocol, crypto and
production WSS transport passes against the pinned official nak v0.21.2 binary.
Six correlated RPCs yield one exact signature; native and two independent checks
verify the event fields, canonical hash and signature. The runner does not publish
the user event. Independent review confirms process/socket cleanup and unchanged
production inputs. See [the scoped result](../../../docs/external-signing.md#native-client-interoperability-with-nak--27-october-2026).

This is real-signer protocol evidence with normal public DNS/TLS, not an app,
Android, protected-storage, review, handoff, Outbox or Blossom pass. RPC counts
come from the reviewed private-output parser, not an independent relay log. No
EXT-01–08, Phase 2 or final quality gate closes.

## EXT-09 packaged boundary — 27 October 2026

EXT-09 is complete within its architectural scope. The existing Android ordinary
build and iPhone Release product match their source bindings and packaged bytes.
Independent inspection confirms no incoming signer Activity, service, provider or
iOS extension. The native module declarations and compiled-name inventories agree;
those names and bundle maps corroborate composition, not dynamic extraction or
compromised-JavaScript resistance. The future caller-identity, permission-storage
and revocation decisions remain documented and deliberately unimplemented.

The iPhone's separate product verification accounts for 18 generated dependency
changes; its original strict build receipt remains false. This inspection closes
no runtime, protected-device, real-signer interoperability or quality gate.
EXT-01–08, Phase 2 and full Phase 3 remain open.

## Build and runtime checkpoint — 27 October 2026

The ordinary iPhone Release app compiles and passes normal-host signature
verification. Its original wrapper still fails whole-dependency equality on 18
generated cache changes; separate independent verification classifies those exact
changes and verifies the 153 app files. No runtime acceptance follows from the build.

XCTest times out enabling automation before the selected Outbox test starts. The
peer observes zero requests or signatures. Fresh full-path reconciliation restores
all 108 baseline app records and leaves the retained app untouched. Owner screen
readiness is pending before another attempt; the staged cleanup correction fixes
a basename collision only.

Android attempts05 and06 connect to the disposable signer but stop before event
submission on a black public screenshot. Each records three connection requests
and zero signatures; fresh cleanup restores all 253 package records. Attempt06
adds a readable initial screenshot and later Awake/ON/nonsecure app-window metadata.
These sequential observations do not establish the cause.

Empty-dialog Cancel stays readable; focusing that empty protected field before
Cancel reproduces the black public capture without typing or connecting. Later
initial images alternate between black and readable; no Home/resume branch runs.
The unchanged APK also reproduces the failure on a separately owned fresh API36
ARM64 emulator using SwiftShader/swangle. Independent review verifies the failed
result and exact cleanup to its own 245-record baseline, preserving the original
253 records. This does not establish an isolated renderer or product cause.
A reduced plain-Android dialog control reproduces the same black public-after
frame. Its first cleanup is exact but late. One cold restart with an accepted
Vulkan-disable override also reproduces the frame; that run cleans up within its
deadline. Vulkan remains advertised, so this does not isolate the cause. This
diagnostic line stops without a capture workaround. Verified shutdown removes
only the temporary emulator data and disposable control key; the original emulator
remains unchanged. Capture protection and product code are unchanged. Physical
Android remains released. All acceptance counters, Phase 2 and final quality stay open.

## Earlier resumption checkpoint — 27 October 2026

Approved Xcode setup and targeted iPhone developer-service connectivity now pass.
Current iPhone app compilation remains open after two retained failures; the
reviewed Expo JSI sanitizer patch and notice metadata refresh are applied without
changing package versions or weakening dependency policy.

Ordinary Android auth09 passes within emulator scope: 23 explicit account/security
properties plus credential-screen, expiry and navigation observations (159 named
checks in total). Independent review and fresh root cleanup restore all 253
package metadata records and remove the temporary credential, app and scratch.
This supplements Plan 02; protected physical authentication and full acceptance
remain separate. Amber 6.6.9 startup/cleanup alone adds no signing interoperability.

Two fresh Android Outbox attempts stop before signing, first in UI navigation and
then in the observer's public-key helper. They remain failed; cleanup is verified
separately. Plan 04 still needs the complete ordinary Outbox and Blossom routes.
All acceptance counters and Phase 2 status remain unchanged.

## Test infrastructure and sampling

Plan 01 creates `test:signer`, `test:signer:native`, `tests/security/native-signer-contract.test.ts` and `tests/native/signer-core/run.py`. The driver supports explicit `--platform` and `--suite` selection, fails on missing/zero-case coverage, and identifies actual owning source and environment. It must never substitute an unmarked double for production native authority.

The [suite runner guide](../../../tests/native/signer-core/README.md) defines required target and provider inputs. Set `HYPERGOLIC_TEST_ANDROID_SERIAL`, `HYPERGOLIC_TEST_IOS_UDID` and, for Android NIP-55/all, `HYPERGOLIC_TEST_NIP55_PROVIDER` only after selecting a reviewed disposable environment. Missing inputs fail before any child runs. `all` covers the defined native fixture suites, not every acceptance requirement.

Run focused shared/native checks after each meaningful behavior change. Run affected existing regression suites at each plan checkpoint. Run full exports, native builds and quality reports at final integration; do not repeatedly rebuild unaffected products. Runtime estimates are unknown until measured. No watch mode.

## Per-task verification map

| Plan | Requirements / threats | Main evidence | Command availability | Status |
| --- | --- | --- | --- | --- |
| 01 | EXT-01/07/08/09; T-01 | Native review-to-sign trace, vector and forged-token cases | Signer commands implemented and executed | native and Expo traces pass; quality gates open |
| 02 | EXT-01/02/08; T-02 | Fresh native persistence/restart, failure injection, native import and bridge retirement | Core and migration drivers implemented; scoped native and shared runs retained | Native record/failure checks and ordinary Android import/select/restart have evidence. Earlier iPhone XCTest initialization failures and ordinary startup failure remain recorded. A later diagnostic identifies inactive native entry before core dispatch; the bounded native activation repair passes 18 host regressions. One ordinary physical iPhone XCTest passes public account/local-method, empty Import Cancel and cold restart, with three equal public snapshots and visible state evidence. Its original wrapper receipt stays false because automatic touch samples were not retained; sample-level input verification remains open. Exact temporary-app cleanup passes. One later ordinary iPhone async configuration Save/read/cold-read has separate raw-input/typed-result reconciliation and exact cleanup; its original wrapper stays false at a truncated title check. The native authentication-timer repair passes 24 host checks. Remaining configuration operations, OS-authenticated journeys and protected-device acceptance remain open |
| 03 | EXT-03/04/08; T-03 | Connect/restart, peer correlation, same-account method choice | Both native NIP-46 owning drivers and shared method suites implemented | Native storage/connection/refresh checks have scoped evidence; ordinary Android connection, refresh, cold restart and offline disconnect pass. One ordinary iPhone XCTest completes connection, Safari Close/native Resume, account confirmation, cold restart, disconnection and cold no-method persistence. Its 21 raw touch records and five public snapshots verify; original overall receipt stays false because strict phone/host timestamp comparisons remain unproven after a separate parser correction. Exact temporary-app cleanup passes. Same-npub/data continuity and full production acceptance remain open |
| 04 | EXT-04/05/07/08; T-04 | Real SDK review/sign/publication and upload routes, deterministic faults | Owning NIP-46, source-authority and affected shared regressions run | Scoped ordinary Android and iPhone NIP-46 note publication pass with exact native review, browser Close/Resume, independent signature verification and matching SDK event ID. Android publication04 reports 3/3 and retrieves the exact event from nos.lol and bucket.coracle.social; Damus times out. iPhone publication152 reports 3/3 and retrieves it from nos.lol; bucket returns EOSE without it and Damus times out. iPhone evidence includes 21 raw centre-tap records, two original-ID authentication completions and one signature. Host and phone timing are measured separately. Exact temporary-app cleanup passes on both platforms. Earlier failed and uncertain runs remain preserved in the detailed checkpoints. The iOS request-ownership and delayed-delivery suite passes 95 actual-method host checks; its final-guard negative control fails four expected cases; upload signing now requires file approval and its full owning host suite passes, including 104 Swift registry checks. Later [ordinary iPhone NIP-46 Outbox evidence](../../../docs/external-signing.md#iphone-connection-lifecycle-and-tooling-checkpoint--29-october-2026) combines reviewed seed/primary signatures and separate receipts with a passed receipt-close/foreground SDK tail and public readback; the original observer outcomes remain false. The [ordinary iPhone NIP-46 Blossom route](../../../docs/external-signing.md#iphone-blossom-and-android-vault-barriers-checkpoint--30-october-2026) verifies the public 71-byte PNG, native kind-24242 review/signature and pushed SDK completion; its original extraction failure and separate corrected extraction remain distinct. Ordinary Android [NIP-55 Outbox](../../../docs/external-signing.md#ordinary-android-nip-55-outbox--28-october-2026) and [NIP-55 upload](../../../docs/external-signing.md#android-external-signer-upload-and-current-iphone-packaging--28-october-2026) pass only their test-provider profiles. The [ordinary Android NIP-46 Blossom route](../../../docs/external-signing.md#android-remote-upload-and-guarded-navigation--30-october-2026) has scoped public-file/native-signature/pushed-SDK evidence, without provider storage/auth enforcement proof. The [Android Outbox flow](../../../docs/external-signing.md#android-outbox-flow-and-separate-verification--30-october-2026) is independently verified beside its failed original verifier, a separate offline supplement and later exact two-event readback; no retrospective original pass is claimed. Controlled-receiver consumption, distinct ancillary forwarding, new provider storage/auth enforcement, broader faults/lifecycle, real-signer and protected-device/full acceptance remain open. Ordinary Android pending-signature cancellation remains unverified; the later ordinary attempt fails its caption check after authorization Cancel input, with actual caption unknown. The applied mapping fix passes controlled native red/green and refreshed static packaging checks, not a completed ordinary late-response journey. |
| 05 | EXT-03/06/07/08; T-05 | Android Activity result, explicit package, handoff and spoof cases | Focused native validator/provider/controller proofs and fresh five-child Android aggregate pass | Ordinary account07 passes 150 UI/public-metadata checks. Separate State Lab02 passes 215 checks for one shared SDK value across same-npub connection, method changes, offline and cold NO_METHOD, and explicit local recovery/cold restart. A separate ordinary SDK journey verifies one exact provider signature followed by Resume cancellation, then missing-provider refusal without fallback. The reviewed Amber alias repair passes 67 native assertions and seven independent checks. An owner-operated Amber 6.6.6 public-key handoff returns the expected disposable candidate through Resume, and the owner confirms Keep current settings preserves the original account. The historical all01 Android aggregate stopped at four of five passing groups because controller cancellation notified one handoff twice. The per-request atomic repair passes all six focused controller modes, with 71 native and 14 independent checks; repeated, stale and off-main cancellation retain once-only behavior. The original aggregate remains false. Fresh all02 passes all five child invocations after that repair, with independently verified exact cleanup and test-ownership release; the preexisting emulator stays running. A later owner-operated Amber connection and cold-restored signer selection are confirmed. One reported event has a verified expected-author signature and nos.lol readback, but its missing full stop fails the exact-text contract; multiple attempts leave total counts unproven. Owner-confirmed disconnect and cold no-method persistence finish with exact temporary-app cleanup. The retained owner08 ordinary Android build was installed in place and launched; its 27 October refresh is separate from newer disposable test builds. A later ordinary Android test-provider journey passes three exact Intent requests/returns and two signatures through seed publication and Outbox, with independent event checks and exact cleanup. Other storage scopes, stricter real-Amber interoperability counts and full physical acceptance remain open |
| 06 | All EXT; T-06 | Full matrix, external review, native products and final quality | Central iOS all passes 3/3 applicable groups: core 15 cases/62 assertions, persistence 39/375, NIP-46 20/136; independent checks add 6/6/35. Fresh Android all02 passes 5/5: core 52 native/7 independent checks, persistence 381/7, NIP-46 92/142, NIP-55 validators 67 native, controller 71/14; counts stay per child, and failed all01 is unchanged | All02 independently restores all 253 package/path/UID/version records, removes owned apps/XML/reverse mappings and stops its peer; test ownership is released while the preexisting emulator stays running. Earlier native batches retain their separate cleanup evidence. iOS persistence uses explicit storage doubles and NIP-46 uses loopback trust; neither proves protected-device or ordinary-app acceptance. The ordinary Android NIP-55 Outbox happy path has separate reviewed source-bound evidence and cleanup; other production routes, final matrix, protected-device checks, accessibility and quality remain open |

Native test exit status, source inspection, screenshots/input and independently observed wire outcomes serve different purposes. Store Android/iOS and local/NIP-46/NIP-55 results separately. A test that only mirrors a method implementation does not prove the security property.

## Physical-only and human checks

Real protected iPhone file access, device authentication and capture protections require physical evidence where Simulator cannot reproduce them. Name the limitation before each batch. App-switch tests may use emulator/Simulator where faithful; physical testing is not justified by a broken observer alone. Use only disposable credentials and controlled peers for faults. Never capture a real secret in screenshots/logs.

Before changing a retained app, record its app ID/signing identity/inventory. After a batch, reconcile jobs and side effects, remove only owned temporary apps/runners, and verify the retained app/data remain. No automatic secret export or account deletion.

## Final gates

Run `pnpm run check` and complete current reports when their metadata permissions allow. The dated pre-remediation scan on 28 October reports Doctor 100/aislop 96, eight security-package findings and ten failing audits; it is historical evidence, not the current result. The latest measured local React Doctor scan completed 497 files with zero diagnostics and no numeric score. The latest measured aislop score is 99/100 with one high node-forge finding. The latest measured Expo Doctor report, before the Build Properties update, passed 20 of 21 checks with six recommendations. These are dated measurements, not fresh checks of the updated dependencies or native fix. Numeric scoring and ten separate audit requests were blocked before dispatch, and their metadata permissions remain pending. Forge age approval is unanswered. Require fresh affected checks after dependency changes; the normal 100/100 gate stays open. Existing narrowly approved historical exceptions are recorded in [dependency patches](../../../docs/dependency-patches.md) and confer no new waiver or scan permission.

The 27 October registry/advisory refresh finds Forge 1.4.1 published and the braces advisory withdrawn. The Forge update remains subject to the unchanged seven-day release-age policy; no new full quality scan or clean-gate claim follows from those source updates.

Full E2E and Phase 2.11 acceptance are still open. Execution needs the roadmap prerequisite satisfied or explicitly rescheduled by the owner. Security parity with Amber requires a defined comparative threat model and independent review; this plan cannot award it.

## Planning review

- [x] Existing commands and owning file paths inspected.
- [x] Missing signer test commands assigned to Plan 01 before downstream use.
- [x] No automatic implementation, source push or dependency change.
- [x] Core, migration, NIP-46 and Android NIP-55 suite composition implemented. Twelve host driver regressions pass; fresh aggregate native execution and full Phase 3 acceptance remain separate.
- [x] Plan 01 native/Expo review UI evidence collected; full accessibility acceptance remains open.
- [x] Independent bounded Plan 01 source/evidence review completed; no audit or full-phase sign-off.
- [ ] Final quality and acceptance gates passed.
