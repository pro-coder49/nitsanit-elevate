import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Param Events", url: "paramevents.com", category: "Events" },
  { name: "Shrimant Mangal Kayalay", url: "shrimantmangalkayalay.com", category: "Hospitality" },
  { name: "Yuva Next Foundation", url: "yuvanextfoundation.org", category: "NGO" },
  { name: "Rudra Milk", url: "rudramilk.com", category: "Dairy" },
  { name: "Rudra Brand Aura", url: "rudra-brand-aura.lovable.app", category: "Branding" },
  { name: "ACE Hospital", url: "acehospital.in", category: "Healthcare" },
  { name: "EE.GE", url: "ee.ge", category: "Technology" },
  { name: "RPSG", url: "www.rpsg.in", category: "Enterprise" },
  { name: "Pune Jilha Kusti Girsangh", url: "punejilhakustigirsangh.com", category: "Sports" },
  { name: "Goenka Foods", url: "goenkafoods.com", category: "Food & Beverage" },
  { name: "Restaurant POS Desktop App", url: "nitsanit.com", category: "Desktop App" },
  { name: "3-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
  { name: "4-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
  { name: "5-Star Hotel Management Suite", url: "nitsanit.com", category: "Desktop App" },
  { name: "Employee Attendance / HRMS System", url: "nitsanit-pixel-craft.lovable.app", category: "HRMS" },
];

const Portfolio = () => (
  <div className="pt-24">
    <section className="section-padding pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 text-foreground">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            A showcase of projects we've delivered for clients across diverse industries.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.06} className="h-full">
            <a
              href={`https://${p.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 hover-lift group block h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {p.category}
                </span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-primary break-all">{p.url}</p>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default Portfolio;
