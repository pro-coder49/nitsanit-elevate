import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Code, Monitor, Megaphone, Cog, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "We create stunning, responsive websites that deliver exceptional user experiences and drive conversions.",
    features: ["Custom responsive design", "SEO optimization", "Performance-focused", "CMS integration", "E-commerce capability"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "Tailored software solutions built with modern technologies to solve your unique business challenges.",
    features: ["Web & mobile apps", "API development", "Cloud solutions", "Database design", "System integration"],
  },
  {
    icon: Monitor,
    title: "POS Solutions",
    desc: "Smart point-of-sale systems designed for retail shops, restaurants, and service businesses.",
    features: ["Inventory management", "Sales reporting", "Multi-location support", "Payment integration", "Customer management"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategic digital marketing campaigns that increase visibility, engagement, and revenue.",
    features: ["SEO & SEM", "Social media marketing", "Content marketing", "Email campaigns", "Analytics & reporting"],
  },
  {
    icon: Cog,
    title: "IT Consulting & Automation",
    desc: "Expert consulting and automation solutions to streamline operations and reduce costs.",
    features: ["Process automation", "IT infrastructure", "Security auditing", "Cloud migration", "Tech consulting"],
  },
];

const Services = () => (
  <div className="pt-24">
    <section className="section-padding pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 text-foreground">
            Solutions That <span className="gradient-text">Scale</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            Comprehensive IT services designed to help your business grow, innovate, and succeed.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="max-w-5xl mx-auto space-y-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon size={26} className="text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{s.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
