import { useReveal } from "@/hooks/use-reveal";

const groups: { title: string; color: string; barColor: string; items: { name: string; level: number }[] }[] = [
  {
    title: "Backend",
    color: "text-emerald-400",
    barColor: "bg-emerald-400",
    items: [
      { name: ".NET 8", level: 90 },
      { name: "C#", level: 90 },
      { name: "Web API", level: 85 },
      { name: "Entity Framework", level: 80 },
      { name: "ADO.NET", level: 75 },
      { name: "MVC", level: 85 },
    ],
  },
  {
    title: "Frontend",
    color: "text-accent",
    barColor: "bg-accent",
    items: [
      { name: "Angular 12", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "jQuery", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Databases",
    color: "text-teal",
    barColor: "bg-teal",
    items: [
      { name: "SQL Server", level: 90 },
      { name: "Oracle", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "text-emerald-400",
    barColor: "bg-emerald-400",
    items: [
      { name: "Azure DevOps", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "TFS", level: 75 },
      { name: "DevExpress", level: 80 },
      { name: "Putty", level: 70 },
    ],
  },
];

export const Skills = () => {
  const heading = useReveal<HTMLHeadingElement>();

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-morph" />

      <div className="container relative">
        <p className="font-mono-tag mb-4 text-emerald-400 reveal-blur" style={{ transitionDelay: "0.1s" }}>
          // Skills
        </p>
        <h2
          ref={heading.ref}
          className={`font-display text-4xl md:text-6xl mb-16 max-w-3xl reveal ${heading.visible ? "is-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          The <span className="text-gradient italic animate-gradient">stack</span> I ship with.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>

        {/* Education */}
        <EducationCard />
      </div>
    </section>
  );
};

const EducationCard = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`mt-16 glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover-lift hover-glow-border group reveal-scale ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: "0.5s" }}
    >
      <div>
        <p className="font-mono-tag mb-2 text-accent">// Education</p>
        <h3 className="font-display text-2xl md:text-3xl group-hover:text-gradient transition-all duration-300">
          Master of Computer Applications (through BCA)
        </h3>
        <p className="text-muted-foreground mt-1">Bishop Heber College, Trichy, Tamil Nadu</p>
      </div>
      <span className="font-mono-tag text-accent animate-bounce-subtle">April 2018</span>
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer pointer-events-none" />
    </div>
  );
};

const SkillCard = ({ group: g, index }: { group: typeof groups[number]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-6 hover:border-primary/40 hover-lift hover-glow-border group relative overflow-hidden reveal-scale ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100 + 300}ms` }}
    >
      <p className={`font-mono-tag mb-5 ${g.color}`}>{g.title}</p>
      <ul className="space-y-3">
        {g.items.map((it, i) => (
          <li key={it.name} className="group/item">
            <div className="flex items-center justify-between mb-1">
              <span className="text-foreground/90 text-sm flex items-center gap-2 transition-transform group-hover/item:translate-x-1 duration-200">
                <span className="w-1 h-1 rounded-full bg-foreground/40 group-hover/item:bg-primary transition-colors" />
                {it.name}
              </span>
              <span className="text-xs text-muted-foreground font-mono-tag">{it.level}%</span>
            </div>
            {/* Progress bar */}
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${g.barColor} transition-all duration-1000 ease-out`}
                style={{
                  width: visible ? `${it.level}%` : "0%",
                  transitionDelay: `${index * 100 + i * 80 + 500}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer pointer-events-none" />
    </div>
  );
};
