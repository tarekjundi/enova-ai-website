import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import {
  ArrowRight,
  MagnifyingGlass,
  Compass,
  Cube,
  Code,
  TestTube,
  Rocket,
  GraduationCap,
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
    week: "Discovery",
    title: "Discovery",
    intent: "Understand business goals, workflows, and where time and revenue actually leak.",
    body: "We sit with operators — not just leadership — and rebuild the picture from the ground up. The outcome is a clear map of goals, constraints, and the workflows worth touching first.",
    inputs: ["Access to CRM, support and ops tools (read-only)", "Interviews with 4–6 operators", "Tool + data inventory"],
    activities: ["Stakeholder interviews", "Workflow shadowing", "Stack + data-flow mapping"],
    outputs: ["Workflow inventory", "Prioritised pain-points", "Discovery report"],
    Icon: MagnifyingGlass,
  },
  {
    num: "02",
    week: "Strategy",
    title: "Strategy",
    intent: "Identify high-impact AI opportunities and define a practical roadmap.",
    body: "We rank opportunities by hours saved, revenue impact and implementation risk — and produce a phased roadmap with a clear answer on what not to automate.",
    inputs: ["Discovery report", "Business KPIs", "Budget + timeline constraints"],
    activities: ["Opportunity scoring", "Roadmap sequencing", "ROI + risk modelling"],
    outputs: ["Ranked opportunity list", "Phased roadmap", "Success metrics per initiative"],
    Icon: Compass,
  },
  {
    num: "03",
    week: "Solution Design",
    title: "Solution Design",
    intent: "Design custom AI workflows and system architecture the way a serious engineering team would.",
    body: "Model selection, routing, retrieval, guardrails, observability, cost ceilings. Boring where boring works, bespoke where it doesn't. Every decision documented with the trade-off behind it.",
    inputs: ["Approved roadmap", "Security + compliance constraints", "Existing infrastructure baseline"],
    activities: ["Workflow diagramming", "Reference architecture", "Guardrails + human-checkpoint design"],
    outputs: ["Per-workflow specification", "Reference architecture", "Integration matrix"],
    Icon: Cube,
  },
  {
    num: "04",
    week: "Development",
    title: "Development",
    intent: "Build, integrate, and configure the solution against your real stack.",
    body: "We engineer the automations, agents and integrations to spec — with clean code, scoped credentials, and infrastructure your team can maintain long after we leave.",
    inputs: ["Approved architecture", "Scoped production credentials", "Sample data for evals"],
    activities: ["Build + integration", "Prompt + retrieval implementation", "Eval harness construction"],
    outputs: ["Working system in staging", "Version-controlled codebase", "Initial eval results"],
    Icon: Code,
  },
  {
    num: "05",
    week: "Testing & Optimization",
    title: "Testing & Optimization",
    intent: "Validate, refine, and improve performance against real historical data.",
    body: "Every workflow is measured against the metrics agreed in the spec — accuracy, latency, cost — with adjustments to prompts, routing, retrieval and human checkpoints until it earns the right to ship.",
    inputs: ["Real historical data", "Success metrics per workflow", "Operator feedback"],
    activities: ["Eval runs against production data", "Prompt + retrieval tuning", "Cost + latency optimisation"],
    outputs: ["Passing eval suite", "Tuned system", "Sign-off from workflow owners"],
    Icon: TestTube,
  },
  {
    num: "06",
    week: "Deployment",
    title: "Deployment",
    intent: "Launch to production with minimal disruption — behind flags, with monitoring on day one.",
    body: "Feature-flagged rollouts, shadow mode, and gradual cutovers. Human-in-the-loop on anything that touches customers or money until the metrics earn the agent's autonomy.",
    inputs: ["Passing eval suite", "Rollback plan", "Test cohort"],
    activities: ["Shadow-mode rollout", "Gradual cutover", "Observability wiring"],
    outputs: ["Production system", "Observability dashboard", "Runbooks"],
    Icon: Rocket,
  },
  {
    num: "07",
    week: "Training",
    title: "Training",
    intent: "Train your team and hand over documentation so the system is genuinely yours.",
    body: "Live working sessions, written runbooks, and architecture walkthroughs. No black boxes, no lock-in. Your operators leave knowing how to run, debug and extend the system.",
    inputs: ["Production system", "Operator + admin cohorts", "Handover schedule"],
    activities: ["Live training sessions", "Runbook walkthroughs", "Admin + escalation training"],
    outputs: ["Trained team", "Handover documentation", "Support contacts"],
    Icon: GraduationCap,
  },
  {
    num: "08",
    week: "Continuous Improvement",
    title: "Continuous Improvement",
    intent: "Monitor, optimize and expand the solution as your business changes.",
    body: "Workflows drift. Models change. Edge cases surface. Monthly reviews against the original metrics, with tuning and new workflow intake — owned by your team, supported by ours.",
    inputs: ["Live production metrics", "User + operator feedback", "Quarterly business reviews"],
    activities: ["Eval re-runs against new data", "Prompt + routing tuning", "New workflow intake"],
    outputs: ["Monthly performance report", "Roadmap for next quarter", "Continually improving system"],
    Icon: ChartLineUp,
  },
];

