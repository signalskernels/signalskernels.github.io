---
title: 'KEEPEM App Privacy Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: May 12, 2026

This Privacy Policy describes how the **KEEPEM** mobile application ("KEEPEM," "the App," "we," "us," "our") handles information when you use it on iOS or Android. KEEPEM is published by **Signals | Kernels LLC** ("the Company").

KEEPEM ships in four tiers — **Basic**, **Plus**, **Pro**, and **Ultra**. The Basic, Plus, and Pro tiers process every document and every query **on your device**; nothing about your scans is transmitted to us or to any third party. The Ultra tier adds an **opt-in** route to a cloud frontier model for hard queries you specifically choose to send; nothing on Ultra leaves the device by default. This policy describes those tiers, the limited data we do see, and what choices you have.

## The Short Version

- **Your documents stay on your phone on Basic, Plus, and Pro.** OCR (Basic) and the AI agent (Plus and Pro) run locally on your device. Your scans are never transmitted off the device on these tiers.
- **The cloud frontier model on KEEPEM Ultra is opt-in per query.** Nothing routes to a cloud model unless you explicitly choose to on a specific query.
- **Ultra is sold as prepaid bundles, not a subscription.** No auto-renewing monthly charge.
- **We do not train any model on your documents.** On the on-device tiers we can't — we don't have them. On Ultra, the third-party frontier-model provider runs inference under enterprise terms that prohibit training on customer content.
- **We collect only the minimum** needed to operate the App: crash reports, anonymous usage analytics, and purchase confirmations from Apple or Google.
- **You can export your vault at any time** and **delete the App to delete the vault**. There is no shadow copy on our servers.

## 1. Information KEEPEM Processes On Your Device

When you use KEEPEM, the following information is created and stored **locally on your device**:

- **Documents you capture:** photos of receipts, warranties, IDs, bills, tax forms, and any other documents you scan into the App.
- **Structured data extracted on the device:** vendor, amount, date, category, line items, expiry dates, and similar fields. On the **Basic** tier this is produced by on-device OCR. On **Plus** and **Pro** it's produced by the on-device AI agent (the KEEPEM-Plus-Model or KEEPEM-Pro-Model bundled inside the app).
- **Your queries and the agent's answers** to questions asked of your vault.
- **App settings, preferences, folder structure, and your remaining KEEPEM Ultra bundle balance** (tracked locally so the app knows how many prepaid queries you have left).

This data is stored in an encrypted vault on your device, protected by your device's secure enclave and biometric lock (Face ID, Touch ID, or Android fingerprint). **We do not have access to this data.** It is not transmitted to our servers, and it is not transmitted to any third party — except in the specific Ultra opt-in scenario described in Section 2.4.

If you uninstall the App, the on-device vault is deleted with it.

## 2. Information KEEPEM Sends Off Your Device

The following is the **complete list** of information KEEPEM transmits off your device:

### 2.1 Crash Reports and Diagnostics

If the App crashes or encounters an error, a crash report may be sent to us. Crash reports contain technical information about the error (stack traces, device model, OS version, App version). They **do not contain** the content of your documents, your queries, or the answers the agent gave you. You can disable crash reporting in the App's settings.

### 2.2 Anonymous Usage Analytics

The App collects anonymous, aggregated usage metrics: which features are opened, how often the App is used, broad performance metrics. These metrics are not tied to your identity and **do not include** document content, query content, or vault contents. You can disable analytics in the App's settings.

### 2.3 Purchase Status (Apple and Google)

If you purchase a paid KEEPEM offering — a Plus or Pro subscription (after the launch promo ends), or a KEEPEM Ultra prepaid bundle — the purchase itself is processed by **Apple (App Store)** or **Google (Google Play)** under their respective terms. We receive confirmation of the purchase from Apple or Google so the App can unlock the corresponding feature or credit your Ultra bundle balance. We do **not** receive your payment card details. Refunds, cancellations, and billing disputes for the purchase itself are handled by Apple or Google.

Your remaining Ultra bundle balance is tracked **locally on your device**; we do not maintain a server-side ledger of your remaining queries.

### 2.4 KEEPEM Ultra: Opt-In Cloud Routing

If you are on the KEEPEM Ultra tier **and** you explicitly choose to route a specific query to the cloud frontier model, that query — and the portions of your vault the agent determines are needed to answer it — are sent to our cloud routing service and from there to a third-party frontier-model provider for inference. The transmitted content is processed only to answer that query; it is **not** retained beyond the inference response, **not** used to train the third-party model under the provider's enterprise terms, and **not** correlated with your identity beyond a short-lived session.

