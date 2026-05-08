import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 3200);
    const completeTimer = setTimeout(onComplete, 4000);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const nameLines = [
    { text: "Amirda", delay: 0.2 },
    { text: "Varshini", delay: 0.5 },
    { text: "M N", delay: 0.8 },
  ];

  const tagline = "I build. I scale. I ship software.";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background intro-screen ${
        phase === "exit" ? "intro-exit" : ""
      }`}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        {/* Name lines */}
        {nameLines.map((line, lineIdx) => (
          <div key={lineIdx} className="overflow-hidden">
            <h1
              className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight ${
                lineIdx === 1 ? "text-gradient" : ""
              }`}
              style={{ perspective: "600px" }}
            >
              {line.text.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block intro-char"
                  style={{ animationDelay: `${i * 0.06 + line.delay}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        ))}

        {/* Accent line */}
        <div className="intro-line mt-4 h-[2px] w-0 bg-gradient-to-r from-primary to-accent" />

        {/* Tagline */}
        <div className="overflow-hidden mt-6">
          <p className="font-mono-tag text-muted-foreground text-sm md:text-base tracking-widest intro-tagline">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};
