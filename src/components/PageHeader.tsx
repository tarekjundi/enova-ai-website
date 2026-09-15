import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { MotionElement } from "@/components/MotionElements";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro: string;
  cta?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; to: string };
  meta?: string;
}

const PageHeader = ({ title, intro, cta, meta }: PageHeaderProps) => {
  return (
    <section className="surface-deep-grad pt-36 md:pt-44 pb-16 md:pb-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <MotionElement animation="slideUp" delay={100}>
              <h1 className="font-display text-[#FFF9F1] leading-[0.96] !text-[clamp(40px,6.5vw,84px)] max-w-[15ch]">
                {title}
              </h1>
            </MotionElement>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pb-3">
            <MotionElement animation="slideUp" delay={180}>
              <p className="text-[#FDEED8]/85 max-w-[44ch]">{intro}</p>

              {cta && (
                <div className="mt-8">
                  {cta.external ? (
                    <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                      {cta.label}
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <Link to={cta.href} className="btn-primary group">
                      {cta.label}
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              )}
            </MotionElement>
          </div>
        </div>

        {meta && (
          <MotionElement animation="slideUp" delay={260}>
            <div className="mt-14">
              <p className="text-[#C9B393] text-[14px]">{meta}</p>
            </div>
          </MotionElement>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
