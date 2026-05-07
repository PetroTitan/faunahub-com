interface DisclaimerBlockProps {
  type?: "veterinary" | "general" | "tool";
  custom?: string;
}

const DISCLAIMERS = {
  veterinary:
    "This content is for general educational purposes only and is not a substitute for professional veterinary advice. If your pet shows severe symptoms, persistent discomfort, breathing problems, bleeding, poisoning signs, collapse, seizures, or sudden behavior changes, contact a licensed veterinarian or emergency animal clinic immediately.",
  general:
    "This content is for general educational purposes only. FaunaHub is an independent information platform and is not affiliated with any veterinary, government, or conservation authority.",
  tool: "This tool provides general estimates only. Results will vary depending on your location, pet breed, age, health condition, and lifestyle choices. Always consult a licensed veterinarian and local service providers for accurate costs and advice.",
};

export default function DisclaimerBlock({
  type = "general",
  custom,
}: DisclaimerBlockProps) {
  const text = custom ?? DISCLAIMERS[type];

  return (
    <aside
      role="note"
      aria-label="Disclaimer"
      className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800"
    >
      <span className="text-amber-500 flex-shrink-0 text-base mt-0.5" aria-hidden="true">
        ⚠
      </span>
      <p className="leading-relaxed">{text}</p>
    </aside>
  );
}
