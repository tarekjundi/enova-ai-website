import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X, List } from "@phosphor-icons/react";

const NAV_LINKS = [
  { to: "/services", label: "Solutions" },
  { to: "/case-studies", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#281D0B]/95 backdrop-blur-md py-4 border-b border-[#F6D5A0]/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center gap-8">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="ENOVA — home"
          className="shrink-0 transition-opacity duration-300 hover:opacity-75 lg:-ml-3"
        >
          <span className="font-display text-[38px] sm:text-[42px] lg:text-[48px] tracking-[-0.05em] text-[#FFF9F1] leading-none block">
            ENOVA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0 })}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`relative px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-[#F6D5A0]"
                  : "text-[#FDEED8]/85 hover:text-[#FFF9F1]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 btn-primary group whitespace-nowrap"
          >
            Book a Consultation
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#F6D5A0] p-3 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-[#281D0B] px-6 pt-8 pb-16 flex flex-col overflow-y-auto animate-fade-in">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-5 border-b border-[#F6D5A0]/12 font-display text-[32px] tracking-[-0.04em] ${
                  isActive(link.to) ? "text-[#F6D5A0]" : "text-[#FFF9F1]"
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0 });
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary justify-center mt-10 w-full !py-4"
          >
            Book a Consultation
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
