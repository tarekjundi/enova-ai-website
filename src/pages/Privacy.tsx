
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className={`container mx-auto px-6 py-32 text-foreground/80 ${isRTL ? "text-right" : ""}`}>
        <h1 className="text-4xl font-bold text-primary mb-8">{t("privacy.title")}</h1>
        
        <div className="space-y-6 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.intro.title")}</h2>
            <p>{t("privacy.intro.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.collect.title")}</h2>
            <ul className={`space-y-2 ${isRTL ? "pr-6 list-disc" : "pl-6 list-disc"}`}>
              <li>{t("privacy.collect.item1")}</li>
              <li>{t("privacy.collect.item2")}</li>
              <li>{t("privacy.collect.item3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.use.title")}</h2>
            <ul className={`space-y-2 ${isRTL ? "pr-6 list-disc" : "pl-6 list-disc"}`}>
              <li>{t("privacy.use.item1")}</li>
              <li>{t("privacy.use.item2")}</li>
              <li>{t("privacy.use.item3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.protect.title")}</h2>
            <p>{t("privacy.protect.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.contact.title")}</h2>
            <p>{t("privacy.contact.text")}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
