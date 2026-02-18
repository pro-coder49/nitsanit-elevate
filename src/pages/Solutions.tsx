import AnimatedSection from "@/components/AnimatedSection";
import { Monitor, Cog, BarChart3, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "POS Systems",
    desc: "Complete point-of-sale solutions for retail, restaurants, and service-based businesses with real-time analytics.",
    features: ["Billing & invoicing", "Stock management", "Customer tracking", "Multi-branch support", "Offline mode"],
  },
  {
    icon: Cog,
    title: "Business Automation",
    desc: "Intelligent automation tools that eliminate repetitive tasks and boost operational efficiency.",
    features: ["Workflow automation", "Data entry automation", "Report generation", "Email automation", "CRM integration"],
  },
  {
    icon: BarChart3,
    title: "Business Software",
    desc: "Custom business management software tailored to your industry and operational needs.",
    features: ["ERP systems", "HR management", "Project management", "Accounting tools", "Custom dashboards"],
  },
];

const Solutions = () => (
  <div className="pt-24">
    <section className="section-padding pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Solutions</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 text-foreground">
            Products & <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            Enterprise-grade solutions built for performance, reliability, and scalability.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="max-w-5xl mx-auto space-y-8">
        {solutions.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
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

export default Solutions;
