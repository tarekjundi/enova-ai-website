import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import tarekPortrait from "@/assets/tarek-jundi.jpg";

/* ---------- content ---------- */

const PROBLEMS = [
  {
    n: "01",
    title: "Repetitive communication",
    body: "Your team answers the same customer questions dozens of times a week — instead of focusing on the conversations that move the business forward.",
  },
  {
    n: "02",
    title: "Disconnected systems",
    body: "Information is copied between CRM, spreadsheets, inboxes and internal tools. Every handoff introduces delay, error and lost context.",
  },
  {
    n: "03",
    title: "Slow response times",
    body: "Prospects and clients wait while your team searches for information across scattered tools — and choose faster competitors in the meantime.",
  },
  {
    n: "04",
    title: "Invisible inefficiency",
    body: "Management can feel that hours are being lost, but no one can point to where. Decisions are made on instinct instead of measurement.",
  },
];

const SERVICES = [
  {
    n: "01",
    slug: "opportunity-audit",
    title: "Opportunity Audit",
    problem: "You suspect AI could help, but don't know where to begin.",
    delivers:
      "A structured review of your workflows and a ranked shortlist of automations by impact, effort and payback.",
    fit: "Leadership teams evaluating where to invest first.",
  },
  {
    n: "02",
    slug: "workflow-systems",
    title: "Workflow Systems",
    problem: "Manual, multi-step processes running across too many tools.",
    delivers:
      "End-to-end workflows built into your existing stack, with observability, guardrails and clean handoffs.",
    fit: "Operations and RevOps teams scaling past the copy-paste stage.",
  },
  {
    n: "03",
    slug: "knowledge-systems",
    title: "Knowledge Systems",
    problem: "The answer exists somewhere in your company — no one can find it.",
    delivers:
      "Private assistants and searchable knowledge bases trained on your documents, tickets and history.",
    fit: "Teams onboarding fast or drowning in repeated internal questions.",
  },
  {
    n: "04",
    slug: "customer-operations",
    title: "Customer Operations",
    problem: "Rising ticket volume, flat headcount, slipping response times.",
    delivers:
      "Tier-1 automation, agent copilots and lifecycle flows — designed around your policies and voice.",
    fit: "Support, success and revenue teams under sustained volume.",
  },
  {
    n: "05",
    slug: "business-intelligence",
    title: "Business Intelligence",
    problem: "Reports arrive too late to change the decision.",
    delivers:
      "Pipelines, dashboards and forecasts your leaders trust — one source of truth, refreshed automatically.",
    fit: "Founders and executives making calls without clean data.",
  },
];

const APPROACH = [
  { title: "Understand", body: "We map how your business actually operates today — the people, the handoffs, the tools and the friction between them." },
  { title: "Identify", body: "We rank the opportunities by business impact, effort and payback, so the first build is the one worth doing." },
  { title: "Design", body: "We architect the system around your existing operation: triggers, data flow, guardrails and human checkpoints." },
  { title: "Build", body: "We implement inside the tools your team already uses, ship to production, and document how it runs." },
  { title: "Optimize", body: "We measure, refine and extend the system as the business changes — improvement, not handover and goodbye." },
];

const CHAIN = [
  { title: "Marketing", body: "Campaigns and content that feed a measurable pipeline." },
  { title: "Lead generation", body: "Capture, qualification and routing without manual triage." },
  { title: "Sales", body: "Follow-up, proposals and reminders that never slip." },
  { title: "CRM", body: "One clean record instead of five conflicting versions." },
  { title: "Operations", body: "Delivery, admin and reporting running on rails." },
  { title: "Customer experience", body: "Faster answers, consistent tone, fewer dropped threads." },
];

const RESULT_FRAME = [
  { n: "01", label: "Challenge & context", body: "The client, their industry, and the operational problem in plain business terms — before any technology is mentioned." },
  { n: "02", label: "System delivered", body: "What we designed and built, which tools it connects, and where the human checkpoints sit." },
  { n: "03", label: "Measured outcome", body: "Time recovered, response times, conversion or cost — recorded against a documented baseline, never estimated." },
];

