import { useEffect, useState, useCallback } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const [typedName, setTypedName] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const [taglineWords, setTaglineWords] = useState<string[]>([]);

  const fullName = "Amirda Varshini M N";
  const taglineParts = ["I build.", "I scale.", "I ship software."];

  const handleComplete = useCallback(onComplete, [onComplete]);

  // Typewriter for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Show tagline after name finishes typing
  useEffect(() => {
    const nameDuration = fullName.length * 80 + 400;
    const taglineTimer = setTimeout(() => setShowTagline(true), nameDuration);
    return () => clearTimeout(taglineTimer);
  }, []);

  // Stagger tagline words
  useEffect(() => {
    if (!showTagline) return;
    taglineParts.forEach((word, i) => {
      setTimeout(() => {
        setTaglineWords((prev) => [...prev, word]);
      }, i * 400);
    });
  }, [showTagline]);

  // Exit after everything is shown
  useEffect(() => {
    const nameDuration = fullName.length * 80 + 400;
    const taglineDuration = taglineParts.length * 400 + 800;
    const totalDuration = nameDuration + taglineDuration + 600;
    const exitTimer = setTimeout(() => setPhase("exit"), totalDuration);
    const completeTimer = setTimeout(handleComplete, totalDuration + 800);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background intro-screen ${
        phase === "exit" ? "intro-exit" : ""
      }`}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.06)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Big "A" letter */}
        <div className="overflow-hidden">
          <span className="intro-big-a font-display text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-none text-accent">
            A
          </span>
        </div>

        {/* Name with typewriter */}
        <div className="h-10 md:h-12 flex items-center justify-center">
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {typedName}
            <span className="animate-blink text-accent">|</span>
          </h2>
        </div>

        {/* Tagline with staggered word reveal */}
        {showTagline && (
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 min-h-[2rem]">
            {taglineWords.map((word, i) => (
              <span
                key={i}
                className="font-mono-tag text-sm md:text-base tracking-widest text-muted-foreground intro-tagline-word"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
