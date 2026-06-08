// ============================================================
//  SHARED SOULS — Character Database
//  Source: "Shared Souls" by Arcnote (AO3 #71180021)
//  97 chapters | 256,505 words | Published 2025-09-22
// ============================================================

export const CHARACTERS = {

  // ─── CORE PROTAGONIST ─────────────────────────────────────
  momo: {
    id: "momo",
    name: "Yaoyorozu Momo",
    alias: "Creati / The Everything Hero",
    fandom: "MHA",
    role: "protagonist",
    color: "#805AD5",
    glow: "rgba(128,90,213,0.35)",
    first_chapter: 1,
    description: "The sole surviving vessel of three shared souls. Born into Tokyo's elite, Momo manifested her Quirk (Creation) at four. At ten, she began receiving vivid dream-memories from two deceased women. By twelve their vestiges could speak to her aloud. Her journey is one of prodigious intellect fused with the instincts and skills of a spy and a demon-slayer.",
    quirk: "Creation — can manifest any non-living object whose atomic structure she understands. Demands constant caloric intake proportional to object complexity.",
    fighting_style: "Vestige-enhanced combat: Insect Breathing (Shinobu), tactical spycraft (Natasha), custom staff/bladed weapons (self-created). Gains a Demon Slayer Mark during the Endless Mansion arc.",
    key_relationships: ["shinobu", "natasha", "shouto", "kyouka", "katsuki", "izuku", "giyuu", "ekaterina", "haruto", "eri"],
    arcs: ["origins", "ua_beginnings", "rise_of_villains", "fated_battles", "justice"],
    notable_moments: [
      { ch: 1, desc: "Born; Quirk manifests at age 4 in the family library." },
      { ch: 3, desc: "Age 12 — Shinobu and Natasha manifest as visible vestiges in her bedroom." },
      { ch: 21, desc: "Wins the U.A. Sports Festival First Year tournament, defeating Bakugou in the final." },
      { ch: 48, desc: "First encounter with Kurohana during the Shie Hassaikai arc; fights nearly to unconsciousness." },
      { ch: 76, desc: "Mother Ekaterina killed in Dabi-blue fire set by Kurohana; emotional breakdown broadcast live." },
      { ch: 80, desc: "Goes rogue; fights her own classmates while unstable." },
      { ch: 93, desc: "Origin chapter — meets Ekaterina's soul-echo in her mindscape; loses her left arm, later receives prosthetic." },
      { ch: 97, desc: "Final chapter — trains her Demon Slayer Mark; participates in USJ rescue field trip; finds peace." }
    ]
  },

  // ─── VESTIGES ─────────────────────────────────────────────
  shinobu: {
    id: "shinobu",
    name: "Kochou Shinobu",
    alias: "The Insect Hashira",
    fandom: "Demon Slayer",
    role: "vestige / mentor",
    color: "#9F7AEA",
    glow: "rgba(159,122,234,0.35)",
    first_chapter: 1,
    description: "Former Insect Pillar of the Demon Slayer Corps. Appears in Momo's dreams from age 10, manifests visibly from age 12. Her soul-outline glows lavender-blue. Sly, teasing, and sharp-tongued but deeply caring. She uses Insect Breathing and wisteria-based poisons. Lost her elder sister Kanae to a demon before her own death.",
    appearance: "Petite, ~4'11½. Raven-black hair fading to deep violet, fastened in a flat yakai-maki bun with a white butterfly ornament. Gradient purple pupil-less eyes. Taisho-era Demon Slayer uniform in dark purple with gold buttons, butterfly-wing haori (white→aqua→pink). Stinger-bladed katana: tsuba is four-petal aqua flower, blade is lavender-blue engraved with '惡鬼' (Evil Demon) and '滅殺' (Destruction).",
    quirk: null,
    fighting_style: "Insect Breathing; Total Concentration Breathing (teaches Momo). Specialises in wisteria poison injection via her needle-tipped blade. Compensates for lack of raw strength with surgical precision and exceptional speed.",
    key_relationships: ["momo", "natasha", "giyuu", "aizawa"],
    arcs: ["origins", "ua_beginnings", "rise_of_villains", "fated_battles", "justice"],
    notable_moments: [
      { ch: 1, desc: "First appears in Momo's dreams at age 10 — brewing poisons in a wisteria garden." },
      { ch: 3, desc: "Manifests visibly in Momo's bedroom; introduces herself as a vestige." },
      { ch: 76, desc: "Chosen to console Momo after Ekaterina's death over Natasha." },
      { ch: 87, desc: "Revealed fully in her Insect Hashira role; trains Momo in a sweltering room with Giyuu." },
      { ch: 97, desc: "Training continues; her Demon Slayer Mark is now permanently visible." }
    ]
  },

  natasha: {
    id: "natasha",
    name: "Natasha Romanov",
    alias: "Black Widow",
    fandom: "MCU",
    role: "vestige / mentor",
    color: "#F56565",
    glow: "rgba(245,101,101,0.35)",
    first_chapter: 2,
    description: "Former Black Widow and Avenger. Appears in Momo's dreams from age 11, alongside brutal combat memories and KGB-era trauma. Her soul-outline glows scarlet. Dry-witted, tactically brilliant, and fiercely protective. Acts as a parental figure — Momo looks to her more than Shinobu in a mother-daughter dynamic. Uncomfortable with emotional expression; admits this openly.",
    appearance: "Fiery red hair (copper in light), hazel eyes (green-to-brown shift), lean muscular build. Later appears in-world as a physical teacher at U.A.",
    quirk: null,
    fighting_style: "MCU Black Widow skill set: firearms, edged weapons, hand-to-hand (Widow's Bite). Tactical analysis and espionage. Trains Momo in spycraft, threat-reading, and combat awareness.",
    key_relationships: ["momo", "shinobu", "aizawa", "eri"],
    arcs: ["origins", "ua_beginnings", "rise_of_villains", "fated_battles", "justice"],
    notable_moments: [
      { ch: 2, desc: "First appears in dreams — red-haired woman with a gun, blood-soaked mission memories." },
      { ch: 3, desc: "Manifests alongside Shinobu; identified as Natasha Romanov." },
      { ch: 76, desc: "Declines to console Momo directly; self-aware about her emotional limits." },
      { ch: 93, desc: "Fires a critical shot that saves Star and Stripe from Kurohana; her vestige form is clearly fading." },
      { ch: 97, desc: "Caught laughing with Aizawa — a rare moment of peace." }
    ]
  },

  // ─── DEMON SLAYER CHARACTERS ──────────────────────────────
  giyuu: {
    id: "giyuu",
    name: "Tomioka Giyuu",
    alias: "The Water Hashira",
    fandom: "Demon Slayer",
    role: "supporting / physical presence",
    color: "#4299E1",
    glow: "rgba(66,153,225,0.35)",
    first_chapter: 1,
    description: "Former Water Pillar of the Demon Slayer Corps. Connected to the MHA world through the vestige link — becomes physically present at U.A. alongside Shinobu. Reserved, near-silent. Shinobu teases him constantly. His Demon Slayer Mark (blue, water-flow patterns on cheek/jaw) becomes permanently visible in the final arc. Spiritually paralleled with Shouto.",
    appearance: "Tall, stoic. Water Hashira uniform. Blue Demon Slayer Mark: flowing water patterns on left cheek and jaw with a smaller mark near hairline.",
    key_relationships: ["momo", "shinobu", "shouto"],
    notable_moments: [
      { ch: 1, desc: "Appears in Shinobu's early dreams — Shinobu patches his wounds, teases him." },
      { ch: 87, desc: "Trains Momo with Shinobu in the sweltering room; dual 2v1 sparring." },
      { ch: 93, desc: "Re-awakens his Demon Slayer Mark during the battle with Kurohana." },
      { ch: 97, desc: "Trains Momo alongside Shinobu; his mark is now permanently visible." }
    ]
  },

  // ─── MHA — CLASS 1-A CORE ─────────────────────────────────
  shouto: {
    id: "shouto",
    name: "Todoroki Shouto",
    alias: "Shoto",
    fandom: "MHA",
    role: "love interest / core classmate",
    color: "#63B3ED",
    glow: "rgba(99,179,237,0.35)",
    first_chapter: 7,
    description: "Seat neighbour of Momo. Son of the Number One Hero Endeavor. Carries the trauma of his father's abuse and his mother's hospitalisation. Spiritually paralleled with Giyuu in the narrative. Terrible at expressing feelings — the penultimate chapter is literally titled 'Todoroki, Do You Have Feelings for Yaomomo?'. Slow-burn romantic interest. Races to her side when her home burns (Ch 76).",
    quirk: "Half-Cold Half-Hot — right side ice, left side fire.",
    key_relationships: ["momo", "izuku", "giyuu", "enji", "touya"],
    notable_moments: [
      { ch: 18, desc: "Sports Festival — Momo and Midoriya's words push him to use his left side (fire)." },
      { ch: 20, desc: "Awards ceremony: Momo embraces him; he stiffens but allows it. Tells her he'll visit his mother." },
      { ch: 76, desc: "Immediately runs to Momo when he sees the broadcast. Ice-suppresses Dabi-fire. Holds her." },
      { ch: 94, desc: "'The Hellish Todoroki Family' arc — Endeavor's crimes are publicly confirmed." },
      { ch: 96, desc: "Chapter is literally titled 'Todoroki, Do You Have Feelings for Yaomomo?'" }
    ]
  },

  kyouka: {
    id: "kyouka",
    name: "Jirou Kyouka",
    alias: "Earphone Jack",
    fandom: "MHA",
    role: "best friend",
    color: "#E53E3E",
    glow: "rgba(229,62,62,0.35)",
    first_chapter: 7,
    description: "Momo's closest female friend in Class 1-A. Part of the trio tag with Kaminari. Tries to reach Momo after Ekaterina's death (Ch 76). Scoots over on the couch in the final chapter; genuinely notices Momo's exhaustion.",
    quirk: "Earphone Jack — extends her earlobes as audio jacks or weapons.",
    key_relationships: ["momo", "kaminari", "izuku"]
  },

  katsuki: {
    id: "katsuki",
    name: "Bakugou Katsuki",
    alias: "Kacchan / Dynamight",
    fandom: "MHA",
    role: "rival / protective classmate",
    color: "#ED8936",
    glow: "rgba(237,137,54,0.35)",
    first_chapter: 7,
    description: "Explosive, foul-mouthed, and fiercely proud. Loses the Sports Festival final to Momo — a defeat that fuels a grudging respect. Protective in his own gruff way: 'Check your damn phone. Or tell someone before you leave.' (Ch 95). Calls Momo 'Princess' or 'Ponytail'.",
    quirk: "Explosion — nitroglycerin-like sweat ignites on command.",
    key_relationships: ["momo", "izuku", "shouto"],
    notable_moments: [
      { ch: 21, desc: "Loses to Momo in the Sports Festival final. Furious; demands a rematch. Midnight gasses him." },
      { ch: 65, desc: "'Kacchan vs Yaomomo' — rematch in Joint Training arc." },
      { ch: 95, desc: "Scolds Momo for not telling anyone where she went. Protective edge underneath." }
    ]
  },

  izuku: {
    id: "izuku",
    name: "Midoriya Izuku",
    alias: "Deku",
    fandom: "MHA",
    role: "core classmate",
    color: "#48BB78",
    glow: "rgba(72,187,120,0.35)",
    first_chapter: 7,
    description: "Earnest, strategically brilliant, and emotionally perceptive. Supports Momo during the Sports Festival arc and is one of the first to sense something deeper is happening with her. Part of the tag pairing with Momo against Gentle Criminal (Ch 53).",
    quirk: "One For All — immense strength enhancement; he's still learning to control it.",
    key_relationships: ["momo", "katsuki", "shouto", "ochako"]
  },

  kaminari: {
    id: "kaminari",
    name: "Kaminari Denki",
    alias: "Chargebolt",
    fandom: "MHA",
    role: "classmate",
    color: "#F6E05E",
    glow: "rgba(246,224,94,0.35)",
    first_chapter: 7,
    description: "Loud, excitable, genuine. Part of the trio tag with Momo and Jirou. Expresses his concern vocally when Momo breaks down.",
    quirk: "Electrification."
  },

  ochako: {
    id: "ochako",
    name: "Uraraka Ochako",
    alias: "Uravity",
    fandom: "MHA",
    role: "classmate",
    color: "#F687B3",
    glow: "rgba(246,135,179,0.35)",
    first_chapter: 7,
    description: "Warm, expressive. Notices Momo hasn't eaten for three days after the fire and voices the group's worry.",
    quirk: "Zero Gravity."
  },

  iida: {
    id: "iida",
    name: "Iida Tenya",
    alias: "Ingenium",
    fandom: "MHA",
    role: "classmate / class vice-rep",
    color: "#B794F4",
    glow: "rgba(183,148,244,0.35)",
    first_chapter: 7,
    description: "Rigid, principled, deeply decent. Stops Kyouka and Izuku from chasing Shouto to Momo's burning home (Ch 76). Organises calling Shinobu and Natasha to Momo's side. Formal speech patterns.",
    quirk: "Engine — jet turbines in his calves."
  },

  mina: {
    id: "mina",
    name: "Ashido Mina",
    alias: "Pinky",
    fandom: "MHA",
    role: "classmate",
    color: "#FC8181",
    glow: "rgba(252,129,129,0.35)",
    first_chapter: 7,
    description: "Bubbly, energetic. Waves Momo over immediately in the final chapter.",
    quirk: "Acid."
  },

  hanta: {
    id: "hanta",
    name: "Sero Hanta",
    alias: "Cellophane",
    fandom: "MHA",
    role: "classmate",
    color: "#68D391",
    glow: "rgba(104,211,145,0.35)",
    first_chapter: 7,
    description: "The vocal worrier of the friend group. His 'You absolute dumbass, you can't just disappear like that!' (Ch 95) is one of the most emotionally resonant lines in the final arc.",
    quirk: "Tape — dispenses adhesive tape from his elbows."
  },

  shinsou: {
    id: "shinsou",
    name: "Shinsou Hitoshi",
    alias: "Mindjack",
    fandom: "MHA",
    role: "classmate / rival",
    color: "#A0AEC0",
    glow: "rgba(160,174,192,0.35)",
    first_chapter: 60,
    description: "Transfers into the Hero Course after the Joint Training arc. Dry humour (final chapter: 'And try not to get fooled by whoever Bakugou's pretending to be').",
    quirk: "Brainwashing — controls anyone who verbally responds to him."
  },

  // ─── MHA — UA FACULTY ─────────────────────────────────────
  aizawa: {
    id: "aizawa",
    name: "Aizawa Shouta",
    alias: "Eraserhead",
    fandom: "MHA",
    role: "faculty / romantic subplot",
    color: "#4A5568",
    glow: "rgba(74,85,104,0.35)",
    first_chapter: 7,
    description: "Class 1-A homeroom teacher. Dry, pragmatic, effective. Ships: Aizawa/Natasha — they are caught laughing together in Ch 97, 'both at the same time felt like she'd stepped into an alternate dimension'.",
    quirk: "Erasure — erases any non-mutant Quirk by looking at the user.",
    key_relationships: ["natasha", "momo"]
  },

  // ─── MHA — TODOROKI FAMILY ────────────────────────────────
  enji: {
    id: "enji",
    name: "Todoroki Enji",
    alias: "Endeavor",
    fandom: "MHA",
    role: "antagonist (systemic) / Shouto's father",
    color: "#E53E3E",
    glow: "rgba(229,62,62,0.25)",
    first_chapter: 22,
    description: "Number One Hero; abusive father. Exposed and publicly charged with child abuse and domestic violence in the Justice Saga. Retires; Hawks takes the Number One position.",
    quirk: "Hellflame."
  },

  touya: {
    id: "touya",
    name: "Todoroki Touya",
    alias: "Dabi",
    fandom: "MHA",
    role: "villain / Shouto's brother",
    color: "#63B3ED",
    glow: "rgba(99,179,237,0.25)",
    first_chapter: 57,
    description: "Eldest Todoroki son, presumed dead, became the villain Dabi. His blue flames burn the Yaoyorozu mansion in Ch 76 under Kurohana's direction (or as part of their collaboration). 'Dabi's Dance' arc (Ch 57) is his unmasking.",
    quirk: "Blueflame — cremation fire from his father's lineage, unstable in his body."
  },

  // ─── MHA — PRO HEROES ─────────────────────────────────────
  hawks: {
    id: "hawks",
    name: "Takami Keigo",
    alias: "Hawks",
    fandom: "MHA",
    role: "pro hero / supporting",
    color: "#F6AD55",
    glow: "rgba(246,173,85,0.35)",
    first_chapter: 55,
    description: "Number Two Hero, later inherits the Number One position after Endeavor retires. Announced as the new Number One in Ch 97.",
    quirk: "Fierce Wings."
  },

  lady_nagant: {
    id: "lady_nagant",
    name: "Tsutsumi Kaina",
    alias: "Lady Nagant",
    fandom: "MHA",
    role: "reformed villain / system-changer",
    color: "#9F7AEA",
    glow: "rgba(159,122,234,0.25)",
    first_chapter: 77,
    description: "Former villainous assassin, granted a full pardon in Ch 97. Appointed new President of the Hero Public Safety Commission — replacing a corrupt administration. A symbol of institutional reform.",
    quirk: "Rifle — sniper arm."
  },

  eri: {
    id: "eri",
    name: "Eri",
    alias: null,
    fandom: "MHA",
    role: "child ward / symbol of hope",
    color: "#CBD5E0",
    glow: "rgba(203,213,224,0.25)",
    first_chapter: 44,
    description: "Child rescued during the Shie Hassaikai arc. Natasha has a notably warm dynamic with her ('Shinobu: You've got more of a soft side than you admit. Natasha: Being good with little kids doesn't mean I'll be good at consoling a grieving teenager.').",
    quirk: "Rewind — reverse a living being's biological state."
  },

  // ─── MHA — CLASS 1-B / OTHERS ─────────────────────────────
  setsuna: {
    id: "setsuna",
    name: "Tokage Setsuna",
    alias: null,
    fandom: "MHA",
    role: "rival / Class 1-B",
    color: "#68D391",
    glow: "rgba(104,211,145,0.25)",
    first_chapter: 23,
    description: "Class 1-B student and Momo's co-intern during the Hero Killer arc. Sharp, competitive, genuinely likeable. Chapter 23 title is 'Bizarre! Tokage Setsuna Appears'. Trades playful banter with Momo throughout their internship.",
    quirk: "Lizard Tail Splitter — detaches and remotely controls up to 50 body part pieces."
  },

  // ─── YAOYOROZU FAMILY ─────────────────────────────────────
  ekaterina: {
    id: "ekaterina",
    name: "Yaoyorozu Ekaterina",
    alias: "Momo's mother",
    fandom: "MHA",
    role: "family / deceased",
    color: "#FEB2B2",
    glow: "rgba(254,178,178,0.35)",
    first_chapter: 1,
    description: "Born in Saint Petersburg; name means 'pure'. Striking: pale skin, sharp cheekbones, amber eyes. Fiercely protective, quick to laugh, dramatically affectionate. Russian endearments abound. Killed in Ch 76 when Kurohana has Dabi set the Yaoyorozu mansion ablaze. Her soul-echo appears to Momo in the mindscape during Ch 93: 'You are my pride. My joy. My brilliant, brave daughter.'",
    key_relationships: ["momo", "haruto"]
  },

  haruto: {
    id: "haruto",
    name: "Yaoyorozu Haruto",
    alias: "Momo's father",
    fandom: "MHA",
    role: "family",
    color: "#BEE3F8",
    glow: "rgba(190,227,248,0.25)",
    first_chapter: 1,
    description: "Tall, composed, reserved warmth. Reads to Momo every night as a child. On a business trip abroad when the mansion burns — spared by distance. Returns immediately on the first flight. Business magnate.",
    key_relationships: ["momo", "ekaterina"]
  },

  // ─── VILLAIN ──────────────────────────────────────────────
  kurohana: {
    id: "kurohana",
    name: "Kurohana",
    alias: "The Compass Villain",
    fandom: "MHA (OC)",
    role: "main antagonist",
    color: "#2D3748",
    glow: "rgba(45,55,72,0.6)",
    first_chapter: 47,
    description: "Original character villain. Entire body coated in living black sludge-armour. Black sclera, glowing white pupils, permanent predatory fangs. Tattered kimono fused with sludge-hardened plates. Black hair streaked with sludge that moves independently. First encountered during the Shie Hassaikai arc (Ch 47–48); obsession with Momo drives the entire Justice Saga. Destroyed the Yaoyorozu mansion to isolate Momo. Killed Ekaterina. Her Quirk — the Compass Technique — is a blooming lotus pattern that reads Fighting Spirit, letting her predict and counter any opponent. Killed by Momo (and vestiges) in Ch 93.",
    quirk: "Sludge Armour + Compass Technique — a black-to-white lotus petal formation that reads all nearby Fighting Spirits and predicts movements with near-perfect accuracy.",
    key_relationships: ["momo"],
    notable_moments: [
      { ch: 47, desc: "First appearance; sits on a throne of corpses. Demands Momo's name." },
      { ch: 48, desc: "Crushes Momo's left hand; defeats her and leaves her for dead." },
      { ch: 76, desc: "Orchestrates Ekaterina's murder via Dabi's Blueflame as psychological warfare." },
      { ch: 93, desc: "Final battle; Compass technique active, fights Star and Stripe, Shouto, Katsuki, Giyuu, and Natasha simultaneously." }
    ]
  },

  // ─── STAR AND STRIPE ──────────────────────────────────────
  star_and_stripe: {
    id: "star_and_stripe",
    name: "Cathleen Bate",
    alias: "Star and Stripe",
    fandom: "MHA",
    role: "allied pro hero",
    color: "#F6AD55",
    glow: "rgba(246,173,85,0.25)",
    first_chapter: 71,
    description: "USA Number One Hero. Appears in the World Heroes' Mission arc (Ch 71–75) and the Endless Mansion arc (Ch 86–94). Kurohana specifically targets her in Ch 93.",
    quirk: "New Order — imposes rules on anything she touches and names."
  }
};

