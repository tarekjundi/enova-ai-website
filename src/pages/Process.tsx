import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import {
  ArrowRight,
  MagnifyingGlass,
  FlowArrow,
  Cube,
  Rocket,
  ChartLineUp,
  FileText,
  Database,
  ShieldCheck,
  Gauge,
  Handshake,
} from "@phosphor-icons/react";

import { useLanguage } from "@/contexts/LanguageContext";


type Phase = {
  num: string;
  week: string;
  title: string;
  intent: string;
  body: string;
  inputs: string[];
  activities: string[];
  outputs: string[];
  Icon: React.ElementType;
};



const PHASES: Phase[] = [
  {
    num: "01",
    week: "Week 1",
    title: "Audit",
    intent: "Understand the business, the stack, and where time and revenue actually leak.",
    body: "We sit with operators — not just leadership — and rebuild the picture from the ground up. The outcome is a ranked list of automations by hours saved, revenue impact and implementation risk, plus a clear answer on what not to automate.",
    inputs: ["Org chart + tool inventory", "Access to CRM, support and ops tools (read-only)", "30–60 min interviews with 4–6 operators"],
    activities: ["Workflow shadowing across teams", "Quantitative time-on-task analysis", "Stack + data-flow mapping", "Risk + compliance review"],
    outputs: ["Workflow inventory (typically 25–60 workflows)", "Ranked opportunity list", "Quick-win shortlist", "Audit report"],
    Icon: MagnifyingGlass,
  },
  {
    num: "02",
    week: "Week 2",
    title: "Workflow Mapping",
    intent: "Turn the chosen workflows into precise, end-to-end specifications.",
    body: "Each selected workflow gets mapped as a directed graph: triggers, decisions, owners, SLAs, escalation paths, failure modes. This is the artifact that makes design and deployment fast — and the artifact your team keeps after we leave.",
    inputs: ["Selected workflow shortlist", "Sample data (anonymised) for each workflow", "Stakeholder interviews per workflow"],
    activities: ["End-to-end workflow diagramming", "Decision-point + escalation modelling", "SLA + ownership definition", "Eval criteria per workflow"],
    outputs: ["Per-workflow specification", "Eval rubric", "Integration matrix", "Sign-off from workflow owners"],
    Icon: FlowArrow,
  },
  {
    num: "03",
    week: "Week 2–3",
    title: "AI Systems Design",
    intent: "Architect the system the way a serious engineering team would.",
    body: "Model selection, routing, retrieval, guardrails, observability, cost ceilings. We choose boring where boring works and bespoke where it doesn't. Every design decision is documented with the trade-off behind it.",
    inputs: ["Approved workflow specifications", "Security + compliance constraints", "Existing infrastructure baseline"],
    activities: ["Model + provider selection", "Retrieval + memory design", "Guardrails + human-checkpoint design", "Cost + latency budgeting"],
    outputs: ["Reference architecture", "Model + provider plan", "Eval harness", "Security + cost review"],
    Icon: Cube,
  },
  {
    num: "04",
    week: "Week 3–4",
    title: "Deployment",
    intent: "Ship to production against real data, not a sandbox.",
    body: "Build, integrate, test against real traffic, and ship behind a feature flag with monitoring on day one. Human-in-the-loop on anything that touches customers or money until we've seen the metrics we agreed on in the spec.",
    inputs: ["Approved architecture", "Production credentials (scoped)", "Test cohort + rollback plan"],
    activities: ["Build + integration", "Eval against real historical data", "Shadow-mode rollout", "Gradual cutover with feature flags"],
    outputs: ["Production system", "Observability dashboard", "Runbooks", "Handover documentation"],
    Icon: Rocket,
  },
  {
    num: "05",
    week: "Ongoing",
    title: "Optimization",
    intent: "Keep the system honest as your business changes.",
    body: "Workflows drift. Models change. Edge cases surface. Monthly review against the metrics in the original spec, with adjustments to prompts, routing, retrieval and human checkpoints. Owned by your team, supported by ours.",
    inputs: ["Live production metrics", "User + operator feedback", "Quarterly business review inputs"],
    activities: ["Eval re-runs against new data", "Prompt + retrieval tuning", "Cost + latency optimisation", "New workflow intake"],
    outputs: ["Monthly performance report", "Tuned production system", "Updated runbooks", "Roadmap for next quarter"],
    Icon: ChartLineUp,
  },
];

