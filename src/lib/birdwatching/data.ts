import type { SourceLink } from "@/lib/educational/types";
import type {
  BirdGuideArticle,
  BirdGuideSection,
} from "@/lib/birds/guide-types";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

// ─── VERIFIED SOURCES ──────────────────────────────────────────────────────
// URLs confirmed reachable with a browser user-agent on 2026-06-12. Cornell
// and USFWS block automated bots but are real, authoritative resources.

const SRC_CORNELL: SourceLink = {
  label: "Cornell Lab of Ornithology — All About Birds",
  url: "https://www.allaboutbirds.org/",
  type: "university",
  note: "Cornell University ornithology reference and birdwatching guidance",
};

const SRC_AUDUBON: SourceLink = {
  label: "National Audubon Society",
  url: "https://www.audubon.org/",
  type: "wildlife",
  note: "Bird identification, conservation, and observation guidance",
};

const SRC_RSPB: SourceLink = {
  label: "RSPB — Birds and Wildlife",
  url: "https://www.rspb.org.uk/birds-and-wildlife",
  type: "wildlife",
  note: "UK bird charity guidance on watching, feeding, and helping birds",
};

const SRC_USFWS_BIRDS: SourceLink = {
  label: "U.S. Fish & Wildlife Service — Migratory Birds",
  url: "https://www.fws.gov/program/migratory-birds",
  type: "government",
  note: "U.S. government program for migratory bird protection",
};

const SRC_ABC: SourceLink = {
  label: "American Bird Conservancy",
  url: "https://abcbirds.org/",
  type: "wildlife",
  note: "Bird conservation organisation",
};

// Shared escalation block for wild birds.
const WILD_BIRD_ESCALATION: BirdGuideSection = {
  heading: "When to contact a wildlife authority or rehabilitator",
  intro:
    "Wild birds are best left alone, and the law protects many of them. Do not handle injured, sick, nesting, or protected wild birds unless a qualified authority instructs you to.",
  bullets: [
    "An injured, sick, or clearly distressed wild bird — contact a licensed wildlife rehabilitator or local wildlife authority for guidance.",
    "A bird you think is orphaned — many young birds are not; check with an expert before intervening.",
    "Signs of disease at a feeder or in several birds — pause feeding and seek local guidance.",
    "Any protected species, nest, or roost — do not disturb it; report concerns to the local authority.",
    "If in doubt, keep your distance, keep pets and children away, and ask a qualified authority before acting.",
  ],
};

const RELATED_HUB = {
  title: "Birdwatching",
  links: [
    { label: "Birdwatching hub", href: "/birdwatching" },
    { label: "Watch birds ethically", href: "/birdwatching/how-to-watch-birds-ethically" },
    { label: "If you find an injured bird", href: "/birdwatching/what-to-do-if-you-find-an-injured-bird" },
    { label: "Bird encyclopedia", href: "/animal-encyclopedia/birds" },
  ],
};

const RELATED_PROFILES = {
  title: "Bird profiles",
  links: [
    { label: "Robin", href: "/animals/robin" },
    { label: "Sparrow", href: "/animals/sparrow" },
    { label: "Crow", href: "/animals/crow" },
    { label: "Hummingbird", href: "/animals/hummingbird" },
  ],
};

