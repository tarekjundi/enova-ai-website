
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, List, Globe } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/services", label: t("nav.services") },
    { to: "/case-studies", label: t("nav.case_studies") },
    { to: "/process", label: t("nav.process") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];


  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border border-border/50 hover:border-primary/30 hover:bg-primary/5 text-foreground/70 hover:text-primary ${className}`}
      aria-label="Toggle language"
    >
      <Globe size={14} />
      <span>{language === "en" ? "AR" : "EN"}</span>
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center" style={{ direction: "ltr" }}>
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-baseline gap-2.5 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="text-xl font-semibold text-foreground font-founders tracking-tight">ENOVA</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">AI Consultancy</span>
        </Link>


        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0 })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle className="ml-2" />
          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm font-medium gap-2 group">
              {t("nav.lets_talk")}
              <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          <div className="flex flex-col gap-2">
            <div className="flex justify-end mb-2">
              <LanguageToggle />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0 }); }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/tarek-jundi/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-medium gap-2">
                {t("nav.lets_talk")}
                <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
