
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { Lightbulb, Globe, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    { icon: <Lightbulb className="h-5 w-5" />, num: "01", title: t("about.value1.title"), desc: t("about.value1.desc") },
    { icon: <Globe className="h-5 w-5" />, num: "02", title: t("about.value2.title"), desc: t("about.value2.desc") },
    { icon: <Shield className="h-5 w-5" />, num: "03", title: t("about.value3.title"), desc: t("about.value3.desc") },
    { icon: <Heart className="h-5 w-5" />, num: "04", title: t("about.value4.title"), desc: t("about.value4.desc") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionElement animation="slideUp" delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("about.label")}</p>
              <h1 className="mb-6">
                {t("about.title1")} <span className="text-gradient">{t("about.title_highlight")}</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
            </MotionElement>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl mx-auto ${isRTL ? "text-right" : ""}`}>
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("about.mission.label")}</p>
              <h2 className="text-2xl md:text-3xl mb-8">{t("about.mission.title")}</h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <div className="space-y-6 text-foreground/80">
                <p>{t("about.mission.p1")}</p>
                <p>{t("about.mission.p2")}</p>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("about.values.label")}</p>
              <h2>{t("about.values.title")}</h2>
            </div>
          </MotionElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className={`glass rounded-2xl p-8 h-full hover-lift group ${isRTL ? "text-right" : ""}`}>
                  <div className={`w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors duration-300 ${isRTL ? "ml-auto" : ""}`}>
                    {v.icon}
                  </div>
                  <span className="text-xs text-primary/40 font-mono">{v.num}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
