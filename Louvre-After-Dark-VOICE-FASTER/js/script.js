/* =========================================================
   LOUVRE AFTER DARK — MAIN SCRIPT
   Improved project version
========================================================= */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const artworks = {
    mona: {
        id: "mona", category: "icons", categoryLabel: "Louvre Icons", wing: "Denon Wing", era: "Renaissance",
        room: "ROOM 01 / SALLE DES ÉTATS", roomName: "Salle des États", imageNumber: "01",
        title: "Mona Lisa", artist: "Leonardo da Vinci", date: "c. 1503–1519", type: "Oil on poplar panel",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg?width=1400",
        description: "Leonardo da Vinci's portrait is celebrated for its subtle modelling, atmospheric landscape and famously ambiguous expression.",
        narration: "Before you is the Mona Lisa. Leonardo da Vinci worked on this portrait over many years. Look closely at the face. There are almost no hard outlines. Instead, light and shadow fade gently into one another — a technique known as sfumato. It is one reason her expression can seem to change while you look at her.",
        hotspots: [
            {x:50,y:28,title:"The Expression",text:"The expression appears to shift depending on where the viewer focuses. Leonardo's soft transitions make the face feel unusually alive."},
            {x:73,y:48,title:"The Landscape",text:"The imaginary landscape uses atmospheric perspective. Distant forms become softer, cooler and less detailed."},
            {x:38,y:61,title:"Sfumato",text:"Leonardo used sfumato: extremely gradual transitions between tones without sharp outlines."}
        ]
    },
    victory: {
        id: "victory", category: "icons", categoryLabel: "Louvre Icons", wing: "Denon Wing", era: "Hellenistic Greece",
        room: "ROOM 02 / DARU STAIRCASE", roomName: "Daru Staircase", imageNumber: "02",
        title: "Winged Victory of Samothrace", artist: "Unknown Greek sculptor", date: "c. 2nd century BCE", type: "Marble sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/CF6317_Louvre_Victoire_Samothrace_rwk.jpg?width=1400",
        description: "The Winged Victory of Samothrace represents Nike, the Greek goddess of victory, in a dramatic pose shaped by wind and movement.",
        narration: "Before you stands the Winged Victory of Samothrace. The sculpture represents Nike, the Greek goddess of victory. Notice the forward movement of the body and the deeply carved folds of fabric. The stone seems almost weightless — as though wind is still moving across it.",
        hotspots: [
            {x:48,y:22,title:"The Wings",text:"The enormous wings identify the figure as Nike and amplify the sense of arrival and triumph."},
            {x:53,y:55,title:"Wind-Blown Drapery",text:"Deep carving makes the fabric appear wet, wind-driven and pressed against the body."},
            {x:46,y:76,title:"Movement",text:"The forward stance gives the impression that Nike has just landed on the prow of a ship."}
        ]
    },
    venus: {
        id: "venus", category: "icons", categoryLabel: "Louvre Icons", wing: "Sully Wing", era: "Hellenistic Greece",
        room: "ROOM 03 / GREEK ANTIQUITIES", roomName: "Greek Antiquities", imageNumber: "03",
        title: "Venus de Milo", artist: "Attributed to Alexandros of Antioch", date: "c. 130–100 BCE", type: "Marble sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Venus_de_Milo-Louvre.jpg?width=1400",
        description: "The Venus de Milo is an ancient Greek marble sculpture traditionally associated with Aphrodite, goddess of love and beauty.",
        narration: "This is the Venus de Milo. Her missing arms remain one of the sculpture's great mysteries. Notice how the weight shifts through the body. That gentle curve creates movement and balance, even though the figure itself is completely still.",
        hotspots: [
            {x:49,y:23,title:"Identity",text:"The sculpture is traditionally identified as Aphrodite, although the exact original context remains debated."},
            {x:54,y:48,title:"Missing Arms",text:"The original position of the arms is unknown, which has produced many theories about what the figure once held."},
            {x:48,y:73,title:"Contrapposto",text:"The body shifts weight onto one leg, producing a natural S-shaped rhythm through the torso and hips."}
        ]
    },
    liberty: {
        id: "liberty", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Romanticism",
        room: "ROOM 04 / RED ROOMS", roomName: "French Paintings — Red Rooms", imageNumber: "04",
        title: "Liberty Leading the People", artist: "Eugène Delacroix", date: "1830", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg?width=1600",
        description: "Delacroix transformed the July Revolution of 1830 into an image where allegory and contemporary political conflict meet.",
        narration: "Liberty Leading the People turns revolution into theatre. At the centre, Liberty is both a real woman and an allegorical figure. Delacroix surrounds her with people from different social groups, pushing forward through smoke, rubble and bodies. The diagonal movement makes the painting feel as if the crowd is entering our space.",
        hotspots: [
            {x:52,y:30,title:"Liberty",text:"The central figure combines an idealised allegory with the physical urgency of a participant in the uprising."},
            {x:72,y:42,title:"The Tricolour",text:"The French tricolour rises above the crowd and organises the composition around a powerful national symbol."},
            {x:36,y:62,title:"The Crowd",text:"Figures from different social backgrounds help turn a specific uprising into a broader image of collective action."}
        ]
    },
    coronation: {
        id: "coronation", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Neoclassicism",
        room: "ROOM 05 / DARU ROOMS", roomName: "Daru Rooms", imageNumber: "05",
        title: "The Coronation of Napoleon", artist: "Jacques-Louis David", date: "1805–1807", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jacques-Louis_David_-_The_Coronation_of_Napoleon_(1805-1807).jpg?width=1800",
        description: "David's monumental painting stages Napoleon's imperial coronation with extraordinary detail, ceremony and political symbolism.",
        narration: "This immense canvas records a carefully staged moment of imperial power. Napoleon stands at the centre while Joséphine kneels before him. David fills the cathedral with portraits, fabric, architecture and ceremony. The result looks documentary, yet every detail has been arranged to strengthen the image of authority.",
        hotspots: [
            {x:54,y:44,title:"Napoleon and Joséphine",text:"The central action shows Napoleon crowning Joséphine, making him the visual source of authority in the scene."},
            {x:66,y:31,title:"Pope Pius VII",text:"The pope is present, but the composition keeps political power firmly focused on Napoleon."},
            {x:28,y:28,title:"The Spectators",text:"The dense crowd of dignitaries turns the ceremony into both historical record and political spectacle."}
        ]
    },
    medusa: {
        id: "medusa", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Romanticism",
        room: "ROOM 06 / MOLLIEN GALLERY", roomName: "Mollien Gallery", imageNumber: "06",
        title: "The Raft of the Medusa", artist: "Théodore Géricault", date: "1818–1819", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Raft_of_the_Medusa_-_Louvre.jpg?width=1800",
        description: "Géricault's vast painting turns a contemporary maritime disaster into a brutal study of survival, despair and hope.",
        narration: "The Raft of the Medusa is built around a terrible contrast: despair below, hope above. Bodies form a rising pyramid that leads toward the figures waving at a tiny ship on the horizon. The sea, sky and diagonals keep the entire image unstable. Géricault turns a recent disaster into a monumental history painting.",
        hotspots: [
            {x:72,y:35,title:"Signal of Hope",text:"The upper group desperately signals toward a distant ship, creating the painting's strongest point of hope."},
            {x:27,y:68,title:"Despair",text:"The lower figures embody exhaustion, death and grief, anchoring the painting in physical reality."},
            {x:50,y:50,title:"Rising Pyramid",text:"The bodies form a diagonal pyramid that lifts the eye from collapse toward survival."}
        ]
    },
    cana: {
        id: "cana", category: "european", categoryLabel: "European Masters", wing: "Denon Wing", era: "Venetian Renaissance",
        room: "ROOM 07 / SALLE DES ÉTATS", roomName: "Salle des États", imageNumber: "07",
        title: "The Wedding Feast at Cana", artist: "Paolo Veronese", date: "1563", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paolo_Veronese_008.jpg?width=1800",
        description: "Veronese transforms a biblical wedding into a huge Venetian spectacle filled with architecture, music, colour and more than a hundred figures.",
        narration: "Across from the Mona Lisa hangs one of the Louvre's largest paintings. Veronese turns the Wedding at Cana into a dazzling Venetian world. Musicians, servants, guests, animals and architecture compete for attention. Yet Christ remains remarkably still at the centre, creating calm inside the visual noise.",
        hotspots: [
            {x:50,y:47,title:"Christ at the Centre",text:"Christ is placed at the exact visual centre, calm and frontal despite the activity surrounding him."},
            {x:47,y:63,title:"The Musicians",text:"The group of musicians links sacred narrative with the culture and spectacle of sixteenth-century Venice."},
            {x:78,y:40,title:"Architecture",text:"Grand classical architecture expands the biblical story into an idealised Venetian setting."}
        ]
    },
    lacemaker: {
        id: "lacemaker", category: "european", categoryLabel: "European Masters", wing: "Richelieu Wing", era: "Dutch Golden Age",
        room: "ROOM 08 / NORTHERN PAINTINGS", roomName: "Northern European Paintings", imageNumber: "08",
        title: "The Lacemaker", artist: "Johannes Vermeer", date: "c. 1669–1671", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Johannes_Vermeer_-_The_lacemaker_(c.1669-1671).jpg?width=1200",
        description: "One of Vermeer's smallest paintings concentrates attention on a young woman absorbed in precise, quiet work.",
        narration: "The Lacemaker is tiny compared with many Louvre masterpieces, but its focus is intense. Vermeer brings us unusually close to a young woman working with thread. The foreground dissolves into soft colour while the hands and face hold our attention. The painting turns concentration itself into the subject.",
        hotspots: [
            {x:55,y:50,title:"The Hands",text:"The hands are carefully positioned at the centre of the activity, directing attention toward the act of making."},
            {x:47,y:31,title:"Concentration",text:"The lowered face and contained posture create a private atmosphere of deep concentration."},
            {x:28,y:72,title:"Soft Foreground",text:"Threads and textiles in the foreground become almost abstract, showing Vermeer's selective focus."}
        ]
    },
    astronomer: {
        id: "astronomer", category: "european", categoryLabel: "European Masters", wing: "Richelieu Wing", era: "Dutch Golden Age",
        room: "ROOM 09 / DUTCH PAINTINGS", roomName: "Dutch Paintings", imageNumber: "09",
        title: "The Astronomer", artist: "Johannes Vermeer", date: "1668", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jan_Vermeer_-_The_Astronomer.JPG?width=1200",
        description: "Vermeer presents a scholar reaching toward a celestial globe in a quiet interior shaped by light, books and scientific curiosity.",
        narration: "In The Astronomer, knowledge becomes a physical action. The scholar reaches toward a celestial globe while daylight enters from the left. Books, instruments and the map create a world of study, but Vermeer keeps the scene intimate. Science here is not spectacle. It is attention, curiosity and thought.",
        hotspots: [
            {x:66,y:38,title:"Celestial Globe",text:"The globe connects the scholar's private room to a much larger universe beyond it."},
            {x:32,y:25,title:"Window Light",text:"Light entering from the left organises the room and gives the scene its quiet, measured atmosphere."},
            {x:49,y:62,title:"Books and Instruments",text:"Objects of study make learning and observation central to the identity of the figure."}
        ]
    },
    hammurabi: {
        id: "hammurabi", category: "ancient", categoryLabel: "Ancient Worlds", wing: "Richelieu Wing", era: "Ancient Mesopotamia",
        room: "ROOM 10 / NEAR EASTERN ANTIQUITIES", roomName: "Near Eastern Antiquities", imageNumber: "10",
        title: "Code of Hammurabi", artist: "Unknown Babylonian sculptor", date: "c. 18th century BCE", type: "Stone stele with inscription",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Code_of_Hammurabi_Louvre_Museum.jpg?width=1200",
        description: "The monumental stele records a celebrated Babylonian law collection and places King Hammurabi before the sun-god Shamash.",
        narration: "This dark stone stele is both an image and a text. At the top, Hammurabi stands before the god Shamash. Below them, hundreds of lines of cuneiform set out laws and judgments. The object combines political authority, religion and writing in a single monumental form.",
        hotspots: [
            {x:51,y:15,title:"Hammurabi and Shamash",text:"The relief places the king before a seated deity, visually connecting law with divine authority."},
            {x:49,y:47,title:"Cuneiform Text",text:"Dense bands of cuneiform carry the legal text across most of the stele's surface."},
            {x:50,y:82,title:"Monumental Form",text:"The tall, dark stone gives the written law a durable and public physical presence."}
        ]
    },
    scribe: {
        id: "scribe", category: "ancient", categoryLabel: "Ancient Worlds", wing: "Sully Wing", era: "Ancient Egypt",
        room: "ROOM 11 / EGYPTIAN ANTIQUITIES", roomName: "Egyptian Antiquities", imageNumber: "11",
        title: "The Seated Scribe", artist: "Unknown Egyptian sculptor", date: "c. 2600–2350 BCE", type: "Painted limestone sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Seatedscribe.jpg?width=1200",
        description: "The Seated Scribe is remarkable for its alert expression, painted surface and highly realistic inlaid eyes.",
        narration: "The Seated Scribe feels startlingly present. His body is relaxed, but the face is alert. The eyes were made with several materials, including rock crystal, producing an unusually vivid gaze. Instead of an idealised ruler, we meet a working official captured with individual detail.",
        hotspots: [
            {x:50,y:25,title:"Inlaid Eyes",text:"The eyes use multiple materials to create depth and reflection, helping the face appear intensely alert."},
            {x:51,y:64,title:"Writing Pose",text:"The seated posture and hands identify the figure through the act and profession of writing."},
            {x:55,y:45,title:"Realistic Body",text:"The body is modelled with natural softness rather than idealised athletic perfection."}
        ]
    },
    sphinx: {
        id: "sphinx", category: "ancient", categoryLabel: "Ancient Worlds", wing: "Sully Wing", era: "Ancient Egypt",
        room: "ROOM 12 / SPHINX CRYPT", roomName: "Crypt of the Sphinx", imageNumber: "12",
        title: "Great Sphinx of Tanis", artist: "Unknown Egyptian sculptor", date: "Middle Kingdom / later reworked", type: "Granite sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Great_Sphinx_of_Tanis,_Paris.jpg?width=1500",
        description: "The colossal granite sphinx combines a lion's body with royal imagery and bears inscriptions from several Egyptian rulers.",
        narration: "The Great Sphinx of Tanis compresses royal power into a hybrid body: human intelligence joined to the strength of a lion. Its surface also carries traces of different rulers, reminding us that monuments could be reused and reinscribed across centuries of Egyptian history.",
        hotspots: [
            {x:50,y:28,title:"Royal Head",text:"The human head presents royal identity above the massive body of a lion."},
            {x:51,y:58,title:"Lion Body",text:"The lion's form communicates physical force and protective power."},
            {x:47,y:74,title:"Layered Inscriptions",text:"Inscriptions associated with several rulers reveal the long afterlife and reuse of the monument."}
        ]

    },
    horatii: {
        id: "horatii", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Neoclassicism",
        room: "ROOM 13 / RED ROOMS", roomName: "Room 702 — Red Rooms", imageNumber: "13",
        title: "The Oath of the Horatii", artist: "Jacques-Louis David", date: "1784", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jacques-Louis_David_-_Oath_of_the_Horatii.jpg?width=1600",
        description: "David turns a Roman legend into a severe image of duty, sacrifice and civic virtue through controlled geometry and gesture.",
        narration: "This is The Oath of the Horatii, painted by Jacques-Louis David in 1784. Three brothers reach toward the swords held by their father. Their straight bodies and strong gestures create a feeling of discipline and duty. On the right, the women collapse into grief. David places public duty and private emotion in the same scene.",
        hotspots: [
            {x:39,y:45,title:"The Oath",text:"The three brothers extend their arms toward the swords, turning a promise of duty into the central action."},
            {x:55,y:34,title:"The Swords",text:"The father's raised swords create the visual centre of the painting and link the brothers through one decisive gesture."},
            {x:78,y:63,title:"Private Grief",text:"The seated women contrast with the rigid men, introducing fear, loss and family emotion into the heroic scene."}
        ]
    },
    sabines: {
        id: "sabines", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Neoclassicism",
        room: "ROOM 14 / RED ROOMS", roomName: "Room 702 — Red Rooms", imageNumber: "14",
        title: "The Intervention of the Sabine Women", artist: "Jacques-Louis David", date: "1799", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Intervention_of_the_Sabine_Women.jpg?width=1600",
        description: "David depicts the moment when the Sabine women step between two armies and interrupt a violent conflict involving their own families.",
        narration: "David painted The Intervention of the Sabine Women in 1799. At the centre, Hersilia throws herself between the opposing leaders. Her body forms a barrier against the weapons around her. Children and families appear between the soldiers. The painting changes a battle scene into an image about stopping violence.",
        hotspots: [
            {x:50,y:47,title:"Hersilia",text:"Hersilia occupies the centre with her arms spread wide, physically separating the two sides."},
            {x:28,y:42,title:"The Opposing Leaders",text:"Romulus and Tatius face one another across the composition, turning the centre into a tense line of conflict."},
            {x:57,y:72,title:"Families and Children",text:"Children and relatives make the cost of the battle personal and help explain why the women intervene."}
        ]
    },
    odalisque: {
        id: "odalisque", category: "french", categoryLabel: "French Masters", wing: "Denon Wing", era: "Neoclassicism / Orientalism",
        room: "ROOM 15 / RED ROOMS", roomName: "Room 702 — Red Rooms", imageNumber: "15",
        title: "Grande Odalisque", artist: "Jean-Auguste-Dominique Ingres", date: "1814", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ingres_-_La_grande_odalisque_-_Louvre.jpg?width=1600",
        description: "Ingres combines highly controlled contours with deliberately elongated anatomy and an imagined Orientalist setting.",
        narration: "Ingres painted Grande Odalisque in 1814. At first the figure appears calm and realistic. Look longer, and the anatomy begins to feel unusual. The back is deliberately elongated and the pose is almost impossible. Ingres preferred the elegance of the line over strict anatomical accuracy.",
        hotspots: [
            {x:48,y:45,title:"Elongated Back",text:"Ingres lengthened the torso beyond normal anatomy to create the flowing curve he wanted."},
            {x:75,y:28,title:"The Gaze",text:"The figure turns her head toward the viewer while the rest of her body faces away, creating a deliberate tension."},
            {x:83,y:69,title:"Luxury and Setting",text:"The fan, textiles, jewellery and turban create an imagined Orientalist world rather than a documentary interior."}
        ]
    },
    psyche: {
        id: "psyche", category: "sculpture", categoryLabel: "Sculpture Gallery", wing: "Denon Wing", era: "Neoclassicism",
        room: "ROOM 16 / MICHELANGELO GALLERY", roomName: "Room 403 — Michelangelo Gallery", imageNumber: "16",
        title: "Psyche Revived by Cupid's Kiss", artist: "Antonio Canova", date: "1787–1793", type: "Marble sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Psyche_revived_Louvre_MR1777.jpg?width=1400",
        description: "Canova captures the instant Cupid revives Psyche, transforming hard marble into an unusually soft and intimate composition.",
        narration: "Canova created Psyche Revived by Cupid's Kiss between 1787 and 1793. Cupid bends over Psyche at the moment she returns to life. Their arms create a circular movement around the two faces. Canova makes cold marble appear soft, light and almost weightless.",
        hotspots: [
            {x:50,y:36,title:"The Kiss",text:"The two faces nearly meet at the emotional centre of the sculpture, freezing the story at its most intimate moment."},
            {x:72,y:32,title:"Cupid's Wings",text:"The wings extend outward and balance the intertwined bodies while identifying Cupid immediately."},
            {x:48,y:63,title:"Circular Composition",text:"Arms, bodies and drapery form a looping rhythm that encourages the viewer to move around the sculpture."}
        ]
    },
    dyingslave: {
        id: "dyingslave", category: "sculpture", categoryLabel: "Sculpture Gallery", wing: "Denon Wing", era: "High Renaissance",
        room: "ROOM 17 / MICHELANGELO GALLERY", roomName: "Room 403 — Michelangelo Gallery", imageNumber: "17",
        title: "Dying Slave", artist: "Michelangelo", date: "1513–1515", type: "Marble sculpture",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dying_slave_Louvre_MR_1590.jpg?width=1200",
        description: "Michelangelo's Dying Slave was designed for the tomb of Pope Julius II and combines idealised anatomy with a twisting, ambiguous pose.",
        narration: "Michelangelo carved the Dying Slave between 1513 and 1515 for the tomb of Pope Julius the Second. The head tilts back and the body twists gently. The pose can look like sleep, surrender or death. Michelangelo uses the tension between relaxed and active muscles to keep the figure emotionally uncertain.",
        hotspots: [
            {x:51,y:21,title:"Tilted Head",text:"The backward tilt and partly closed expression give the figure its strange mixture of sleep, surrender and death."},
            {x:42,y:47,title:"Twisting Torso",text:"The torso shifts against the hips, creating a subtle spiral rather than a rigid frontal pose."},
            {x:58,y:70,title:"Controlled Tension",text:"Relaxed areas and tightened muscles coexist, making the body feel caught between movement and stillness."}
        ]
    },
    cheat: {
        id: "cheat", category: "french", categoryLabel: "French Masters", wing: "Sully Wing", era: "French Baroque",
        room: "ROOM 18 / FRENCH PAINTINGS", roomName: "Room 912 — Georges de La Tour", imageNumber: "18",
        title: "The Cheat with the Ace of Diamonds", artist: "Georges de La Tour", date: "c. 1636–1640", type: "Oil on canvas",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/La_Tour_Le_Tricheur_Louvre_RF1972-8.jpg?width=1500",
        description: "Georges de La Tour turns a card game into a carefully staged scene of deception communicated through glances, hands and hidden cards.",
        narration: "This is The Cheat with the Ace of Diamonds by Georges de La Tour. The young player on the right does not realise what is happening. Across the table, looks and gestures connect the other figures. The cheat hides a card behind his back. The entire story is told without movement, only through hands, eyes and timing.",
        hotspots: [
            {x:25,y:63,title:"The Hidden Ace",text:"The cheat quietly reaches behind his back for the ace of diamonds, revealing the trick to us but not to the victim."},
            {x:52,y:36,title:"A Network of Glances",text:"Eyes and small gestures connect the conspirators and allow the deception to unfold almost silently."},
            {x:82,y:48,title:"The Young Victim",text:"The richly dressed player is visually separated from the group, reinforcing his isolation and lack of awareness."}
        ]
    }
};

