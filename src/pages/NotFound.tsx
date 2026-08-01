import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found —", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen surface-deep flex flex-col" id="top">
      <Navbar />

      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-10 pt-40 pb-28">
          <p className="eyebrow text-[#C8B59C] mb-8">Error 404</p>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[#FFF9F1] !text-[44px] sm:!text-[64px] lg:!text-[88px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
                This page has{" "}
                <span className="italic text-[#F6D3A2]">moved on.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pb-3">
              <p className="text-[#FDEED8] text-[17px] leading-[1.75] max-w-[40ch] mb-9">
                The link you followed no longer points anywhere. Here is the way back.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/" className="btn-primary group">
                  Back to home
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link to="/contact" className="btn-ghost-on-deep group">
                  Contact us
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#F6D3A2]/20 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { to: "/services", label: "Services" },
              { to: "/industries", label: "Industries" },
              { to: "/case-studies", label: "Work" },
              { to: "/process", label: "Process" },
              { to: "/insights", label: "Insights" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#FDEED8]/75 hover:text-[#F6D3A2] transition-colors text-[15px]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
