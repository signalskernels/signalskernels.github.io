---
title: 'KEEPEM App Privacy Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: August 15, 2026

This Privacy Policy describes how the **KEEPEM** mobile application ("KEEPEM," "the App," "we," "us," "our") handles information. KEEPEM is published by **Signals Kernels AI LLC** ("the Company").

KEEPEM is a **local-first, on-device** document vault. The Basic, Plus, and Pro tiers process every document and every query **entirely on your device** — nothing about your scans is transmitted to us or to any third party. There is **no KEEPEM cloud** that receives or stores your documents.

## The Short Version

- **Your documents stay on your phone.** OCR (Basic) and the AI agent (Plus and Pro) run locally on your device. Your scans are never transmitted off the device.
- **We operate no servers that receive or store your documents,** and we cannot read your vault.
- **We use no analytics or crash-reporting SDKs.** No third-party analytics, no Crashlytics, no Sentry. Diagnostic logs for failed steps are stored locally and shown only to you, in the App.
- **We do not train any model on your documents.** The on-device tiers run locally; we never receive your content.
- **Optional backup and sharing go to _your own Google Drive_,** encrypted on your device before upload. We are not the backup destination and cannot read the vault contents.
- **Paid access is verified server-side.** The Android App sends an opaque Google Play purchase token and product identifier to our Cloudflare-hosted verification endpoint, which checks status and expiry with Google Play. No document content is included.
- **You can export your vault and delete the App to delete the vault.** There is no shadow copy on our servers.

## 1. Information KEEPEM Processes On Your Device

When you use KEEPEM, the following information is created and stored **locally on your device**:

- **Documents you capture:** photos of receipts, warranties, IDs, bills, tax forms, and any other documents you scan into the App.
- **Structured data extracted on the device:** vendor, amount, date, category, line items, expiry dates, and similar fields. On **Basic** this is produced by on-device OCR. On **Plus** and **Pro** it is produced by a public Gemma model downloaded during setup and run locally.
- **Your queries and the agent's answers** to questions asked of your vault.
- **App settings, preferences, and folder structure.**

This data is stored in an encrypted vault on your device. A random vault key is wrapped by a PIN-derived key (PBKDF2-HMAC-SHA256, 600,000 iterations) and may also be protected by the device Keystore when biometric unlock is enabled. The database uses SQLCipher and files use AES-256-GCM. **We do not have access to this data.** It is not transmitted to our servers and is not transmitted to any third party, except in the optional, user-initiated backup/sharing scenarios in Section 2.

If you uninstall the App, the on-device vault is deleted with it.

## 2. Information KEEPEM Sends Off Your Device

KEEPEM sends nothing off your device except the limited items below.

### 2.1 Google Play Subscription Verification

If you subscribe to **Plus** or **Pro** on Android, Google Play processes the purchase under its terms. The App sends the Google Play product identifier, store source, and opaque purchase token to a Signals Kernels endpoint hosted on Cloudflare Workers. That endpoint asks the Google Play Android Publisher API whether the subscription is authentic, active, and when it expires. It processes the token transiently and does not store it in an application database or associate it with a KEEPEM account. Cloudflare and Google may process standard network and service logs under their own terms.

No receipt images, OCR text, extracted document fields, voice notes, prompts, or AI responses are included. We do **not** receive your payment card details. Refunds, cancellations, and billing disputes are handled by Google Play.

### 2.2 Optional Cloud Backup and Sharing (to your own account)

Cloud backup and cloud sharing are **off by default**. If you enable them, the Android App connects to **your own Google Drive** account to back up your vault or share specific documents with people you choose. We do not operate the backup destination — Google does, under its own terms and privacy policy. Backups are encrypted on your device before they upload.

#### 2.2.1 Google Drive Integration

If you connect a Google account, KEEPEM uses Google Drive in two narrowly scoped ways:

