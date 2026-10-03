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
    client: "A mid-market lender rebuilt its client onboarding",
    challenge:
      "Onboarding took eleven days on average. Documents arrived by email, were re-keyed into two systems, and every exception went back to a single senior analyst.",
    approach:
      "We mapped the full intake path, replaced re-keying with automated document extraction, and routed only genuine exceptions to a human queue with full audit history.",
    outcome:
      "Onboarding now completes in under two days for standard cases, and the analyst team spends its time on the files that actually need judgement.",
    metric: "82%",
    metricLabel: "Reduction in onboarding time",
    stats: [
      { v: "11 → 2", l: "Days to onboard" },
      { v: "3.5×", l: "Files per analyst" },
      { v: "6 wks", l: "Time to production" },
    ],
    tools: "Salesforce · DocuSign · Snowflake · Internal portal",
  },
  {
    industry: "B2B SaaS",
    client: "A support team absorbed 3× volume without hiring",
    challenge:
      "Ticket volume tripled after a product launch. Response times slipped past a day, and the same twenty questions accounted for most of the queue.",
    approach:
      "A support agent grounded in the product documentation and past resolved tickets, with strict escalation rules and a weekly review loop on every deflected conversation.",
    outcome:
      "Most routine questions now resolve without a human, and the team holds a same-hour first response on everything that escalates.",
    metric: "67%",
    metricLabel: "Tickets resolved without escalation",
    stats: [
      { v: "< 1 hr", l: "First response" },
      { v: "0", l: "New hires needed" },
      { v: "4 wks", l: "Time to production" },
    ],
    tools: "Zendesk · Notion · Segment · Slack",
  },
  {
    industry: "Logistics",
    client: "An operator turned exception handling into a queue",
    challenge:
      "Shipment exceptions were caught by whoever noticed first. Customers often heard about a delay before the operations team did.",
    approach:
      "We connected carrier feeds and the order system into one exception queue, with automatic customer notification and a clear owner for every open case.",
    outcome:
      "Exceptions are detected and communicated the same hour, and leadership finally has a single view of where shipments stall.",
    metric: "94%",
    metricLabel: "Exceptions caught before the customer calls",
    stats: [
      { v: "Same hr", l: "Detection to notice" },
      { v: "1", l: "Source of truth" },
      { v: "7 wks", l: "Time to production" },
    ],
    tools: "NetSuite · Carrier APIs · Twilio · Looker",
  },
  {
    industry: "Professional Services",
    client: "A consultancy cut proposal turnaround to a day",
    challenge:
      "Every proposal was assembled by hand from past documents. Partners spent evenings formatting rather than scoping.",
    approach:
      "A proposal system built on the firm's own past engagements — scoped inputs, generated first drafts, and a partner review step that stayed firmly in the loop.",
    outcome:
      "First drafts arrive within an hour of intake, and partners edit instead of assembling from scratch.",
    metric: "5×",
    metricLabel: "Faster proposal turnaround",
    stats: [
      { v: "1 day", l: "Intake to send" },
      { v: "100%", l: "Partner reviewed" },
      { v: "5 wks", l: "Time to production" },
    ],
    tools: "HubSpot · Google Workspace · Internal library",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Selected work"
        title="Systems in production, measured plainly."
        intro="Four engagements: what was broken, what we built, and what changed after it shipped."
        cta={{ label: "Book a Consultation", href: CAL, external: true }}
      />

      <section className="surface-cream py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="border-t border-[#3A2915]/15">
            {CASES.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={40}>
                <article className="grid md:grid-cols-12 gap-10 md:gap-14 items-start py-14 md:py-20 border-b border-[#3A2915]/15">
                  {/* Metric panel */}
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="panel-lift bg-[#281D0B] p-8 md:p-10 flex flex-col justify-between min-h-[420px]">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[#F6D5A0] text-[14px] font-medium">Case {String(i + 1).padStart(2, "0")}</p>
                        <span className="text-[#FFF9F1]/80 text-[13px] font-medium">
                          In production
                        </span>
                      </div>

                      <div className="py-10">
                        <p className="font-display text-[#F6D5A0] text-[76px] md:text-[104px] leading-[0.85]">
                          {c.metric}
                        </p>
                        <p className="text-[#FDEED8]/85 text-[15px] mt-4 max-w-[24ch]">{c.metricLabel}</p>
                      </div>

                      <div>
                        <p className="text-[#C9B393] text-[14px] font-medium mb-3">Systems connected</p>
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
                        <dt className="text-[#3A2915] text-[15px] font-bold mb-2">Approach</dt>
                        <dd className="text-on-cream-body text-[17px] leading-[1.65] max-w-[56ch]">{c.approach}</dd>
                      </div>
                      <div>
                        <dt className="text-[#3A2915] text-[15px] font-bold mb-2">Outcome</dt>
                        <dd className="text-on-cream-body text-[17px] leading-[1.65] max-w-[56ch]">{c.outcome}</dd>
                      </div>
                    </dl>

                    <div className="mt-9 grid grid-cols-3 gap-6 border-t border-[#3A2915]/15 pt-7">
                      {c.stats.map((s) => (
                        <div key={s.l}>
                          <p className="font-display text-on-cream text-[26px] md:text-[34px] leading-none">{s.v}</p>
                          <p className="text-on-cream-muted text-[13px] mt-2 leading-[1.5]">{s.l}</p>
                        </div>
                      ))}
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
                Your workflow could be the next one.
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9">
              <p className="text-[#281D0B]/80 mb-8 max-w-[38ch]">
                Bring one process to a 30-minute call. We&rsquo;ll map it live and tell you where we&rsquo;d begin.
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

export default CaseStudies;
