import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

type Service = {
  num: string;
  category: string;
  title: string;
  problem: string;
  impact: string;
  workflow: string[];
  deliverables: string[];
  outcomes: { value: string; label: string }[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    category: "Revenue",
    title: "AI Sales Systems",
    problem: "Sales teams spend more time on admin, CRM hygiene and chasing cold pipeline than they do closing. Reps work in silos, data rots, and forecast accuracy collapses by Q3.",
    impact: "A connected sales operating layer: inbound and outbound coordinated, every conversation logged with context, every account scored in real time against your ICP.",
    workflow: [
      "Lead source → enrichment → ICP scoring",
      "Personalised outreach drafted from account context",
      "CRM activity logged, deals advanced or disqualified",
      "AE briefed with one-page account summary before each call",
    ],
    deliverables: ["Sales agent + CRM integration", "ICP scoring model", "Outreach playbook", "Weekly forecast dashboard"],
    outcomes: [
      { value: "3.2×", label: "Qualified pipeline" },
      { value: "−68%", label: "Time on CRM admin" },
    ],
  },
  {
    num: "02",
    category: "Revenue",
    title: "AI Lead Qualification",
    problem: "Most inbound leads never get a real reply. SDR teams default to obvious accounts and let the rest sit in a stale queue until they go cold.",
    impact: "Every inbound lead enriched, scored against your ICP and replied to in under 60 seconds — with context, not a template.",
    workflow: [
      "Form / chat / inbox capture",
      "Enrichment (firmographic + intent)",
      "Scoring against ICP rubric",
      "Routing: book directly, nurture, or disqualify",
    ],
    deliverables: ["Qualification model", "Enrichment pipeline", "Real-time routing rules", "Audit dashboard per source"],
    outcomes: [
      { value: "<60s", label: "First response" },
      { value: "+47%", label: "Lead-to-meeting" },
    ],
  },
  {
    num: "03",
    category: "Revenue",
    title: "AI Appointment Setting",
    problem: "Booking a meeting takes 6+ emails. Half of qualified leads drop out in the scheduling thread.",
    impact: "An agent that holds the calendar conversation end-to-end, proposes slots, handles reschedules, and warms the prospect with a pre-meeting brief.",
    workflow: [
      "Qualified lead handoff",
      "Calendar negotiation across timezones",
      "Confirmations, reminders, reschedules",
      "Pre-call brief sent to both sides",
    ],
    deliverables: ["Scheduling agent", "Cal.com / Google Calendar integration", "Pre-meeting briefing template"],
    outcomes: [
      { value: "94%", label: "Show-up rate" },
      { value: "−5 days", label: "Time to meeting" },
    ],
  },
  {
    num: "04",
    category: "Support",
    title: "AI Customer Support Operations",
    problem: "Tier-1 volume eats your team. Response times stretch past SLA. Repeat questions get inconsistent answers because the knowledge lives in five places.",
    impact: "An always-on Tier-1 layer that resolves 60–80% of tickets using your real docs and history, and escalates clean handoffs only.",
    workflow: [
      "Ticket ingest from email, chat, WhatsApp",
      "Intent classification + KB retrieval",
      "Draft or auto-send reply with confidence scoring",
      "Escalation with full context to a human agent",
    ],
    deliverables: ["Support agent across channels", "KB ingestion pipeline", "Escalation rubric", "Quality review dashboard"],
    outcomes: [
      { value: "72%", label: "Tier-1 deflection" },
      { value: "45s", label: "Median response" },
    ],
  },
  {
    num: "05",
    category: "Operations",
    title: "Internal Workflow Automation",
    problem: "Critical work moves through spreadsheets, group chats and copy-paste between tools. Nobody can see status until something breaks.",
    impact: "Workflows codified as systems — triggers, owners, SLAs, observability — so the business runs on rails instead of memory.",
    workflow: [
      "Workflow audit + mapping",
      "Automation design with human checkpoints",
      "Build + integration with existing stack",
      "Observability + ownership in place from day one",
    ],
    deliverables: ["Workflow library", "Audit log", "Owner + SLA per workflow", "Monthly hours-saved report"],
    outcomes: [
      { value: "11k hrs", label: "Returned per year" },
      { value: "0", label: "Spreadsheets in critical path" },
    ],
  },
  {
    num: "06",
    category: "Operations",
    title: "CRM Automation",
    problem: "Your CRM is the source of truth — except it's full of duplicates, stale fields and deals nobody owns. Reporting becomes fiction.",
    impact: "A clean, self-maintaining CRM: enrichment on every record, owner assignment, stage hygiene, and rollups your leadership team actually trusts.",
    workflow: [
      "Audit + dedupe of existing records",
      "Enrichment + stage-change automation",
      "Owner routing + reminders",
      "Executive rollups + cohort dashboards",
    ],
    deliverables: ["CRM cleanup", "Enrichment automations", "Routing rules", "Leadership dashboard"],
    outcomes: [
      { value: "−92%", label: "Duplicate records" },
      { value: "100%", label: "Stage compliance" },
    ],
  },
  {
    num: "07",
    category: "Operations",
    title: "AI Email Operations",
    problem: "Shared inboxes (sales@, accounts@, ops@) become bottlenecks. Important threads get missed, response time is unpredictable.",
    impact: "An email operator that triages every thread, drafts responses in your voice, escalates the rest, and keeps a clean audit trail.",
    workflow: [
      "Inbox ingest + classification",
      "Draft or auto-reply by category",
      "Escalation routing to the right owner",
      "Daily inbox health report",
    ],
    deliverables: ["Inbox triage agent", "Reply templates trained on your tone", "Escalation matrix"],
    outcomes: [
      { value: "<5 min", label: "Median triage" },
      { value: "0", label: "Missed threads" },
    ],
  },
  {
    num: "08",
    category: "Channels",
    title: "WhatsApp AI Systems",
    problem: "WhatsApp is the primary channel in MENA and LATAM, but most teams run it manually from a phone, with no CRM trail and no SLA.",
    impact: "A compliant WhatsApp business layer: qualification, booking, support and follow-up — fully logged, fully observable.",
    workflow: [
      "WhatsApp Business API setup",
      "Intent routing: sales / support / ops",
      "Agent responses with KB + CRM context",
      "Conversation history synced to CRM",
    ],
    deliverables: ["WhatsApp agent", "CRM sync", "Compliance + opt-in flow", "Conversation analytics"],
    outcomes: [
      { value: "24/7", label: "Coverage" },
      { value: "+38%", label: "Reply rate vs. email" },
    ],
  },
  {
    num: "09",
    category: "Infrastructure",
    title: "AI Knowledge Bases",
    problem: "Knowledge is scattered across Notion, Drive, Slack threads and the heads of three senior people. Onboarding is slow, answers are inconsistent.",
    impact: "A single retrieval layer your agents and your team query — versioned, permissioned, and updated automatically from source.",
    workflow: [
      "Source connectors (Notion, Drive, Confluence, Zendesk)",
      "Chunking + embedding pipeline",
      "Permissioned retrieval layer",
      "Continuous re-indexing on source changes",
    ],
    deliverables: ["Unified KB index", "Query API for agents + internal tools", "Source freshness monitoring"],
    outcomes: [
      { value: "1 source", label: "Of truth" },
      { value: "−63%", label: "Onboarding time" },
    ],
  },
  {
    num: "10",
    category: "Channels",
    title: "AI Voice Agents",
    problem: "Phone is still where high-intent leads and high-value support live — and it's the channel humans can't scale.",
    impact: "Voice agents that handle inbound calls, outbound qualification, and after-hours coverage with the same context as your CRM agents.",
    workflow: [
      "Telephony integration (Twilio / Vonage)",
      "Intent + entity extraction in-call",
      "Live KB + CRM lookups during conversation",
      "Call summary + next-action written to CRM",
    ],
    deliverables: ["Voice agent", "Call summaries to CRM", "Live transfer to humans", "Recording + QA dashboard"],
    outcomes: [
      { value: "100%", label: "Calls answered" },
      { value: "<2 rings", label: "Pickup" },
    ],
  },
  {
    num: "11",
    category: "Infrastructure",
    title: "AI Reporting Systems",
    problem: "Leadership decisions wait on a weekly deck someone builds by hand. By the time it lands, the numbers are stale.",
    impact: "Live operational reporting pulled from your real systems — revenue, pipeline, support load, agent performance — delivered where leadership actually reads it.",
    workflow: [
      "Source connections (CRM, billing, support, product)",
      "Metric definitions + ownership",
      "Daily / weekly digest generation",
      "Anomaly alerts to the right channel",
    ],
    deliverables: ["Metrics catalog", "Executive digest", "Anomaly alerting", "Self-serve dashboard"],
    outcomes: [
      { value: "Daily", label: "Cadence" },
      { value: "0", label: "Manual decks" },
    ],
  },
  {
    num: "12",
    category: "Infrastructure",
    title: "Custom AI Infrastructure",
    problem: "Off-the-shelf tools can't model your business. You need agents, pipelines and integrations built around your real data and your real workflows.",
    impact: "A bespoke AI layer: model routing, evaluation, guardrails, observability and the integrations your stack actually needs — owned by you.",
    workflow: [
      "Architecture + model selection",
      "Eval harness + guardrails",
      "Integrations with internal services",
      "Observability + cost monitoring",
    ],
    deliverables: ["Reference architecture", "Eval + monitoring stack", "Custom integrations", "Handover documentation"],
    outcomes: [
      { value: "Owned", label: "By your team" },
      { value: "SOC 2", label: "Ready" },
    ],
  },
];

