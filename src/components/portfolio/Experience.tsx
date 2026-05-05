const experiences = [
  {
    role: "Software Developer",
    company: "Cognizant Technology Solutions",
    location: "Coimbatore",
    period: "Jul 2023 — Present",
    project: "Pacific Gas and Electric (PGE)",
    stack: [".NET 8", "Web API", "jQuery", "JavaScript", "SQL Server", "MVC"],
    bullets: [
      "Owned the complete SDLC for specialized utility applications focused on electric and gas line infrastructure.",
      "Delivered ongoing development and production support for business-critical systems.",
      "Drove applications from concept to production deployment with continuous post-launch support.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Aspire Systems India Pvt. Ltd.",
    location: "Chennai",
    period: "Dec 2021 — Jul 2023",
    project: "TMRW Platform — GEMS Education",
    stack: [".NET Core 3.1", "Angular 12", "PostgreSQL", "MongoDB", "HTML"],
    bullets: [
      "Integrated modules connecting teachers, students, parents and administrators on a unified platform.",
      "Migrated manual academic workflows into the modern TMRW platform.",
      "Designed and developed features tightly aligned to client specifications.",
      "Prioritized client-reported issues with rapid bug-fixing and resolution.",
    ],
  },
  {
    role: "Software Developer",
    company: "Sierra ODC Pvt. Ltd.",
    location: "Coimbatore",
    period: "Feb 2019 — Sep 2021",
    project: "VWR — CBILL System & eFACILITY",
    stack: ["C#", "ASP.NET MVC", "Oracle", "jQuery", "Bootstrap", "DevExpress"],
    bullets: [
      "Developed finance-oriented applications generating customized invoice reports for VWR International.",
      "Owned DevExpress XtraReports development and project release cycles.",
      "Resolved Web API bugs and addressed client-reported issues end-to-end.",
      "Contributed to eFACILITY enhancements across Time & Attendance, Project Management and Help Desk modules.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card/20">
      <div className="container">
        <p className="font-mono-tag text-muted-foreground mb-4">// Experience</p>
        <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-3xl">
          Seven years.<br />
          <span className="text-gradient italic">Three companies.</span> One craft.
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="glass-card rounded-3xl p-6 md:p-10 hover:border-primary/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">{exp.role}</h3>
                  <p className="text-foreground/90">
                    {exp.company} <span className="text-muted-foreground">· {exp.location}</span>
                  </p>
                </div>
                <span className="font-mono-tag text-accent shrink-0">{exp.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-mono-tag text-teal mr-2">PROJECT</span>
                {exp.project}
              </p>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};