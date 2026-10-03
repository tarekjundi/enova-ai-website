import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";
import tarekPortrait from "@/assets/tarek-jundi.jpg";

const CAL = "https://cal.com/tarek-jundi/free-consultation";

const BELIEFS = [
  {
    n: "01",
    title: "Operations before technology",
    body: "Most companies do not have a technology problem. They have a workflow problem hidden inside their tools. We start with the work, not the software.",
  },
  {
    n: "02",
    title: "Production over demonstration",
    body: "A convincing demo proves nothing. A system running against real data, watched by real monitoring, with a named owner — that is the only outcome worth billing for.",
  },
  {
    n: "03",
    title: "Ownership over dependency",
    body: "Every engagement ends with your team holding the code, the credentials and the documentation. If you need us afterwards, it should be by choice.",
  },
  {
    n: "04",
    title: "Honesty over scope",
    body: "When automation is the wrong answer we say so early, even when it costs us the engagement.",
  },
];

const STAGES = [
  { n: "01", title: "Discovery", body: "We follow a real case end to end and write down where time, context and accuracy leak.", outputs: "Workflow map · Time-loss inventory" },
  { n: "02", title: "Strategy", body: "Every candidate is ranked by impact, effort and payback. We agree the success metric before scope is written.", outputs: "Ranked list · Success metrics" },
  { n: "03", title: "Solution design", body: "Data flow, integrations, human checkpoints and failure paths designed together, on paper first.", outputs: "Architecture · Guardrails" },
  { n: "04", title: "Development", body: "Working software every two weeks, running against real data in staging. No reveal at the end.", outputs: "Increments · Review sessions" },
  { n: "05", title: "Testing", body: "Run against historic and edge cases your team nominates, thresholds tuned before live traffic.", outputs: "Benchmarks · Tuned thresholds" },
  { n: "06", title: "Deployment", body: "Phased rollout, monitoring from day one, rollback path defined, named owner on both sides.", outputs: "Production release · Alerts" },
  { n: "07", title: "Handover", body: "Runbooks, recorded walkthroughs and working sessions. Credentials, code and docs are yours.", outputs: "Runbooks · Training" },
  { n: "08", title: "Improvement", body: "Monthly review against the metrics we agreed, tuning where drift appears, intake for the next workflow.", outputs: "Monthly review · Tuning log" },
];