let currentSpeechText = "";
let currentExhibitionArtId = "mona";
let lastModalTrigger = null;
let homeSpeechUtterance = null;
let homeSpeechQueue = [];
let homeSpeechIndex = 0;
let homeSpeechButton = null;

const audioGuide = {
    artwork: null,
    htmlAudio: null,
    utterance: null,
    text: "",
    sentences: [],
    sentenceIndex: 0,
    sentenceBoundary: 0,
    playing: false,
    paused: false,
    mode: "tts",
    recordedAvailable: false,
    availabilityToken: 0,
    progressTimer: null
};

document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initScrollProgress();
    initCursorGlow();
    initNightMode();
    initMobileNav();
    initArtworkModal();
    initAudioGuide();
    initIntro();
    initExhibitionRooms();
    initCollectionExplorer();
    initMuseumPassport();
    initFullscreenInspection();
    initGuidedTour();
    initMuseumAmbience();
    initFavorites();
    initRestorationWorkshop();
    initQuiz();
    initCounters();
    initUserTestingDemo();
});

/* =========================================================
   HELPERS
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const element = getElement(id);
    if (element) element.textContent = value;
}

function setModalImage(element, artwork) {
    if (!element || !artwork) return;

    element.style.backgroundImage = `url("${artwork.image}")`;
    element.style.backgroundSize = "contain";
    element.style.backgroundPosition = "center";
    element.style.backgroundRepeat = "no-repeat";
    element.setAttribute("role", "img");
    element.setAttribute("aria-label", `${artwork.title} — ${artwork.artist}`);
}

function scoreVoice(voice) {
    const name = voice.name.toLowerCase();
    const lang = (voice.lang || "").toLowerCase();

    let score = 0;

    // Louvre After Dark uses ONE cinematic guide voice.
    // Prefer a clear, mature British voice with a theatrical museum-guide feel.
    const preferredNames = [
        ["microsoft sonia", 500],
        ["microsoft libby", 470],
        ["microsoft maisie", 450],
        ["google uk english female", 430],
        ["serena", 400],
        ["microsoft ryan", 350],
        ["google uk english male", 330],
        ["daniel", 300]
    ];

    for (const [needle, points] of preferredNames) {
        if (name.includes(needle)) score += points;
    }

    if (name.includes("natural")) score += 220;
    if (name.includes("neural")) score += 200;
    if (name.includes("online")) score += 80;

    if (lang.startsWith("en-gb")) score += 150;
    else if (lang.startsWith("en")) score += 40;

    if (voice.default) score += 5;

    const robotic = ["espeak", "festival", "flite", "pico", "mbrola"];
    if (robotic.some(term => name.includes(term))) score -= 500;

    if (
        name.includes("microsoft david desktop") ||
        name.includes("microsoft zira desktop") ||
        name.includes("microsoft mark desktop")
    ) {
        score -= 140;
    }

    return score;
}

function getEnglishVoices() {
    if (!("speechSynthesis" in window)) return [];

    return window.speechSynthesis
        .getVoices()
        .filter(voice => /^en/i.test(voice.lang || ""))
        .sort((a, b) => scoreVoice(b) - scoreVoice(a));
}

function getPreferredVoice() {
    if (!("speechSynthesis" in window)) return null;

    const englishVoices = getEnglishVoices();
    const allVoices = window.speechSynthesis.getVoices();

    return englishVoices[0] || allVoices[0] || null;
}

function updateProgressBar(value) {
    const progress = Math.max(0, Math.min(100, Math.round(value)));
    const fill = getElement("audioProgressFill");
    const bar = getElement("audioProgress");

    if (fill) fill.style.width = `${progress}%`;
    if (bar) bar.setAttribute("aria-valuenow", String(progress));
}

function updateAudioStatus(text) {
    const status = getElement("audioStatus");
    if (status) status.textContent = text;
}

function resetHomeSpeechButton() {
    const button = getElement("speakButton");
    if (button) button.textContent = "▶ HEAR THE STORY";
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12 }
    );

    elements.forEach(element => observer.observe(element));
}

/* =========================================================
   SCROLL PROGRESS
========================================================= */

