import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

type Case = {
  num: string;
  industry: string;
  region: string;
  company: string;
  headline: string;
  context: string;
  problem: string[];
  system: { title: string; body: string }[];
  before: { label: string; value: string }[];
  after: { label: string; value: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  duration: string;
  quote: { text: string; name: string; role: string };
};

const CASES: Case[] = [
  {
    num: "01",
    industry: "B2B SaaS",
    region: "MENA · EU",
    company: "Series-B vertical SaaS, ~180 employees",
    headline: "Inbound support cut from 4 hours to 45 seconds, with 72% Tier-1 resolved automatically.",
    context: "A vertical SaaS operating across MENA and the EU was handling ~2,400 support tickets per week across email, in-app chat and WhatsApp. Their Tier-1 team was running 6 days a week and still missing SLA on roughly one in four tickets.",
    problem: [
      "Median first response of 4h 12m, p95 over 18h",
      "Knowledge fragmented across Notion, Zendesk macros and senior CSMs",
      "Repeat questions answered inconsistently by tier-1 agents",
      "WhatsApp handled manually from a single shared phone with no audit trail",
    ],
    system: [
      { title: "Unified intake", body: "Ingest from email, in-app chat and WhatsApp Business API into a single triage pipeline with intent classification and ICP-aware prioritisation." },
      { title: "Retrieval layer", body: "All public docs, internal runbooks and resolved tickets indexed into a permissioned KB, re-embedded on every source change." },
      { title: "Agent + escalation", body: "Agent drafts or auto-sends responses with confidence scoring. Below threshold or commercial topics escalate to a human with full thread context and a suggested reply." },
    ],
    before: [
      { label: "Median first response", value: "4h 12m" },
      { label: "SLA hit rate", value: "76%" },
      { label: "Tier-1 deflection", value: "8%" },
      { label: "WhatsApp coverage", value: "Business hours" },
    ],
    after: [
      { label: "Median first response", value: "45s" },
      { label: "SLA hit rate", value: "99.1%" },
      { label: "Tier-1 deflection", value: "72%" },
      { label: "WhatsApp coverage", value: "24/7" },
    ],
    outcomes: [
      { value: "−98%", label: "Response time" },
      { value: "72%", label: "Tier-1 deflected" },
      { value: "+23pts", label: "CSAT" },
    ],
    stack: ["Zendesk", "WhatsApp Business API", "Notion", "OpenAI", "Anthropic", "Internal eval harness"],
    duration: "5 weeks to production",
    quote: {
      text: "We stopped staffing for Tier-1 volume. The system handles three quarters of tickets at higher CSAT than our team did, and escalations land with full context.",
      name: "VP Customer Operations",
      role: "Series-B SaaS",
    },
  },
  {
    num: "02",
    industry: "Financial Services",
    region: "GCC",
    company: "Wealth advisory, ~60 advisors",
    headline: "Qualified pipeline grew 3.2× without adding headcount, after rebuilding inbound qualification.",
    context: "A regional wealth advisory was generating strong inbound from paid social and referrals, but only ~14% of leads ever received a personalised reply. SDRs defaulted to the obviously-large accounts and let the rest go cold.",
    problem: [
      "Median first response of 11 hours; nights and weekends entirely unstaffed",
      "No enrichment — leads went into CRM with form fields only",
      "ICP scoring lived as a spreadsheet, updated quarterly",
      "Forecast accuracy below 60% by mid-quarter",
    ],
    system: [
      { title: "Enrichment pipeline", body: "Every inbound lead enriched with firmographic and behavioural signals on submission, before any human or agent touches it." },
      { title: "Scoring model", body: "ICP rubric ported from spreadsheet to a live scoring service, version-controlled and back-tested against 24 months of closed-won data." },
      { title: "Real-time routing", body: "Top-tier scores auto-book onto an advisor's calendar; mid-tier handed to a nurture sequence operated by the agent; below-threshold disqualified with reason logged." },
    ],
    before: [
      { label: "First response", value: "11h" },
      { label: "Reply rate", value: "14%" },
      { label: "Lead → meeting", value: "6.1%" },
      { label: "Qualified pipeline / mo", value: "$3.2M" },
    ],
    after: [
      { label: "First response", value: "<60s" },
      { label: "Reply rate", value: "100%" },
      { label: "Lead → meeting", value: "19.4%" },
      { label: "Qualified pipeline / mo", value: "$10.3M" },
    ],
    outcomes: [
      { value: "3.2×", label: "Qualified pipeline" },
      { value: "−99%", label: "First response time" },
      { value: "+0", label: "Headcount added" },
    ],
    stack: ["HubSpot", "Clearbit", "Cal.com", "OpenAI", "Internal scoring service"],
    duration: "4 weeks to production",
    quote: {
      text: "We were leaving the majority of our inbound on the table. The qualification layer pays for itself every week.",
      name: "Head of Growth",
      role: "Wealth advisory",
    },
  },
  {
    num: "03",
    industry: "E-commerce Operations",
    region: "EU",
    company: "DTC brand group, 4 brands",
    headline: "11,200 operations hours returned per year by codifying back-office work into observable systems.",
    context: "A DTC group running four brands was operating ~40 critical workflows through spreadsheets, shared inboxes and group chat. Nothing was observable, owners were unclear, and a single person being on holiday could break invoicing for a week.",
    problem: [
      "70% of recurring ops work was copy-paste between tools",
      "No SLA or ownership defined for critical workflows",
      "Invoice follow-up handled in a personal inbox",
      "Inventory reconciliation done manually every Monday",
    ],
    system: [
      { title: "Workflow audit", body: "Mapped 38 workflows across the four brands, ranked by hours consumed and revenue exposure. Selected 14 for the first build phase." },
      { title: "Codified automations", body: "Each automation shipped with a trigger, an owner, an SLA, and an audit log. Human checkpoints kept on anything touching customer money." },
      { title: "Observability", body: "Single ops console showing every workflow, last run, success rate and queue depth. Anomalies routed to the right owner on Slack." },
    ],
    before: [
      { label: "Ops FTE on copy-paste", value: "6.4" },
      { label: "Avg. invoice → paid", value: "47 days" },
      { label: "Workflows with owner", value: "12 / 38" },
      { label: "Critical-path spreadsheets", value: "23" },
    ],
    after: [
      { label: "Ops FTE on copy-paste", value: "1.1" },
      { label: "Avg. invoice → paid", value: "19 days" },
      { label: "Workflows with owner", value: "38 / 38" },
      { label: "Critical-path spreadsheets", value: "0" },
    ],
    outcomes: [
      { value: "11.2k hrs", label: "Returned per year" },
      { value: "−60%", label: "DSO" },
      { value: "5.3 FTE", label: "Redeployed" },
    ],
    stack: ["Shopify", "Stripe", "Xero", "Notion", "Slack", "Internal workflow runtime"],
    duration: "9 weeks across two phases",
    quote: {
      text: "We didn't fire anyone. We moved five people off invoice chase and put them on merchandising. The business runs on rails now.",
      name: "COO",
      role: "DTC brand group",
    },
  },
];

const CaseStudies = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Case studies — selected work</p>
              <h1 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
                Systems shipped into <span className="font-serif-accent italic font-light text-primary">production</span>.
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9 md:pb-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A small set of detailed engagements. Names of customers redacted by request — metrics and architecture are unchanged.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-28 md:space-y-40">
          {CASES.map((c) => (
            <MotionElement key={c.num} animation="slideUp">
              <article className={`grid md:grid-cols-12 gap-10 md:gap-16 border-t border-border pt-10 md:pt-14 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
                {/* Meta */}
                <div className="md:col-span-3 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-muted-foreground tracking-widest">{c.num}</span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">{c.industry}</span>
                    </div>
                    <p className="text-[11px] font-mono text-muted-foreground/70">{c.region}</p>
                    <p className="text-sm text-foreground/70 mt-2">{c.company}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Duration</p>
                    <p className="text-sm text-foreground/80">{c.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Stack</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-muted-foreground" style={{ direction: "ltr" }}>
                      {c.stack.map((s) => <span key={s}>· {s}</span>)}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="md:col-span-9 space-y-10">
                  <h2 className="!text-3xl md:!text-5xl !leading-[1.05] tracking-[-0.03em] max-w-[24ch]">{c.headline}</h2>

                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">Context</p>
                      <p className="text-foreground/80 leading-relaxed">{c.context}</p>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">Problem</p>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        {c.problem.map((p, idx) => (
                          <li key={idx} className="flex items-baseline gap-2">
                            <span className="text-primary/70 text-xs">—</span>
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* The system */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-4">The system</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {c.system.map((b, idx) => (
                        <div key={idx} className="p-5 rounded-lg bg-card/60 hover:bg-card transition-colors">
                          <p className="text-xs font-mono text-primary/70 mb-2">0{idx + 1}</p>
                          <p className="text-sm font-semibold mb-2">{b.title}</p>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{b.body}</p>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Before / After */}
                  <div className="grid md:grid-cols-2 gap-6" style={{ direction: "ltr" }}>
                    <div className="p-6 rounded-lg bg-card/40">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-4">Before</p>
                      <dl className="space-y-3">
                        {c.before.map((m, idx) => (
                          <div key={idx} className="flex items-baseline justify-between gap-4">
                            <dt className="text-sm text-muted-foreground">{m.label}</dt>
                            <dd className="text-sm font-mono text-foreground/80">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="p-6 rounded-lg bg-card/60 ring-1 ring-primary/20">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-primary mb-4">After</p>
                      <dl className="space-y-3">
                        {c.after.map((m, idx) => (
                          <div key={idx} className="flex items-baseline justify-between gap-4">
                            <dt className="text-sm text-muted-foreground">{m.label}</dt>
                            <dd className="text-sm font-mono text-foreground">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>


                  {/* Outcomes strip */}
                  <div className="grid grid-cols-3 gap-px bg-border border border-border">
                    {c.outcomes.map((o, idx) => (
                      <div key={idx} className="bg-card px-4 py-5">
                        <div className="text-2xl md:text-3xl font-bold font-founders tracking-tight">{o.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-primary pl-6 py-2">
                    <p className="text-lg md:text-xl leading-snug text-foreground/90 font-serif-accent italic font-light">"{c.quote.text}"</p>
                    <footer className="mt-4 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">{c.quote.name} · {c.quote.role}</footer>
                  </blockquote>
                </div>
              </article>
            </MotionElement>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/70">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Want a similar engagement?</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.02] max-w-[20ch]">
                Bring us one workflow. We'll show you the <span className="font-serif-accent italic font-light text-primary">before / after</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-sm font-medium gap-2 group">
                  Book a Strategy Call
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;
