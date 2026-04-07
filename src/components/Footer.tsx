
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const linkClass =
    "text-muted-foreground hover:text-primary transition-colors duration-300 text-sm";

  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-3 font-founders tracking-tight">
              ENOVA
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation("/solutions")} className={linkClass}>
                  Process Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/solutions")} className={linkClass}>
                  Decision Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/solutions")} className={linkClass}>
                  Customer Engagement
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation("/about")} className={linkClass}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/contact")} className={linkClass}>
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/privacy")} className={linkClass}>
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">tarek@enovaagency.com</li>
              <li className="text-muted-foreground">+90 540 350 2010</li>
              <li className="flex gap-4 mt-4">
                <a
                  href="https://x.com/enovaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="X/Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.682l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.448l8.609-9.773L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.306 17.545h2.034L6.529 3.268H4.373L17.595 18.698Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/enovaagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/enovaagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2025 ENOVA. All rights reserved.
          </p>
          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            Book a consultation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
