import { Linkedin, Mail, Phone, Briefcase } from "lucide-react";
import profile from "@/assets/profile-placeholder.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/40 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-glow-pulse" />
            <span className="text-xs text-muted-foreground">Open to Full Stack opportunities</span>
          </div>

          <p className="font-mono-tag text-muted-foreground mb-6">
            <span className="text-primary">.NET</span> · <span className="text-accent">Angular</span> · <span className="text-teal">Full Stack</span>
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            I build.
            <br />
            I scale.
            <br />
            I <em className="text-gradient not-italic font-semibold">ship</em> software.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Hi, I'm Amirda Varshini — a Full Stack Developer with 7+ years building enterprise
            applications across utility, education and finance domains using .NET, Angular and SQL.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#experience"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-[hsl(290_85%_60%)] text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-border text-foreground hover:bg-card transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            <SocialIcon href="https://www.linkedin.com/in/amirda-varshini1114vakkv/" label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://www.naukri.com/mnjuser/profile?id=&altresid" label="Naukri">
              <Briefcase className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="mailto:amirdavarshini14@gmail.com" label="Email">
              <Mail className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="tel:+918248445188" label="Phone">
              <Phone className="w-4 h-4" />
            </SocialIcon>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl rounded-full" />
            <div className="relative w-[280px] h-[320px] md:w-[360px] md:h-[420px] hex-clip bg-gradient-to-br from-primary/20 to-accent/10 p-1 animate-float">
              <img
                src={profile}
                alt="Amirda Varshini MN — Full Stack Developer"
                width={400}
                height={460}
                className="w-full h-full object-cover hex-clip"
              />
            </div>

            <FloatingTag className="-top-4 -left-6" label="Experience" value="7+ Years" color="primary" />
            <FloatingTag className="top-1/2 -right-8" label="Stack" value=".NET 8" color="accent" />
            <FloatingTag className="-bottom-4 left-4" label="Frontend" value="Angular" color="teal" />
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border py-6 bg-card/20">
        <div className="marquee font-mono-tag text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 pr-12">
              {[".NET 8", "ANGULAR", "C#", "SQL SERVER", "WEB API", "ENTITY FRAMEWORK", "MONGODB", "AZURE DEVOPS", "JAVASCRIPT", "MVC"].map((s, idx) => (
                <span key={s} className="whitespace-nowrap" style={idx % 2 === 1 ? { color: "#f24545" } : undefined}>
                  {s} <span className="text-primary">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all"
  >
    {children}
  </a>
);

const FloatingTag = ({
  className,
  label,
  value,
  color,
}: {
  className: string;
  label: string;
  value: string;
  color: "primary" | "accent" | "teal";
}) => {
  const colorClass = {
    primary: "text-primary",
    accent: "text-accent",
    teal: "text-teal",
  }[color];
  return (
    <div className={`absolute glass-card rounded-2xl px-4 py-3 hidden md:block ${className}`}>
      <p className={`font-mono-tag ${colorClass}`}>{label}</p>
      <p className="font-display text-lg font-semibold">{value}</p>
    </div>
  );
};