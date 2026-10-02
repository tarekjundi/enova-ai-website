import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
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

const FAQS = [
  {
    q: "How long does implementation take?",
    a: "Most engagements deliver a first working system in four to eight weeks. Larger programs run in phased rollouts across a quarter, with a working milestone every two weeks — so you never wait months to see value.",
  },
  {
    q: "Do you work with our existing systems?",
    a: "Yes. Every engagement is built around your current stack — CRM, support, billing, data warehouse, internal tools. We integrate rather than replace, and hand over the code, credentials and documentation so your team can maintain and extend the system.",
  },
  {
    q: "Can this integrate with our CRM?",
    a: "We work with HubSpot, Salesforce, Pipedrive, Attio, Zoho and custom CRMs. Typical integrations include record enrichment, deal scoring, stage-change automation, activity capture and leadership rollups your team can trust.",
  },
  {
    q: "What industries do you serve?",
    a: "B2B SaaS, financial services, healthcare, real estate, logistics, e-commerce, professional services and legal — among others. The pattern of operational AI built around a real workflow is portable across sectors.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed scope, fixed price per engagement. We scope against a specific workflow, agree on success metrics up front, and quote a single price with a clear timeline. No hourly billing, no vague retainers.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Every engagement includes thirty days of production support at no extra cost. Beyond that, most clients continue with a monthly retainer for monitoring, tuning and new workflow intake — sized to your usage.",
  },
];

