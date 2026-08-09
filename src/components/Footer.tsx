import { useNavigate } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

const Footer = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const linkClass =
    "text-[#FDEED8] hover:text-[#F6D3A2] transition-colors duration-300 text-[16px] leading-[1.6]";

  return (
    <footer className="surface-deep border-t border-[#F6D3A2]/12">
      <div className="container mx-auto px-6 lg:px-10 pt-20 pb-14">
        <div className="measure-page">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
            <div className="col-span-2 md:col-span-4">
              <p
                className="font-display text-[64px] md:text-[76px] leading-[0.85] text-[#FFF9F1] tracking-[-0.025em]"
                style={{ direction: "ltr" }}
              >
                ENOVA
              </p>
              <p className="mt-6 text-[#FDEED8]/90 text-[16px] leading-[1.65] max-w-[34ch]">
                AI systems for clearer, more efficient operations.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-6">
              <h4 className="eyebrow text-[#D8C4A8] mb-5">Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => go("/services")} className={linkClass}>Opportunity Audit</button></li>
                <li><button onClick={() => go("/services")} className={linkClass}>Workflow Systems</button></li>
                <li><button onClick={() => go("/services")} className={linkClass}>Customer Operations</button></li>
                <li><button onClick={() => go("/services")} className={linkClass}>Business Intelligence</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="eyebrow text-[#D8C4A8] mb-5">Company</h4>
              <ul className="space-y-3">
                <li><button onClick={() => go("/about")} className={linkClass}>About</button></li>
                <li><button onClick={() => go("/case-studies")} className={linkClass}>Work</button></li>
                <li><button onClick={() => go("/process")} className={linkClass}>Process</button></li>
                <li><button onClick={() => go("/industries")} className={linkClass}>Industries</button></li>
                <li><button onClick={() => go("/insights")} className={linkClass}>Insights</button></li>
                <li><button onClick={() => go("/contact")} className={linkClass}>Contact</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="eyebrow text-[#D8C4A8] mb-5">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:tarek@enovaagency.com" className={linkClass} dir="ltr">
                    tarek@enovaagency.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/enovaagency/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                    <LinkedinLogo size={16} weight="regular" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/enovaagency/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                    <InstagramLogo size={16} weight="regular" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/enovaagency" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                    <XLogo size={16} weight="regular" /> X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#F6D3A2]/10 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[#D9C6AC] text-[14px]">© 2026 Enova. All rights reserved.</p>
            <button onClick={() => go("/privacy")} className="text-[#D9C6AC] hover:text-[#F6D3A2] transition-colors text-[14px]">
              Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
