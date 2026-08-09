import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { FlowDiagram, SystemMap } from "@/components/SystemDiagram";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import tarekPortrait from "@/assets/tarek-jundi.jpg";

/* ---------- content ---------- */

const PROBLEMS = [
  {
    n: "01",
    title: "Repetitive communication",
    body: "The same customer questions answered dozens of times a week, instead of the conversations that move the business forward.",
  },
  {
    n: "02",
    title: "Disconnected systems",
    body: "Information copied between CRM, spreadsheets, inboxes and internal tools. Every handoff adds delay, error and lost context.",
  },
  {
    n: "03",
    title: "Slow response times",
    body: "Clients wait while your team searches scattered tools — and choose faster competitors in the meantime.",
  },
  {
    n: "04",
    title: "Invisible inefficiency",
    body: "Leadership can feel hours are being lost, but no one can point to where. Decisions run on instinct instead of measurement.",
  },
];

const SERVICES = [
  {
    n: "01",
    slug: "opportunity-audit",
    title: "Opportunity Audit",
    line: "Find where automation will produce the highest operational return.",
    outcome: "A prioritised automation roadmap scored by impact, effort and feasibility.",
    fit: "Teams unsure what to automate first.",
  },
  {
    n: "02",
    slug: "workflow-systems",
    title: "Workflow Systems",
    line: "Connect multi-step operational processes across the tools your team already uses.",
    outcome: "Live workflows with observability, guardrails and clean handoffs back to people.",
    fit: "Operations teams past the copy-paste stage.",
  },
  {
    n: "03",
    slug: "knowledge-systems",
    title: "Knowledge Systems",
    line: "Make institutional knowledge findable in seconds instead of asked for in Slack.",
    outcome: "Private assistants grounded in your documents, with sources cited and access scoped.",
    fit: "Teams onboarding fast or repeating internal questions.",
  },
  {
    n: "04",
    slug: "customer-operations",
    title: "Customer Operations",
    line: "Handle routine customer work at volume, with judgement left to your team.",
    outcome: "Triage, response and lifecycle flows with defined limits and escalation paths.",
    fit: "Support and revenue teams under sustained load.",
  },
  {
    n: "05",
    slug: "business-intelligence",
    title: "Business Intelligence",
    line: "Put reporting in front of the decision rather than behind it.",
    outcome: "Pipelines and dashboards refreshed automatically from the systems that generate the data.",
    fit: "Founders making calls without clean data.",
  },
];

const CASES = [
  {
    industry: "B2B SaaS",
    client: "Series B software company",
    before: "Tier-1 tickets waited an average of eight hours for a first response, and the backlog grew faster than headcount.",
    after: "A support assistant grounded in product documentation and ticket history now answers routine questions, with strict escalation rules routing the rest to senior agents.",
    tools: ["Intercom", "Zendesk", "Notion", "Anthropic"],
  },
  {
    industry: "Financial Services",
    client: "Mid-market accounting firm",
    before: "Receivables chasing was manual across 400+ accounts, and aging balances kept climbing.",
    after: "Collections run as a monitored workflow: tone-aware reminders, escalation paths and payment plan offers, with every action logged.",
    tools: ["Stripe", "Gmail", "HubSpot", "OpenAI"],
  },
  {
    industry: "E-commerce Operations",
    client: "DTC retail brand",
    before: "Inventory forecasting lived in spreadsheets, and top SKUs stocked out several times a month.",
    after: "A forecasting pipeline watches sales velocity and seasonality, writing proposed purchase orders back to the ERP for human approval.",
    tools: ["Shopify", "NetSuite", "Python", "dbt"],
  },
];

