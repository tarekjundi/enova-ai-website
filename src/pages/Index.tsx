
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
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
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
                <h1 className="mb-8 text-foreground !text-4xl md:!text-6xl lg:!text-[64px] !leading-[1.02]">
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
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-transparent blur-2xl rounded-3xl pointer-events-none" />
                  <div className="relative rounded-2xl border border-border bg-card/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
                    {/* window chrome */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/40">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">enova / workflows</div>
                      <div className="text-[10px] text-muted-foreground">live</div>
                    </div>

                    <div className="p-5" style={{ direction: "ltr" }}>
                      {/* header row */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Active automations</div>
                          <div className="text-2xl font-semibold font-founders tracking-tight">12 running</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">This week</div>
                          <div className="text-2xl font-semibold font-founders tracking-tight text-primary">+47.2h saved</div>
                        </div>
                      </div>

                      {/* sparkline */}
                      <div className="h-16 mb-5 rounded-lg border border-border bg-background/60 p-3">
                        <svg viewBox="0 0 300 40" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="hsl(36 55% 69%)" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="hsl(36 55% 69%)" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,30 L25,28 L50,24 L75,26 L100,18 L125,22 L150,14 L175,16 L200,10 L225,12 L250,6 L275,8 L300,4 L300,40 L0,40 Z" fill="url(#spark)" />
                          <path d="M0,30 L25,28 L50,24 L75,26 L100,18 L125,22 L150,14 L175,16 L200,10 L225,12 L250,6 L275,8 L300,4" fill="none" stroke="hsl(36 55% 69%)" strokeWidth="1.5" />
                        </svg>
                      </div>

                      {/* workflow rows */}
                      <div className="space-y-2">
                        {[
                          { name: "Lead qualification — HubSpot", status: "running", meta: "342 today", dot: "bg-emerald-400" },
                          { name: "Support triage — Intercom", status: "running", meta: "1.2k today", dot: "bg-emerald-400" },
                          { name: "Meeting booking — Cal.com", status: "running", meta: "58 today", dot: "bg-emerald-400" },
                          { name: "Invoice follow-up — Stripe", status: "queued", meta: "12 pending", dot: "bg-primary" },
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-secondary/40 border border-border/60">
                            <div className="flex items-center gap-3 min-w-0">
                              <span className={`w-1.5 h-1.5 rounded-full ${row.dot} shrink-0`} />
                              <span className="text-sm text-foreground/90 truncate">{row.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground shrink-0 ml-3">{row.meta}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                        <span>Avg. response · <span className="text-foreground">45s</span></span>
                        <span>Uptime · <span className="text-foreground">99.98%</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="section-divider mb-20" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <MotionElement animation="slideUp" delay={100}>
              <div className="text-center">
                <AnimatedCounter end={85} suffix="%" />
                <p className="text-muted-foreground text-sm mt-1">{t("index.stats.manual")}</p>
              </div>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <div className="text-center">
                <AnimatedCounter end={7.8} suffix="x" />
                <p className="text-muted-foreground text-sm mt-1">{t("index.stats.productivity")}</p>
              </div>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2 font-founders">24/7</p>
                <p className="text-muted-foreground text-sm mt-1">{t("index.stats.continuous")}</p>
              </div>
            </MotionElement>
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("index.features.label")}</p>
              <h2 className="mb-4">{t("index.features.title")}</h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <p className="text-muted-foreground">{t("index.features.subtitle")}</p>
            </MotionElement>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className={`glass rounded-2xl p-8 h-full hover-lift group ${isRTL ? "text-right" : ""}`}>
                  <div className={`w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors duration-300 ${isRTL ? "ml-auto" : ""}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.desc}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("index.process.label")}</p>
              <h2 className="mb-4">{t("index.process.title")}</h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <p className="text-muted-foreground">{t("index.process.subtitle")}</p>
            </MotionElement>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 150} className="h-full">
                <div className={`relative glass rounded-2xl p-8 hover-lift group h-full ${isRTL ? "text-right" : ""}`}>
                  <span className={`text-6xl font-bold text-primary/[0.06] font-founders absolute top-4 select-none ${isRTL ? "left-6" : "right-6"}`}>
                    {item.step}
                  </span>
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors duration-300 ${isRTL ? "ml-auto" : ""}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <div className="relative z-10">
                <h2 className="text-primary-foreground mb-4">{t("index.cta.title")}</h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg">{t("index.cta.subtitle")}</p>
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    {t("index.cta.button")}
                    <ArrowRight size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Button>
                </a>
              </div>
            </div>
          </MotionElement>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
