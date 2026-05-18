import type { SourceLink } from "@/lib/educational/types";

export type Species = "dog" | "cat";

export type SafetyClassification = "usually-safe" | "depends" | "usually-unsafe";

export type RiskLevel = "low" | "moderate" | "high";

export interface FoodSafetyFAQ {
  question: string;
  answer: string;
}

export interface FoodSafetyArticle {
  slug: string;
  species: Species;
  foodName: string;
  pageQuestion: string;
  title: string;
  description: string;
  safetyClassification: SafetyClassification;
  riskLevel: RiskLevel;
  directAnswer: string;
  why: string[];
  preparationCautions: string[];
  quantityCaution: string;
  warningSigns: string[];
  whenToCallVet: string;
  saferAlternatives: string[];
  faqs: FoodSafetyFAQ[];
  searchAliases: string[];
  /** Optional verified-source list. Only add entries you have verified. */
  sources?: SourceLink[];
  publishedTime: string;
  modifiedTime: string;
}

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

// ─── VERIFIED SOURCES ─────────────────────────────────────────────────────
// Each URL has been fetched and confirmed to resolve to the content
// described. Keep this list small and high-quality.

const SRC_ASPCA_PEOPLE_FOODS: SourceLink = {
  label: "ASPCA — People Foods To Avoid Feeding Your Pets",
  url: "https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets",
  type: "veterinary",
  note: "ASPCA list of common toxic and risky people-foods",
};

const SRC_ASPCA_POISON_CONTROL: SourceLink = {
  label: "ASPCA Animal Poison Control Center",
  url: "https://www.aspca.org/pet-care/animal-poison-control",
  type: "veterinary",
  note: "24/7 emergency animal-poisoning helpline (US)",
};

const SRC_MERCK_FOOD_HAZARDS: SourceLink = {
  label: "Merck Veterinary Manual — Food Hazards",
  url: "https://www.merckvetmanual.com/toxicology/food-hazards",
  type: "reference",
  note: "Veterinary reference on food-related toxicology in animals",
};

const SRC_AVMA_PET_CARE: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_MERCK_VET_MANUAL: SourceLink = {
  label: "Merck Veterinary Manual",
  url: "https://www.merckvetmanual.com",
  type: "reference",
  note: "Comprehensive veterinary reference",
};

