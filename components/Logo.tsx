interface LogoProps {
  className?: string;
  width?: number;
}

export default function Logo({ className = "", width = 140 }: LogoProps) {
  // ViewBox: 280 × 72. At width=140 everything scales at 0.5x.
  // Monogram: italic G (white) overlapping serif B (gold), G rendered last so it sits in front.
  // Separator: 1pt vertical gold line.
  // Wordmark: GENERATION / BETA in Cormorant Garamond, uppercase, white.
  return (
    <svg
      viewBox="0 0 280 72"
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Generation Beta"
    >
      {/* B — gold, upright serif, rendered first (behind) */}
      <text
        x="28"
        y="58"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif",
          fontSize: 64,
          fontWeight: 400,
          fill: "#c9a84c",
        }}
      >
        B
      </text>

      {/* G — white, italic, rendered second (in front) */}
      <text
        x="2"
        y="58"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif",
          fontSize: 64,
          fontWeight: 300,
          fontStyle: "italic",
          fill: "#ffffff",
        }}
      >
        G
      </text>

      {/* Vertical gold separator */}
      <line
        x1="83"
        y1="11"
        x2="83"
        y2="61"
        stroke="#c9a84c"
        strokeWidth="0.9"
      />

      {/* Wordmark line 1 */}
      <text
        x="93"
        y="31"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif",
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: 3.5,
          fill: "#ffffff",
        }}
      >
        GENERATION
      </text>

      {/* Wordmark line 2 */}
      <text
        x="93"
        y="54"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif",
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: 3.5,
          fill: "#ffffff",
        }}
      >
        BETA
      </text>
    </svg>
  );
}
