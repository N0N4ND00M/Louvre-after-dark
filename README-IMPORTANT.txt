LOUVRE AFTER DARK — MAXED V3
============================

This package contains the complete upgraded HTML, CSS and JavaScript for the project.
It expands the exhibition to 24 artworks and improves the audio guide for clarity.

RECOMMENDED PROJECT STRUCTURE
=============================

MUSEUM-WEBB2/
├── assets/
│   ├── images/              <- keep your existing images
│   └── audio/               <- optional studio MP3 narration files
├── css/
│   ├── style.css
│   └── animations.css
├── html/
│   ├── index.html
│   ├── exhibitions.html
│   ├── workshop.html
│   └── analysis.html
├── js/
│   └── script.js
├── VOICE-SCRIPTS.txt
└── README-IMPORTANT.txt

Run the site with VS Code Live Server for the best result.

WHAT IS NEW IN MAXED V3
=======================

1. EIGHTEEN ARTWORKS
- 18 exhibition works instead of 12.
- 72 interactive hotspots in total.
- 5 collection filters.
- Search, favorites and Surprise Me still work automatically because the exhibition is data-driven.

New works in V3:
- The Oath of the Horatii — Jacques-Louis David
- The Intervention of the Sabine Women — Jacques-Louis David
- Grande Odalisque — Jean-Auguste-Dominique Ingres
- Psyche Revived by Cupid's Kiss — Antonio Canova
- Dying Slave — Michelangelo
- The Cheat with the Ace of Diamonds — Georges de La Tour

2. FIVE COLLECTIONS
- Louvre Icons
- French Masters
- European Masters
- Ancient Worlds
- Sculpture Gallery

3. BIGGER TOURS
- Highlights Tour: 8 selected works.
- Grand Night Tour: all 24 works.
- Tour progress, completion screen and Night Passport update automatically.

4. AUDIO GUIDE — CLEAR MODE
The old browser voice could be difficult to understand. V3 changes the fallback system:
- Narration is spoken sentence-by-sentence instead of as one long block.
- Speech is deliberately slower (0.74 rate) with neutral pitch.
- The best available English system voice is still chosen automatically.
- No giant voice dropdown.
- A live transcript can be opened with “CC SHOW TRANSCRIPT”.
- The current sentence is highlighted while the guide is speaking.

IMPORTANT: browser Speech Synthesis can never guarantee game-quality voice acting because the actual voice comes from the visitor's browser/operating system.

5. AUTOMATIC STUDIO MP3 SUPPORT
This is the real long-term fix for HUNTED-style quality.
The website now automatically checks for:

assets/audio/mona.mp3
assets/audio/victory.mp3
...etc.

If a matching MP3 exists, the website uses the studio recording automatically.
If it does not exist, it falls back to CLEAR MODE speech synthesis.

See assets/audio/README.txt for all 18 filenames.
VOICE-SCRIPTS.txt contains all 18 narration scripts ready for recording or AI voice generation.
No JavaScript editing is required when the MP3 files are added.

6. DEEP INSPECTION
- Fullscreen artwork inspection.
- Desktop magnifier.
- Touch tap-to-zoom and drag/pan.
- Numbered artwork hotspots.
- Zoom controls and keyboard shortcuts.

7. NIGHT PASSPORT
- Tracks 72 discovered details.
- Tracks visited artworks out of 24.
- Saves progress locally using localStorage.
- Favorites are also saved locally.

8. WORKSHOP
- Digital restoration simulation.
- Brightness, contrast, saturation and sepia controls.
- Before/after comparison slider.
- Restoration score and completion feedback.
- Auto Restore and Reset.
- Expanded conservation quiz.

9. USER TESTING / ANALYSIS
- Local user-test responses.
- Live statistics.
- CSV export for report data.
- Analysis page explains reusable systems and development decisions.

IMAGES
======

The exhibition preview images are loaded from Wikimedia Commons file redirects.
That means internet access is required for those previews.
For a completely offline final submission, download the images into assets/images and replace the URLs inside js/script.js.

Do not delete your existing assets/images folder because other visual parts of the project may still depend on it.

QUICK TEST
==========

1. Open html/index.html with Live Server.
2. Open Exhibitions.
3. Confirm that the archive reports 24 works.
4. Filter by SCULPTURE GALLERY.
5. Open an artwork and test Play / Pause / Stop.
6. Open CC SHOW TRANSCRIPT and confirm the narration text appears.
7. Test Fullscreen Inspection and hotspots.
8. Start GRAND TOUR · 24 WORKS.
9. Open Workshop and test restoration + quiz.
10. Open Analysis and test the local user-test CSV export.
