
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { isRTL } = useLanguage();

  const principles = [
    {
      num: "01",
      title: "Systems over services.",
      desc: "We don't sell hours. We design operational systems with clear inputs, owners and metrics — and hand them over.",
    },
    {
      num: "02",
      title: "Operators, not theorists.",
      desc: "Every engagement is led by people who have run sales, support and finance operations inside real companies. No frameworks for the sake of frameworks.",
    },
    {
      num: "03",
      title: "Built into your stack.",
      desc: "We work inside the tools you already pay for — CRM, helpdesk, billing, inbox — instead of asking teams to migrate to ours.",
    },
    {
      num: "04",
      title: "Earned autonomy.",
      desc: "Agents start with humans in the loop. Autonomy is unlocked workflow by workflow, against the accuracy and SLA targets agreed in the spec.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">About — Enova</p>
              </MotionElement>
            </div>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp" delay={100}>
                <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !leading-[1.02] tracking-[-0.04em] mb-10 max-w-[22ch]">
                  An operational AI studio for companies that take{" "}
                  <span className="font-serif-accent italic font-light text-primary">execution</span> seriously.
                </h1>
              </MotionElement>
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-foreground/75 text-lg max-w-2xl leading-[1.7]">
                  Enova designs and deploys AI systems that take repetitive work off the desk of revenue, support and operations teams — so the people you hired can spend their time on what only people can do.
                </p>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial mission */}
      <section className="border-t border-border/70 py-24 md:py-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Mission</p>
                <h2 className="!text-3xl md:!text-4xl !leading-[1.05] tracking-[-0.03em] max-w-[14ch]">
                  Replace repetitive work with systems that scale.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-foreground/80 text-[17px] leading-[1.75]">
              <MotionElement animation="slideUp" delay={120}>
                <p>
                  Most companies aren't short on tools — they're short on operational capacity. Tickets pile up, leads go cold, finance chases the same invoices every month. The work isn't strategic. It just won't stop.
                </p>
              </MotionElement>
              <MotionElement animation="slideUp" delay={180}>
                <p>
                  We build the AI layer that absorbs that work. Embedded into your CRM, helpdesk, inbox and finance stack — measured against the same KPIs your team is already accountable for.
                </p>
              </MotionElement>
              <MotionElement animation="slideUp" delay={240}>
                <p>
                  No black boxes, no vendor lock-in, no multi-quarter strategy decks. Audit, design, deploy, measure. Then do it again on the next workflow.
                </p>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — editorial list, no cards */}
      <section className="border-t border-border/70 py-24 md:py-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">How we operate</p>
                <h2 className="!text-3xl md:!text-4xl !leading-[1.05] tracking-[-0.03em] max-w-[14ch]">
                  Four principles behind every engagement.
                </h2>
              </MotionElement>
            </div>
          </div>

          <div className={`grid md:grid-cols-12 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-10 md:col-start-2">
              <dl className="divide-y divide-border/60 border-y border-border/60">
                {principles.map((p) => (
                  <MotionElement key={p.num} animation="slideUp" delay={80}>
                    <div className="grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 items-baseline">
                      <dt className="col-span-12 md:col-span-1 text-[11px] font-mono text-muted-foreground tracking-widest">{p.num}</dt>
                      <div className="col-span-12 md:col-span-4">
                        <h3 className="!text-xl md:!text-2xl !leading-[1.15] tracking-[-0.02em]">{p.title}</h3>
                      </div>
                      <dd className="col-span-12 md:col-span-7 text-foreground/75 text-[16px] leading-[1.7]">{p.desc}</dd>
                    </div>
                  </MotionElement>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="border-t border-border/70 py-24 md:py-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Working with Enova</p>
              <h2 className="!text-4xl md:!text-5xl !leading-[1.02] tracking-[-0.035em] max-w-[20ch]">
                We work with a small number of operators each quarter.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-foreground/75 mb-6 max-w-md leading-[1.7]">
                If you have a workflow that's burning hours every week and a team that's ready to operate differently — start with a 30-minute call.
              </p>
              <a
                href="https://cal.com/tarek-jundi/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium border-b border-primary/40 hover:border-primary pb-1 transition-colors"
              >
                Book a strategy call →
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

export default AboutUs;
