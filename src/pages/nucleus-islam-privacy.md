---
title: 'Nucleus Islam App Privacy Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: August 22, 2026

This Privacy Policy describes how the **Nucleus Islam** mobile application ("the App," "we," "us," "our") handles information. Nucleus Islam is published by **Signals Kernels AI LLC** ("the Company") and delivers Islamic education and mentorship content taught by its instructor.

## The Short Version

- **We collect the minimum an account needs:** your email address, a password (held by Google Firebase as a salted hash — we never see it), and an optional display name.
- **We store your learning progress** — which course stations you have completed and how many answers each checkpoint took — so your place on the path follows your account across devices.
- **We use no analytics or crash-reporting SDKs.** No advertising, no ad identifiers, no tracking.
- **No sensitive permissions.** The App requests Internet access only — no camera, microphone, location, or contacts.
- **Your quiz answers are not recorded.** Only the count of answers a checkpoint took to pass is stored, never which options you chose.
- **Lesson audio is streamed** from our own server; like any web request, that server sees standard connection metadata.
- **We do not sell or share your personal information** with advertisers or data brokers, ever.

## 1. Information We Collect

### 1.1 Account Information

When you create an account, we collect your **email address** and a **password**, and optionally a **display name**. Authentication is provided by Google Firebase Authentication; your password is stored by Google as a salted hash and is never visible to us.

### 1.2 Learning Progress

As you study, the App stores your **progress** in our database (Google Cloud Firestore), keyed to your account: which stations of a course you have completed, and for each checkpoint quiz, the number of answers it took you to master it. Individual quiz responses are not recorded. Access rules restrict every progress record to the signed-in account that owns it.

### 1.3 Content Streaming

Guided lessons stream narration audio from a server we operate (`ni.signalskernels.com`, fronted by Cloudflare). As with any web request, that server and Cloudflare observe standard network metadata — IP address, user agent, and the files requested. We use this only to serve the audio; copies of the audio also ship inside the App and play offline without any request.

### 1.4 On Your Device Only

Private lesson notes and bookmarks in the current release are stored **only on your device** and are not transmitted to us. Uninstalling the App deletes them.

### 1.5 Support Communications

If you contact us by email, we receive whatever you choose to send, including the address you write from. We use it solely to respond to you.

## 2. How We Use Information

- To sign you in and keep your account secure.
- To save your place on a course and restore it on any device you sign in from.
- To operate, maintain, and improve the App and its content delivery.
- To respond to support requests.

We do **not** use your information for advertising, we do **not** sell it, and we do **not** train any AI model on it.

## 3. What We Do Not Do

- We **do not** use analytics SDKs, crash-reporting SDKs, or advertising SDKs.
- We **do not** collect your location. Prayer times shown in the App are not derived from device location in this release.
- We **do not** request access to your camera, microphone, photos, or contacts.
- We **do not** sell, rent, or share personal information with third parties for their own purposes.
- We **do not** knowingly profile you or build marketing audiences.

## 4. Permissions the App Requests

- **Internet:** to sign in, sync your progress, and stream lesson audio. That is the only permission the App requests.

## 5. Data Retention and Deletion

- **Account and progress data** are retained until you ask us to delete them.
- **To delete your account and all associated progress**, email us at the address below from the account's email address; we will complete the deletion within 30 days and confirm.
- **Uninstalling the App** removes all on-device data (notes, bookmarks, cached audio) but does not delete your account — email us for that.
- **Support communications** are retained for as long as needed to resolve your inquiry and a reasonable period thereafter.
- **Server access logs** for audio streaming are routine, short-lived operational logs.

## 6. Your Rights and Choices

Depending on where you live, you may have rights under the GDPR, the California Consumer Privacy Act (CCPA), or similar laws, including the right to access, correct, delete, export, and object to or restrict processing. Contact us at the address below and we will respond within 30 days. You can also review and correct your display name and email directly in the App once account settings ship; until then, email us.

## 7. Children's Privacy

Nucleus Islam is not directed to children under 13 (or under 16 in the EEA / UK, where applicable). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.

## 8. Security

Account credentials are handled by Google Firebase Authentication. Progress data is stored in Google Cloud Firestore behind access rules that restrict every record to the account that owns it. All traffic between the App and our services uses TLS. No security measure is perfect; if you suspect your account is compromised, contact us and we will help you secure it.

## 9. International Users

The App is operated from the United States. Account and progress data are stored on Google Cloud infrastructure in the United States. Audio streaming is served through Cloudflare's global network.

## 10. Third Parties

The following third parties are involved in operating the App:

- **Google LLC** — provides Firebase Authentication (sign-in) and Cloud Firestore (progress storage), and distributes the App through Google Play, each under Google's own terms.
- **Cloudflare, Inc.** — fronts our audio-streaming server and observes standard request metadata in doing so.

We use **no** analytics provider and **no** advertising provider. We update this list when the third parties change.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be announced in the App and, where required, by email if you have provided one. The "Last updated" date at the top reflects the most recent revision.

## 12. Contact Us

If you have questions about this Privacy Policy or about how Nucleus Islam handles your data, contact:

- **Signals Kernels AI LLC**
- Email: [support@signalskernels.com](mailto:support@signalskernels.com)
- Website: [https://signalskernels.com](https://signalskernels.com)

For Google Play listing purposes, the canonical URL of this policy is `https://signalskernels.com/nucleus-islam-privacy/`.
