import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";

type Practice = {
  n: string;
  slug: string;
  title: string;
  tagline: string;
  body: string;
  fit: string;
  subs: string[];
};

const PRACTICES: Practice[] = [
  {
    n: "01",
    slug: "opportunity-audit",
    title: "Opportunity Audit",
    tagline: "Know what to automate before you build anything.",
    body:
      "A structured review of how work actually moves through your business, ending in a ranked shortlist of automations scored by impact, effort and payback.",
    fit: "Leadership teams evaluating where to invest first.",
    subs: [
      "Workflow Mapping",
      "Automation Shortlist",
      "Impact & Payback Modelling",
      "Tooling & Data Review",
      "Delivery Roadmap",
      "Risk & Governance Notes",
    ],
  },
  {
    n: "02",
    slug: "workflow-systems",
    title: "Workflow Systems",
    tagline: "Codify the processes your business already runs on.",
    body:
      "We rebuild repetitive, multi-step work as reliable automation across your existing tools — with observability, guardrails and clean handoffs back to your team.",
    fit: "Operations and RevOps teams scaling past the copy-paste stage.",
    subs: [
      "Workflow Automation",
      "Process Automation",
      "CRM & Pipeline Automation",
      "Document & Data Processing",
      "Internal Operations",
      "Reporting Automation",
    ],
  },
  {
    n: "03",
    slug: "knowledge-systems",
    title: "Knowledge Systems",
    tagline: "Make institutional knowledge findable in seconds.",
    body:
      "Private assistants and searchable knowledge bases grounded in your documents, tickets and history — with sources cited and access scoped to the right people.",
    fit: "Teams onboarding fast or drowning in repeated internal questions.",
    subs: [
      "Internal Assistants",
      "Knowledge Assistants",
      "Document Search & Retrieval",
      "SOP & Policy Capture",
      "Onboarding Enablement",
      "Access & Permissions",
    ],
  },
  {
    n: "04",
    slug: "customer-operations",
    title: "Customer Operations",
    tagline: "Autonomous operators, scoped tightly to your stack.",
    body:
      "Assistants that answer, triage and act inside your systems — with defined boundaries, escalation paths and a full audit trail of every action taken.",
    fit: "Support, success and revenue teams under sustained volume.",
    subs: [
      "Customer Support Agents",
      "Sales & Qualification Agents",
      "Escalation & Routing",
      "Voice & Chat Interfaces",
      "Lifecycle & Outbound Flows",
      "Lead Enrichment",
    ],
  },
  {
    n: "05",
    slug: "business-intelligence",
    title: "Business Intelligence",
    tagline: "Reporting that arrives before the decision does.",
    body:
      "Pipelines, dashboards and forecasts your leaders trust — one source of truth, refreshed automatically and integrated with the systems that generate the data.",
    fit: "Founders and executives making calls without clean data.",
    subs: [
      "Dashboards & Analytics",
      "Data Pipelines",
      "Reporting Automation",
      "Attribution Reporting",
      "Custom Integrations",
      "API Development",
    ],
  },
];

const ENGAGEMENT = [
  {
    n: "01",
    title: "Opportunity Audit",
    body: "A two-week review of your workflows and a ranked shortlist of automations by impact, effort and payback.",
  },
  {
    n: "02",
    title: "Single System Build",
    body: "One workflow, scoped and delivered end to end in four to eight weeks, with documentation and metrics on day one.",
  },
  {
    n: "03",
    title: "Operating Partner",
    body: "A standing engagement: continuous intake, tuning and new systems shipped on a fixed monthly cadence.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Services"
        title={
          <>
            Operational AI, built around{" "}
            <span className="italic text-[#F6D3A2]">your stack.</span>
          </>
        }
        intro="Five practices. Every engagement is scoped, built and handed to your team with documentation and measurement in place."
        cta={{
          label: "Discuss Your Workflow",
          href: "https://cal.com/tarek-jundi/free-consultation",
          external: true,
        }}
        meta="Five practices · Fixed scope"
      />

      {/* Practices — editorial index */}
      <section className="surface-cream py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-24">
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">What we do</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[68px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                  Five practices,{" "}
                  <span className="italic text-[#A56735]">one operating system.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[44ch]">
                  We deliver systems your people can own — not black boxes they rent. Every build ships with runbooks, metrics and access.
                </p>
              </MotionElement>
            </div>
          </div>

          <div className="border-t border-[#3A2915]/20">
            {PRACTICES.map((p, i) => (
              <MotionElement key={p.n} animation="slideUp" delay={40 + i * 60}>
                <article id={p.slug} className="scroll-mt-28 border-b border-[#3A2915]/20 grid md:grid-cols-12 gap-8 md:gap-10 py-10 md:py-14 group">
                  <div className="md:col-span-1">
                    <span className="eyebrow text-[#A56735]">{p.n}</span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-on-cream text-3xl md:text-5xl leading-[1.02] tracking-[-0.015em] mb-3 transition-colors duration-500 group-hover:text-[#A56735]">
                      {p.title}
                    </h3>
                    <p className="font-body text-[#94572A] text-[16px] font-medium leading-[1.6] max-w-[28ch]">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[46ch]">
                      {p.body}
                    </p>
                    <p className="text-on-cream-muted text-[15px] leading-[1.7] mt-4 max-w-[46ch]">
                      <span className="font-medium">Best for:</span> {p.fit}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <p className="eyebrow text-[#4A3720] mb-4">Typical use cases</p>
                    <ul className="space-y-2">

                      {p.subs.map((s) => (
                        <li
                          key={s}
                          className="text-on-cream-body text-[15px] leading-[1.6] pb-2.5 border-b border-[#3A2915]/10"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="surface-deep py-28 md:py-36 border-b border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">How we work together</p>
                <h2 className="font-display text-[#FFF9F1] !text-[36px] md:!text-[60px] leading-[1.03] tracking-[-0.015em] max-w-[20ch]">
                  Three ways to{" "}
                  <span className="italic text-[#F6D3A2]">start.</span>
                </h2>
              </MotionElement>
            </div>
          </div>

          <ol className="divide-y divide-[#F6D3A2]/12 border-y border-[#F6D3A2]/12">
            {ENGAGEMENT.map((e, i) => (
              <MotionElement key={e.n} animation="slideUp" delay={60 + i * 60}>
                <li className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12">
                  <div className="md:col-span-2">
                    <span className="font-display italic text-[#F6D3A2] text-4xl md:text-5xl leading-none">
                      {e.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-[#FFF9F1] text-2xl md:text-4xl leading-[1.05]">
                      {e.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[52ch]">{e.body}</p>
                  </div>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-gold py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="eyebrow text-[#281C0B]/85 mb-6">Next step</p>
              <h2 className="font-display text-on-cream !text-[40px] md:!text-[76px] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                Pick one workflow. We&rsquo;ll show you what to{" "}
                <span className="italic">automate first.</span>
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                A 30-minute working session. We review one of your workflows live and map the system end to end.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
                >
                  Book a Consultation
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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

export default Services;
