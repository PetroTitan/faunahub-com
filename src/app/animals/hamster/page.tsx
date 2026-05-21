import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Hamster — Profile, Habitat, Diet & Behavior";
const description =
  "Hamsters as pets and in the wild: Syrian hamster reference species, nocturnal solitary biology, omnivorous diet, and species-appropriate housing.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/hamster",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("hamster"),
});

export default function HamsterPage() {
  return (
    <AnimalProfileLayout
      commonName="Hamster"
      pageTitle={title}
      description={description}
      path="/animals/hamster"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Nocturnal"]}
      image={getAnimalImage("hamster") ?? undefined}
      galleryImages={getAnimalGalleryImages("hamster")}
      factsHeaderNote='Reference species for specific details below is the Syrian or golden hamster (Mesocricetus auratus), the most common pet hamster. Several smaller "dwarf" hamster species are also kept as pets.'
      overview={
        <>
          <p>
            Hamsters are small rodents of the subfamily Cricetinae. The
            Syrian or golden hamster (<em>Mesocricetus auratus</em>) is the
            most familiar pet hamster, with other common pet species being
            the Russian dwarf, Roborovski dwarf, and Chinese hamster.
            Hamsters are characterised by short tails, stout bodies, and
            expandable cheek pouches used to carry food and bedding.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild Syrian hamsters are native to a limited area around Aleppo
            in Syria and are critically endangered in the wild — almost all
            pet Syrians descend from a small founder population captured in
            the 1930s. Other wild hamster species occupy dry grassland and
            steppe habitats across Eurasia. Domestic hamsters are kept
            indoors at moderate room temperatures.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Hamsters are omnivores. A pet hamster&apos;s diet should be a
            balanced commercial small-rodent food, with occasional small
            amounts of fresh vegetables, herbs, and approved protein.
            Sugary, fatty, or starchy human foods are inappropriate. Diet
            specifics should be confirmed with an exotic-animal veterinarian
            familiar with hamsters.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Hamsters are nocturnal — most active in the late evening and
            night — and primarily solitary. Syrian hamsters in particular
            must be housed alone after weaning; mixing adults leads to
            serious fighting. Hamsters are burrowers and benefit from deep
            bedding, hides, and species-appropriate enrichment such as
            chew-safe materials and a suitable running wheel.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Hamsters are popular small companion animals. Responsible
            ownership involves an enclosure substantially larger than older
            pet-shop standards, deep bedding for burrowing, an appropriate
            wheel, a quiet location, calm handling, and access to a
            small-mammal-experienced veterinarian. Hamsters have a short
            lifespan compared with many pets — typically a couple of years
            — so owners should plan emotionally and financially for that
            commitment.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other small pet rodents include gerbils, mice, fancy rats, and
          chinchillas. Each has very different husbandry needs; the term
          &quot;small rodent pet&quot; covers a wide range of welfare
          requirements.
        </p>
      }
      faqs={[
        {
          question: "Can hamsters live together?",
          answer:
            "Syrian hamsters must be housed alone after weaning — adults will fight, often fatally. Some dwarf hamster species can sometimes be housed together under specific conditions, but conflict and stress are common. Most veterinary and welfare guidance now recommends solo housing for most pet hamsters unless an experienced keeper supervises a same-species pairing.",
        },
        {
          question: "How long do hamsters live?",
          answer:
            "Pet hamster lifespan varies by species but is typically short relative to many other companion animals — often two to three years. Owners should plan for that commitment up front.",
        },
        {
          question: "Are hamsters good pets for young children?",
          answer:
            "Hamsters are sometimes assumed to be 'easy' starter pets, but they are nocturnal, easy to startle, and easy to injure if mishandled. Adult supervision is essential. A small-mammal-experienced veterinarian should be available for routine and emergency care.",
        },
        {
          question: "Why is wheel choice important?",
          answer:
            "Wheels that are too small force a hamster into a permanently arched posture, which is associated with spinal problems. Welfare and veterinary guidance generally recommends large, solid-surface wheels appropriate to the specific species and individual size. Confirm appropriate sizing with your exotic-animal veterinarian.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Syrian hamster (Mesocricetus auratus)" },
        { label: "Subfamily", value: "Cricetinae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Rodentia" },
        { label: "Diet", value: "Omnivore (primarily seeds and plant material)" },
        { label: "Activity", value: "Nocturnal" },
        { label: "Social structure", value: "Solitary (Syrian); varies by species" },
        { label: "Conservation status", value: "Varies by species (Syrian hamster is critically endangered in the wild)" },
      ]}
      relatedLinks={[
        { label: "Small Pets Hub", href: "/small-pets" },
        { label: "Hamster age calculator", href: "/tools/hamster-age-calculator" },
        { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        { label: "Vet Care", href: "/vet-care" },
      ]}
      sources={ANIMAL_SOURCES.hamster}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
