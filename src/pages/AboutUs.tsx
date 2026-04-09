
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MotionElement } from "@/components/MotionElements";
import { Lightbulb, Globe, Shield, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    { icon: <Lightbulb className="h-5 w-5" />, num: "01", title: "Innovation", desc: "We're constantly pushing the boundaries of what's possible with automation technology." },
    { icon: <Globe className="h-5 w-5" />, num: "02", title: "Accessibility", desc: "We believe powerful automation should be accessible to businesses of all sizes." },
    { icon: <Shield className="h-5 w-5" />, num: "03", title: "Integrity", desc: "We operate with transparency and honesty in everything we do." },
    { icon: <Heart className="h-5 w-5" />, num: "04", title: "Customer Success", desc: "Your success is our success. We're dedicated to helping you achieve your goals." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="top">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionElement animation="slideUp" delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                Our Story
              </p>
              <h1 className="mb-6">
                About <span className="text-gradient">ENOVA</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <p className="text-lg text-muted-foreground">
                Transforming businesses through intelligent automation since 2020.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                Our Mission
              </p>
              <h2 className="text-2xl md:text-3xl mb-8">
                Unlocking human potential through automation
              </h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <div className="space-y-6 text-foreground/80">
                <p>
                  At ENOVA, we believe that automation is the key to unlocking human potential. Our mission is to empower businesses of all sizes to streamline operations, reduce costs, and free up their teams to focus on innovation and growth.
                </p>
                <p>
                  We're committed to developing cutting-edge automation solutions that are accessible, intuitive, and effective. By harnessing the power of artificial intelligence and machine learning, we're helping businesses around the world transform their operations and achieve more than they ever thought possible.
                </p>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                What drives us
              </p>
              <h2>Our Core Values</h2>
            </div>
          </MotionElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className="glass rounded-2xl p-8 h-full hover-lift group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    {v.icon}
                  </div>
                  <span className="text-xs text-primary/40 font-mono">{v.num}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
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

export default AboutUs;
