---
phase: "03"
slug: external-signing
status: draft
shadcn_initialized: false
preset: none
created: 2026-10-14
---

# Phase 3 UI contract

Prepared inline from the selected product decisions and existing native shell. No new visual design or independent UI checker pass is claimed.

## Design System

Tool: none. Reuse the native shell system in `docs/shell-style.md`, `src/shell/theme.ts` and `palette.ts`: Barlow, JetBrains Mono, system appearance, white light surfaces, existing dark colors and generous touch targets. Keep the loaded napplet borderless, its centered title menu, framed overview and inset navigation handles. Native signing/import surfaces must follow the same readable type and colors without moving secrets into React Native props.

## Flow

Trusted Settings offers Connect signer and an account's Signing method. A method change preserves the npub and saved data, explicitly confirms cancellation of pending work, advances the native owner generation and restarts affected sessions. Cancel preserves everything. Show both the selected method and connection availability. Selecting an external method does not erase a local key copy; explain that fact and leave deletion to a separate authenticated flow.

Native import owns secret text entry, paste handling and validation. Neither React state nor accessibility, debug logs or events may export entered secrets. Native review shows the requester, account, action, exact event details and destinations with Approve once and Reject. The selected signer is visible. External approval may follow; do not conceal this from the user.

## Copywriting Contract

| State | Proposed copy |
| --- | --- |
| Connect | Connect remote signer |
| Waiting | Waiting for your signer… |
| Unavailable | Your signer is unavailable. Reconnect it or choose a signing method. |
| Rejected | Your signer declined this request. |
| Expired | This request expired. Review a new request to try again. |
| Method change | Switch signing method? Pending requests will be cancelled. Your identity and saved data stay the same. |
| Existing local copy | A local key copy is still stored on this device. Selecting another signer does not delete it. |

## UI Considerations

| Category | Elements | Required coverage |
| --- | --- | --- |
| Empty / one / many | Accounts and signing methods | Local-only, external-only and linked methods remain distinguishable and selectable. |
| Loading / error / partial | Connection, authentication, signature, publication | State which stage failed; a signature must not be shown as published. |
| Long text / overflow | URLs, npubs, event tags, signer names | Scroll exact details; keep actions visible at large text sizes. Never truncate security identity into ambiguity. |
| Lifecycle | App handoff and auth URL return | Show pending/cancelled/expired status; no unexpected automatic retry or approval. |
| Accessibility | Native review and method controls | VoiceOver/TalkBack describe the requester and action without exposing secret entry or backup text. |

## Review

All items are planned verification obligations, not UI test passes. Preserve existing design; review native screenshots and actual input on both platforms during implementation.
