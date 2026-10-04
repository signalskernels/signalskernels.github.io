---
title: 'Privacy Policy — Zanydo'
layout: '~/layouts/PrivacyLayout.astro'
---

**Effective date:** 4 October 2026

Zanydo is an English vocabulary game for children aged 4–9, published by
**Signals Kernels AI LLC**. Your child's pictures, drawings and game progress
stay on the device. This policy explains what the app handles locally and the
technical request information received by the model download provider.

---

## 1. The short version

- **We do not collect your child's personal data.** There is no account, no sign-up, no email,
  no name, no age, no gender, no location and no contacts.
- **No analytics, no advertising, no tracking SDKs** of any kind are included
  in the app.
- **Camera images and drawings are processed on the device, in memory, and
  discarded.** They are never uploaded, never saved to your photo gallery and
  never stored by the app.
- **The only network activity is a parent-started download of an AI model** from
  Hugging Face's content delivery network (CDN), which a parent starts
  deliberately. After that, the app works with the internet turned off.
- **Everything the app remembers (settings, progress, the model file) is
  stored only on your device** and is deleted when you uninstall the app.

## 2. What we do not collect

We do not collect, store, transmit or share any of the following, ever:

- names, ages, birthdays, gender or photos of your child or anyone else;
- email addresses, phone numbers, contacts or any account identifiers;
- precise or approximate location;
- device identifiers used for advertising or cross-app tracking;
- usage analytics, crash reports or behavioural data;
- the pictures your child takes or the drawings your child makes.

The app contains no third-party analytics, advertising, attribution or
crash-reporting software.

## 3. Camera and drawings: processed on the device, then discarded

Two of the five games ("Search & Discover" and "Act It Out") use the camera.
Your child points the camera at a real object or acts out a word. The app then:

1. captures a single frame at reduced resolution;
2. resizes it and hands it to a small artificial-intelligence model that runs
   **inside the phone** (see section 4);
3. shows the result to your child;
4. discards the image. The temporary capture file is deleted immediately after
   it has been read, and the in-memory copy is released when the round ends.

The same applies to drawings made in "Draw & Color" and "Count & Write": the drawing is rendered to
an image in memory, checked by the on-device model, and discarded.

Snack Snake uses no camera or drawing capture. Its collection rules run locally
and use the same stored game progress as the other tracks.

The app never writes these images to your photo gallery and never sends them
anywhere. The operating system will ask for camera permission the first time a
camera game opens; the app does not use the camera for anything else.

The app does not record audio and does not request microphone access.

## 4. The AI model and the one-time download

The picture check is performed by an open-source vision-language model
(licensed under Apache-2.0 and credited on the Licenses page in the parent
area) that runs entirely on your device. The model file is large (roughly
1.3–3.2 GB depending on the option a parent chooses), so it is **not bundled
with the app** and must be downloaded once.

When a parent taps "Download now" (behind the parental gate):

- the app connects **only** to Hugging Face's public CDN to fetch the model
  file. Hugging Face, Inc. operates that service. Like any web server, it can
  see the standard technical metadata of an HTTP request: your public IP
  address, the time of the request, the file requested and the app's HTTP
  user agent. The app sends nothing else — no identifiers, no settings, no
  information about your child;
- the download can be paused and resumed; the file is verified against a
  known checksum and stored in the app's private storage on the device;
- the connection is closed when the download finishes, pauses, fails or is
  cancelled. Automatic retries are bounded and remain part of that download.

After the model has been downloaded the app **makes no further network
requests of any kind**. You can switch the internet off and everything keeps
working. A parent can deliberately start another model download in the parent
area under the same conditions. Selecting a different model alone does not
start a download.

