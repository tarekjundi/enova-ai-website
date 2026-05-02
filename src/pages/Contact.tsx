
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";
import { Plus, Minus, Envelope, Phone, ArrowRight, FacebookLogo, XLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MotionElement } from "@/components/MotionElements";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwwwWkZloxZ6iKjVujFMUTxqh4h_uxVL4uRsm5LKow5TuX1nXsdWideN_mmDuo--UY/exec",
        { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }) }
      );
      toast({ title: t("contact.form.success_title"), description: t("contact.form.success_desc") });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      toast({ title: t("contact.form.success_title"), description: t("contact.form.success_desc") });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    `w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-sm ${isRTL ? "text-right" : ""}`;

  const faqs = [
    { q: t("contact.faq1.q"), a: t("contact.faq1.a") },
    { q: t("contact.faq2.q"), a: t("contact.faq2.a") },
    { q: t("contact.faq3.q"), a: t("contact.faq3.a") },
    { q: t("contact.faq4.q"), a: t("contact.faq4.a") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionElement animation="slideUp" delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("contact.label")}</p>
              <h1 className="mb-6">
                {t("contact.title1")} <span className="text-gradient">{t("contact.title_highlight")}</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
            </MotionElement>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto ${isRTL ? "direction-rtl" : ""}`}>
            <div className={`lg:col-span-2 ${isRTL ? "text-right" : ""}`}>
              <MotionElement animation="slideUp" delay={100}>
                <h2 className="text-2xl font-semibold mb-6">{t("contact.info.title")}</h2>
                <p className="text-muted-foreground text-sm mb-10 leading-relaxed">{t("contact.info.subtitle")}</p>

                <div className="space-y-6">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">{t("contact.info.phone")}</p>
                      <p className="text-muted-foreground text-sm" dir="ltr">+90 540 350 2010</p>
                    </div>
                  </div>
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Envelope size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">{t("contact.info.email")}</p>
                      <p className="text-muted-foreground text-sm" dir="ltr">tarek@enovaagency.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">{t("contact.info.follow")}</p>
                  <div className="flex gap-4">
                    {[
                      { href: "https://www.facebook.com/profile.php?id=61550985059945", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                      { href: "https://x.com/enovaagency", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.682l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.448l8.609-9.773L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.306 17.545h2.034L6.529 3.268H4.373L17.595 18.698Z"/></svg> },
                      { href: "https://www.instagram.com/enovaagency/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
                      { href: "https://www.linkedin.com/company/enovaagency/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </MotionElement>
            </div>

            <div className="lg:col-span-3">
              <MotionElement animation="slideUp" delay={200}>
                <div className="glass rounded-2xl p-8">
                  <h2 className={`text-xl font-semibold mb-6 ${isRTL ? "text-right" : ""}`}>{t("contact.form.title")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className={`block text-xs font-medium text-foreground/70 mb-1.5 ${isRTL ? "text-right" : ""}`}>{t("contact.form.name")}</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-xs font-medium text-foreground/70 mb-1.5 ${isRTL ? "text-right" : ""}`}>{t("contact.form.email")}</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} disabled={isSubmitting} dir="ltr" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className={`block text-xs font-medium text-foreground/70 mb-1.5 ${isRTL ? "text-right" : ""}`}>{t("contact.form.company")}</label>
                        <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={`block text-xs font-medium text-foreground/70 mb-1.5 ${isRTL ? "text-right" : ""}`}>{t("contact.form.phone")}</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} disabled={isSubmitting} dir="ltr" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className={`block text-xs font-medium text-foreground/70 mb-1.5 ${isRTL ? "text-right" : ""}`}>{t("contact.form.message")}</label>
                      <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-xl font-medium gap-2 group" disabled={isSubmitting}>
                      {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                      {!isSubmitting && <ArrowRight size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />}
                    </Button>
                  </form>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">{t("contact.faq.label")}</p>
              <h2>{t("contact.faq.title")}</h2>
            </div>
          </MotionElement>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3" value={openAccordion} onValueChange={setOpenAccordion}>
              {faqs.map((faq, i) => (
                <MotionElement key={i} animation="slideUp" delay={100 + i * 80}>
                  <AccordionItem
                    value={`item-${i + 1}`}
                    className="glass rounded-xl px-6 transition-all duration-200 hover:border-primary/20 border border-transparent data-[state=open]:border-primary/15"
                  >
                    <AccordionTrigger className={`text-foreground text-sm font-medium transition-all duration-200 hover:text-primary hover:no-underline [&>svg]:hidden py-5 ${isRTL ? "text-right" : "text-left"}`}>
                      <div className="flex items-center justify-between w-full">
                        <span>{faq.q}</span>
                        <div className="ml-4 flex-shrink-0">
                          {openAccordion === `item-${i + 1}` ? (
                            <Minus size={16} className="text-primary" />
                          ) : (
                            <Plus size={16} className="text-primary/50" />
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`text-muted-foreground text-sm leading-relaxed pb-5 ${isRTL ? "text-right" : ""}`}>
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </MotionElement>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
