import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.open(`mailto:info@nitsanit.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="pt-24">
      <section className="section-padding pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Contact</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
              Ready to start your project? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 w-full justify-center"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">Near Bus Stand, State Bank of India, Opposite Kakad Hospital, Vidyanagar, Sangamner, Maharashtra, India</p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <Mail size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@nitsanit.com" className="text-sm text-primary hover:underline">info@nitsanit.com</a>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">WhatsApp</h4>
                  <a href="https://wa.me/919834842218" className="text-sm text-primary hover:underline">+91 98348 42218</a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card rounded-2xl p-1 overflow-hidden">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30132.0!2d74.21!3d19.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc!2sSangamner!5e0!3m2!1sen!2sin!4v1"
                  className="w-full h-48 rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
