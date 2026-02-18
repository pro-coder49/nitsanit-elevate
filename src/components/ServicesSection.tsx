import AnimatedSection from "./AnimatedSection";
import { Globe, Code, Monitor, Megaphone, Cog } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance, responsive websites tailored to your brand." },
  { icon: Code, title: "Software Development", desc: "Custom software solutions built for efficiency and scale." },
  { icon: Monitor, title: "POS Solutions", desc: "Smart point-of-sale systems for shops and businesses." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven marketing strategies that deliver results." },
  { icon: Cog, title: "Automation Solutions", desc: "Streamline operations with intelligent automation." },
];

const ServicesSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">What We Do</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Our Services</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">End-to-end IT solutions designed to accelerate your business growth.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
