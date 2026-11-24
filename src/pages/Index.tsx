import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import WorkflowDiagnostic from "@/components/WorkflowDiagnostic";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "@phosphor-icons/react";

const CAL = "https://cal.com/tarek-jundi/free-consultation";

const PROBLEMS = [
  "Your team answers the same questions dozens of times a week.",
  "Information is re-typed between CRM, spreadsheets and inboxes.",
  "Leaders can feel hours being lost, but can't point to where.",
];

const SOLUTIONS = [
  {
    n: "01",
    slug: "opportunity-audit",
    title: "Opportunity Audit",
    body: "A written shortlist of what to automate, hours saved and a fixed quote.",
  },
  {
    n: "02",
    slug: "workflow-systems",
    title: "Workflow Systems",
    body: "Lead routing, onboarding, invoicing and approvals — connected to your CRM and inbox.",
  },
  {
    n: "03",
    slug: "knowledge-systems",
    title: "Knowledge Systems",
    body: "Private search over your policies, contracts and tickets, with sources linked.",
  },
  {
    n: "04",
    slug: "customer-operations",
    title: "Customer Operations",
    body: "Drafted replies and ticket triage, with a human approving anything uncertain.",
  },
  {
    n: "05",
    slug: "business-intelligence",
    title: "Business Intelligence",
    body: "CRM, accounting and spreadsheets in one self-refreshing dashboard.",
  },
];

const STEPS = [
  { n: "01", title: "Understand", body: "Interviews and screen-shares with the people doing the work." },
  { n: "02", title: "Identify", body: "Each opportunity scored on hours saved, effort and risk." },
  { n: "03", title: "Design", body: "A written spec you approve before anything is built." },
  { n: "04", title: "Build", body: "Built in your accounts, tested on real cases with your team." },
  { n: "05", title: "Optimise", body: "Monitoring, documentation and handover — you own it." },
];

const FLOW = [
  { label: "Comes in", items: ["Web forms", "Shared inbox", "Support tickets"] },
  { label: "Enova logic", items: ["Route and enrich", "Draft and summarise", "Human approval when unsure"] },
  { label: "Lands in", items: ["Your CRM", "Slack or Teams", "Sheets and dashboards"] },
];

const INDUSTRIES = [
  "Professional Services", "Financial Services", "Healthcare & Clinics", "Real Estate",
  "E-commerce", "Hospitality", "Education", "Construction",
  "Logistics", "Legal", "Manufacturing", "SaaS",
];

const STACK = [
  { group: "AI", items: "OpenAI · Claude" },
  { group: "Automation", items: "Make · n8n" },
  { group: "Business systems", items: "HubSpot · Odoo · Google Workspace · Slack · Notion · Airtable" },
  { group: "Engineering", items: "Supabase · React · Python" },
];

