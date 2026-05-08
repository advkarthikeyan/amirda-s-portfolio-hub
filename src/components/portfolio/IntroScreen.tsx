import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const completeTimer = setTimeout(onComplete, 3000);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const firstName = "Amirda";
  const lastName = "Varshini";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background intro-screen ${
        phase === "exit" ? "intro-exit" : ""
      }`}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        {/* First name - slides in from left */}
        <div className="overflow-hidden">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight intro-text-left">
            {firstName.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block intro-char"
                style={{ animationDelay: `${i * 0.06 + 0.2}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Last name - slides in from right */}
        <div className="overflow-hidden">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient intro-text-right">
            {lastName.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block intro-char"
                style={{ animationDelay: `${i * 0.06 + 0.5}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Accent line */}
        <div className="intro-line mt-4 h-[2px] w-0 bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  );
};