const Services = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Services — 12 systems</p>
              <h1 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
                Operational AI systems, built around your <span className="font-serif-accent italic font-light text-primary">stack</span>.
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9 md:pb-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each engagement is scoped against a specific workflow, with measurable operational outcomes and a clean handover to your team.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Category index */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-foreground/70">Index</span>
            <span>· Revenue (01–03)</span>
            <span>· Support (04)</span>
            <span>· Operations (05–07)</span>
            <span>· Channels (08, 10)</span>
            <span>· Infrastructure (09, 11, 12)</span>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-24 md:space-y-32">
          {SERVICES.map((s, i) => (
            <MotionElement key={s.num} animation="slideUp" delay={60}>
              <article className={`grid md:grid-cols-12 gap-10 md:gap-16 border-t border-border pt-10 md:pt-14 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
                {/* Left meta */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{s.num}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">{s.category}</span>
                  </div>
                  <h2 className="!text-2xl md:!text-3xl !leading-[1.05] tracking-tight">{s.title}</h2>
                </div>

                {/* Body */}
                <div className="md:col-span-6 space-y-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-2">Problem</p>
                    <p className="text-foreground/80 leading-relaxed">{s.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-2">Operational impact</p>
                    <p className="text-foreground/80 leading-relaxed">{s.impact}</p>
                  </div>

                  {/* Workflow diagram (text-based) */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">Workflow</p>
                    <ol className="space-y-2 font-mono text-[12px] text-foreground/85" style={{ direction: "ltr" }}>
                      {s.workflow.map((step, idx) => (
                        <li key={idx} className="flex items-baseline gap-3">
                          <span className="text-muted-foreground/60 text-[10px] w-6 shrink-0">0{idx + 1}</span>
                          <span className="text-muted-foreground/40">→</span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Sidebar: deliverables + outcomes */}
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">Deliverables</p>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {s.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-baseline gap-2">
                          <span className="text-primary/70 text-xs">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-border border border-border">
                    {s.outcomes.map((o, idx) => (
                      <div key={idx} className="bg-card px-3 py-4">
                        <div className="text-xl font-bold font-founders tracking-tight">{o.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>
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
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Next step</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.02] max-w-[20ch]">
                Pick one workflow. We'll show you what to <span className="font-serif-accent italic font-light text-primary">automate first</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <p className="text-muted-foreground mb-8 max-w-md">30-minute working session. We review one of your workflows live and map the system end-to-end.</p>
              <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 py-6 rounded-sm font-medium gap-2 group">
                  Book a working session
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

export default Services;
