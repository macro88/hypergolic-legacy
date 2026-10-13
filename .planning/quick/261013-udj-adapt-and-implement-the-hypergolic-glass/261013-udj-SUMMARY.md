---
type: quick
status: complete
task: 261013-udj
---

# Hypergolic Glass implementation

Adapted the supplied orbital visual direction to the actual multi-napplet product.
The shell now has reactive dark/light palettes, bundled Barlow and JetBrains Mono,
a static planetary backdrop, square frames, clear focus/press feedback and trusted
review bands. The existing logo, retained workspace and authority remain intact.

Settings is grouped; the empty shelf has a clear opening action; focused sessions
expose overview/close controls; address failures explain the expected input and
pending lookups can be cancelled. Reviews scroll with reachable actions, and full
public keys remain readable at larger text sizes. The old Settings import cycle
is removed. Existing napplet theme recipients follow the shared palette and live
appearance changes through Kehto's established publish path.

## Verification

- TypeScript passes; 47 shell/workspace tests pass.
- Runtime TypeScript and 294 Chromium/WebKit tests pass, including live dark/light
  theme changes and the existing recipient/authority regressions.
- Android and iOS native builds, prebuilds and production Expo exports pass.
- Native UI scenarios pass on Android API 36 emulator and iPhone 17 Pro / iOS 26.5
  Simulator: empty state, address correction, grouped settings, secure input,
  workspace navigation, unsaved close warning and sample request review. Real
  bundled guest rendering and counter input were also inspected.
- Dark/light and large text pass: Android font scale 1.5 and iOS accessibility-medium.
  Screenshots and native hierarchies were captured and visually inspected.
- Native notice packaging/patch regressions pass. Original font and module licenses
  are bundled on both platforms. Attribution inventories are refreshed without
  weakening their guards.
- React Doctor's full local scan has zero findings. Numeric scoring reports 100/100.
  Aislop completes all five engines and reports 98/100, with only the previously
  selected node-forge/braces advisory exceptions. No source suppression or quality
  threshold changes were introduced. `pnpm run check` still exits at the existing
  Expo patch-version recommendation policy; audits and scoring retain their real
  nonzero results.

## Scope

The native presentation fixture uses a public identity with no signer or network
publication. These tests prove the revised UI and actual guest input on simulated
devices, not protected identity storage, signing, physical-device security or full
v1 acceptance. The owner-selected final E2E deferral is unchanged. Source remains
on mobile-revamp; source push stays owner-controlled. Private evidence and the
byte-preserved supplied handoff are captured in the shared Notes project.

See [shell appearance](../../../docs/shell-style.md) for decisions and provenance.
