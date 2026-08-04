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
    title: "Opportunity Audit",
    problem: "You suspect AI could help, but don't know where to begin.",
    delivers:
      "A structured review of your workflows and a ranked shortlist of automations by impact, effort and payback.",
    fit: "Leadership teams evaluating where to invest first.",
  },
  {
    n: "02",
    title: "Workflow Systems",
    problem: "Manual, multi-step processes running across too many tools.",
    delivers:
      "End-to-end workflows built into your existing stack, with observability, guardrails and clean handoffs.",
    fit: "Operations and RevOps teams scaling past the copy-paste stage.",
  },
  {
    n: "03",
    title: "Knowledge Systems",
    problem: "The answer exists somewhere in your company — no one can find it.",
    delivers:
      "Private assistants and searchable knowledge bases trained on your documents, tickets and history.",
    fit: "Teams onboarding fast or drowning in repeated internal questions.",
  },
  {
    n: "04",
    title: "Customer Operations",
    problem: "Rising ticket volume, flat headcount, slipping response times.",
    delivers:
      "Tier-1 automation, agent copilots and lifecycle flows — designed around your policies and voice.",
    fit: "Support, success and revenue teams under sustained volume.",
  },
  {
    n: "05",
    title: "Business Intelligence",
    problem: "Reports arrive too late to change the decision.",
    delivers:
      "Pipelines, dashboards and forecasts your leaders trust — one source of truth, refreshed automatically.",
    fit: "Founders and executives making calls without clean data.",
  },
];

