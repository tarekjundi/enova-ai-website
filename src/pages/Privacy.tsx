import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";

const SECTIONS = [
  {
    n: "01",
    title: "What we collect",
    body: [
      "Details you send us directly: your name, email address, company and the content of any message or booking you submit.",
      "Basic technical data your browser provides — pages viewed, referring page, approximate location and device type — used only to understand how the site is used.",
    ],
  },
  {
    n: "02",
    title: "How we use it",
    body: [
      "To reply to your enquiry, prepare for a consultation and deliver work you have engaged us for.",
      "To improve the clarity and performance of this website. We do not sell, rent or trade your information to anyone.",
    ],
  },
  {
    n: "03",
    title: "How we protect it",
    body: [
      "Enquiry data is stored in access-controlled systems and shared only with the people working on your engagement.",
      "Client project data is handled under the confidentiality terms of the relevant engagement agreement, and deleted on request at its conclusion.",
    ],
  },
  {
    n: "04",
    title: "Your choices",
    body: [
      "You can ask us at any time what information we hold about you, request a correction, or ask us to delete it entirely.",
      "Write to tarek@enovaagency.com and we will action the request within thirty days.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Privacy, stated{" "}
            <span className="italic text-[#F6D3A2]">without the legalese.</span>
          </>
        }
        intro="We collect as little as possible, use it only to do the work you asked for, and delete it whenever you ask."
      />

      <section className="surface-cream py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <ol className="border-t border-[#3A2915]/20">
            {SECTIONS.map((s, i) => (
              <MotionElement key={s.n} animation="slideUp" delay={40 + i * 50}>
                <li className="border-b border-[#3A2915]/20 grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16">
                  <div className="md:col-span-1">
                    <span className="eyebrow text-[#A56735]">{s.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-on-cream !text-[28px] md:!text-[42px] leading-[1.05] tracking-[-0.015em] max-w-[16ch]">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-7 space-y-5">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-on-cream-body text-[17px] leading-[1.8] max-w-[58ch]">
                        {p}
                      </p>
                    ))}
                  </div>
                </li>
              </MotionElement>
            ))}
          </ol>

          <MotionElement animation="slideUp" delay={220}>
            <div className="mt-16 pt-8 border-t border-[#3A2915]/20">
              <p className="eyebrow text-[#6E5940] mb-4">Questions</p>
              <a
                href="mailto:tarek@enovaagency.com"
                className="font-display text-on-cream text-2xl md:text-[38px] leading-[1.1] hover:text-[#A56735] transition-colors break-words"
              >
                tarek@enovaagency.com
              </a>
            </div>
          </MotionElement>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Privacy;