const PRINCIPLES = [
  { num: "01", title: "Specification before code", body: "Every workflow is signed off by its owner before a line of integration code is written." },
  { num: "02", title: "Production data or nothing", body: "Evals run against your real historical data. No sandbox demos." },
  { num: "03", title: "Human-in-the-loop where it matters", body: "Anything touching a customer commitment or money keeps a human checkpoint until the metrics earn the agent's autonomy." },
  { num: "04", title: "Observability on day one", body: "Every workflow ships with a dashboard, an owner, and an SLA. If we can't measure it, we don't ship it." },
  { num: "05", title: "Yours to own", body: "Architecture, runbooks and credentials handed over. No black boxes, no lock-in to us." },
];

const Process = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Process — five phases</p>
              <h1 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
                From audit to production, in <span className="font-serif-accent italic font-light text-primary">four weeks</span>.
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9 md:pb-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                No multi-quarter strategy decks. A small, opinionated process that ships working systems against your real data — and hands them back to your team.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Timeline strip */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-5 gap-px bg-border border border-border" style={{ direction: "ltr" }}>
            {PHASES.map((p) => (
              <a key={p.num} href={`#phase-${p.num}`} className="bg-card px-4 py-5 hover:bg-secondary/40 transition-colors">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 mb-2">{p.week}</div>
                <div className="text-xs font-mono text-muted-foreground/70 mb-1">{p.num}</div>
                <div className="text-sm font-semibold tracking-tight">{p.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-24 md:space-y-32">
          {PHASES.map((p) => (
            <MotionElement key={p.num} animation="slideUp">
              <article id={`phase-${p.num}`} className={`grid md:grid-cols-12 gap-10 md:gap-16 border-t border-border pt-10 md:pt-14 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
                {/* Left: number + title */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{p.num}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">{p.week}</span>
                  </div>
                  <h2 className="!text-3xl md:!text-5xl !leading-[1.0] tracking-[-0.03em] mb-6">{p.title}</h2>
                  <p className="text-foreground/80 italic font-serif-accent font-light leading-relaxed">{p.intent}</p>
                </div>

                {/* Body */}
                <div className="md:col-span-5">
                  <p className="text-foreground/80 leading-relaxed text-lg max-w-prose">{p.body}</p>
                </div>

                {/* I/O column */}
                <div className="md:col-span-3 space-y-6">
                  {[
                    { label: "Inputs", items: p.inputs },
                    { label: "Activities", items: p.activities },
                    { label: "Outputs", items: p.outputs },
                  ].map((col) => (
                    <div key={col.label}>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-2">{col.label}</p>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        {col.items.map((it, idx) => (
                          <li key={idx} className="flex items-baseline gap-2">
                            <span className="text-primary/70 text-xs">—</span>
                            <span className="leading-snug">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </MotionElement>
          ))}
        </div>
      </section>

      {/* Operating principles */}
      <section className="py-24 md:py-32 border-t border-border/70">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Operating principles</p>
              <h2 className="!text-4xl md:!text-5xl !leading-[1.02] tracking-[-0.03em]">How we work, regardless of the phase.</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4">
              <p className="text-muted-foreground text-lg leading-relaxed">Five operating principles that hold across every engagement. They're the part of the process that doesn't change.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-x-12 gap-y-10">
            {PRINCIPLES.map((p, idx) => (
              <MotionElement key={p.num} animation="slideUp" delay={60 + idx * 60} className={`md:col-span-4 ${idx === 3 ? "md:col-start-3" : ""}`}>
                <div className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{p.num}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border/70">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-end ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Start with phase one</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.02] max-w-[20ch]">
                Audit first. Then we decide what to <span className="font-serif-accent italic font-light text-primary">build</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <p className="text-muted-foreground mb-8 max-w-md">30-minute working session to scope an audit against one of your workflows.</p>
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

export default Process;
