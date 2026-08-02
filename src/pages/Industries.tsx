import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

const SECTORS = [
  {
    n: "01",
    name: "Financial Services",
    body: "Client onboarding, KYC document handling, reconciliation and reporting rebuilt as auditable, monitored workflows.",
    work: ["Onboarding automation", "Document extraction", "Compliance reporting"],
  },
  {
    n: "02",
    name: "Healthcare & Clinics",
    body: "Intake, scheduling and follow-up handled without adding front-desk headcount — with strict boundaries on what automation may act on.",
    work: ["Patient intake", "Scheduling agents", "Records summarisation"],
  },
  {
    n: "03",
    name: "Real Estate",
    body: "Lead qualification, listing operations and client communication connected into one pipeline that agents actually use.",
    work: ["Lead qualification", "Listing operations", "Client follow-up"],
  },
  {
    n: "04",
    name: "Logistics & Supply Chain",
    body: "Order flow, exception handling and carrier communication automated so your team manages outliers instead of every shipment.",
    work: ["Exception handling", "Carrier comms", "Status reporting"],
  },
  {
    n: "05",
    name: "Professional Services",
    body: "Proposals, engagement setup and billing hand-offs standardised, so senior time goes to clients rather than paperwork.",
    work: ["Proposal generation", "Engagement setup", "Time & billing"],
  },
  {
    n: "06",
    name: "B2B SaaS",
    body: "Support deflection, onboarding sequences and revenue reporting built into the product and CRM your team already runs.",
    work: ["Support deflection", "Onboarding flows", "Revenue reporting"],
  },
  {
    n: "07",
    name: "E-Commerce & Retail",
    body: "Order support, returns and catalogue operations handled at volume, with escalation to humans where it matters.",
    work: ["Order support", "Returns handling", "Catalogue ops"],
  },
  {
    n: "08",
    name: "Manufacturing",
    body: "Quotation, procurement and production reporting connected end to end — so leadership sees the floor in real numbers.",
    work: ["Quotation flow", "Procurement", "Production reporting"],
  },
];

const MORE = [
  "Legal", "Insurance", "Education", "Hospitality", "Construction", "Energy",
  "Media & Publishing", "Non-profit", "Recruitment", "Travel", "Automotive",
  "Telecom", "Agriculture", "Public Sector", "Fitness & Wellness", "Events",
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
        cta={{
          label: "Book a Consultation",
          href: "https://cal.com/tarek-jundi/free-consultation",
          external: true,
        }}
        secondary={{ label: "See the work", to: "/case-studies" }}
        meta="20+ sectors served"
      />

      {/* Core sectors */}
      <section className="surface-cream py-28 md:py-40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-7">
              <MotionElement animation="slideUp">
                <p className="eyebrow text-[#5C4830] mb-6">Where we work most</p>
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
                <li className="border-b border-[#3A2915]/20 grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 group hover:bg-[#281C0B]/[0.03] transition-colors duration-500">
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
                    <p className="eyebrow text-[#5C4830] mb-4">Typical work</p>
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
      <section className="surface-deep py-24 md:py-32 border-b border-[#F6D3A2]/12">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <p className="eyebrow text-[#C8B59C] mb-8">Also serving</p>
          </MotionElement>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-0">
            {MORE.map((m, i) => (
              <MotionElement key={m} animation="slideUp" delay={30 + i * 20}>
                <p className="font-display text-[#FFF9F1]/90 text-2xl md:text-[28px] py-4 border-b border-[#F6D3A2]/12 tracking-[-0.01em]">
                  {m}
                </p>
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

export default Industries;
