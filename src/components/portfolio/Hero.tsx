import { Linkedin, Mail, Phone, Briefcase, ChevronDown } from "lucide-react";
import profile from "@/assets/profile-placeholder.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(210 70% 38%), hsl(210 65% 30%))" }}>
      {/* Remove background blobs - using solid gradient */}

      <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          {/* Status badge - staggered entrance */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8 animate-slide-up hover-glow-border cursor-default"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted-foreground">Open to Full Stack opportunities</span>
          </div>

          {/* Tech tags - staggered */}
          <p
            className="font-mono-tag text-white/80 mb-6 uppercase tracking-wider animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-primary">.NET</span> · <span className="text-accent">Angular</span> · <span className="text-secondary">Full Stack</span>
          </p>

          {/* Main heading - clip reveal */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-12 animate-clip-reveal text-white" style={{ animationDelay: "0.3s" }}>
            I build.
            <br />
            I scale.
            <br />
            I<em className="text-gradient not-italic font-semibold ml-3 md:ml-5 animate-gradient">ship</em> software.
          </h1>

          {/* Description - blur in */}
          <p
            className="text-lg text-white/90 max-w-xl mb-10 leading-7 tracking-normal whitespace-normal [word-spacing:0] sm:leading-relaxed text-justify animate-blur-in"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="block mb-3 font-medium text-foreground">
              A Senior .NET-Angular Full Stack Developer (7+ Years)
            </span>
            Innovative software engineer dedicated to high-quality data and operational excellence. Expert at bridging the gap between complex backend logic and intuitive frontend usability, utilizing analytical insights to solve business challenges and improve system performance.
          </p>

          {/* CTA buttons - scale in */}
          <div className="flex flex-wrap items-center gap-4 mb-10 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#experience"
              className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all overflow-hidden hover-ripple"
            >
              <span className="relative z-10">View My Work</span>
              <span className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-border text-foreground hover:bg-card hover-scale transition-all hover-glow-border"
            >
              Get in Touch
            </a>
          </div>

          {/* Social icons - staggered scale in */}
          <div className="flex items-center gap-5">
            <SocialIcon href="https://www.linkedin.com/in/amirda-varshini1114vakkv/" label="LinkedIn" delay={0.7}>
              <Linkedin className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://www.naukri.com/mnjuser/profile?id=&altresid" label="Naukri" delay={0.8}>
              <Briefcase className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="mailto:amirdavarshini14@gmail.com" label="Email" delay={0.9}>
              <Mail className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="tel:+918248445188" label="Phone" delay={1.0}>
              <Phone className="w-4 h-4" />
            </SocialIcon>
          </div>
        </div>

        {/* Profile image - slide in from right */}
        <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
          <div className="relative group/profile">
            {/* Animated glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/30 blur-3xl rounded-full animate-pulse group-hover/profile:opacity-100 opacity-60 transition-opacity duration-500" style={{ animationDuration: "4s" }} />

            {/* Spinning border ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-spin-slow group-hover/profile:border-primary/50 transition-colors duration-500" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-secondary/10 animate-spin-slow group-hover/profile:border-secondary/30 transition-colors duration-500" style={{ animationDirection: "reverse" }} />

            <div className="relative w-[280px] h-[320px] md:w-[360px] md:h-[420px] hex-clip bg-gradient-to-br from-primary/20 to-secondary/10 p-1 animate-float group-hover/profile:scale-[1.02] group-hover/profile:shadow-[0_0_40px_hsl(43_74%_63%/0.3)] transition-all duration-500">
              <img
                src={profile}
                alt="Amirda Varshini MN — Full Stack Developer"
                width={400}
                height={460}
                className="w-full h-full object-cover hex-clip"
              />
            </div>

            <FloatingTag className="-top-4 -left-6 hover-scale animate-bounce-subtle" label="Experience" value="7+ Years" color="violet" delay={0.8} />
            <FloatingTag className="top-1/2 -right-8 hover-scale animate-bounce-subtle" label="Stack" value=".NET 8" color="coral" delay={1.0} />
            <FloatingTag className="-bottom-4 left-4 hover-scale animate-bounce-subtle" label="Frontend" value="Angular" color="teal" delay={1.2} />
          </div>
        </div>
      </div>

      {/* Marquee tech strip */}
      <div className="mt-20 overflow-hidden border-y border-white/20 py-6 bg-white/5">
        <div className="marquee font-mono-tag text-white/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {[".NET 8", "ANGULAR", "C#", "SQL SERVER", "WEB API", "ENTITY FRAMEWORK", "MONGODB", "AZURE DEVOPS", "JAVASCRIPT", "MVC"].map((s, idx) => (
                <span key={s} className="flex items-center gap-8 whitespace-nowrap animate-shimmer rounded px-2 py-1">
                  <span style={idx % 2 === 1 ? { color: "#FF9500" } : undefined}>{s}</span>
                  <span className="text-primary">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="font-mono-tag text-[10px]">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, label, children, delay = 0 }: { href: string; label: string; children: React.ReactNode; delay?: number }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all hover:scale-110 hover:-translate-y-1 animate-scale-in"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </a>
);

const FloatingTag = ({
  className,
  label,
  value,
  color,
  delay = 0,
}: {
  className: string;
  label: string;
  value: string;
  color: "violet" | "coral" | "teal";
  delay?: number;
}) => {
  const colorClass = {
    violet: "text-primary",
    coral: "text-secondary",
    teal: "text-accent",
  }[color];
  return (
    <div className={`absolute glass-card rounded-2xl px-4 py-3 ${className} animate-scale-in`} style={{ animationDelay: `${delay}s` }}>
      <p className={`font-mono-tag ${colorClass}`}>{label}</p>
      <p className="font-display text-lg font-semibold">{value}</p>
    </div>
  );
};
