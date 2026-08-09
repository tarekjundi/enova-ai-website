import { ReactNode } from "react";
import { MotionElement } from "@/components/MotionElements";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  meta?: string;
}

/**
 * Inner-page hero. Deliberately quiet: no CTAs, no decorative rules.
 * Internal H1s sit a step below the homepage hero.
 */
const PageHeader = ({ eyebrow, title, intro, meta }: PageHeaderProps) => {
  return (
    <section className="surface-deep-grad pt-28 md:pt-36 pb-14 md:pb-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="measure-page">
          <MotionElement animation="slideUp" delay={40}>
            <p className="eyebrow text-[#D8C4A8] mb-6">{eyebrow}</p>
          </MotionElement>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <MotionElement animation="slideUp" delay={110}>
                <h1 className="font-display text-[#FFF9F1] t-page max-w-[16ch]">{title}</h1>
              </MotionElement>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <MotionElement animation="slideUp" delay={180}>
                <p className="text-[#FDEED8] t-body max-w-[52ch]">{intro}</p>
                {meta && <p className="eyebrow text-[#D8C4A8] mt-7">{meta}</p>}
              </MotionElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
