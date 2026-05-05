export const About = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "5+", label: "Major Projects" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <p className="font-mono-tag text-muted-foreground mb-4">// About</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6 max-w-3xl">
          A developer who turns <span className="text-gradient italic">ideas</span> into production.
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Amirda Varshini — a Full Stack Developer based in India with seven years of
              experience building enterprise applications for utilities, education and finance.
            </p>
            <p>
              I've worked across the complete software development lifecycle — from idea to
              production deployment — at <span className="text-foreground">Cognizant</span>,
              <span className="text-foreground"> Aspire Systems</span> and
              <span className="text-foreground"> Sierra ODC</span>, building everything from utility
              infrastructure systems to education platforms and invoice engines.
            </p>
            <p>
              I focus on operational efficiency, data accuracy and continuous process improvement
              backed by analytics-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors"
              >
                <p className="font-display text-4xl md:text-5xl text-gradient font-semibold">
                  {s.value}
                </p>
                <p className="font-mono-tag text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};