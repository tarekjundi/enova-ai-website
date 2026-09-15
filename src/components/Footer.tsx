import { useNavigate } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

const Footer = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0 }), 40);
  };

  const linkClass =
    "text-[#FDEED8]/85 hover:text-[#F6D5A0] transition-colors duration-200 text-[15px]";

  return (
    <footer className="surface-deep">
      <div className="container mx-auto px-6 lg:px-10 pt-14 pb-10">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <p className="font-display text-[40px] md:text-[48px] leading-none text-[#FFF9F1] tracking-[-0.05em]">
              ENOVA
            </p>
            <p className="mt-5 text-[#FDEED8]/70 text-[15px] leading-[1.7] max-w-[38ch]">
              AI and automation systems for growing businesses. Built into the tools you already run, owned by your team.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[#C9B393] text-[14px] font-medium mb-5">Site</h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/services")} className={linkClass}>Solutions</button></li>
              <li><button onClick={() => go("/case-studies")} className={linkClass}>Work</button></li>
              <li><button onClick={() => go("/about")} className={linkClass}>About</button></li>
              <li><button onClick={() => go("/contact")} className={linkClass}>Contact</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[#C9B393] text-[14px] font-medium mb-5">Solutions</h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/services")} className={linkClass}>Opportunity Audit</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Workflow Systems</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Knowledge Systems</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Customer Operations</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Business Intelligence</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[#C9B393] text-[14px] font-medium mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:tarek@enovaagency.com" className={linkClass}>
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

        <div className="mt-16 pt-7 border-t border-[#F6D5A0]/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="eyebrow text-[#C9B393]/70">© 2026 Enova</p>
          <button onClick={() => go("/privacy")} className="eyebrow text-[#C9B393]/70 hover:text-[#F6D5A0] transition-colors">
            Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
