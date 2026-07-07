import { useNavigate } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const go = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const linkClass =
    "text-muted-foreground hover:text-primary transition-colors duration-300 text-sm";

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className={`md:col-span-4 ${isRTL ? "text-right" : ""}`}>
            <h3 className="text-xl font-semibold text-foreground mb-4 font-founders tracking-tight" style={{ direction: "ltr", display: "inline-block" }}>
              ENOVA
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.7] max-w-sm">
              Custom AI solutions, intelligent automations, and software systems
              for businesses that measure outcomes.
            </p>
          </div>

          {/* Services */}
          <div className={`md:col-span-2 ${isRTL ? "text-right" : ""}`}>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/services")} className={linkClass}>AI Automation</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>AI Agents</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Custom Software</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Data & Analytics</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className={`md:col-span-2 ${isRTL ? "text-right" : ""}`}>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/about")} className={linkClass}>About</button></li>
              <li><button onClick={() => go("/case-studies")} className={linkClass}>Case Studies</button></li>
              <li><button onClick={() => go("/process")} className={linkClass}>Process</button></li>
              <li><button onClick={() => go("/contact")} className={linkClass}>Contact</button></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={`md:col-span-4 ${isRTL ? "text-right" : ""}`}>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:tarek@enovaagency.com" className="text-foreground hover:text-primary transition-colors" dir="ltr">
                  tarek@enovaagency.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/enovaagency/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <LinkedinLogo size={16} weight="fill" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/enovaagency/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <InstagramLogo size={16} weight="fill" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/enovaagency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <XLogo size={16} weight="fill" /> X (Twitter)
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© 2026 Enova AI. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Built for serious operators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