function initScrollProgress() {
    const bar = getElement("scrollProgress");
    if (!bar) return;

    const update = () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = height > 0 ? (scrollTop / height) * 100 : 0;
        bar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
}

/* =========================================================
   CURSOR GLOW
========================================================= */

function initCursorGlow() {
    const glow = getElement("cursorGlow");
    if (!glow) return;

    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion.matches) {
        glow.style.display = "none";
        return;
    }

    document.addEventListener("mousemove", event => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}

/* =========================================================
   NIGHT / LIGHT MODE
========================================================= */

function initNightMode() {
    const button = getElement("nightToggle");
    if (!button) return;

    const applyMode = lightMode => {
        document.body.classList.toggle("light-mode", lightMode);
        button.textContent = lightMode ? "◑ DAY MODE" : "◐ AFTER DARK";
        button.setAttribute("aria-pressed", String(lightMode));
    };

    applyMode(localStorage.getItem("lad-theme") === "light");

    button.addEventListener("click", () => {
        const lightMode = !document.body.classList.contains("light-mode");
        applyMode(lightMode);
        localStorage.setItem("lad-theme", lightMode ? "light" : "dark");
    });
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initMobileNav() {
    const toggle = getElement("mobileMenuToggle");
    const navigation = getElement("primaryNavigation");

    if (!toggle || !navigation) return;

    const closeMenu = () => {
        navigation.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
    };

    toggle.addEventListener("click", () => {
        const open = navigation.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
    });
}

/* =========================================================
   ARTWORK MODAL
========================================================= */

function initArtworkModal() {
    const modal = getElement("artModal");
    if (!modal) return;

    const closeButton = getElement("modalClose");
    const backdrop = modal.querySelector(".modal-backdrop");
    const speakButton = getElement("speakButton");

    document.querySelectorAll("[data-art]").forEach(card => {
        if (!card.hasAttribute("tabindex")) card.tabIndex = 0;
        if (!card.hasAttribute("role")) card.setAttribute("role", "button");

        const openCard = () => openArtworkModal(card.dataset.art, card);

        card.addEventListener("click", openCard);
        card.addEventListener("keydown", event => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            openCard();
        });
    });

    if (closeButton) closeButton.addEventListener("click", closeArtworkModal);
    if (backdrop) backdrop.addEventListener("click", closeArtworkModal);

    if (speakButton) {
        speakButton.addEventListener("click", () => {
            if (window.speechSynthesis?.speaking && homeSpeechUtterance) {
                window.speechSynthesis.cancel();
                homeSpeechUtterance = null;
                resetHomeSpeechButton();
                return;
            }

            speakText(currentSpeechText, speakButton);
        });
    }

    modal.addEventListener("keydown", event => trapModalFocus(event, modal));

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("open")) {
            closeArtworkModal();
        }
    });
}

