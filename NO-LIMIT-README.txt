LOUVRE AFTER DARK — NO LIMIT EDITION

This build extends MAXED V3 into a 24-work, 72-detail museum experience.

MAIN UPGRADES
- 24 artworks / 72 hotspots / 6 collection worlds.
- Compare Lab with two selectable artworks.
- Interactive chronological timeline.
- Four curated themed Night Routes plus Highlights and Grand Tour.
- Digital Wing Guide for Denon, Sully and Richelieu.
- Night Passport 2.0 with eight achievements.
- Shareable deep links using ?art=artwork-id.
- Louvre catalogue and Wikimedia image-source links inside every artwork modal.
- Global Ctrl/Cmd+K command palette across every page.
- Accessibility panel: reduced motion, high contrast and larger text.
- Workshop diagnostic-imaging teaching simulator.
- Workshop mastery badge linking restoration + quiz completion.
- PWA manifest and service worker for an installable/offline-capable shell when hosted over HTTP/HTTPS.

VOICE CHANGE — IMPORTANT
The terrible browser robot voice is no longer the default fallback.
1. If assets/audio/<artwork-id>.mp3 exists, the site plays the real studio file.
2. If it does not exist, Play uses CINEMATIC TRANSCRIPT mode with timed highlighted captions instead of forcing unclear system TTS.
This is intentional: JavaScript cannot turn a low-quality operating-system TTS engine into a HUNTED-quality actor.

To get true game-quality narration, add MP3 files named after each artwork ID in assets/audio/. Existing scripts remain in VOICE-SCRIPTS.txt; works 19–24 are in VOICE-STUDIO-ADDENDUM.txt.

NEW ARTWORK IDS
19 saintjohn
20 castiglione
21 turkishbath
22 valpincon
23 lamassu
24 archers

TEST RECOMMENDATION
Use Live Server or another local HTTP server rather than opening index.html directly. The PWA and audio-file availability checks require HTTP/HTTPS.
