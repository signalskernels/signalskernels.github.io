---
title: 'KEEPEM App Privacy Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: May 12, 2026

This Privacy Policy describes how the **KEEPEM** mobile application ("KEEPEM," "the App," "we," "us," "our") handles information when you use it on iOS or Android. KEEPEM is published by **Signals | Kernels LLC** ("the Company").

KEEPEM is built on a simple architectural commitment: **the AI agent runs on your device**, and **your documents stay on your device** unless you explicitly choose otherwise. This policy describes what that means in practice, what limited data we do see, and what choices you have.

## The Short Version

- **Your documents never leave your phone** on the KEEPEM Plus and KEEPEM Pro tiers. The AI model that reads, classifies, and answers questions about them runs locally on your device.
- **The cloud frontier model on KEEPEM Ultra is opt-in per query.** Nothing routes to a cloud model unless you ask it to.
- **We do not train any model on your documents.** We cannot — we do not have them.
- **We collect only the minimum** needed to operate the App: crash reports, anonymous usage analytics, and subscription status from Apple or Google.
- **You can export your vault at any time** and **delete the App to delete the vault**. There is no shadow copy on our servers.

## 1. Information KEEPEM Processes On Your Device

When you use KEEPEM, the following information is created and stored **locally on your device**:

- **Documents you capture:** photos of receipts, warranties, IDs, bills, tax forms, and any other documents you scan into the App.
- **Structured data extracted by the on-device AI agent:** vendor, amount, date, category, line items, expiry dates, and similar fields the agent parses from each document.
- **Your queries and the agent's answers** to questions asked of your vault.
- **App settings, preferences, and folder structure** you create.

This data is stored in an encrypted vault on your device, protected by your device's secure enclave and biometric lock (Face ID, Touch ID, or Android fingerprint). **We do not have access to this data.** It is not transmitted to our servers, and it is not transmitted to any third party, under the Plus and Pro tiers.

If you uninstall the App, the on-device vault is deleted with it.

## 2. Information KEEPEM Sends Off Your Device

The following is the **complete list** of information KEEPEM transmits off your device:

### 2.1 Crash Reports and Diagnostics

If the App crashes or encounters an error, a crash report may be sent to us. Crash reports contain technical information about the error (stack traces, device model, OS version, App version). They **do not contain** the content of your documents, your queries, or the answers the agent gave you. You can disable crash reporting in the App's settings.

### 2.2 Anonymous Usage Analytics

The App collects anonymous, aggregated usage metrics: which features are opened, how often the App is used, broad performance metrics. These metrics are not tied to your identity and **do not include** document content, query content, or vault contents. You can disable analytics in the App's settings.

### 2.3 Subscription Status (Apple and Google)

If you purchase KEEPEM Ultra or any other paid subscription, the purchase is processed by **Apple (App Store)** or **Google (Google Play)** under their respective terms. We receive a signal from Apple or Google indicating that your account is in good standing on the relevant tier. We do not receive your payment card details. Refund, cancellation, and billing inquiries for the subscription itself are handled by Apple or Google.

### 2.4 KEEPEM Ultra: Opt-In Cloud Routing

If you are on the KEEPEM Ultra tier **and** you explicitly choose to route a specific query to the cloud frontier model, that query — and the portions of your vault the agent determines are needed to answer it — are sent to our cloud routing service and from there to a third-party frontier-model provider for inference. The transmitted content is processed only to answer that query; it is **not** retained beyond the inference response, **not** used to train the third-party model under the provider's enterprise terms, and **not** correlated with your identity beyond a short-lived session.

Cloud routing on Ultra is **off by default for each query**. You see a prompt before any data leaves the device, and you can decline. If you never opt in, no document content ever leaves your device.

### 2.5 Optional Cloud Sync

If you enable cloud sync (currently disabled by default), the App backs up your encrypted vault to your own cloud storage account (iCloud Drive on iOS, Google Drive on Android, or a backup destination you specify). The vault is encrypted with a key derived from your device; we cannot read its contents. We do not operate the backup destination — your cloud storage provider does, under their own terms and privacy policy.

### 2.6 Support Communications

If you contact us by email or through the in-app "Send Feedback" channel, we receive whatever you choose to send us, including the email address you write from. We use this information solely to respond to you and improve the App.

## 3. What We Do Not Do

