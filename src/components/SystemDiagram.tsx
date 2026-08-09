/**
 * ENOVA system-diagram language.
 * Thin-line architectural drawings — input → logic → action, with human checkpoints.
 * Palette only: deep brown #281C0B, cream #FDEED8, copper #A56735, gold #F6D3A2.
 */

type Tone = "deep" | "cream";

const tones: Record<Tone, { line: string; node: string; accent: string; label: string }> = {
  deep: { line: "rgba(246,211,162,0.32)", node: "#F6D3A2", accent: "#F6D3A2", label: "#D8C4A8" },
  cream: { line: "rgba(58,41,21,0.28)", node: "#A56735", accent: "#A56735", label: "#4A3720" },
};

/** Horizontal flow: input → logic → human checkpoint → action */
export const FlowDiagram = ({
  tone = "deep",
  labels = ["Input", "Logic", "Review", "Action"],
  className = "",
}: {
  tone?: Tone;
  labels?: string[];
  className?: string;
}) => {
  const t = tones[tone];
  const step = 500 / (labels.length - 1);

  return (
    <svg
      viewBox="0 0 660 150"
      role="img"
      aria-label={`System flow: ${labels.join(" to ")}`}
      className={`w-full h-auto ${className}`}
    >
      <line x1="80" y1="60" x2="580" y2="60" stroke={t.line} strokeWidth="1" />
      {labels.map((l, i) => {
        const x = 80 + i * step;
        const isHuman = i === labels.length - 2 && labels.length > 2;
        return (
          <g key={l}>
            {isHuman ? (
              <rect
                x={x - 7}
                y={53}
                width="14"
                height="14"
                fill="none"
                stroke={t.accent}
                strokeWidth="1"
              />
            ) : (
              <circle cx={x} cy="60" r="4.5" fill={i === 0 ? "none" : t.node} stroke={t.node} strokeWidth="1" />
            )}
            <line x1={x} y1="76" x2={x} y2="96" stroke={t.line} strokeWidth="1" />
            <text
              x={x}
              y="114"
              textAnchor="middle"
              fill={t.label}
              fontSize="12"
              letterSpacing="1.6"
              fontFamily="Work Sans, sans-serif"
            >
              {l.toUpperCase()}
            </text>
          </g>
        );
      })}
      <path d="M572 55 L580 60 L572 65" fill="none" stroke={t.accent} strokeWidth="1" />
    </svg>
  );
};

/** Branching system map: one source, parallel operations, single audited output */
export const SystemMap = ({ tone = "deep", className = "" }: { tone?: Tone; className?: string }) => {
  const t = tones[tone];
  const rows = [34, 84, 134];
  return (
    <svg viewBox="0 0 660 190" role="img" aria-label="System architecture map" className={`w-full h-auto ${className}`}>
      {/* source */}
      <circle cx="30" cy="84" r="5" fill={t.node} />
      <line x1="35" y1="84" x2="130" y2="84" stroke={t.line} strokeWidth="1" />
      <line x1="130" y1="34" x2="130" y2="134" stroke={t.line} strokeWidth="1" />
      {rows.map((y) => (
        <g key={y}>
          <line x1="130" y1={y} x2="300" y2={y} stroke={t.line} strokeWidth="1" />
          <rect x="300" y={y - 13} width="150" height="26" fill="none" stroke={t.line} strokeWidth="1" />
          <line x1="450" y1={y} x2="560" y2={y} stroke={t.line} strokeWidth="1" />
        </g>
      ))}
      <line x1="560" y1="34" x2="560" y2="134" stroke={t.line} strokeWidth="1" />
      <line x1="560" y1="84" x2="620" y2="84" stroke={t.line} strokeWidth="1" />
      <circle cx="628" cy="84" r="5" fill="none" stroke={t.accent} strokeWidth="1" />
    </svg>
  );
};

/** Vertical rail used behind stage lists */
export const StageRail = ({ tone = "cream", className = "" }: { tone?: Tone; className?: string }) => {
  const t = tones[tone];
  return <div className={className} style={{ width: 1, background: t.line }} aria-hidden />;
};
