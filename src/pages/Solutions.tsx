
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, FileText, Cube, Headphones, Check } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t, isRTL } = useLanguage();

  const solutions = [
    {
      icon: <FileText size={24} />,
      title: t("solutions.sol1.title"),
      desc: t("solutions.sol1.desc"),
      body: t("solutions.sol1.body"),
      features: [t("solutions.sol1.f1"), t("solutions.sol1.f2"), t("solutions.sol1.f3")],
    },
    {
      icon: <Cube size={24} />,
      title: t("solutions.sol2.title"),
      desc: t("solutions.sol2.desc"),
      body: t("solutions.sol2.body"),
      features: [t("solutions.sol2.f1"), t("solutions.sol2.f2"), t("solutions.sol2.f3")],
    },
    {
      icon: <Headphones size={24} />,
      title: t("solutions.sol3.title"),
      desc: t("solutions.sol3.desc"),
      body: t("solutions.sol3.body"),
      features: [t("solutions.sol3.f1"), t("solutions.sol3.f2"), t("solutions.sol3.f3")],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionElement animation="slideUp" delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("solutions.label")}</p>
              <h1 className="mb-6">
                {t("solutions.title1")} <span className="text-gradient">{t("solutions.title_highlight")}</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <p className="text-lg text-muted-foreground">{t("solutions.subtitle")}</p>
            </MotionElement>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className={`glass rounded-2xl p-8 h-full hover-lift group flex flex-col ${isRTL ? "text-right" : ""}`}>
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors duration-300 ${isRTL ? "ml-auto" : ""}`}>
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{sol.desc}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">{sol.body}</p>
                  <ul className="space-y-3 mt-auto">
                    {sol.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-3 text-sm text-foreground/70 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <div className="relative z-10">
                <h2 className="text-primary-foreground mb-4">{t("solutions.cta.title")}</h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg">{t("solutions.cta.subtitle")}</p>
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    {t("solutions.cta.button")}
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

export default Solutions;
