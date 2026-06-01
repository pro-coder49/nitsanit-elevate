import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-lg font-bold mb-4">Nitsanit Technologies</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Transforming businesses with smart IT solutions. We design, develop, and deliver.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Company</h4>
          <div className="flex flex-col gap-3">
            {["About", "Services", "Portfolio", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Services</h4>
          <div className="flex flex-col gap-3">
            {["Web Development", "Software Development", "POS Solutions", "Digital Marketing"].map((s) => (
              <span key={s} className="text-sm text-primary-foreground/50">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Contact</h4>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            Near Bus Stand, State Bank of India,<br />
            Opposite Kakad Hospital, Vidyanagar,<br />
            Sangamner, Maharashtra, India
          </p>
          <a href="https://nitsanit.com" className="text-sm text-primary hover:underline mt-2 inline-block">
            nitsanit.com
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Nitsanit Technologies. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