const CASES = [
  {
    industry: "B2B SaaS",
    client: "Series B software company",
    challenge:
      "Support tier-1 tickets averaged 8-hour first-response times. The backlog grew faster than headcount and CSAT slipped for two quarters in a row.",
    solution:
      "Deployed a support assistant trained on the product docs and 24 months of ticket history. Wrote clear escalation rules so senior agents only see the exchanges that matter.",
    tools: "Intercom · Zendesk · Notion · Anthropic",
    metric: "67%",
    metricLabel: "faster first response",
  },
  {
    industry: "Financial Services",
    client: "Mid-market accounting firm",
    challenge:
      "Accounts receivable team spent twelve hours a week chasing invoices across 400+ accounts. Aging balances kept climbing while cash flow tightened.",
    solution:
      "Automated the collections workflow with tone-aware reminders, escalation paths and payment plan offers routed through Stripe and Gmail.",
    tools: "Stripe · Gmail · HubSpot · OpenAI",
    metric: "$182k",
    metricLabel: "recovered in 90 days",
  },
  {
    industry: "E-commerce Operations",
    client: "DTC retail brand, 30 SKUs",
    challenge:
      "Inventory forecasting lived in spreadsheets. Top SKUs stocked out several times a month while slow movers tied up cash.",
    solution:
      "Built a forecasting pipeline that watches sales velocity and seasonality, with reorder agents that write proposed POs back to the ERP for human approval.",
    tools: "Shopify · NetSuite · Python · dbt",
    metric: "31%",
    metricLabel: "fewer stockouts",
  },
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

const INDUSTRIES = [
  "Healthcare", "Finance", "Banking", "Insurance", "Real Estate",
  "Construction", "Manufacturing", "Logistics", "Retail", "E-commerce",
  "Hospitality", "Restaurants", "Education", "Legal", "Marketing Agencies",
  "Consulting Firms", "Automotive", "SaaS", "Technology", "Human Resources",
];

/* ---------- component ---------- */

const Index = () => {
  const isRTL = false;
  const dir = isRTL ? "text-right" : "";

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* =====================================================
          HERO — deep brown, typography-led, minimal
          ===================================================== */}
      <section className="surface-deep-grad relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp" delay={40}>
            <p className={`eyebrow text-[#D8C4A8] mb-7 ${dir}`}>
              Intelligent Operations for Ambitious Businesses
            </p>
          </MotionElement>

          <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-end ${dir}`}>
            {/* Headline */}
            <div className="lg:col-span-8">
              <MotionElement animation="slideUp" delay={120}>
                <h1 className="font-display text-[#FFF9F1] leading-[1.0] tracking-[-0.02em] !text-[42px] sm:!text-[64px] lg:!text-[104px] break-words">
                  Turn repetitive work
                  <br className="hidden sm:block" />{" "}
                  into{" "}
                  <span className="italic text-[#F6D3A2]">intelligent operations.</span>
                </h1>
              </MotionElement>
            </div>

            {/* Body + CTAs */}
            <div className="lg:col-span-4 lg:pb-4">
              <MotionElement animation="slideUp" delay={220}>
                <p className="text-[#FDEED8] text-[17px] md:text-[19px] leading-[1.75] max-w-[46ch] mb-8">
                  Enova AI designs practical automation systems that connect your tools, remove repetitive work, and help your team operate with greater speed and clarity.
                </p>

                <div className={`flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 ${isRTL ? "sm:justify-end" : ""}`}>
                  <a
                    href="https://cal.com/tarek-jundi/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group justify-center sm:justify-start !py-4 !px-7 !text-[16px]"
                  >
                    Book an Opportunity Audit
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </a>
                  <Link to="/case-studies" className="btn-ghost-on-deep group justify-center sm:justify-start">
                    Explore Our Work
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <p className="mt-4 text-[#C8B59C] text-[15px] leading-[1.6] max-w-[42ch]">
                  A focused consultation to identify what your business should automate first.
                </p>
              </MotionElement>
            </div>
          </div>

          {/* Editorial rule + meta line */}
          <MotionElement animation="slideUp" delay={340}>
            <div className={`mt-16 md:mt-20 grid md:grid-cols-12 gap-6 items-end ${dir}`}>
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
      <section className="surface-cream py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24 ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#5C4830] mb-6">The problem we solve</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[68px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
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
                <li className={`grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 group ${dir}`}>
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
          SERVICES — cream, refined vertical index
          ===================================================== */}
      <section className="surface-ivory py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28 ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#5C4830] mb-6">What we do</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[68px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                  Five practices,{" "}
                  <span className="italic text-[#A56735]">one operating system.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[44ch]">
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
                    to="/services"
                    className={`group grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 items-start hover:bg-[#281C0B]/[0.03] transition-colors duration-500 -mx-4 md:-mx-6 px-4 md:px-6 ${dir}`}
                  >
                    <div className="md:col-span-1">
                      <span className="eyebrow text-[#A56735]">{s.n}</span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-display text-on-cream text-3xl md:text-5xl leading-[1.02] tracking-[-0.015em] group-hover:text-[#A56735] transition-colors duration-500">
                        {s.title}
                      </h3>
                    </div>
                    <div className="md:col-span-6 space-y-5">
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[54ch]">
                        <span className="text-on-cream font-medium">The problem &mdash; </span>
                        {s.problem}
                      </p>
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[54ch]">
                        <span className="text-on-cream font-medium">What we deliver &mdash; </span>
                        {s.delivers}
                      </p>
                      <p className="text-on-cream-muted text-[15px] leading-[1.7] italic max-w-[54ch]">
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
          INDUSTRIES — deep, quiet marquee band
          ===================================================== */}
      <section className="surface-deep py-24 md:py-32 border-y border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10 mb-14">
          <div className={`grid md:grid-cols-12 gap-8 items-end ${dir}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#C8B59C] mb-6">Industries</p>
                <h2 className="font-display text-[#FFF9F1] !text-[36px] md:!text-[56px] leading-[1.05] tracking-[-0.015em] max-w-[22ch]">
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
      <section className="surface-cream py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28 ${dir}`}>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#5C4830] mb-6">Selected work</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[68px] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
                  Measured the way{" "}
                  <span className="italic text-[#A56735]">your CFO measures.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-3 md:col-start-10 md:pt-4 flex md:justify-end">
              <MotionElement animation="slideUp" delay={140}>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-on-cream text-[15px] font-medium border-b border-[#3A2915]/40 hover:border-[#A56735] hover:text-[#A56735] transition-colors duration-300 pb-1"
                >
                  All work
                  <ArrowRight size={14} />
                </Link>
              </MotionElement>
            </div>
          </div>

          <div className="space-y-20 md:space-y-28">
            {CASES.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={80 + i * 60}>
                <article className={`grid md:grid-cols-12 gap-10 md:gap-14 items-start ${dir}`}>
                  {/* Visual composition — cropped material-like block, alternating side */}
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            i % 3 === 0
                              ? "linear-gradient(135deg, #281C0B 0%, #3A2915 55%, #6E5940 100%)"
                              : i % 3 === 1
                              ? "linear-gradient(135deg, #A56735 0%, #6E5940 60%, #281C0B 100%)"
                              : "linear-gradient(135deg, #6E5940 0%, #4A3620 55%, #281C0B 100%)",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                        <div className="flex items-start justify-between gap-4">
                          <p className="eyebrow text-[#FFF9F1]">Case &middot; 0{i + 1}</p>
                          <span className="text-[#FFF9F1] text-[13px] font-medium tracking-wide border border-[#FFF9F1]/40 rounded-full px-3 py-1">
                            In production
                          </span>
                        </div>

                        <div className="space-y-2">
                          {c.tools.split(" · ").map((t) => (
                            <div
                              key={t}
                              className="flex items-center gap-3 border-b border-[#FFF9F1]/20 pb-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FFF9F1]" />
                              <span className="text-[#FFF9F1] text-[14px] font-medium">{t}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <p className="font-display text-[#FFF9F1] italic text-[80px] md:text-[112px] leading-none tracking-[-0.02em]">
                            {c.metric}
                          </p>
                          <p className="text-[#FFF9F1] text-sm mt-3">{c.metricLabel}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Copy */}
                  <div className="md:col-span-7 md:pt-4">
                    <p className="eyebrow text-[#A56735] mb-4">{c.industry}</p>
                    <h3 className="font-display text-on-cream text-3xl md:text-5xl leading-[1.05] tracking-[-0.015em] mb-8 max-w-[22ch]">
                      {c.client}
                    </h3>

                    <div className="space-y-5">
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[58ch]">
                        <span className="text-on-cream font-medium">Challenge. </span>
                        {c.challenge}
                      </p>
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[58ch]">
                        <span className="text-on-cream font-medium">Approach. </span>
                        {c.solution}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#3A2915]/20 flex flex-wrap gap-x-6 gap-y-2">
                      <p className="eyebrow text-[#5C4830]">Systems connected</p>
                      <p className="text-on-cream-body text-[14px] font-medium">{c.tools}</p>
                    </div>
                  </div>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          METHOD — deep, vertical editorial timeline
          ===================================================== */}
      <section className="surface-deep-grad py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28 ${dir}`}>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#C8B59C] mb-6">The ENOVA Method</p>
                <h2 className="font-display text-[#FFF9F1] !text-[40px] md:!text-[68px] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
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

            <ol className="space-y-20 md:space-y-28">
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
                      <h3 className="font-display text-[#FFF9F1] text-5xl md:text-7xl leading-none tracking-[-0.015em]">
                        {m.title}
                      </h3>
                    </div>

                    {/* Right cell */}
                    <div className={`md:col-span-5 pl-12 md:pl-0 ${i % 2 === 0 ? "md:col-start-8" : "md:col-start-2 md:order-1"}`}>
                      <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[46ch] mb-6">
                        {m.body}
                      </p>
                      <div className="pt-5 border-t border-[#F6D3A2]/15">
                        <p className="eyebrow text-[#C8B59C] mb-2">Deliverables</p>
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
          ABOUT / FOUNDER — cream editorial statement
          ===================================================== */}
      <section className="surface-ivory py-28 md:py-40">
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
                <p className="eyebrow text-[#5C4830] mb-6">About Enova</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[60px] leading-[1.03] tracking-[-0.015em] mb-10 max-w-[22ch]">
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
                  <p className="eyebrow text-[#5C4830] mb-3">Our commitment</p>
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
          FINAL CTA — gold band, high contrast
          ===================================================== */}
      <section className="surface-gold py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${dir}`}>
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="eyebrow text-[#281C0B]/85 mb-6">Start with a conversation</p>
              <h2 className="font-display text-on-cream !text-[42px] md:!text-[80px] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                Book a 30-minute{" "}
                <span className="italic">opportunity audit.</span>
              </h2>
            </MotionElement>

            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                No pitch, no obligation. We&rsquo;ll listen to your goals, review one workflow live, and tell you honestly where we&rsquo;d start.
              </p>
              <div className={`flex flex-wrap gap-3 ${isRTL ? "justify-end" : ""}`}>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
                >
                  Book an AI Opportunity Audit
                  <ArrowRight size={15} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                </a>
                <Link to="/contact" className="btn-ghost-on-cream group">
                  Send a Message
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
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
