import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { MotionElement } from "@/components/MotionElements";

const CAL = "https://cal.com/tarek-jundi/free-consultation";
const RECOVERY = 0.65;

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const money = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${fmt(Math.round(n / 1000))}k`;

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display: string;
  onChange: (v: number) => void;
};

const Slider = ({ label, value, min, max, step = 1, display, onChange }: SliderProps) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="py-6 border-b border-[#3A2915]/15">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <label className="text-[#281C0B] text-[15px] font-bold">{label}</label>
        <span className="font-display text-on-cream text-[26px] leading-none tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className="diag-range w-full"
        style={{ background: `linear-gradient(to right, #94572A ${pct}%, rgba(58,41,21,0.18) ${pct}%)` }}
      />
    </div>
  );
};

const WorkflowDiagnostic = () => {
  const [team, setTeam] = useState(12);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(50);

  const hoursLost = team * hours * 52;
  const cost = hoursLost * rate;
  const recoverable = cost * RECOVERY;
  const fte = (hoursLost * RECOVERY) / 1800;

  return (
    <section className="surface-ivory py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <MotionElement animation="slideUp">
              <h2 className="font-display text-on-cream !text-[clamp(32px,4.4vw,58px)] leading-[0.98] max-w-[14ch]">
                What manual work is costing you.
              </h2>
              <p className="mt-6 text-on-cream-muted max-w-[44ch]">
                Re-keying data, chasing status, checking spreadsheets. Move the sliders to see the
                yearly cost of the work your team does by hand.
              </p>
            </MotionElement>
            <MotionElement animation="slideUp" delay={120}>
              <div className="mt-8 border-t border-[#3A2915]/15">
                <Slider label="People doing manual work" value={team} min={1} max={100} display={String(team)} onChange={setTeam} />
                <Slider label="Manual hours per person, weekly" value={hours} min={1} max={25} display={`${hours} h`} onChange={setHours} />
                <Slider label="Average hourly cost" value={rate} min={20} max={150} step={5} display={`$${rate}`} onChange={setRate} />
              </div>
            </MotionElement>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <MotionElement animation="slideUp" delay={160}>
              <div className="bg-[#281D0B] p-8 md:p-12">
                <p className="text-[#C9B393] text-[14px] font-medium">Yearly cost of manual work</p>
                <p className="font-display text-[#F6D5A0] text-[64px] md:text-[96px] leading-[0.9] mt-4 tabular-nums" aria-live="polite">
                  {money(cost)}
                </p>

                <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-[#F6D5A0]/15">
                  <div>
                    <p className="font-display text-[#FFF9F1] text-[30px] md:text-[38px] leading-none tabular-nums">{fmt(hoursLost)}</p>
                    <p className="text-[#FDEED8]/70 text-[14px] mt-2">Hours lost per year</p>
                  </div>
                  <div>
                    <p className="font-display text-[#FFF9F1] text-[30px] md:text-[38px] leading-none tabular-nums">{fte.toFixed(1)}</p>
                    <p className="text-[#FDEED8]/70 text-[14px] mt-2">Full-time roles you could free up</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#F6D5A0]/15">
                  <p className="text-[#FDEED8]/85 text-[16px] leading-[1.6]">
                    About <span className="text-[#F6D5A0] font-semibold">{money(recoverable)}</span> a year
                    could come back to your team, assuming a conservative 65% of this work is automated.
                  </p>
                  <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group justify-center !py-4 !px-7 mt-8 w-full sm:w-auto">
                    Book an Opportunity Audit
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <p className="text-[#FDEED8]/50 text-[12px] mt-5">Estimate only. Based on 52 weeks and 1,800 working hours per role.</p>
                </div>
              </div>
            </MotionElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagnostic;
