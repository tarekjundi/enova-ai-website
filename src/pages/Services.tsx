import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";

const CAL = "https://cal.com/tarek-jundi/free-consultation";

const PRACTICES = [
  {
    n: "01",
    id: "opportunity-audit",
    title: "Opportunity Audit",
    problem: "You suspect AI could help, but don't know where to begin.",
    delivers:
      "A structured review of your workflows and a ranked shortlist of automations, scored by impact, effort and payback — with the first build agreed before we start.",
    uses: [
      "Workflow mapping across a department",
      "Time-loss inventory with real numbers",
      "Ranked opportunity list and sequencing plan",
      "Success metrics agreed up front",
    ],
    fit: "Leadership teams deciding where to invest first.",
  },
  {
    n: "02",
    id: "workflow-systems",
    title: "Workflow Systems",
    problem: "Manual, multi-step processes running across too many tools.",
    delivers:
      "End-to-end workflows built into your existing stack, with observability, guardrails and clean handoffs between software and people.",
    uses: [
      "Lead capture, qualification and routing",
      "Quote, proposal and contract generation",
      "Onboarding and document intake",
      "Internal approvals and escalation paths",
    ],
    fit: "Operations and revenue teams past the copy-paste stage.",
  },
  {
    n: "03",
    id: "knowledge-systems",
    title: "Knowledge Systems",
    problem: "The answer exists somewhere in your company — no one can find it.",
    delivers:
      "Private assistants and searchable knowledge bases trained on your own documents, tickets and history, with sources cited on every answer.",
    uses: [
      "Internal assistant over policies and SOPs",
      "Sales enablement and past-proposal search",
      "Onboarding and training support",
      "Technical documentation lookup",
    ],
    fit: "Teams onboarding fast or drowning in repeated questions.",
  },
  {
    n: "04",
    id: "customer-operations",
    title: "Customer Operations",
    problem: "Rising volume, flat headcount, slipping response times.",
    delivers:
      "Tier-1 automation, agent copilots and lifecycle flows designed around your policies and your tone of voice, with defined escalation to a person.",
    uses: [
      "First-response and triage automation",
      "Agent copilots with suggested replies",
      "Follow-up and lifecycle sequences",
      "Feedback and review collection",
    ],
    fit: "Support, success and revenue teams under sustained volume.",
  },
  {
    n: "05",
    id: "business-intelligence",
    title: "Business Intelligence",
    problem: "Reports arrive too late to change the decision.",
    delivers:
      "Pipelines, dashboards and forecasts your leadership trusts — one source of truth, refreshed automatically instead of assembled by hand.",
    uses: [
      "Unified reporting across systems",
      "Executive dashboards and alerts",
      "Pipeline and revenue forecasting",
      "Operational KPI tracking",
    ],
    fit: "Founders and executives making calls without clean data.",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Solutions"
        title="Five ways we take work off your team."
        intro="Each practice starts from a workflow you already run and ends with a system in production, owned by your people."
        cta={{ label: "Book a Consultation", href: CAL, external: true }}
        meta="Typical engagement · 4 — 8 weeks to production"
      />

      <section className="surface-cream py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="border-t border-[#3A2915]/15">
            {PRACTICES.map((p, i) => (
              <MotionElement key={p.id} animation="slideUp" delay={40 + i * 40}>
                <article
                  id={p.id}
                  className="grid md:grid-cols-12 gap-8 md:gap-12 py-14 md:py-20 border-b border-[#3A2915]/15 scroll-mt-28"
                >
                  <div className="md:col-span-5">
                    <p className="num text-[#94572A] text-[13px] mb-6">{p.n}</p>
                    <h2 className="font-display text-on-cream !text-[clamp(30px,4vw,52px)] leading-[0.98] mb-6 max-w-[13ch]">
                      {p.title}
                    </h2>
                    <p className="font-accent text-[#6B5335] text-[22px] md:text-[26px] leading-[1.3] max-w-[26ch]">
                      {p.problem}
                    </p>
                  </div>

                  <div className="md:col-span-6 md:col-start-7">
                    <p className="text-on-cream-body text-[17px] md:text-[19px] leading-[1.65] max-w-[54ch]">
                      {p.delivers}
                    </p>

                    <div className="mt-9 pt-6 border-t border-[#3A2915]/15">
                      <p className="text-[#3A2915] text-[15px] font-bold mb-4">Typical use cases</p>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                        {p.uses.map((u) => (
                          <li key={u} className="flex gap-3 text-on-cream-body text-[15px] leading-[1.55]">
                            <span className="mt-[0.6em] h-1 w-1 bg-[#94572A] shrink-0" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 pt-5 border-t border-[#3A2915]/15 flex flex-wrap gap-x-4 gap-y-1 items-baseline">
                      <p className="text-[#3A2915] text-[15px] font-bold">Best for</p>
                      <p className="text-on-cream-muted text-[15px]">{p.fit}</p>
                    </div>
                  </div>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-gold py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-7">
              <h2 className="font-display text-[#281D0B] !text-[clamp(36px,5.5vw,76px)] leading-[0.94] max-w-[13ch]">
                Not sure which one you need?
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9">
              <p className="text-[#281D0B]/80 mb-8 max-w-[38ch]">
                That&rsquo;s what the first conversation is for. Describe the work, and we&rsquo;ll tell you where to start.
              </p>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-dark group">
                Book a Consultation
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
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
