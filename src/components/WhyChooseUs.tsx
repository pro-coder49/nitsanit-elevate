import AnimatedSection from "./AnimatedSection";
import { Cpu, DollarSign, Zap, Headphones, Settings, Target } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Modern Technology", desc: "Latest frameworks and tools for robust solutions." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at competitive rates." },
  { icon: Zap, title: "Fast Delivery", desc: "On-time project delivery, every time." },
  { icon: Headphones, title: "Dedicated Support", desc: "Round-the-clock assistance when you need it." },
  { icon: Settings, title: "Custom Solutions", desc: "Tailored to your unique business needs." },
  { icon: Target, title: "Business-Focused", desc: "Solutions designed to drive real growth." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">Why Nitsanit</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Why Choose Us</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.08}>
            <div className="flex gap-4 p-6 rounded-2xl hover:bg-secondary/60 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <r.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
