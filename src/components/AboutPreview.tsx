import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const AboutPreview = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground leading-tight">
            Building the Future, <span className="gradient-text">One Solution at a Time</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Nitsanit Technologies is a forward-thinking IT company dedicated to empowering businesses 
            with cutting-edge technology. From custom software to digital marketing, we deliver 
            solutions that drive measurable results.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutPreview;
