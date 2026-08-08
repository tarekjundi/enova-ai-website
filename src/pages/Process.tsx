import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

const STAGES = [
  {
    n: "01",
    title: "Discovery",
    intent: "Understand the work before touching the tools.",
    body:
      "We sit with the people doing the work, follow a real case end to end, and write down where time, context and accuracy leak. Nothing is proposed until the current state is on paper.",
    outputs: "Workflow map · Time-loss inventory · Stakeholder notes",
  },
  {
    n: "02",
    title: "Strategy",
    intent: "Decide what is worth building, and in what order.",
    body:
      "Every candidate is ranked by impact, effort and payback. We tell you what to leave alone as clearly as what to automate, and agree the success metric before any scope is written.",
    outputs: "Ranked opportunity list · Success metrics · Sequencing plan",
  },
  {
    n: "03",
    title: "Solution Design",
    intent: "Design the system your team will actually operate.",
    body:
      "Data flow, integration points, human checkpoints and failure paths are designed together. We define what the system is allowed to do on its own and where a person stays in the loop.",
    outputs: "Architecture · Integration plan · Guardrails & escalation rules",
  },
  {
    n: "04",
    title: "Development",
    intent: "Build in short, visible increments.",
    body:
      "You see working software every two weeks, running against real data in a staging environment. No long silences, no reveal at the end.",
    outputs: "Working increments · Staging environment · Review sessions",
  },
  {
    n: "05",
    title: "Testing & Optimisation",
    intent: "Prove it holds under real conditions.",
    body:
      "We run the system against historic cases and edge cases your team nominates, tune the thresholds, and only then agree it is ready for live traffic.",
    outputs: "Test results · Accuracy benchmarks · Tuned thresholds",
  },
  {
    n: "06",
    title: "Deployment",
    intent: "Go live carefully, not loudly.",
    body:
      "Phased rollout with monitoring in place from the first day, a rollback path defined, and a named owner on both sides for the first two weeks.",
    outputs: "Production release · Monitoring & alerts · Rollback plan",
  },
  {
    n: "07",
    title: "Training & Handover",
    intent: "Leave your team able to run it without us.",
    body:
      "Runbooks, recorded walkthroughs and working sessions with the people who own the process. Credentials, code and documentation are yours.",
    outputs: "Runbooks · Training sessions · Full handover pack",
  },
  {
    n: "08",
    title: "Continuous Improvement",
    intent: "Keep the system honest as the business changes.",
    body:
      "Monthly review of the metrics we agreed at the start, tuning where drift appears, and a clear intake path for the next workflow when you are ready.",
    outputs: "Monthly review · Tuning log · Next-workflow intake",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Measure before building",
    body: "If we cannot state the metric a system should move, we have not understood the problem well enough to build it.",
  },
  {
    n: "02",
    title: "Fit the existing stack",
    body: "We integrate with the tools your team already knows. Replacing working software is expensive and rarely necessary.",
  },
  {
    n: "03",
    title: "Keep a person in the loop",
    body: "Every system has defined boundaries and an escalation path. Automation handles the routine; judgement stays human.",
  },
  {
    n: "04",
    title: "Hand over completely",
    body: "Code, credentials, documentation and training. You should be able to end the engagement and keep the system running.",
  },
];

const Process = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="The ENOVA Method"
        title={
          <>
            Eight stages from first conversation to{" "}
            <span className="italic text-[#F6D3A2]">production.</span>
          </>
        }
        intro="No multi-quarter strategy decks. Each stage produces something your team can hold, review and act on."
        cta={{
          label: "Start With One Workflow",
          href: "https://cal.com/tarek-jundi/free-consultation",
          external: true,
        }}
        meta="Typical engagement · 4 — 8 weeks"
      />

      {/* Timeline */}
      <section className="surface-cream py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative">
            {/* vertical thread */}
            <div
              className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[#3A2915]/20"
              aria-hidden
            />

            <ol className="space-y-16 md:space-y-24">
              {STAGES.map((s, i) => (
                <MotionElement key={s.n} animation="slideUp" delay={40 + i * 30}>
                  <li className="relative pl-10 md:pl-16 group">
                    {/* node */}
                    <span className="absolute left-0 top-3 block w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border border-[#3A2915]/30 bg-[#FDEED8] transition-colors duration-500 group-hover:bg-[#A56735] group-hover:border-[#A56735]" />

                    <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                      <div className="md:col-span-5">
                        <p className="eyebrow text-[#A56735] mb-4">Stage {s.n}</p>
                        <h2 className="font-display text-on-cream !text-[32px] md:!text-[54px] leading-[1.02] tracking-[-0.02em] mb-4 transition-colors duration-500 group-hover:text-[#A56735]">
                          {s.title}
                        </h2>
                        <p className="font-serif-accent text-[#6E5940] text-xl md:text-2xl leading-[1.3] max-w-[26ch]">
                          {s.intent}
                        </p>
                      </div>

                      <div className="md:col-span-6 md:col-start-7 md:pt-10">
                        <p className="text-on-cream-body text-[17px] leading-[1.8] max-w-[54ch]">
                          {s.body}
                        </p>
                        <div className="mt-7 pt-5 border-t border-[#3A2915]/20">
                          <p className="eyebrow text-[#4A3720] mb-2">Deliverables</p>
                          <p className="text-on-cream text-[15px] leading-[1.7]">{s.outputs}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </MotionElement>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="surface-deep py-24 md:py-36 border-b border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14">
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#D8C4A8] mb-6">Operating principles</p>
                <h2 className="font-display text-[#FFF9F1] !text-[36px] md:!text-[62px] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
                  Four rules we{" "}
                  <span className="italic text-[#F6D3A2]">do not bend.</span>
                </h2>
              </MotionElement>
            </div>
          </div>

          <ol className="divide-y divide-[#F6D3A2]/12 border-y border-[#F6D3A2]/12">
            {PRINCIPLES.map((p, i) => (
              <MotionElement key={p.n} animation="slideUp" delay={50 + i * 50}>
                <li className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12">
                  <div className="md:col-span-2">
                    <span className="font-display italic text-[#F6D3A2] text-4xl md:text-5xl leading-none">
                      {p.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-[#FFF9F1] text-2xl md:text-4xl leading-[1.05]">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[52ch]">{p.body}</p>
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
              <p className="eyebrow text-[#281C0B]/85 mb-6">Stage one starts here</p>
              <h2 className="font-display text-on-cream !text-[40px] md:!text-[76px] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                Discovery begins with{" "}
                <span className="italic">one conversation.</span>
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                Thirty minutes, no pitch. We listen to how the work runs today and tell you where we would look first.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
                >
                  Start With One Workflow
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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

export default Process;