function openArtworkModal(id, trigger = null) {
    const artwork = artworks[id];
    const modal = getElement("artModal");
    if (!artwork || !modal) return;

    lastModalTrigger = trigger || document.activeElement;
    currentSpeechText = artwork.narration || `${artwork.title}. ${artwork.description}`;

    setText("modalRoom", artwork.room);
    setText("modalTitle", artwork.title);
    setText("modalArtist", artwork.artist);
    setText("modalDate", artwork.date);
    setText("modalType", artwork.type);
    setText("modalLocation", artwork.roomName);
    setText("modalDescription", artwork.description);
    setText("modalImageNumber", artwork.imageNumber);
    currentExhibitionArtId = artwork.id;
    markArtworkVisited(artwork.id);
    updateFavoriteButton();

    setModalImage(getElement("modalArtworkPreview"), artwork);
    setModalImage(getElement("modalArtworkImage"), artwork);

    prepareAudioGuide(artwork);
    stopHomeSpeech();

    const tourNext = getElement("tourModalNext");
    if (tourNext) tourNext.hidden = !guidedTour.active;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    window.requestAnimationFrame(() => {
        getElement("modalClose")?.focus();
    });
}

function closeArtworkModal() {
    const modal = getElement("artModal");
    if (!modal || !modal.classList.contains("open")) return;

    stopAudioGuide(true);
    stopHomeSpeech();

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastModalTrigger instanceof HTMLElement) {
        lastModalTrigger.focus({ preventScroll: true });
    }
}

function trapModalFocus(event, modal) {
    if (event.key !== "Tab") return;

    const focusable = [...modal.querySelectorAll(
        "button:not([disabled]), select:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex='-1'])"
    )].filter(element => element.offsetParent !== null);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

/* =========================================================
   SPEECH — HOME MODAL (CLEAR SENTENCE MODE)
========================================================= */

function speakText(text, button = null) {
    if (!("speechSynthesis" in window)) {
        alert("Speech synthesis is not supported in this browser.");
        return;
    }

    if (!text.trim()) return;

    stopHomeSpeech();
    homeSpeechQueue = splitNarration(text);
    homeSpeechIndex = 0;
    homeSpeechButton = button;
    if (button) button.textContent = "■ STOP STORY";
    speakNextHomeSentence();
}

function speakNextHomeSentence() {
    if (!("speechSynthesis" in window) || homeSpeechIndex >= homeSpeechQueue.length) {
        homeSpeechUtterance = null;
        homeSpeechQueue = [];
        homeSpeechIndex = 0;
        homeSpeechButton = null;
        resetHomeSpeechButton();
        return;
    }

    const speech = new SpeechSynthesisUtterance(homeSpeechQueue[homeSpeechIndex]);
    const voice = getPreferredVoice();

    if (voice) {
        speech.voice = voice;
        speech.lang = voice.lang;
    } else {
        speech.lang = "en-GB";
    }

    speech.rate = 0.90;
    speech.pitch = 1.0;
    speech.volume = 1.0;

    speech.onend = () => {
        if (homeSpeechUtterance !== speech) return;
        homeSpeechIndex += 1;
        window.setTimeout(speakNextHomeSentence, 220);
    };

    speech.onerror = event => {
        if (event.error === "canceled" || event.error === "interrupted") return;
        stopHomeSpeech();
    };

    homeSpeechUtterance = speech;
    window.speechSynthesis.speak(speech);
}

function stopHomeSpeech() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    homeSpeechUtterance = null;
    homeSpeechQueue = [];
    homeSpeechIndex = 0;
    homeSpeechButton = null;
    resetHomeSpeechButton();
}

/* =========================================================
   EXHIBITION AUDIO GUIDE — CLEAR VOICE + OPTIONAL STUDIO MP3
========================================================= */

function initAudioGuide() {
    const play = getElement("audioPlay");
    const pause = getElement("audioPause");
    const stop = getElement("audioStop");
    const transcriptToggle = getElement("audioTranscriptToggle");

    if (!play && !pause && !stop) return;

    play?.addEventListener("click", playAudioGuide);
    pause?.addEventListener("click", pauseAudioGuide);
    stop?.addEventListener("click", () => stopAudioGuide(false));

    transcriptToggle?.addEventListener("click", () => {
        const panel = getElement("audioTranscript");
        if (!panel) return;
        const open = panel.hidden;
        panel.hidden = !open;
        transcriptToggle.setAttribute("aria-expanded", String(open));
        transcriptToggle.textContent = open ? "CC HIDE TRANSCRIPT" : "CC SHOW TRANSCRIPT";
    });
}

function getArtworkAudioPath(artId) {
    return `../assets/audio/${artId}.mp3`;
}

function splitNarration(text) {
    return (text || "")
        .replace(/\s+/g, " ")
        .trim()
        .match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map(part => part.trim()).filter(Boolean) || [];
}

function renderAudioTranscript() {
    const transcript = getElement("audioTranscriptText");
    if (!transcript) return;

    transcript.innerHTML = "";
    audioGuide.sentences.forEach((sentence, index) => {
        const span = document.createElement("span");
        span.dataset.transcriptSentence = String(index);
        span.textContent = `${sentence} `;
        transcript.appendChild(span);
    });
    updateTranscriptHighlight();
}

function updateTranscriptHighlight() {
    document.querySelectorAll("[data-transcript-sentence]").forEach(span => {
        const index = Number(span.dataset.transcriptSentence);
        span.classList.toggle("active", index === audioGuide.sentenceIndex && audioGuide.playing);
        span.classList.toggle("completed", index < audioGuide.sentenceIndex);
    });
}

async function checkRecordedAudio(artwork, token) {
    if (!artwork?.id) return;
    const path = getArtworkAudioPath(artwork.id);

    try {
        const response = await fetch(path, { method: "HEAD", cache: "no-store" });
        if (token !== audioGuide.availabilityToken) return;
        audioGuide.recordedAvailable = response.ok;
    } catch {
        if (token !== audioGuide.availabilityToken) return;
        audioGuide.recordedAvailable = false;
    }

    if (token !== audioGuide.availabilityToken) return;
    setText("audioVoiceLabel", audioGuide.recordedAvailable ? "STUDIO RECORDING" : "CLEAR GUIDE");
    updateAudioStatus(audioGuide.recordedAvailable ? "STUDIO AUDIO READY" : "READY TO PLAY");
}

function prepareAudioGuide(artworkOrText) {
    stopAudioGuide(true);

    const artwork = typeof artworkOrText === "object" ? artworkOrText : null;
    const text = artwork?.narration || String(artworkOrText || "");
    audioGuide.artwork = artwork;
    audioGuide.text = text;
    audioGuide.sentences = splitNarration(text);
    audioGuide.sentenceIndex = 0;
    audioGuide.sentenceBoundary = 0;
    audioGuide.mode = "tts";
    audioGuide.recordedAvailable = false;
    audioGuide.availabilityToken += 1;

    renderAudioTranscript();
    updateAudioStatus("READY TO PLAY");
    updateProgressBar(0);
    setText("audioVoiceLabel", "CLEAR GUIDE");

    if (artwork?.id) checkRecordedAudio(artwork, audioGuide.availabilityToken);
}

function playAudioGuide() {
    if (!audioGuide.text.trim()) {
        updateAudioStatus("NO STORY AVAILABLE");
        return;
    }

    stopHomeSpeech();

    if (audioGuide.recordedAvailable && audioGuide.artwork?.id) {
        playRecordedGuide();
        return;
    }

    playClearTtsGuide();
}

function setupRecordedAudio() {
    if (audioGuide.htmlAudio || !audioGuide.artwork?.id) return audioGuide.htmlAudio;

    const audio = new Audio(getArtworkAudioPath(audioGuide.artwork.id));
    audio.preload = "metadata";
    audio.playbackRate = 1.08;
    audio.defaultPlaybackRate = 1.08;
    try { audio.preservesPitch = true; } catch {}

    audio.addEventListener("timeupdate", () => {
        if (!Number.isFinite(audio.duration) || !audio.duration) return;
        updateProgressBar((audio.currentTime / audio.duration) * 100);
    });

    audio.addEventListener("play", () => {
        audioGuide.mode = "recorded";
        audioGuide.playing = true;
        audioGuide.paused = false;
        updateAudioStatus("PLAYING STUDIO GUIDE");
        setText("audioVoiceLabel", "STUDIO RECORDING");
    });

    audio.addEventListener("pause", () => {
        if (audio.ended || audio.currentTime === 0) return;
        audioGuide.playing = false;
        audioGuide.paused = true;
        updateAudioStatus("PAUSED");
    });

    audio.addEventListener("ended", () => {
        audioGuide.playing = false;
        audioGuide.paused = false;
        updateProgressBar(100);
        updateAudioStatus("FINISHED");
    });

    audio.addEventListener("error", () => {
        audioGuide.recordedAvailable = false;
        audioGuide.htmlAudio = null;
        setText("audioVoiceLabel", "CLEAR GUIDE");
        updateAudioStatus("USING CLEAR VOICE");
        playClearTtsGuide();
    }, { once: true });

    audioGuide.htmlAudio = audio;
    return audio;
}

function playRecordedGuide() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    const audio = setupRecordedAudio();
    if (!audio) return;

    audio.play().catch(() => {
        audioGuide.recordedAvailable = false;
        setText("audioVoiceLabel", "CLEAR GUIDE");
        playClearTtsGuide();
    });
}

function createClearUtterance(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence);
    const voice = getPreferredVoice();

    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
    } else {
        utterance.lang = "en-GB";
    }

    // Deliberately slow and neutral. Short sentence chunks are much easier to understand
    // than one long browser utterance.
    utterance.rate = 0.90;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    return utterance;
}

