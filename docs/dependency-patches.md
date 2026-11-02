# Dependency patches and approved exceptions

## Build Properties configuration update — 30 October 2026

`expo-build-properties` moves from 57.0.17 to 57.0.22 under the unchanged
seven-day release-age and publisher-trust policy. The real isolated resolver
changes only this package and its direct reference; frozen installation verifies
the published files. Other pins, patches and scoped overrides remain unchanged.

The scene-support option stays unspecified and the existing custom scene plugin
remains in control. Isolated public config, typecheck and Android/iOS prebuild
pass. Selected generated native files match the retained baseline; fresh
no-install Info.plist lacks the architecture key supplied by the existing React
Native CocoaPods post-install stage. The live `RCTNewArchEnabled: true` value is
preserved; generated native files are not copied into the app.

This build-time plugin is absent from the reviewed JavaScript contributor list.
Only package/lock input hashes change in the existing notice profiles; original
licenses, component identities and bundle/map bindings stay unchanged. Native
compilation and live integration checks are separate; this update grants no
quality waiver, product equivalence or device/acceptance result.

## Scoped SemVer compatibility and Expo patches — 30 October 2026

The root update pins `expo-font` and `expo-system-ui` to 57.0.4 and replaces
`semver ^6.3.1` only for six exact installed Babel consumer versions with 7.8.5.
The other dependency pins, patches, seven-day release age and publisher-trust
policy remain unchanged. The resolver's exact OpenTelemetry deprecation metadata
is retained; no audit or policy exception is used.

