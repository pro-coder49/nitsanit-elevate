import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, Goenka Foods", text: "Nitsanit transformed our online presence. Their attention to detail and technical expertise is unmatched." },
  { name: "Priya Patel", role: "Director, Param Events", text: "Professional team with exceptional delivery. Our event booking system works flawlessly." },
  { name: "Amit Deshmukh", role: "Owner, Rudra Milk", text: "Outstanding POS solution that streamlined our entire operations. Highly recommended!" },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">What Clients Say</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
