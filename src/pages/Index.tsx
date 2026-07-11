import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, ArrowUpRight, Lightning, Robot, FlowArrow, Megaphone, TrendUp, UsersThree, Headset, BookOpen, ChartBar, MagnetStraight, Gear, Code, PlugsConnected, UserGear, Sparkle, Briefcase, StackSimple, Handshake, PuzzlePiece, ShieldCheck, ChatCircleDots, Compass, Wrench } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { isRTL } = useLanguage();

  const services = [
    {
      title: "AI Automation",
      Icon: Lightning,
      desc: "Automate repetitive, multi-step processes across the tools your team already uses.",
      bestFor: "Operations teams weighed down by manual work.",
      outcomes: ["30–70% fewer manual hours", "Fewer errors", "Faster cycle times", "Scales without new hires"],
    },
    {
      title: "AI Agents",
      Icon: Robot,
      desc: "Agents that take action inside your systems — with clear permissions and audit trails.",
      bestFor: "Teams moving from copilots to autonomous workflows.",
      outcomes: ["24/7 execution", "Bounded, auditable actions", "Human review where it matters", "Portable across tools"],
    },
    {
      title: "Workflow Automation",
      Icon: FlowArrow,
      desc: "Resilient workflows that connect the tools your team already relies on.",
      bestFor: "Companies with fragmented stacks and manual handoffs.",
      outcomes: ["Zero-touch handoffs", "Reliable SLAs", "Observability on day one", "Owned by your team"],
    },
    {
      title: "Marketing Automation",
      Icon: Megaphone,
      desc: "Content, campaigns and lifecycle flows produced at scale — on brand and on tempo.",
      bestFor: "Growth teams shipping faster than they can produce.",
      outcomes: ["Higher engagement", "Lower cost per lead", "Consistent brand voice", "Faster iteration"],
    },
    {
      title: "Sales Automation",
      Icon: TrendUp,
      desc: "Automated prospecting, follow-up and pipeline hygiene without losing your reps' voice.",
      bestFor: "Revenue teams with strong offers and thin coverage.",
      outcomes: ["More qualified pipeline", "Faster follow-ups", "Cleaner CRM data", "Higher rep leverage"],
    },
    {
      title: "CRM Automation",
      Icon: UsersThree,
      desc: "Enrichment, routing, scoring and activity capture — kept accurate automatically.",
      bestFor: "RevOps leaders whose CRM is a source of truth in name only.",
      outcomes: ["Reliable pipeline data", "Automated enrichment", "Better forecasting", "Less admin for reps"],
    },
    {
      title: "Customer Support AI",
      Icon: Headset,
      desc: "Tier-1 automation and agent copilots trained on your product, policies and past tickets.",
      bestFor: "Support teams facing rising volume and flat headcount.",
      outcomes: ["Sub-minute first response", "Higher CSAT", "Lower cost per ticket", "Senior agents freed up"],
    },
    {
      title: "AI Knowledge Base",
      Icon: BookOpen,
      desc: "Turn scattered docs, tickets and conversations into one searchable source of truth.",
      bestFor: "Teams where the answer exists but no one can find it.",
      outcomes: ["Faster onboarding", "Consistent answers", "Less tribal knowledge", "Always up to date"],
    },
    {
      title: "Business Intelligence & Analytics",
      Icon: ChartBar,
      desc: "Pipelines, dashboards and forecasts your leaders actually use to decide.",
      bestFor: "Leaders making calls on instinct because the data isn't ready in time.",
      outcomes: ["Decision-ready dashboards", "Trusted forecasts", "Faster reporting", "One source of truth"],
    },
    {
      title: "Lead Generation Systems",
      Icon: MagnetStraight,
      desc: "Systems that source, enrich and route qualified leads directly into your sales motion.",
      bestFor: "B2B teams that need predictable, high-intent pipeline.",
      outcomes: ["Consistent lead flow", "Higher lead quality", "Lower CAC", "Repeatable playbooks"],
    },
    {
      title: "Process Optimization",
      Icon: Gear,
      desc: "Identify bottlenecks and redesign the process before automating it.",
      bestFor: "Companies scaling past 50 people and feeling operational drag.",
      outcomes: ["Shorter cycle times", "Clear ownership", "Fewer bottlenecks", "Ready to automate"],
    },
    {
      title: "Custom AI Development",
      Icon: Code,
      desc: "AI features engineered for your product, your users and your constraints.",
      bestFor: "Product teams shipping AI as a core differentiator.",
      outcomes: ["Production-grade features", "Model and cost control", "Owned architecture", "No vendor lock-in"],
    },
    {
      title: "AI Integrations",
      Icon: PlugsConnected,
      desc: "Connect models, agents and pipelines to your existing tools, data and APIs.",
      bestFor: "Teams with mature stacks that need AI to plug in cleanly.",
      outcomes: ["Seamless data flow", "Secure, scoped access", "Reusable connectors", "Faster time to value"],
    },
    {
      title: "Internal AI Assistants",
      Icon: UserGear,
      desc: "Private copilots trained on your data — for finance, HR, legal, engineering and operations.",
      bestFor: "Teams that need AI leverage without leaking data to public tools.",
      outcomes: ["Private and compliant", "Role-specific workflows", "Faster internal answers", "Measurable adoption"],
    },
  ];

  const cases = [
    {
      industry: "B2B SaaS",
      challenge: "Manual customer support with 8-hour first response times and a growing ticket backlog.",
      solution: "AI support assistant handling tier-1 tickets, with clear escalation rules to humans.",
      result: "67%",
      resultLabel: "faster response times",
    },
    {
      industry: "Financial Services",
      challenge: "AR team spending 12 hours a week chasing invoices across 400+ accounts.",
      solution: "Automated collection workflow with tone-aware reminders and payment plan offers.",
      result: "$182k",
      resultLabel: "recovered in 90 days",
    },
    {
      industry: "E-commerce Operations",
      challenge: "Inventory forecasting done manually in spreadsheets, with frequent stockouts on top SKUs.",
      solution: "Forecasting pipeline with reorder agents writing back to the ERP.",
      result: "31%",
      resultLabel: "reduction in stockouts",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[94vh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className={`grid lg:grid-cols-12 gap-14 lg:gap-20 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>
            {/* LEFT */}
            <div className={`lg:col-span-6 ${isRTL ? "text-right" : ""}`}>
              <MotionElement animation="slideUp" delay={40}>
                <div className={`inline-flex items-center gap-2.5 mb-8 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-primary/90 font-medium">
                    AI consulting for growing companies
                  </span>
                </div>
              </MotionElement>

              <MotionElement animation="slideUp" delay={120}>
                <h1 className="mb-7 text-foreground !text-[52px] sm:!text-[64px] lg:!text-[80px] !leading-[1.02] tracking-[-0.035em] font-semibold">
                  Run leaner. Grow{" "}
                  <span className="text-primary">faster.</span>
                </h1>
              </MotionElement>

              <MotionElement animation="slideUp" delay={200}>
                <p className="text-muted-foreground text-lg md:text-xl leading-[1.65] max-w-2xl mb-10">
                  Enova builds AI systems that take repetitive work off your operations, sales and support teams — designed around your workflows, integrated into your stack, and owned by your team.
                </p>
              </MotionElement>

              <MotionElement animation="slideUp" delay={260}>
                <ul className={`flex flex-wrap gap-x-6 gap-y-2.5 mb-10 ${isRTL ? "justify-end" : ""}`}>
                  {["Custom-built systems", "Delivered in weeks", "No vendor lock-in"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ShieldCheck size={14} weight="fill" className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </MotionElement>

              <MotionElement animation="slideUp" delay={320}>
                <div className={`flex flex-wrap items-center gap-4 ${isRTL ? "justify-end" : ""}`}>
                  <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 h-12 rounded-md font-medium gap-2 group shadow-lg shadow-primary/10">
                      Book a Consultation
                      <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                    </Button>
                  </a>
                  <Link to="/services">
                    <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent text-sm px-5 h-12 rounded-md font-medium gap-2 group border border-border hover:border-primary/50">
                      View Our Services
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground/80 mt-5">
                  30-minute call · No obligation · Reply within one business day
                </p>
              </MotionElement>
            </div>

            {/* RIGHT — premium dashboard */}
            <div className="lg:col-span-6">
              <MotionElement animation="slideUp" delay={220}>
                <div className="relative">
                  {/* soft accent glow, very subtle */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-2xl opacity-60 pointer-events-none" />

                  <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">
                    {/* window chrome */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/40">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground">enova.ops / operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>live</span>
                      </div>
                    </div>

                    <div style={{ direction: "ltr" }} className="p-6">
                      {/* heading */}
                      <div className="flex items-baseline justify-between mb-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Overview</p>
                          <h4 className="text-base font-semibold tracking-tight">Operations · Today</h4>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">Jun 22, 2026</span>
                      </div>

                      {/* KPI strip */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {[
                          { l: "Runs", v: "8,412", d: "+12.4%" },
                          { l: "Success", v: "99.4%", d: "+0.08%" },
                          { l: "Saved", v: "184h", d: "this week" },
                        ].map((k) => (
                          <div key={k.l} className="rounded-md border border-border bg-background/40 px-3.5 py-3">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1.5">{k.l}</div>
                            <div className="text-xl font-semibold tracking-tight">{k.v}</div>
                            <div className="text-[10px] text-primary/80 font-mono mt-1">{k.d}</div>
                          </div>
                        ))}
                      </div>

                      {/* workflow rows */}
                      <div className="rounded-md border border-border overflow-hidden">
                        <div className="grid grid-cols-[1.8fr_0.7fr_0.6fr] gap-3 px-4 py-2.5 bg-secondary/40 border-b border-border text-[9px] uppercase tracking-wider text-muted-foreground font-mono">
                          <span>Workflow</span>
                          <span className="text-right">Runs / hr</span>
                          <span className="text-right">Status</span>
                        </div>
                        {[
                          { name: "support.triage.tier1", stack: "Intercom · Zendesk", runs: "1,284", s: "live" },
                          { name: "lead.qualify.inbound", stack: "HubSpot · OpenAI", runs: "342", s: "live" },
                          { name: "invoice.followup.AR", stack: "Stripe · Gmail", runs: "58", s: "live" },
                          { name: "contract.review.legal", stack: "Notion · Anthropic", runs: "12", s: "queued" },
                        ].map((r) => (
                          <div key={r.name} className="grid grid-cols-[1.8fr_0.7fr_0.6fr] gap-3 px-4 py-3 border-b border-border/60 last:border-b-0 items-center">
                            <div className="min-w-0">
                              <div className="text-[12px] font-mono text-foreground truncate">{r.name}</div>
                              <div className="text-[10px] text-muted-foreground truncate mt-0.5">{r.stack}</div>
                            </div>
                            <span className="text-[12px] font-mono text-right text-foreground/80">{r.runs}</span>
                            <span className="flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground font-mono">
                              <span className={`w-1.5 h-1.5 rounded-full ${r.s === "live" ? "bg-primary" : "bg-muted-foreground/40"}`} />
                              {r.s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST BAND ============== */}
      <section className="border-t border-border/60 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6 lg:px-10 py-24 md:py-32">
          <MotionElement animation="slideUp">
            <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">Proven results</p>
            <h2 className="!text-4xl md:!text-6xl lg:!text-7xl !leading-[1.02] tracking-[-0.04em] max-w-[20ch] font-semibold mb-16">
              Built for companies that <span className="font-serif-accent text-primary">measure outcomes.</span>
            </h2>
          </MotionElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-24">
            {[
              { v: "25+", l: "Projects delivered", d: "Across 12 industries and 4 continents" },
              { v: "98%", l: "Client satisfaction", d: "Based on post-engagement reviews" },
              { v: "50K+", l: "Hours automated", d: "Manual work removed for our clients" },
            ].map((s, i) => (
              <MotionElement key={s.l} animation="slideUp" delay={100 + i * 100}>
                <div>
                  <p className="!text-6xl md:!text-7xl lg:!text-8xl font-semibold tracking-[-0.045em] text-foreground leading-none mb-5">{s.v}</p>
                  <div className="w-10 h-px bg-primary/60 mb-4" />
                  <p className="text-foreground text-base font-medium mb-1.5">{s.l}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                </div>
              </MotionElement>
            ))}
          </div>

          {/* Trusted-by logo strip (placeholders — swap with client logos) */}
          <MotionElement animation="slideUp" delay={200}>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 mb-8">Trusted by teams at</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center">
              {["Northwind", "Vantage", "Halcyon", "Meridian", "Kestrel", "Ridgeline"].map((name) => (
                <div
                  key={name}
                  className="text-center text-foreground/40 hover:text-foreground/80 transition-colors duration-300 text-lg md:text-xl font-semibold tracking-[-0.02em]"
                >
                  {name}
                </div>
              ))}
            </div>
          </MotionElement>
        </div>
      </section>

      {/* ============== INDUSTRIES MARQUEE ============== */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80 mb-4">Industries served</p>
              <h2 className="!text-3xl md:!text-5xl !leading-[1.05] tracking-[-0.03em] max-w-[24ch] font-semibold">
                Working across <span className="font-serif-accent text-primary">twenty industries.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              From regulated enterprises to fast-moving operators — the pattern holds.
            </p>
          </div>
        </div>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee">
            {(() => {
              const industries = [
                "Healthcare", "Finance", "Banking", "Insurance", "Real Estate",
                "Construction", "Manufacturing", "Logistics", "Retail", "E-commerce",
                "Hospitality", "Restaurants", "Education", "Legal", "Marketing Agencies",
                "Consulting Firms", "Automotive", "SaaS", "Technology", "Human Resources",
              ];
              return [...industries, ...industries].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 px-8 py-6 shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="text-foreground/90 text-xl md:text-2xl font-medium tracking-[-0.01em] whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>{/* /industries */}




      {/* ============== SERVICES PREVIEW (concise) ============== */}
      <section id="features" className="py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">What we do</p>
                <h2 className="!text-4xl md:!text-6xl lg:!text-7xl !leading-[1.02] tracking-[-0.04em] max-w-[16ch] font-semibold">
                  AI, delivered as <span className="font-serif-accent text-primary">working systems.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-6">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-muted-foreground text-base md:text-lg leading-[1.7]">
                  Six core practices. Every deliverable custom-built, documented and owned by your team.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[
              { title: "AI Automation", Icon: Lightning, desc: "Automate multi-step processes across the tools your team already uses." },
              { title: "AI Agents", Icon: Robot, desc: "Agents that act inside your systems, with guardrails and full audit trails." },
              { title: "Sales & CRM Automation", Icon: TrendUp, desc: "Cleaner pipeline, faster follow-ups and higher rep leverage — without new hires." },
              { title: "Customer Support AI", Icon: Headset, desc: "Tier-1 automation and copilots trained on your product and past tickets." },
              { title: "Custom AI Development", Icon: Code, desc: "AI features engineered for your product, your users and your constraints." },
              { title: "AI Integrations", Icon: PlugsConnected, desc: "Connect models, data and tools cleanly into your stack — no lock-in." },
            ].map((s, i) => (
              <MotionElement key={s.title} animation="slideUp" delay={40 + (i % 3) * 60}>
                <Link
                  to="/services"
                  className="group relative h-full flex flex-col bg-card/40 hover:bg-card/70 border border-border/50 hover:border-primary/40 rounded-[18px] p-8 md:p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-7 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <s.Icon size={20} weight="regular" />
                  </div>
                  <h3 className="!text-[20px] md:!text-[22px] font-semibold tracking-[-0.02em] mb-3 leading-[1.2] group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-[1.65] mb-6 flex-1">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-auto transition-all duration-300 group-hover:gap-2.5">
                    Learn more
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </MotionElement>
            ))}
          </div>

          <MotionElement animation="slideUp" delay={200}>
            <div className="mt-16 flex justify-center">
              <Link to="/services">
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent text-sm px-6 h-12 rounded-md font-medium gap-2 group border border-border hover:border-primary/50">
                  View all services
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </MotionElement>
        </div>
      </section>

      {/* ============== WHY CHOOSE ENOVA ============== */}
      <section className="py-28 md:py-40 border-t border-border/60 bg-card/20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-20 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">Why Enova</p>
                <h2 className="!text-4xl md:!text-6xl lg:!text-7xl !leading-[1.02] tracking-[-0.04em] max-w-[18ch] font-semibold">
                  A partner, <span className="font-serif-accent text-primary">not another vendor.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-6">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-muted-foreground text-base md:text-lg leading-[1.7]">
                  Six commitments that shape every engagement — from the first call through production and beyond.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[
              { Icon: PuzzlePiece, title: "Custom solutions", desc: "No templates or off-the-shelf products. Every system is designed for your workflows, data and constraints." },
              { Icon: Briefcase, title: "Business first", desc: "We start with the outcome — revenue, hours, quality — then choose the technology that gets you there." },
              { Icon: StackSimple, title: "Built to scale", desc: "Production-grade from day one. Designed to handle 10× your current volume without rework." },
              { Icon: Handshake, title: "Long-term partnership", desc: "Engagements don't end at launch. We monitor, refine and expand alongside your team." },
              { Icon: PlugsConnected, title: "Clean integrations", desc: "Deployed into the tools you already use — CRM, helpdesk, ERP, data warehouse — with no disruption." },
              { Icon: ShieldCheck, title: "Full ownership", desc: "You own the code, the models and the documentation. No black boxes. No lock-in." },
            ].map((v, i) => (
              <MotionElement key={v.title} animation="slideUp" delay={60 + (i % 3) * 60}>
                <div className="group h-full flex flex-col bg-background/40 hover:bg-background/70 border border-border/50 hover:border-primary/40 rounded-[18px] p-8 md:p-9 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <v.Icon size={20} weight="regular" />
                  </div>
                  <h3 className="!text-[19px] md:!text-[21px] font-semibold tracking-[-0.02em] mb-3 leading-[1.2]">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-[1.65]">
                    {v.desc}
                  </p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>


      {/* ============== CASE STUDIES ============== */}
      <section className="py-32 md:py-48 bg-card/30 border-t border-border/60">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-16 mb-24 ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">Case studies</p>
                <h2 className="!text-4xl md:!text-6xl lg:!text-7xl !leading-[1.02] tracking-[-0.04em] max-w-[18ch] font-semibold">
                  Measured the way <span className="font-serif-accent text-primary">your CFO measures.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-3 md:col-start-10 md:pt-6 flex items-start md:items-end">
              <MotionElement animation="slideUp" delay={120}>
                <Link to="/case-studies" className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all border-b border-primary/40 pb-0.5">
                  View all case studies <ArrowRight size={14} />
                </Link>
              </MotionElement>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {cases.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={100 + i * 80}>
                <div className="group bg-background/40 hover:bg-background/70 transition-all duration-500 rounded-xl p-8 md:p-12 hover:-translate-y-1">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-3">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-primary/70 mb-3">Industry</p>
                      <p className="text-foreground text-xl md:text-2xl font-semibold tracking-tight">{c.industry}</p>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-muted-foreground text-[15px] leading-[1.7] mb-3">
                        <span className="text-foreground/90 font-medium">Challenge.</span> {c.challenge}
                      </p>
                      <p className="text-muted-foreground text-[15px] leading-[1.7]">
                        <span className="text-foreground/90 font-medium">Solution.</span> {c.solution}
                      </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                      <p className="!text-5xl md:!text-7xl font-semibold tracking-[-0.045em] text-primary leading-none transition-transform duration-500 group-hover:-translate-y-1">{c.result}</p>
                      <div className="w-10 h-px bg-primary/50 md:ml-auto my-4" />
                      <p className="text-muted-foreground text-sm">{c.resultLabel}</p>
                    </div>

                  </div>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>



      {/* ============== ABOUT / FOUNDER ============== */}
      <section className="py-28 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 items-start ${isRTL ? "md:[direction:rtl]" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-5">
              <div className="aspect-[4/5] rounded-md border border-border bg-gradient-to-br from-secondary to-card overflow-hidden relative">
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-foreground text-lg font-medium">Tarek Jundi</p>
                    <p className="text-muted-foreground text-sm mt-1">Founder & Principal</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-mono">
                  Enova / 2024
                </div>
              </div>
            </MotionElement>

            <div className="md:col-span-6 md:col-start-7 md:pt-2">
              <MotionElement animation="slideUp" delay={120}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">About</p>
                <h2 className="!text-4xl md:!text-5xl !leading-[1.05] tracking-[-0.035em] mb-8 font-semibold max-w-[18ch]">
                  Built by operators, for operators.
                </h2>
                <div className="space-y-5 text-muted-foreground text-[16px] leading-[1.75] max-w-2xl">
                  <p>
                    Most companies don't need another AI demo. They need AI <span className="text-foreground">in production</span> — owned by their team and integrated into the workflows that move revenue.
                  </p>
                  <p>
                    Every engagement is led personally. Every workflow ships with documentation, runbooks and metrics your team can act on.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border/70">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Mission</p>
                  <p className="text-foreground text-lg leading-[1.5] max-w-[34ch]">
                    Make operational AI reliable, measurable and owned by your team.
                  </p>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA — What happens next ============== */}
      <section className="py-28 md:py-40 border-t border-border bg-card/40 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className={`grid md:grid-cols-12 gap-12 md:gap-16 ${isRTL ? "md:[direction:rtl] text-right" : ""}`}>
            <MotionElement animation="slideUp" className="md:col-span-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary/80 mb-6">Let's talk</p>
              <h2 className="!text-4xl md:!text-6xl !leading-[1.05] tracking-[-0.035em] font-semibold max-w-[20ch] mb-6">
                Start with a <span className="font-serif-accent text-primary">30-minute call.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-[1.7] max-w-lg mb-10">
                No pitch, no obligation. We'll listen to your goals, map the highest-impact opportunities and tell you honestly whether AI is the right lever.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://cal.com/tarek-jundi/free-consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-7 h-12 rounded-md font-medium gap-2 group shadow-lg shadow-primary/10">
                    Book a Consultation
                    <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? "rotate-180" : ""}`} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent text-sm px-5 h-12 rounded-md font-medium border border-border hover:border-primary/50">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </MotionElement>

            <MotionElement animation="slideUp" delay={140} className="md:col-span-5 md:col-start-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-6">What happens next</p>
              <ol className="space-y-6">
                {[
                  { Icon: ChatCircleDots, title: "Discovery call", desc: "We listen. You share your goals, constraints and the workflows slowing your team down." },
                  { Icon: Compass, title: "Opportunity map", desc: "Within 48 hours, a ranked shortlist of AI opportunities scored by impact and effort." },
                  { Icon: Wrench, title: "Tailored proposal", desc: "Clear scope, timeline and pricing — with ownership terms and success metrics agreed up front." },
                ].map((step, idx) => (
                  <li key={step.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <step.Icon size={16} weight="regular" />
                      </div>
                      {idx < 2 && <div className="absolute left-1/2 top-11 -translate-x-1/2 w-px h-8 bg-border" />}
                    </div>
                    <div className="pt-1.5">
                      <p className="text-foreground font-semibold text-[15px] mb-1 tracking-tight">
                        <span className="text-primary/70 font-mono text-xs mr-2">0{idx + 1}</span>
                        {step.title}
                      </p>
                      <p className="text-muted-foreground text-sm leading-[1.65] max-w-sm">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
