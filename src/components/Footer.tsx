
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, XLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

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
          <div className={`md:col-span-1 ${isRTL ? "text-right" : ""}`}>
            <h3 className="text-xl font-bold text-primary mb-3 font-founders tracking-tight" style={{ direction: "ltr", display: "inline-block" }}>
              ENOVA
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Solutions */}
          <div className={isRTL ? "text-right" : ""}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation("/solutions")} className={linkClass}>{t("footer.sol1")}</button></li>
              <li><button onClick={() => handleNavigation("/solutions")} className={linkClass}>{t("footer.sol2")}</button></li>
              <li><button onClick={() => handleNavigation("/solutions")} className={linkClass}>{t("footer.sol3")}</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className={isRTL ? "text-right" : ""}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation("/about")} className={linkClass}>{t("footer.about")}</button></li>
              <li><button onClick={() => handleNavigation("/contact")} className={linkClass}>{t("footer.contact")}</button></li>
              <li><button onClick={() => handleNavigation("/privacy")} className={linkClass}>{t("footer.privacy")}</button></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={isRTL ? "text-right" : ""}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground" dir="ltr">tarek@enovaagency.com</li>
              <li className="text-muted-foreground" dir="ltr">+90 540 350 2010</li>
              <li className="flex gap-4 mt-4">
                <a href="https://x.com/enovaagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="X/Twitter">
                  <XLogo size={18} />
                </a>
                <a href="https://www.linkedin.com/company/enovaagency/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  <LinkedinLogo size={18} />
                </a>
                <a href="https://www.instagram.com/enova.ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
                  <InstagramLogo size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">{t("footer.copyright")}</p>
          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            {t("footer.book")}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