const WHY = [
  { n: "01", title: "Business first", body: "We begin with your business challenges, not the technology. The stack is chosen last." },
  { n: "02", title: "Custom built", body: "Systems are designed around your existing workflows and goals — not a template forced onto your operation." },
  { n: "03", title: "Connected systems", body: "We link tools, teams and workflows so information moves through the business without manual handoffs." },
  { n: "04", title: "Built to scale", body: "What we build keeps supporting the business as volume, headcount and complexity grow." },
  { n: "05", title: "Long-term partnership", body: "We stay for optimization and improvement, not just delivery day." },
  { n: "06", title: "Owned by your team", body: "Documentation, runbooks and training so your people run the system without depending on us." },
];

const FIT_YES = [
  "You want to improve efficiency across day-to-day operations",
  "You are ready to modernize how your business runs",
  "You want long-term systems instead of quick fixes",
  "You value automation and intelligent, measurable processes",
  "You want marketing and operations working together, not in silos",
];

const FIT_NO = [
  "You only want a single quick automation with no wider strategy",
  "You are looking for generic AI tools with no customization",
  "You are not ready to review or adapt existing processes",
];

const FAQS = [
  { q: "How do we know where AI can actually help our business?", a: "That is the first thing we work out together. We review how your operation runs, then rank the opportunities by impact, effort and payback so you can see exactly where to start." },
  { q: "How long does implementation take?", a: "A focused first system typically moves from discovery to production in a few weeks. Larger, multi-department systems are delivered in stages so value arrives early." },
  { q: "Can Enova work with our existing tools?", a: "Yes. We build around the platforms you already run — CRM, inbox, spreadsheets, accounting, support and internal tools — rather than asking you to replace them." },
  { q: "Do you provide ongoing support?", a: "Yes. Every system ships with documentation and monitoring, and most clients continue with review and optimization cycles as the business changes." },
  { q: "What industries do you work with?", a: "Professional services, healthcare, finance, real estate, e-commerce, hospitality, education, construction and more. The operational patterns repeat across sectors." },
  { q: "Do we need technical knowledge?", a: "No. We handle the technical work and hand over systems your team can operate with normal business tools." },
  { q: "Can you integrate with our CRM?", a: "Yes — HubSpot, Odoo, Salesforce and similar platforms, along with the tools connected around them." },
  { q: "How does pricing work?", a: "Engagements are scoped and quoted per project after the initial consultation, based on the systems involved. Ongoing optimization is a separate, optional retainer." },
];


const METHOD = [
  {
    n: "01",
    title: "Discover",
    body: "We start with your business — the goals, the constraints, the workflows your team actually runs. Not a technology audit, an operational one.",
    outputs: "Opportunity map · Impact ranking · Working hypothesis",
  },
  {
    n: "02",
    title: "Design",
    body: "We architect the system end-to-end: triggers, data flows, guardrails and the human checkpoints that matter. Written down before a line of code is shipped.",
    outputs: "Solution blueprint · Risk register · Delivery plan",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Built against real data, integrated into the tools your team already uses, and shipped to production with monitoring on day one.",
    outputs: "Live system · Runbook · Handover documentation",
  },
  {
    n: "04",
    title: "Improve",
    body: "Systems earn their keep over months, not launches. We monitor, refine and expand alongside your team as the business changes.",
    outputs: "Monthly reviews · Iteration plan · Compounding gains",
  },
];

const STACK = [
  { group: "AI", items: ["OpenAI", "Claude"] },
  { group: "Automation", items: ["Make", "n8n"] },
  {
    group: "Business systems",
    items: ["HubSpot", "Odoo", "Google Workspace", "Slack", "Notion", "Airtable"],
  },
  { group: "Engineering", items: ["Supabase", "React", "Python"] },
];

const INDUSTRIES = [

  "Healthcare", "Finance", "Banking", "Insurance", "Real Estate",
  "Construction", "Manufacturing", "Logistics", "Retail", "E-commerce",
  "Hospitality", "Restaurants", "Education", "Legal", "Marketing Agencies",
  "Consulting Firms", "Automotive", "SaaS", "Technology", "Human Resources",
];