- **App-data folder (`drive.appdata` scope).** KEEPEM stores an encrypted backup of your vault in a hidden, app-specific folder that only KEEPEM can read. This folder is invisible to other apps and to Google Drive's normal file browser. It exists solely to let you restore your vault if you reinstall the App or move to a new device.
- **User-shared files (`drive.file` scope).** When you choose to share a specific document — for example, sending a receipt to an accountant — KEEPEM creates that single file in your Google Drive so you (and only the people you share it with through Drive's own controls) can access it. KEEPEM only sees files it created or files you explicitly opened with KEEPEM. **KEEPEM does not request access to any other files in your Drive.**

**What KEEPEM does not do with Drive data.**

- We **do not** sell or transfer Drive data to third parties for advertising.
- We **do not** use Drive data to train, fine-tune, or improve any AI or machine-learning model.
- We **do not** allow humans to read Drive data, except (i) with your explicit consent for a specific support case, (ii) for security investigations, or (iii) when required by applicable law.
- We **do not** access Drive files outside the app-data folder or the files you explicitly shared with KEEPEM.

KEEPEM's use of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the **Limited Use** requirements.

**Retention and deletion.** Drive data persists in your Google account for as long as you keep it there. Disconnecting in **Settings → Backup** stops future KEEPEM backup and signs the App out; it does **not** delete an existing backup. You can revoke KEEPEM's access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions) and remove KEEPEM data or shared files from your Google Drive account. Uninstalling the App does **not** automatically delete Drive content.

#### 2.2.2 iCloud

iCloud backup is not active in the Android release covered by this update. The policy will be revised before an iOS backup implementation ships.

### 2.3 Support Communications

If you contact us by email or through the in-app "Send Feedback" channel, we receive whatever you choose to send us, including the email address you write from. We use this solely to respond to you and improve the App.

## 3. What We Do Not Do

- We **do not** use analytics SDKs or crash-reporting SDKs. Diagnostics are stored locally only.
- We **do not** train any AI model on your documents, queries, or answers.
- We **do not** sell your personal information or share it with advertisers.
- We **do not** profile you or build a marketing audience from your vault.
- We **do not** retain document content on our servers — we operate no server that receives it.
- We **do not** read your vault; we **cannot**, because your vault is not on our servers.

## 4. Permissions the App Requests

KEEPEM requests the following device permissions, used only as described:

- **Camera:** to capture documents you choose to add to your vault. Images are processed on the device.
- **Photo library:** to import existing photos of documents you choose. Same on-device processing.
- **Microphone:** for voice notes, transcribed on the device by the platform speech recognizer.
- **Biometric (Face ID / Touch ID / fingerprint):** to unlock the encrypted vault.
- **Notifications:** for model-download progress and any reminders you set. You can disable this.
- **Internet:** to download the on-device AI model once, verify purchases with Apple or Google, and — only if you opt in — back up or share to your own cloud account.

You can revoke any of these permissions in your device's settings at any time.

## 5. Data Retention

- **On-device data** is retained on your device until you delete it in the App or uninstall the App.
- **We retain no analytics or crash data**, because we collect none.
- **Purchase receipts** are retained by Apple or Google under their own policies; we keep only the entitlement state needed to unlock your tier.
- **Backups in your own Google Drive** persist until you delete them; you control them in your own account.
- **Support communications** are retained for as long as needed to resolve your inquiry and a reasonable period thereafter.

## 6. Your Rights and Choices

Depending on where you live, you may have rights under the GDPR, the California Consumer Privacy Act (CCPA), or similar laws, including the right to access, correct, delete, export, and object to or restrict processing, and to withdraw consent for optional processing (cloud backup or sharing) at any time.

Because nearly all of your data is on your device, most of these rights are exercised directly in the App: you can view, edit, export, and delete every document and field at any time. For the limited data that reaches us (support correspondence, purchase confirmations), contact us at the address below and we will respond within 30 days.

## 7. Children's Privacy

KEEPEM is not directed to children under 13 (or under 16 in the EEA / UK, where applicable). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.

## 8. Security

The on-device vault is encrypted at rest and protected by your PIN or optional biometric authentication. Optional backups are encrypted on your device before upload and transmitted over TLS to your own Google Drive account. KEEPEM uses standard AES-256 cryptography (declared as mass-market exempt in the applicable store submission).

No security measure is perfect. If you suspect your device has been compromised, lock or wipe it through your device's "Find My" features; the vault is bound to the device and cannot be unlocked elsewhere.

## 9. International Users

KEEPEM is operated from the United States. The contents of your vault remain on your device wherever you are. Support correspondence is processed in the United States. Subscription verification may be processed by Cloudflare and Google in regions where they operate.

## 10. Third Parties

The following third parties are involved in operating the App:

- **Google LLC** — Google Play distribution and subscription status, plus optional Google Drive integration scoped to KEEPEM's app-data folder and files you explicitly share with KEEPEM (see Section 2.2.1).
- **Cloudflare, Inc.** — hosts the stateless subscription-verification endpoint. It receives the opaque Play token and product ID but no document content.
- **Hugging Face** — the on-device AI model weights are downloaded once from Hugging Face's CDN. Only standard HTTP metadata (IP, User-Agent) is observed during that download; no personal data is sent.

We use **no** analytics provider and **no** crash-reporting provider. We update this list when the third parties change.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be announced in the App and, where required, by email if you have provided one. The "Last updated" date at the top reflects the most recent revision.

## 12. Contact Us

If you have questions about this Privacy Policy or about how KEEPEM handles your data, contact:

- **Signals Kernels AI LLC**
- Email: [support@signalskernels.com](mailto:support@signalskernels.com)
- Website: [https://signalskernels.com](https://signalskernels.com)

For App Store / Google Play listing purposes, the canonical URL of this policy is `https://signalskernels.com/keepem-app-privacy/`.