- We **do not** train any AI model on your documents, queries, or answers.
- We **do not** sell your personal information.
- We **do not** share your personal information with advertisers.
- We **do not** profile you or build a marketing audience from your vault.
- We **do not** retain document content on our servers under any tier.
- We **do not** read your vault, and on the Plus and Pro tiers we **cannot** — your vault is not on our servers.

## 4. Permissions the App Requests

KEEPEM requests the following device permissions, and uses them only as described:

- **Camera:** to capture documents you choose to add to your vault. Images are processed on the device; nothing is sent to our servers.
- **Photo library:** to import existing photos of documents you choose. Same on-device processing.
- **Microphone:** for voice capture (e.g. "I spent forty dollars at Shell on the way home"). Voice is transcribed on the device.
- **Biometric (Face ID / Touch ID / fingerprint):** to unlock the encrypted vault.
- **Notifications:** for reminders you set (e.g. warranty expiry, document due dates). You can disable this.
- **Local network / internet:** for app updates, crash reports, subscription status checks, and (if you opt in) KEEPEM Ultra cloud routing or cloud sync.

You can revoke any of these permissions in your device's settings at any time.

## 5. Data Retention

- **On-device data** is retained on your device until you delete it from the App or uninstall the App.
- **Crash reports** are retained for up to 90 days for debugging purposes, then deleted.
- **Anonymous analytics** are retained in aggregated form for up to 24 months.
- **KEEPEM Ultra cloud-routed query content** is processed only for the duration of the inference response and is not retained beyond it.
- **Support communications** are retained for as long as needed to resolve your inquiry and for a reasonable period thereafter for our records.

## 6. Your Rights and Choices

Depending on where you live, you may have rights under the GDPR, the California Consumer Privacy Act (CCPA), or similar laws, including the right to:

- **Access** the personal information we hold about you.
- **Correct** inaccurate personal information.
- **Delete** your personal information.
- **Export** your data in a portable format.
- **Object to** or **restrict** certain processing.
- **Withdraw consent** for optional processing (analytics, cloud routing, cloud sync) at any time.

Because most of your data is on your device, most of these rights are exercised directly in the App: you can view, edit, export, and delete every document and every field at any time. For data that does reach us (crash reports, support correspondence, subscription status), contact us at the address below and we will respond within 30 days.

## 7. Children's Privacy

KEEPEM is not directed to children under the age of 13 (or under 16 in the EEA / UK, where applicable). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.

## 8. Security

The on-device vault is encrypted at rest and protected by your device's secure enclave and biometric authentication. Crash reports and analytics are transmitted over TLS. The KEEPEM Ultra cloud routing path is transmitted over TLS to a third-party frontier-model provider under enterprise terms that prohibit training on your content.

No security measure is perfect. If you suspect your device has been compromised, lock or wipe it through your device's "Find My iPhone" / "Find My Device" features; the vault is bound to the device and cannot be unlocked elsewhere.

## 9. International Users

KEEPEM is operated from the United States. If you use the App from outside the United States, you understand that the limited data we receive (crash reports, analytics, subscription status, opt-in cloud routing) is processed in the United States. Your documents themselves remain on your device.

## 10. Third Parties

The following third parties are involved in operating the App:

- **Apple, Inc.** — App Store distribution, in-app purchase processing for iOS users, optional iCloud sync.
- **Google LLC** — Google Play distribution, in-app purchase processing for Android users, optional Google Drive sync.
- **A third-party frontier-model provider** — used only for KEEPEM Ultra opt-in cloud routing. Inference runs under enterprise terms that prohibit training on customer content.
- **A crash-reporting provider** — receives crash stack traces and device diagnostics; does not receive document content.
- **An analytics provider** — receives anonymous aggregated usage metrics; does not receive document content.

We update the list of third parties in this policy when they change.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be announced in the App and, where required, by email if you have provided one. The "Last updated" date at the top reflects the most recent revision. Continued use of the App after a change indicates acceptance of the revised policy.

## 12. Contact Us

If you have questions about this Privacy Policy or about how KEEPEM handles your data, contact:

- **Signals | Kernels LLC**
- Email: [4alltheweb@gmail.com](mailto:4alltheweb@gmail.com)
- Website: [https://signalskernels.com](https://signalskernels.com)

For App Store / Google Play listing purposes, the canonical URL of this policy is `https://signalskernels.com/keepem-app-privacy`.
