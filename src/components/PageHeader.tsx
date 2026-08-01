import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { MotionElement } from "@/components/MotionElements";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  cta?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; to: string };
  meta?: string;
}

const PageHeader = ({ eyebrow, title, intro, cta, secondary, meta }: PageHeaderProps) => {
  return (
    <section className="surface-deep-grad pt-36 md:pt-44 pb-20 md:pb-28">
      <div className="container mx-auto px-6 lg:px-10">
        <MotionElement animation="slideUp" delay={40}>
          <p className="eyebrow text-[#C8B59C] mb-8">{eyebrow}</p>
        </MotionElement>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <MotionElement animation="slideUp" delay={110}>
              <h1 className="font-display text-[#FFF9F1] leading-[1.02] tracking-[-0.02em] !text-[42px] sm:!text-[58px] lg:!text-[80px] max-w-[16ch]">
                {title}
              </h1>
            </MotionElement>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pb-3">
            <MotionElement animation="slideUp" delay={200}>
              <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[44ch]">{intro}</p>

              {(cta || secondary) && (
                <div className="flex flex-wrap items-center gap-3 mt-9">
                  {cta &&
                    (cta.external ? (
                      <a
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group"
                      >
                        {cta.label}
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <Link to={cta.href} className="btn-primary group">
                        {cta.label}
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </Link>
                    ))}

                  {secondary && (
                    <Link
                      to={secondary.to}
                      className="inline-flex items-center gap-2 text-[#FFF9F1] text-[15px] font-medium border-b border-[#F6D3A2]/40 hover:border-[#F6D3A2] hover:text-[#F6D3A2] transition-colors duration-300 pb-1 group"
                    >
                      {secondary.label}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}
                </div>
              )}
            </MotionElement>
          </div>
        </div>

        <MotionElement animation="slideUp" delay={300}>
          <div className="mt-20 md:mt-24 grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <div className="h-px w-full bg-[#F6D3A2]/25" />
            </div>
            {meta && (
              <div className="md:col-span-4 flex md:justify-end">
                <p className="eyebrow text-[#C8B59C]">{meta}</p>
              </div>
            )}
          </div>
        </MotionElement>
      </div>
    </section>
  );
};

export default PageHeader;
