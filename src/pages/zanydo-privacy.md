---
title: 'Privacy Policy — Zanydo'
layout: '~/layouts/PrivacyLayout.astro'
---

**Effective date:** 5 October 2026

Zanydo is an English learning game for children aged 4–9, published by
**Signals Kernels AI LLC**. Your child's pictures, drawings and game progress
stay on the device. A parent uses Google Play to buy a subscription. This policy
explains local gameplay, parent-started downloads and subscription verification.

## 1. The short version

- We do not collect your child's name, age, location, contacts, pictures,
  drawings or game progress.
- There are no ads, analytics, tracking SDKs, chat or Zanydo child accounts.
- Camera images and drawings are checked on the phone and discarded. They are
  never uploaded or saved to the photo gallery.
- An annual Google Play subscription is required to play. Buying, restoring or
  refreshing access requires a parent's action and an internet connection.
- A parent also downloads a picture-checking model once. Games and speech then
  work offline for the subscription term that has been verified on the device.
- Subscription verification sends purchase metadata, never child content.
  Google handles payment information; Zanydo does not receive card details.

## 2. Local gameplay and children's information

Search & Discover and Act It Out use the camera to capture a single frame. The
app resizes the image, checks it with a model running inside the phone, and
discards it. The temporary capture file is deleted after it is read; the
in-memory image is released when the round ends.

Draw & Color and Count & Write render a drawing to an image in memory, check it
on the device, and discard it. Snack Snake's collection rules run locally and
use no camera or drawing capture. The app does not record audio or request
microphone access. Speech is generated locally from instructions and feedback,
including what the picture model thinks it sees.

We do not collect, upload or use your child's pictures, drawings, game progress,
name, age, birthday, gender, location or contacts. No advertising identifiers,
usage analytics or crash-reporting SDKs are included. There is no child profile,
public sharing, chat or Zanydo sign-up. Models are not trained on child content.

## 3. Subscriptions and parent-only verification

All game tracks require a valid annual Google Play subscription. Eligible
accounts may receive a first-year offer. The parent screen and Google Play
checkout show the available local price, introductory period, renewal price
and auto-renewal terms. Prices and offer eligibility can vary by region and
Google Play account. Google Play handles payment, subscriptions, cancellation,
transaction records and its own account information under Google's policies.

When a parent buys, restores or refreshes access:

1. The app asks Google Play for the subscription purchase.
2. It sends the purchase token (or a signed receipt with an encrypted purchase
   proof when refreshing saved access), app package name and product ID to
   our verification service hosted on Google Cloud.
3. The service asks the Google Play Developer API whether the purchase is valid,
   checks its paid expiry and acknowledges a newly verified purchase.
4. The service returns a signed receipt with an encrypted purchase proof. The
   app stores it locally and checks
   its signature and expiry before allowing games to open.

A purchase token identifies a Google Play transaction. It is used only for
verification and acknowledgement. Our service does not create a child account,
store purchase tokens in a database or deliberately include them in application
logs. It receives no pictures, drawings, game progress, microphone recordings
or child profile information. Google Cloud receives ordinary network and
hosting metadata, including IP address, request time, endpoint and status;
provider service logs may retain that metadata. Google Play and Google Cloud
process information under their own privacy and service policies.

There is no automatic subscription verification request during gameplay or
startup. A verified receipt permits offline play until the paid access expires.
A parent must connect and use Restore purchases to verify a renewed term or a
purchase on another installation. Cancellation normally leaves access through
the already paid term. A refund, revocation or other status change can be
reflected when a parent checks online; it cannot be detected instantly while
the device is offline. A pending or unverified payment does not grant access.

A parent can open Manage subscription to cancel or manage renewal through
Google Play. The app does not receive credit card or bank details. Google
maintains payment and transaction records independently of app uninstallation.

## 4. Picture-model downloads and network controls

The open-source picture-checking model runs entirely on the device and is
credited with its license on the parent Licenses page. Its file is roughly
1.3–3.2 GB depending on the option selected, so a parent downloads it once.
Selecting a model does not start a download.

When a parent taps Download now behind the parental gate, the app fetches the
file only from Hugging Face's public content delivery network. Hugging Face,
Inc. can see ordinary request metadata, such as public IP address, time,
requested file and app user agent. The download sends no pictures, drawings,
child information or game progress. The file is checksum-verified and stored
in app-private storage. The connection closes on completion, pause, cancellation
or failure; bounded retries remain part of the parent-started download.

Games and speech make no network requests. Zanydo's Dart HTTP policy blocks
requests outside a parent-started model download or the fixed subscription
verification endpoint. Native Google Play billing connects only for explicit
parent billing actions. This app policy is not an operating-system firewall.

After subscription and model setup, a parent can play with Airplane mode on
and Wi-Fi off, or restrict network access in phone settings where supported.
Android's Internet permission cannot be revoked by the app. Some phones offer
separate per-app Wi-Fi and mobile-data switches; background-data restrictions
alone do not block all traffic. On iPhone, disabling cellular access still
allows Wi-Fi. Enable connectivity again for an intentional model download,
purchase, restore or renewal refresh. The app cannot verify phone restrictions.

Hugging Face's privacy policy governs its request logs; we do not receive those
logs. The app includes this policy for offline reading. A parent may also open
`signalskernels.com/zanydo-privacy/` in the phone's browser. The browser and
website hosting providers receive ordinary website request metadata. That
browser action does not send child content or progress from Zanydo.

## 5. What is stored on the phone

| Data | Purpose |
|---|---|
| Household settings | Starting level, session choices, timer preference and setup state |
| Game progress | Levels, stars, mosaic tiles, recent sessions and recent challenge IDs |
| Model choice and files | Downloaded picture models, bundled speech model and local cache, processing preference |
| Signed subscription receipt and time checkpoint | Verify the paid term locally and prevent ordinary clock rollback from extending it |

These items are stored in app-private storage. Uninstalling removes local app
data. The saved receipt contains an encrypted purchase proof; the app cannot decrypt
it. No raw purchase token is kept in the app's subscription receipt store.
Google Play may retain purchases so a parent can restore them later. Generated
speech may be reused in memory while the app runs; it is never sent to a speech
service. A parent can erase game progress or run setup again in the parent area.
These actions do not cancel a Google Play subscription.

## 6. Children's privacy and the parental gate

Parent-only purchases, subscription management, model downloads, external links
and sensitive settings are protected by an adult-level arithmetic gate. There
are no links to websites, app stores, social media or email in child gameplay.
We do not enable children to make personal information publicly available and
do not use their information for advertising or profiling.

If you believe Zanydo has collected a child's personal information, contact us
and we will investigate and delete information under our control.

## 7. Permissions

| Permission | Purpose |
|---|---|
| Camera | Capture the single frame used for a camera-game round |
| Internet | Parent-started model downloads and purchase verification |
| Google Play Billing | Parent-only subscription checkout, restore and management |
| App-private storage | Local settings, game progress, models and signed access receipt |

Zanydo does not run a foreground service to keep its AI model loaded in the
background. Android can reclaim the cached app process. When you return, a
model that was released reloads from its saved file without another download.
Losing subscription access unloads the model.

The app does not request photo-library, contacts, location, microphone,
advertising-identifier or notification permission.

## 8. Policy changes

We will update this document and its effective date when privacy practices
change. Material changes will be described in the parent area before the new
behaviour takes effect.

## 9. Contact

**Signals Kernels AI LLC**

Email: [contact@signalskernels.com](mailto:contact@signalskernels.com)

Public policy: [signalskernels.com/zanydo-privacy/](https://signalskernels.com/zanydo-privacy/)