const METHOD = [
  {
    n: "01",
    title: "Discover",
    body: "We follow a real case end to end and write down where time, context and accuracy leak.",
    outputs: "Workflow map · Opportunity definition",
  },
  {
    n: "02",
    title: "Design",
    body: "Triggers, data flow, guardrails and human checkpoints are agreed before a line of code ships.",
    outputs: "Solution blueprint · Delivery plan",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Built against real data, integrated into your stack, and shipped with monitoring on day one.",
    outputs: "Live system · Runbook · Handover",
  },
  {
    n: "04",
    title: "Improve",
    body: "Monthly review against the metric we agreed, tuning where the business changes.",
    outputs: "Review cadence · Tuning log",
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

/* ---------- component ---------- */

const Index = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* ============ HERO — Composition A: editorial split ============ */}
      <section className="surface-deep-grad pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="container mx-auto px-6 lg:px-10 w-full">
          <div className="measure-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <MotionElement animation="slideUp" delay={60}>
                <h1 className="font-display text-[#FFF9F1] t-hero max-w-[13ch]">
                  Turn repetitive work into{" "}
                  <span className="italic text-[#F6D3A2]">intelligent operations.</span>
                </h1>
              </MotionElement>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <MotionElement animation="slideUp" delay={160}>
                <p className="text-[#FDEED8] t-body max-w-[48ch] mb-9">
                  Enova designs practical automation systems that connect your tools, remove repetitive
                  work, and let your team operate with more speed and clarity.
                </p>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="https://cal.com/tarek-jundi/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    Book an Opportunity Audit
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <Link to="/case-studies" className="text-[#FDEED8] hover:text-[#F6D3A2] transition-colors text-[15px] font-medium inline-flex items-center gap-2">
                    View selected work
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </MotionElement>
            </div>
          </div>

          <MotionElement animation="slideUp" delay={280}>
            <div className="measure-page mt-14 md:mt-16 max-w-[720px]">
              <FlowDiagram tone="deep" labels={["Trigger", "Logic", "Human review", "Action"]} />
            </div>
          </MotionElement>
        </div>
      </section>

      {/* ============ PROBLEM — Composition B: structured index ============ */}
      <section className="surface-cream pad-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
              <div className="md:col-span-7">
                <MotionElement animation="slideUp">
                  <h2 className="font-display text-on-cream t-section max-w-[17ch]">
                    Your team should not be the{" "}
                    <span className="italic text-[#A56735]">integration layer.</span>
                  </h2>
                </MotionElement>
              </div>
              <div className="md:col-span-5 md:pt-3">
                <MotionElement animation="slideUp" delay={120}>
                  <p className="text-on-cream-body t-body max-w-[46ch]">
                    Most growing businesses do not have a technology problem. They have a workflow
                    problem hidden inside their tools.
                  </p>
                </MotionElement>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {PROBLEMS.map((p, i) => (
                <MotionElement key={p.n} animation="slideUp" delay={60 + i * 50}>
                  <div>
                    <span className="eyebrow text-[#A56735]">{p.n}</span>
                    <h3 className="font-display text-on-cream t-item mt-3 mb-3">{p.title}</h3>
                    <p className="text-on-cream-body t-body-sm max-w-[46ch]">{p.body}</p>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO — editorial service index ============ */}
      <section className="surface-ivory pad-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
              <div className="md:col-span-7">
                <MotionElement animation="slideUp">
                  <p className="eyebrow text-[#4A3720] mb-5">What we do</p>
                  <h2 className="font-display text-on-cream t-section max-w-[16ch]">
                    Five practices,{" "}
                    <span className="italic text-[#A56735]">one operating system.</span>
                  </h2>
                </MotionElement>
              </div>
              <div className="md:col-span-5 md:pt-3">
                <MotionElement animation="slideUp" delay={120}>
                  <p className="text-on-cream-body t-body max-w-[46ch]">
                    Every engagement is scoped, built and documented for your team — delivered as
                    systems your people own, not black boxes they rent.
                  </p>
                </MotionElement>
              </div>
            </div>

            <div className="max-w-[900px] border-t border-[#3A2915]/20">
              {SERVICES.map((s, i) => (
                <MotionElement key={s.n} animation="slideUp" delay={40 + i * 50}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="group block border-b border-[#3A2915]/20 py-8 md:py-10 transition-colors duration-400 hover:bg-[#281C0B]/[0.03]"
                  >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                      <div className="md:col-span-1">
                        <span className="eyebrow text-[#A56735]">{s.n}</span>
                      </div>
                      <div className="md:col-span-11">
                        <div className="flex items-start justify-between gap-6">
                          <h3 className="font-display text-on-cream t-item group-hover:text-[#A56735] transition-colors duration-400">
                            {s.title}
                          </h3>
                          <ArrowUpRight
                            size={20}
                            className="mt-1 shrink-0 text-on-cream/40 group-hover:text-[#A56735] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-400"
                          />
                        </div>
                        <p className="text-on-cream-body t-body mt-3 max-w-[54ch]">{s.line}</p>
                        <dl className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-[62ch]">
                          <div>
                            <dt className="eyebrow text-[#4A3720] mb-1.5">Outcome</dt>
                            <dd className="text-on-cream-body t-body-sm">{s.outcome}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow text-[#4A3720] mb-1.5">Best for</dt>
                            <dd className="text-on-cream-body t-body-sm">{s.fit}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </Link>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGY — Composition C: system + groups ============ */}
      <section className="surface-cream pad-compact">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14">
              <div className="md:col-span-7">
                <MotionElement animation="slideUp">
                  <h2 className="font-display text-on-cream t-section max-w-[18ch]">
                    Built around the tools your business{" "}
                    <span className="italic text-[#A56735]">already uses.</span>
                  </h2>
                </MotionElement>
              </div>
              <div className="md:col-span-5">
                <MotionElement animation="slideUp" delay={120}>
                  <p className="text-on-cream-body t-body max-w-[44ch]">
                    Technology supports the workflow. It is not the product. We choose it for the job
                    in front of us, not for the trend.
                  </p>
                </MotionElement>
              </div>
            </div>

            <MotionElement animation="slideUp" delay={80}>
              <div className="max-w-[760px] mb-16">
                <SystemMap tone="cream" />
              </div>
            </MotionElement>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              {STACK.map((s, i) => (
                <MotionElement key={s.group} animation="slideUp" delay={40 + i * 50}>
                  <div>
                    <p className="eyebrow text-[#A56735] mb-5">{s.group}</p>
                    <ul className="space-y-3">
                      {s.items.map((t) => (
                        <li key={t} className="flex items-center gap-3">
                          <span className="h-[26px] w-[26px] shrink-0 border border-[#3A2915]/25 flex items-center justify-center font-display text-[13px] text-[#4A3720]">
                            {t.charAt(0)}
                          </span>
                          <span className="text-on-cream t-body-sm font-medium">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK — proof, before / after ============ */}
      <section className="surface-deep-grad pad-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-5">Selected work</p>
                <h2 className="font-display text-[#FFF9F1] t-section max-w-[16ch]">
                  Systems running in{" "}
                  <span className="italic text-[#F6D3A2]">production.</span>
                </h2>
              </MotionElement>
              <MotionElement animation="slideUp" delay={120}>
                <Link to="/case-studies" className="text-[#FDEED8] hover:text-[#F6D3A2] transition-colors text-[15px] font-medium inline-flex items-center gap-2">
                  All work <ArrowRight size={14} />
                </Link>
              </MotionElement>
            </div>

            <div className="space-y-14">
              {CASES.map((c, i) => (
                <MotionElement key={c.industry} animation="slideUp" delay={60 + i * 50}>
                  <article className="grid md:grid-cols-12 gap-8 md:gap-14 border-t border-[#F6D3A2]/15 pt-10">
                    <div className="md:col-span-4">
                      <p className="eyebrow text-[#F6D3A2] mb-4">{c.industry}</p>
                      <h3 className="font-display text-[#FFF9F1] t-item max-w-[18ch]">{c.client}</h3>
                      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                        {c.tools.map((t) => (
                          <li key={t} className="text-[#D8C4A8] t-meta">{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
                      <div>
                        <p className="eyebrow text-[#D8C4A8] mb-3">Before</p>
                        <p className="text-[#FDEED8]/85 t-body-sm max-w-[42ch]">{c.before}</p>
                      </div>
                      <div>
                        <p className="eyebrow text-[#D8C4A8] mb-3">After</p>
                        <p className="text-[#FFF9F1] t-body-sm max-w-[42ch]">{c.after}</p>
                      </div>
                    </div>
                  </article>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHOD — vertical system rail ============ */}
      <section className="surface-ivory pad-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-14">
              <div className="md:col-span-7">
                <MotionElement animation="slideUp">
                  <p className="eyebrow text-[#4A3720] mb-5">How we work</p>
                  <h2 className="font-display text-on-cream t-section max-w-[16ch]">
                    Four stages, each with{" "}
                    <span className="italic text-[#A56735]">something to hold.</span>
                  </h2>
                </MotionElement>
              </div>
            </div>

            <div className="relative max-w-[900px]">
              <div className="absolute left-[6px] top-2 bottom-2 w-px bg-[#3A2915]/20" aria-hidden />
              <div className="space-y-12">
                {METHOD.map((m, i) => (
                  <MotionElement key={m.n} animation="slideUp" delay={50 + i * 50}>
                    <div className="relative pl-10 md:pl-14">
                      <span className="absolute left-0 top-2.5 block w-[13px] h-[13px] rounded-full border border-[#3A2915]/35 bg-[#FFF9F1]" />
                      <div className="grid md:grid-cols-12 gap-4 md:gap-10">
                        <div className="md:col-span-4">
                          <p className="eyebrow text-[#A56735] mb-2">Stage {m.n}</p>
                          <h3 className="font-display text-on-cream t-item">{m.title}</h3>
                        </div>
                        <div className="md:col-span-8">
                          <p className="text-on-cream-body t-body max-w-[50ch]">{m.body}</p>
                          <p className="text-on-cream-muted t-body-sm mt-3">
                            <span className="font-medium">Deliverable — </span>
                            {m.outputs}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionElement>
                ))}
              </div>
            </div>

            <MotionElement animation="slideUp" delay={200}>
              <div className="mt-14 max-w-[900px]">
                <Link to="/process" className="link-quiet text-on-cream hover:text-[#A56735]">
                  The full eight-stage method <ArrowRight size={14} />
                </Link>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER ============ */}
      <section className="surface-cream pad-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <MotionElement animation="slideUp" className="md:col-span-5">
              <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#281C0B]">
                <img
                  src={tarekPortrait}
                  alt="Tarek Jundi, founder and principal of Enova"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281C0B]/85 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-[#FFF9F1] text-3xl leading-tight">Tarek Jundi</p>
                  <p className="text-[#FDEED8] t-meta mt-1">Founder &amp; Principal</p>
                </figcaption>
              </figure>
            </MotionElement>

            <div className="md:col-span-6 md:col-start-7">
              <MotionElement animation="slideUp" delay={120}>
                <h2 className="font-display text-on-cream t-section mb-8 max-w-[18ch]">
                  Built by operators, <span className="italic text-[#A56735]">for operators.</span>
                </h2>
                <div className="space-y-6 text-on-cream-body t-body max-w-[52ch]">
                  <p>
                    Most companies do not need another AI demo. They need working systems in
                    production — owned by their team, connected to the tools they already use, and
                    measured against outcomes leadership already cares about.
                  </p>
                  <p>
                    Every engagement is led personally, and every system ships with documentation,
                    runbooks and the metrics your team can act on.
                  </p>
                </div>
                <div className="mt-10">
                  <Link to="/about" className="link-quiet text-on-cream hover:text-[#A56735]">
                    About Enova <ArrowRight size={14} />
                  </Link>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT — quiet close, no CTA banner ============ */}
      <section className="surface-deep pad-compact border-t border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="measure-page grid md:grid-cols-12 gap-8 md:gap-16 items-end">
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <h2 className="font-display text-[#FFF9F1] t-section max-w-[16ch]">
                  Start with one workflow.
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-5">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[#FDEED8] t-body max-w-[44ch] mb-6">
                  Tell us how the work runs today and we will tell you where we would look first.
                </p>
                <Link to="/contact" className="link-quiet text-[#F6D3A2]">
                  Contact Enova <ArrowRight size={14} />
                </Link>
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

export default Index;
