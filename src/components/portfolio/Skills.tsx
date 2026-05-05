import { useReveal } from "@/hooks/use-reveal";

const groups: { title: string; color: string; items: string[] }[] = [
  {
    title: "Backend",
    color: "text-primary",
    items: [".NET 8", "C#", "Web API", "Entity Framework", "ADO.NET", "MVC"],
  },
  {
    title: "Frontend",
    color: "text-accent",
    items: ["Angular 12", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    color: "text-teal",
    items: ["SQL Server", "Oracle", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    color: "text-primary",
    items: ["Azure DevOps", "GitHub", "TFS", "DevExpress", "Putty"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <p className="font-mono-tag mb-4 text-purple-400">// Skills</p>
        <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-3xl">
          The <span className="text-gradient italic">stack</span> I ship with.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover-lift">
          <div>
            <p className="font-mono-tag text-teal mb-2">// Education</p>
            <h3 className="font-display text-2xl md:text-3xl">
              Master of Computer Applications (through BCA)
            </h3>
            <p className="text-muted-foreground mt-1">Bishop Heber College, Trichy, Tamil Nadu</p>
          </div>
          <span className="font-mono-tag text-accent">April 2018</span>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ group: g, index }: { group: typeof groups[number]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-6 hover:border-primary/40 hover-lift reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
              <p className={`font-mono-tag mb-5 ${g.color}`}>{g.title}</p>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="text-foreground/90 flex items-center gap-2 transition-transform hover:translate-x-1">
                    <span className="w-1 h-1 rounded-full bg-foreground/40" />
                    {it}
                  </li>
                ))}
              </ul>
    </div>
  );
};