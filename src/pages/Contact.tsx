
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  ArrowRight,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  FacebookLogo,
  WhatsappLogo,
  Plus,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionElement } from "@/components/MotionElements";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQS = [
  {
    q: "How long does implementation take?",
    a: "Most engagements deliver a first working system in 4–8 weeks. Larger, multi-workflow programs run in phased rollouts across a quarter, with a working milestone every two weeks — so you never wait months to see value.",
  },
  {
    q: "Do you work with our existing systems?",
    a: "Yes. Every engagement is built around your current stack — CRM, support, billing, data warehouse, internal tools. We integrate rather than replace, and hand over the code, credentials and documentation so your team can maintain and extend the system.",
  },
  {
    q: "Can AI integrate with our CRM?",
    a: "We work with HubSpot, Salesforce, Pipedrive, Attio, Zoho and custom CRMs. Typical integrations include record enrichment, deal scoring, stage-change automation, activity capture and leadership rollups your team can trust.",
  },
  {
    q: "What industries do you serve?",
    a: "B2B SaaS, financial services, healthcare, real estate, logistics, e-commerce, professional services and legal. The pattern — operational AI built around a real workflow — is portable across industries.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed scope, fixed price per engagement. We scope against a specific workflow, agree on success metrics up front and quote a single price with a clear timeline. No hourly billing, no vague retainers.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Every engagement includes 30 days of production support at no extra cost. Beyond that, most clients continue with a monthly retainer for monitoring, tuning and new workflow intake — sized to your usage.",
  },
];

const Contact = () => {

  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", budget: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      toast({ title: "Thanks — we'll be in touch.", description: "We typically reply within one business day." });
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    } catch {
      toast({ title: "Thanks — we'll be in touch.", description: "We typically reply within one business day." });
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    `w-full bg-transparent border-0 border-b border-border focus:border-primary/60 focus:outline-none px-0 py-3 text-foreground placeholder:text-muted-foreground/60 text-[15px] transition-colors ${isRTL ? "text-right" : ""}`;
  const labelClass = `block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2 ${isRTL ? "text-right" : ""}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Contact</p>
              </MotionElement>
            </div>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp" delay={100}>
                <h1 className="!text-5xl md:!text-6xl lg:!text-7xl !leading-[1.05] tracking-[-0.035em] mb-8 max-w-[22ch] font-semibold">
                  Let's talk about your next <span className="text-primary">AI project</span>.
                </h1>
              </MotionElement>
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-foreground/75 text-lg max-w-2xl leading-[1.7]">
                  Every message is reviewed personally. Expect a reply within one business day — usually with a few questions before we suggest a call.
                </p>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="border-t border-border/70 py-24 md:py-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-16 md:gap-20 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            {/* Details — minimal, no cards */}
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Direct</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Email</p>
                    <a href="mailto:tarek@enovaagency.com" className="text-foreground hover:text-primary transition-colors text-[16px]" dir="ltr">
                      tarek@enovaagency.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Social Media</p>
                    <div className="flex items-center gap-3" dir="ltr">
                      {[
                        { Icon: LinkedinLogo, href: "https://www.linkedin.com/company/enovaagency/", label: "LinkedIn" },
                        { Icon: InstagramLogo, href: "https://www.instagram.com/enovaagency/", label: "Instagram" },
                        { Icon: XLogo, href: "https://x.com/enovaagency", label: "X" },
                        { Icon: FacebookLogo, href: "https://www.facebook.com/enovaagency", label: "Facebook" },
                        { Icon: WhatsappLogo, href: "https://wa.me/905403502010", label: "WhatsApp" },
                      ].map(({ Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <Icon size={16} weight="regular" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Book a call</p>
                    <a
                      href="https://cal.com/tarek-jundi/free-consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-[15px] border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
                    >
                      Book 30 minutes →
                    </a>
                  </div>
                </div>

                <div className="mt-14 pt-8 border-t border-border/60">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Response time</p>
                  <p className="text-foreground/75 text-[15px] leading-[1.7]">
                    Within one business day, Monday–Friday. Calls are usually scheduled the same week.
                  </p>
                </div>
              </MotionElement>
            </div>

            {/* Form — flat, underline fields */}
            <div className="md:col-span-7 md:col-start-6">
              <MotionElement animation="slideUp" delay={120}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full name</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={fieldClass} disabled={isSubmitting} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Work email</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} disabled={isSubmitting} dir="ltr" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className={fieldClass} disabled={isSubmitting} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>Estimated budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={fieldClass} disabled={isSubmitting}>
                        <option value="" className="bg-card">Select a range</option>
                        <option value="<25k" className="bg-card">Under $25k</option>
                        <option value="25-50k" className="bg-card">$25k – $50k</option>
                        <option value="50-100k" className="bg-card">$50k – $100k</option>
                        <option value="100k+" className="bg-card">$100k+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>The workflow you'd like to automate</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={fieldClass + " resize-none"}
                      disabled={isSubmitting}
                      placeholder="A short description of the process, the team involved and what's not working today."
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-sm font-medium gap-2 group"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                      {!isSubmitting && (
                        <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
                      )}
                    </Button>
                    <p className="text-muted-foreground text-[12px] mt-4 leading-[1.6]">
                      By submitting, you agree we may contact you about your inquiry. We never share your details with third parties.
                    </p>
                  </div>
                </form>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/70 py-24 md:py-32">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">FAQ</p>
                <h2 className="!text-4xl md:!text-5xl !leading-[1.05] tracking-[-0.035em] font-semibold max-w-[16ch]">
                  Answers before you <span className="font-serif-accent italic font-light text-primary">ask</span>.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-6 max-w-sm">
                  The questions we hear most, answered plainly. Anything else — send it in the form.
                </p>
              </MotionElement>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <MotionElement animation="slideUp" delay={120}>
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-border/50 last:border-b-0"
                    >
                      <AccordionTrigger className="group py-6 md:py-7 text-left hover:no-underline [&>svg]:hidden">
                        <span className="text-lg md:text-xl font-medium tracking-[-0.01em] text-foreground group-hover:text-primary transition-colors pr-6">
                          {f.q}
                        </span>
                        <Plus
                          size={22}
                          weight="regular"
                          className="text-primary flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                        />
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base md:text-[17px] leading-[1.75] pb-8 pr-8">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default Contact;
