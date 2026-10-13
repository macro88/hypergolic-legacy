---
type: quick
status: complete
task: 261013-udj
---

# Hypergolic Glass adaptation

Implement the revised visual direction across the native shell, improving its UX
for the actual multi-napplet product. The handoff is reference material; the owner's
request explicitly permits improvements over its pixel-fidelity instruction.

## Design decision

Orbital light is the signature: a quiet blue-black sky and a single ignition line.
Use square, fine-bordered surfaces, Barlow display/body and JetBrains Mono data.
Dark palette: void #080F17, panel #111D29, raised #1C2B3B, ink #EEF3F7,
muted #AFBDCB, ignition #F5A04B. System light appearance uses warm mineral colors
with dark ink and a deeper orange for contrast. Keep the supplied product logo.
Primary buttons use ink; orange identifies focus, progress, and trusted review.

The unchanged two-column live overview retains opening order and gestures. Its
frame corners connect it to the design; the empty shelf gets an inviting, useful
entry state. Group Settings into identity, connections, permissions and developer
tools. Keep address opening immediately reachable. Trusted requests receive an
edge-to-edge band, readable content and reachable actions.

## Tasks

1. Implement theme, bundled fonts, native backdrop and shared focus/frame/request
   components. Apply tokens across all shell-owned surfaces, including runtime
   loading/recovery overlays. Verify dark/light text contrast and typecheck.
2. Improve workspace/empty state, Settings navigation, opening feedback and trusted
   sheets. Retain identity, capability policy, native authority, guest documents,
   ordering, lifecycle and close behavior. Add real UI behavior regressions.
3. Run scoped shared tests, complete quality reports and native exports. Inspect
   Android emulator and iOS Simulator presentation, navigation, dark/light, text
   scaling, sheets and keyboard flows using faithful UI fixtures where protected
   identity cannot run. Record fixture limits explicitly. Review the final diff,
   update architecture/development/state and capture evidence in the private vault.

## Completion evidence

- All shell screens derive from the same reactive theme, fonts and control rules.
- The implemented UI visually reflects the provided orbital/glass reference.
- Dark/light, large text and reduced motion remain usable; critical actions and
  keyboard inputs are reachable. Background artwork never receives input.
- Existing multi-napplet switching, overview, close checks and persisted workspace
  behavior remain intact. No raw keys, fake verification steps or new trust claims.
- Scoped tests and both exports pass; React Doctor and aislop each report 100/100
  with no new suppression. Existing dependency exceptions remain explicitly scoped.
- Native screenshots and input evidence cover the revised flow on both platforms.

## Working boundaries

Existing mobile-revamp checkout at 311bd06. Two pre-existing untracked planning
files are preserved. Run GSD inline under its no-automatic-subagent adapter.
Source publication remains owner-controlled. The current task changes presentation
and UX only; deferred full-product E2E and physical security acceptance stay open.
