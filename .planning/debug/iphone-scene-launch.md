---
status: resolved
trigger: "attempts to load and crashes - no UI presented"
created: 2026-10-29
updated: 2026-10-29
---

# iPhone launch requires scene lifecycle

## Symptoms

- Expected: the ordinary disposable app opens its identity entry or shell.
- Actual: the owner reports a launch attempt followed by termination, without UI.
- Reproduction: open the installed test app manually from the Home Screen.
- Timeline: first manual launch of the current iPhone package; no signer started.

## Current Focus

confirmed: Missing UIScene adoption triggers UIKit enforcement on iOS 27.
next_action: Continue signing acceptance after bounded native input/Home control passes; broader lifecycle and final quality remain open.

## Evidence

- Two crash reports match the installed app identifier and executable UUID.
- Both terminate with SIGTRAP on the main thread in
  `___UIApplicationEvaluateRuntimeIssueForNoSceneLifecycleAdoption_block_invoke`.
- The actual package lacks `UIApplicationSceneManifest`; its AppDelegate creates
  a frame-owned window and has no scene delegate.
- Apple's scene migration guidance documents this launch requirement. Installed
  UIKit headers preserve application-wide lifecycle notifications after adoption.
- The installed Expo app delegate still forwards legacy lifecycle methods to its
  subscribers. Scene callbacks must preserve that forwarding without posting
  duplicate UIApplication notifications.

## Reasoning checkpoint

The crash location and package configuration support the same specific mechanism.
The repair gives UIKit a real scene configuration and scene-owned window,
while retaining the ordinary React Native factory and process identity owner.
It must preserve cold and warm links, Expo subscriber events and native signing
cancellation. A plist-only change or SDK downgrade would not repair that contract.

Falsification: a correctly configured scene-owned build still traps in the same
UIKit evaluator. Later startup or lifecycle defects remain possible until tested.

## Resolution

root_cause: The ordinary generated iOS host retains the legacy app lifecycle.
fix: Durable Expo scene plugin with one retained React runtime, scene replacement,
  link forwarding and existing Expo subscriber delivery.
verification: Twelve scene-generation checks and four codec-plugin checks pass.
  TypeScript, native Release compilation, actual delegate/manifest packaging and
  independent source/product review pass. The reviewed same-ID device update
  opens the shell and UX Lab; root and reviewer inspect its screenshot.
  All 108 retained app metadata records match. The owner reports counter 2 after
  Home/reopen and a second tap, without a crash as asked. No new screenshot or
  process observation accompanies this report. The owner also confirms both
  relay lists contain only nos.lol. The later manual transfer detour is cancelled;
  its listener is closed and no peer started. Separate device authorization
  unblocks real XCTest observation followed by verified taps, short typing/clearing
  and Home/reopen. Signing cancellation and broader lifecycle remain unverified.
  See iphone-ui-automation.md for the current investigation.

## Scope

Investigation uses Sol 6.1 generic agents with the GSD debugger role; typed-agent
guarantees are not claimed. Root owns device/build operations and private evidence.
Prior package and launch-command receipts remain unchanged. Phase 2 acceptance,
full Phase 3 acceptance and quality gates remain open.

References: [Apple migration guidance](https://developer.apple.com/documentation/Technotes/tn3187-Migrating-to-the-UIKit-scene-based-life-cycle)
and [lifecycle transition guidance](https://developer.apple.com/documentation/uikit/transitioning-to-the-uikit-scene-based-life-cycle).
