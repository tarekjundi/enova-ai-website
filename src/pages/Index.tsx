
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, Lightning, Brain, Users, ChartBar, Gear, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: <Lightning size={20} />, title: t("index.feature1.title"), desc: t("index.feature1.desc"), body: t("index.feature1.body") },
    { icon: <Brain size={20} />, title: t("index.feature2.title"), desc: t("index.feature2.desc"), body: t("index.feature2.body") },
    { icon: <Users size={20} />, title: t("index.feature3.title"), desc: t("index.feature3.desc"), body: t("index.feature3.body") },
  ];

  const steps = [
    { step: "01", icon: <ChartBar size={24} />, title: t("index.step1.title"), desc: t("index.step1.desc") },
    { step: "02", icon: <Gear size={24} />, title: t("index.step2.title"), desc: t("index.step2.desc") },
    { step: "03", icon: <Sparkle size={24} />, title: t("index.step3.title"), desc: t("index.step3.desc") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>
            {/* LEFT */}
            <div className={`lg:col-span-6 ${isRTL ? "text-right" : ""}`}>
              <MotionElement animation="slideUp" delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/40 text-xs uppercase tracking-[0.16em] text-muted-foreground mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t("index.hero.eyebrow")}
                </div>
              </MotionElement>
              <MotionElement animation="slideUp" delay={100}>
                <h1 className="mb-8 text-foreground !text-5xl md:!text-7xl lg:!text-[80px] !leading-[0.98] tracking-[-0.045em]">
                  {t("index.hero.title1")}
                  <br />
                  {t("index.hero.title2")}{" "}
                  <span className="font-serif-accent italic font-light text-primary">
                    {t("index.hero.title_highlight")}
                  </span>
                </h1>
              </MotionElement>
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-muted-foreground text-lg max-w-xl mb-10">
                  {t("index.hero.subtitle")}
                </p>
              </MotionElement>
              <MotionElement animation="slideUp" delay={260}>
                <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse justify-end" : ""}`}>
                  <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-6 py-5 rounded-lg font-medium gap-2 group">
                      {t("index.hero.cta")}
                      <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                    </Button>
                  </a>
                  <a href="#features">
                    <Button variant="outline" className="border-border bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-border text-sm px-6 py-5 rounded-lg font-medium">
                      {t("index.hero.cta2")}
                    </Button>
                  </a>
                </div>
              </MotionElement>
            </div>

            {/* RIGHT — Dashboard mockup */}
            <div className="lg:col-span-6">
              <MotionElement animation="slideUp" delay={200}>
                <div className="relative rounded-md border border-border bg-card overflow-hidden">

                  {/* window chrome */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/30">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/25" />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/25" />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/25" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/70">enova.ops / workflows</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span>synced 12s ago</span>
                    </div>
                  </div>

                  <div className="flex" style={{ direction: "ltr" }}>
                    {/* sidebar */}
                    <div className="w-36 border-r border-border bg-background/40 py-4 px-3 hidden sm:block">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/60 mb-3 px-2">Operations</p>
                      <ul className="space-y-0.5 text-[11px]">
                        {[
                          { label: "Workflows", active: true, count: "12" },
                          { label: "Agents", count: "7" },
                          { label: "Integrations", count: "23" },
                          { label: "Audit log", count: "" },
                          { label: "Cost & usage", count: "" },
                        ].map((it) => (
                          <li key={it.label} className={`flex items-center justify-between px-2 py-1.5 rounded ${it.active ? "bg-secondary/70 text-foreground" : "text-muted-foreground/80"}`}>
                            <span>{it.label}</span>
                            {it.count && <span className="text-[9px] font-mono text-muted-foreground/60">{it.count}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* main */}
                    <div className="flex-1 p-4 min-w-0">
                      {/* breadcrumb */}
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/70 mb-4">
                        <span>operations</span>
                        <span>/</span>
                        <span>workflows</span>
                        <span>/</span>
                        <span className="text-foreground/80">active</span>
                      </div>

                      {/* KPI strip */}
                      <div className="grid grid-cols-3 gap-px bg-border mb-4 border border-border">
                        {[
                          { l: "Runs / 24h", v: "8,412", d: "+12.4%" },
                          { l: "Success rate", v: "99.42%", d: "+0.08%" },
                          { l: "p95 latency", v: "1.84s", d: "−210ms" },
                        ].map((k) => (
                          <div key={k.l} className="bg-card px-3 py-2.5">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground/70 mb-1">{k.l}</div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-sm font-semibold font-founders tracking-tight">{k.v}</span>
                              <span className="text-[9px] text-emerald-400/80 font-mono">{k.d}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* workflow table */}
                      <div className="border border-border rounded-sm overflow-hidden">
                        <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.6fr] gap-2 px-3 py-2 bg-secondary/30 border-b border-border text-[9px] uppercase tracking-wider text-muted-foreground/70 font-mono">
                          <span>Workflow</span>
                          <span className="text-right">Runs / hr</span>
                          <span className="text-right">Success</span>
                          <span className="text-right">Status</span>
                        </div>
                        {[
                          { name: "lead.qualify.inbound", stack: "HubSpot · OpenAI", runs: "342", ok: "99.7%", s: "live", dot: "bg-emerald-400" },
                          { name: "support.triage.tier1", stack: "Intercom · Zendesk", runs: "1,284", ok: "98.9%", s: "live", dot: "bg-emerald-400" },
                          { name: "meeting.book.outbound", stack: "Cal.com · Slack", runs: "58", ok: "100%", s: "live", dot: "bg-emerald-400" },
                          { name: "invoice.followup.AR", stack: "Stripe · Gmail", runs: "12", ok: "—", s: "queued", dot: "bg-primary/70" },
                          { name: "contract.review.legal", stack: "Notion · Anthropic", runs: "9", ok: "97.2%", s: "live", dot: "bg-emerald-400" },
                        ].map((r) => (
                          <div key={r.name} className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.6fr] gap-2 px-3 py-2 border-b border-border/60 last:border-b-0 items-center">
                            <div className="min-w-0">
                              <div className="text-[11px] font-mono text-foreground/90 truncate">{r.name}</div>
                              <div className="text-[9px] text-muted-foreground/60 truncate">{r.stack}</div>
                            </div>
                            <span className="text-[11px] font-mono text-right text-foreground/80">{r.runs}</span>
                            <span className="text-[11px] font-mono text-right text-muted-foreground">{r.ok}</span>
                            <span className="flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground font-mono">
                              <span className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                              {r.s}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* footer */}
                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground/70">
                        <span>5 of 12 shown</span>
                        <span>region us-east-1 · build 2026.05.18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>


      {/* Stats — editorial band */}
      <section className="relative border-y border-border/70">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-end">
            <MotionElement animation="slideUp" delay={50} className="md:col-span-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">By the numbers</p>
              <h2 className="!text-4xl md:!text-5xl lg:!text-6xl !leading-[1.02] tracking-[-0.035em] max-w-[14ch]">
                Operational impact, measured the way your CFO measures it.
              </h2>
            </MotionElement>

            <MotionElement animation="slideUp" delay={150} className="md:col-span-2 md:border-l md:border-border md:pl-6">
              <AnimatedCounter end={85} suffix="%" />
              <p className="text-muted-foreground text-sm mt-2 max-w-[18ch]">{t("index.stats.manual")}</p>
            </MotionElement>

            <MotionElement animation="slideUp" delay={220} className="md:col-span-2 md:border-l md:border-border md:pl-6">
              <AnimatedCounter end={7.8} suffix="×" />
              <p className="text-muted-foreground text-sm mt-2 max-w-[18ch]">{t("index.stats.productivity")}</p>
            </MotionElement>

            <MotionElement animation="slideUp" delay={290} className="md:col-span-2 md:border-l md:border-border md:pl-6">
              <p className="text-5xl font-bold text-foreground font-founders tracking-tight">24/7</p>
              <p className="text-muted-foreground text-sm mt-2 max-w-[18ch]">{t("index.stats.continuous")}</p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Services — asymmetric editorial */}
      <section id="features" className="py-28 md:py-40 relative">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">{t("index.features.label")} — 01 / 03</p>
              </MotionElement>
            </div>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp" delay={80}>
                <h2 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] mb-10 max-w-[16ch]">
                  {t("index.features.title")}
                </h2>
              </MotionElement>
              <MotionElement animation="slideUp" delay={160}>
                <p className="text-muted-foreground text-lg max-w-2xl">{t("index.features.subtitle")}</p>
              </MotionElement>
            </div>
          </div>

          <div className={`grid md:grid-cols-12 gap-10 md:gap-12 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            {/* Featured (large) */}
            <MotionElement animation="slideUp" delay={100} className="md:col-span-7">
              <div className={`group border-t border-border pt-8 ${isRTL ? "text-right" : ""}`}>
                <div className="flex items-center gap-3 mb-12 text-muted-foreground">
                  <span className="text-xs font-mono tracking-wider">01</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs uppercase tracking-widest">{features[0].desc}</span>
                </div>
                <h3 className="!text-2xl md:!text-4xl !leading-tight mb-6 max-w-[18ch]">{features[0].title}</h3>
                <p className="text-foreground/75 max-w-lg mb-8">{features[0].body}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono">
                  <span>+ HubSpot</span><span>+ Salesforce</span><span>+ Pipedrive</span><span>+ Cal.com</span>
                </div>
              </div>
            </MotionElement>

            {/* Two compact stacked */}
            <div className="md:col-span-5 flex flex-col gap-10">
              {[features[1], features[2]].map((feature, i) => (
                <MotionElement key={i} animation="slideUp" delay={160 + i * 80}>
                  <div className={`group border-t border-border pt-8 ${isRTL ? "text-right" : ""}`}>
                    <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                      <span className="text-xs font-mono tracking-wider">0{i + 2}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="text-xs uppercase tracking-widest">{feature.desc}</span>
                    </div>
                    <h3 className="!text-xl md:!text-2xl !leading-tight mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.body}</p>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process — horizontal timeline */}
      <section className="py-24 md:py-32 relative border-t border-border/70">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-5">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">{t("index.process.label")}</p>
                <h2 className="!text-4xl md:!text-5xl !leading-[1.05] mb-6 max-w-[16ch]">
                  {t("index.process.title")}
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-6">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-muted-foreground text-lg">{t("index.process.subtitle")}</p>
              </MotionElement>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-px bg-border ${isRTL ? "md:[direction:rtl]" : ""}`}>
            {steps.map((item, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className={`bg-background p-8 md:p-10 h-full ${isRTL ? "text-right" : ""}`}>
                  <div className="flex items-baseline justify-between mb-10">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{item.step}</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{i === 0 ? "Week 1" : i === 1 ? "Week 2" : "Week 3–4"}</span>
                  </div>
                  <h3 className="!text-xl md:!text-2xl !leading-tight mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[36ch]">{item.desc}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — editorial split, no rounded gold block */}
      <section className="py-28 md:py-40 relative border-t border-border/70">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Next step</p>
              <h2 className="!text-4xl md:!text-6xl lg:!text-7xl !leading-[1.02] max-w-[18ch]">
                {t("index.cta.title").split(" systems").map((part, idx, arr) =>
                  idx === 0 ? (
                    <span key={idx}>{part}{arr.length > 1 && (<span className="font-serif-accent italic font-light text-primary"> systems</span>)}</span>
                  ) : (
                    <span key={idx}>{part}</span>
                  )
                )}
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:pb-2">
              <p className="text-muted-foreground mb-8 max-w-md">{t("index.cta.subtitle")}</p>
              <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-lg font-medium gap-2 group">
                  {t("index.cta.button")}
                  <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                </Button>
              </a>
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
