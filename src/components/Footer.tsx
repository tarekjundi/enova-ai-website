import { useNavigate } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, XLogo, ArrowUpRight } from "@phosphor-icons/react";

const Footer = () => {
  const navigate = useNavigate();
  const isRTL = false;

  const go = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const linkClass =
    "text-[#FDEED8] hover:text-[#F6D3A2] transition-colors duration-300 text-[15px]";

  return (
    <footer className="surface-deep border-t border-[#F6D3A2]/12">
      <div className="container mx-auto px-6 lg:px-10 pt-24 pb-14">
        {/* Editorial statement row */}
        <div className={`grid md:grid-cols-12 gap-12 pb-16 border-b border-[#F6D3A2]/12 ${isRTL ? "text-right" : ""}`}>
          <div className="md:col-span-7">
            <p className="eyebrow text-[#C8B59C] mb-6">Get in touch</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.015em] text-[#FFF9F1] max-w-[16ch]">
              Let&rsquo;s make your operations{" "}
              <span className="italic text-[#F6D3A2]">simpler.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-3 flex flex-col justify-between gap-6">
            <p className="text-[#FDEED8] text-[17px] leading-[1.7] max-w-md">
              Book a 30-minute conversation. We&rsquo;ll review one workflow and share where we&rsquo;d start.
            </p>
            <a
              href="https://cal.com/tarek-jundi/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start group"
            >
              Book an AI Opportunity Audit
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <div className={`grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 pt-16 ${isRTL ? "text-right" : ""}`}>
          <div className="col-span-2 md:col-span-4">
            <p className="font-display text-2xl text-[#FFF9F1] tracking-[-0.01em]" style={{ direction: "ltr" }}>
              ENOVA
            </p>
            <p className="mt-4 text-[#FDEED8]/75 text-[15px] leading-[1.7] max-w-sm">
              A consultancy for growing businesses that want simpler operations, connected systems and measurable outcomes.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="eyebrow text-[#C8B59C] mb-5">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/services")} className={linkClass}>Opportunity Audit</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Workflow Systems</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Customer Operations</button></li>
              <li><button onClick={() => go("/services")} className={linkClass}>Business Intelligence</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[#C8B59C] mb-5">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => go("/about")} className={linkClass}>About</button></li>
              <li><button onClick={() => go("/case-studies")} className={linkClass}>Work</button></li>
              <li><button onClick={() => go("/process")} className={linkClass}>Process</button></li>
              <li><button onClick={() => go("/industries")} className={linkClass}>Industries</button></li>
              <li><button onClick={() => go("/insights")} className={linkClass}>Insights</button></li>
              <li><button onClick={() => go("/contact")} className={linkClass}>Contact</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[#C8B59C] mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:tarek@enovaagency.com" className="text-[#FDEED8] hover:text-[#F6D3A2] transition-colors text-[15px]" dir="ltr">
                  tarek@enovaagency.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/enovaagency/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FDEED8]/75 hover:text-[#F6D3A2] transition-colors text-[15px]">
                  <LinkedinLogo size={16} weight="regular" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/enovaagency/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FDEED8]/75 hover:text-[#F6D3A2] transition-colors text-[15px]">
                  <InstagramLogo size={16} weight="regular" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/enovaagency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FDEED8]/75 hover:text-[#F6D3A2] transition-colors text-[15px]">
                  <XLogo size={16} weight="regular" /> X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F6D3A2]/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#C8B59C] text-[13px]">© 2026 Enova. All rights reserved.</p>
          <p className="text-[#C8B59C] text-[13px] font-display-i italic">Built for operators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
