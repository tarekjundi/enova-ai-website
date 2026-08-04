import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X, List } from "@phosphor-icons/react";

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
          ? "bg-[#281C0B]/95 backdrop-blur-md py-2.5 border-b border-[#F6D3A2]/12"
          : "py-4 md:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center gap-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="ENOVA — home"
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="font-display text-[34px] sm:text-[38px] lg:text-[42px] tracking-[-0.015em] text-[#FFF9F1] leading-none">
            ENOVA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
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

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 xl:ml-6 btn-primary text-[15px] py-3 px-5 xl:px-6 whitespace-nowrap group shadow-[0_0_0_1px_rgba(246,211,162,0.35)]"
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
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#281C0B] px-6 pt-6 pb-16 flex flex-col overflow-y-auto animate-fade-in">

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

          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary justify-center mt-10 w-full"
          >
            Book a Consultation
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
