import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

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
        title={
          <>
            Systems in production, measured the way{" "}
            <span className="italic text-[#F6D3A2]">your CFO measures.</span>
          </>
        }
        intro="Four engagements, described plainly: what was broken, what we built, and what changed after it shipped."
        cta={{
          label: "Book a Consultation",
          href: "https://cal.com/tarek-jundi/free-consultation",
          external: true,
        }}
        secondary={{ label: "See our process", to: "/process" }}
        meta="Four engagements · 2024 — 2025"
      />

      {/* Cases */}
      <section className="surface-cream py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="space-y-24 md:space-y-36">
            {CASES.map((c, i) => (
              <MotionElement key={c.industry} animation="slideUp" delay={60}>
                <article className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
                  {/* Metric block */}
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            i % 3 === 0
                              ? "linear-gradient(135deg, #281C0B 0%, #3A2915 55%, #6E5940 100%)"
                              : i % 3 === 1
                              ? "linear-gradient(135deg, #A56735 0%, #6E5940 60%, #281C0B 100%)"
                              : "linear-gradient(135deg, #F6D3A2 0%, #C8B59C 60%, #6E5940 100%)",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                        <div className="flex items-start justify-between gap-4">
                          <p className="eyebrow text-[#FFF9F1]">Case &middot; 0{i + 1}</p>
                          <span className="text-[#FFF9F1] text-[13px] font-medium tracking-wide border border-[#FFF9F1]/40 rounded-full px-3 py-1">
                            In production
                          </span>
                        </div>

                        <div className="space-y-2">
                          {c.tools.split(" · ").map((t) => (
                            <div
                              key={t}
                              className="flex items-center gap-3 border-b border-[#FFF9F1]/20 pb-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FFF9F1]" />
                              <span className="text-[#FFF9F1] text-[14px] font-medium">{t}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <p className="font-display text-[#FFF9F1] italic text-[80px] md:text-[110px] leading-none tracking-[-0.02em]">
                            {c.metric}
                          </p>
                          <p className="text-[#FFF9F1] text-sm mt-3 max-w-[26ch]">{c.metricLabel}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Copy */}
                  <div className="md:col-span-7 md:pt-3">
                    <p className="eyebrow text-[#A56735] mb-4">{c.industry}</p>
                    <h2 className="font-display text-on-cream !text-[30px] md:!text-[48px] leading-[1.05] tracking-[-0.015em] mb-8 max-w-[22ch]">
                      {c.client}
                    </h2>

                    <div className="space-y-5">
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[58ch]">
                        <span className="text-on-cream font-medium">Challenge. </span>
                        {c.challenge}
                      </p>
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[58ch]">
                        <span className="text-on-cream font-medium">Approach. </span>
                        {c.approach}
                      </p>
                      <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[58ch]">
                        <span className="text-on-cream font-medium">Outcome. </span>
                        {c.outcome}
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#3A2915]/20 pt-8">
                      {c.stats.map((s) => (
                        <div key={s.l}>
                          <p className="font-display text-on-cream text-3xl md:text-4xl leading-none tracking-[-0.015em]">
                            {s.v}
                          </p>
                          <p className="text-on-cream-muted text-[13px] mt-2 leading-[1.5]">{s.l}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#3A2915]/15 flex flex-wrap gap-x-6 gap-y-2 items-baseline">
                      <p className="eyebrow text-[#6E5940]">Systems connected</p>
                      <p className="text-on-cream-body text-[14px] font-medium">{c.tools}</p>
                    </div>
                  </div>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-gold py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="eyebrow text-[#281C0B]/70 mb-6">Start with a conversation</p>
              <h2 className="font-display text-on-cream !text-[40px] md:!text-[76px] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                Your workflow could be{" "}
                <span className="italic">the next one.</span>
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                Bring one process to a 30-minute call. We&rsquo;ll map it live and tell you where we would begin.
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
                <Link to="/services" className="btn-ghost-on-cream">
                  View Services
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

export default CaseStudies;
