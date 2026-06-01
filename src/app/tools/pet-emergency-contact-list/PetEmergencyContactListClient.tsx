"use client";

import { useState } from "react";

/**
 * Pet Emergency Contact List builder — client component.
 *
 * Privacy by design: there is no account, no database, no API call, no
 * external service, and no localStorage. Every value lives only in React
 * state in the current browser tab and is cleared on reset or refresh.
 * Nothing entered here is sent anywhere or recorded by analytics.
 *
 * The "Print / Save as PDF" button uses the browser's own print dialog.
 * On print, the surrounding page chrome is hidden (see print:hidden in the
 * page) so only the contact card is produced.
 */

interface Field {
  id: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
  helper?: string;
}

const FIELDS: Field[] = [
  { id: "petName", label: "Pet name", placeholder: "e.g. Bailey" },
  {
    id: "petDetails",
    label: "Pet details",
    placeholder: "Species, breed, age, weight, colour/markings",
  },
  {
    id: "microchip",
    label: "Microchip number & registry",
    placeholder: "Microchip number and the registry/provider name",
  },
  {
    id: "regularVet",
    label: "Regular veterinarian",
    placeholder: "Clinic name, phone, address",
    multiline: true,
  },
  {
    id: "emergencyClinic",
    label: "Emergency / 24-hour clinic",
    placeholder: "Clinic name, phone, address, night-time route",
    multiline: true,
  },
  {
    id: "poisonControl",
    label: "Animal poison-control number",
    placeholder: "Poison-control helpline phone number",
  },
  {
    id: "insurance",
    label: "Pet insurance provider & policy number",
    placeholder: "Provider name and policy number (if you have one)",
  },
  {
    id: "caretaker",
    label: "Trusted caretaker",
    placeholder: "Name and phone of someone who can help if you're unavailable",
  },
  {
    id: "notes",
    label: "Notes to share with your vet",
    placeholder:
      "Free-form notes about conditions, medications, or allergies to tell your veterinarian",
    multiline: true,
    helper:
      "These are notes to share with your veterinarian — not a treatment plan or dosing instructions.",
  },
];

type Values = Record<string, string>;

const EMPTY: Values = Object.fromEntries(FIELDS.map((f) => [f.id, ""]));

export default function PetEmergencyContactListClient() {
  const [values, setValues] = useState<Values>(EMPTY);

  const hasAny = Object.values(values).some((v) => v.trim() !== "");

  function update(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setValues(EMPTY);
  }

  function print() {
    if (typeof window !== "undefined") window.print();
  }

  const headingTitle = values.petName.trim()
    ? `${values.petName.trim()} — Emergency Contacts`
    : "Pet Emergency Contacts";

  return (
    <section aria-labelledby="builder-heading" className="not-prose my-10">
      <h2
        id="builder-heading"
        className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2"
      >
        Build your contact list
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        Fill in what you have. Everything stays in your browser — nothing is
        saved, sent, or tracked. Use{" "}
        <span className="font-medium text-[#2C3A2F]">Print / Save as PDF</span>{" "}
        to keep a copy, or print it blank to fill in by hand.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Form — hidden when printing */}
        <form
          className="print:hidden space-y-4"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Pet emergency contact details"
        >
          {FIELDS.map((f) => (
            <div key={f.id} className="flex flex-col gap-1.5">
              <label
                htmlFor={f.id}
                className="text-sm font-semibold text-[#17211B]"
              >
                {f.label}
              </label>
              {f.multiline ? (
                <textarea
                  id={f.id}
                  value={values[f.id]}
                  onChange={(e) => update(f.id, e.target.value)}
                  placeholder={f.placeholder}
                  rows={3}
                  className="rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] placeholder:text-[#8A958E] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A] resize-y"
                />
              ) : (
                <input
                  id={f.id}
                  type="text"
                  value={values[f.id]}
                  onChange={(e) => update(f.id, e.target.value)}
                  placeholder={f.placeholder}
                  className="rounded-lg border border-[#DDE6DD] bg-white px-3 py-2 text-sm text-[#17211B] placeholder:text-[#8A958E] focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:border-[#063F2A]"
                />
              )}
              {f.helper && (
                <p className="text-xs text-[#8A958E] leading-relaxed">
                  {f.helper}
                </p>
              )}
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-1">
            <button type="button" onClick={print} className="btn-primary">
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={!hasAny}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear
            </button>
          </div>

          <p className="text-xs text-[#8A958E] leading-relaxed">
            Privacy: this builder runs entirely in your browser. Your entries
            are never sent to a server, saved to a database, or recorded by
            analytics. Closing or refreshing the page clears them.
          </p>
        </form>

        {/* Printable preview — visible on screen and when printing */}
        <div className="rounded-2xl border border-[#DDE6DD] bg-white p-5 sm:p-6 print:border-0 print:p-0">
          <div className="flex items-baseline justify-between gap-3 border-b border-[#DDE6DD] pb-3 mb-4">
            <h3 className="text-lg font-bold text-[#17211B]">{headingTitle}</h3>
            <span className="text-xs text-[#8A958E]">Keep where easy to find</span>
          </div>
          <dl className="divide-y divide-[#EAF0EA]">
            {FIELDS.map((f) => (
              <div key={f.id} className="py-2.5 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-3">
                <dt className="text-xs uppercase tracking-wide font-semibold text-[#5E6B63]">
                  {f.label}
                </dt>
                <dd className="text-sm text-[#17211B] whitespace-pre-line min-h-[1.25rem]">
                  {values[f.id].trim() ? (
                    values[f.id]
                  ) : (
                    <span className="text-[#C3CCC5]" aria-hidden="true">
                      ____________________
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 pt-3 border-t border-[#DDE6DD] text-[11px] text-[#8A958E] leading-relaxed">
            Educational planning aid from FaunaHub · Not medical advice · In an
            emergency, contact a licensed veterinarian or emergency clinic
            immediately · faunahub.com/pet-safety
          </p>
        </div>
      </div>
    </section>
  );
}
