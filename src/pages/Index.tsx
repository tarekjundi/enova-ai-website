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
    body: "A review of your workflows. You get a written shortlist of what to automate, the estimated hours saved and a fixed quote for each.",
  },
  {
    n: "02",
    slug: "workflow-systems",
    title: "Workflow Systems",
    body: "Lead routing, onboarding, invoicing or approvals rebuilt in Make, n8n or code — connected to your CRM and inbox, with error alerts.",
  },
  {
    n: "03",
    slug: "knowledge-systems",
    title: "Knowledge Systems",
    body: "A private search assistant over your policies, contracts and past tickets, so staff find the right answer with the source linked.",
  },
  {
    n: "04",
    slug: "customer-operations",
    title: "Customer Operations",
    body: "Drafted replies, ticket triage and FAQ handling for support and sales inboxes, with a human approving anything uncertain.",
  },
  {
    n: "05",
    slug: "business-intelligence",
    title: "Business Intelligence",
    body: "Data from your CRM, accounting and spreadsheets pulled into one dashboard that refreshes itself instead of being rebuilt weekly.",
  },
];

const STEPS = [
  { n: "01", title: "Understand", body: "Interviews and screen-shares with the people doing the work." },
  { n: "02", title: "Identify", body: "Each opportunity scored on hours saved, effort and risk." },
  { n: "03", title: "Design", body: "A written spec you approve before anything is built." },
  { n: "04", title: "Build", body: "Built in your accounts, tested on real cases with your team." },
  { n: "05", title: "Optimise", body: "Monitoring and support agreed in the project scope." },
];

const PROOF = [
  { v: "Discovery", l: "Process map and shortlist", c: "Discovery", detail: "A written map of how the workflow runs today, where time is lost, and which steps are worth automating first." },
  { v: "Build", l: "A working system in your tools", c: "Build", detail: "Automations, integrations and any AI steps built against your real data, tested with the people who will use them." },
  { v: "Handover", l: "Documentation and training", c: "Ownership", detail: "Runbooks, credentials, a recorded walkthrough and an agreed support plan. You keep everything if you stop working with us." },
];