const RELATED_WILDLIFE = {
  title: "Wildlife resources",
  links: [
    { label: "Wildlife hub", href: "/wildlife" },
    { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
    { label: "Pet safety & emergencies", href: "/pet-safety" },
    { label: "Backyard bird observation checklist", href: "/tools/backyard-bird-observation-checklist" },
  ],
};

export const BIRDWATCHING_ARTICLES: BirdGuideArticle[] = [
  {
    slug: "backyard-bird-identification",
    path: "/birdwatching/backyard-bird-identification",
    title: "Backyard Bird Identification — Clues, Not Guarantees",
    description:
      "An educational guide to identifying backyard birds using size, shape, colour, behaviour, habitat, and calls — without disturbing them, and without claiming guaranteed identification.",
    pageHeading: "Backyard Bird Identification",
    topicTag: "Birdwatching · Identification",
    directAnswer:
      "You can learn to recognise backyard birds by combining clues — size and shape, colour and markings, behaviour, habitat, and calls — rather than relying on any single feature. Identification is a skill of probability, not certainty; even experts are sometimes unsure. Observe calmly without disturbing birds, and treat field guides and apps as helpful tools, not guarantees.",
    sections: [
      {
        heading: "Clues that help you identify birds",
        intro:
          "Use several clues together. No single feature gives a guaranteed identification.",
        bullets: [
          "Size and shape: compare to a familiar bird, and note silhouette, bill shape, and tail length.",
          "Colour and markings: overall colour plus specific marks like wing bars, eye-stripes, or a coloured throat.",
          "Behaviour: how it moves, feeds, flies, or holds its tail can be as telling as colour.",
          "Habitat and location: where and when you see a bird narrows the possibilities.",
          "Sound: calls and songs are powerful clues once you start to learn them.",
        ],
      },
      {
        heading: "Tools and good habits",
        bullets: [
          "Use a regional field guide or a reputable bird-ID app as a starting point, not a final verdict.",
          "Watch from a comfortable distance with binoculars rather than approaching closely.",
          "Take brief notes or photos from afar to check details later.",
          "Learn the common local birds first; they make rarer ones easier to spot by contrast.",
          "Accept uncertainty — recording a bird as \"probable\" is more honest than a forced ID.",
        ],
      },
    ],
    checklist: {
      heading: "Identification checklist",
      bullets: [
        "Noted size and shape relative to a familiar bird.",
        "Recorded colour, markings, and bill shape.",
        "Observed behaviour, habitat, and any calls.",
        "Compared with a regional guide or reputable app.",
        "Watched from a respectful distance without disturbing the bird.",
        "Comfortable recording it as uncertain when clues are incomplete.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume colour alone gives a guaranteed identification.",
        "Do not assume an app or photo match is always correct.",
        "Do not disturb, flush, or bait a bird just to confirm an ID.",
        "Do not assume similar-looking species are the same — many are easily confused.",
      ],
    },
    escalation: WILD_BIRD_ESCALATION,
    faqs: [
      {
        question: "What is the most reliable way to identify a bird?",
        answer:
          "There is no single reliable feature. The best approach is to combine clues — size and shape, colour and markings, behaviour, habitat, and calls — and compare them with a regional guide. Even then, identification is about probability, not certainty.",
      },
      {
        question: "Are bird identification apps accurate?",
        answer:
          "Bird-ID apps can be very helpful as a starting point, but they are not guaranteed correct, especially for similar species or poor photos and recordings. Treat their suggestions as a hypothesis to check against other clues, not a final answer.",
      },
      {
        question: "Should I get closer to confirm what a bird is?",
        answer:
          "No. Approaching to confirm an ID can disturb or stress the bird, which is discouraged. Use binoculars and patience from a distance, and accept that some birds will remain unidentified. Watching ethically matters more than a confirmed identification.",
      },
    ],
    sources: [SRC_CORNELL, SRC_AUDUBON, SRC_RSPB],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "how-to-watch-birds-ethically",
    path: "/birdwatching/how-to-watch-birds-ethically",
    title: "How to Watch Birds Ethically — Distance and Respect",
    description:
      "An educational guide to ethical birdwatching: keeping your distance, staying quiet, never disturbing nests or roosts, limiting playback, and following local wildlife rules.",
    pageHeading: "How to Watch Birds Ethically",
    topicTag: "Birdwatching · Ethics",
    directAnswer:
      "Ethical birdwatching puts the birds first: keep a respectful distance, stay quiet and calm, never disturb nests, eggs, chicks, or roosts, avoid baiting and overusing call playback, respect private property, and follow local wildlife rules. If a bird changes its behaviour because of you, you are too close. Birds are wildlife, not subjects to be pressured for a better view.",
    sections: [
      {
        heading: "Core principles of ethical observation",
        bullets: [
          "Keep your distance and use binoculars or a scope rather than approaching.",
          "Move slowly and quietly; sudden movement and noise stress birds.",
          "Never disturb nests, eggs, chicks, or communal roosts.",
          "If a bird stops feeding, freezes, alarm-calls, or flies off because of you, step back.",
          "Follow local wildlife rules and access laws, and respect private property.",
        ],
      },
      {
        heading: "Playback, baiting, and sensitive species",
        intro:
          "Some popular techniques can harm birds if misused. When in doubt, don't.",
        bullets: [
          "Avoid or strictly limit call playback; repeated playback can disrupt territory and breeding.",
          "Do not bait birds into the open, especially predators or sensitive species.",
          "Take extra care around rare, protected, or breeding birds, where disturbance does the most harm.",
          "Share sighting locations of sensitive species cautiously, following local guidance.",
        ],
      },
    ],
    checklist: {
      heading: "Ethical birdwatching checklist",
      bullets: [
        "Kept a respectful distance and used optics instead of approaching.",
        "Stayed quiet and moved slowly.",
        "Avoided all nests, eggs, chicks, and roosts.",
        "Did not use baiting, and limited or avoided playback.",
        "Followed local wildlife rules and respected property.",
        "Backed off whenever a bird reacted to my presence.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume getting closer is harmless — disturbance is often invisible to us but costly to birds.",
        "Do not assume playback is fine \"just once\" near breeding or rare birds.",
        "Do not assume access is allowed; check local rules and property boundaries.",
        "Do not assume a calm-looking bird is unbothered; watch for subtle stress signs.",
      ],
    },
    escalation: WILD_BIRD_ESCALATION,
    faqs: [
      {
        question: "How close is too close when watching birds?",
        answer:
          "If a bird changes its behaviour because of you — stops feeding, freezes, alarm-calls, or flies away — you are too close. The right distance varies by species and situation, so err on the side of caution and use binoculars or a scope rather than approaching.",
      },
      {
        question: "Is it okay to play bird calls to attract birds?",
        answer:
          "Call playback can disturb birds by disrupting territory and breeding, and it is discouraged or restricted in many places, especially near rare or nesting birds. If you use it at all, keep it minimal and follow local guidance; when in doubt, avoid it.",
      },
      {
        question: "Can I share where I saw a rare bird?",
        answer:
          "Be cautious. Publicising the location of rare or sensitive birds can lead to crowding and disturbance. Follow local birding-community and wildlife-authority guidance on whether and how to share sightings.",
      },
    ],
    sources: [SRC_AUDUBON, SRC_CORNELL, SRC_ABC],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "bird-feeding-basics",
    path: "/birdwatching/bird-feeding-basics",
    title: "Bird Feeding Basics — Local Responsibility and Hygiene",
    description:
      "A cautious educational overview of feeding wild birds: local-responsibility framing, hygiene and disease-spread cautions, and why there is no universal feeding rule.",
    pageHeading: "Bird Feeding Basics",
    topicTag: "Birdwatching · Feeding",
    directAnswer:
      "Whether and how to feed wild birds depends heavily on where you live, the species involved, and local guidance — there is no single universal rule. If feeding is appropriate where you are, hygiene matters most: dirty feeders and crowding can spread disease. This page gives general, cautious framing, not specific diets or product recommendations; check trusted local bird organisations and wildlife authorities.",
    sections: [
      {
        heading: "Feeding is a local-responsibility decision",
        intro:
          "What is helpful in one place can be harmful in another. Local context and law come first.",
        bullets: [
          "Check local wildlife guidance and any rules before feeding wild birds.",
          "Consider the local species and season — needs and risks differ widely.",
          "In some places and situations, not feeding is the recommended choice.",
          "Avoid feeding that attracts pests, predators, or large crowds of birds.",
        ],
      },
      {
        heading: "Hygiene and disease awareness",
        intro:
          "If you do feed, cleanliness is the single most important responsibility.",
        bullets: [
          "Keep feeders and bird baths clean and dry; dirty feeders can spread disease.",
          "Space feeders out to reduce crowding, which helps disease pass between birds.",
          "If you see sick or dead birds at a feeder, stop feeding and seek local guidance.",
          "Avoid foods known to be harmful, and follow trusted local advice on what is appropriate.",
          "Provide clean water responsibly, and change it regularly.",
        ],
      },
    ],
    checklist: {
      heading: "Responsible feeding checklist",
      bullets: [
        "Checked local guidance and rules before deciding to feed.",
        "Considered the local species, season, and whether feeding is appropriate at all.",
        "A plan to keep feeders and water clean and well spaced.",
        "A plan to stop feeding and seek guidance if sick birds appear.",
        "No reliance on universal diets, product brands, or exact quantities.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume feeding wild birds is always helpful — it depends on place and species.",
        "Do not assume all birds can eat the same foods.",
        "Do not assume a feeder is harmless if it is not kept clean.",
        "Do not assume one country's advice applies everywhere; check local guidance.",
      ],
    },
    escalation: {
      heading: "When to pause and seek guidance",
      intro:
        "Feeding can occasionally cause harm. Stop and ask a qualified source if problems appear.",
      bullets: [
        "Sick or dead birds at or near a feeder — stop feeding and contact local wildlife guidance.",
        "Signs of disease spread, such as several affected birds — pause and seek advice.",
        "Unwanted pests or predators drawn in by feeding — review or stop, following local guidance.",
        "Any injured or distressed wild bird — contact a licensed wildlife rehabilitator or local authority.",
        "Uncertainty about what is appropriate locally — ask a trusted bird organisation before continuing.",
      ],
    },
    faqs: [
      {
        question: "Should I feed wild birds?",
        answer:
          "It depends on where you live, the species, and local guidance — there is no universal answer, and in some situations not feeding is best. If feeding is appropriate where you are, the priority is hygiene and following trusted local advice rather than any fixed rule.",
      },
      {
        question: "Why does feeder hygiene matter so much?",
        answer:
          "Dirty feeders and crowding can spread disease between birds. Keeping feeders and water clean and well spaced, and stopping if you see sick birds, are among the most important responsibilities of anyone who chooses to feed wild birds.",
      },
      {
        question: "Can this page tell me exactly what to feed?",
        answer:
          "No. Appropriate foods vary by species and region, and some foods are harmful. This page gives cautious, general framing rather than universal diets, exact quantities, or product brands. Check trusted local bird organisations and wildlife authorities for specifics.",
      },
    ],
    sources: [SRC_RSPB, SRC_AUDUBON, SRC_CORNELL],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "bird-nesting-season-basics",
    path: "/birdwatching/bird-nesting-season-basics",
    title: "Bird Nesting Season Basics — Look, Don't Disturb",
    description:
      "An educational guide to the bird nesting season: why nests, eggs, and chicks must not be disturbed, the legal protection many nests have, and who to contact if concerned.",
    pageHeading: "Bird Nesting Season Basics",
    topicTag: "Birdwatching · Nesting",
    directAnswer:
      "During nesting season the most responsible thing you can do is leave nests alone. Do not touch, move, or disturb nests, eggs, or chicks — many are protected by law — and keep your distance so parent birds can come and go. If you are genuinely concerned about a nest or a chick, contact a local wildlife authority or licensed rehabilitator for guidance rather than intervening yourself.",
    sections: [
      {
        heading: "Why nests are best left completely alone",
        bullets: [
          "Disturbance can cause parents to abandon a nest or expose eggs and chicks to predators and weather.",
          "Many nests, eggs, and birds are legally protected; disturbing them can be an offence.",
          "A young bird out of the nest is often not abandoned — parents are usually nearby.",
          "Keeping your distance lets parent birds feed and tend young normally.",
        ],
      },
      {
        heading: "If you are concerned about a nest or chick",
        intro:
          "Concern is understandable, but intervention usually does more harm than good.",
        bullets: [
          "Watch from a distance for a while; parent birds are often just out of sight.",
          "Keep pets and children away from the area.",
          "Do not move the nest, handle chicks, or attempt to feed or raise them.",
          "Contact a local wildlife authority or licensed rehabilitator and follow their guidance.",
        ],
      },
    ],
    checklist: {
      heading: "Nesting-season checklist",
      bullets: [
        "Kept well away from any nest, eggs, or chicks.",
        "Avoided trimming hedges or trees that may hold active nests during breeding season.",
        "Kept pets and children away from nesting areas.",
        "Watched from a distance before assuming a young bird needs help.",
        "Contacted a local wildlife authority or rehabilitator for any genuine concern.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a fledgling on the ground is abandoned — many are being watched by parents.",
        "Do not assume it is okay to move a nest, even a little.",
        "Do not assume handling eggs or chicks is harmless.",
        "Do not assume nests are unprotected; many are covered by wildlife law.",
      ],
    },
    escalation: {
      heading: "When to contact a wildlife authority",
      intro:
        "If you are genuinely worried, ask the experts rather than intervening yourself.",
      bullets: [
        "A nest, eggs, or chicks in clear, immediate danger — contact a local wildlife authority for guidance.",
        "A young bird that appears injured (not just out of the nest) — contact a licensed rehabilitator.",
        "Suspected illegal disturbance or destruction of a protected nest — report it to the authority.",
        "Tree or hedge work that may affect active nests — pause and seek advice first.",
        "Any situation where you are unsure — ask a qualified authority before acting.",
      ],
    },
    faqs: [
      {
        question: "I found a baby bird on the ground — should I help it?",
        answer:
          "Often, no intervention is needed. Many young birds (fledglings) leave the nest before they can fly well and are still cared for by parents nearby. Watch from a distance, keep pets away, and only contact a licensed wildlife rehabilitator if the bird is clearly injured or in danger.",
      },
      {
        question: "Can I move a nest that is in an inconvenient place?",
        answer:
          "No. Moving a nest can cause abandonment and is often illegal, as many nests are protected during the breeding season. If a nest is genuinely a problem, contact your local wildlife authority for guidance rather than moving it yourself.",
      },
      {
        question: "Is it true that touching a baby bird makes parents reject it?",
        answer:
          "The idea that parents abandon young that have been touched is largely a myth for most birds, but that is not a reason to handle them. Handling causes stress and risk, and many birds are protected, so the right approach is still to leave young birds alone and seek expert guidance if needed.",
      },
    ],
    sources: [SRC_RSPB, SRC_USFWS_BIRDS, SRC_AUDUBON],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "what-to-do-if-you-find-an-injured-bird",
    path: "/birdwatching/what-to-do-if-you-find-an-injured-bird",
    title: "What to Do If You Find an Injured Bird — Keep Distance, Get Help",
    description:
      "An educational guide for finding an injured or sick wild bird: keep your distance, do not treat or feed it, keep pets and children away, and contact a licensed rehabilitator.",
    pageHeading: "What to Do If You Find an Injured Bird",
    topicTag: "Birdwatching · Injured birds",
    directAnswer:
      "If you find an injured or sick wild bird, the safest and most helpful response is to keep your distance, keep pets and children away, and contact a licensed wildlife rehabilitator or local wildlife authority for guidance. Do not try to treat, splint, medicate, feed, water, raise, or release the bird yourself. Wild birds need specialist care, and many are protected by law.",
    sections: [
      {
        heading: "What to do",
        bullets: [
          "Keep your distance and stay calm; do not chase or corner the bird.",
          "Keep pets, children, and onlookers well away to reduce stress and danger.",
          "Note the location, what you see, and the time, to share with experts.",
          "Contact a licensed wildlife rehabilitator or local wildlife authority and follow their instructions.",
          "Only handle or move the bird if a qualified authority specifically tells you how and to do so.",
        ],
      },
      {
        heading: "Why not to treat the bird yourself",
        intro:
          "Well-meant home care often harms wild birds and can be illegal.",
        bullets: [
          "Feeding or watering an injured bird can cause serious harm, including choking or aspiration.",
          "Splinting, medicating, or wound care requires training; home attempts can worsen injuries.",
          "Raising or \"rehabilitating\" a wild bird without a licence is harmful and often unlawful.",
          "Birds of prey and large birds can injure you; never handle them without expert guidance.",
        ],
      },
    ],
    checklist: {
      heading: "If you find an injured bird",
      bullets: [
        "Kept a calm distance and did not chase the bird.",
        "Kept pets, children, and crowds away.",
        "Noted the location, time, and what I observed.",
        "Contacted a licensed wildlife rehabilitator or local authority.",
        "Did not feed, water, treat, medicate, raise, or release the bird.",
        "Followed the authority's instructions exactly.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume you should pick the bird up — many situations are made worse by handling.",
        "Do not assume feeding or giving water helps; it can be dangerous.",
        "Do not assume home treatment, splinting, or medication is safe — it is not.",
        "Do not assume it is legal to keep or raise a wild bird; many are protected.",
      ],
    },
    escalation: {
      heading: "Contact a licensed rehabilitator or authority",
      intro:
        "This is the key step. Specialists can advise or take the bird into proper care.",
      bullets: [
        "Any injured, sick, or trapped wild bird — contact a licensed wildlife rehabilitator or local authority.",
        "A bird of prey or large bird — do not handle it; wait for expert guidance.",
        "A bird in immediate danger (e.g. on a road) — describe the situation to the authority and follow their advice.",
        "Suspected poisoning or disease affecting birds — report it to the relevant authority.",
        "Any uncertainty — keep your distance and ask a qualified authority before acting.",
      ],
    },
    faqs: [
      {
        question: "Should I pick up an injured wild bird?",
        answer:
          "Not unless a qualified authority instructs you to. Handling stresses and can injure the bird (and you), and many birds are protected. The safest response is to keep your distance, keep pets and children away, and contact a licensed wildlife rehabilitator or local authority for guidance.",
      },
      {
        question: "Can I give an injured bird food or water?",
        answer:
          "No. Feeding or giving water to an injured or sick bird can cause serious harm, including choking or aspiration, and the wrong food can worsen its condition. Leave food and water to the specialists and contact a licensed rehabilitator.",
      },
      {
        question: "Who do I contact about an injured wild bird?",
        answer:
          "Contact a licensed wildlife rehabilitator or your local wildlife authority. They can advise on the situation and, if appropriate, arrange proper care. This page is educational and is not a substitute for that qualified guidance.",
      },
    ],
    sources: [SRC_RSPB, SRC_USFWS_BIRDS, SRC_AUDUBON],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "bird-photography-ethics",
    path: "/birdwatching/bird-photography-ethics",
    title: "Bird Photography Ethics — The Bird Comes First",
    description:
      "An educational guide to ethical bird photography: keep your distance, never disturb nests or roosts, avoid baiting and risky approaches, and respect property and local rules.",
    pageHeading: "Bird Photography Ethics",
    topicTag: "Birdwatching · Photography",
    directAnswer:
      "Good bird photography never harasses the subject. Keep your distance and use longer lenses instead of approaching, never disturb nests, eggs, chicks, or roosts, avoid baiting and risky close approaches, respect private property and local rules, and stop if a bird reacts to you. No photograph is worth stressing or endangering a wild bird.",
    sections: [
      {
        heading: "Photograph without harassing",
        bullets: [
          "Use distance and longer lenses or cropping rather than approaching closely.",
          "Read the bird's behaviour; if it changes because of you, back off.",
          "Never disturb nests, eggs, chicks, or communal roosts for a shot.",
          "Avoid surrounding, cornering, or repeatedly flushing birds.",
          "Respect private property, access rules, and other people enjoying wildlife.",
        ],
      },
      {
        heading: "Baiting, playback, and sensitive situations",
        intro:
          "Techniques that manipulate birds can cause real harm and are widely discouraged.",
        bullets: [
          "Avoid baiting birds (especially predators) into position for photos.",
          "Avoid or strictly limit call playback, particularly near breeding or rare birds.",
          "Take extra care with rare, protected, or nesting species, where disturbance is most damaging.",
          "Be honest about how images were made, and avoid sharing sensitive nest or roost locations.",
        ],
      },
    ],
    checklist: {
      heading: "Ethical photography checklist",
      bullets: [
        "Used distance and a longer lens instead of approaching.",
        "Watched the bird's behaviour and backed off when it reacted.",
        "Avoided all nests, roosts, and sensitive sites.",
        "Did not bait, and limited or avoided playback.",
        "Respected property, access rules, and other people.",
        "Prioritised the bird's welfare over getting the shot.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a closer, riskier approach is worth a better photo.",
        "Do not assume baiting or playback is harmless for one shot.",
        "Do not assume nest photography is acceptable; it can harm and may be illegal.",
        "Do not assume access is allowed; check property and local rules.",
      ],
    },
    escalation: WILD_BIRD_ESCALATION,
    faqs: [
      {
        question: "Is it okay to photograph birds at the nest?",
        answer:
          "Nest photography is widely discouraged because it can cause disturbance, lead to abandonment, or expose eggs and chicks, and it may be illegal for protected species. The ethical approach is to avoid nests entirely and photograph birds going about their lives at a respectful distance.",
      },
      {
        question: "Can I bait birds to get a better photo?",
        answer:
          "Baiting — especially of predators — can change behaviour, habituate birds, and put them at risk, and it is widely discouraged. Ethical bird photography relies on patience, fieldcraft, and distance rather than manipulating the subject.",
      },
      {
        question: "How do I know if I am disturbing a bird?",
        answer:
          "Watch its behaviour. If a bird stops feeding, becomes alert or agitated, alarm-calls, or flies off because of you, you are disturbing it and should back away. The bird's comfort and safety come before any photograph.",
      },
    ],
    sources: [SRC_AUDUBON, SRC_ABC, SRC_CORNELL],
    related: [RELATED_HUB, RELATED_PROFILES, RELATED_WILDLIFE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getBirdwatchingArticleBySlug(
  slug: string
): BirdGuideArticle | undefined {
  return BIRDWATCHING_ARTICLES.find((a) => a.slug === slug);
}

export const BIRDWATCHING_HUB_SOURCES: SourceLink[] = [
  SRC_CORNELL,
  SRC_AUDUBON,
  SRC_RSPB,
  SRC_USFWS_BIRDS,
];
