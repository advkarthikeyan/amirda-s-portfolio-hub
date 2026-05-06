import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "5+", label: "Major Projects" },
    { value: "10+", label: "Technologies" },
  ];
  const heading = useReveal<HTMLHeadingElement>();
  const text = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
          <p className="font-mono-tag mb-4 uppercase tracking-wider text-violet-400">// ABOUT</p>
        <h2 ref={heading.ref} className={`font-display text-4xl md:text-6xl mb-6 max-w-3xl reveal ${heading.visible ? "is-visible" : ""}`}>
          A developer who turns <span className="text-gradient italic">ideas</span> into production.
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
           <div ref={text.ref} className={`space-y-8 text-lg text-muted-foreground leading-relaxed text-justify reveal ${text.visible ? "is-visible" : ""}`}>
             <p className="text-justify">
               I'm Amirda Varshini — a Full Stack Developer based in India with seven years of
               experience building enterprise applications for utilities and education.
             </p>
             <p className="text-justify">
               I've worked across the complete software development lifecycle — from idea to
               production deployment — at <span className="text-foreground">Cognizant</span>,
               <span className="text-foreground"> Aspire Systems</span> and
               <span className="text-foreground"> Sierra ODC</span>, building everything like utility
               infrastructure systems and education platforms.
             </p>
             <p className="text-justify">
               I focus on operational efficiency, data accuracy and continuous process improvement
               backed by analytics-driven insights.
             </p>
           </div>

          <div ref={grid.ref} className={`grid grid-cols-2 gap-4 reveal ${grid.visible ? "is-visible" : ""}`}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-6 hover-lift hover:border-primary/40"
                style={{ animation: `fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` }}
              >
                 <p className="font-display text-4xl md:text-5xl text-gradient font-semibold mb-2">
                   {s.value}
                 </p>
                 <p className="font-mono-tag text-muted-foreground uppercase tracking-wider text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};