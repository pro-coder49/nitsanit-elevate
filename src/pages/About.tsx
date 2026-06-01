import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Cpu, Users } from "lucide-react";

const techStack = ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Flutter", "Docker"];

const team = [
  { name: "Nitin Rahane", role: "Founder & Lead Developer" },
  { name: "Development Team", role: "Full Stack Engineers" },
  { name: "Design Team", role: "UI/UX Designers" },
  { name: "Marketing Team", role: "Digital Strategists" },
];

const About = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="section-padding pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">About Nitsanit</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 text-foreground">
            Driven by <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            We're a passionate team of developers, designers, and strategists dedicated to delivering 
            world-class IT solutions that empower businesses to thrive in the digital age.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8">
            <Target size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To empower businesses with innovative, scalable, and affordable IT solutions 
              that drive growth and efficiency in an increasingly digital world.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="glass-card rounded-2xl p-8">
            <Eye size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To become a globally recognized IT solutions provider known for quality, 
              innovation, and client success across every industry we serve.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <Cpu size={28} className="text-primary mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-foreground">Technology Stack</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-foreground hover-lift">
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <Users size={28} className="text-primary mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">{m.name[0]}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
