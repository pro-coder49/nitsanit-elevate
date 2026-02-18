import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-6">
          IT Solutions & Digital Innovation
        </span>
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Transforming Businesses with{" "}
        <span className="gradient-text">Smart IT Solutions</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        We design powerful websites, intelligent software, and scalable digital
        systems to help businesses grow faster.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/contact"
          className="gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
        >
          Get Started <ArrowRight size={16} />
        </Link>
        <Link
          to="/portfolio"
          className="px-8 py-3.5 rounded-full text-sm font-semibold border border-border bg-background/80 backdrop-blur text-foreground hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          <Play size={14} /> View Portfolio
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
