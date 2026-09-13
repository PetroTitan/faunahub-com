/**
 * Cat breed records.
 *
 * Note what is ABSENT: no heights, no weights, no size class, and no ordinal
 * traits. That is not an unfinished import. CFA breed standards describe size
 * qualitatively — the Maine Coon standard says "Size medium to large" — and all
 * eight pilot standards were checked for numeric figures on 2026-09-13: none
 * publishes a weight or a height. CFA also publishes no trait scale, so there is
 * nothing to normalise. Inventing either would be the exact failure this
 * registry exists to prevent, so the cat Finder exposes coat length and
 * recognition and nothing that would need a number behind it.
 *
 * Generated once from the verified acquisition run, then maintained by hand.
 * Re-check any value against its source with `npm run breeds:verify`.
 */
import type { Breed } from "../types.ts";

export const CAT_BREEDS: readonly Breed[] = [
  {
    id: "cat-maine-coon",
    slug: "maine-coon",
    species: "cat",
    name: "Maine Coon",
    originCountries: [
      "United States",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/maine-coon-cat/",
        sourceId: "cfa-maine-coon",
      },
    ],
    coat: {
      length: "long",
      statedAs: "thick, luxuriant coat that is shorter at the shoulders, longer on the sides, stomach and back legs, and culminating in a dramatically long plumed tail",
      sourceId: "cfa-maine-coon",
    },
    traits: {},
    editorial: {
      intro: [
        "The Maine Coon is one of the largest domestic cat breeds, with a long history in North America. The breed is often described as sociable and people-oriented, with a distinctive long coat and substantial body size. As with all breeds, individual cats vary widely in personality, activity level, and care needs.",
      ],
      appearance: [
        "Maine Coons are large, muscular cats with a long, water- resistant coat, a heavy tail, and tufted ears. Many lines have a square muzzle, a broad chest, and a relatively long body proportion. Recognised coat colours and patterns vary widely.",
      ],
      temperament: [
        "The breed is often described as friendly, sociable, and interactive — sometimes called \"the gentle giant\". Some individuals are very engaged and follow people around the home; others are quieter. Like every breed, behaviour varies by individual, socialisation, and household.",
      ],
      activity: [
        "Most Maine Coons benefit from interactive play, climbing structures, and engagement with their people. Sturdy cat trees sized for a large breed are commonly recommended, and puzzle feeders or play sessions can help with body condition and mental engagement.",
      ],
      grooming: [
        "The long, dense coat benefits from regular brushing — often several times a week — to prevent matting. Routine dental, nail, and ear care are sensible parts of any Maine Coon routine. Weight and body condition should be monitored with your veterinarian, especially because of the breed's large size.",
      ],
      health: [
        "As with all breeds, Maine Coons can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for certain conditions; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for the budget and time required for a long-coated large-breed cat — including routine grooming, sturdy furniture and climbing structures, preventive veterinary care, and the possibility of emergency vet costs. Reputable shelters, rescues, and breeders are appropriate sources.",
      ],
      faqs: [
        { question: "Are Maine Coons good with families?", answer: "Many Maine Coons live happily in households with children, but no breed is universally child-safe and individual cats vary. Adult supervision and respect for the cat's space matter for any breed." },
        { question: "Are Maine Coons hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Cat allergens come from skin and saliva as well as fur. Anyone with allergies should spend time with a specific cat before committing." },
        { question: "Do Maine Coons get along with other pets?", answer: "Many Maine Coons are described as sociable with other pets when introductions are gradual and the cat has space to retreat. Individual personalities vary; structured introductions and an experienced household help." },
        { question: "How big do Maine Coons get?", answer: "Maine Coons are among the largest domestic cat breeds, but exact size varies by individual and line. Discuss expectations for a specific cat with the breeder, shelter, or your veterinarian." },
      ],
    },
    sources: ["cfa-maine-coon", "cfa-std-maine-coon"],
    images: ["cat-maine-coon-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-siamese",
    slug: "siamese",
    species: "cat",
    name: "Siamese",
    originCountries: [
      "Thailand",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/siamese/",
        sourceId: "cfa-siamese",
      },
    ],
    coat: {
      length: "short",
      statedAs: "everything about these cats is long except the fine, short coat",
      sourceId: "cfa-siamese",
    },
    traits: {},
    editorial: {
      intro: [
        "The Siamese is one of the oldest recognised cat breeds, with roots in Thailand. Modern Siamese cats are often described as social, vocal, and people-oriented, with the breed's familiar colourpoint coat and blue eyes. Both traditional and modern (more slender) body types exist depending on registry and breeder.",
      ],
      appearance: [
        "Siamese cats are slim to athletically built, with a short single-layer coat and the classic colourpoint pattern — darker on the face, ears, paws, and tail — over a lighter body. Blue eyes are a defining feature. Coat-point colours include seal, blue, chocolate, lilac, and other recognised variations.",
      ],
      temperament: [
        "The breed is often described as sociable, talkative, and attached to its people. Some Siamese cats prefer constant interaction; others are more independent. As with every breed, behaviour varies by individual, socialisation, and household.",
      ],
      activity: [
        "Many Siamese cats benefit from interactive play, climbing opportunities, and consistent engagement with their people. The breed is often described as more active than average and may not thrive in households where it spends long stretches alone.",
      ],
      grooming: [
        "The short coat is low-maintenance compared with longhaired breeds — typically weekly brushing is enough. Routine dental, nail, and ear care are sensible parts of any Siamese routine.",
      ],
      health: [
        "As with all breeds, Siamese cats can be affected by inherited and lifestyle health conditions. Discuss preventive care and any specific concerns with a licensed veterinarian. FaunaHub does not list specific medical conditions or treatments.",
      ],
      responsibility: [
        "Plan for a sociable, often vocal cat that does best with consistent daily interaction. Reputable shelters, rescues, and breeders are appropriate sources. Households that travel often or work very long hours should plan reliable care.",
      ],
      faqs: [
        { question: "Are Siamese cats talkative?", answer: "The breed is widely described as vocal — many Siamese cats use their voice frequently with people. Individual variation is substantial; spend time with a specific cat before deciding if this trait fits your household." },
        { question: "Are Siamese cats hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Allergens come from skin and saliva as well as fur. Anyone with allergies should spend time with a specific cat before committing." },
        { question: "Do Siamese cats need a companion?", answer: "Some Siamese cats are described as preferring company — another cat or attentive human household — and may not thrive in long-alone homes. Individual personality matters; discuss with a shelter or breeder." },
        { question: "What is the difference between traditional and modern Siamese?", answer: "Different registries recognise different body-type variations of the breed, from rounder 'traditional' types to more slender modern types. They are the same breed under most major registries; specifics vary by registry." },
      ],
    },
    sources: ["cfa-siamese", "cfa-std-siamese"],
    images: ["cat-siamese-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-british-shorthair",
    slug: "british-shorthair",
    species: "cat",
    name: "British Shorthair",
    originCountries: [
      "United Kingdom",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/british-shorthair/",
        sourceId: "cfa-british-shorthair",
      },
    ],
    coat: {
      length: "short",
      statedAs: "short, dense coat contains more hairs per square inch than any other breed",
      sourceId: "cfa-british-shorthair",
    },
    traits: {},
    editorial: {
      intro: [
        "The British Shorthair is a sturdy, dense-coated cat breed with British origins. The breed is often described as even-tempered and relatively low-key compared with the most interactive cat breeds — although individual cats vary substantially.",
      ],
      appearance: [
        "British Shorthairs are medium-to-large cats with a round face, broad chest, and a notably dense, plush coat. The classic \"British Blue\" (grey) coat is familiar, but many other coat colours and patterns are recognised. Adults tend to develop a sturdy, full-bodied build.",
      ],
      temperament: [
        "The breed is often described as easy-going and affectionate without being clingy — many British Shorthairs prefer sitting near their people rather than on them. As with every breed, individual personality varies; some are highly playful, others are very mellow.",
      ],
      activity: [
        "Most British Shorthairs need daily play and engagement but are often less hyperactive than some other breeds. Interactive toys, climbing structures, and brief structured play sessions help maintain body condition and mental engagement.",
      ],
      grooming: [
        "The dense double coat benefits from regular brushing, particularly during seasonal sheds. Routine dental, nail, and ear care are sensible parts of any cat's routine. Discuss body-condition management with a veterinarian — the breed's build can mask weight gain.",
      ],
      health: [
        "As with all breeds, British Shorthairs can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for routine grooming, preventive veterinary care, and a long-term commitment — many cats live well into their teens. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
      ],
      faqs: [
        { question: "Are British Shorthairs good for first-time cat owners?", answer: "The breed is sometimes recommended for first-time owners because of its often even temperament and relatively independent style, but no breed is universally easy. Spend time with a specific cat before deciding." },
        { question: "Are British Shorthairs lap cats?", answer: "Many British Shorthairs prefer sitting near their people rather than being held — though individual personality varies. Forced handling tends not to suit the breed; offering a calm presence often works better." },
        { question: "Do British Shorthairs shed a lot?", answer: "The dense coat sheds, particularly in seasonal moults. Regular brushing helps manage loose hair. No breed is fully non-shedding." },
        { question: "Are British Shorthairs hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
      ],
    },
    sources: ["cfa-british-shorthair", "cfa-std-british-shorthair"],
    images: ["cat-british-shorthair-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-ragdoll",
    slug: "ragdoll",
    species: "cat",
    name: "Ragdoll",
    originCountries: [
      "United States",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/ragdoll/",
        recognizedYear: 2000,
        sourceId: "cfa-ragdoll",
      },
    ],
    coat: {
      length: "medium",
      statedAs: "Moderately long length, with abundant guard hairs, but minimal woolly undercoat",
      sourceId: "cfa-std-ragdoll",
    },
    traits: {},
    editorial: {
      intro: [
        "The Ragdoll is a large, semi-longhaired cat breed developed in the United States in the 1960s. The breed name comes from the cat's often-relaxed body posture when handled, though individual cats vary widely. Ragdolls are typically kept as indoor companions.",
      ],
      appearance: [
        "Ragdolls are large cats with a semi-long, plush coat and colourpoint markings — the body is paler than the points on the face, ears, paws, and tail. Blue eyes are a breed characteristic. Recognised patterns include colourpoint, mitted, and bicolor.",
      ],
      temperament: [
        "The breed is often described as gentle, sociable, and comparatively relaxed about handling. Some individuals are playful and engaged; others are quieter. As with every breed, behaviour depends on individual personality, socialisation, and the household.",
      ],
      activity: [
        "Most Ragdolls benefit from regular interactive play and climbing options sized appropriately for a large breed. Many lines are typically calmer than highly active breeds, but they still need engagement to maintain body condition and mental wellbeing.",
      ],
      grooming: [
        "The semi-long coat benefits from several brushing sessions a week to prevent matting, particularly in shedding seasons. Routine dental, nail, and ear care are sensible parts of any Ragdoll routine.",
      ],
      health: [
        "As with all breeds, Ragdolls can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns for a particular cat with a licensed veterinarian.",
      ],
      responsibility: [
        "Plan for regular grooming, sturdy furniture and climbing structures sized for a large breed, and the long-term cost of feline veterinary care. Many Ragdolls are kept entirely indoors; if any outdoor access is provided, it should be in a safe enclosure or under direct supervision. Reputable shelters, rescues, and breeders are appropriate sources.",
      ],
      faqs: [
        { question: "Do Ragdolls really go limp when you pick them up?", answer: "The breed has a reputation for relaxed handling — the source of the name 'Ragdoll' — but individual cats vary, and 'goes limp' is not a universal trait. Treat handling tolerance as a generalisation, not a guarantee." },
        { question: "Are Ragdolls good with children?", answer: "Many Ragdolls live happily in households with children, but no breed is universally child-safe and individual personality matters. Adult supervision and respect for the cat's space are important for any cat." },
        { question: "Are Ragdolls hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
        { question: "Can Ragdolls be outdoor cats?", answer: "Many breed sources strongly recommend keeping Ragdolls indoors because of their trusting temperament and limited self-defence in many lines. If any outdoor access is provided, a secure 'catio' or supervised harness time is generally safer than free-roaming." },
      ],
    },
    sources: ["cfa-ragdoll", "cfa-std-ragdoll"],
    images: ["cat-ragdoll-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-persian-cat",
    slug: "persian-cat",
    species: "cat",
    name: "Persian",
    originCountries: [
      "Iran",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/persian/",
        sourceId: "cfa-persian-cat",
      },
    ],
    coat: {
      length: "long",
      statedAs: "COAT: long and thick, standing off from the body",
      sourceId: "cfa-std-persian-cat",
    },
    traits: {},
    editorial: {
      intro: [
        "The Persian is a long-coated cat breed with a distinctive flat-faced (brachycephalic) profile in many modern lines. The breed is often described as calm and affectionate. Coat care and breed-specific anatomical considerations make the Persian a higher-maintenance choice than most short-haired breeds.",
      ],
      appearance: [
        "Persians are medium-to-large cats with a long, dense double coat, a sturdy round body, short legs, and a characteristically flat face in most modern lines. Some traditional or \"doll-face\" lines have a less extreme facial profile. Recognised coat colours and patterns vary widely.",
      ],
      temperament: [
        "The breed is widely described as gentle, calm, and affectionate, often preferring quiet indoor environments to high-energy households. Individual personality varies — some Persians are very playful, others very mellow.",
      ],
      activity: [
        "Most Persians need modest daily play and engagement. Interactive toys and gentle climbing options work well. Avoid stressful or chaotic environments — the breed often does best in calmer households.",
      ],
      grooming: [
        "The long coat needs daily brushing to prevent matting, particularly under the legs and around the rear. Routine eye care is important in many lines — discuss specifics with a veterinarian, especially for any cat with a pronounced flat-faced profile. Some owners use professional grooming periodically.",
      ],
      health: [
        "Brachycephalic context: the flat-faced head shape is associated with specific care considerations in some lines. FaunaHub does not provide diagnosis or treatment. Anyone considering this breed should research these considerations with a licensed veterinarian and choose a breeder or rescue that prioritises health and welfare.",
      ],
      responsibility: [
        "Plan for daily grooming time and budget for veterinary care that may include attention to airway, eye, and skin-fold health in some lines. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers and be cautious about \"rare colour\" marketing.",
      ],
      faqs: [
        { question: "Do Persians need daily grooming?", answer: "Most Persians need daily brushing to prevent matting, particularly under the legs and around the rear. Some owners also use periodic professional grooming. Plan time for this if considering the breed." },
        { question: "Are Persians good for apartments?", answer: "Many Persians do well in apartments because of their typically calm activity level, but landlord rules, household noise, and the breed's grooming and veterinary care needs all matter. Spend time with a specific cat before deciding." },
        { question: "Are Persians healthy cats?", answer: "The flat-faced head shape in many modern lines is associated with specific care considerations. FaunaHub does not diagnose or treat. Discuss the breed's care considerations with a licensed veterinarian and choose breeders/rescues that prioritise health." },
        { question: "Are Persians hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
      ],
    },
    sources: ["cfa-persian-cat", "cfa-std-persian-cat"],
    images: ["cat-persian-cat-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-bengal-cat",
    slug: "bengal-cat",
    species: "cat",
    name: "Bengal",
    originCountries: [
      "United States",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/bengal/",
        recognizedYear: 2018,
        sourceId: "cfa-bengal-cat",
      },
    ],
    coat: {
      length: "variable",
      statedAs: "Bengals can be either shorthaired or longhaired",
      sourceId: "cfa-bengal-cat",
    },
    traits: {},
    editorial: {
      intro: [
        "The Bengal is a domestic cat breed developed through crossbreeding programmes with the wild Asian leopard cat (Prionailurus bengalensis) several generations back. Modern registered Bengals are generally many generations removed from the wild ancestor and are considered domestic cats. Bengals are widely described as high-energy and demanding — a poor match for low-engagement households.",
      ],
      appearance: [
        "Bengals are athletic, muscular cats with a distinctive spotted or marbled coat, often with glittery-looking guard hairs. Coat colours include brown, silver, snow, and other recognised variations. Generational labels (F1, F2, F3, etc.) describe how many generations a cat is from a wild ancestor — most cats sold as pets are F4 and later.",
      ],
      temperament: [
        "Bengals are widely described as intelligent, active, and interactive — many are demanding of their owners' time and engagement. Some individuals are friendly and confident; others are reserved with strangers. Like every breed, behaviour varies by individual, generation, and household.",
      ],
      activity: [
        "Most Bengals need substantial daily play, climbing, and mental enrichment. Tall cat trees, puzzle feeders, interactive toys, and reliable daily play sessions help keep the cat engaged. Bored Bengals are commonly described as developing unwanted behaviours — opening cupboards, knocking things off shelves, vocal demands.",
      ],
      grooming: [
        "The short coat is low-maintenance — weekly brushing is typically enough. Routine dental, nail, and ear care are sensible parts of any cat's routine.",
      ],
      health: [
        "As with all breeds, Bengals can be affected by inherited and lifestyle health conditions. Responsible breeders typically test for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care with a licensed veterinarian.",
      ],
      responsibility: [
        "Bengals are not a default match for households unable to commit substantial daily engagement. Local law in some jurisdictions also restricts ownership of early-generation hybrid cats — verify before acquiring. Reputable breeders who prioritise welfare, and rescues that specialise in the breed, are appropriate sources.",
      ],
      faqs: [
        { question: "Are Bengal cats good for first-time cat owners?", answer: "Bengals are generally not a default match for first-time owners because of their high activity and engagement needs. Some experienced cat households thrive with the breed; others find the energy level overwhelming. Be realistic about your daily time and engagement capacity." },
        { question: "Are Bengals legal to own?", answer: "Most modern registered Bengals are many generations from any wild ancestor and are treated as domestic cats. However, some jurisdictions restrict ownership of early-generation hybrid cats. Verify local laws before acquiring a Bengal, particularly if a breeder mentions a low F-generation." },
        { question: "Do Bengals get along with other pets?", answer: "Some Bengals live happily with other cats or with dogs after gradual, supervised introductions. Others prefer to be the only pet. Individual personality and structured introductions matter." },
        { question: "Are Bengals hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing." },
      ],
    },
    sources: ["cfa-bengal-cat", "cfa-std-bengal-cat"],
    images: ["cat-bengal-cat-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-05-21",
  },
  {
    id: "cat-norwegian-forest-cat",
    slug: "norwegian-forest-cat",
    species: "cat",
    name: "Norwegian Forest Cat",
    originCountries: [
      "Norway",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/norwegian-forest-cat/",
        recognizedYear: 1993,
        sourceId: "cfa-norwegian-forest-cat",
      },
    ],
    coat: {
      length: "long",
      statedAs: "luxuriantly thick double coat, marked by a silky, water-repellant overcoat, and frontal ruff adorning the neck and chest",
      sourceId: "cfa-norwegian-forest-cat",
    },
    traits: {},
    editorial: {
      intro: [
        "The Norwegian Forest Cat is a large, long-coated breed from Norway, accepted for CFA Championship competition in 1993. The breed is usually described as sturdy and slow-maturing, and its dense coat — developed for a cold climate — is the characteristic that shapes most day-to-day care.",
      ],
      appearance: [
        "Norwegian Forest Cats are substantial, well-muscled cats with a long double coat, a full ruff, and a bushy tail. The CFA standard notes that the dense undercoat reaches its full development in winter, so the same cat can look noticeably different between seasons. Many colours and patterns are recognised. CFA breed standards describe size qualitatively rather than by weight, so FaunaHub does not publish a numeric size range for this breed.",
      ],
      temperament: [
        "The breed is commonly described as calm, sociable, and comparatively undemanding of constant attention. Individual cats vary considerably, and early handling, environment, and household routine shape adult behaviour at least as much as breed background does.",
      ],
      activity: [
        "Norwegian Forest Cats are often described as enthusiastic climbers, and vertical space — tall cat trees, shelves, or safe high perches — tends to suit them better than floor-level play alone. Activity levels vary by individual; a cat that has somewhere to climb generally makes more use of a home than one that does not.",
      ],
      grooming: [
        "CFA's own description of this breed is worth quoting against expectation: \"Surprisingly, the impressive double coat does not require a lot of maintenance.\" The coat is described as a silky, water-repellent overcoat over a thick undercoat, and the breed standard notes the undercoat reaches its full development in winter — so shedding and combing needs are seasonal rather than constant. Routine nail and dental care are sensible parts of any cat's routine, and are easier when introduced gradually and early.",
      ],
      health: [
        "As with all breeds, Norwegian Forest Cats can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns, and rescue or adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns with a licensed veterinarian.",
      ],
      responsibility: [
        "Coat care is a real but often over-estimated commitment with this breed — CFA describes the double coat as not requiring a lot of maintenance, with seasonal peaks. Consider climbing space and the long-term cost of veterinary care and insurance before adopting. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
      ],
      householdContext: [
        "The breed generally suits homes that can offer vertical space and regular grooming time. As with any cat, introductions to other pets should be gradual and individual rather than assumed from breed reputation, and interactions between young children and cats should be supervised with an accessible retreat the cat can use.",
      ],
      faqs: [
        { question: "How much grooming does a Norwegian Forest Cat need?", answer: "Less than the coat suggests. CFA describes the double coat as not requiring a lot of maintenance, which surprises many owners. Demand is seasonal rather than constant: the breed standard notes the dense undercoat reaches its full development in winter, so combing tends to matter most around coat changes. What works varies by individual coat, and a groomer or veterinarian can advise for a specific cat." },
        { question: "Are Norwegian Forest Cats the same as Maine Coons?", answer: "No. They are separate breeds with separate CFA standards and separate histories — the Norwegian Forest Cat is Norwegian and was accepted for CFA Championship in 1993, while the Maine Coon is North American. Both are large, long-coated breeds, which is why they are often confused." },
        { question: "Do Norwegian Forest Cats need to go outdoors?", answer: "No breed requires outdoor access, and whether to allow it depends on local traffic, wildlife, disease risk, and law rather than on breed. What this breed does tend to want is height — climbing opportunities indoors suit it well. Discuss indoor-outdoor decisions for a specific cat with a veterinarian." },
        { question: "Are Norwegian Forest Cats hypoallergenic?", answer: "No cat breed is fully hypoallergenic. Cat allergens come mainly from proteins in saliva and skin secretions rather than from hair length, so a long coat is not itself the cause. Anyone with allergies should spend time with a specific cat before committing." },
      ],
    },
    sources: ["cfa-norwegian-forest-cat", "cfa-std-norwegian-forest-cat"],
    images: ["cat-norwegian-forest-cat-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-09-13",
  },
  {
    id: "cat-sphynx",
    slug: "sphynx",
    species: "cat",
    name: "Sphynx",
    originCountries: [
      "Canada",
    ],
    recognition: [
      {
        registryId: "cfa",
        status: "recognized",
        registryGroup: "Championship",
        registryUrl: "https://cfa.org/breed/sphynx/",
        recognizedYear: 2002,
        sourceId: "cfa-sphynx",
      },
    ],
    coat: {
      length: "hairless",
      statedAs: "hairlessness, although Sphynx are not actually complete-ly hairless cats",
      sourceId: "cfa-std-sphynx",
    },
    traits: {},
    editorial: {
      intro: [
        "The Sphynx is a near-hairless breed accepted for CFA Championship competition in 2002. The CFA standard is explicit that Sphynx are \"not actually completely hairless\" — a fine down is normal, and short hair may be present on the feet, outer ears, and tail. The breed is usually described as active and strongly people-oriented, and its skin is what makes its care routine unlike other cats'.",
      ],
      appearance: [
        "Sphynx are medium-sized cats with a wrinkled, suede-textured skin surface, large ears, and a visible muscular build. The CFA standard describes a range from apparently hairless to a covering of soft, peach-like fuzz. Many colours and patterns are recognised, visible in the skin pigment rather than in a coat.",
      ],
      temperament: [
        "The breed is commonly described as sociable, curious, and closely involved with its household. Individual cats vary, and early handling and environment shape adult behaviour considerably. A breed described as affectionate is a starting point for questions about a specific cat, not a guarantee about one.",
      ],
      activity: [
        "Sphynx are often described as active and playful, and interactive play plus climbing opportunities generally suit them. Activity levels vary by individual; providing somewhere to climb and something to investigate matters more than any particular exercise routine.",
      ],
      grooming: [
        "The absence of a full coat does not mean the absence of grooming — it changes it. Skin oils that a coat would normally absorb remain on the surface, so routine skin care, including ear cleaning, is commonly part of a Sphynx routine, and many owners bathe their cats periodically. Frequency varies by individual and is worth discussing with a veterinarian rather than following a general rule. Warmth also matters: a cat without an insulating coat is more exposed to cold, and to sun where outdoor access is allowed.",
      ],
      health: [
        "As with all breeds, Sphynx can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for relevant concerns, and rescue or adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Skin and temperature-related care questions for a specific cat should go to a licensed veterinarian.",
      ],
      responsibility: [
        "This breed's care routine is ongoing and different in kind from a coated cat's: skin care, warmth, and sun protection where relevant. Consider that commitment, along with the long-term cost of veterinary care and insurance, before adopting. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
      ],
      householdContext: [
        "The breed generally suits indoor homes that can be kept comfortably warm and where someone is around — the Sphynx is frequently described as wanting company. As with any cat, introductions to other pets should be gradual and individual, and children should be supervised with cats and taught to leave an accessible retreat available.",
      ],
      faqs: [
        { question: "Are Sphynx cats hypoallergenic?", answer: "No. This is the most common misunderstanding about the breed. Cat allergens come mainly from proteins in saliva and skin secretions, which a hairless cat still produces — hair is a carrier, not the source. No cat breed is fully hypoallergenic, and anyone with allergies should spend time with a specific cat before committing." },
        { question: "Are Sphynx cats completely hairless?", answer: "No. The CFA standard states directly that Sphynx are not actually completely hairless, describing a range from apparent hairlessness to a covering of soft, peach-like fuzz, with short hair possible on the feet, outer edges of the ears, and tail." },
        { question: "Do Sphynx cats need baths?", answer: "Many owners bathe them periodically, because skin oils that a coat would normally absorb stay on the surface instead. How often depends on the individual cat's skin, and is a reasonable thing to ask a veterinarian about rather than to settle by a general schedule." },
        { question: "Do Sphynx cats get cold?", answer: "Without an insulating coat they are more exposed to cold than coated cats, so a comfortably warm home, warm places to rest, and attention to sun exposure where outdoor access is allowed are part of normal care for the breed. Specific guidance for a particular cat is a question for a veterinarian." },
      ],
    },
    sources: ["cfa-sphynx", "cfa-std-sphynx"],
    images: ["cat-sphynx-001"],
    reviewedAt: "2026-09-13",
    publishedAt: "2026-09-13",
  },
];