export const FOOD_SAFETY_ARTICLES: FoodSafetyArticle[] = [
  // ─── DOG ────────────────────────────────────────────────────────────────
  {
    slug: "can-dogs-eat-chocolate",
    species: "dog",
    foodName: "Chocolate",
    pageQuestion: "Can Dogs Eat Chocolate?",
    title: "Can Dogs Eat Chocolate? Safety, Risk & What To Do",
    description:
      "Chocolate is widely considered unsafe for dogs because of theobromine and caffeine. Learn the risk, warning signs, and why urgent veterinary advice is the right next step.",
    safetyClassification: "usually-unsafe",
    riskLevel: "high",
    directAnswer:
      "No — chocolate is widely considered unsafe for dogs and is a high-priority concern. Dogs metabolize the theobromine and caffeine in chocolate much more slowly than humans do, which is why even small amounts can be problematic in some individuals. If your dog has eaten chocolate, the safest action is to contact a licensed veterinarian or a poison control helpline right away.",
    why: [
      "Chocolate contains two stimulants — theobromine and caffeine — that dogs metabolize slowly compared with humans. These compounds can affect the heart, nervous system, and gastrointestinal tract.",
      "The amount of these stimulants varies by chocolate type. Dark chocolate, baker's chocolate, and cocoa powder tend to contain more than milk chocolate, and white chocolate contains relatively little but is still not a recommended food.",
      "Because the response depends on the dog's size, health, the type of chocolate, and the quantity eaten, owners should not attempt to calculate a 'safe' amount themselves. The standard veterinary approach is to assess risk with a professional rather than rely on home estimates.",
    ],
    preparationCautions: [
      "Do not offer chocolate of any kind as a treat.",
      "Keep chocolate, cocoa powder, baker's chocolate, and chocolate-coated foods out of reach in sealed cupboards or high shelves.",
      "Be cautious around seasonal exposures — Easter, Halloween, Christmas, and Valentine's Day all involve elevated risk in households with dogs.",
      "Foods that contain hidden cocoa — chocolate chips, brownies, baked goods, certain protein bars — pose the same risk as bars of chocolate.",
    ],
    quantityCaution:
      "There is no responsible everyday amount of chocolate to give a dog. Discussion of thresholds is a clinical question for a veterinarian, who will weigh the chocolate type, the dog's weight and health, and how recently it was eaten. Do not try to estimate this yourself.",
    warningSigns: [
      "Vomiting or diarrhea",
      "Restlessness, hyperactivity, or pacing",
      "Increased thirst or urination",
      "Rapid heart rate or panting",
      "Muscle tremors or twitching",
      "Seizures or collapse",
    ],
    whenToCallVet:
      "Contact a veterinarian or animal poison helpline as soon as you know or suspect a dog has eaten chocolate — even if you are not yet seeing symptoms. Bring the wrapper or package and an estimate of how much may have been eaten. Do not wait for symptoms before getting professional advice.",
    saferAlternatives: [
      "Plain unsalted carrot sticks",
      "Plain unsalted apple slices (no seeds or core)",
      "Plain cooked, unseasoned chicken in small pieces",
      "Commercial dog treats designed for the species",
    ],
    faqs: [
      {
        question: "Is white chocolate safe for dogs?",
        answer:
          "White chocolate contains less theobromine than dark or milk chocolate, but it is still high in sugar and fat, can contain other problematic ingredients, and is not a recommended food for dogs. If your dog ate a meaningful amount of white chocolate, contact a veterinarian for advice rather than assume it is harmless.",
      },
      {
        question: "What about chocolate-flavored treats made for dogs?",
        answer:
          "Some commercial dog treats marketed as 'chocolate-flavored' contain carob, a separate ingredient that does not contain theobromine. Read the label carefully and check with your veterinarian if you are unsure.",
      },
      {
        question: "My dog ate a small piece of milk chocolate and seems fine. Do I still need a vet?",
        answer:
          "Even when a dog seems fine, contacting a veterinarian or animal poison helpline is the safer route. They can assess risk based on body weight, chocolate type, and quantity, and tell you what to monitor for in the hours ahead. Do not rely on online dosage calculators as a substitute for that conversation.",
      },
      {
        question: "How long after eating chocolate would symptoms appear?",
        answer:
          "Onset and duration vary by dog and by amount eaten. Symptoms can appear within hours of ingestion in some cases. Because timing is variable and individual, treat any known chocolate ingestion as a veterinary question rather than a wait-and-see situation.",
      },
    ],
    searchAliases: ["chocolate", "cocoa", "cacao", "dark chocolate", "milk chocolate"],
    sources: [SRC_ASPCA_PEOPLE_FOODS, SRC_ASPCA_POISON_CONTROL, SRC_MERCK_FOOD_HAZARDS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-dogs-eat-grapes",
    species: "dog",
    foodName: "Grapes & Raisins",
    pageQuestion: "Can Dogs Eat Grapes?",
    title: "Can Dogs Eat Grapes? Safety, Risk & What To Do",
    description:
      "Grapes and raisins are widely considered unsafe for dogs. Learn why, what warning signs to watch for, and why urgent veterinary advice matters even with small amounts.",
    safetyClassification: "usually-unsafe",
    riskLevel: "high",
    directAnswer:
      "No — grapes and raisins are widely considered unsafe for dogs and are a high-priority concern, regardless of amount. The specific compound responsible is still under study, and individual susceptibility varies, so the standard advice is to treat any known ingestion as a veterinary question. There is no responsibly recommended 'safe' amount.",
    why: [
      "Grapes, raisins, currants, and sultanas have been associated with acute kidney problems in dogs. The mechanism is not yet fully understood, but the link has been observed across many veterinary case reports.",
      "Susceptibility appears to vary by individual dog. Some dogs that have eaten grapes show no apparent reaction, while others can have serious responses to small amounts. Because there is no reliable way to predict this in advance, all dogs should be treated as potentially sensitive.",
      "Foods that contain grapes or raisins in less obvious forms — fruit salads, baked goods, trail mix, raisin bread, grape jelly — pose the same risk as the fresh fruit.",
    ],
    preparationCautions: [
      "Do not offer grapes, raisins, currants, or sultanas as treats — even in small quantities.",
      "Keep grape-containing baked goods, cereals, trail mix, and granola out of reach.",
      "Be particularly mindful at parties, lunch boxes, picnics, and holidays where grape-based foods are common.",
      "Grape juice and grape-flavored products should also be kept away from dogs.",
    ],
    quantityCaution:
      "There is no responsibly recommended 'safe' quantity of grapes or raisins for dogs. Even amounts that seem trivial have been associated with reactions in some individuals. Decisions about treatment after ingestion are clinical and belong with a veterinarian.",
    warningSigns: [
      "Vomiting or diarrhea, sometimes within hours",
      "Loss of appetite",
      "Lethargy or unusual quietness",
      "Reduced urine output, or a change in drinking pattern",
      "Abdominal tenderness",
      "Weakness or collapse",
    ],
    whenToCallVet:
      "Contact a veterinarian or an animal poison helpline as soon as you know a dog has eaten grapes or raisins. Do not wait to see whether symptoms develop. Bring information about how much was eaten and when, and follow their advice — which often involves immediate professional assessment.",
    saferAlternatives: [
      "Plain unsalted apple slices (no seeds or core)",
      "Plain unsalted blueberries",
      "Plain unsalted carrot sticks",
      "Plain cooked, unseasoned chicken in small pieces",
    ],
    faqs: [
      {
        question: "Are seedless grapes safer than regular grapes for dogs?",
        answer:
          "No. The risk associated with grapes does not appear to be tied to seeds, skin, or colour. Seedless, red, green, organic, and peeled grapes have all been associated with reactions in dogs.",
      },
      {
        question: "What about raisins or currants?",
        answer:
          "Raisins and currants are dried forms of grapes and carry the same concern in a more concentrated form. They are commonly hidden inside cookies, breads, granola bars, and breakfast cereals, so check ingredient lists before offering any human food.",
      },
      {
        question: "My dog ate one grape and seems fine. Do I really need a vet?",
        answer:
          "Yes — contact a veterinarian or animal poison helpline even after a single grape, particularly in smaller dogs. Reactions to grapes are inconsistent between individuals, which makes early professional advice safer than waiting.",
      },
      {
        question: "Are grape-flavored medicines or supplements safe?",
        answer:
          "Artificially grape-flavored products do not contain real grape and are usually not associated with the same risk, but always check with a veterinarian or pharmacist before giving any human medication or supplement to a dog.",
      },
    ],
    searchAliases: ["grapes", "grape", "raisin", "raisins", "currants", "sultanas"],
    sources: [SRC_ASPCA_PEOPLE_FOODS, SRC_ASPCA_POISON_CONTROL, SRC_MERCK_FOOD_HAZARDS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-dogs-eat-apples",
    species: "dog",
    foodName: "Apples",
    pageQuestion: "Can Dogs Eat Apples?",
    title: "Can Dogs Eat Apples? Safety, Risk & Preparation",
    description:
      "Plain apple slices are usually considered safe for dogs in small amounts. Learn what to remove first, what to avoid, and when to consult a veterinarian.",
    safetyClassification: "usually-safe",
    riskLevel: "low",
    directAnswer:
      "Usually yes — plain apple, in small pieces with the core and seeds removed, is generally considered a reasonable occasional treat for healthy adult dogs. The seeds and core are the parts to be cautious about, along with anything added (sugar, caramel, spices, chocolate). When in doubt, check with your veterinarian — especially if your dog has diabetes, a sensitive stomach, or a condition that affects diet.",
    why: [
      "Apple flesh is generally considered a low-risk food for healthy adult dogs when offered in moderation. It can be a useful low-calorie snack alternative to richer treats.",
      "Apple seeds contain small amounts of compounds that produce cyanide when broken down. Whole-seed exposure in occasional accidental nibbles is generally not considered dangerous to most dogs, but seeds and core are still worth removing as a routine precaution.",
      "Apple core pieces and whole apples can also be a choking hazard, particularly for small dogs or eager swallowers. Cutting the flesh into manageable bite-sized pieces removes that risk.",
    ],
    preparationCautions: [
      "Remove the core and seeds before offering apple.",
      "Cut the flesh into bite-sized pieces appropriate to the dog's size.",
      "Offer plain apple only — no caramel apples, no sugary toppings, no apple pie, no apple chips with cinnamon, sugar, or xylitol.",
      "Check ingredient labels on commercial dried apple — some products contain added sugar or other ingredients not appropriate for dogs.",
    ],
    quantityCaution:
      "Apple is a treat, not a meal — and treats should generally be a small fraction of a dog's daily food intake. The exact appropriate portion depends on the dog's size, calorie needs, and overall diet, which is a conversation for your veterinarian.",
    warningSigns: [
      "Choking or sudden difficulty breathing while eating",
      "Persistent vomiting or diarrhea after eating apple",
      "Unusual lethargy after eating apple core or seeds in larger quantities",
      "Refusal to drink or eat for an extended period",
    ],
    whenToCallVet:
      "Contact a veterinarian if your dog has swallowed apple core or a large quantity of seeds, is choking, or shows persistent vomiting, diarrhea, or other unusual signs after eating apple. Also check with a veterinarian before introducing apple regularly if your dog has any chronic condition that affects diet.",
    saferAlternatives: [
      "Plain unsalted blueberries",
      "Plain unsalted carrot sticks",
      "Plain unsalted cucumber slices",
      "Commercial dog treats designed for the species",
    ],
    faqs: [
      {
        question: "Are apple seeds dangerous for dogs?",
        answer:
          "Apple seeds contain small amounts of compounds that generate cyanide when broken down. Occasional accidental ingestion of a few seeds is usually not considered dangerous for most dogs, but removing the core and seeds before offering apple is the responsible default.",
      },
      {
        question: "What about applesauce?",
        answer:
          "Plain, unsweetened applesauce with no added sugar, spices, or sweeteners is generally considered acceptable in small amounts for healthy dogs, but commercial applesauce often contains added ingredients. Always check the label, and avoid anything containing xylitol, which is a serious concern for dogs.",
      },
      {
        question: "Can puppies eat apple?",
        answer:
          "Small pieces of plain apple flesh are usually considered acceptable as an occasional treat for healthy puppies once they are on solid food, but puppies have specific nutritional needs and easily upset stomachs. Discuss introducing new foods with your veterinarian.",
      },
      {
        question: "How often is too often?",
        answer:
          "Apple should be an occasional treat rather than a daily habit. Treats are usually a small fraction of a dog's calorie intake; specific frequency depends on your dog's size, health, and overall diet.",
      },
    ],
    searchAliases: ["apple", "apples", "applesauce"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-dogs-eat-cheese",
    species: "dog",
    foodName: "Cheese",
    pageQuestion: "Can Dogs Eat Cheese?",
    title: "Can Dogs Eat Cheese? Safety, Caution & Portion Guide",
    description:
      "Cheese is usually considered a 'depends' food for dogs because of lactose, fat, and salt. Learn the cautions, warning signs, and when to skip cheese entirely.",
    safetyClassification: "depends",
    riskLevel: "moderate",
    directAnswer:
      "It depends — many healthy adult dogs tolerate small amounts of plain cheese as an occasional treat, but cheese carries genuine caution flags around lactose, fat, and salt. Some dogs are lactose-sensitive, some have conditions where cheese is a poor choice, and certain cheeses contain ingredients that are not appropriate for dogs. When in doubt, treat cheese as an exception rather than a routine snack.",
    why: [
      "Cheese is a dairy product, and many adult dogs do not digest lactose particularly well. Mild lactose sensitivity can produce gastrointestinal upset.",
      "Cheese is also high in fat and often high in salt, both of which add up quickly in a dog's diet. Dogs with pancreatitis, a history of pancreatic issues, weight problems, or salt-sensitive conditions should generally avoid cheese.",
      "Some cheeses contain added ingredients that are not appropriate for dogs — garlic, onion, chives, herbs, blue mould cultures, or, in rare commercial products, sweeteners that may be problematic.",
    ],
    preparationCautions: [
      "Offer only plain cheese — no flavored cheeses, no herbed or peppered varieties, no blue cheese, no cheeses containing onion, garlic, chives, or raisins.",
      "Choose lower-fat, lower-salt options where possible (for example, small pieces of plain mozzarella or cottage cheese) rather than aged hard cheeses.",
      "Avoid cheese as a vehicle for medication unless your veterinarian has specifically recommended it.",
      "Avoid cheese entirely in dogs with pancreatitis, obesity, sodium-sensitive heart conditions, or known dairy intolerance.",
    ],
    quantityCaution:
      "Cheese should be an occasional small treat, not a regular food. Exact amounts depend on the dog's size, health, and overall calorie intake — this is a question for a veterinarian rather than a blog post.",
    warningSigns: [
      "Gassiness, loose stool, or diarrhea after eating cheese",
      "Vomiting",
      "Lethargy or abdominal discomfort",
      "Refusing food or showing signs of pain after eating",
      "Sudden severe symptoms after eating flavored cheese (especially those containing onion or garlic ingredients)",
    ],
    whenToCallVet:
      "Contact a veterinarian if your dog develops persistent gastrointestinal upset after eating cheese, eats a cheese that contained problematic ingredients such as onion or garlic, or shows signs of pain or pancreatitis (lethargy, vomiting, abdominal tenderness). Do not introduce cheese as a regular treat in a dog with a chronic condition without veterinary input.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in very small pieces",
      "Plain unsalted carrot sticks",
      "Plain unsalted cucumber slices",
      "Commercial dog treats designed for the species",
    ],
    faqs: [
      {
        question: "Is cottage cheese safe for dogs?",
        answer:
          "Plain, low-fat cottage cheese in very small amounts is often tolerated by healthy adult dogs, but it is still a dairy product and not appropriate for every dog. Check with your veterinarian before adding it regularly, particularly if your dog has any chronic condition.",
      },
      {
        question: "Can I use cheese to give my dog medication?",
        answer:
          "Some owners and clinicians use small amounts of plain cheese to administer medication. Whether that is appropriate for your dog — and what type and amount of cheese is reasonable — should be confirmed with your veterinarian first, since some medications must not be combined with dairy.",
      },
      {
        question: "Are flavored or processed cheeses safe?",
        answer:
          "Flavored cheeses, herbed cheeses, cheese spreads, blue cheeses, and many commercial cheese products contain ingredients that are not appropriate for dogs — including onion, garlic, and chives, which are a separate concern from cheese itself.",
      },
      {
        question: "My dog ate a lot of cheese. Now what?",
        answer:
          "Watch for gastrointestinal upset and contact a veterinarian if symptoms develop or your dog has any underlying condition. Large quantities of fat-rich food can trigger pancreatitis in susceptible dogs.",
      },
    ],
    searchAliases: ["cheese", "cheddar", "mozzarella", "cottage cheese", "cream cheese", "parmesan"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-dogs-eat-chicken",
    species: "dog",
    foodName: "Chicken",
    pageQuestion: "Can Dogs Eat Chicken?",
    title: "Can Dogs Eat Chicken? Safety, Preparation & What To Avoid",
    description:
      "Plain cooked boneless chicken is usually considered safe for dogs. Learn what to avoid — bones, seasoning, onion, garlic, fried fats — and when to check with a vet.",
    safetyClassification: "usually-safe",
    riskLevel: "low",
    directAnswer:
      "Usually yes — plain, fully cooked, unseasoned, boneless chicken is generally considered a reasonable food for healthy adult dogs in appropriate portions. The cautions are about what gets added: bones, seasoning (especially garlic and onion), salt, oil, and fried or fatty preparations. If your dog has a chicken allergy, kidney disease, or another condition affecting diet, check with a veterinarian first.",
    why: [
      "Chicken is a lean protein source that is widely used in commercial dog food, including therapeutic diets. Plain cooked chicken is therefore a familiar protein for most dogs and is generally well tolerated.",
      "Bones are the most common chicken-related risk. Cooked chicken bones — particularly small bones from wings, legs, or carcasses — can splinter and cause choking, mouth injuries, or gastrointestinal damage.",
      "Seasoning is the next most common concern. Garlic and onion (including garlic powder and onion powder) are not appropriate for dogs, and many seasoned, rotisserie, takeaway, or pre-marinated chicken products contain them.",
      "Fried, oily, or fatty chicken (skin-on, breaded, deep-fried) is high in fat and can be a problem for dogs prone to pancreatitis or weight issues.",
    ],
    preparationCautions: [
      "Cook chicken thoroughly. Raw chicken is not recommended for general feeding because of bacterial risk to both pet and household.",
      "Remove all bones before serving — including small wing or leg bones.",
      "Skip the seasoning. No salt, pepper, garlic, onion, leeks, chives, herbs, or marinades.",
      "Avoid skin and fried preparations; use plain poached, boiled, baked, or grilled chicken meat.",
      "Cut into bite-sized pieces appropriate to the dog's size.",
    ],
    quantityCaution:
      "Chicken can be part of a balanced diet but is not a complete diet on its own. Exact amounts depend on body weight, calorie needs, and overall food plan — these are decisions to make with your veterinarian, particularly if you are doing more than offering occasional plain pieces as a treat.",
    warningSigns: [
      "Choking or sudden coughing while eating",
      "Vomiting or diarrhea after eating chicken",
      "Black, tarry, or bloody stool (which may indicate gastrointestinal injury)",
      "Lethargy, abdominal pain, or refusing food",
      "Itching, swelling, or skin reactions in dogs with chicken allergy",
    ],
    whenToCallVet:
      "Contact a veterinarian if your dog has swallowed cooked bones, has eaten heavily seasoned, garlic- or onion-containing chicken, is showing signs of choking or gastrointestinal distress, or has known or suspected chicken allergy and unexpectedly ate chicken.",
    saferAlternatives: [
      "Plain cooked, unseasoned turkey (boneless)",
      "Plain unsalted apple slices (no seeds or core)",
      "Plain unsalted carrot sticks",
      "Commercial dog treats designed for the species",
    ],
    faqs: [
      {
        question: "Can dogs eat raw chicken?",
        answer:
          "Raw chicken carries bacterial risk for both pets and household members. While some raw-feeding diets do use raw poultry, raw chicken is not recommended as a casual occasional treat and should only be considered as part of a carefully managed diet under veterinary input.",
      },
      {
        question: "Are chicken bones really that bad?",
        answer:
          "Cooked chicken bones are the main concern: they can splinter, lodge in the throat, perforate the gut, or cause obstructions. Raw bones carry their own risks (bacterial, dental damage, obstruction). The safest default is to remove bones entirely.",
      },
      {
        question: "Can dogs eat rotisserie chicken from the supermarket?",
        answer:
          "Most rotisserie chickens are pre-seasoned, often with salt, garlic, onion, or other ingredients that are not appropriate for dogs. Pre-marinated supermarket chicken is similarly seasoned. Plain home-cooked chicken is a safer option for sharing.",
      },
      {
        question: "Is chicken broth safe?",
        answer:
          "Plain, unsalted, onion-and-garlic-free chicken broth in small amounts is often considered acceptable. Most commercial broths contain salt and other flavorings, so check the ingredient label carefully or stick to home-cooked plain broth.",
      },
    ],
    searchAliases: ["chicken", "chicken meat", "rotisserie chicken", "chicken broth"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-dogs-eat-eggs",
    species: "dog",
    foodName: "Eggs",
    pageQuestion: "Can Dogs Eat Eggs?",
    title: "Can Dogs Eat Eggs? Safety, Preparation & Cautions",
    description:
      "Plain cooked eggs are usually considered safe for dogs in appropriate portions. Learn the cautions around raw eggs, seasoning, and individual sensitivity.",
    safetyClassification: "usually-safe",
    riskLevel: "low",
    directAnswer:
      "Usually yes — plain, fully cooked eggs without salt, butter, oil, or seasoning are generally considered a reasonable occasional food for healthy adult dogs. Raw eggs and heavily seasoned preparations are the main cautions. As with any new food, introduce gradually and check with your veterinarian if your dog has a known sensitivity or a condition affecting diet.",
    why: [
      "Cooked eggs provide protein and are familiar to many dog diets. They are widely used as a complementary food and in some therapeutic diets.",
      "Raw eggs carry bacterial risk (including Salmonella) for both pets and household members, and the protein avidin in raw egg whites is sometimes raised as a concern in repeated raw feeding. Most veterinary guidance prefers cooked eggs over raw.",
      "Butter, oil, salt, seasonings, and add-ins commonly used in human egg preparations (ham, bacon, onion, cheese with garlic or chives) introduce separate concerns.",
    ],
    preparationCautions: [
      "Cook eggs fully — scrambled, hard-boiled, or poached without added fat or seasoning.",
      "Do not add salt, pepper, butter, oil, milk, cheese, onion, garlic, chives, herbs, or sauces.",
      "Avoid mixing eggs with ham, bacon, sausage, or other salty, fatty processed meats.",
      "Cut or break into bite-sized pieces appropriate to the dog's size, and let the egg cool before serving.",
    ],
    quantityCaution:
      "Eggs are a complementary food, not a complete diet. Specific portion sizes depend on the dog's weight, total calorie intake, and overall food plan — a conversation for your veterinarian rather than a generalized rule.",
    warningSigns: [
      "Vomiting or diarrhea after eating egg",
      "Itching, swelling, or skin reactions in dogs with egg allergy",
      "Lethargy or refusing food",
      "Symptoms after eating seasoned or processed egg dishes (which may indicate reaction to onion, garlic, salt, or other ingredients rather than to the egg itself)",
    ],
    whenToCallVet:
      "Contact a veterinarian if your dog develops persistent gastrointestinal upset after eating eggs, has eaten a heavily seasoned or onion- or garlic-containing egg dish, shows allergic-type reactions, or has a chronic condition (kidney disease, pancreatitis history, weight management plan) that affects diet.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in small pieces",
      "Plain unsalted carrot sticks",
      "Plain unsalted apple slices (no seeds or core)",
      "Commercial dog treats designed for the species",
    ],
    faqs: [
      {
        question: "Are raw eggs safe for dogs?",
        answer:
          "Raw eggs are generally not recommended as a casual treat because of bacterial risk for both pets and household members. Some raw-feeding diets do incorporate raw eggs under veterinary input, but cooked eggs are a lower-risk choice for most households.",
      },
      {
        question: "Can dogs eat eggshells?",
        answer:
          "Crushed cooked eggshells are sometimes suggested as a calcium supplement, but this is a question best addressed with your veterinarian rather than guessed at. Whole or sharp shell pieces can be a choking or gastrointestinal-injury risk.",
      },
      {
        question: "How often can my dog have eggs?",
        answer:
          "Eggs should be an occasional complementary food rather than a primary part of a dog's diet. Exact frequency depends on overall calorie intake, weight, and health — confirm with your veterinarian if eggs are part of a regular feeding plan.",
      },
      {
        question: "What if my dog has an egg allergy?",
        answer:
          "Egg allergies in dogs are uncommon but possible. If your dog has shown signs after eating egg before — itching, ear infections, gastrointestinal issues — discuss elimination diets with a veterinarian rather than re-introducing egg on your own.",
      },
    ],
    searchAliases: ["egg", "eggs", "scrambled egg", "hard boiled egg"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  // ─── CAT ────────────────────────────────────────────────────────────────
  {
    slug: "can-cats-drink-milk",
    species: "cat",
    foodName: "Milk",
    pageQuestion: "Can Cats Drink Milk?",
    title: "Can Cats Drink Milk? Lactose, Risk & What To Offer Instead",
    description:
      "The 'cat with a saucer of milk' picture is misleading. Many adult cats do not tolerate cow's milk well. Learn the cautions, alternatives, and when to call a veterinarian.",
    safetyClassification: "depends",
    riskLevel: "moderate",
    directAnswer:
      "It depends — many adult cats do not tolerate cow's milk well, despite the long-running picture-book association of cats with milk. Milk is not a necessary food for cats; clean fresh water is. Some cats may handle a very small amount occasionally; others may develop gastrointestinal upset even from small servings. As a general rule, treat milk as something to skip rather than offer routinely.",
    why: [
      "Kittens produce the enzyme lactase to digest the lactose in their mother's milk, but many cats produce less lactase as they mature. As a result, a significant number of adult cats are lactose-intolerant to some degree.",
      "Cow's milk is also relatively high in fat and calories compared with what cats need, and is not nutritionally complete for the species.",
      "Some cats can tolerate small amounts of plain low-lactose dairy products without obvious symptoms, while others react to even modest amounts. Individual variability is significant.",
    ],
    preparationCautions: [
      "Do not assume milk is necessary or beneficial for cats. Clean fresh water is what they need.",
      "Avoid sweetened, flavored, or condensed milk products entirely.",
      "Avoid milk substitutes (oat, almond, soy) as a routine drink for cats — they are formulated for human nutrition, not feline.",
      "If you choose to offer dairy occasionally, choose small amounts of plain, unflavored options and watch for tolerance.",
    ],
    quantityCaution:
      "Milk is not a recommended part of a cat's regular diet. If offered at all, it should be a very small amount on an occasional basis, and only in cats that have already tolerated it without symptoms. Make this a conversation with a veterinarian if your cat repeatedly seeks out dairy.",
    warningSigns: [
      "Loose stool, diarrhea, or gassiness after drinking milk",
      "Vomiting",
      "Lethargy or reduced appetite",
      "Repeated avoidance of food after a milk-containing snack",
    ],
    whenToCallVet:
      "Contact a veterinarian if your cat develops persistent gastrointestinal upset after consuming milk, repeatedly reacts to dairy, or has any chronic condition that affects diet. Also raise it at routine appointments if dairy keeps making its way into your cat's diet — there is usually a better alternative.",
    saferAlternatives: [
      "Clean fresh water — the most important fluid for any cat",
      "Wet (canned) cat food for additional moisture",
      "Specialty cat-formulated milk replacers (only if recommended by a veterinarian)",
    ],
    faqs: [
      {
        question: "Why do cats seem to like milk if it's bad for them?",
        answer:
          "Cats often respond to the fat in milk and to its smell and warmth. Liking a food is not the same as digesting it well — many cats will happily eat or drink something that upsets their stomach afterwards.",
      },
      {
        question: "What about lactose-free milk?",
        answer:
          "Lactose-free cow's milk removes one concern but does not make milk a recommended food for cats. It still has fat and calories cats do not need from a beverage. If you want to offer something dairy-flavored, ask your veterinarian whether a small amount is appropriate.",
      },
      {
        question: "Can kittens drink cow's milk?",
        answer:
          "Cow's milk is not a substitute for queen's milk in orphaned or hand-reared kittens. They have specific nutritional needs and should be fed a kitten-formulated milk replacer under veterinary guidance.",
      },
      {
        question: "Are oat, almond, or soy milks safer?",
        answer:
          "Plant-based milks are formulated for humans, not cats, and offer no nutritional advantage for a feline diet. They can contain added sugars, flavorings, or other ingredients that are not appropriate. Water remains the best beverage for cats.",
      },
    ],
    searchAliases: ["milk", "cow milk", "dairy", "lactose", "almond milk", "oat milk", "soy milk"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-cats-eat-cheese",
    species: "cat",
    foodName: "Cheese",
    pageQuestion: "Can Cats Eat Cheese?",
    title: "Can Cats Eat Cheese? Lactose, Fat & Real-World Caution",
    description:
      "Cheese is a 'depends' food for cats. Learn why lactose, fat, and salt matter, what to avoid, and why cheese is not a recommended regular food.",
    safetyClassification: "depends",
    riskLevel: "moderate",
    directAnswer:
      "It depends — some adult cats may tolerate a tiny piece of plain cheese as a rare treat, but cheese is not a recommended regular food for cats. Lactose intolerance is common, cheese is high in fat and salt relative to what cats need, and many cheeses contain ingredients (onion, garlic, chives) that are not appropriate. Skip cheese as a routine snack.",
    why: [
      "Like milk, cheese is a dairy product, and many adult cats produce less lactase than kittens do. This can make even small amounts of cheese hard for some individuals to digest.",
      "Cheese is calorie-dense, high in fat, and often high in salt. Cats are small animals with modest calorie needs; a small piece of cheese can be a much larger fraction of a cat's daily intake than it looks.",
      "Flavored cheeses, blue cheeses, herbed cheeses, and processed cheese products can contain onion, garlic, chives, mould cultures, or other ingredients that are not appropriate for cats.",
    ],
    preparationCautions: [
      "If you choose to offer cheese at all, choose plain, unflavored, lower-salt cheese in a very small amount.",
      "Do not offer flavored cheese, blue cheese, garlic- or onion-containing cheese, or cheese spreads with added ingredients.",
      "Do not use cheese as a routine treat or as a primary way to give medication unless a veterinarian has specifically recommended it.",
      "Avoid cheese entirely in cats with kidney disease, weight problems, sodium-sensitive heart conditions, or known dairy intolerance.",
    ],
    quantityCaution:
      "Cheese should be a rare exception, not a routine. Cats have modest daily calorie needs and benefit much more from a balanced commercial diet than from human dairy snacks. Specific decisions belong with your veterinarian.",
    warningSigns: [
      "Diarrhea, loose stool, or vomiting after eating cheese",
      "Increased thirst or urination after salty cheese",
      "Lethargy or refusing food",
      "Sudden severe symptoms after flavored cheese (which may reflect onion or garlic ingredients)",
    ],
    whenToCallVet:
      "Contact a veterinarian if your cat develops persistent gastrointestinal upset after eating cheese, has eaten cheese containing problematic ingredients (onion, garlic, chives), or shows signs of pain, weakness, or distress after eating.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in very small pieces",
      "Plain cooked, unseasoned fish in very small pieces (occasional, not as a complete diet)",
      "Commercial cat treats designed for the species",
      "A balanced complete-and-balanced commercial cat food",
    ],
    faqs: [
      {
        question: "Is cottage cheese safe for cats?",
        answer:
          "A very small amount of plain, low-fat cottage cheese is sometimes tolerated by healthy adult cats, but it remains a dairy product and is not a nutritionally important food for cats. Discuss with a veterinarian before adding it routinely.",
      },
      {
        question: "Can I use cheese to give my cat medication?",
        answer:
          "Some owners use a small piece of cheese to hide medication, but whether this is appropriate depends on the cat, the cheese, and the medication. Confirm with your veterinarian first — some drugs should not be combined with dairy.",
      },
      {
        question: "What about cheese-flavored cat treats?",
        answer:
          "Commercial cat treats marketed as 'cheese-flavored' are formulated for cats, but they still count as treats. Treats should be a small fraction of a cat's calorie intake and should not replace a balanced complete-and-balanced cat food.",
      },
      {
        question: "My cat steals cheese off the counter. Should I worry?",
        answer:
          "A one-off small theft is usually not an emergency in a healthy adult cat, but it is worth watching for gastrointestinal upset. If your cat has chronic conditions or kept stealing larger amounts, or ate flavored/herbed cheese, contact a veterinarian.",
      },
    ],
    searchAliases: ["cheese", "cheddar", "mozzarella", "cottage cheese", "cream cheese", "parmesan"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-cats-eat-chicken",
    species: "cat",
    foodName: "Chicken",
    pageQuestion: "Can Cats Eat Chicken?",
    title: "Can Cats Eat Chicken? Safety, Preparation & Cautions",
    description:
      "Plain cooked boneless chicken is usually considered safe for cats. Learn what to avoid — bones, seasoning, onion, garlic — and how chicken fits a feline diet.",
    safetyClassification: "usually-safe",
    riskLevel: "low",
    directAnswer:
      "Usually yes — plain, fully cooked, unseasoned, boneless chicken is widely considered a reasonable food for healthy adult cats in appropriate portions. Cats are obligate carnivores, and chicken is a common protein in commercial cat food. The cautions are about how it is prepared, not the meat itself.",
    why: [
      "Chicken is a familiar protein for most cats and is widely used in commercial cat foods. Plain cooked chicken is generally well tolerated.",
      "Cats are obligate carnivores: their diet must include animal-source protein and specific nutrients (such as taurine) that they cannot reliably make from plant sources. Chicken can contribute to that protein, but plain cooked chicken alone is not a complete diet.",
      "Cooked chicken bones can splinter and cause choking, mouth injuries, or gastrointestinal damage. Garlic, onion, leeks, chives, salt, and many seasonings present separate concerns.",
    ],
    preparationCautions: [
      "Cook chicken fully. Raw chicken is not recommended for general feeding because of bacterial risk to both pet and household.",
      "Remove all bones before serving — including small wing or leg bones.",
      "Skip the seasoning. No salt, pepper, garlic, onion, leeks, chives, herbs, or marinades.",
      "Avoid skin and fried preparations.",
      "Cut into bite-sized pieces appropriate to the cat's mouth, and let it cool before serving.",
    ],
    quantityCaution:
      "Plain cooked chicken can be part of a varied diet but is not, on its own, a complete-and-balanced cat food. Cats have specific nutritional needs that a chicken-only diet does not meet. Use chicken as a treat or topper rather than a meal replacement, and consult a veterinarian about regular feeding plans.",
    warningSigns: [
      "Choking or sudden coughing while eating",
      "Vomiting or diarrhea after eating chicken",
      "Black, tarry, or bloody stool (which may indicate gastrointestinal injury)",
      "Lethargy or refusing food",
      "Itching, skin reactions, or recurring digestive issues in cats with a chicken allergy",
    ],
    whenToCallVet:
      "Contact a veterinarian if your cat has swallowed cooked bones, has eaten heavily seasoned or onion- or garlic-containing chicken, is showing signs of choking or gastrointestinal distress, or has known chicken allergy and unexpectedly ate chicken.",
    saferAlternatives: [
      "Plain cooked, unseasoned turkey (boneless)",
      "Plain cooked, unseasoned fish in small amounts (occasional, not as a complete diet)",
      "Commercial cat treats designed for the species",
      "A balanced complete-and-balanced commercial cat food",
    ],
    faqs: [
      {
        question: "Can cats eat raw chicken?",
        answer:
          "Raw chicken carries bacterial risk for both pets and household members. While some raw-feeding diets do use raw poultry, raw chicken is not recommended as a casual occasional treat and should only be considered as part of a carefully managed feeding plan under veterinary input.",
      },
      {
        question: "Are chicken bones safe?",
        answer:
          "Cooked chicken bones are the main concern: they can splinter, lodge in the throat, perforate the gut, or cause obstructions. The safest default is to remove all bones entirely.",
      },
      {
        question: "Can chicken be a cat's whole diet?",
        answer:
          "Plain cooked chicken on its own is not a complete-and-balanced cat food. Cats need taurine and other nutrients that a chicken-only diet does not reliably provide in correct amounts. Use chicken as a treat or topper alongside a complete commercial diet, or follow a veterinarian-formulated home-prepared plan.",
      },
      {
        question: "Is rotisserie chicken from the supermarket okay?",
        answer:
          "Most rotisserie chickens are pre-seasoned, often with salt, garlic, onion, or other ingredients that are not appropriate for cats. Plain home-cooked chicken is a safer option for sharing.",
      },
    ],
    searchAliases: ["chicken", "chicken meat", "rotisserie chicken"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-cats-eat-eggs",
    species: "cat",
    foodName: "Eggs",
    pageQuestion: "Can Cats Eat Eggs?",
    title: "Can Cats Eat Eggs? Safety, Preparation & Cautions",
    description:
      "Plain cooked eggs are usually considered safe for cats in appropriate portions. Learn the cautions around raw eggs, seasoning, and portion size for cats.",
    safetyClassification: "usually-safe",
    riskLevel: "low",
    directAnswer:
      "Usually yes — plain, fully cooked eggs without salt, butter, oil, or seasoning are generally considered a reasonable occasional food for healthy adult cats. Raw eggs and heavily seasoned preparations are the main cautions. As always, introduce gradually and check with a veterinarian if your cat has a known sensitivity or a condition affecting diet.",
    why: [
      "Cooked eggs provide animal-source protein, which is appropriate for an obligate carnivore.",
      "Raw eggs carry bacterial risk (including Salmonella) for both pet and household members. The protein avidin in raw egg whites is sometimes raised as a concern in repeated raw feeding. Cooked eggs are the lower-risk default.",
      "Butter, oil, salt, and add-ins commonly used in human egg preparations (ham, bacon, onion, cheese, chives) introduce separate concerns.",
    ],
    preparationCautions: [
      "Cook eggs fully — scrambled, hard-boiled, or poached without added fat or seasoning.",
      "Do not add salt, pepper, butter, oil, milk, cheese, onion, garlic, chives, herbs, or sauces.",
      "Avoid mixing eggs with ham, bacon, sausage, or other salty, fatty processed meats.",
      "Cut or break into bite-sized pieces appropriate to the cat's mouth, and let the egg cool before serving.",
    ],
    quantityCaution:
      "Eggs are a complementary food, not a complete cat diet. Cats have small daily calorie needs and specific nutritional requirements. Portion sizes should be small, occasional, and discussed with a veterinarian if eggs are part of a regular feeding plan.",
    warningSigns: [
      "Vomiting or diarrhea after eating egg",
      "Itching, skin reactions, or recurring digestive issues in cats with an egg allergy",
      "Lethargy or refusing food",
      "Symptoms after eating seasoned or processed egg dishes (which may indicate reaction to onion, garlic, salt, or other ingredients rather than to the egg itself)",
    ],
    whenToCallVet:
      "Contact a veterinarian if your cat develops persistent gastrointestinal upset after eating eggs, has eaten heavily seasoned, onion- or garlic-containing egg dishes, shows allergic-type reactions, or has a chronic condition that affects diet.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in small pieces",
      "Plain cooked, unseasoned fish in small amounts (occasional, not as a complete diet)",
      "Commercial cat treats designed for the species",
      "A balanced complete-and-balanced commercial cat food",
    ],
    faqs: [
      {
        question: "Are raw eggs safe for cats?",
        answer:
          "Raw eggs are generally not recommended as a casual treat because of bacterial risk for both pets and household members. Some raw-feeding diets do incorporate raw eggs under veterinary input; cooked eggs are a lower-risk choice for most households.",
      },
      {
        question: "Can cats eat eggshells?",
        answer:
          "Crushed cooked eggshells are sometimes suggested as a calcium supplement, but this is a question for your veterinarian rather than a casual decision. Whole or sharp shell pieces can be a choking or gastrointestinal-injury risk.",
      },
      {
        question: "How often can my cat have eggs?",
        answer:
          "Eggs should be an occasional complementary food, not a daily staple. The exact frequency depends on your cat's overall diet, weight, and health — confirm with your veterinarian if eggs are part of a regular feeding plan.",
      },
      {
        question: "What if my cat has an egg allergy?",
        answer:
          "Egg allergies in cats are uncommon but possible. If your cat has shown signs after eating egg before, discuss elimination diets with a veterinarian rather than re-introducing egg on your own.",
      },
    ],
    searchAliases: ["egg", "eggs", "scrambled egg", "hard boiled egg"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-cats-eat-tuna",
    species: "cat",
    foodName: "Tuna",
    pageQuestion: "Can Cats Eat Tuna?",
    title: "Can Cats Eat Tuna? Caution, Mercury & Nutritional Balance",
    description:
      "Plain tuna may be an occasional treat for some cats, but it is not a complete diet. Learn the cautions around salt, oil, mercury, and over-reliance on tuna.",
    safetyClassification: "depends",
    riskLevel: "moderate",
    directAnswer:
      "It depends — a very small amount of plain tuna, occasionally, is sometimes considered acceptable for healthy adult cats. Tuna is not a recommended regular food, and it is not a complete diet for cats. The main cautions are added salt and oil, the highly palatable nature of tuna (which can make cats picky), mercury concerns at higher exposure levels, and the risk of nutritional imbalance if tuna becomes a major part of the diet.",
    why: [
      "Cats are obligate carnivores, and plain tuna provides animal-source protein. A small amount occasionally is therefore often tolerated.",
      "Tuna is highly palatable. Some cats develop a strong preference for tuna and will refuse complete-and-balanced cat food in favour of it. This is a real risk because tuna alone does not meet feline nutritional requirements.",
      "Canned tuna products vary widely. Tuna in salted brine or in oil adds sodium and fat that cats do not need; tuna with added flavourings or sauces (onion, garlic, herbs) is not appropriate.",
      "Large predatory fish, including tuna, can accumulate environmental contaminants such as mercury. Occasional small servings are generally not the same risk profile as tuna-heavy diets, but it is one more reason to keep tuna an exception rather than a routine.",
    ],
    preparationCautions: [
      "If offered at all, choose plain tuna packed in water with no added salt or flavourings — not tuna in brine, oil, sauce, or marinade.",
      "Do not offer tuna mixed with onion, garlic, chives, or other seasonings.",
      "Do not let tuna replace complete-and-balanced cat food. Use it as a small occasional topper or treat at most.",
      "Wash any utensils or surfaces in contact with raw tuna; do not feed raw tuna casually.",
    ],
    quantityCaution:
      "A small spoonful of plain water-packed tuna as a rare treat is very different from a tuna-based diet. Frequency, amount, and whether tuna is appropriate at all in your cat's diet are decisions for your veterinarian — particularly if your cat has kidney disease, urinary issues, or other chronic conditions.",
    warningSigns: [
      "Vomiting or diarrhea after tuna",
      "Refusing regular complete-and-balanced food after tuna treats (a sign of selective eating)",
      "Lethargy or unusual behaviour after eating tuna",
      "Symptoms after eating brine- or oil-packed tuna, or tuna with added seasonings",
    ],
    whenToCallVet:
      "Contact a veterinarian if your cat develops persistent gastrointestinal upset after tuna, refuses complete cat food in favour of tuna, has any chronic condition affecting diet, or accidentally consumed flavored or oil-packed tuna in a meaningful amount.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in small pieces",
      "Plain cooked, unseasoned turkey in small pieces",
      "Commercial cat food (wet or dry) labelled as complete-and-balanced",
      "Commercial cat treats designed for the species",
    ],
    faqs: [
      {
        question: "Can my cat have canned tuna every day?",
        answer:
          "No — tuna is not a complete-and-balanced food for cats, and feeding it daily can lead to nutritional imbalance and selective eating. Tuna is at most an occasional small treat.",
      },
      {
        question: "Is tuna packed in oil okay?",
        answer:
          "Oil- and brine-packed tuna add fat and salt that cats do not need. If you offer tuna at all, plain water-packed tuna with no added salt is the better choice — and even then, in very small amounts.",
      },
      {
        question: "What about cat foods that are tuna-flavored?",
        answer:
          "Tuna-flavored cat foods that are labelled as complete-and-balanced are formulated for cats and are generally appropriate. They are different from feeding human canned tuna, which is not formulated for feline nutrition.",
      },
      {
        question: "What about mercury?",
        answer:
          "Larger predatory fish, including tuna, can accumulate mercury and other environmental contaminants. Occasional small servings of plain tuna are not generally considered a major mercury concern, but tuna-heavy diets are one more reason to keep tuna an occasional treat rather than a staple.",
      },
    ],
    searchAliases: ["tuna", "canned tuna", "tinned tuna", "fish"],
    sources: [SRC_AVMA_PET_CARE, SRC_MERCK_VET_MANUAL],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "can-cats-eat-chocolate",
    species: "cat",
    foodName: "Chocolate",
    pageQuestion: "Can Cats Eat Chocolate?",
    title: "Can Cats Eat Chocolate? Safety, Risk & What To Do",
    description:
      "Chocolate is widely considered unsafe for cats because of theobromine and caffeine. Learn the risk, warning signs, and why urgent veterinary advice is the right next step.",
    safetyClassification: "usually-unsafe",
    riskLevel: "high",
    directAnswer:
      "No — chocolate is widely considered unsafe for cats and is a high-priority concern. Cats are generally less drawn to sweet foods than dogs are, so accidental ingestion is less common, but it does still happen with baked goods, drinks, and chocolate-flavored products. If your cat has eaten chocolate, contact a licensed veterinarian or a poison control helpline as soon as possible.",
    why: [
      "Chocolate contains two stimulants — theobromine and caffeine — that cats metabolize slowly compared with humans. These compounds can affect the heart, nervous system, and gastrointestinal tract.",
      "Dark chocolate, baker's chocolate, and cocoa powder tend to contain more of these stimulants than milk chocolate. White chocolate contains relatively little, but it is still not an appropriate food for cats.",
      "Because the response depends on body weight, the chocolate type, the amount eaten, and how recently it was consumed, individual risk is a clinical question for a veterinarian — not a home calculation.",
    ],
    preparationCautions: [
      "Do not offer chocolate of any kind to cats.",
      "Keep chocolate, cocoa powder, baker's chocolate, and chocolate-coated foods out of reach.",
      "Be cautious around holidays — Easter, Halloween, Christmas, and Valentine's Day all involve elevated chocolate availability in many households.",
      "Foods that contain hidden cocoa — chocolate chips, brownies, baked goods, certain protein bars, hot chocolate drinks — pose the same risk as chocolate bars.",
    ],
    quantityCaution:
      "There is no responsible everyday amount of chocolate to give a cat. Discussion of thresholds and risk after ingestion is a clinical question for a veterinarian, who will assess based on the chocolate type, the cat's weight and health, and how recently it was eaten.",
    warningSigns: [
      "Vomiting or diarrhea",
      "Restlessness or unusual behaviour",
      "Increased thirst or urination",
      "Rapid heart rate or panting",
      "Muscle tremors or twitching",
      "Seizures or collapse",
    ],
    whenToCallVet:
      "Contact a veterinarian or animal poison helpline as soon as you know or suspect a cat has eaten chocolate — even if you are not yet seeing symptoms. Bring the wrapper or package and an estimate of how much may have been eaten. Do not wait for symptoms before getting professional advice.",
    saferAlternatives: [
      "Plain cooked, unseasoned chicken in very small pieces",
      "Commercial cat treats designed for the species",
      "A small amount of plain water-packed tuna as a rare treat",
      "A balanced complete-and-balanced commercial cat food",
    ],
    faqs: [
      {
        question: "Are cats really at risk from chocolate?",
        answer:
          "Yes. Although cats are less drawn to sweet foods than dogs are, theobromine and caffeine in chocolate affect cats in similar ways to dogs. Any known chocolate ingestion is a veterinary question rather than something to wait out.",
      },
      {
        question: "Is white chocolate okay because it has less theobromine?",
        answer:
          "White chocolate contains less theobromine than dark or milk chocolate, but it is still high in sugar and fat and is not appropriate for cats. If your cat has eaten a meaningful amount of white chocolate, contact a veterinarian for advice rather than assume it is harmless.",
      },
      {
        question: "My cat licked some hot chocolate. Is that an emergency?",
        answer:
          "A very small lick may not produce visible symptoms, but cocoa-based drinks contain theobromine and caffeine, and the safer route is always to contact a veterinarian or animal poison helpline for advice rather than guess.",
      },
      {
        question: "How long after eating chocolate would symptoms appear?",
        answer:
          "Onset and duration vary by individual cat and by amount eaten. Symptoms can develop within hours. Because timing is variable, treat any known chocolate ingestion as a veterinary question rather than a wait-and-see situation.",
      },
    ],
    searchAliases: ["chocolate", "cocoa", "cacao", "hot chocolate", "dark chocolate"],
    sources: [SRC_ASPCA_PEOPLE_FOODS, SRC_ASPCA_POISON_CONTROL, SRC_MERCK_FOOD_HAZARDS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getArticleBySlug(slug: string): FoodSafetyArticle | undefined {
  return FOOD_SAFETY_ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesBySpecies(species: Species): FoodSafetyArticle[] {
  return FOOD_SAFETY_ARTICLES.filter((a) => a.species === species);
}

export function getRelatedArticles(
  current: FoodSafetyArticle,
  limit = 3
): FoodSafetyArticle[] {
  return FOOD_SAFETY_ARTICLES.filter(
    (a) => a.species === current.species && a.slug !== current.slug
  ).slice(0, limit);
}

const CLASSIFICATION_GROUPS: Record<SafetyClassification, number> = {
  "usually-safe": 0,
  depends: 1,
  "usually-unsafe": 2,
};

export function sortArticlesForHub(
  articles: FoodSafetyArticle[]
): FoodSafetyArticle[] {
  return [...articles].sort((a, b) => {
    const groupDiff =
      CLASSIFICATION_GROUPS[a.safetyClassification] -
      CLASSIFICATION_GROUPS[b.safetyClassification];
    if (groupDiff !== 0) return groupDiff;
    return a.foodName.localeCompare(b.foodName);
  });
}
