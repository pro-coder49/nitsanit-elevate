import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Requirement Analysis", desc: "Deep-dive into your business needs and goals." },
  { num: "02", title: "Planning & Design", desc: "Strategic planning and intuitive UI/UX design." },
  { num: "03", title: "Development", desc: "Clean, scalable code built with modern tech stacks." },
  { num: "04", title: "Testing", desc: "Rigorous quality assurance for flawless performance." },
  { num: "05", title: "Deployment & Support", desc: "Seamless launch with ongoing maintenance." },
];

const ProcessSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">How We Work</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Our Process</h2>
      </AnimatedSection>

      <div className="space-y-6">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6 hover-lift">
              <span className="text-4xl font-bold gradient-text">{s.num}</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