// ─── ARC DEFINITIONS ──────────────────────────────────────────
export const ARCS = [
  {
    id: "origins",
    saga: "U.A. Beginnings Saga",
    name: "Origins Arc",
    chapters: [1, 6],
    summary: "Momo's early life at the Yaoyorozu estate. Her Quirk manifests at four. Dreams begin at ten — Shinobu's wisteria garden, then Natasha's blood-soaked missions. At twelve, the vestiges appear physically in her bedroom. She enrolls in a private academy; social isolation. The shared-soul concept is formally explained.",
    tension: 30,
    key_events: ["First vestige dreams (Ch 1–2)", "Vestiges manifest visibly (Ch 3)", "Shared soul concept explained (Ch 3)"],
    color: "#9F7AEA"
  },
  {
    id: "quirk_test",
    saga: "U.A. Beginnings Saga",
    name: "Quirk Apprehension Test Arc",
    chapters: [7, 7],
    summary: "Momo enters U.A. High School. She meets Class 1-A for the first time: Iida, Tokoyami, Sero, Kaminari, Jirou, Ochako, Deku, Shouto. Shinobu notices Shouto reminds her of Tomioka.",
    tension: 35,
    key_events: ["Momo enters U.A. (Ch 7)", "Meets Class 1-A", "Shinobu/Giyuu parallel established"],
    color: "#4299E1"
  },
  {
    id: "battle_trial",
    saga: "U.A. Beginnings Saga",
    name: "Battle Trial Arc",
    chapters: [8, 9],
    summary: "Indoor battle training. Momo begins showing restrained Vestige-enhanced capabilities.",
    tension: 40,
    key_events: [],
    color: "#48BB78"
  },
  {
    id: "usj",
    saga: "U.A. Beginnings Saga",
    name: "U.S.J. Arc",
    chapters: [9, 12],
    summary: "League of Villains attacks U.S.J. The class faces real combat for the first time. Momo holds back her true speed and strength to avoid suspicion.",
    tension: 70,
    key_events: ["League attacks U.S.J.", "Momo conceals Vestige-enhanced speed", "All Might arrives"],
    color: "#ED8936"
  },
  {
    id: "sports_festival",
    saga: "U.A. Beginnings Saga",
    name: "Sports Festival Arc",
    chapters: [13, 21],
    summary: "Momo wins the First Year tournament, defeating Bakugou in the final with judo-based restraint. Shouto begins using his left side in the semifinals after Momo and Izuku's words. All Might praises Momo as a future legend. Shouto visits his hospitalised mother.",
    tension: 65,
    key_events: [
      "Momo wins tournament (Ch 21)", 
      "Defeats Bakugou with his own momentum", 
      "All Might: 'You will one day become one of the greatest Heroes of your generation.'",
      "Momo embraces Shouto post-ceremony (Ch 21)"
    ],
    color: "#F6E05E"
  },
  {
    id: "hero_killer",
    saga: "U.A. Beginnings Saga",
    name: "Hero Killer Arc",
    chapters: [22, 26],
    summary: "Internships. Momo co-interns with Tokage Setsuna (Class 1-B). Hero Killer Stain encounter. Chapter 23: 'Bizarre! Tokage Setsuna Appears.'",
    tension: 60,
    key_events: ["Setsuna introduced (Ch 23)", "Stain arc"],
    color: "#FC8181"
  },
  {
    id: "final_exams",
    saga: "U.A. Beginnings Saga",
    name: "Final Exams Arc",
    chapters: [26, 30],
    summary: "End-of-year exams. Momo and Shouto paired together (canon from manga). 'Wonder Duo; Rising' (Ch 30).",
    tension: 50,
    key_events: ["Momo & Shouto paired (Ch 30)"],
    color: "#9F7AEA"
  },
  {
    id: "training_camp",
    saga: "U.A. Beginnings Saga",
    name: "Training Camp Arc",
    chapters: [31, 35],
    summary: "Wild Wild Pussycats. A Test of Courage. Students are captured; Katsunori and Shouto fight. 'My Heroes' (Ch 34).",
    tension: 75,
    key_events: ["Test of Courage (Ch 33)", "My Heroes (Ch 34)", "Villains attack camp (Ch 35)"],
    color: "#48BB78"
  },
  {
    id: "hideout_raid",
    saga: "Rise of Villains Saga",
    name: "Hideout Raid Arc",
    chapters: [36, 38],
    summary: "All Might vs All For One. The Symbol of Peace falls. A turning point for the entire Hero society.",
    tension: 95,
    key_events: ["All Might defeats All For One (Ch 37)", "End of the Symbol of Peace (Ch 38)"],
    color: "#E53E3E"
  },
  {
    id: "revelations",
    saga: "Rise of Villains Saga",
    name: "Revelations Arc",
    chapters: [38, 39],
    summary: "Moving into U.A. dorms. Emotional aftermath of the raid. Class processes the shift in Hero society.",
    tension: 45,
    key_events: ["Moving into dorms (Ch 39)"],
    color: "#A0AEC0"
  },
  {
    id: "provisional_exam",
    saga: "Rise of Villains Saga",
    name: "Provisional Hero License Exam Arc",
    chapters: [40, 43],
    summary: "Hero License exams. Ultimate Moves development. Class faces Hero Licence challenge.",
    tension: 60,
    key_events: ["Ultimate Moves training (Ch 40)", "License exam (Ch 42–43)"],
    color: "#68D391"
  },
  {
    id: "shie_hassaikai",
    saga: "Rise of Villains Saga",
    name: "Shie Hassaikai Arc",
    chapters: [44, 49],
    summary: "The Yakuza arc. Eri's rescue. Momo's first encounter with Kurohana — left hand crushed, nearly killed. Her first real brush with a villain obsessed with her specifically.",
    tension: 90,
    key_events: [
      "Eri introduced (Ch 44–45)", 
      "Momo first meets Kurohana (Ch 47)", 
      "Kurohana crushes Momo's hand; nearly kills her (Ch 48)",
      "Eri rescued (Ch 49)"
    ],
    color: "#2D3748"
  },
  {
    id: "remedial",
    saga: "Rise of Villains Saga",
    name: "Remedial Course Arc",
    chapters: [50, 50],
    summary: "Win Those Kids' Hearts for Relief. Brief breather arc. Momo processes the Kurohana encounter.",
    tension: 25,
    key_events: [],
    color: "#B794F4"
  },
  {
    id: "school_festival",
    saga: "Rise of Villains Saga",
    name: "School Festival Arc",
    chapters: [51, 54],
    summary: "Gold Tips Imperial tea performance. Momo and Deku vs Gentle Criminal (Ch 53). Light-hearted arc before the storm.",
    tension: 40,
    key_events: ["Deku & Creati vs Gentle Criminal (Ch 53)", "Festival performance (Ch 54)"],
    color: "#F6AD55"
  },
  {
    id: "hellish_obsession",
    saga: "Fated Battles Saga",
    name: "Hellish Obsession Arc",
    chapters: [55, 59],
    summary: "Billboard Chart arc. Dabi's Dance — Touya's unmasking (Ch 57). Fighting Spirit training begins. Kurohana's obsession with Momo intensifies publicly. Hellish Hell (Ch 58), All Hands on Deck (Ch 59).",
    tension: 85,
    key_events: ["Dabi unmasked (Ch 57)", "Kurohana's obsession made explicit"],
    color: "#E53E3E"
  },
  {
    id: "joint_training",
    saga: "Fated Battles Saga",
    name: "Joint Training Arc",
    chapters: [60, 66],
    summary: "Class 1-A vs Class 1-B. Shinsou joins. Momo faces Katsuki in a rematch. 'Set Your Soul Ablaze' (Ch 63). New Power, New Bonds (Ch 66).",
    tension: 70,
    key_events: ["Kacchan vs Yaomomo rematch (Ch 65)", "Shinsou integration (Ch 60–61)", "New bonds formed (Ch 66)"],
    color: "#68D391"
  },
  {
    id: "endeavor_agency",
    saga: "Fated Battles Saga",
    name: "Endeavor Agency Arc",
    chapters: [67, 70],
    summary: "Work-study under Endeavor. Christmas chapter (Ch 67). Antagonistic Izakaya (Ch 68). Shouto processes his family's legacy.",
    tension: 55,
    key_events: ["Christmas (Ch 67)", "Family processing (Ch 69–70)"],
    color: "#4299E1"
  },
  {
    id: "world_heroes_mission",
    saga: "Fated Battles Saga",
    name: "World Heroes' Mission Arc",
    chapters: [71, 75],
    summary: "Otheon mission. On the Run (Ch 73). Race Against Time (Ch 74). Star and Stripe introduced.",
    tension: 80,
    key_events: ["Otheon mission (Ch 72)", "Star and Stripe appears (Ch 71)"],
    color: "#F6AD55"
  },
  {
    id: "loss",
    saga: "Fated Battles Saga",
    name: "Loss Arc",
    chapters: [76, 76],
    summary: "A single devastating chapter. Kurohana orchestrates Dabi burning the Yaoyorozu mansion. Ekaterina dies. Momo's breakdown is broadcast live nationwide. Shouto races to her. She refuses food and drink for three days. Skips her mother's funeral.",
    tension: 100,
    key_events: [
      "Dabi-fire burns the Yaoyorozu mansion", 
      "Ekaterina killed", 
      "Momo breaks down on live TV", 
      "Shouto holds Momo", 
      "Class discussion: Kurohana's motive to isolate Momo"
    ],
    color: "#E53E3E"
  },
  {
    id: "rogue",
    saga: "Fated Battles Saga",
    name: "Rogue Heroine Arc",
    chapters: [77, 80],
    summary: "Momo goes AWOL. Friends search for her. 'Creati vs U.A. Hero Course' (Ch 80) — she fights her own classmates. Emotional nadir of the story.",
    tension: 90,
    key_events: ["Momo disappears", "Class searches (Ch 78–79)", "Momo fights classmates (Ch 80)"],
    color: "#A0AEC0"
  },
  {
    id: "preparation",
    saga: "Justice Saga",
    name: "Preparation Arc",
    chapters: [81, 85],
    summary: "Solace (Ch 81). Return (Ch 82). Allies (Ch 83). Wind Breathing introduced (Ch 84). Giyuu training. Momo rebuilds herself.",
    tension: 40,
    key_events: ["Momo returns to class (Ch 82)", "Wind Breathing (Ch 84)", "New allies"],
    color: "#68D391"
  },
  {
    id: "endless_mansion",
    saga: "Justice Saga",
    name: "Endless Mansion Arc",
    chapters: [86, 94],
    summary: "The climax. Assassins. Shinobu in full Insect Hashira mode (Ch 87). The Lunatic (Ch 88). Flashfires. Rage. Momo's Demon Slayer Mark awakens. She loses her left arm in combat. Meets Ekaterina's echo in her mindscape (Ch 93). Todoroki Family reckoning (Ch 94).",
    tension: 98,
    key_events: [
      "Assassins encountered (Ch 86)", 
      "Shinobu revealed fully (Ch 87)", 
      "Momo's Demon Slayer Mark activates", 
      "Momo loses her left arm",
      "Ekaterina's soul-echo in the mindscape (Ch 93)",
      "Todoroki Family confronted (Ch 94)"
    ],
    color: "#E53E3E"
  },
  {
    id: "onwards",
    saga: "Justice Saga",
    name: "Onward Arc",
    chapters: [94, 94],
    summary: "Transitional chapter. The Hellish Todoroki Family (Ch 94). Aftermath of Kurohana's defeat.",
    tension: 50,
    key_events: ["Todoroki family reckoning", "Endeavor charges confirmed publicly"],
    color: "#4299E1"
  },
  {
    id: "decompress",
    saga: "Justice Saga",
    name: "Decompress Arc",
    chapters: [95, 97],
    summary: "Move Forward, Even If Just a Little (Ch 95). Momo visits her mother's grave. Class worries; Katsuki scolds her, protectively. Hawks becomes Number One. Lady Nagant pardoned and appointed HPSC President. Structural reforms to Hero Society announced. Aizawa/Natasha laughing together (Ch 97). Momo trains her Demon Slayer Mark with Shinobu and Giyuu. The story ends at U.S.J., with a redo field trip — the one interrupted a year ago.",
    tension: 15,
    key_events: [
      "Momo visits Ekaterina's grave (Ch 95)", 
      "Hawks becomes Number One (Ch 97)", 
      "Lady Nagant becomes HPSC President (Ch 97)", 
      "Aizawa/Natasha moment (Ch 97)", 
      "U.S.J. redo field trip (Ch 97)",
      "Momo feels 'like a teenager again'"
    ],
    color: "#9F7AEA"
  }
];