const WHY = [
  { n: "01", title: "Business first", body: "We start from the process and its cost. If a spreadsheet rule solves it, we tell you — tools are chosen last." },
  { n: "02", title: "In production", body: "Systems run on your real data, with logging and alerts, so failures are visible instead of silent." },
  { n: "03", title: "Owned by you", body: "Code, credentials, runbooks and training. You can end the engagement and keep the system." },
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
  { q: "Do we need technical people?", a: "No. We handle the build and hand over a system your team operates with normal business tools." },
  { q: "How does pricing work?", a: "Each engagement is scoped and quoted after the first consultation. Ongoing optimisation is a separate, optional retainer." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="surface-deep-grad pt-32 md:pt-40 pb-28 md:pb-32 min-h-[100vh] md:min-h-[110vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp" delay={100}>
            <h1 className="font-display text-[#FFF9F1] leading-[0.94] !text-[clamp(40px,6.4vw,88px)] max-w-[17ch]">
              Automation for the work that happens between your tools.
            </h1>
          </MotionElement>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mt-12 md:mt-16 items-end">
            <div className="lg:col-span-6">
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-[#FDEED8]/90 text-[18px] md:text-[20px] leading-[1.65] max-w-[54ch]">
                  We map one manual process — intake, follow-ups, reporting, support replies — then
                  build and hand over a working system inside the CRM, inbox and spreadsheets you
                  already use. Fixed scope, documented, owned by you.
                </p>
              </MotionElement>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <MotionElement animation="slideUp" delay={260}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group justify-center !py-4 !px-7">
                    Book a 30-min call
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
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="surface-gold py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="font-display text-[#281D0B] !text-[clamp(32px,4.4vw,58px)] leading-[0.98]">What an engagement delivers</h2>
              <Link to="/case-studies" className="text-[#281D0B] text-[15px] font-medium inline-flex items-center gap-2">
                See example engagements <ArrowRight size={16} />
              </Link>
            </div>
          </MotionElement>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {PROOF.map((p, i) => (
              <MotionElement key={p.l} animation="slideUp" delay={40 + i * 60}>
                <div>
                  <p className="font-display text-[#281D0B] text-[32px] md:text-[40px] leading-none">{p.v}</p>
                  <p className="text-[#281D0B] text-[18px] leading-[1.4] mt-3 max-w-[28ch] font-medium">{p.l}</p>
                  <p className="text-[#281D0B]/80 text-[16px] leading-[1.65] mt-4 max-w-[38ch]">{p.detail}</p>
                  <p className="text-[#281D0B]/70 text-[13px] mt-5 font-medium">{p.c}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-on-cream !text-[clamp(32px,4.4vw,58px)] leading-[0.98] max-w-[14ch]">
                  Your team shouldn&rsquo;t be the integration layer.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ol className="border-t border-[#3A2915]/15">
                {PROBLEMS.map((p, i) => (
                  <MotionElement key={p} animation="slideUp" delay={80 + i * 80}>
                    <li className="flex gap-6 py-7 border-b border-[#3A2915]/15">
                      <span className="num text-[#94572A] text-[14px] pt-2 shrink-0">0{i + 1}</span>
                      <p className="text-on-cream-body text-[19px] md:text-[22px] leading-[1.45] max-w-[36ch]">{p}</p>
                    </li>
                  </MotionElement>
                ))}
              </ol>
              <MotionElement animation="slideUp" delay={320}>
                <p className="mt-8 text-on-cream-muted max-w-[46ch]">
                  Most growing businesses don&rsquo;t have a technology problem. They have a workflow
                  problem hidden inside their tools.
                </p>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      <WorkflowDiagnostic />

      {/* ================= WHAT WE BUILD ================= */}
      <section className="surface-deep py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.6vw,62px)] leading-[0.98] max-w-[16ch]">
                What we build
              </h2>
              <Link
                to="/services"
                className="eyebrow text-[#F6D5A0] inline-flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                All solutions <ArrowRight size={14} />
              </Link>
            </div>
          </MotionElement>

          <div className="border-t border-[#F6D5A0]/15">
            {SOLUTIONS.map((s, i) => (
              <MotionElement key={s.slug} animation="slideUp" delay={40 + i * 50}>
                <Link
                  to={`/services#${s.slug}`}
                  className="group grid md:grid-cols-12 gap-3 md:gap-10 items-baseline py-7 md:py-8 border-b border-[#F6D5A0]/15 transition-colors duration-300 hover:bg-[#F6D5A0]/[0.05] -mx-4 md:-mx-6 px-4 md:px-6"
                >
                  <span className="num text-[#F6D5A0]/70 text-[13px] md:col-span-1">{s.n}</span>
                  <h3 className="md:col-span-4 font-display text-[#FFF9F1] !text-[clamp(22px,2.4vw,30px)] leading-[1.1] transition-colors duration-300 group-hover:text-[#F6D5A0]">
                    {s.title}
                  </h3>
                  <p className="md:col-span-6 text-[#FDEED8]/90 text-[17px] leading-[1.65] max-w-[56ch]">{s.body}</p>
                  <span className="md:col-span-1 hidden md:flex justify-end text-[#F6D5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <h2 className="font-display text-on-cream !text-[clamp(32px,4.6vw,62px)] leading-[0.98] max-w-[16ch] mb-14">
              From workflow map to working system.
            </h2>
          </MotionElement>

          <div className="grid md:grid-cols-5 gap-px bg-[#3A2915]/15 border border-[#3A2915]/15">
            {STEPS.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={40 + i * 60}>
                <div className="bg-[#FFF9F1] h-full p-7 md:p-8 transition-colors duration-300 hover:bg-[#FDEED8]">
                  <p className="num text-[#94572A] text-[13px] mb-8">{s.n}</p>
                  <h3 className="font-display text-on-cream !text-[24px] md:!text-[28px] leading-none mb-3">
                    {s.title}
                  </h3>
                  <p className="text-on-cream-body text-[16px] leading-[1.6]">{s.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ENOVA ================= */}
      <section className="surface-deep-grad py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.4vw,56px)] leading-[0.98] max-w-[12ch]">
                  How we work.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-[#F6D5A0]/15">
                {WHY.map((w, i) => (
                  <MotionElement key={w.n} animation="slideUp" delay={60 + i * 80}>
                    <div className="py-8 border-b border-[#F6D5A0]/15">
                      <div className="flex items-baseline gap-5 mb-3">
                        <span className="num text-[#F6D5A0]/70 text-[13px]">{w.n}</span>
                        <h3 className="font-display text-[#FFF9F1] !text-[clamp(24px,2.8vw,34px)] leading-none">
                          {w.title}
                        </h3>
                      </div>
                      <p className="text-[#FDEED8]/90 md:pl-[3.1rem] max-w-[56ch]">{w.body}</p>
                    </div>
                  </MotionElement>
                ))}
              </div>
            </div>
          </div>
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
                <p className="mt-6 text-on-cream-muted text-[15px] max-w-[44ch]">
                  Not listed? The operational patterns are usually the same — tell us how your work runs.
                </p>
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
      <section className="surface-deep py-20 md:py-28">
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
                A 30-minute video call with Tarek. Bring one process; you&rsquo;ll leave knowing whether it&rsquo;s worth automating and roughly what it would take.
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