function playClearTtsGuide() {
    if (!("speechSynthesis" in window)) {
        updateAudioStatus("VOICE NOT SUPPORTED — USE TRANSCRIPT");
        const panel = getElement("audioTranscript");
        if (panel) panel.hidden = false;
        return;
    }

    if (audioGuide.paused && window.speechSynthesis.paused) {
        audioGuide.playing = true;
        audioGuide.paused = false;
        window.speechSynthesis.resume();
        updateAudioStatus("PLAYING · CLEAR MODE");
        updateTranscriptHighlight();
        return;
    }

    if (audioGuide.playing) return;

    if (!audioGuide.sentences.length) audioGuide.sentences = splitNarration(audioGuide.text);
    if (audioGuide.sentenceIndex >= audioGuide.sentences.length) audioGuide.sentenceIndex = 0;

    audioGuide.mode = "tts";
    audioGuide.playing = true;
    audioGuide.paused = false;
    setText("audioVoiceLabel", "CLEAR GUIDE");
    updateAudioStatus("PLAYING · CLEAR MODE");
    speakCurrentGuideSentence();
}

function speakCurrentGuideSentence() {
    if (!audioGuide.playing || audioGuide.mode !== "tts") return;

    const total = audioGuide.sentences.length;
    if (!total || audioGuide.sentenceIndex >= total) {
        audioGuide.playing = false;
        audioGuide.paused = false;
        audioGuide.utterance = null;
        updateProgressBar(100);
        updateAudioStatus("FINISHED");
        updateTranscriptHighlight();
        return;
    }

    const sentence = audioGuide.sentences[audioGuide.sentenceIndex];
    const utterance = createClearUtterance(sentence);
    audioGuide.utterance = utterance;
    audioGuide.sentenceBoundary = 0;
    updateTranscriptHighlight();

    utterance.onboundary = event => {
        if (typeof event.charIndex !== "number") return;
        audioGuide.sentenceBoundary = Math.min(1, event.charIndex / Math.max(1, sentence.length));
        const progress = ((audioGuide.sentenceIndex + audioGuide.sentenceBoundary) / total) * 100;
        updateProgressBar(progress);
    };

    utterance.onend = () => {
        if (!audioGuide.playing || audioGuide.mode !== "tts") return;
        audioGuide.sentenceIndex += 1;
        audioGuide.sentenceBoundary = 0;
        updateProgressBar((audioGuide.sentenceIndex / total) * 100);
        updateTranscriptHighlight();
        window.setTimeout(speakCurrentGuideSentence, 110);
    };

    utterance.onerror = event => {
        if (event.error === "canceled" || event.error === "interrupted") return;
        audioGuide.playing = false;
        audioGuide.paused = false;
        updateAudioStatus("VOICE ERROR — USE TRANSCRIPT");
        const panel = getElement("audioTranscript");
        if (panel) panel.hidden = false;
        updateTranscriptHighlight();
    };

    window.speechSynthesis.speak(utterance);
}

function pauseAudioGuide() {
    if (audioGuide.mode === "recorded" && audioGuide.htmlAudio) {
        if (!audioGuide.htmlAudio.paused) audioGuide.htmlAudio.pause();
        return;
    }

    if (!("speechSynthesis" in window)) return;
    if (!audioGuide.playing || window.speechSynthesis.paused) return;

    audioGuide.playing = false;
    audioGuide.paused = true;
    window.speechSynthesis.pause();
    updateAudioStatus("PAUSED");
    updateTranscriptHighlight();
}

function stopAudioGuide(silent = false) {
    if (audioGuide.htmlAudio) {
        audioGuide.htmlAudio.pause();
        try { audioGuide.htmlAudio.currentTime = 0; } catch {}
        audioGuide.htmlAudio.src = "";
        audioGuide.htmlAudio = null;
    }

    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (audioGuide.progressTimer) clearInterval(audioGuide.progressTimer);

    audioGuide.utterance = null;
    audioGuide.playing = false;
    audioGuide.paused = false;
    audioGuide.sentenceIndex = 0;
    audioGuide.sentenceBoundary = 0;
    audioGuide.mode = "tts";
    audioGuide.progressTimer = null;

    updateProgressBar(0);
    updateTranscriptHighlight();
    if (!silent) updateAudioStatus("READY TO PLAY");
}

/* =========================================================
   INTRO CINEMATIC
========================================================= */

function initIntro() {
    const button = getElement("playIntro");
    const overlay = getElement("introOverlay");
    const close = getElement("closeIntro");

    if (!button || !overlay) return;

    let timers = [];
    const scenes = [
        { time: "PARIS — 18:00", text: "The Louvre closes its doors." },
        { time: "PARIS — 21:14", text: "The last footsteps disappear." },
        { time: "PARIS — 22:47", text: "Something inside the museum wakes up." },
        { time: "LOUVRE AFTER DARK", text: "Welcome to the night collection." }
    ];

    const clearTimers = () => {
        timers.forEach(timer => {
            clearInterval(timer);
            clearTimeout(timer);
        });
        timers = [];
    };

    const closeIntro = () => {
        clearTimers();
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        button.focus({ preventScroll: true });
    };

    button.addEventListener("click", () => {
        clearTimers();
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        let index = 0;
        showIntroScene(scenes[index]);

        if (prefersReducedMotion.matches) {
            const finalTimer = setTimeout(closeIntro, 2200);
            timers.push(finalTimer);
            return;
        }

        const interval = setInterval(() => {
            index += 1;

            if (index >= scenes.length) {
                clearInterval(interval);
                const finalTimer = setTimeout(closeIntro, 2200);
                timers.push(finalTimer);
                return;
            }

            showIntroScene(scenes[index]);
        }, 2800);

        timers.push(interval);
    });

    close?.addEventListener("click", closeIntro);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && overlay.classList.contains("active")) closeIntro();
    });
}

function showIntroScene(scene) {
    const time = getElement("introTime");
    const text = getElement("introText");
    const sequence = document.querySelector(".intro-sequence");

    if (!time || !text || !sequence) return;

    time.textContent = scene.time;
    text.textContent = scene.text;

    if (prefersReducedMotion.matches) return;

    sequence.style.animation = "none";
    void sequence.offsetHeight;
    sequence.style.animation = "fadeSequence 2.6s ease";
}

/* =========================================================
   EXHIBITION ROOMS
========================================================= */

function initExhibitionRooms() {
    const navigation = getElement("roomsNavigation");
    if (!navigation) return;

    renderRoomNavigation();

    navigation.addEventListener("click", event => {
        const button = event.target.closest(".room-button[data-art-id]");
        if (!button) return;
        selectArtworkRoom(button.dataset.artId, true);
    });

    getElement("inspectArtwork")?.addEventListener("click", () => {
        openArtworkModal(currentExhibitionArtId, getElement("inspectArtwork"));
    });

    getElement("exploreDetails")?.addEventListener("click", () => {
        const artId = currentExhibitionArtId;
        closeArtworkModal();
        window.setTimeout(() => openFullscreenInspection(artId), 80);
    });

    selectArtworkRoom(currentExhibitionArtId, false);
}

