import AnimatedSection from "./AnimatedSection";

const clients = [
  "Param Events", "Goenka Foods", "ACE Hospital", "Rudra Milk",
  "Yuva Next Foundation", "EE.GE",
];

const TrustedClients = () => (
  <section className="section-padding py-16">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection className="text-center">
        <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-8">Trusted by businesses across industries</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {clients.map((c) => (
            <span key={c} className="text-sm font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default">
              {c}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TrustedClients;
