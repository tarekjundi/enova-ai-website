import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import {
  ArrowRight,
  Lightning,
  Megaphone,
  Robot,
  Code,
} from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

type Service = {
  num: string;
  title: string;
  tagline: string;
  Icon: React.ElementType;
  subs: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "AI Automation",
    tagline: "Codify the workflows your business runs on.",
    Icon: Lightning,
    subs: ["Workflow Automation", "Process Automation", "CRM Automation", "Internal Operations"],
  },
  {
    num: "02",
    title: "AI Marketing",
    tagline: "Grow pipeline without adding headcount.",
    Icon: Megaphone,
    subs: ["Lead Generation", "Content Automation", "Email Automation", "Campaign Optimization"],
  },
  {
    num: "03",
    title: "AI Agents",
    tagline: "Autonomous operators, scoped to your stack.",
    Icon: Robot,
    subs: ["Customer Support Agents", "Sales Agents", "Internal Assistants", "Knowledge Assistants"],
  },
  {
    num: "04",
    title: "Custom AI Development",
    tagline: "Bespoke systems where off-the-shelf falls short.",
    Icon: Code,
    subs: ["Custom Integrations", "Internal Tools", "Dashboards", "API Development"],
  },
];

const Services = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Services — four practices</p>
              <h1 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
                Operational AI, built around your <span className="font-serif-accent italic font-light text-primary">stack</span>.
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9 md:pb-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Four practice areas. Scoped, delivered and handed to your team with documentation and metrics on day one.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Services grid — sub-services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <MotionElement key={s.num} animation="slideUp" delay={60 + i * 60}>
                <article
                  className={`group relative h-full bg-card/40 hover:bg-card/70 border border-border/50 hover:border-primary/40 rounded-[20px] p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  <div className={`flex items-start justify-between mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <s.Icon size={26} weight="regular" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{s.num}</span>
                  </div>

                  <h2 className="!text-3xl md:!text-4xl !leading-[1.05] tracking-[-0.03em] mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-[42ch]">
                    {s.tagline}
                  </p>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/80 mb-4">Includes</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.subs.map((sub) => (
                        <li key={sub} className="flex items-center gap-3 text-foreground/85 text-base leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Next step</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.02] max-w-[20ch]">
                Pick one workflow. We'll show you what to <span className="font-serif-accent italic font-light text-primary">automate first</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <p className="text-muted-foreground mb-8 max-w-md">30-minute working session. We review one of your workflows live and map the system end-to-end.</p>
              <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-sm font-medium gap-2 group">
                  Book a Consultation
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
