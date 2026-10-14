---
mode: quick
date: 2026-10-14
status: complete
---

# Slim loaded shell with title-only navigation

Implemented the selected slim top bar and inset swipe tabs in the existing
`mobile-revamp` checkout. The final owner corrections are preserved: the loaded
napplet is borderless, while overview/menu frames and corner details remain; the
plain centered title opens the menu without a down arrow. The row retains direct
overview and identity access, and Close moves into the title menu with existing
close checks. White and cool-gray light surfaces replace beige; dark colors stay.

The 14-by-64-point neutral tabs retain 44-by-88-point touch targets, orange contact
feedback and the established switching/overview gestures. Android uses narrowly
bounded native gesture exclusions so system Back cannot steal handle swipes.
Exclusions clear with disabled/detached handles, including menus and overview.
The host's default native registration and privileged bridge are unchanged.

## Validation

- TypeScript, 47 shell tests and 294 Chromium/WebKit runtime tests pass.
- Android native switching/state passes 13 checks across three live sessions;
  five additional native checks verify exact exclusion bounds, menu dismissal
  with system Back, Back outside handles, and overview restoration.
- iOS switching/state passes seven checks; guest vertical/horizontal scrolling,
  selection and retained state pass four.
- Native UI scenarios cover light/dark, larger text, title-menu navigation,
  grouped Settings, input, close protection and sample request review. Final
  screenshots show the plain title, borderless loaded view and framed overview.
- Observer regressions pass: 12 observation, 8 workspace admission and 15 target
  probe cases. Hidden status text is replaced by exact visible native geometry,
  actual child readiness and causal counter binding. Optional configured URLs
  allow only `fixture=ux-lab`; unknown/duplicate fields reject. Original failed
  observers are preserved and do not count as passes.
- Native builds/prebuild, both final production Expo exports and native notice
  regressions pass. All 61 JavaScript package contributors and original notices
  remain exact.
- React Doctor reports 100/100 with zero diagnostics. Aislop completes all five
  engines at 98/100 with only the existing node-forge/braces advisory exceptions.
  The ordinary check stops at eight Expo patch recommendations. No thresholds,
  source suppressions or notice guards are weakened.

## Device delivery and scope

Standalone Android Release and signed iPhoneOS Release are installed and launched
in place using the retained app IDs and signing identities. Android installed
bytes match the prepared APK; both app inventories preserve. iOS receipts verify
installation and launch without claiming installed-executable byte readback.
No retained app was uninstalled or its data cleared.

These UI fixtures use public identity data without signing or publication. Native
presentation and local runtime interaction do not establish full MVP/security
acceptance. Full E2E remains deferred until feature complete; Phase 2.11 and its
acceptance matrix are unchanged. Source push remains owner-controlled. Private
originals, screenshots and failed observers are captured in the shared Notes
project. The existing unrelated planning files remain untouched.

See [shell appearance](../../../docs/shell-style.md) and
[development checkpoint](../../../docs/development.md#slim-shell-refinement--14-october-2026).