const SOCIALS = [
  { Icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/company/enovaagency/" },
  { Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/enovaagency/" },
  { Icon: XLogo, label: "X", href: "https://x.com/enovaagency" },
  { Icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/enovaagency" },
  { Icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/message/enovaagency" },
];

const SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwwwWkZloxZ6iKjVujFMUTxqh4h_uxVL4uRsm5LKow5TuX1nXsdWideN_mmDuo--UY/exec";

const BUDGETS = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure yet",
];

const PROJECT_TYPES = [
  "Opportunity audit",
  "Workflow automation",
  "Knowledge system / internal AI assistant",
  "Customer support automation",
  "Data, reporting & dashboards",
  "CRM / systems integration",
  "Something else",
];

const START_TIMES = [
  "Immediately",
  "Within 2–4 weeks",
  "In 1–3 months",
  "Just exploring",
];

const EMPTY_FORM = {
  fullName: "",
  workEmail: "",
  companyName: "",
  phoneNumber: "",
  companyWebsite: "",
  projectType: "",
  estimatedBudget: "",
  preferredStartTime: "",
  projectDetails: "",
};

type FormState = typeof EMPTY_FORM;
type FormErrors = Partial<Record<keyof FormState, string>>;

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (data: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!data.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!data.workEmail.trim()) next.workEmail = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.workEmail.trim()))
      next.workEmail = "Please enter a valid email address.";
    if (!data.companyName.trim()) next.companyName = "Please enter your company name.";
    if (!data.projectType) next.projectType = "Please select a project type.";
    if (!data.estimatedBudget) next.estimatedBudget = "Please select an estimated budget.";
    if (!data.preferredStartTime) next.preferredStartTime = "Please select a preferred start time.";
    if (!data.projectDetails.trim()) next.projectDetails = "Please tell us a little about the project.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast({
        title: "Please complete the required fields.",
        description: "A few details are still missing.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          workEmail: formData.workEmail.trim(),
          companyName: formData.companyName.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          companyWebsite: formData.companyWebsite.trim(),
          projectType: formData.projectType,
          estimatedBudget: formData.estimatedBudget,
          preferredStartTime: formData.preferredStartTime,
          projectDetails: formData.projectDetails.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });
      toast({
        title: "Thank you.",
        description:
          "Your project details have been received. We will review them and contact you shortly.",
      });
      setFormData(EMPTY_FORM);
      setErrors({});
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "We could not send your details. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = "text-[#281C0B] text-[15px] font-bold mb-3 block";
  const optionalClass = "ml-2 normal-case tracking-normal text-[13px] text-[#6E5940] font-normal";
  const fieldClass =
    "field-input w-full max-w-full bg-[#FFF9F1] border border-[#3A2915]/20 rounded-[3px] px-4 py-3.5 text-[#281C0B] placeholder:text-[#6E5940]/60 text-[16px] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#3A2915]/40 focus:border-[#94572A] focus:outline-none focus:ring-2 focus:ring-[#94572A]/15";
  const errorClass = "mt-2 text-[14px] text-[#8C2F1E]";


  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell us how the work runs{" "}
            <span className="italic text-[#F6D3A2]">today.</span>
          </>
        }
        intro="Every message is read personally. Expect a reply within one business day — usually with a few questions before we suggest a call."
        meta="Reply within one business day"
      />

      {/* Form + details */}
      <section className="surface-cream py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-14 md:gap-20">
            {/* Details */}
            <MotionElement animation="slideUp" className="md:col-span-4">
              <p className="text-[#281C0B] text-[15px] font-bold mb-6">Direct</p>
              <a
                href="mailto:tarek@enovaagency.com"
                className="font-display text-on-cream text-xl md:text-[26px] lg:text-[30px] leading-[1.15] tracking-[-0.015em] hover:text-[#A56735] transition-colors break-all"
              >
                tarek@enovaagency.com
              </a>

              <div className="mt-12 pt-8 border-t border-[#3A2915]/20">
                <p className="text-[#281C0B] text-[15px] font-bold mb-5">Social</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-full border border-[#3A2915]/25 flex items-center justify-center text-[#3A2915] hover:bg-[#281C0B] hover:text-[#FDEED8] hover:border-[#281C0B] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon size={19} weight="regular" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#3A2915]/20">
                <p className="text-[#281C0B] text-[15px] font-bold mb-4">Prefer to talk?</p>
                <p className="text-on-cream-body text-[16px] leading-[1.75] mb-6 max-w-[38ch]">
                  Book a 30-minute session and we&rsquo;ll review one workflow live.
                </p>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-on-cream group"
                >
                  Book a Consultation
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </MotionElement>

            {/* Form */}
            <MotionElement animation="slideUp" delay={120} className="md:col-span-7 md:col-start-6">
              <p className="text-[#281C0B] text-[17px] font-bold mb-5">Send a message</p>
              <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[54ch] mb-10">
                Tell us what your team is doing manually, where information gets stuck, and what a better process would look like.
              </p>
              <form onSubmit={handleSubmit} noValidate className="space-y-9">
                <div className="grid sm:grid-cols-2 gap-9">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>Full name</label>
                    <input
                      id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                      aria-invalid={!!errors.fullName}
                      placeholder="Your full name" className={fieldClass}
                    />
                    {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="workEmail" className={labelClass}>Work email</label>
                    <input
                      id="workEmail" name="workEmail" type="email" inputMode="email"
                      value={formData.workEmail} onChange={handleChange}
                      aria-invalid={!!errors.workEmail}
                      placeholder="you@company.com" className={fieldClass}
                    />
                    {errors.workEmail && <p className={errorClass}>{errors.workEmail}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-9">
                  <div>
                    <label htmlFor="companyName" className={labelClass}>Company name</label>
                    <input
                      id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
                      aria-invalid={!!errors.companyName}
                      placeholder="Company name" className={fieldClass}
                    />
                    {errors.companyName && <p className={errorClass}>{errors.companyName}</p>}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className={labelClass}>
                      Phone number<span className={optionalClass}>Optional</span>
                    </label>
                    <input
                      id="phoneNumber" name="phoneNumber" type="tel" inputMode="tel"
                      value={formData.phoneNumber} onChange={handleChange}
                      placeholder="+1 555 000 0000" className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-9">
                  <div>
                    <label htmlFor="companyWebsite" className={labelClass}>
                      Company website<span className={optionalClass}>Optional</span>
                    </label>
                    <input
                      id="companyWebsite" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange}
                      placeholder="company.com" className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className={labelClass}>Project or workflow type</label>
                    <select
                      id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}
                      aria-invalid={!!errors.projectType}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="">Select a project type</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className={errorClass}>{errors.projectType}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-9">
                  <div>
                    <label htmlFor="estimatedBudget" className={labelClass}>Estimated budget</label>
                    <select
                      id="estimatedBudget" name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange}
                      aria-invalid={!!errors.estimatedBudget}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="">Select an estimated budget</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.estimatedBudget && <p className={errorClass}>{errors.estimatedBudget}</p>}
                  </div>
                  <div>
                    <label htmlFor="preferredStartTime" className={labelClass}>Preferred start time</label>
                    <select
                      id="preferredStartTime" name="preferredStartTime" value={formData.preferredStartTime} onChange={handleChange}
                      aria-invalid={!!errors.preferredStartTime}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="">Select a start time</option>
                      {START_TIMES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.preferredStartTime && <p className={errorClass}>{errors.preferredStartTime}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className={labelClass}>Project details</label>
                  <textarea
                    id="projectDetails" name="projectDetails" rows={5}
                    value={formData.projectDetails} onChange={handleChange}
                    aria-invalid={!!errors.projectDetails}
                    placeholder="Describe the workflow, where it slows down, and who it affects."
                    className={`${fieldClass} resize-none`}
                  />
                  {errors.projectDetails && <p className={errorClass}>{errors.projectDetails}</p>}
                </div>

                <div className="space-y-5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-ghost-on-cream group w-full sm:w-auto justify-center !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Send My Project Details"}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-on-cream-muted text-[15px] leading-[1.7]">
                    Your information will only be used to respond to your inquiry.
                  </p>
                </div>
              </form>

            </MotionElement>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-ivory py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <MotionElement animation="slideUp" className="md:col-span-4">
              <h2 className="font-display text-on-cream !text-[34px] md:!text-[52px] leading-[1.03] tracking-[-0.02em] max-w-[14ch]">
                Answered{" "}
                <span className="italic text-[#A56735]">plainly.</span>
              </h2>
            </MotionElement>

            <MotionElement animation="slideUp" delay={120} className="md:col-span-7 md:col-start-6">
              <Accordion type="single" collapsible className="w-full border-t border-[#3A2915]/20">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-b border-[#3A2915]/20 [&>h3]:m-0"
                  >
                    <AccordionTrigger className="group py-7 text-left hover:no-underline [&>svg]:hidden">
                      <span className="font-display text-on-cream text-xl md:text-[26px] leading-[1.15] tracking-[-0.01em] pr-8 group-hover:text-[#A56735] transition-colors">
                        {f.q}
                      </span>
                      <Plus
                        size={20}
                        weight="light"
                        className="shrink-0 text-[#6E5940] transition-transform duration-300 group-data-[state=open]:rotate-45"
                      />
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <p className="text-on-cream-body text-[16px] md:text-[17px] leading-[1.8] max-w-[58ch]">
                        {f.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionElement>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