After setup, the parent area includes a guide for blocking Zanydo's network
access in phone settings where supported. Android's Internet permission is
needed for in-app downloads and cannot be revoked by the app itself. Some
Android phones provide separate per-app Wi-Fi and mobile data controls;
restricting background data alone is not a complete block. On iPhone, disabling
cellular access for Zanydo still allows Wi-Fi. The app does not claim to verify
the phone's network restrictions. Games and speech work without connectivity;
access must be enabled again if a parent chooses to download another model.

Hugging Face's own privacy policy governs what that service logs about
requests it receives; we have no access to, and receive nothing from, those
logs.

The parent area also includes a full copy of this policy for offline reading.
If a parent chooses to open the public policy, the phone's browser opens
`signalskernels.com`; Zanydo does not fetch that page or send any pictures,
drawings or game progress. The browser and website hosting providers receive
the ordinary web request information, such as the IP address, requested page
and browser headers, under their own privacy practices. The public page needs
internet access; the policy inside Zanydo does not.

## 5. What is stored on your device

All of the following lives only in the app's private storage on your phone and
is removed when you uninstall the app:

| Data | What it is | Why |
|---|---|---|
| Household settings | The chosen starting level, rounds per session, whether the round timer is on, and where you are in first-run setup | So the game remembers your choices |
| Game progress | Levels reached, stars earned, mosaic tiles unlocked, the last few sessions played, recently shown challenge IDs and a count of days played | So progress is not lost between sessions and challenges have variety |
| Model choice and files | Which model is selected, downloaded picture-model files, the bundled speech model and its local optimized cache, and the CPU/GPU processing preference | So pictures and speech work offline |

Speech is generated locally from game instructions and feedback, including what
the picture model thinks it sees. Generated speech may be reused from memory
while the app is running; it is not sent to a speech service. The app does not
train models on your child's pictures or drawings.

None of this identifies your child. There is no name field anywhere in the app.
A parent can erase progress ("Reset progress") or return the app to its
first-run state ("Run setup again") from the parent area at any time.

## 6. Children's privacy

The app is designed for children. We do not collect their pictures, drawings,
personal information or game progress, and we do not use these for advertising
or profiling. Parent-started model downloads involve the technical request
metadata described in section 4.

- We do not enable a child to make personal information publicly available.
- Settings that cost money or data (the model download), delete data, or open
  parent-only screens are protected by a parental gate (an adult-level
  arithmetic task).
- There are no links to websites, app stores, social media or email inside the
  child-facing part of the app.

If you believe the app has somehow collected personal information from a
child, please contact us (section 9) and we will investigate and delete it.

## 7. Permissions requested

| Permission | Used for | Not used for |
|---|---|---|
| Camera | Taking the single picture your child uses to play a round | Recording video, saving photos, anything in the background |
| Internet | Model downloads deliberately started by a parent | Analytics, ads, accounts, or any other request |
| Storage (app-private) | Keeping the downloaded model, settings and progress | Reading your other files or photos |
| Foreground service (Android), shown as a silent "Zanydo is ready to play" notification | Keeping the game and its AI model loaded while the app is in the background, so it answers at once when your child comes back instead of loading the model again. It runs only while a model is loaded. Swiping Zanydo away from the recent apps screen closes the app and frees the model | Collecting or sending anything, or showing any other notification |

The app does not request access to your photo library, contacts, location,
microphone, or any advertising identifier, and it does not ask for permission
to send notifications. On Android 13 and later the notification above
therefore shows only in the system's list of active apps, unless you turn
Zanydo's notifications on in the phone's settings.

## 8. Changes to this policy

If the app ever changes in a way that affects this policy (for example, if a
future version added an optional online feature), we will update this document,
change the effective date at the top and, where the change is material, show a
notice in the parent area before the new behaviour takes effect.

## 9. Contact

Questions about this policy or the app's privacy practices:
**Signals Kernels AI LLC**

Email: [support@signalskernels.com](mailto:support@signalskernels.com)

Public policy: [signalskernels.com/zanydo-privacy/](https://signalskernels.com/zanydo-privacy/)