const FACTS = [
  { v: "2024", l: "Founded" },
  { v: "4—8", l: "Weeks to production" },
  { v: "20+", l: "Industries served" },
  { v: "100%", l: "Documented handover" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="About Enova"
        title="Built by operators, for operators."
        intro="A small consultancy for growing businesses that want simpler operations, connected systems and outcomes leadership can measure."
        cta={{ label: "Book a Consultation", href: CAL, external: true }}
      />

      {/* Founder */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <MotionElement animation="slideUp" className="md:col-span-5">
              <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#281D0B]">
                <img
                  src={tarekPortrait}
                  alt="Tarek Jundi, founder and principal of Enova"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281D0B]/90 via-transparent to-[#281D0B]/25" />
                <figcaption className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow text-[#F6D5A0] mb-3">Founder &amp; Principal</p>
                  <p className="font-display text-[#FFF9F1] text-[38px] leading-none">Tarek Jundi</p>
                  <p className="text-[#FDEED8]/80 text-[14px] mt-2">Leads every engagement personally</p>
                </figcaption>
              </figure>
            </MotionElement>

            <div className="md:col-span-6 md:col-start-7">
              <MotionElement animation="slideUp" delay={120}>
                <h2 className="font-display text-on-cream !text-[clamp(32px,4.4vw,56px)] leading-[0.98] mb-9 max-w-[15ch]">
                  Working systems, not AI theatre.
                </h2>

                <div className="space-y-5 text-on-cream-body text-[17px] md:text-[19px] leading-[1.65] max-w-[54ch]">
                  <p>
                    Enova was founded after watching capable teams buy impressive AI pilots that never reached
                    production. The technology was rarely the problem — the scoping, integration, measurement and
                    handover around it was where projects quietly died.
                  </p>
                  <p>
                    We run the opposite way. Every engagement starts with a real workflow and a metric attached to
                    it, and ends with a system in production, owned by your team, connected to the tools they
                    already use.
                  </p>
                  <p>
                    We stay small on purpose. Fewer clients, each led personally, with the same person in discovery
                    and in handover.
                  </p>
                </div>

                <div className="mt-10 pt-7 border-t border-[#3A2915]/20">
                  <p className="font-accent text-on-cream text-[24px] md:text-[30px] leading-[1.3] max-w-[28ch]">
                    Make intelligent operations reliable, measurable and owned by your team.
                  </p>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="surface-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <h2 className="font-display text-on-cream !text-[clamp(32px,4.6vw,60px)] leading-[0.98] max-w-[15ch] mb-12">
              Four positions we hold firmly.
            </h2>
          </MotionElement>

          <div className="grid md:grid-cols-2 gap-px bg-[#3A2915]/15 border border-[#3A2915]/15">
            {BELIEFS.map((b, i) => (
              <MotionElement key={b.n} animation="slideUp" delay={40 + i * 60}>
                <div className="bg-[#FFF9F1] h-full p-8 md:p-10">
                  <p className="num text-[#94572A] text-[13px] mb-7">{b.n}</p>
                  <h3 className="font-display text-on-cream !text-[clamp(22px,2.6vw,30px)] leading-[1.05] mb-4 max-w-[16ch]">
                    {b.title}
                  </h3>
                  <p className="text-on-cream-muted max-w-[46ch]">{b.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="surface-deep py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-12">
            <MotionElement animation="slideUp" className="md:col-span-6">
              <h2 className="font-display text-[#FFF9F1] !text-[clamp(32px,4.6vw,60px)] leading-[0.98] max-w-[15ch]">
                Eight stages from first call to production.
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9 md:pt-4">
              <p className="text-[#FDEED8]/80 max-w-[38ch]">
                No multi-quarter strategy decks. Each stage produces something your team can hold, review and act on.
              </p>
            </MotionElement>
          </div>

          <ol className="border-t border-[#F6D5A0]/15">
            {STAGES.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={30 + i * 40}>
                <li className="group grid md:grid-cols-12 gap-3 md:gap-10 items-baseline py-7 border-b border-[#F6D5A0]/15 transition-colors duration-300 hover:bg-[#F6D5A0]/[0.05] -mx-4 md:-mx-6 px-4 md:px-6">
                  <span className="num text-[#F6D5A0]/70 text-[13px] md:col-span-1">{s.n}</span>
                  <h3 className="md:col-span-3 font-display text-[#FFF9F1] !text-[clamp(22px,2.4vw,30px)] leading-[1] transition-colors duration-300 group-hover:text-[#F6D5A0]">
                    {s.title}
                  </h3>
                  <p className="md:col-span-5 text-[#FDEED8]/80 max-w-[48ch]">{s.body}</p>
                  <p className="md:col-span-3 eyebrow text-[#C9B393] leading-[1.7]">{s.outputs}</p>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* Facts */}
      <section className="surface-gold py-14 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {FACTS.map((f, i) => (
              <MotionElement key={f.l} animation="slideUp" delay={40 + i * 50}>
                <div>
                  <p className="font-display text-[#281D0B] text-[48px] md:text-[68px] leading-none">{f.v}</p>
                  <p className="eyebrow text-[#281D0B]/70 mt-3">{f.l}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-deep-grad py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-7">
              <h2 className="font-display text-[#FFF9F1] !text-[clamp(36px,5.5vw,76px)] leading-[0.94] max-w-[13ch]">
                A short conversation is the whole commitment.
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120} className="md:col-span-4 md:col-start-9">
              <p className="text-[#FDEED8]/80 mb-8 max-w-[38ch]">
                Tell us how the work runs today. We&rsquo;ll tell you honestly whether we&rsquo;re the right people for it.
              </p>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
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

export default AboutUs;
