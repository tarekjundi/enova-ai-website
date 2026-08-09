import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, List } from "@phosphor-icons/react";

const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#281C0B]/95 backdrop-blur-md py-2 border-b border-[#F6D3A2]/12"
          : "py-3.5 md:py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center gap-8">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="ENOVA — home"
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="font-display text-[42px] sm:text-[48px] lg:text-[54px] tracking-[-0.02em] text-[#FFF9F1] leading-[0.85] block">
            ENOVA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0 })}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`relative px-3 xl:px-4 py-2 text-[16px] font-medium tracking-[-0.005em] transition-colors duration-300 after:content-[''] after:absolute after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:-bottom-0.5 after:h-px after:transition-transform after:duration-300 after:origin-left ${
                isActive(link.to)
                  ? "text-[#F6D3A2] after:bg-[#F6D3A2] after:scale-x-100"
                  : "text-[#FDEED8] hover:text-[#F6D3A2] after:bg-[#F6D3A2]/60 after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>




        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#F6D3A2] p-3 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={30} /> : <List size={30} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-[#281C0B] px-6 pt-6 pb-16 flex flex-col overflow-y-auto animate-fade-in">

          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
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
          </div>
          <p className="mt-10 text-[#D8C4A8] text-[15px] leading-[1.6]">
            <a href="mailto:tarek@enovaagency.com" className="hover:text-[#F6D3A2] transition-colors" dir="ltr">
              tarek@enovaagency.com
            </a>
          </p>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