// ─── KEY DIALOGUE ──────────────────────────────────────────────
export const DIALOGUE = [
  { ch: 3, speaker: "shinobu", text: "We're vestiges — fragments of who we were, tied to your soul. You carry us with you, whether you realize it or not.", context: "Ch 3 — First appearance, Momo's bedroom", mood: "warm" },
  { ch: 3, speaker: "natasha", text: "Think of us as echoes. We're not alive, not in the way you are. But we're real enough to guide you. To protect you, if necessary.", context: "Ch 3 — First appearance", mood: "calm" },
  { ch: 3, speaker: "shinobu", text: "You are us. And we are you. Three separate lives, one connected soul.", context: "Ch 3 — Explaining the bond", mood: "profound" },
  { ch: 21, speaker: "momo", text: "I had no intention of holding back.", context: "Ch 21 — Sports Festival final, to Bakugou", mood: "determined" },
  { ch: 21, speaker: "allMight", text: "Your intelligence, adaptability, and composure are remarkable. I hope to see you go far. I believe you will one day become one of the greatest Heroes of your generation.", context: "Ch 21 — Sports Festival awards", mood: "warm" },
  { ch: 21, speaker: "momo", text: "You're amazing, Todoroki. And you'll be a great Hero — separate from your father's legacy.", context: "Ch 21 — Post-ceremony, to Shouto", mood: "warm" },
  { ch: 47, speaker: "kurohana", text: "Another challenger? I do hope you won't be as much of a bore as the ones before you.", context: "Ch 47 — First encounter, throne of corpses", mood: "menacing" },
  { ch: 48, speaker: "momo", text: "I'm The Everything Hero: Creati.", context: "Ch 48 — Refusing to give her real name to Kurohana", mood: "defiant" },
  { ch: 76, speaker: "katsuki", text: "When the hell did she leave?", context: "Ch 76 — Class realises Momo ran to the fire", mood: "sharp" },
  { ch: 76, speaker: "natasha", text: "You should handle this one, Shinobu. Comfort and speeches aren't really my thing. I'm not good at that.", context: "Ch 76 — After Ekaterina's death", mood: "self-aware" },
  { ch: 76, speaker: "shinobu", text: "You know, Momo sees you as a mother figure more than me. We're both her mentors, but she looks at you differently.", context: "Ch 76 — To Natasha", mood: "perceptive" },
  { ch: 93, speaker: "ekaterina", text: "You are my pride. My joy. My brilliant, brave daughter.", context: "Ch 93 — Ekaterina's soul-echo in Momo's mindscape", mood: "profound" },
  { ch: 93, speaker: "ekaterina", text: "You've carried so much pain. So much responsibility. And yet you kept moving. You kept fighting, kept caring. That is strength, Momo. That is who you are.", context: "Ch 93 — Mindscape", mood: "profound" },
  { ch: 93, speaker: "ekaterina", text: "Now, my love… stand up. You still have something left to do.", context: "Ch 93 — Ekaterina sends Momo back", mood: "warm" },
  { ch: 95, speaker: "hanta", text: "You absolute dumbass, you can't just disappear like that!", context: "Ch 95 — Momo returns after visiting the grave", mood: "protective" },
  { ch: 95, speaker: "momo", text: "I was visiting my mother's grave. For the first time.", context: "Ch 95 — To the class", mood: "raw" },
  { ch: 95, speaker: "katsuki", text: "Next time, check your damn phone. Or tell someone before you leave.", context: "Ch 95 — Bakugou, hiding his relief", mood: "protective" },
  { ch: 97, speaker: "shinobu", text: "Done already?", context: "Ch 97 — After brutal training session, Momo flat on the floor", mood: "teasing" },
  { ch: 97, speaker: "katsuki", text: "You better not be overdoing it.", context: "Ch 97 — To Momo in the common room", mood: "protective" },
  { ch: 97, speaker: "narrator", text: "For the first time in a long while, she felt like a teenager again.", context: "Ch 97 — Final chapter, common room", mood: "peaceful" }
];

