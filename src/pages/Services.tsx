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
    problem: "You have several manual processes, but no evidence for which to automate first.",
    delivers:
      "We interview the people doing the work, map the steps and check volumes, time spent and exceptions. You receive a process map, a ranked opportunity list and a scoped proposal for the first build.",
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
      "We connect your CRM, inbox and business tools using Make, n8n or custom code. The build includes field mapping, approval steps, error alerts and a runbook for restarting failed jobs.",
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
      "We index approved documents and build a search assistant that retrieves relevant passages and links to their sources. Access rules, document updates and unanswered questions are tested before rollout; your documents are not used to train a new model.",
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
      "We connect your support inbox to approved answers, classify incoming tickets and draft replies. Your team reviews uncertain cases, with clear escalation rules and a log of automated actions.",
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
      "We bring CRM, accounting and spreadsheet data into a scheduled reporting pipeline. You receive agreed metric definitions, a dashboard, data-quality checks and alerts when a refresh fails.",
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
        title="Workflow automation, search and reporting."
        intro="For operations, support and revenue teams working across disconnected tools. Start with an audit or bring a defined workflow to build."
        cta={{ label: "Book a 30-min call", href: CAL, external: true }}
      />

      <section className="surface-ivory py-20 md:py-28">
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
                Book a 30-min call
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
