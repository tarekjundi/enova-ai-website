import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { blogPosts } from "@/data/blogPosts";

const InsightPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => String(p.id) === String(id));
  const others = blogPosts.filter((p) => String(p.id) !== String(id)).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen surface-deep" id="top">
        <Navbar />
        <section className="container mx-auto px-6 lg:px-10 pt-48 pb-40">
          <p className="eyebrow text-[#D8C4A8] mb-6">Not found</p>
          <h1 className="font-display text-[#FFF9F1] !text-[40px] md:!text-[72px] leading-[1.02] mb-10">
            That article no longer exists.
          </h1>
          <Link to="/insights" className="btn-primary">
            Back to Insights
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen surface-deep overflow-x-hidden" id="top">
      <Navbar />

      {/* Header */}
      <section className="surface-deep-grad pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-10">
          <MotionElement animation="slideUp">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 eyebrow text-[#D8C4A8] hover:text-[#F6D3A2] transition-colors mb-10"
            >
              <ArrowLeft size={14} /> All insights
            </Link>
          </MotionElement>

          <MotionElement animation="slideUp" delay={100}>
            <p className="eyebrow text-[#F6D3A2] mb-6">
              {post.category} &nbsp;·&nbsp; {post.readTime}
            </p>
            <h1 className="font-display text-[#FFF9F1] !text-[36px] md:!text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[20ch]">
              {post.title}
            </h1>
          </MotionElement>

          <MotionElement animation="slideUp" delay={180}>
            <div className="mt-14 pt-6 border-t border-[#F6D3A2]/20 flex flex-wrap gap-x-8 gap-y-2">
              <p className="eyebrow text-[#D8C4A8]">{post.date}</p>
              <p className="text-[#FDEED8]/80 text-[15px] max-w-[60ch]">{post.excerpt}</p>
            </div>
          </MotionElement>
        </div>
      </section>

      {/* Body */}
      <section className="surface-cream py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12">
            <article
              className="md:col-span-8 md:col-start-3
                [&_h2]:font-display [&_h2]:text-on-cream [&_h2]:text-[30px] [&_h2]:md:text-[46px] [&_h2]:leading-[1.06] [&_h2]:tracking-[-0.02em] [&_h2]:mb-8 [&_h2]:mt-14 [&_h2]:first:mt-0
                [&_h3]:font-display [&_h3]:text-on-cream [&_h3]:text-[24px] [&_h3]:md:text-[32px] [&_h3]:leading-[1.1] [&_h3]:mt-12 [&_h3]:mb-4
                [&_p]:text-on-cream-body [&_p]:text-[17px] [&_p]:md:text-[18px] [&_p]:leading-[1.85] [&_p]:mb-6
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:text-on-cream-body [&_li]:leading-[1.8] [&_li]:mb-2
                [&_a]:text-[#A56735] [&_a]:underline [&_a]:underline-offset-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* More */}
      {others.length > 0 && (
        <section className="surface-ivory py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-10">
            <p className="eyebrow text-[#6E5940] mb-10">Keep reading</p>
            <div className="border-t border-[#3A2915]/20">
              {others.map((o) => (
                <Link
                  key={o.id}
                  to={`/insights/${o.id}`}
                  className="group block border-b border-[#3A2915]/20 py-8 md:py-10"
                >
                  <p className="eyebrow text-[#A56735] mb-3">{o.category}</p>
                  <h3 className="font-display text-on-cream text-2xl md:text-[34px] leading-[1.08] max-w-[26ch] group-hover:text-[#A56735] transition-colors duration-500">
                    {o.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="surface-gold py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-on-cream !text-[34px] md:!text-[62px] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
                Want this applied to{" "}
                <span className="italic">your operation?</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <a
                href="https://cal.com/tarek-jundi/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-on-cream group !bg-[#281C0B] !text-[#FFF9F1] !border-[#281C0B] hover:!bg-[#15110C]"
              >
                Discuss a Workflow
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default InsightPost;