const FAQS = [
  { q: "Where do we start?", a: "With a 30-minute conversation about one workflow. We review how it runs today and tell you honestly whether automation is the right answer." },
  { q: "How long does it take?", a: "We agree the timeline after checking the workflow, data access and integrations. Larger builds are split into reviewable stages." },
  { q: "Will it work with our current tools?", a: "Yes. We build around the platforms you already run — CRM, inbox, spreadsheets, accounting and support — instead of replacing them." },
  { q: "How does pricing work?", a: "Each engagement is scoped and quoted after the first consultation. Ongoing optimisation is a separate, optional retainer." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="surface-deep pt-40 md:pt-52 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp" delay={100}>
            <h1 className="font-display text-[#FFF9F1] leading-[0.95] !text-[clamp(42px,7vw,104px)] max-w-[15ch]">
              Automation for the work that happens{" "}
              <span className="font-accent italic font-normal text-[#F6D5A0]">between</span> your tools.
            </h1>
          </MotionElement>
          <div className="mt-14 md:mt-20 pt-8 border-t border-[#F6D5A0]/15 grid lg:grid-cols-12 gap-8 items-end">
            <MotionElement animation="slideUp" delay={180} className="lg:col-span-6">
              <p className="text-[#FDEED8]/85 text-[18px] md:text-[20px] leading-[1.6] max-w-[48ch]">
                We map one manual process and build a working system inside the tools you already use. Fixed scope, owned by you.
              </p>
            </MotionElement>
            <MotionElement animation="slideUp" delay={260} className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group justify-center !py-4 !px-7">
                  Book a Consultation
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <Link to="/services" className="btn-ghost-on-deep group justify-center !py-4">
                  See what we build
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="surface-deep pb-24 md:pb-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <MotionElement animation="slideUp" className="md:col-span-6">
              <h2 className="font-display text-[#FFF9F1] !text-[clamp(30px,3.8vw,52px)] leading-[1] max-w-[14ch]">
                Your team shouldn&rsquo;t be the integration layer.
              </h2>
            </MotionElement>
            <div className="md:col-span-5 md:col-start-8 space-y-8">
              {PROBLEMS.map((p, i) => (
                <MotionElement key={p} animation="slideUp" delay={80 + i * 80}>
                  <p className="text-[#FDEED8]/80 text-[18px] md:text-[20px] leading-[1.5] pl-5 border-l border-[#F6D5A0]/30">{p}</p>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WorkflowDiagnostic />

      {/* ================= WHAT WE BUILD ================= */}
      <section className="surface-ivory pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <MotionElement animation="slideUp" className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <h2 className="font-display text-on-cream !text-[clamp(32px,4.2vw,56px)] leading-[0.98]">What we build</h2>
                <Link to="/services" className="mt-6 eyebrow text-[#94572A] inline-flex items-center gap-2 hover:gap-3 transition-all duration-200">
                  All solutions <ArrowRight size={14} />
                </Link>
              </div>
            </MotionElement>
            <div className="md:col-span-8">
              {SOLUTIONS.map((s, i) => (
                <MotionElement key={s.slug} animation="slideUp" delay={40 + i * 50}>
                  <Link to={`/services#${s.slug}`} className="group flex items-baseline gap-6 py-6 md:py-7 border-b border-[#3A2915]/10 last:border-b-0">
                    <span className="num text-[#94572A] text-[12px] shrink-0 w-6">{s.n}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-on-cream !text-[clamp(24px,2.8vw,38px)] leading-[1.05] transition-colors duration-300 group-hover:text-[#94572A]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-on-cream-body text-[16px] leading-[1.6] max-w-[52ch]">{s.body}</p>
                    </div>
                    <ArrowUpRight size={22} className="text-[#94572A] shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SYSTEM DIAGRAM ================= */}
      <section className="surface-ivory py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <h2 className="font-display text-on-cream !text-[clamp(28px,3.4vw,44px)] leading-[1] mb-10 max-w-[20ch]">
              One connected flow, built on your stack.
            </h2>
          </MotionElement>
          <MotionElement animation="slideUp" delay={100}>
            <div className="grid md:grid-cols-[1fr_auto_1.2fr_auto_1fr] items-stretch gap-4 md:gap-0">
              {FLOW.map((col, i) => (
                <div key={col.label} className="contents">
                  <div className={`p-6 md:p-8 border ${i === 1 ? "bg-[#281D0B] border-[#281D0B]" : "border-[#3A2915]/15"}`}>
                    <p className={`eyebrow mb-5 ${i === 1 ? "text-[#F6D5A0]" : "text-[#94572A]"}`}>{col.label}</p>
                    <ul className="space-y-2">
                      {col.items.map((it) => (
                        <li key={it} className={`text-[16px] ${i === 1 ? "text-[#FDEED8]" : "text-on-cream-body"}`}>{it}</li>
                      ))}
                    </ul>
                  </div>
                  {i < FLOW.length - 1 && (
                    <div aria-hidden="true" className="flex items-center justify-center md:px-4 text-[#94572A]">
                      <ArrowRight size={18} className="rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MotionElement>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="surface-ivory pt-16 md:pt-20 pb-24 md:pb-32">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <h2 className="font-display text-on-cream !text-[clamp(28px,3.4vw,44px)] leading-[1] max-w-[20ch] mb-12">
              From workflow map to working system.
            </h2>
          </MotionElement>
          <ol className="grid md:grid-cols-5 gap-10 md:gap-8">
            {STEPS.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={40 + i * 60}>
                <li className="pt-5 border-t-2 border-[#281D0B]">
                  <p className="num text-[#94572A] text-[12px] mb-4">{s.n}</p>
                  <h3 className="font-display text-on-cream !text-[22px] leading-none mb-3">{s.title}</h3>
                  <p className="text-on-cream-body text-[15px] leading-[1.6]">{s.body}</p>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= INDUSTRIES + STACK ================= */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-14 md:gap-16">
            <div className="md:col-span-6">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-on-cream !text-[clamp(28px,3.4vw,44px)] leading-[1] mb-8 max-w-[16ch]">
                  Sectors we design for.
                </h2>
                <ul className="flex flex-wrap gap-x-3 gap-y-3">
                  {INDUSTRIES.map((ind) => (
                    <li
                      key={ind}
                      className="border border-[#3A2915]/25 px-4 py-2 text-[14px] text-on-cream-body transition-colors duration-200 hover:border-[#3A2915] hover:bg-[#3A2915] hover:text-[#FDEED8]"
                    >
                      {ind}
                    </li>
                  ))}
                </ul>
              </MotionElement>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <MotionElement animation="slideUp" delay={120}>
                <h2 className="font-display text-on-cream !text-[clamp(28px,3.4vw,44px)] leading-[1] mb-8 max-w-[16ch]">
                  The tools your business already uses.
                </h2>
                <dl className="border-t border-[#3A2915]/15">
                  {STACK.map((s) => (
                    <div key={s.group} className="py-5 border-b border-[#3A2915]/15">
                      <dt className="eyebrow text-[#6B5335] mb-2">{s.group}</dt>
                      <dd className="text-on-cream-body text-[16px] leading-[1.6]">{s.items}</dd>
                    </div>
                  ))}
                </dl>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="surface-deep border-t border-[#F6D5A0]/10 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.4vw,56px)] leading-[0.98] max-w-[12ch]">
                  Before you book.
                </h2>
              </MotionElement>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-[#F6D5A0]/15">
                {FAQS.map((f, i) => (
                  <div key={f.q} className="border-b border-[#F6D5A0]/15">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`home-faq-${i}`}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    >
                      <span className="font-display text-[#FFF9F1] text-[20px] md:text-[26px] leading-[1.15] transition-colors duration-200 group-hover:text-[#F6D5A0]">
                        {f.q}
                      </span>
                      <span className="text-[#F6D5A0] shrink-0 pt-1">
                        {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <div
                      id={`home-faq-${i}`}
                      aria-hidden={openFaq !== i}
                      className={`grid transition-all duration-300 ease-out ${
                        openFaq === i ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[#FDEED8]/90 max-w-[58ch] pr-10">{f.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="surface-gold py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-7">
              <h2 className="font-display text-[#281D0B] !text-[clamp(34px,4.8vw,64px)] leading-[0.98] max-w-[14ch]">
                Start with one workflow.
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9">
              <p className="text-[#281D0B]/80 mb-8 max-w-[38ch]">
                30 minutes with Tarek. Bring one process; leave knowing if it&rsquo;s worth automating.
              </p>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-dark group">
                Book a 30-min call
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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
