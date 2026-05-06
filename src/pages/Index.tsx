import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedCounter from "@/components/AnimatedCounter";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, ArrowUpRight, Lightning, Brain, Users, ChartBar, Gear, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: <Lightning size={22} weight="light" />, title: t("index.feature1.title"), desc: t("index.feature1.desc"), body: t("index.feature1.body") },
    { icon: <Brain size={22} weight="light" />, title: t("index.feature2.title"), desc: t("index.feature2.desc"), body: t("index.feature2.body") },
    { icon: <Users size={22} weight="light" />, title: t("index.feature3.title"), desc: t("index.feature3.desc"), body: t("index.feature3.body") },
  ];

  const steps = [
    { step: "01", icon: <ChartBar size={22} weight="light" />, title: t("index.step1.title"), desc: t("index.step1.desc") },
    { step: "02", icon: <Gear size={22} weight="light" />, title: t("index.step2.title"), desc: t("index.step2.desc") },
    { step: "03", icon: <Sparkle size={22} weight="light" />, title: t("index.step3.title"), desc: t("index.step3.desc") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero — asymmetric editorial */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">
            {/* Left meta column */}
            <div className={`col-span-12 md:col-span-3 ${isRTL ? "md:order-2 text-right" : ""}`}>
              <MotionElement animation="slideUp">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t("index.features.label")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[18ch]">
                  {t("index.features.subtitle")}
                </p>
              </MotionElement>
            </div>

            {/* Headline */}
            <div className={`col-span-12 md:col-span-9 ${isRTL ? "md:order-1 text-right" : ""}`}>
              <MotionElement animation="slideUp" delay={120}>
                <h1 className="leading-[0.95] tracking-[-0.04em]">
                  <span className="block">{t("index.hero.title1")}</span>
                  <span className="block">
                    {t("index.hero.title2")}{" "}
                    <em className="not-italic text-primary font-light italic" style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}>
                      {t("index.hero.title_highlight")}
                    </em>
                  </span>
                </h1>
              </MotionElement>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-border/40 pt-8">
            <MotionElement animation="slideUp" delay={240}>
              <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-full font-medium gap-2 group">
                    {t("index.hero.cta")}
                    <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="ghost" className="text-foreground/80 hover:text-primary hover:bg-transparent text-sm px-2 py-6 font-medium gap-2 group">
                    {t("index.hero.cta2")}
                    <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                  </Button>
                </a>
              </div>
            </MotionElement>

            {/* Inline stats — no boxed grid */}
            <MotionElement animation="slideUp" delay={320}>
              <div className={`flex items-baseline gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div>
                  <AnimatedCounter end={85} suffix="%" />
                  <p className="text-[11px] text-muted-foreground/70 uppercase tracking-wider mt-1">{t("index.stats.manual")}</p>
                </div>
                <div className="h-10 w-px bg-border/50" />
                <div>
                  <AnimatedCounter end={7.8} suffix="x" />
                  <p className="text-[11px] text-muted-foreground/70 uppercase tracking-wider mt-1">{t("index.stats.productivity")}</p>
                </div>
                <div className="h-10 w-px bg-border/50" />
                <div>
                  <p className="text-3xl md:text-4xl font-light text-primary font-founders">24/7</p>
                  <p className="text-[11px] text-muted-foreground/70 uppercase tracking-wider mt-1">{t("index.stats.continuous")}</p>
                </div>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Features — bento asymmetric */}
      <section id="features" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-12 gap-y-12 md:gap-x-12 mb-16 items-end ${isRTL ? "" : ""}`}>
            <div className={`col-span-12 md:col-span-5 ${isRTL ? "text-right" : ""}`}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary/70 mb-5">
                — {t("index.features.label")}
              </p>
              <h2 className="leading-[1.05] tracking-[-0.03em]">
                {t("index.features.title")}
              </h2>
            </div>
            <div className={`col-span-12 md:col-span-6 md:col-start-7 ${isRTL ? "text-right md:col-start-1 md:col-end-7" : ""}`}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("index.features.subtitle")}
              </p>
            </div>
          </div>

          {/* Bento grid: 1 large + 2 small stacked */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Large feature */}
            <MotionElement animation="slideUp" delay={100} className="md:col-span-7 md:row-span-2">
              <div className={`relative rounded-3xl border border-border/50 bg-card/40 p-10 md:p-12 h-full overflow-hidden group transition-colors duration-500 hover:border-primary/30 ${isRTL ? "text-right" : ""}`}>
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="text-primary mb-8">{features[0].icon}</div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-[-0.02em]">{features[0].title}</h3>
                  <p className="text-primary/80 text-sm mb-5 font-medium">{features[0].desc}</p>
                  <p className="text-foreground/70 text-base leading-relaxed max-w-md">{features[0].body}</p>
                  <div className="mt-10 flex items-center gap-2 text-primary/70 text-sm">
                    <span className="font-mono text-xs">01 / 03</span>
                  </div>
                </div>
              </div>
            </MotionElement>

            {/* Small features */}
            {[features[1], features[2]].map((feature, i) => (
              <MotionElement key={i} animation="slideUp" delay={200 + i * 100} className="md:col-span-5">
                <div className={`rounded-3xl border border-border/50 bg-card/20 p-8 md:p-9 h-full transition-colors duration-500 hover:border-primary/30 ${isRTL ? "text-right" : ""}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="font-mono text-xs text-muted-foreground/60">0{i + 2} / 03</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 tracking-[-0.02em]">{feature.title}</h3>
                  <p className="text-primary/70 text-xs uppercase tracking-wider mb-3">{feature.desc}</p>
                  <p className="text-foreground/65 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal numbered list, no cards */}
      <section className="py-24 md:py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className={`mb-20 max-w-2xl ${isRTL ? "ml-auto text-right" : ""}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary/70 mb-5">
              — {t("index.process.label")}
            </p>
            <h2 className="leading-[1.05] tracking-[-0.03em] mb-6">{t("index.process.title")}</h2>
            <p className="text-muted-foreground">{t("index.process.subtitle")}</p>
          </div>

          <div className="space-y-0">
            {steps.map((item, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div
                  className={`group grid grid-cols-12 gap-4 md:gap-8 items-baseline py-10 border-t border-border/40 ${
                    i === steps.length - 1 ? "border-b" : ""
                  } transition-colors duration-300 hover:bg-primary/[0.02] ${isRTL ? "text-right" : ""}`}
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-primary/60">{item.step}</span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary/80 group-hover:text-primary transition-colors">{item.icon}</span>
                      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em]">{item.title}</h3>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7">
                    <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — editorial split */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className={`grid grid-cols-12 gap-8 items-end ${isRTL ? "text-right" : ""}`}>
              <div className="col-span-12 md:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary/60 mb-6">— Let's build</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] font-medium">
                  {t("index.cta.title")}
                </h2>
              </div>
              <div className={`col-span-12 md:col-span-4 ${isRTL ? "" : ""}`}>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t("index.cta.subtitle")}</p>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-primary text-lg font-medium border-b border-primary/40 pb-2 hover:gap-5 hover:border-primary transition-all duration-300"
                >
                  {t("index.cta.button")}
                  <ArrowUpRight size={20} weight="light" />
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
