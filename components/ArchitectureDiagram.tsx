/**
 * Revenue Leak Architecture diagram, customer's-eye view.
 * "Your Business" sits at the centre. Six growth outcomes orbit it, wired into
 * one system. Gold pulses travel outward along each spoke and the nodes gently
 * float. Native SVG + SMIL, so it animates without any JS or motion library
 * (and is not affected by reduced-motion settings).
 *
 * EDIT ME: reword the six outcomes below. `label` shows on the node; `full`
 * shows as a tooltip on hover. These are benefit-led on purpose, not feature
 * names: what the client gets, not what we audit.
 */

const OUTCOMES: { label: string; full: string }[] = [
  { label: "More Direct Bookings", full: "Guests book with you, not the OTA" },
  { label: "Higher Lifetime Value", full: "Each guest is worth more over time" },
  { label: "Bigger Average Spend", full: "Upsells, gifting and add-ons that land" },
  { label: "Stronger Reputation", full: "Reviews and signals that win the booking" },
  { label: "Lower OTA Commission", full: "Keep the margin you were renting out" },
  { label: "More Repeat & Referrals", full: "Guests return and bring others" },
];

const CX = 320;
const CY = 260;
const R = 150;
const LABEL_R = 178;

export default function ArchitectureDiagram() {
  const nodes = OUTCOMES.map((o, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / OUTCOMES.length;
    const x = CX + R * Math.cos(a);
    const y = CY + R * Math.sin(a);
    const lx = CX + LABEL_R * Math.cos(a);
    const ly = CY + LABEL_R * Math.sin(a);
    const cos = Math.cos(a);
    const anchor: "start" | "end" | "middle" =
      cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle";
    return { ...o, x, y, lx, ly, anchor, i };
  });

  const ringPath = nodes.map((n) => `${n.x.toFixed(1)},${n.y.toFixed(1)}`).join(" ");

  return (
    <svg
      viewBox="0 0 640 520"
      className="w-full h-auto"
      role="img"
      aria-label="Your Business at the centre, surrounded by six growth outcomes wired into one system"
    >
      {/* faint outline linking the outcomes into one architecture */}
      <polygon points={ringPath} fill="none" stroke="#c9a84c" strokeOpacity="0.12" strokeWidth="1" />

      {/* spokes from the business to each outcome */}
      {nodes.map((n) => (
        <line key={`spoke-${n.i}`} x1={CX} y1={CY} x2={n.x} y2={n.y} stroke="#c9a84c" strokeOpacity="0.22" strokeWidth="1" />
      ))}

      {/* slow pulses travelling outward from the business */}
      {nodes.map((n) => {
        const begin = `${(n.i * 0.45).toFixed(2)}s`;
        return (
          <circle key={`pulse-${n.i}`} r="3.2" fill="#e2c97e" opacity="0">
            <animate attributeName="cx" values={`${CX};${n.x.toFixed(1)}`} dur="4.6s" begin={begin} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${CY};${n.y.toFixed(1)}`} dur="4.6s" begin={begin} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="4.6s" begin={begin} repeatCount="indefinite" />
          </circle>
        );
      })}

      {/* outcome nodes + labels, gently floating */}
      {nodes.map((n) => {
        const dur = `${(4.2 + (n.i % 3) * 0.6).toFixed(2)}s`;
        const drift = n.i % 2 === 0 ? "0 -3.5" : "0 3.5";
        return (
          <g key={`node-${n.i}`}>
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0 0; ${drift}; 0 0`}
              dur={dur}
              repeatCount="indefinite"
            />
            <circle cx={n.x} cy={n.y} r="7" fill="#1a0520" stroke="#c9a84c" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="3" fill="#c9a84c" />
            <text
              x={n.lx}
              y={n.ly}
              fill="#f0ebe2"
              fillOpacity="0.85"
              fontSize="14"
              textAnchor={n.anchor}
              dominantBaseline="middle"
              fontFamily="var(--font-inter), system-ui, sans-serif"
            >
              {n.label}
              <title>{n.full}</title>
            </text>
          </g>
        );
      })}

      {/* central hub: Your Business */}
      <circle cx={CX} cy={CY} r="44" fill="none" stroke="#c9a84c" strokeOpacity="0.4" strokeWidth="1">
        <animate attributeName="r" values="44;56;44" dur="4s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.4;0.05;0.4" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx={CX} cy={CY} r="40" fill="#c9a84c" />
      <text x={CX} y={CY - 7} fill="#1a0520" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="var(--font-inter), system-ui, sans-serif">
        YOUR
      </text>
      <text x={CX} y={CY + 11} fill="#1a0520" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="var(--font-inter), system-ui, sans-serif">
        BUSINESS
      </text>
    </svg>
  );
}
