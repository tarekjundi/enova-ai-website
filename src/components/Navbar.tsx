import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X, List } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, isRTL, language, setLanguage } = useLanguage();

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#281C0B]/95 backdrop-blur-md py-3 border-b border-[#F6D3A2]/12"
          : "py-6 bg-transparent"
      }`}
      style={{ borderBottomColor: scrolled ? "rgba(246,211,162,0.14)" : undefined }}
    >
      <div
        className="container mx-auto px-6 lg:px-10 flex justify-between items-center"
        style={{ direction: "ltr" }}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-opacity duration-300 hover:opacity-80 inline-flex items-baseline gap-3"
        >
          <span className="font-display text-[26px] tracking-[-0.01em] text-[#FFF9F1] leading-none">
            ENOVA
          </span>
          <span className="hidden sm:inline eyebrow text-[10px] text-[#C8B59C]">
            Intelligent Operations
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0 })}
              className={`px-4 py-2 text-[14px] font-medium tracking-[-0.005em] transition-colors duration-300 ${
                isActive(link.to)
                  ? "text-[#F6D3A2]"
                  : "text-[#FDEED8]/85 hover:text-[#F6D3A2]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="ml-2 px-3 py-2 text-[12px] eyebrow text-[#FDEED8]/70 hover:text-[#F6D3A2] transition-colors border-l border-[#F6D3A2]/20"
            aria-label="Toggle language"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-primary text-[13px] py-2.5 px-5 group"
          >
            {t("nav.lets_talk")}
            <ArrowRight
              size={14}
              className={`transition-transform duration-300 group-hover:translate-x-0.5 ${
                isRTL ? "rotate-180" : ""
              }`}
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F6D3A2] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-[#281C0B] px-6 pt-10 pb-16 flex flex-col animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-4 border-b border-[#F6D3A2]/12 text-2xl font-display tracking-tight ${
                  isActive(link.to) ? "text-[#F6D3A2]" : "text-[#FFF9F1]"
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0 });
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="mt-6 self-start eyebrow text-[#C8B59C] px-3 py-2 border border-[#F6D3A2]/25 rounded-sm"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
          </div>

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary justify-center mt-auto w-full"
          >
            {t("nav.lets_talk")}
            <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