// ─── RELATIONSHIP GRAPH ────────────────────────────────────────
export const RELATIONSHIPS = [
  { source: "momo", target: "shinobu", type: "vestige_bond", label: "Soul-bound since age 10", strength: 10 },
  { source: "momo", target: "natasha", type: "vestige_bond", label: "Soul-bound since age 11", strength: 10 },
  { source: "momo", target: "shouto", type: "romance_slowburn", label: "Slow-burn; pining confirmed Ch 96", strength: 9 },
  { source: "momo", target: "kyouka", type: "best_friend", label: "Best friend", strength: 9 },
  { source: "momo", target: "katsuki", type: "rival_protective", label: "Rival turned protective classmate", strength: 8 },
  { source: "momo", target: "izuku", type: "ally", label: "Mutual respect; tag team (Ch 53)", strength: 7 },
  { source: "momo", target: "ekaterina", type: "family", label: "Mother; killed Ch 76", strength: 10 },
  { source: "momo", target: "haruto", type: "family", label: "Father; survives", strength: 8 },
  { source: "momo", target: "kurohana", type: "nemesis", label: "Obsessive villainess; kills Ekaterina", strength: 10 },
  { source: "momo", target: "aizawa", type: "mentor", label: "Homeroom teacher", strength: 6 },
  { source: "momo", target: "giyuu", type: "trainer", label: "Physical trainer from Ch 87", strength: 7 },
  { source: "momo", target: "eri", type: "protective", label: "Rescue arc; protective bond", strength: 6 },
  { source: "shinobu", target: "natasha", type: "vestige_peer", label: "Bicker constantly; deep respect", strength: 8 },
  { source: "shinobu", target: "giyuu", type: "romance", label: "Canon ship; Shinobu teases him endlessly", strength: 9 },
  { source: "natasha", target: "aizawa", type: "romance", label: "Ship; laughing together Ch 97", strength: 7 },
  { source: "natasha", target: "eri", type: "maternal", label: "Soft spot for small children", strength: 7 },
  { source: "shouto", target: "giyuu", type: "spiritual_parallel", label: "Narrative parallel: stoic sons of duty", strength: 5 },
  { source: "shouto", target: "enji", type: "family_trauma", label: "Abusive father; confronted Justice Saga", strength: 8 },
  { source: "shouto", target: "touya", type: "family", label: "Believed-dead elder brother = Dabi", strength: 8 },
  { source: "kyouka", target: "kaminari", type: "friend_trio", label: "Tag trio with Momo", strength: 7 },
  { source: "enji", target: "touya", type: "family_trauma", label: "Father's abuse created Dabi", strength: 9 },
  { source: "touya", target: "kurohana", type: "ally_villain", label: "Collaboration; blue fire on mansion", strength: 6 }
];
