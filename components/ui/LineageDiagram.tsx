/**
 * Decorative data-lineage diagram used in the hero.
 * Pure SVG; the flow + pulse animations are CSS (globals.css), disabled under
 * prefers-reduced-motion. Marked aria-hidden — purely illustrative.
 */
export default function LineageDiagram() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-night-soft/80 backdrop-blur-sm p-5 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-night-muted-ink">
          data_lineage
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-night-soft-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> live
        </span>
      </div>

      <svg
        viewBox="0 0 500 300"
        className="w-full h-auto"
        fill="none"
        aria-hidden="true"
        role="presentation"
      >
        {/* connectors */}
        <g
          className="lineage-dash text-brand-bright"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.7"
        >
          <path d="M102 45 C 128 45, 128 141, 150 141" />
          <path d="M102 141 H150" />
          <path d="M102 237 C 128 237, 128 141, 150 141" />
          <path d="M242 141 H288" />
          <path d="M392 141 C 402 141, 406 110, 406 100" />
          <path d="M392 141 C 402 141, 406 188, 406 198" />
        </g>

        {/* nodes */}
        <Node x={6} y={24} label="salesforce" />
        <Node x={6} y={120} label="postgres" />
        <Node x={6} y={216} label="events" />

        <Node x={150} y={112} w={92} h={58} label="ingest" sub="ELT" />
        <Node x={288} y={112} w={104} h={58} label="warehouse" sub="dbt" accent />

        <Node x={406} y={78} w={84} h={44} label="BI" />
        <Node x={406} y={176} w={84} h={44} label="AI / ML" amber />

        {/* pulsing endpoints */}
        <circle cx="340" cy="112" r="3.5" className="node-pulse text-brand-bright" fill="currentColor" />
        <circle cx="448" cy="198" r="3.5" className="node-pulse text-accent" fill="currentColor" />
      </svg>
    </div>
  );
}

function Node({
  x,
  y,
  w = 96,
  h = 42,
  label,
  sub,
  accent,
  amber,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  accent?: boolean;
  amber?: boolean;
}) {
  const stroke = accent
    ? "rgba(76,130,255,0.55)"
    : amber
    ? "rgba(255,179,71,0.5)"
    : "rgba(255,255,255,0.12)";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={9}
        fill="#141A2A"
        stroke={stroke}
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        className="font-mono text-night-ink"
        fill="currentColor"
        fontSize="12"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 13}
          textAnchor="middle"
          className="font-mono text-night-muted-ink"
          fill="currentColor"
          fontSize="9"
          letterSpacing="1"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}