function renderRoomNavigation() {
    const navigation = getElement("roomsNavigation");
    if (!navigation) return;
    navigation.innerHTML = "";

    Object.values(artworks).forEach((art, index) => {
        const button = document.createElement("button");
        button.className = `room-button${art.id === currentExhibitionArtId ? " active" : ""}`;
        button.type = "button";
        button.dataset.artId = art.id;
        button.setAttribute("aria-pressed", String(art.id === currentExhibitionArtId));
        button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><span class="room-button-copy">${art.title}<small data-passport-art="${art.id}">0 / ${art.hotspots.length}</small></span>`;
        navigation.appendChild(button);
    });
}

let roomTransitionLocked = false;
function selectArtworkRoom(artId, animate = true) {
    const art = artworks[artId];
    const virtualRoom = getElement("virtualRoom");
    if (!art || roomTransitionLocked) return;
    if (artId === currentExhibitionArtId && animate) {
        updateRoom(art);
        return;
    }

    roomTransitionLocked = animate;
    document.querySelectorAll(".room-button[data-art-id]").forEach(button => {
        const active = button.dataset.artId === artId;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    if (animate) virtualRoom?.classList.add("room-transition-out");
    const delay = animate && !prefersReducedMotion.matches ? 280 : 0;

    window.setTimeout(() => {
        currentExhibitionArtId = artId;
        markArtworkVisited(artId);
        updateRoom(art);
        updateFavoriteButton();

        if (animate && virtualRoom) {
            virtualRoom.classList.remove("room-transition-out");
            void virtualRoom.offsetWidth;
            virtualRoom.classList.add("room-transition-in");
        }

        window.setTimeout(() => {
            virtualRoom?.classList.remove("room-transition-in");
            roomTransitionLocked = false;
        }, prefersReducedMotion.matches ? 0 : 650);
    }, delay);
}

function updateRoom(art) {
    if (!art) return;

    const hotspotInfo = getElement("hotspotInfo");
    hotspotInfo?.classList.remove("visible");
    setText("hotspotTitle", "Select a detail");
    setText("hotspotText", "Explore the artwork by selecting one of the highlighted points.");

    setText("roomNumber", art.room.split("/")[0].trim());
    setText("roomName", art.roomName);
    setText("galleryTitle", art.title.toUpperCase());
    setText("galleryArtist", art.artist.toUpperCase());
    setText("infoTitle", art.title);
    setText("infoText", art.description);
    setText("factArtist", art.artist);
    setText("factDate", art.date);
    setText("factType", art.type);
    setText("factEra", art.era || "—");
    setText("factWing", art.wing || "—");
    updatePassportUI();
    renderCollectionExplorer();

    const galleryArtwork = getElement("galleryArtwork");
    if (!galleryArtwork) return;

    galleryArtwork.innerHTML = "";
    setModalImage(galleryArtwork, art);
    renderArtworkHotspots(art);
}

/* =========================================================
   ARTWORK HOTSPOTS
========================================================= */

function renderArtworkHotspots(art) {
    const artwork = getElement("galleryArtwork");
    if (!artwork || !Array.isArray(art.hotspots)) return;

    art.hotspots.forEach((hotspot, index) => {
        const button = document.createElement("button");
        button.className = "art-hotspot";
        button.type = "button";
        button.style.left = `${hotspot.x}%`;
        button.style.top = `${hotspot.y}%`;
        button.innerHTML = `<span>${index + 1}</span>`;
        button.dataset.hotspotIndex = String(index);
        button.dataset.artId = art.id;
        button.setAttribute("aria-label", `${hotspot.title}. Show artwork detail.`);
        if (isDetailDiscovered(art.id, index)) button.classList.add("discovered");

        button.addEventListener("click", event => {
            event.stopPropagation();

            document.querySelectorAll(".art-hotspot").forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active", "discovered");
            button.setAttribute("aria-pressed", "true");
            markDetailDiscovered(art.id, index);
            showHotspotInfo(hotspot);
        });

        artwork.appendChild(button);
    });
}

function showHotspotInfo(hotspot) {
    const panel = getElement("hotspotInfo");
    if (!panel) return;

    setText("hotspotTitle", hotspot.title);
    setText("hotspotText", hotspot.text);
    panel.classList.add("visible");

    window.setTimeout(() => {
        panel.scrollIntoView({
            behavior: prefersReducedMotion.matches ? "auto" : "smooth",
            block: "nearest"
        });
    }, 120);
}

/* =========================================================
   RESTORATION WORKSHOP
========================================================= */

function initRestorationWorkshop() {
    const artwork = getElement("restorationArt");
    if (!artwork) return;

    const controls = {
        brightness: getElement("brightness"),
        contrast: getElement("contrast"),
        saturation: getElement("saturation"),
        sepia: getElement("sepia")
    };

    const values = {
        brightness: getElement("brightnessValue"),
        contrast: getElement("contrastValue"),
        saturation: getElement("saturationValue"),
        sepia: getElement("sepiaValue")
    };

    const score = getElement("restoreScore");
    const scoreMessage = getElement("restoreMessage");
    const comparisonSlider = getElement("comparisonSlider");
    const comparison = getElement("restorationCompare");
    const comparisonWrap = getElement("restorationAfterWrap");
    const comparisonDivider = getElement("comparisonDivider");
    const completeBanner = getElement("restorationComplete");

    if (Object.values(controls).some(control => !control)) return;

    const target = {
        brightness: 110,
        contrast: 115,
        saturation: 105,
        sepia: 15
    };

    const update = () => {
        const current = Object.fromEntries(
            Object.entries(controls).map(([key, control]) => [key, Number(control.value)])
        );

        artwork.style.filter = [
            `brightness(${current.brightness}%)`,
            `contrast(${current.contrast}%)`,
            `saturate(${current.saturation}%)`,
            `sepia(${current.sepia}%)`
        ].join(" ");

        Object.entries(values).forEach(([key, output]) => {
            if (output) output.textContent = `${current[key]}%`;
        });

        const difference = Object.keys(target).reduce(
            (sum, key) => sum + Math.abs(current[key] - target[key]),
            0
        );

        const calculatedScore = Math.max(0, Math.round(100 - difference / 3));
        if (score) score.textContent = String(calculatedScore);

        if (scoreMessage) {
            if (calculatedScore === 100) {
                scoreMessage.textContent = "Excellent restoration — target reached.";
            } else if (calculatedScore >= 95) {
                scoreMessage.textContent = "Restoration complete — the image is beautifully balanced.";
            } else if (calculatedScore >= 90) {
                scoreMessage.textContent = "Very close. Fine-tune the values.";
            } else if (calculatedScore >= 70) {
                scoreMessage.textContent = "Good progress. Keep comparing the image.";
            } else {
                scoreMessage.textContent = "Keep experimenting with the restoration controls.";
            }
        }

        if (completeBanner) {
            completeBanner.hidden = calculatedScore < 95;
            completeBanner.classList.toggle("show", calculatedScore >= 95);
        }
    };

    const updateComparison = () => {
        const value = Number(comparisonSlider?.value ?? 50);
        if (comparisonWrap) comparisonWrap.style.width = `${value}%`;
        if (comparisonDivider) comparisonDivider.style.left = `${value}%`;
        if (comparison && artwork) artwork.style.width = `${comparison.clientWidth}px`;
    };

    Object.values(controls).forEach(control => control.addEventListener("input", update));
    comparisonSlider?.addEventListener("input", updateComparison);
    window.addEventListener("resize", updateComparison, { passive: true });

    getElement("autoRestore")?.addEventListener("click", () => {
        Object.entries(target).forEach(([key, value]) => {
            controls[key].value = value;
        });
        update();
    });

    getElement("resetRestore")?.addEventListener("click", () => {
        controls.brightness.value = 100;
        controls.contrast.value = 100;
        controls.saturation.value = 100;
        controls.sepia.value = 0;
        update();
    });

    updateComparison();
    update();
}

/* =========================================================
   WORKSHOP QUIZ
========================================================= */

function initQuiz() {
    const cards = document.querySelectorAll(".quiz-card");
    if (!cards.length) return;

    cards.forEach(card => {
        const options = card.querySelectorAll(".quiz-option");
        const result = card.querySelector(".quiz-result") || card.querySelector("#quizResult");
        if (!options.length || !result) return;

        options.forEach(option => {
            option.addEventListener("click", () => {
                options.forEach(button => {
                    button.classList.remove("correct", "wrong");
                    button.removeAttribute("aria-current");
                });

                const correct = option.dataset.correct === "true";
                option.classList.add(correct ? "correct" : "wrong");
                option.setAttribute("aria-current", "true");

                if (correct) {
                    result.textContent = option.dataset.feedback ||
                        "Correct — conservation helps protect cultural heritage for future generations.";
                } else {
                    result.textContent = option.dataset.feedbackWrong ||
                        "Not quite. Try another answer.";
                }
            });
        });
    });
}

/* =========================================================
   COLLECTION EXPLORER + FAVORITES
========================================================= */
const favoritesStorageKey = "lad-favorites-v1";
let favoriteArtworks = new Set();
let collectionFilter = "all";
let collectionSearch = "";

function loadFavorites() {
    try { favoriteArtworks = new Set(JSON.parse(localStorage.getItem(favoritesStorageKey) || "[]")); }
    catch { favoriteArtworks = new Set(); }
}
function saveFavorites() {
    try { localStorage.setItem(favoritesStorageKey, JSON.stringify([...favoriteArtworks])); } catch {}
}
function toggleFavorite(artId) {
    if (!artworks[artId]) return;
    if (favoriteArtworks.has(artId)) favoriteArtworks.delete(artId); else favoriteArtworks.add(artId);
    saveFavorites();
    updateFavoriteButton();
    renderCollectionExplorer();
}
function updateFavoriteButton() {
    const button = getElement("favoriteArtwork");
    if (!button) return;
    const saved = favoriteArtworks.has(currentExhibitionArtId);
    button.classList.toggle("saved", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.textContent = saved ? "★ SAVED TO MY COLLECTION" : "☆ SAVE TO MY COLLECTION";
}
function initFavorites() {
    loadFavorites();
    getElement("favoriteArtwork")?.addEventListener("click", () => toggleFavorite(currentExhibitionArtId));
    updateFavoriteButton();
}

function initCollectionExplorer() {
    const grid = getElement("collectionExplorerGrid");
    if (!grid) return;
    loadFavorites();
    renderCollectionExplorer();

    getElement("collectionSearch")?.addEventListener("input", event => {
        collectionSearch = event.target.value.toLowerCase().trim();
        renderCollectionExplorer();
    });
    document.querySelectorAll("[data-collection-filter]").forEach(button => {
        button.addEventListener("click", () => {
            collectionFilter = button.dataset.collectionFilter;
            document.querySelectorAll("[data-collection-filter]").forEach(btn => btn.classList.toggle("active", btn === button));
            renderCollectionExplorer();
        });
    });
    getElement("randomArtwork")?.addEventListener("click", () => {
        const ids = Object.keys(artworks);
        openFromExplorer(ids[Math.floor(Math.random() * ids.length)]);
    });
}

function getFilteredArtworks() {
    return Object.values(artworks).filter(art => {
        const matchesFilter = collectionFilter === "all" || (collectionFilter === "favorites" ? favoriteArtworks.has(art.id) : art.category === collectionFilter);
        const haystack = `${art.title} ${art.artist} ${art.era} ${art.roomName}`.toLowerCase();
        return matchesFilter && (!collectionSearch || haystack.includes(collectionSearch));
    });
}

function renderCollectionExplorer() {
    const grid = getElement("collectionExplorerGrid");
    if (!grid) return;
    const items = getFilteredArtworks();
    grid.innerHTML = "";
    setText("collectionResultCount", `${items.length} WORKS`);

    if (!items.length) {
        grid.innerHTML = '<div class="collection-empty">No artworks match this search. Try another wing or title.</div>';
        return;
    }

    items.forEach(art => {
        const card = document.createElement("article");
        card.className = "collection-explorer-card";
        card.dataset.artId = art.id;
        const found = countDiscoveredForArt(art.id);
        const saved = favoriteArtworks.has(art.id);
        card.innerHTML = `
            <button class="collection-card-open" type="button" aria-label="Open ${art.title}">
                <span class="collection-card-image"><img src="${art.image}" alt="${art.title} by ${art.artist}" loading="lazy"></span>
                <span class="collection-card-top"><small>${art.imageNumber} / ${art.categoryLabel}</small><b>${visitedArtworks.has(art.id) ? "VISITED ✓" : "UNVISITED"}</b></span>
                <span class="collection-card-copy"><strong>${art.title}</strong><em>${art.artist}</em><small>${art.era} · ${found}/${art.hotspots.length} details</small></span>
            </button>
            <button class="collection-favorite${saved ? " saved" : ""}" type="button" aria-label="${saved ? "Remove" : "Save"} ${art.title} ${saved ? "from" : "to"} my collection">${saved ? "★" : "☆"}</button>`;
        card.querySelector(".collection-card-open").addEventListener("click", () => openFromExplorer(art.id));
        card.querySelector(".collection-favorite").addEventListener("click", () => toggleFavorite(art.id));
        grid.appendChild(card);
    });
}

function openFromExplorer(artId) {
    selectArtworkRoom(artId, true);
    window.setTimeout(() => getElement("virtualRoom")?.scrollIntoView({behavior: prefersReducedMotion.matches ? "auto" : "smooth", block:"center"}), 120);
}

/* =========================================================
   NIGHT PASSPORT — DISCOVERY PROGRESS
========================================================= */

const passportStorageKey = "lad-night-passport-v3";
const visitedStorageKey = "lad-visited-artworks-v1";
let discoveredDetails = new Set();
let visitedArtworks = new Set();

function totalHotspots() {
    return Object.values(artworks).reduce((sum, art) => sum + (art.hotspots?.length || 0), 0);
}

function loadPassport() {
    try {
        const saved = JSON.parse(localStorage.getItem(passportStorageKey) || "[]");
        discoveredDetails = new Set(Array.isArray(saved) ? saved : []);
        const visited = JSON.parse(localStorage.getItem(visitedStorageKey) || "[]");
        visitedArtworks = new Set(Array.isArray(visited) ? visited : []);
    } catch {
        discoveredDetails = new Set();
        visitedArtworks = new Set();
    }
}

function savePassport() {
    try {
        localStorage.setItem(passportStorageKey, JSON.stringify([...discoveredDetails]));
        localStorage.setItem(visitedStorageKey, JSON.stringify([...visitedArtworks]));
    } catch {}
}

function markArtworkVisited(artId) {
    if (!artworks[artId]) return;
    visitedArtworks.add(artId);
    savePassport();
    updatePassportUI();
}

function detailKey(artId, index) { return `${artId}:${index}`; }
function isDetailDiscovered(artId, index) { return discoveredDetails.has(detailKey(artId, index)); }
function markDetailDiscovered(artId, index) {
    discoveredDetails.add(detailKey(artId, index));
    visitedArtworks.add(artId);
    savePassport();
    updatePassportUI();
}
function countDiscoveredForArt(artId) {
    return artworks[artId]?.hotspots?.reduce((total, _, index) => total + (isDetailDiscovered(artId, index) ? 1 : 0), 0) || 0;
}

function updatePassportUI() {
    const total = discoveredDetails.size;
    const max = totalHotspots();
    setText("passportStatus", `${total} / ${max} DETAILS DISCOVERED`);
    setText("passportVisited", `${visitedArtworks.size} / ${Object.keys(artworks).length} ARTWORKS VISITED`);

    document.querySelectorAll("[data-passport-art]").forEach(label => {
        const artId = label.dataset.passportArt;
        const count = countDiscoveredForArt(artId);
        label.textContent = `${count} / ${artworks[artId].hotspots.length}`;
    });

    const fill = getElement("passportProgressFill");
    const bar = getElement("passportProgress");
    if (fill) fill.style.width = `${max ? Math.min(100, total / max * 100) : 0}%`;
    if (bar) {
        bar.setAttribute("aria-valuemax", String(max));
        bar.setAttribute("aria-valuenow", String(Math.min(total, max)));
    }

    const roomCount = countDiscoveredForArt(currentExhibitionArtId);
    const roomMax = artworks[currentExhibitionArtId]?.hotspots?.length || 0;
    setText("hotspotDiscoveryState", `${roomCount} / ${roomMax} details found in this room`);

    document.querySelectorAll(".art-hotspot").forEach(button => {
        const index = Number(button.dataset.hotspotIndex);
        const artId = button.dataset.artId;
        if (artId && Number.isFinite(index)) button.classList.toggle("discovered", isDetailDiscovered(artId, index));
    });

    const status = getElement("passportStatus");
    if (total >= max && max > 0) {
        if (status) status.textContent = "MASTER CURATOR — ALL DETAILS FOUND ✓";
    }
    if (getElement("collectionExplorerGrid")) renderCollectionExplorer();
}

function initMuseumPassport() {
    if (!getElement("passportStatus")) return;
    loadPassport();
    markArtworkVisited(currentExhibitionArtId);
    updatePassportUI();

    getElement("resetPassport")?.addEventListener("click", () => {
        discoveredDetails.clear();
        visitedArtworks.clear();
        savePassport();
        updatePassportUI();
        renderCollectionExplorer();
        setText("museumLiveStatus", "Night Passport discovery progress reset.");
    });
}

/* =========================================================
   FULLSCREEN ARTWORK INSPECTION + MAGNIFIER
========================================================= */

let inspectionArtId = "mona";

let inspectionZoom = 1;
let inspectionPosition = {x:50, y:50};
let inspectionDragging = false;
let inspectionLastPoint = null;

function initFullscreenInspection() {
    const overlay = getElement("fullscreenInspection");
    const image = getElement("inspectionImage");
    const lens = getElement("inspectionLens");
    if (!overlay || !image || !lens) return;

    getElement("closeInspection")?.addEventListener("click", closeFullscreenInspection);
    getElement("inspectionZoomIn")?.addEventListener("click", () => setInspectionZoom(inspectionZoom + .5));
    getElement("inspectionZoomOut")?.addEventListener("click", () => setInspectionZoom(inspectionZoom - .5));
    getElement("inspectionZoomReset")?.addEventListener("click", () => { inspectionPosition={x:50,y:50}; setInspectionZoom(1); });

    image.addEventListener("pointermove", event => {
        const rect = image.getBoundingClientRect();
        if (event.pointerType !== "touch" && inspectionZoom <= 1) {
            const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
            const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
            lens.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            lens.classList.add("visible");
        }
        if (inspectionDragging && inspectionLastPoint) {
            const dx=(event.clientX-inspectionLastPoint.x)/rect.width*100;
            const dy=(event.clientY-inspectionLastPoint.y)/rect.height*100;
            inspectionPosition.x=Math.max(0,Math.min(100,inspectionPosition.x-dx*1.6));
            inspectionPosition.y=Math.max(0,Math.min(100,inspectionPosition.y-dy*1.6));
            inspectionLastPoint={x:event.clientX,y:event.clientY};
            applyInspectionZoom();
        }
    });
    image.addEventListener("pointerdown", event => {
        if (event.pointerType === "touch" && inspectionZoom === 1) setInspectionZoom(2);
        if (inspectionZoom > 1) {
            inspectionDragging = true;
            inspectionLastPoint = {x:event.clientX,y:event.clientY};
            image.setPointerCapture?.(event.pointerId);
        }
    });
    const stopDrag=()=>{inspectionDragging=false;inspectionLastPoint=null;};
    image.addEventListener("pointerup", stopDrag);
    image.addEventListener("pointercancel", stopDrag);
    image.addEventListener("pointerleave", () => { lens.classList.remove("visible"); if(!inspectionDragging) stopDrag(); });

    document.addEventListener("keydown", event => {
        if (!overlay.classList.contains("open")) return;
        if (event.key === "Escape") closeFullscreenInspection();
        if (event.key === "+" || event.key === "=") setInspectionZoom(inspectionZoom + .5);
        if (event.key === "-") setInspectionZoom(inspectionZoom - .5);
        if (event.key === "0") {inspectionPosition={x:50,y:50};setInspectionZoom(1);}
    });
}
function setInspectionZoom(value) {
    inspectionZoom=Math.max(1,Math.min(4,value));
    setText("inspectionZoomValue", `${Math.round(inspectionZoom*100)}%`);
    applyInspectionZoom();
}
function applyInspectionZoom() {
    const image=getElement("inspectionImage");
    if(!image) return;
    image.style.backgroundSize=inspectionZoom<=1?"contain":`${inspectionZoom*100}% auto`;
    image.style.backgroundPosition=`${inspectionPosition.x}% ${inspectionPosition.y}%`;
    image.classList.toggle("zoomed", inspectionZoom>1);
}

function openFullscreenInspection(artId = currentExhibitionArtId) {
    const art = artworks[artId];
    const overlay = getElement("fullscreenInspection");
    const image = getElement("inspectionImage");
    const lens = getElement("inspectionLens");
    const hotspotContainer = getElement("inspectionHotspots");
    if (!art || !overlay || !image || !lens || !hotspotContainer) return;

    inspectionArtId = artId;
    inspectionPosition = {x:50, y:50};
    setInspectionZoom(1);
    setText("inspectionTitle", art.title);
    setText("inspectionDetailNumber", "SELECT A DETAIL");
    setText("inspectionDetailTitle", "Look closer.");
    setText("inspectionDetailText", "Move your cursor over the artwork to magnify it, or choose a numbered hotspot.");

    image.style.backgroundImage = `url("${art.image}")`;
    lens.style.backgroundImage = `url("${art.image}")`;
    image.setAttribute("aria-label", `${art.title} — ${art.artist}`);
    hotspotContainer.innerHTML = "";

    art.hotspots.forEach((hotspot, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "inspection-hotspot";
        button.style.left = `${hotspot.x}%`;
        button.style.top = `${hotspot.y}%`;
        button.textContent = String(index + 1);
        button.setAttribute("aria-label", `${hotspot.title}. Inspect detail.`);
        if (isDetailDiscovered(art.id, index)) button.classList.add("discovered");

        button.addEventListener("click", () => {
            hotspotContainer.querySelectorAll(".inspection-hotspot").forEach(item => item.classList.remove("active"));
            button.classList.add("active", "discovered");
            setText("inspectionDetailNumber", `DETAIL 0${index + 1}`);
            setText("inspectionDetailTitle", hotspot.title);
            setText("inspectionDetailText", hotspot.text);
            markDetailDiscovered(art.id, index);
        });

        hotspotContainer.appendChild(button);
    });

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    getElement("closeInspection")?.focus();
}

function closeFullscreenInspection() {
    const overlay = getElement("fullscreenInspection");
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    getElement("inspectionLens")?.classList.remove("visible");
}

/* =========================================================
   GUIDED NIGHT TOUR
========================================================= */

const guidedTour = {
    active: false,
    index: 0,
    startedAt: 0,
    artIds: ["mona", "victory", "venus"],
    mode: "highlights"
};

function initGuidedTour() {
    getElement("startGuidedTour")?.addEventListener("click", () => startGuidedTour("highlights", true));
    getElement("startGrandTour")?.addEventListener("click", () => startGuidedTour("grand", true));
    getElement("guidedTourNext")?.addEventListener("click", advanceGuidedTour);
    getElement("tourModalNext")?.addEventListener("click", advanceGuidedTour);
    getElement("guidedTourStop")?.addEventListener("click", () => endGuidedTour(false));
    getElement("tourCompleteClose")?.addEventListener("click", closeTourCompletion);
    getElement("tourCompletePassport")?.addEventListener("click", () => {
        closeTourCompletion();
        getElement("museumMap")?.scrollIntoView({behavior: prefersReducedMotion.matches ? "auto" : "smooth"});
    });

    const params = new URLSearchParams(window.location.search);
    if (params.get("tour") === "1") window.setTimeout(() => startGuidedTour("highlights", false), 450);
    if (params.get("tour") === "grand") window.setTimeout(() => startGuidedTour("grand", false), 450);
}

function startGuidedTour(mode = "highlights", autoNarrate = true) {
    guidedTour.mode = mode;
    guidedTour.artIds = mode === "grand" ? Object.keys(artworks) : ["mona", "victory", "venus", "liberty", "medusa", "hammurabi", "psyche", "horatii"];
    guidedTour.active = true;
    guidedTour.index = 0;
    guidedTour.startedAt = Date.now();
    const dock = getElement("guidedTourDock");
    dock?.classList.add("open");
    dock?.setAttribute("aria-hidden", "false");
    document.body.classList.add("guided-tour-active");
    showGuidedTourStep(autoNarrate);
}

function showGuidedTourStep(autoNarrate = false) {
    const artId = guidedTour.artIds[guidedTour.index];
    const art = artworks[artId];
    if (!art) return;

    selectArtworkRoom(artId, currentExhibitionArtId !== artId);
    const total = guidedTour.artIds.length;
    setText("guidedTourStep", `STOP ${String(guidedTour.index + 1).padStart(2,"0")} / ${String(total).padStart(2,"0")}`);
    setText("guidedTourTitle", art.title);
    const line = getElement("guidedTourLineFill");
    if (line) line.style.width = `${((guidedTour.index + 1) / total) * 100}%`;

    const nextButton = getElement("guidedTourNext");
    if (nextButton) nextButton.textContent = guidedTour.index === total - 1 ? "FINISH TOUR ✓" : "NEXT ARTWORK →";
    setText("museumLiveStatus", `Guided tour. Stop ${guidedTour.index + 1} of ${total}. ${art.title}.`);

    window.setTimeout(() => getElement("virtualRoom")?.scrollIntoView({behavior: prefersReducedMotion.matches ? "auto" : "smooth", block:"center"}), prefersReducedMotion.matches ? 0 : 350);
    window.setTimeout(() => {
        currentExhibitionArtId = artId;
        openArtworkModal(artId, getElement("inspectArtwork"));
        const modalNext = getElement("tourModalNext");
        if (modalNext) modalNext.hidden = false;
        if (autoNarrate) playAudioGuide();
    }, prefersReducedMotion.matches ? 100 : 850);
}

function advanceGuidedTour() {
    if (!guidedTour.active) return;
    stopAudioGuide(true);
    closeArtworkModal();
    closeFullscreenInspection();
    if (guidedTour.index >= guidedTour.artIds.length - 1) {
        endGuidedTour(true);
        return;
    }
    guidedTour.index += 1;
    window.setTimeout(() => showGuidedTourStep(true), prefersReducedMotion.matches ? 0 : 240);
}

function endGuidedTour(completed = false) {
    guidedTour.active = false;
    stopAudioGuide(true);
    getElement("guidedTourDock")?.classList.remove("open");
    getElement("guidedTourDock")?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("guided-tour-active");
    const modalNext = getElement("tourModalNext");
    if (modalNext) modalNext.hidden = true;
    setText("museumLiveStatus", completed ? "Guided night tour complete." : "Guided night tour ended.");
    if (completed) showTourCompletion();
}

function showTourCompletion() {
    const overlay = getElement("tourComplete");
    if (!overlay) return;
    const minutes = Math.max(1, Math.round((Date.now() - guidedTour.startedAt) / 60000));
    setText("tourCompleteVisited", `${visitedArtworks.size}/${Object.keys(artworks).length}`);
    setText("tourCompleteDetails", `${discoveredDetails.size}/${totalHotspots()}`);
    setText("tourCompleteFavorites", String(favoriteArtworks.size));
    setText("tourCompleteTime", `${minutes} MIN`);
    setText("tourCompleteMode", guidedTour.mode === "grand" ? "GRAND NIGHT TOUR COMPLETE" : "HIGHLIGHTS TOUR COMPLETE");
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    getElement("tourCompleteClose")?.focus();
}
function closeTourCompletion() {
    const overlay = getElement("tourComplete");
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

/* =========================================================
   PROCEDURAL MUSEUM AMBIENCE
========================================================= */

let ambientContext = null;
let ambientNodes = [];
let ambienceOn = false;

function initMuseumAmbience() {
    const button = getElement("ambienceToggle");
    if (!button) return;
    button.addEventListener("click", () => ambienceOn ? stopMuseumAmbience() : startMuseumAmbience());
}

function startMuseumAmbience() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        setText("museumLiveStatus", "Ambient audio is not supported in this browser.");
        return;
    }

    stopMuseumAmbience();
    ambientContext = new AudioContextClass();
    const master = ambientContext.createGain();
    master.gain.value = 0.035;
    master.connect(ambientContext.destination);

    const lowDrone = ambientContext.createOscillator();
    const droneGain = ambientContext.createGain();
    lowDrone.type = "sine";
    lowDrone.frequency.value = 52;
    droneGain.gain.value = 0.08;
    lowDrone.connect(droneGain).connect(master);
    lowDrone.start();

    const buffer = ambientContext.createBuffer(1, ambientContext.sampleRate * 3, ambientContext.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.2;
    }

    const noise = ambientContext.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ambientContext.createBiquadFilter();
    const noiseGain = ambientContext.createGain();
    filter.type = "lowpass";
    filter.frequency.value = 700;
    noiseGain.gain.value = 0.035;
    noise.connect(filter).connect(noiseGain).connect(master);
    noise.start();

    ambientNodes = [lowDrone, noise, master];
    ambienceOn = true;
    const button = getElement("ambienceToggle");
    if (button) {
        button.textContent = "◉ AMBIENCE ON";
        button.setAttribute("aria-pressed", "true");
    }
}

function stopMuseumAmbience() {
    ambientNodes.forEach(node => {
        try { node.stop?.(); } catch {}
        try { node.disconnect?.(); } catch {}
    });
    ambientNodes = [];
    if (ambientContext) {
        ambientContext.close().catch(() => {});
        ambientContext = null;
    }
    ambienceOn = false;
    const button = getElement("ambienceToggle");
    if (button) {
        button.textContent = "◌ AMBIENCE OFF";
        button.setAttribute("aria-pressed", "false");
    }
}

/* =========================================================
   USER TESTING DEMO (ANALYSIS PAGE)
========================================================= */

function initUserTestingDemo() {
    const form = getElement("userTestForm");
    if (!form) return;
    const result = getElement("userTestResult");
    const storageKey = "lad-user-test-responses-v1";

    const load = () => {
        try { return JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch { return []; }
    };
    const updateStats = () => {
        const rows = load();
        setText("testResponseCount", String(rows.length));
        const avg = rows.length ? rows.reduce((s,r)=>s+Number(r.experience||0),0)/rows.length : 0;
        setText("testAverageScore", rows.length ? avg.toFixed(1) : "—");
        const counts={}; rows.forEach(r=>counts[r.feature]=(counts[r.feature]||0)+1);
        const top=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0] || "—";
        setText("testTopFeature", top);
    };

    form.addEventListener("submit", event => {
        event.preventDefault();
        const data = new FormData(form);
        const score = Number(data.get("experience") || 0);
        const feature = String(data.get("feature") || "");
        if (!score || !feature) {
            if (result) result.textContent = "Choose a score and the feature that helped most.";
            return;
        }
        const rows=load();
        rows.push({timestamp:new Date().toISOString(),experience:score,feature});
        localStorage.setItem(storageKey, JSON.stringify(rows));
        if (result) result.textContent = `Response saved on this device: ${score}/5 · ${feature}.`;
        form.reset(); updateStats();
    });

    getElement("exportTestCsv")?.addEventListener("click", () => {
        const rows=load();
        if(!rows.length){ if(result) result.textContent="No test responses to export yet."; return; }
        const esc=v=>`"${String(v).replaceAll('"','""')}"`;
        const csv=["timestamp,experience,feature",...rows.map(r=>[r.timestamp,r.experience,r.feature].map(esc).join(","))].join("\n");
        const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});
        const url=URL.createObjectURL(blob); const a=document.createElement("a");
        a.href=url;a.download="louvre-after-dark-user-test.csv";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
        if(result) result.textContent=`Exported ${rows.length} responses as CSV.`;
    });
    getElement("clearTestData")?.addEventListener("click",()=>{localStorage.removeItem(storageKey);updateStats();if(result) result.textContent="Local test responses cleared.";});
    updateStats();
}

/* =========================================================
   ANIMATED COUNTERS
========================================================= */

function initCounters() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
        counters.forEach(counter => {
            counter.textContent = counter.dataset.target || "0";
        });
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.4 }
    );

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = Number(element.dataset.target || 0);
    const duration = 900;
    const start = performance.now();

    const tick = now => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));

        if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}
