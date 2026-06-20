import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Param Events", url: "paramevents.com" },
  { name: "Shrimant Mangal Kayalay", url: "shrimantmangalkayalay.com" },
  { name: "Yuva Next Foundation", url: "yuvanextfoundation.org" },
  { name: "Rudra Milk", url: "rudramilk.com" },
  { name: "Rudra Brand Aura", url: "rudra-brand-aura.lovable.app" },
  { name: "ACE Hospital", url: "acehospital.in" },
  { name: "EE.GE", url: "ee.ge" },
  { name: "RPSG", url: "www.rpsg.in" },
  { name: "Pune Jilha Kusti Girsangh", url: "punejilhakustigirsangh.com" },
  { name: "Goenka Foods", url: "goenkafoods.com" },
  { name: "Restaurant POS Desktop App", url: "nitsanit.com", category: "Desktop App" },
  { name: "3-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
  { name: "4-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
  { name: "5-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
];

const PortfolioSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Work</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Portfolio</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Projects we've brought to life for our clients.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.05} className="h-full">
            <a
              href={`https://${p.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 hover-lift group block h-full"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">{p.name}</h3>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              {p.category && (
                <span className="text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full inline-block mb-2">
                  {p.category}
                </span>
              )}
              <p className="text-xs text-primary font-medium break-all">{p.url}</p>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
