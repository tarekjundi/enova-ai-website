import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import { MotionElement } from "@/components/MotionElements";
import { ArrowUpRight } from "@phosphor-icons/react";
import { blogPosts } from "@/data/blogPosts";

const Insights = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Notes on operations,{" "}
            <span className="italic text-[#F6D3A2]">written between builds.</span>
          </>
        }
        intro="Short, practical pieces on what actually works when AI meets a real business process — and what quietly does not."
        meta={`${blogPosts.length} articles`}
      />

      {/* Featured */}
      {featured && (
        <section className="surface-cream py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-10">
            <MotionElement animation="slideUp">
              <p className="eyebrow text-[#4A3720] mb-10">Latest</p>
              <Link
                to={`/insights/${featured.id}`}
                className="group grid md:grid-cols-12 gap-10 md:gap-14 items-start"
              >
                <div className="md:col-span-5">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{ background: "linear-gradient(135deg, #281C0B 0%, #6E5940 60%, #A56735 100%)" }}
                  />
                </div>
                <div className="md:col-span-7 md:pt-2">
                  <p className="eyebrow text-[#A56735] mb-4">
                    {featured.category} &nbsp;·&nbsp; {featured.readTime}
                  </p>
                  <h2 className="font-display text-on-cream !text-[32px] md:!text-[54px] leading-[1.04] tracking-[-0.02em] mb-6 max-w-[22ch] group-hover:text-[#A56735] transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="text-on-cream-body text-[17px] leading-[1.8] max-w-[56ch] mb-8">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-on-cream text-[15px] font-medium border-b border-[#3A2915]/40 group-hover:border-[#A56735] group-hover:text-[#A56735] transition-colors duration-300 pb-1">
                    Read the article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </MotionElement>
          </div>
        </section>
      )}

      {/* Index */}
      <section className="surface-ivory py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <p className="eyebrow text-[#4A3720] mb-10">All articles</p>
          </MotionElement>

          <div className="border-t border-[#3A2915]/20">
            {rest.map((post, i) => (
              <MotionElement key={post.id} animation="slideUp" delay={40 + i * 40}>
                <article className="border-b border-[#3A2915]/20">
                  <Link
                    to={`/insights/${post.id}`}
                    className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-start hover:bg-[#281C0B]/[0.03] transition-colors duration-500 -mx-4 md:-mx-6 px-4 md:px-6"
                  >
                    <div className="md:col-span-2">
                      <p className="eyebrow text-[#A56735]">{post.date}</p>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="font-display text-on-cream text-2xl md:text-[38px] leading-[1.06] tracking-[-0.015em] group-hover:text-[#A56735] transition-colors duration-500 max-w-[24ch]">
                        {post.title}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-on-cream-body text-[16px] leading-[1.75] max-w-[48ch]">
                        {post.excerpt}
                      </p>
                      <p className="text-on-cream-muted text-[13px] mt-4">
                        {post.category} &nbsp;·&nbsp; {post.readTime}
                      </p>
                    </div>
                    <div className="md:col-span-1 md:text-right">
                      <ArrowUpRight
                        size={22}
                        className="text-on-cream/50 group-hover:text-[#A56735] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500 inline-block"
                      />
                    </div>
                  </Link>
                </article>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Insights;
