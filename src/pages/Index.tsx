
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, Zap, Brain, Users, BarChart3, Settings, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: <Zap className="h-5 w-5" />, title: t("index.feature1.title"), desc: t("index.feature1.desc"), body: t("index.feature1.body") },
    { icon: <Brain className="h-5 w-5" />, title: t("index.feature2.title"), desc: t("index.feature2.desc"), body: t("index.feature2.body") },
    { icon: <Users className="h-5 w-5" />, title: t("index.feature3.title"), desc: t("index.feature3.desc"), body: t("index.feature3.body") },
  ];

  const steps = [
    { step: "01", icon: <BarChart3 className="h-6 w-6" />, title: t("index.step1.title"), desc: t("index.step1.desc") },
    { step: "02", icon: <Settings className="h-6 w-6" />, title: t("index.step2.title"), desc: t("index.step2.desc") },
    { step: "03", icon: <Sparkles className="h-6 w-6" />, title: t("index.step3.title"), desc: t("index.step3.desc") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
            <MotionElement animation="slideUp" delay={0}>
              <h1 className="mb-10">
                {t("index.hero.title1")}
                <br />
                {t("index.hero.title2")} <span className="text-gradient">{t("index.hero.title_highlight")}</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? "sm:flex-row-reverse justify-end" : ""}`}>
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    {t("index.hero.cta")}
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" className="border-border text-foreground hover:bg-primary/5 hover:border-primary/30 text-base px-8 py-6 rounded-full font-medium">
                    {t("index.hero.cta2")}
                  </Button>
                </a>
              </div>
            </MotionElement>
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
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
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
