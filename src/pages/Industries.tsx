import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight } from "@phosphor-icons/react";

const SECTORS = [
  {
    n: "01",
    name: "Professional Services",
    body: "Proposals, engagement setup and billing hand-offs standardised, so senior time goes to clients rather than paperwork.",
    work: ["Proposal generation", "Engagement setup", "Time & billing"],
  },
  {
    n: "02",
    name: "Financial Services",
    body: "Client onboarding, document handling, reconciliation and reporting rebuilt as auditable, monitored workflows.",
    work: ["Onboarding automation", "Document extraction", "Compliance reporting"],
  },
  {
    n: "03",
    name: "Healthcare & Clinics",
    body: "Intake, scheduling and follow-up handled without adding front-desk headcount, with strict limits on what automation may act on.",
    work: ["Patient intake", "Scheduling agents", "Records summarisation"],
  },
  {
    n: "04",
    name: "Real Estate",
    body: "Lead qualification, listing operations and client communication connected into one pipeline agents actually use.",
    work: ["Lead qualification", "Listing operations", "Client follow-up"],
  },
  {
    n: "05",
    name: "E-commerce",
    body: "Order support, returns and catalogue operations handled at volume, with escalation to humans where it matters.",
    work: ["Order support", "Returns handling", "Catalogue ops"],
  },
  {
    n: "06",
    name: "Hospitality",
    body: "Bookings, guest messaging and post-stay follow-up run consistently across channels, day and night.",
    work: ["Booking flow", "Guest messaging", "Review follow-up"],
  },
  {
    n: "07",
    name: "Education",
    body: "Admissions, student enquiries and administrative reporting handled without pulling staff away from teaching.",
    work: ["Admissions intake", "Student enquiries", "Reporting"],
  },
  {
    n: "08",
    name: "Construction",
    body: "Quotation, procurement and site reporting connected end to end, so leadership sees progress in real numbers.",
    work: ["Quotation flow", "Procurement", "Progress reporting"],
  },
];

const MORE = [
  "Logistics & Supply Chain", "B2B SaaS", "Manufacturing", "Legal", "Insurance",
  "Energy", "Media & Publishing", "Non-profit", "Recruitment", "Travel",
  "Automotive", "Telecom", "Agriculture", "Public Sector", "Fitness & Wellness", "Events",
];

const Industries = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Different sectors.{" "}
            <span className="italic text-[#F6D3A2]">The same operational pattern.</span>
          </>
        }
        intro="We work across regulated enterprises and fast-moving operators. The tools change; the discipline of scoping, building and measuring does not."
        meta="20+ sectors served"
      />

      {/* Core sectors */}
      <section className="surface-cream py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14">
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#4A3720] mb-6">Where we work most</p>
                <h2 className="font-display text-on-cream !text-[40px] md:!text-[64px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                  Eight sectors we know{" "}
                  <span className="italic text-[#A56735]">in detail.</span>
                </h2>
              </MotionElement>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-4">
              <MotionElement animation="slideUp" delay={140}>
                <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[42ch]">
                  In each of these we have shipped production systems, so scoping starts from experience rather than a blank page.
                </p>
              </MotionElement>
            </div>
          </div>

          <ol className="border-t border-[#3A2915]/20">
            {SECTORS.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={40 + i * 40}>
                <li className="border-b border-[#3A2915]/20 grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-11 group hover:bg-[#281C0B]/[0.03] transition-colors duration-500">
                  <div className="md:col-span-1">
                    <span className="eyebrow text-[#A56735]">{s.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-on-cream text-3xl md:text-[44px] leading-[1.04] tracking-[-0.015em] group-hover:text-[#A56735] transition-colors duration-500">
                      {s.name}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-on-cream-body text-[17px] leading-[1.75] max-w-[48ch]">{s.body}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="eyebrow text-[#4A3720] mb-4">Typical work</p>
                    <ul className="space-y-2">
                      {s.work.map((w) => (
                        <li key={w} className="text-on-cream-body text-[15px] leading-[1.6]">
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </MotionElement>
            ))}
          </ol>
        </div>
      </section>

      {/* Also serving */}
      <section className="surface-deep py-20 md:py-24 border-b border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <p className="eyebrow text-[#D8C4A8] mb-7">Also serving</p>
          </MotionElement>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-0">
            {MORE.map((m, i) => (
              <MotionElement key={m} animation="slideUp" delay={30 + i * 20}>
                <p className="font-body text-[#FDEED8] text-[16px] font-medium py-3.5 border-b border-[#F6D3A2]/12 tracking-[-0.005em]">
                  {m}
                </p>
              </MotionElement>
            ))}
          </div>

          <MotionElement animation="slideUp" delay={120}>
            <p className="mt-10 text-[#D8C4A8] text-[15px] leading-[1.75] max-w-[62ch]">
              If your sector is not listed, start with the workflow. If the process is repetitive and rule-based, there is likely an automation opportunity.
            </p>
          </MotionElement>
        </div>
      </section>


      {/* CTA */}
      <section className="surface-gold py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <MotionElement animation="slideUp" className="md:col-span-8">
              <p className="eyebrow text-[#281C0B]/85 mb-6">Your sector not listed?</p>
              <h2 className="font-display text-on-cream !text-[40px] md:!text-[72px] leading-[1] tracking-[-0.02em] max-w-[18ch]">
                Tell us the workflow.{" "}
                <span className="italic">We&rsquo;ll tell you honestly.</span>
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={140} className="md:col-span-4 md:pb-3">
              <p className="text-[#281C0B]/85 text-[17px] leading-[1.75] mb-8 max-w-[40ch]">
                If it is not a fit, we will say so in the first call rather than sell you a project.
              </p>
              <a
                href="https://cal.com/tarek-jundi/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
              >
                Tell Us About Your Process
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

export default Industries;
