# Phase 3 research — 14 October 2026

This is source inspection and planning, not a security audit or runtime acceptance. Application baseline: `050b248e2891b5be75315f9d2582cb167eec3429`, `mobile-revamp`. Research, planning and review were performed inline; no independent agent review is claimed.

## Current source and integration points

| Surface | Verified fact | Consequence for the plan |
| --- | --- | --- |
| `src/security/identity-vault.ts`, `identity-crypto.ts` | The trusted TypeScript vault reads a protected secret, copies it into an approved signing callback and clears buffers afterward; creation and nsec parsing also run in JavaScript. | Plan 01 must define the full secret boundary; Plan 02 must remove all production bridge paths for key material. |
| `src/security/trusted-identity-owner.ts` | Both ordinary event approval and Blossom upload authorization call the vault with `nostr-tools` signing callbacks. | Both routes need the native signer; migrating only relay publication would leave a secret path. |
| `src/security/identity-vault-model.ts`, `identity-metadata.ts` | Schema 1 recognizes generated/imported local identities, with one selected pubkey and unique identities. | External methods need additive metadata and recoverable migration; preserve existing data namespaces. |
| `src/security/approval-service.ts`, `src/shell/approval-lifecycle.ts` | Non-active app state pauses review and cancels approved in-flight work. | Signer-app handoff and NIP-46 authentication cannot be implemented by globally relaxing background checks. |
| `src/runtime/approval-port.ts`, native `ApprovalTransport` and `NativeApprovalAuthority` | Request ownership includes session, generation, identity, epoch, publisher and version. | Preserve those bindings when selecting a signing method and consuming its reply. |
| `src/security/signed-event.ts` | The signer result is checked against the immutable approved event and independently verified. | Reuse the check for all external results; a signer response is not a publication receipt. |
| Native identity modules and `docs/identity-storage.md` | Protected records, authenticated backup/deletion and platform limitations already have dedicated paths. | Reuse these paths and evidence; extend them without resetting accounts or weakening Simulator restrictions. |

## Owning specifications and reference implementation

NIP-01, NIP-44, NIP-46 and NIP-55 were fetched at repository revision `a79e21d90fce5465b50ef385dd368bba99ec4a0b`. The hash manifest in `03-SOURCES.json` identifies each exact input. A research pin does not silently upgrade existing NAP or NIP contracts.

NIP-46 uses distinct client, remote-signer and user identities. The user key is learned after connection. Responses need exact peer/request correlation; current specifications also describe authentication challenges, relay changes and logout. A lost reply cannot prove that a remote signature was never produced. Keep connection credentials private and destroy local connection authority on disconnect even if the peer is unavailable. [Pinned NIP-46](https://github.com/nostr-protocol/nips/blob/a79e21d90fce5465b50ef385dd368bba99ec4a0b/46.md)

NIP-55 is an Android app protocol. Persist the chosen signer identity, address subsequent requests explicitly, and distinguish refusal from app failure. Its Content Resolver prose and example disagree about where query arguments are supplied; do not guess an implementation from either alone. The proposed initial Intent profile avoids that disputed surface. [Pinned NIP-55](https://github.com/nostr-protocol/nips/blob/a79e21d90fce5465b50ef385dd368bba99ec4a0b/55.md)

NIP-44 requires the unhashed ECDH x-coordinate before its key derivation. A generic library's default ECDH hash is not automatically compatible. Use the owning vectors and negative cases when selecting a native implementation. NIP-01 requires Schnorr over secp256k1. [Pinned NIP-44](https://github.com/nostr-protocol/nips/blob/a79e21d90fce5465b50ef385dd368bba99ec4a0b/44.md), [pinned NIP-01](https://github.com/nostr-protocol/nips/blob/a79e21d90fce5465b50ef385dd368bba99ec4a0b/01.md)

Amber README and security policy were read at `85d4393d95b9ea4848896cba8d3f223df63e17eb`. Amber supports both Android app requests and NIP-46; the same product can exercise both integrations. Its policy includes encrypted account storage, permissions, approval UI and distinct incoming request paths. This is a reference for threat coverage, not evidence that Hypergolic matches Amber. No comparative audit or Amber binary execution was performed. [Amber policy](https://github.com/greenart7c3/Amber/blob/85d4393d95b9ea4848896cba8d3f223df63e17eb/SECURITY.md)

## Native implementation recommendation

Evaluate `bitcoin-core/secp256k1` as a candidate shared primitive implementation behind Android and iOS adapters. It supplies optional BIP-340 Schnorr and ECDH modules. Before adding it, choose a verified release commit, review the required modules, licensing and mobile build integration, and run vectors on both platforms. No new cryptographic primitive should be authored to avoid a dependency. [Library source](https://github.com/bitcoin-core/secp256k1)

Hardware-backed wrapping protects stored material but does not establish that secp256k1 signing occurs inside secure hardware. Android hardware support is algorithm-dependent; Apple's documented Secure Enclave signing API uses P-256. Define achievable claims separately for storage, use in memory, authorization and compromised-process resistance. [Android Keystore](https://developer.android.com/privacy-and-security/keystore), [Apple Secure Enclave](https://developer.apple.com/documentation/security/protecting-keys-with-the-secure-enclave)

## Validation Architecture

Plan 01 creates the missing native-core test driver and shared public-contract suite; subsequent plans extend them. Test real owning implementations against deterministic peers, then verify interoperable behavior separately. Every plan must have a useful vertical trace before expansion. Real protected iPhone storage and hardware authentication need targeted physical evidence; no Simulator bypass is permitted.

Inspect normal Expo exports and native bundles for retired secret-bearing APIs, but do not treat text searches as proof of memory isolation. Instrument bridge boundaries with disposable values, inspect source paths, exercise forged approvals, and separately review native memory lifetime. Unknown or skipped results remain open. The final matrix must distinguish local, NIP-46 and NIP-55 accounts on each applicable platform.