Cloud routing on Ultra is **off by default for each query**. You see a prompt before any data leaves the device, and you can decline. If you never opt in, no document content ever leaves your device — even on Ultra.

Each Ultra cloud query consumes one credit from your prepaid bundle. When the bundle runs out, no further cloud routing occurs until you purchase another bundle.

### 2.5 Optional Cloud Sync and Sharing

If you enable cloud sync or cloud sharing (both off by default), the App connects to **your own** cloud storage account to back up your vault or share specific receipts with other people you choose. We do not operate the backup destination — your cloud storage provider does, under their own terms and privacy policy.

#### 2.5.1 Google Drive Integration

If you connect a Google account, KEEPEM uses Google Drive in two narrowly scoped ways:

- **App-data folder (`drive.appdata` scope).** KEEPEM stores a backup of your vault — your captured receipt images and the structured records the on-device agent extracts from them — in a hidden, app-specific folder that only KEEPEM can read. This folder is invisible to other apps and to Google Drive's normal file browser. It exists solely to let KEEPEM restore your vault if you reinstall the App or move to a new device.
- **User-created and user-shared files (`drive.file` scope).** When you choose to share a specific receipt or document with someone — for example, sending a receipt to an accountant or splitting a bill with a family member — KEEPEM creates that single file in your Google Drive so you (and only the people you share it with through Drive's own sharing controls) can access it. KEEPEM only sees files it created or files you explicitly opened with KEEPEM. **KEEPEM does not request access to any other files in your Drive.**

**What KEEPEM does with Drive data.** Drive is used only for (a) backup of your user-created receipt records to your own account, and (b) cloud sharing of receipts you explicitly choose to share. Drive contents are not used for any other purpose.

**What KEEPEM does not do with Drive data.**

- We **do not** sell or transfer Drive data to third parties for advertising.
- We **do not** use Drive data to train, fine-tune, or improve any AI or machine-learning model — including the on-device agent and any third-party frontier model used by KEEPEM Ultra.
- We **do not** allow humans to read Drive data, except (i) with your explicit consent for a specific support case, (ii) for security investigations, or (iii) when required to comply with applicable law. Aggregated, anonymized data may be used for internal diagnostics.
- We **do not** access Drive files outside the App-data folder or the files you explicitly shared with KEEPEM.

KEEPEM's use of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the **Limited Use** requirements.

**Retention and deletion.** Drive data persists in your Google account for as long as you keep it there. You can delete the backup or any individual shared file at any time:

- In the App: revoke Google Drive access in **Settings → Cloud → Disconnect**. KEEPEM will delete the App-data folder it created and stop syncing.
- In your Google account: visit [myaccount.google.com/permissions](https://myaccount.google.com/permissions) to revoke KEEPEM's access entirely, or go to Drive to delete individual files KEEPEM created on your behalf.
- Uninstalling the App on your device does **not** automatically delete Drive content; use the in-app disconnect option or revoke access in your Google account.

#### 2.5.2 iCloud Drive (iOS)

If you enable iCloud sync on iOS, KEEPEM backs up your encrypted vault to your own iCloud Drive account. The vault is encrypted with a key derived from your device; we cannot read its contents. Apple operates iCloud under its own terms and privacy policy. You can disable iCloud sync in the App's settings or in iOS Settings → Apple ID → iCloud.

### 2.6 Support Communications

If you contact us by email or through the in-app "Send Feedback" channel, we receive whatever you choose to send us, including the email address you write from. We use this information solely to respond to you and improve the App.

## 3. What We Do Not Do

- We **do not** train any AI model on your documents, queries, or answers.
- We **do not** sell your personal information.
- We **do not** share your personal information with advertisers.
- We **do not** profile you or build a marketing audience from your vault.
- We **do not** retain document content on our servers — including Ultra cloud-routed content, which is processed only for the inference response and discarded immediately after.
- We **do not** read your vault on the Basic, Plus, or Pro tiers; we **cannot**, because your vault is not on our servers.
- We **do not** auto-renew Ultra. Ultra is prepaid bundles — when a bundle runs out, it stops. You can choose whether to buy another.

## 4. Permissions the App Requests

KEEPEM requests the following device permissions, and uses them only as described:

- **Camera:** to capture documents you choose to add to your vault. Images are processed on the device; nothing is sent to our servers (except in the Ultra opt-in scenario in Section 2.4).
- **Photo library:** to import existing photos of documents you choose. Same on-device processing.
- **Microphone:** for voice capture (e.g. "I spent forty dollars at Shell on the way home"). Voice is transcribed on the device.
- **Biometric (Face ID / Touch ID / fingerprint):** to unlock the encrypted vault.
- **Notifications:** for reminders you set (e.g. warranty expiry, document due dates). You can disable this.
- **Local network / internet:** for app updates, crash reports, purchase verification with Apple or Google, and — only if you opt in — KEEPEM Ultra cloud routing or cloud sync.

You can revoke any of these permissions in your device's settings at any time.

## 5. Data Retention

- **On-device data** is retained on your device until you delete it from the App or uninstall the App.
- **Crash reports** are retained for up to 90 days for debugging purposes, then deleted.
- **Anonymous analytics** are retained in aggregated form for up to 24 months.
- **KEEPEM Ultra cloud-routed query content** is processed only for the duration of the inference response and is not retained beyond it. Inference-response logging (if any) does not include document content.
- **Ultra bundle balances** are tracked on your device. Apple or Google retain your purchase receipts under their own retention policies.
- **Support communications** are retained for as long as needed to resolve your inquiry and for a reasonable period thereafter for our records.

## 6. Your Rights and Choices

Depending on where you live, you may have rights under the GDPR, the California Consumer Privacy Act (CCPA), or similar laws, including the right to:

- **Access** the personal information we hold about you.
- **Correct** inaccurate personal information.
- **Delete** your personal information.
- **Export** your data in a portable format.
- **Object to** or **restrict** certain processing.
- **Withdraw consent** for optional processing (analytics, Ultra cloud routing, cloud sync) at any time.

Because most of your data is on your device, most of these rights are exercised directly in the App: you can view, edit, export, and delete every document and every field at any time. For data that does reach us (crash reports, support correspondence, purchase confirmations), contact us at the address below and we will respond within 30 days.

## 7. Children's Privacy

KEEPEM is not directed to children under the age of 13 (or under 16 in the EEA / UK, where applicable). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.

## 8. Security

The on-device vault is encrypted at rest and protected by your device's secure enclave and biometric authentication. Crash reports and analytics are transmitted over TLS. The KEEPEM Ultra cloud-routing path is transmitted over TLS to a third-party frontier-model provider under enterprise terms that prohibit training on your content.

No security measure is perfect. If you suspect your device has been compromised, lock or wipe it through your device's "Find My iPhone" / "Find My Device" features; the vault is bound to the device and cannot be unlocked elsewhere.

## 9. International Users

KEEPEM is operated from the United States. If you use the App from outside the United States, you understand that the limited data we receive (crash reports, analytics, purchase confirmations, opt-in Ultra cloud-routing content) is processed in the United States. The contents of your vault remain on your device.

## 10. Third Parties

The following third parties are involved in operating the App:

- **Apple, Inc.** — App Store distribution, in-app purchase processing for iOS users (including KEEPEM Ultra bundles), optional iCloud sync.
- **Google LLC** — Google Play distribution, in-app purchase processing for Android users (including KEEPEM Ultra bundles), and optional Google Drive integration scoped to KEEPEM's App-data folder and files you explicitly share with KEEPEM (see Section 2.5.1).
- **A third-party frontier-model provider** — used only for KEEPEM Ultra opt-in cloud routing. Inference runs under enterprise terms that prohibit training on customer content.
- **A crash-reporting provider** — receives crash stack traces and device diagnostics; does not receive document content.
- **An analytics provider** — receives anonymous aggregated usage metrics; does not receive document content.

We update the list of third parties in this policy when they change.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be announced in the App and, where required, by email if you have provided one. The "Last updated" date at the top reflects the most recent revision. Continued use of the App after a change indicates acceptance of the revised policy.

## 12. Contact Us

If you have questions about this Privacy Policy or about how KEEPEM handles your data, contact:

- **Signals | Kernels LLC**
- Email: [support@signalskernels.com](mailto:support@signalskernels.com)
- Website: [https://signalskernels.com](https://signalskernels.com)

For App Store / Google Play listing purposes, the canonical URL of this policy is `https://signalskernels.com/keepem-app-privacy`.