const PRINCIPLES = [
  { num: "01", title: "Specification before code", body: "Every workflow is signed off by its owner before a line of integration code is written.", Icon: FileText },
  { num: "02", title: "Production data or nothing", body: "Evals run against your real historical data. No sandbox demos.", Icon: Database },
  { num: "03", title: "Human-in-the-loop where it matters", body: "Anything touching a customer commitment or money keeps a human checkpoint until the metrics earn the agent's autonomy.", Icon: ShieldCheck },
  { num: "04", title: "Observability on day one", body: "Every workflow ships with a dashboard, an owner, and an SLA. If we can't measure it, we don't ship it.", Icon: Gauge },
  { num: "05", title: "Yours to own", body: "Architecture, runbooks and credentials handed over. No black boxes, no lock-in to us.", Icon: Handshake },
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
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">Process — eight stages</p>
              <h1 className="!text-5xl md:!text-7xl !leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
                From discovery to continuous improvement, <span className="font-serif-accent italic font-light text-primary">a process built to ship</span>.
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

      {/* Timeline strip — 8 stages, animated progression */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="relative" style={{ direction: "ltr" }}>
            {/* connecting line */}
            <div className="hidden md:block absolute top-[30px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-4 md:gap-x-2 relative">
              {PHASES.map((p, i) => (
                <MotionElement key={p.num} animation="slideUp" delay={60 + i * 60}>
                  <a href={`#phase-${p.num}`} className="group flex flex-col items-start md:items-center text-left md:text-center">
                    <div className="relative mb-4">
                      <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <div className="relative w-[60px] h-[60px] rounded-full bg-background border border-primary/40 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:border-primary">
                        <p.Icon size={22} weight="regular" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background border border-border/70 flex items-center justify-center text-[9px] font-semibold text-primary/80">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-sm font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors px-1">{p.title}</div>
                  </a>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-20 md:space-y-28">
          {PHASES.map((p, i) => (
            <MotionElement key={p.num} animation="slideUp">
              <article
                id={`phase-${p.num}`}
                className={`group relative grid md:grid-cols-12 gap-10 md:gap-16 pt-10 md:pt-14 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}
              >
                {/* hairline that grows on hover */}
                <div className="absolute top-0 left-0 h-px w-16 bg-primary/60 transition-all duration-700 group-hover:w-full" />

                {/* Left: icon + number + title */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <p.Icon size={20} weight="regular" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tracking-widest">{p.num}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">{p.week}</span>
                  </div>
                  <h2 className="!text-3xl md:!text-5xl !leading-[1.0] tracking-[-0.03em] mb-6 transition-colors duration-500 group-hover:text-primary">
                    {p.title}
                  </h2>
                  <p className="text-foreground/80 italic font-serif-accent font-light leading-relaxed text-lg">{p.intent}</p>
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
                      <p className="text-[10px] uppercase tracking-[0.22em] text-primary/70 mb-2">{col.label}</p>
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

      {/* Operating principles — animated card grid */}
      <section className="py-24 md:py-32 border-t border-border/70 bg-card/20">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">Operating principles</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.02] tracking-[-0.03em]">
                How we work, <span className="font-serif-accent italic font-light text-primary">regardless of the phase.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4">
              <p className="text-muted-foreground text-lg leading-relaxed">Five operating principles that hold across every engagement. They're the part of the process that doesn't change.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRINCIPLES.map((p, idx) => (
              <MotionElement key={p.num} animation="slideUp" delay={60 + idx * 80}>
                <div className="group relative h-full p-8 rounded-xl bg-background/40 hover:bg-background/80 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* accent line */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <p.Icon size={22} weight="regular" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/60 tracking-widest">{p.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
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