SemVer 6.3.1 lacks provenance present in an earlier publication, and no available
6.x release satisfies both these callers and the trust policy. The scoped
substitution covers Babel core, compilation targets, class and regexp helpers,
runtime transform at 7.29.7, and polyfill-corejs2 at 0.4.17. It is not general
SemVer 6 compatibility: 96 actual-consumer comparisons contain three differences
for the empty runtime range `<0.0.0`. These follow the upstream
[7.4.0 intersection correction](https://github.com/npm/node-semver/commit/940723d22bca824993627c45ac30dd3d2854b8cd).
Current Expo's runtime input is 7.29.7. Actual Expo/Metro transforms, Worklets
JavaScript serialization, TypeScript, all 84 quality regressions and both
production exports pass in the isolated candidate.

Each fresh export has 61 package contributors; only Font changes identity to
57.0.4. Other metadata and original license bytes remain unchanged. Font's
versioned notice labels and the separately supplied System UI originals follow
the new package versions. The notice profiles bind the reviewed export maps and
exact dependency inputs. Historical native products are not relabeled. Full
quality, native packaging and physical acceptance remain separate; the pending
Forge age exception is not applied.

## Expo configuration merge implementation — 29 October 2026

The scoped `@expo/config@57.0.9` patch replaces its two merge consumers with
`@fastify/deepmerge@3.2.4`, using enumerable-symbol support. The resolver genuinely
removes `deepmerge`; no version relabeling or audit suppression is used.
[The original advisory](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)
has no patched release. The replacement satisfies the unchanged seven-day age
and publisher-trust policy. All existing native patches and other versions remain.

The replacement preserves tested array concatenation, explicit undefined updates,
plugin ordering and deep cloning. It deliberately drops `constructor`, `prototype`
and `__proto__` keys; sparse holes become explicit undefined indices with the same
serialized JSON. These are documented differences, not universal API equivalence.
`pnpm run test:quality` retains focused installed-consumer regressions.

Independent TEMP copies of the current app config, plugins and icons run offline
Expo prebuild with installation disabled and the bundled official template. All
65 generated Android/iOS files match the baseline exactly, without normalization.
This proves configuration generation, not native compilation or device behavior.
The original unrelated trust-resolution failures remain recorded separately;
the exact lock integration preserves existing artifacts and uses the normally
resolved replacement. Full quality, Forge release eligibility and Expo patch
recommendations remain separate gates.

## Expo CLI Zod update — 28 October 2026

The exact parent override `@expo/cli@57.0.22>zod: 4.6.6` removes the remaining
Zod 3 dependency from the root lockfile. The [reviewed advisory](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5)
lists 4.6.6 as patched. This is a deliberate local override of the CLI's declared
`^3.25.76` range. Independent review covers its two actual schema consumers and
MCP 1.32 registration, listing and calls; it does not establish general Zod 3
compatibility. The seven-day release-age rule, publisher-trust policy, existing
patches and other dependency versions remain unchanged. Two generated Metro
optional-peer names describe existing dependencies and add no package or edge.

All 32 tested JSON cases per version preserve acceptance and parsed output.
Diagnostic structures and wording differ; Zod 4 rejects non-JSON Infinity. MCP's
advertised outer schema omits `additionalProperties: false`, while actual runtime
stripping and strict nested parameters remain unchanged. The [upstream fix](https://github.com/colinhacks/zod/pull/6652)
short-circuits collections with upper bounds. These CLI schemas have no such
bounds, so this update does not establish new resource limits.

Offline comparison passes 386 controls. The corrected installed-resolution probe
passes 330 controls with no differences from the tested candidate. Earlier harness
failures remain recorded: an incorrect symlink anchor, then an assertion counting
import calls instead of distinct owning modules. The latter correction retains
both required consumers and exact resolution for every observed call.

Frozen offline installation, TypeScript, all 75 dependency regressions, both
production exports and signing-composition checks pass. Zod is absent from both
production maps. All 61 contributors and original notices remain unchanged; only
four root manifest/lock hashes change across the native notice manifests. Both
notice guards and all 16 notice tests pass. Historical APK/app bindings remain
unchanged; this update does not repackage or relabel them. Remaining Forge,
body-parser and Fallow findings, full quality and Phase 2/3 acceptance stay open.

## qs security update — 28 October 2026

The newly reported [qs comma-stringify denial-of-service advisory](https://github.com/advisories/GHSA-6pq8-jhm2-2vcw)
is addressed with exact qs 6.16.1 in the root and quality-tool dependency closures.
Both Express and body-parser accept the patch within their declared ranges. The
release passed the seven-day age gate on 21 October at 22:06 UTC and preserves
the existing publisher-trust rank; no policy exception is used.

Independent review verifies archive integrity and npm signature, exact installed
files, parent resolution, and preservation of all unrelated dependency versions,
patches and policies. Both frozen installs pass with lifecycle scripts disabled.
TypeScript and all 75 installed-dependency/quality regressions pass without skips.
Fresh Android/iOS production maps and signing-composition checks pass; qs is absent
from those maps. All 61 dependency contributors and original notice bytes remain
unchanged. The two native notice manifests update only four package/lock hashes;
historical bundle and map bindings remain intact.

Both native notice guards and all 16 notice regression tests pass. The complete
scan reports Doctor 100 and aislop 97, with eight clean audits and two failed
audits. The qs advisory is absent; five other advisory IDs remain. The full
quality gate still fails without suppression.

This tooling update follows the ordinary Android upload rejection run; it does
not change or relabel that APK. Remaining Forge, Zod 3, body-parser and Fallow
findings retain their existing compatibility or release-age constraints below.
Full quality and Phase 2/3 acceptance remain open.

## Earlier compatible security updates — 28 October 2026

Six published fixes are installed with exact versions: MCP 1.32.0, Hono 4.13.11,
ip-address 10.7.4, fast-uri 3.1.9, Zod 4.6.6 for existing 4.x consumers, and
Vite 7.3.7 in the runtime and seven napplet projects. Normal pnpm resolution
and frozen installs pass in all ten projects. Independent review verifies no
unrelated dependency changes. Expo CLI keeps its declared Zod 3 dependency;
the seven-day age rule, publisher-trust policy and existing patches are unchanged.

TypeScript, the installed-patch/quality regressions, both production JavaScript
exports and their signing-composition checks pass. The runtime passes 298 browser
tests; Approval, Feed, State and UX Labs pass 168 browser tests together. All seven
napplets pass their type, build and conformance commands. Each conformance report
runs five checks and skips five; it does not establish full conformance. These checks establish
tooling compatibility; they do not add native device or signing-route acceptance.

The updates do not resolve every advisory. Expo CLI's Zod 3 dependency needs a
compatible fix. The body-parser update becomes age-eligible on 29 October at
11:39 UTC, the GSD parent update for Fallow on 2 November at 14:30 UTC, and
Forge 1.4.1 on 3 November at 04:44 UTC. Recheck their complete dependency closure
before installation. Expo patch candidates also face publisher-trust constraints.
Keep all remaining findings visible; no new exception or suppression is granted.
Final quality and Phase 2/3 acceptance remain open.

## Previous dependency checkpoint — 27 October 2026

[Forge 1.4.1](https://github.com/digitalbazaar/forge/blob/v1.4.1/CHANGELOG.md)
now includes a released RSA verification correction. The prepared update remains
unapplied under the existing seven-day release-age policy; its registry timestamp
makes it eligible no earlier than 3 November at 04:44 UTC. The
[braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) was withdrawn
on 23 October. Keep the existing depth guard and consumer regressions. Earlier
advisory descriptions and scores below are dated evidence, not a current clean
audit or a replacement for a full quality run.

## ExpoModulesJSI 57.0.8 — Swift 6.4 interface compatibility

The current iPhone build exposed an internal C++ extension using `__ObjC::` in
the generated Swift interface. Expo's build script already removes the older
`__ObjC.` form but misses this spelling. The local
[package patch](../patches/expo-modules-jsi@57.0.8.patch) adds that exact case to
the existing sanitizer; runtime Swift/C++ source and package versions stay unchanged.

Eight actual sanitizer checks reproduce the failure on the retained interface,
remove only the offending extension, preserve surrounding public declarations,
and retain treatment of the older spelling. Normal offline pnpm canonicalization
and frozen installation pass under unchanged age/trust policy. Both packaged
notice manifests update only the root manifest/lock hashes after verifying all
other package metadata and original notices. Normal CocoaPods regeneration,
dependency preparation and ordinary iPhone Release compilation now succeed. The
generated public interface changes only by removal of the offending internal
extension. Normal-host strict signature verification also passes.

The original build wrapper still reports failure on 18 generated cache transitions.
Separate independent product verification accounts for those exact changes without
claiming whole-dependency equality; no source, package version or trust policy is
relaxed. The subsequent XCTest automation timeout occurs before the app test starts,
so iPhone runtime acceptance remains open.


## node-forge1.4.0 — GHSA-86w9-cpqp-85rv

Expo57.0.20 → @expo/cli57.0.22 and @expo/code-signing-certificates0.0.6
resolve one node-forge1.4.0 dependency. The [reviewed advisory](https://github.com/advisories/GHSA-86w9-cpqp-85rv),
updated1October2026, affects all published versions through1.4.0 and lists no
patched release. The registry still reports1.4.0 as latest; @expo/cli57.0.27 and
@expo/code-signing-certificates0.0.7 still require node-forge.

The local pnpm patch copies only the RSA source change from proposed upstream
[PR1152, commit ceba34402e329f0365134f23fe19898756527d65](https://github.com/digitalbazaar/forge/commit/ceba34402e329f0365134f23fe19898756527d65).
It checks nested DigestAlgorithm element counts as well as the outer DigestInfo,
rejecting extra unconsumed ASN.1 children. The upstream PR is open and unmerged;
this is a local remediation, not an official release or an upstream security
review. Package name/version remain truthful. The patch and pnpm lockfile pin
its content; `pnpm install --frozen-lockfile` succeeds.

Independent locally generated e=3 RSA cases reproduce acceptance of malformed
nested children before the patch. After the patch, valid NULL/absent-parameter
forms still pass Forge and extra children fail. Node/OpenSSL independently
accepts the NULL form and rejects all malformed forms; it also rejects absent
SHA256 parameters, so that optional-parameter check is Forge compatibility only.
The upstream RSA suite run against the installed patched library passes101 tests
with four upstream pending cases. Actual Expo certificate generation, PEM
round-trip, CSR, issued certificate, manifest signing, altered-message denial
and mismatched-key denial pass. Repository quality-verifier regressions pass58
tests. `pnpm run test:quality` includes the installed dependency checks.

The registry audit still reports this advisory for version1.4.0. It is retained
without an allowlist, version relabelling or suppressed scan. React Doctor scored
100/100; the last complete aislop run scored98/100, and the root audit failed
while the other eight lockfile audits passed. The owner explicitly approved a narrow acceptance exception for this patched
advisory on 2 October 2026; it also covers the resulting98/100 score and root
audit failure. All other findings, coverage, scan completion and audits must
still satisfy the normal quality requirements. The normal requirement remains two100/100 scores and complete clean audits;
Phase2.4 is accepted under this exception after final-source validation. The
normal verifier and audit continue to fail honestly; they are not reported as
100/100 or clean. A separate retained review checks exact fresh source/tool/raw
report hashes, complete scan coverage, the sole matching advisory/diagnostic,
eight clean audits and the exact installed patch in both Expo consumers. Any
additional finding fails acceptance.

If a patched official release becomes available, replace this local patch, verify
the installed dependency closure, rerun these cases and complete unsuppressed
quality/audits. The file will be updated with the actual disposition.


The owner authorized continuing subsequent phases under this one exception.
Recheck the actual visible finding and patch closure at each phase boundary;
it does not authorize any other advisory, lower score or skipped check. Patch
SHA256: `0169a20d1e125a82cafab56e53fa41e0c6caf2148dca29511c251d6411dc632a`.
Installed patched `lib/rsa.js` SHA256:
`acc22e5d36e27832c34e02dd3933aad7977d45b047eead5016520735efedc9c5`.
Both rebuilt signed-upload products are byte-identical to their earlier products;
Android nine/iOS eleven actual native checks and both ordinary exports/Release
compilations pass after the locked patch.


The generated unified patch's blank context marker was normalized into an
equivalent empty-line remove/add hunk for the repository whitespace check. It
changes patch encoding/hash only; the installed RSA source hash remains exactly
unchanged. Frozen installation and all58 quality/API regressions pass afterward.
Final build29 repeats packaging with the normalized lockfile; its exact products
are compared to the already tested build27 products.


Phase2.5 recheck on2October2026: registry latest remains1.4.0, the advisory has no
patched official release, and PR1152 remains open/unmerged at the same selected
commit. The complete new report scores ReactDoctor100/aislop99, with zero warnings
and only the same Forge diagnostic. The better score reflects the current clean
source inventory; it is not suppression or a new exception. All58 verifier/installed
patch regressions pass. Eight audits are clean; the root audit still reports only
GHSA-86w9-cpqp-85rv. The fresh separate review requires the actual99 score, complete
coverage and exact unchanged patch/consumer hashes, and rejects any extra finding.


## braces3.0.3 — GHSA-vfj7-8cjw-p6xm — approved exception

The 3 October 2026 complete audit identifies a second high advisory in both
Expo CLI → Expo Metro file map → micromatch → braces and the isolated quality
scanner → micromatch → braces. The [reviewed advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
affects versions through3.0.3 and lists no patched release. The owning
[report](https://github.com/micromatch/braces/issues/70) describes uncontrolled
recursive AST traversal. The existing Forge exception does not cover this finding.

The approved local patch is `tools/quality/patches/braces@3.0.3.patch`, shared by
the root and quality lockfiles. Package names and versions remain3.0.3. A fixed
256-level guard bounds parse stacks, compile/expand/stringify walkers, expansion
parent traversal and array flattening. Excessive nesting raises an explicit
RangeError before stack exhaustion. This is a locally authored mitigation with
no upstream security review or released-fix claim. It intentionally rejects
unusually deep patterns; normal expansion, compile/stringify and micromatch
results are covered by positive cases. Callers must still handle invalid-pattern
errors, just as they must handle existing syntax and length errors.

Unmodified3.0.3 reproduces stack exhaustion for an8003-character nested expansion
and direct6000-level ASTs. Installed patched copies in both actual consumers
reject those inputs with the guard. All16 new consumer cases and all74 combined
quality regressions pass; installed library files match between both consumers.
PatchSHA256: `161bd9d790cc0ff2e1cbcd08818d8eece91c27c00575678613ca697b780876a6`.
Frozen installation is verified. A pnpm cached installation initially retained
unpatched files despite the hash-labelled path; forced frozen reinstall resolved
it. The installed tests detect that failure rather than trusting the path.

The complete scanner still reports Forge and braces with zero other findings;
ReactDoctor100 and aislop97 are the actual scores. Root audit has both advisories,
quality audit has braces, and the other seven lockfile audits are clean. Scoring,
versions, audit data and standard gates are unchanged and still fail visibly.
The owner explicitly approved this additional exception on 3 October 2026,
limited to the tested locked patch, this advisory in the two identified consumers,
the resulting97/100 score and the root/quality audit failures. All other quality
requirements remain. Any other finding, new dependency consumer, incomplete scan
or changed patch requires fresh review. Phase2.6 acceptance requires a fresh full
report and separate exact-scope review; the ordinary verifier stays unchanged.


## Kehto shell0.20.0 — configuration subscription correlation

The existing opt-in runtime patch also fixes the injected config facade's reply
classification. config.values with an id is a correlated get reply; only no-id
values are subscription pushes under the selected NAP-CONFIG draft. The facade
now checks that distinction before calling subscribers. All existing source,
session, domain and ACL checks and prior patch hunks remain.

Patch SHA256: `37ece10deaf030c58de210e36e08a04b2c6d9f253473449973f7e566b1076a20`.
The runtime lockfile pins the content and frozen installation succeeds. The new
regression fails in Chromium/WebKit before the fix and passes afterward; all254
runtime cases and ten ordinary physical iPhone configuration checks pass.
This is a functional compatibility fix, not a new dependency advisory exception.
See [notifications and configuration](notifications-configuration.md).


## Phase2.11 local recheck — 8 October 2026

Current registry queries still return node-forge1.4.0 and braces3.0.3. The
[Forge advisory](https://github.com/advisories/GHSA-86w9-cpqp-85rv) and
[braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) still list no
patched release; Forge PR1152 remains open. No version, patch, lockfile, scanner,
suppression or normal gate changes. The upstream supplemental PR1157 is a separate
unmerged proposal, not part of this local patch or a verified installed result.

All 74 installed-consumer/verifier regressions pass. Forge RSA bytes match the
approved hash in both actual Expo consumers, and all five patched braces library
files match across Metro and the scanner. The locked patch hashes remain exactly
approved. This proves the selected local checks, not an upstream security review.

A source-bound diagnostic run on commit4ca36e5 completes full local ReactDoctor425
with zero findings and numeric scoring explicitly disabled. An independent source
inventory comparison confirms every analyzed path, no skipped projects/checks and
unchanged before/after source fingerprint. Complete aislop scores98 over417 supported
files with97 unsupported, predominantly Swift, and only the two approved dependency
findings. All applicable configured engines complete; native Swift correctness is
not established by this scanner coverage.

All ten current lockfile audits complete: eight clean, root reports exactly Forge
and braces, quality tools reports exactly braces. Raw reports/hashes and the exact
scope review are retained privately as quality-local01. This is a diagnostic bundle,
not a passing normal verifier bundle: ReactDoctor has null score and the ordinary
aislop/audit gates remain red. No current numeric100 or clean-all-audits claim.
No new exports, prebuilds, signed products, ExpoDoctor or physical rows are claimed.

Phase2 stays open. Upload MIMEalias/recovery-redirect choices, iPhone automation
readiness, Android availability, published release/parity and remaining native
acceptance still require their own evidence. Expo57.0.20 remains pinned; numeric
Doctor permission is unresolved. Weekly44%, ceiling about98%; source push owner-only.


## Approved complete quality recheck — 11 October 2026

The owner authorized empty diagnostics and public repository/framework/tool
metadata to the React Doctor score endpoint, and dependency graph audits to
the npm registry. A fresh full source-bound run on `d5693e2` returns Doctor
**100/100** across 442 files, with zero findings/skipped checks. Full aislop is
**98/100** across 436 supported files; 97 unsupported files remain, predominantly
Swift. All five applicable engines complete. Only the two existing Forge/braces
exceptions appear. Ten tracked-lockfile audits complete: eight clean; root has
exactly those two high advisories, quality tooling has exactly braces.

The normal verifier remains red. Independent review binds every command, raw
report, current source inventory, tool entry and complete coverage; the approved
patch hashes and actual Forge/braces consumers remain exact. All 74 installed
consumer/verifier regressions pass. No product source/lockfile/patch/suppression changes
or new exception were introduced. This resolves numeric-scoring/audit disclosure
permission and verifies only the existing exception scope. Full native acceptance,
release-age compatibility and complete original-license attribution remain open.
