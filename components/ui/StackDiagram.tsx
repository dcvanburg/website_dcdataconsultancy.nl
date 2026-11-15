/**
 * Hero diagram: the stack from sources up to an AI agent, with MCP in between.
 * Static, decorative text only; the list is still readable for screen readers.
 */
const layers = [
  { name: "AI-agent", sub: "stelt vragen in gewone taal", tone: "border-white/15" },
  { name: "MCP-server", sub: "tools met rechten, logging en versheid", tone: "border-accent/50", accent: "text-accent" },
  { name: "Semantische laag", sub: "definities en context één keer gedefinieerd", tone: "border-brand-bright/40", accent: "text-brand-bright" },
  { name: "Dataplatform", sub: "betrouwbare data", tone: "border-brand-bright/25" },
  { name: "Bronnen", sub: "ERP, CRM, webshop, boekhouding", tone: "border-white/10" },
];

export default function StackDiagram() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-night-soft/80 p-5 md:p-6 shadow-2xl shadow-black/40">
      <ol className="flex flex-col">
        {layers.map((l, i) => (
          <li key={l.name} className="flex flex-col items-stretch">
            <div className={`rounded-lg border ${l.tone} bg-night-elevated px-4 py-3 flex items-baseline justify-between gap-4`}>
              <span className={`font-mono text-[14px] ${l.accent ?? "text-night-ink"}`}>{l.name}</span>
              <span className="text-[12px] text-night-muted-ink text-right">{l.sub}</span>
            </div>
            {i < layers.length - 1 && <span aria-hidden="true" className="mx-auto h-4 w-px bg-white/20" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