/* ---------- component ---------- */

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isRTL = false;
  const dir = isRTL ? "text-right" : "";

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* =====================================================
          HERO — deep brown, typography-led, minimal
          ===================================================== */}
      <section className="surface-deep-grad relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-end ${dir}`}>
            {/* Headline */}
            <div className="lg:col-span-7">
              <MotionElement animation="slideUp" delay={80}>
                <h1 className="font-display text-[#FFF9F1] leading-[1.04] tracking-[-0.02em] !text-[clamp(38px,7vw,76px)] break-words max-w-[15ch]">
                  Turn repetitive work into{" "}
                  <span className="italic text-[#F6D3A2]">intelligent operations.</span>
                </h1>
              </MotionElement>
            </div>

            {/* Body + CTAs */}
            <div className="lg:col-span-5 lg:pb-3">
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-[#FDEED8] text-[18px] md:text-[20px] leading-[1.7] max-w-[62ch] mb-8">
                  Enova AI implements automation and intelligent marketing systems that remove repetitive work, connect your tools, and help your business grow with less friction.
                </p>


                <div className={`flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 ${isRTL ? "sm:justify-end" : ""}`}>
                  <a
                    href="https://cal.com/tarek-jundi/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group justify-center sm:justify-start !py-4 !px-7 !text-[16px]"
                  >
                    Book a Consultation
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </a>
                  <Link to="/services" className="btn-ghost-on-deep group justify-center sm:justify-start">
                    Explore Our Solutions
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <p className="mt-4 text-[#D8C4A8] text-[15px] leading-[1.6] max-w-[42ch]">
                  A focused conversation to understand your operation and identify where AI creates the biggest impact.
                </p>

              </MotionElement>
            </div>
          </div>

          {/* Editorial rule + meta line */}
          <MotionElement animation="slideUp" delay={340}>
            <div className={`mt-12 md:mt-14 grid md:grid-cols-12 gap-6 items-end ${dir}`}>
              <div className="md:col-span-8">
                <div className="h-px w-full bg-[#F6D3A2]/25 origin-left animate-rule-in" />
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <p className="eyebrow text-[#D8C4A8]">
                  Est. 2024 &nbsp;·&nbsp; Consulting &amp; Systems
                </p>
              </div>
            </div>
          </MotionElement>
        </div>
      </section>


      {/* =====================================================
          PROBLEM — cream, large numbered editorial list
          ===================================================== */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-12 ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">The problem we solve</p>
                <h2 className="font-display text-on-cream !text-[clamp(34px,4.6vw,58px)] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                  Your team should not be the{" "}
                  <span className="italic text-[#A56735]">integration layer.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[42ch]">
                  Most growing businesses don&rsquo;t have a technology problem. They have a workflow problem hidden inside their tools.
                </p>
              </MotionElement>
            </div>
          </div>

          <ol className="divide-y divide-[#3A2915]/15 border-y border-[#3A2915]/15">
            {PROBLEMS.map((p, i) => (
              <MotionElement key={p.n} animation="slideUp" delay={60 + i * 60}>
                <li className={`grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 group ${dir}`}>
                  <div className="md:col-span-2">
                    <span className="font-display italic text-[#A56735] text-4xl md:text-5xl leading-none">
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-on-cream text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em]">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[52ch]">
                      {p.body}
                    </p>
                  </div>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================
          THE ENOVA APPROACH — deep gradient, staged rail
          ===================================================== */}
      <section className="surface-deep-grad py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16 ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">The Enova approach</p>
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(34px,4.6vw,58px)] leading-[1.03] tracking-[-0.015em] max-w-[18ch]">
                  We study the business{" "}
                  <span className="italic text-[#F6D3A2]">before the technology.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[40ch]">
                  AI is the engine. The value comes from pointing it at the right part of your operation.
                </p>
              </MotionElement>
            </div>
          </div>

          <ol className="relative border-t border-[#F6D3A2]/20">
            {APPROACH.map((a, i) => (
              <MotionElement key={a.title} animation="slideUp" delay={40 + i * 70}>
                <li className="group grid md:grid-cols-12 gap-4 md:gap-10 items-baseline py-7 md:py-8 border-b border-[#F6D3A2]/20 transition-colors duration-500 hover:bg-[#F6D3A2]/[0.04] -mx-4 md:-mx-6 px-4 md:px-6">
                  <span className="md:col-span-1 eyebrow text-[#F6D3A2]">0{i + 1}</span>
                  <h3 className="md:col-span-4 font-display text-[#FFF9F1] text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.015em] transition-transform duration-500 md:group-hover:translate-x-1">
                    {a.title}
                  </h3>
                  <p className="md:col-span-7 text-[#FDEED8] text-[17px] leading-[1.75] max-w-[56ch]">
                    {a.body}
                  </p>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>


      {/* =====================================================
          SERVICES — cream, refined vertical index
          ===================================================== */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14 ${dir}`}>
            <div className="md:col-span-6">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">What we do</p>
                <h2 className="font-display text-on-cream !text-[clamp(34px,4.4vw,56px)] leading-[1.05] tracking-[-0.015em] max-w-[18ch]">
                  Five practices,{" "}
                  <span className="italic text-[#A56735]">one operating system.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[18px] leading-[1.75] max-w-[62ch]">
                  Every engagement is scoped, built and documented for your team &mdash; delivered as systems your people can own, not black boxes they rent.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="border-t border-[#3A2915]/20">
            {SERVICES.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={40 + i * 60}>
                <article className="border-b border-[#3A2915]/20">
                  <Link
                    to={`/services#${s.slug}`}
                    className={`group grid md:grid-cols-12 gap-5 md:gap-8 py-9 md:py-12 items-start hover:bg-[#281C0B]/[0.03] transition-colors duration-500 -mx-4 md:-mx-6 px-4 md:px-6 ${dir}`}
                  >
                    <div className="md:col-span-1">
                      <span className="eyebrow text-[#A56735]">{s.n}</span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-display text-on-cream text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.015em] group-hover:text-[#A56735] transition-colors duration-500">
                        {s.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7 space-y-4">
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[66ch]">
                        <span className="text-on-cream font-semibold">The problem &mdash; </span>
                        {s.problem}
                      </p>
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[66ch]">
                        <span className="text-on-cream font-semibold">What we deliver &mdash; </span>
                        {s.delivers}
                      </p>
                      <p className="text-on-cream-muted text-[14px] leading-[1.65] max-w-[66ch]">
                        Best for: {s.fit}
                      </p>
                    </div>
                    <div className="md:col-span-1 md:text-right">
                      <ArrowUpRight
                        size={22}
                        className="text-on-cream/50 group-hover:text-[#A56735] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500 inline-block"
                      />
                    </div>
                  </Link>
                </article>
              </MotionElement>
            ))}
          </div>


          <MotionElement animation="slideUp" delay={200}>
            <div className={`mt-14 ${isRTL ? "text-right" : ""}`}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-on-cream text-[15px] font-medium border-b border-[#3A2915]/40 hover:border-[#A56735] hover:text-[#A56735] transition-colors duration-300 pb-1"
              >
                View all services
                <ArrowRight size={14} />
              </Link>
            </div>
          </MotionElement>
        </div>
      </section>

      {/* =====================================================
          CONNECTED SYSTEM — deep, one business, one chain
          ===================================================== */}
      <section className="surface-deep py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16 ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">One connected system</p>
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.4vw,56px)] leading-[1.04] tracking-[-0.015em] max-w-[18ch]">
                  Not another tool. A business that{" "}
                  <span className="italic text-[#F6D3A2]">talks to itself.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[40ch]">
                  Most stacks break at the handoffs. We connect the stages so information moves without anyone re-typing it.
                </p>
              </MotionElement>
            </div>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-[#F6D3A2]/15 border border-[#F6D3A2]/15">
            {CHAIN.map((c, i) => (
              <MotionElement key={c.title} animation="slideUp" delay={40 + i * 70}>
                <li className="group relative h-full bg-[#281C0B] p-7 lg:p-6 transition-colors duration-500 hover:bg-[#31230F]">
                  <span className="block h-px w-full bg-[#F6D3A2]/30 mb-6">
                    <span className="block h-px w-0 bg-[#F6D3A2] transition-all duration-700 group-hover:w-full" />
                  </span>
                  <p className="eyebrow text-[#F6D3A2] mb-4">0{i + 1}</p>
                  <h3 className="font-display text-[#FFF9F1] text-[24px] leading-[1.15] mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[#D8C4A8] text-[15px] leading-[1.7]">{c.body}</p>
                </li>
              </MotionElement>
            ))}
          </ol>

          <MotionElement animation="slideUp" delay={260}>
            <p className="mt-10 font-display italic text-[#F6D3A2] text-2xl md:text-3xl leading-[1.3] max-w-[34ch]">
              One chain. Every stage aware of the one before it.
            </p>
          </MotionElement>
        </div>
      </section>


      {/* =====================================================
          TECHNOLOGY — understated supporting infrastructure
          ===================================================== */}
      <section className="surface-cream py-16 md:py-24 border-t border-[#3A2915]/15">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-8 md:gap-16 mb-10 md:mb-14 ${dir}`}>
            <div className="md:col-span-6">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-on-cream !text-[clamp(30px,3.8vw,48px)] leading-[1.08] tracking-[-0.015em] max-w-[20ch]">
                  Built around the tools your business{" "}
                  <span className="italic text-[#A56735]">already uses.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-3">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[62ch]">
                  We choose technology based on the workflow, not the trend. Enova connects established business platforms with AI, automation and custom software where it creates measurable operational value.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="border-t border-[#3A2915]/15">
            {STACK.map((s, i) => (
              <MotionElement key={s.group} animation="slideUp" delay={40 + i * 50}>
                <div className={`grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[#3A2915]/15 items-baseline ${dir}`}>
                  <p className="md:col-span-3 eyebrow text-[#4A3720]">{s.group}</p>
                  <ul className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-3">
                    {s.items.map((t) => (
                      <li
                        key={t}
                        className="text-on-cream-body text-[16px] tracking-[-0.005em]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>



      {/* =====================================================
          INDUSTRIES — deep, quiet marquee band
          ===================================================== */}
      <section className="surface-deep py-20 md:py-24 border-y border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10 mb-14">
          <div className={`grid md:grid-cols-12 gap-8 items-end ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">Industries</p>
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.2vw,52px)] leading-[1.05] tracking-[-0.015em] max-w-[22ch]">
                  Working across{" "}
                  <span className="italic text-[#F6D3A2]">twenty industries.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[#FDEED8] text-[16px] leading-[1.7] max-w-[38ch]">
                  From regulated enterprises to fast-moving operators &mdash; the operational pattern holds.
                </p>
              </MotionElement>
            </div>
          </div>
        </div>

        <div className="marquee-mask overflow-hidden">
          <div className="marquee">
            {[...INDUSTRIES, ...INDUSTRIES].map((name, i) => (
              <div key={i} className="flex items-center gap-6 px-10 py-4 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#F6D3A2]/60" />
                <span className="font-display text-[#FFF9F1]/90 text-2xl md:text-3xl whitespace-nowrap tracking-[-0.01em]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES — cream, large editorial features
          ===================================================== */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14 ${dir}`}>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">Results</p>
                <h2 className="font-display text-on-cream !text-[clamp(34px,4.6vw,58px)] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
                  Measured the way{" "}
                  <span className="italic text-[#A56735]">your CFO measures.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-3 md:col-start-10 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[16px] leading-[1.7] max-w-[36ch]">
                  Every engagement is documented against the same five questions &mdash; and published only once the numbers are real.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#3A2915]/15 border border-[#3A2915]/15">
            {RESULT_FRAME.map((r, i) => (
              <MotionElement key={r.label} animation="slideUp" delay={40 + i * 60}>
                <div className="h-full bg-[#FDEED8] p-8 md:p-10">
                  <p className="eyebrow text-[#A56735] mb-5">{r.n}</p>
                  <h3 className="font-display text-on-cream text-[26px] md:text-[30px] leading-[1.15] mb-4">
                    {r.label}
                  </h3>
                  <p className="text-on-cream-body text-[16px] leading-[1.75]">{r.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>

          <MotionElement animation="slideUp" delay={220}>
            <div className="mt-10 grid md:grid-cols-12 gap-6 items-center border-t border-[#3A2915]/20 pt-8">
              <p className="md:col-span-8 text-on-cream-body text-[17px] leading-[1.75] max-w-[62ch]">
                Detailed engagement write-ups are published as client permissions are granted. In the meantime, we&rsquo;re happy to walk through the systems live.
              </p>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-on-cream text-[15px] font-medium border-b border-[#3A2915]/40 hover:border-[#A56735] hover:text-[#A56735] transition-colors duration-300 pb-1"
                >
                  See how we work
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </MotionElement>
        </div>
      </section>


      {/* =====================================================
          METHOD — deep, vertical editorial timeline
          ===================================================== */}
      <section className="surface-deep-grad py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14 ${dir}`}>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">The ENOVA Method</p>
                <h2 className="font-display text-[#FFF9F1] !text-[clamp(34px,4.6vw,58px)] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
                  A quiet method for{" "}
                  <span className="italic text-[#F6D3A2]">measurable change.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[38ch]">
                  Four stages. No multi-quarter strategy decks &mdash; each stage produces something your team can hold and act on.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="relative">
            {/* vertical thread */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#F6D3A2]/20" aria-hidden />

            <ol className="space-y-16 md:space-y-20">
              {METHOD.map((m, i) => (
                <MotionElement key={m.n} animation="slideUp" delay={60 + i * 60}>
                  <li className={`relative grid md:grid-cols-12 gap-10 items-start ${dir}`}>
                    {/* node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1">
                      <span className="block w-2.5 h-2.5 rounded-full bg-[#F6D3A2]" />
                    </div>

                    {/* Left cell */}
                    <div className={`md:col-span-5 pl-12 md:pl-0 ${i % 2 === 0 ? "" : "md:order-2 md:pl-16"} ${i % 2 === 0 ? "md:pr-16 md:text-right" : ""}`}>
                      <p className="eyebrow text-[#F6D3A2] mb-4">Stage {m.n}</p>
                      <h3 className="font-display text-[#FFF9F1] text-[44px] md:text-[64px] leading-none tracking-[-0.015em]">
                        {m.title}
                      </h3>
                    </div>

                    {/* Right cell */}
                    <div className={`md:col-span-5 pl-12 md:pl-0 ${i % 2 === 0 ? "md:col-start-8" : "md:col-start-2 md:order-1"}`}>
                      <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[46ch] mb-6">
                        {m.body}
                      </p>
                      <div className="pt-5 border-t border-[#F6D3A2]/15">
                        <p className="eyebrow text-[#D8C4A8] mb-2">Deliverables</p>
                        <p className="text-[#FFF9F1]/90 text-[15px]">{m.outputs}</p>
                      </div>
                    </div>
                  </li>
                </MotionElement>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY ENOVA — ivory, editorial differentiators
          ===================================================== */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">Why Enova</p>
                <h2 className="font-display text-on-cream !text-[clamp(34px,4.6vw,58px)] leading-[1.03] tracking-[-0.015em] max-w-[18ch]">
                  A partner, not a{" "}
                  <span className="italic text-[#A56735]">tool vendor.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[42ch]">
                  Technology is the engine. The work is understanding the business it has to run.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3A2915]/15 border border-[#3A2915]/15">
            {WHY.map((w, i) => (
              <MotionElement key={w.title} animation="slideUp" delay={40 + i * 60}>
                <div className="h-full bg-[#FFF9F1] p-8 md:p-10 transition-colors duration-500 hover:bg-[#F8EFE1]">
                  <p className="eyebrow text-[#A56735] mb-6">{w.n}</p>
                  <h3 className="font-display text-on-cream text-[26px] md:text-[30px] leading-[1.15] mb-4">
                    {w.title}
                  </h3>
                  <p className="text-on-cream-body text-[16px] leading-[1.75]">{w.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FIT — deep, two-sided honesty
          ===================================================== */}
      <section className="surface-deep py-20 md:py-28 border-y border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <p className="eyebrow text-[#D8C4A8] mb-6">Fit</p>
            <h2 className="font-display text-[#FFF9F1] !text-[clamp(34px,4.6vw,58px)] leading-[1.03] tracking-[-0.015em] max-w-[18ch] mb-12 md:mb-16">
              Is Enova <span className="italic text-[#F6D3A2]">right for you?</span>
            </h2>
          </MotionElement>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <MotionElement animation="slideUp" delay={80}>
              <p className="eyebrow text-[#F6D3A2] mb-8">A strong fit if you</p>
              <ul className="space-y-5">
                {FIT_YES.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-[#F6D3A2]/15 pb-5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6D3A2]" />
                    <span className="text-[#FDEED8] text-[17px] leading-[1.7]">{t}</span>
                  </li>
                ))}
              </ul>
            </MotionElement>

            <MotionElement animation="slideUp" delay={160}>
              <p className="eyebrow text-[#D8C4A8] mb-8">Probably not a fit if you</p>
              <ul className="space-y-5">
                {FIT_NO.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-[#F6D3A2]/10 pb-5">
                    <span className="mt-2.5 h-1.5 w-4 shrink-0 bg-[#D8C4A8]/40" />
                    <span className="text-[#D8C4A8] text-[17px] leading-[1.7]">{t}</span>
                  </li>
                ))}
              </ul>
            </MotionElement>
          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT / FOUNDER — cream editorial statement
          ===================================================== */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-start ${dir}`}>
            <MotionElement animation="slideUp" className="md:col-span-5">
              <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#281C0B]">
                <img
                  src={tarekPortrait}
                  alt="Tarek Jundi, founder and principal of Enova"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281C0B]/85 via-[#281C0B]/10 to-[#281C0B]/40" />
                <figcaption className="absolute inset-0 flex flex-col justify-between p-8">
                  <p className="eyebrow text-[#F6D3A2]">Enova &middot; Est. 2024</p>
                  <div>
                    <p className="font-display text-[#FFF9F1] text-3xl leading-tight">Tarek Jundi</p>
                    <p className="text-[#FDEED8] text-[14px] mt-1">Founder &amp; Principal</p>
                  </div>
                </figcaption>
              </figure>
            </MotionElement>


            <div className="md:col-span-6 md:col-start-7 md:pt-2">
              <MotionElement animation="slideUp" delay={120}>
                <p className="eyebrow text-[#4A3720] mb-6">About Enova</p>
                <h2 className="font-display text-on-cream !text-[clamp(32px,4.2vw,52px)] leading-[1.03] tracking-[-0.015em] mb-10 max-w-[22ch]">
                  Built by operators, <span className="italic text-[#A56735]">for operators.</span>
                </h2>
                <div className="space-y-6 text-on-cream-body text-[17px] leading-[1.8] max-w-[56ch]">
                  <p>
                    Most companies don&rsquo;t need another AI demo. They need working systems <span className="text-on-cream font-medium">in production</span> &mdash; owned by their team, connected to the tools they already use, and measured against outcomes their leadership already cares about.
                  </p>
                  <p>
                    Every ENOVA engagement is led personally. Every system ships with documentation, runbooks and the metrics your team can act on.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-[#3A2915]/20">
                  <p className="eyebrow text-[#4A3720] mb-3">Our commitment</p>
                  <p className="font-display italic text-on-cream text-2xl md:text-3xl leading-[1.25] max-w-[30ch]">
                    Make intelligent operations reliable, measurable and owned by your team.
                  </p>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ — cream, quiet accordion
          ===================================================== */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">Questions</p>
                <h2 className="font-display text-on-cream !text-[clamp(32px,4.2vw,52px)] leading-[1.04] tracking-[-0.015em] max-w-[14ch]">
                  Before we <span className="italic text-[#A56735]">talk.</span>
                </h2>
              </MotionElement>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-[#3A2915]/20">
                {FAQS.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <MotionElement key={f.q} animation="slideUp" delay={30 + i * 40}>
                      <div className="border-b border-[#3A2915]/20">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(open ? null : i)}
                          aria-expanded={open}
                          className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                        >
                          <span className="font-display text-on-cream text-[22px] md:text-[26px] leading-[1.25] group-hover:text-[#A56735] transition-colors duration-300">
                            {f.q}
                          </span>
                          <span className="relative mt-2 h-4 w-4 shrink-0">
                            <span className="absolute inset-x-0 top-1/2 h-px bg-[#A56735]" />
                            <span
                              className={`absolute inset-y-0 left-1/2 w-px bg-[#A56735] transition-transform duration-300 ${open ? "scale-y-0" : "scale-y-100"}`}
                            />
                          </span>
                        </button>
                        <div
                          className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-on-cream-body text-[17px] leading-[1.8] max-w-[62ch] pb-7">
                              {f.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </MotionElement>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA — gold band, high contrast
          ===================================================== */}
      <section className="surface-gold py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${dir}`}>
            <MotionElement animation="slideUp" className="md:col-span-8">
              <h2 className="font-display text-on-cream !text-[clamp(34px,5vw,64px)] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                Ready to build a{" "}
                <span className="italic">smarter business?</span>
              </h2>
            </MotionElement>

            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[52ch]">
                The first conversation is about understanding how your business runs and identifying where automation and AI would create the biggest impact. No pitch, no obligation.
              </p>

              <div className={`flex flex-wrap gap-3 ${isRTL ? "justify-end" : ""}`}>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
                >
                  Book a Consultation

                  <ArrowRight size={15} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                </a>
              </div>
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
