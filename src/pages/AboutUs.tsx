import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import tarekPortrait from "@/assets/tarek-jundi.jpg.asset.json";

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
    body: "When automation is the wrong answer we say so early, even when it costs us the engagement. Reputation compounds faster than revenue.",
  },
];

const FACTS = [
  { v: "2024", l: "Founded" },
  { v: "4 — 8", l: "Weeks to production" },
  { v: "20+", l: "Industries served" },
  { v: "100%", l: "Documented handover" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="About Enova"
        title={
          <>
            Built by operators,{" "}
            <span className="italic text-[#F6D3A2]">for operators.</span>
          </>
        }
        intro="A small consultancy for growing businesses that want simpler operations, connected systems and outcomes their leadership can measure."
        cta={{
          label: "Book a Consultation",
          href: "https://cal.com/tarek-jundi/free-consultation",
          external: true,
        }}
        secondary={{ label: "See the work", to: "/case-studies" }}
        meta="Est. 2024 · Consulting & Systems"
      />

      {/* Statement */}
      <section className="surface-cream py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <MotionElement animation="slideUp" className="md:col-span-5">
              <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#281C0B]">
                <img
                  src={tarekPortrait.url}
                  alt="Tarek Jundi, founder and principal of Enova"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281C0B]/85 via-[#281C0B]/10 to-[#281C0B]/40" />
                <figcaption className="absolute inset-0 flex flex-col justify-between p-8">
                  <p className="eyebrow text-[#F6D3A2]">Founder &amp; Principal</p>
                  <div>
                    <p className="font-display text-[#FFF9F1] text-4xl leading-tight">Tarek Jundi</p>
                    <p className="text-[#FDEED8] text-[14px] mt-2">
                      Leads every engagement personally
                    </p>
                  </div>
                </figcaption>
              </figure>
            </MotionElement>


            <div className="md:col-span-6 md:col-start-7">
              <MotionElement animation="slideUp" delay={120}>
                <p className="eyebrow text-[#6E5940] mb-6">Why we exist</p>
                <h2 className="font-display text-on-cream !text-[36px] md:!text-[58px] leading-[1.03] tracking-[-0.015em] mb-10 max-w-[20ch]">
                  Working systems, <span className="italic text-[#A56735]">not AI theatre.</span>
                </h2>

                <div className="space-y-6 text-on-cream-body text-[17px] leading-[1.8] max-w-[56ch]">
                  <p>
                    ENOVA was founded after watching capable teams buy impressive AI pilots that never reached production. The technology was rarely the problem. The work around it — scoping, integration, measurement, handover — was where projects quietly died.
                  </p>
                  <p>
                    We run the opposite way. Every engagement starts with a real workflow and a metric attached to it, and ends with a system{" "}
                    <span className="text-on-cream font-medium">in production</span>, owned by your team, connected to the tools they already use.
                  </p>
                  <p>
                    We stay small on purpose. Fewer clients, each led personally, with the same person in discovery and in handover.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-[#3A2915]/20">
                  <p className="eyebrow text-[#6E5940] mb-3">Our commitment</p>
                  <p className="font-display italic text-on-cream text-2xl md:text-3xl leading-[1.25] max-w-[30ch]">
                    Make intelligent operations reliable, measurable and owned by your team.
                  </p>
                </div>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="surface-ivory py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
            <div className="md:col-span-8">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#6E5940] mb-6">What we believe</p>
                <h2 className="font-display text-on-cream !text-[36px] md:!text-[62px] leading-[1.02] tracking-[-0.015em] max-w-[20ch]">
                  Four positions we{" "}
                  <span className="italic text-[#A56735]">hold firmly.</span>
                </h2>
              </MotionElement>
            </div>
          </div>

          <ol className="divide-y divide-[#3A2915]/15 border-y border-[#3A2915]/15">
            {BELIEFS.map((b, i) => (
              <MotionElement key={b.n} animation="slideUp" delay={50 + i * 50}>
                <li className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12">
                  <div className="md:col-span-2">
                    <span className="font-display italic text-[#A56735] text-4xl md:text-5xl leading-none">
                      {b.n}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-on-cream text-2xl md:text-4xl leading-[1.05]">
                      {b.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[52ch]">{b.body}</p>
                  </div>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* Facts */}
      <section className="surface-deep py-20 md:py-28 border-b border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {FACTS.map((f, i) => (
              <MotionElement key={f.l} animation="slideUp" delay={40 + i * 50}>
                <div>
                  <p className="font-display text-[#F6D3A2] text-[52px] md:text-[76px] leading-none tracking-[-0.02em]">
                    {f.v}
                  </p>
                  <p className="text-[#FDEED8]/75 text-[14px] mt-4">{f.l}</p>
                </div>
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
              <p className="eyebrow text-[#281C0B]/70 mb-6">Work with us</p>
              <h2 className="font-display text-on-cream !text-[40px] md:!text-[76px] leading-[1] tracking-[-0.02em] max-w-[16ch]">
                A short conversation is{" "}
                <span className="italic">the whole commitment.</span>
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                Tell us how the work runs today. We&rsquo;ll tell you honestly whether we are the right people for it.
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
                <Link to="/contact" className="btn-ghost-on-cream">
                  Send a Message
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

export default AboutUs;
