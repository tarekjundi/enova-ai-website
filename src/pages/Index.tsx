import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { isRTL } = useLanguage();

  const services = [
    {
      n: "01",
      title: "AI Automation",
      desc: "Automate repetitive workflows and business operations end-to-end — from intake to reporting.",
      meta: "Workflows · Integrations · Ops",
    },
    {
      n: "02",
      title: "AI Agents",
      desc: "Custom AI assistants for support, sales and internal teams that act on your systems, not just chat.",
      meta: "Support · Sales · Internal",
    },
    {
      n: "03",
      title: "Custom Software",
      desc: "Tailored web applications powered by modern AI — built for your stack, owned by your team.",
      meta: "Web apps · APIs · Dashboards",
    },
    {
      n: "04",
      title: "Data & Analytics",
      desc: "Turn business data into actionable insights, forecasts and decisions your operators can trust.",
      meta: "Pipelines · BI · Forecasting",
    },
  ];

  const cases = [
    {
      industry: "B2B SaaS",
      challenge: "Manual customer support process — 8 hour average first response, growing ticket backlog.",
      solution: "AI-powered support assistant routing tier-1 tickets with human escalation rules.",
      result: "67%",
      resultLabel: "faster response times",
    },
    {
      industry: "Financial services",
      challenge: "AR team spending 12 hours/week on invoice follow-ups across 400+ accounts.",
      solution: "Automated collection workflow with tone-aware reminders and payment plan offers.",
      result: "$182k",
      resultLabel: "recovered in 90 days",
    },
    {
      industry: "E-commerce ops",
      challenge: "Inventory forecasting done manually in spreadsheets — frequent stockouts on top SKUs.",
      solution: "Forecasting pipeline with reorder agents writing back to the ERP.",
      result: "31%",
      resultLabel: "stockout reduction",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[94vh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className={`grid lg:grid-cols-12 gap-14 lg:gap-20 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>
            {/* LEFT */}
            <div className={`lg:col-span-6 ${isRTL ? "text-right" : ""}`}>
              <MotionElement animation="slideUp" delay={60}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                    AI Consultancy · Est. 2024
                  </span>
                </div>
              </MotionElement>

              <MotionElement animation="slideUp" delay={120}>
                <h1 className="mb-8 text-foreground !text-[52px] sm:!text-[64px] lg:!text-[80px] !leading-[1.02] tracking-[-0.035em] font-semibold">
                  AI Systems That{" "}
                  <span className="text-primary">Save Time</span>,
                  Cut Costs, and Scale Operations.
                </h1>
              </MotionElement>

              <MotionElement animation="slideUp" delay={200}>
                <p className="text-muted-foreground text-lg md:text-xl leading-[1.65] max-w-2xl mb-12">
                  We build custom AI solutions, intelligent automations, and software systems
                  that help businesses operate more efficiently and grow faster.
                </p>
              </MotionElement>

              <MotionElement animation="slideUp" delay={280}>
                <div className={`flex flex-wrap items-center gap-4 ${isRTL ? "justify-end" : ""}`}>
                  <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 h-12 rounded-md font-medium gap-2 group">
                      Book a Consultation
                      <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                    </Button>
                  </a>
                  <Link to="/case-studies">
                    <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent text-sm px-5 h-12 rounded-md font-medium gap-2 group border border-border hover:border-primary/50">
                      View Our Work
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </MotionElement>
            </div>

            {/* RIGHT — premium dashboard */}
            <div className="lg:col-span-6">
              <MotionElement animation="slideUp" delay={220}>
                <div className="relative">
                  {/* soft accent glow, very subtle */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-2xl opacity-60 pointer-events-none" />

                  <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">
                    {/* window chrome */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/40">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground">enova.ops / operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>live</span>
                      </div>
                    </div>

                    <div style={{ direction: "ltr" }} className="p-6">
                      {/* heading */}
                      <div className="flex items-baseline justify-between mb-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Overview</p>
                          <h4 className="text-base font-semibold tracking-tight">Operations · Today</h4>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">Jun 22, 2026</span>
                      </div>

                      {/* KPI strip */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {[
                          { l: "Runs", v: "8,412", d: "+12.4%" },
                          { l: "Success", v: "99.4%", d: "+0.08%" },
                          { l: "Saved", v: "184h", d: "this week" },
                        ].map((k) => (
                          <div key={k.l} className="rounded-md border border-border bg-background/40 px-3.5 py-3">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1.5">{k.l}</div>
                            <div className="text-xl font-semibold tracking-tight">{k.v}</div>
                            <div className="text-[10px] text-primary/80 font-mono mt-1">{k.d}</div>
                          </div>
                        ))}
                      </div>

                      {/* workflow rows */}
                      <div className="rounded-md border border-border overflow-hidden">
                        <div className="grid grid-cols-[1.8fr_0.7fr_0.6fr] gap-3 px-4 py-2.5 bg-secondary/40 border-b border-border text-[9px] uppercase tracking-wider text-muted-foreground font-mono">
                          <span>Workflow</span>
                          <span className="text-right">Runs / hr</span>
                          <span className="text-right">Status</span>
                        </div>
                        {[
                          { name: "support.triage.tier1", stack: "Intercom · Zendesk", runs: "1,284", s: "live" },
                          { name: "lead.qualify.inbound", stack: "HubSpot · OpenAI", runs: "342", s: "live" },
                          { name: "invoice.followup.AR", stack: "Stripe · Gmail", runs: "58", s: "live" },
                          { name: "contract.review.legal", stack: "Notion · Anthropic", runs: "12", s: "queued" },
                        ].map((r) => (
                          <div key={r.name} className="grid grid-cols-[1.8fr_0.7fr_0.6fr] gap-3 px-4 py-3 border-b border-border/60 last:border-b-0 items-center">
                            <div className="min-w-0">
                              <div className="text-[12px] font-mono text-foreground truncate">{r.name}</div>
                              <div className="text-[10px] text-muted-foreground truncate mt-0.5">{r.stack}</div>
                            </div>
                            <span className="text-[12px] font-mono text-right text-foreground/80">{r.runs}</span>
                            <span className="flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground font-mono">
                              <span className={`w-1.5 h-1.5 rounded-full ${r.s === "live" ? "bg-primary" : "bg-muted-foreground/40"}`} />
                              {r.s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST BAND ============== */}
      <section className="border-y border-border bg-card/30">
        <div className="container mx-auto px-6 lg:px-10 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
            <MotionElement animation="slideUp" className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">Proven Results</p>
              <h2 className="!text-3xl md:!text-4xl lg:!text-5xl !leading-[1.08] tracking-[-0.03em] max-w-[18ch] font-semibold">
                Built for businesses that measure outcomes.
              </h2>
            </MotionElement>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden border border-border">
              {[
                { v: "25+", l: "Projects Delivered" },
                { v: "98%", l: "Client Satisfaction" },
                { v: "50,000+", l: "Hours Automated" },
              ].map((s, i) => (
                <MotionElement key={s.l} animation="slideUp" delay={100 + i * 80}>
                  <div className="bg-card p-7 h-full">
                    <p className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">{s.v}</p>
                    <p className="text-muted-foreground text-sm mt-3">{s.l}</p>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>

          {/* Industries served */}
          <div className="mt-16 pt-10 border-t border-border/70">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Industries served</p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-muted-foreground text-sm">
              {["B2B SaaS", "Financial Services", "E-commerce Operations", "Professional Services", "Healthcare", "Logistics"].map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="features" className="py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-5">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">Services</p>
                <h2 className="!text-4xl md:!text-5xl lg:!text-6xl !leading-[1.05] tracking-[-0.035em] max-w-[16ch] font-semibold">
                  Enterprise-grade AI, delivered as systems.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-muted-foreground text-lg leading-[1.7]">
                  Four practice areas. One engagement model. Every deliverable owned by your team —
                  no black boxes, no lock-in.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {services.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={100 + i * 60}>
                <div className="bg-card p-8 md:p-10 h-full group transition-colors duration-300 hover:bg-secondary/40">
                  <div className="flex items-baseline justify-between mb-10">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{s.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.meta}</span>
                  </div>
                  <h3 className="!text-2xl md:!text-3xl !leading-[1.15] tracking-tight mb-5 font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-[42ch]">{s.desc}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CASE STUDIES ============== */}
      <section className="py-28 md:py-40 border-t border-border bg-card/30">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-5">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">Case Studies</p>
                <h2 className="!text-4xl md:!text-5xl lg:!text-6xl !leading-[1.05] tracking-[-0.035em] max-w-[16ch] font-semibold">
                  Outcomes measured the way your CFO measures them.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4 flex items-end">
              <MotionElement animation="slideUp" delay={120}>
                <Link to="/case-studies" className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all border-b border-primary/40 pb-0.5">
                  View all case studies <ArrowRight size={14} />
                </Link>
              </MotionElement>
            </div>
          </div>

          <div className="space-y-px bg-border border border-border rounded-md overflow-hidden">
            {cases.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={100 + i * 80}>
                <div className="bg-card grid md:grid-cols-12 gap-8 md:gap-10 p-8 md:p-10 transition-colors hover:bg-secondary/40">
                  <div className="md:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Industry</p>
                    <p className="text-foreground text-base font-medium">{c.industry}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Challenge</p>
                    <p className="text-muted-foreground text-[14px] leading-[1.65]">{c.challenge}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Solution</p>
                    <p className="text-muted-foreground text-[14px] leading-[1.65]">{c.solution}</p>
                  </div>
                  <div className="md:col-span-2 md:border-l md:border-border md:pl-8">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Result</p>
                    <p className="text-3xl font-semibold tracking-tight text-primary">{c.result}</p>
                    <p className="text-muted-foreground text-xs mt-1.5">{c.resultLabel}</p>
                  </div>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT / FOUNDER ============== */}
      <section className="py-28 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-start ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-5">
              <div className="aspect-[4/5] rounded-md border border-border bg-gradient-to-br from-secondary to-card overflow-hidden relative">
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-foreground text-lg font-medium">Tarek Jundi</p>
                    <p className="text-muted-foreground text-sm mt-1">Founder & Principal</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-mono">
                  Enova / 2024
                </div>
              </div>
            </MotionElement>

            <div className="md:col-span-6 md:col-start-7 md:pt-2">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">About</p>
                <h2 className="!text-4xl md:!text-5xl !leading-[1.05] tracking-[-0.035em] mb-8 font-semibold max-w-[18ch]">
                  Built by operators, for operators.
                </h2>
                <div className="space-y-5 text-muted-foreground text-[16px] leading-[1.75] max-w-2xl">
                  <p>
                    Enova was founded on a simple premise: most companies don't need more AI demos —
                    they need AI <span className="text-foreground">in production</span>, owned by their team,
                    integrated into the workflows that actually move revenue.
                  </p>
                  <p>
                    Every engagement is led personally. Every workflow ships with documentation,
                    runbooks and metrics your operators can act on. No black boxes. No vendor lock-in.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border/70">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Mission</p>
                  <p className="text-foreground text-lg leading-[1.5] max-w-[34ch]">
                    To make operational AI boring — reliable, measurable, owned.
                  </p>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-28 md:py-36 border-t border-border bg-card/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Next step</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.05] tracking-[-0.035em] font-semibold max-w-[22ch]">
                Let's discuss your next <span className="text-primary">AI project</span>.
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:pb-2">
              <p className="text-muted-foreground mb-8 max-w-md leading-[1.7]">
                Tell us about one workflow you'd like to automate. We'll respond within one business day.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 h-12 rounded-md font-medium gap-2 group">
                    Book a Consultation
                    <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent text-sm px-5 h-12 rounded-md font-medium border border-border hover:border-primary/50">
                    Send a brief
                  </Button>
                </Link>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
