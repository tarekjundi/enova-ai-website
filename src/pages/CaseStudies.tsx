import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";

const CAL = "https://cal.com/tarek-jundi/free-consultation";

const CASES = [
  {
    industry: "Financial Services",
    client: "Document intake for a lending team",
    challenge:
      "In this scenario, documents arrive by email, staff re-key them into separate systems, and exceptions wait for a senior analyst.",
    approach:
      "The proposed system extracts fields from incoming documents, validates required information and routes exceptions to a human review queue with an audit trail.",
    outcome:
      "Evaluate intake-to-completion time and extraction accuracy against the current process. Keep human approval for incomplete or conflicting documents.",
    tools: "Salesforce · DocuSign · Snowflake · Internal portal",
  },
  {
    industry: "B2B SaaS",
    client: "Triage and answer drafting for a support queue",
    challenge:
      "In this scenario, a product launch increases support demand, and repeated product questions crowd the queue.",
    approach:
      "A support agent grounded in the product documentation and past resolved tickets, with strict escalation rules and a weekly review loop on every deflected conversation.",
    outcome:
      "Compare answer accuracy, escalation rate and response time with the existing queue. Incorrect or unsupported answers must escalate to the team.",
    tools: "Zendesk · Notion · Segment · Slack",
  },
  {
    industry: "Logistics",
    client: "Turning shipment exceptions into one owned queue",
    challenge:
      "In this scenario, carrier updates and order records are disconnected, so the team has no consistent way to detect or own shipment exceptions.",
    approach:
      "The proposed system connects carrier feeds and order records, flags mismatches and assigns an owner. Customer notifications follow agreed rules and approval steps.",
    outcome:
      "Test detection coverage, notification accuracy and time to resolution using historical exceptions before enabling live notifications.",
    tools: "NetSuite · Carrier APIs · Twilio · Looker",
  },
  {
    industry: "Professional Services",
    client: "Proposal drafting with partner review",
    challenge:
      "In this scenario, partners assemble proposals from past documents and spend time formatting rather than reviewing scope.",
    approach:
      "A proposal system built on the firm's own past engagements — scoped inputs, generated first drafts, and a partner review step that stayed firmly in the loop.",
    outcome:
      "Measure drafting time and revision effort against manually assembled proposals. A partner checks scope, pricing and commitments before anything is sent.",
    tools: "HubSpot · Google Workspace · Internal library",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Selected work"
        title="Example engagements, explained step by step."
        intro="Four illustrative scenarios based on common workflow problems. They show how we scope and build a system. These are design examples, not completed client projects or measured results."
        cta={{ label: "Book a 30-min call", href: CAL, external: true }}
      />

      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="border-t border-[#3A2915]/15">
            {CASES.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={40}>
                <article className="grid md:grid-cols-12 gap-10 md:gap-14 items-start py-14 md:py-20 border-b border-[#3A2915]/15">
                  {/* Metric panel */}
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="panel-lift bg-[#281D0B] p-8 md:p-10 flex flex-col justify-between min-h-[420px]">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[#F6D5A0] text-[14px] font-medium">Scenario {String(i + 1).padStart(2, "0")}</p>
                        <span className="border border-[#F6D5A0]/40 text-[#F6D5A0] text-[12px] font-medium px-2.5 py-1">
                          Illustrative
                        </span>
                      </div>

                      <div className="py-10">
                        <h3 className="font-display text-on-deep !text-[30px] leading-[1.1]">Proposed system</h3>
                        <p className="text-on-deep-body text-[16px] mt-4">A workflow design to discuss, not evidence of a delivered engagement.</p>
                      </div>

                      <div>
                        <p className="text-[#C9B393] text-[14px] font-medium mb-3">Typical systems involved</p>
                        <div className="space-y-2">
                          {c.tools.split(" · ").map((t) => (
                            <div key={t} className="flex items-center justify-between border-b border-[#FFF9F1]/15 pb-2">
                              <span className="text-[#FDEED8] text-[14px]">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="md:col-span-7">
                    <p className="text-[#94572A] text-[15px] font-medium mb-5">{c.industry}</p>
                    <h2 className="font-display text-on-cream !text-[clamp(28px,3.6vw,46px)] leading-[1] mb-8 max-w-[20ch]">
                      {c.client}
                    </h2>

                    <dl className="space-y-6 border-t border-[#3A2915]/15 pt-7">
                      <div>
                        <dt className="text-[#3A2915] text-[15px] font-bold mb-2">Challenge</dt>
                        <dd className="text-on-cream-body text-[17px] leading-[1.65] max-w-[56ch]">{c.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-[#3A2915] text-[15px] font-bold mb-2">Proposed approach</dt>
                        <dd className="text-on-cream-body text-[17px] leading-[1.65] max-w-[56ch]">{c.approach}</dd>
                      </div>
                      <div>
                        <dt className="text-[#3A2915] text-[15px] font-bold mb-2">How to evaluate it</dt>
                        <dd className="text-on-cream-body text-[17px] leading-[1.65] max-w-[56ch]">{c.outcome}</dd>
                      </div>
                    </dl>

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
                Have a workflow like one of these?
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9">
              <p className="text-[#281D0B]/80 mb-8 max-w-[38ch]">
                Bring one process to a 30-minute call. We&rsquo;ll map it live and tell you where we&rsquo;d begin.
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

export default CaseStudies;
