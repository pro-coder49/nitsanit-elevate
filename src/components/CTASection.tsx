import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Ready to take your business to the next level? Let's talk about your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-foreground text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
