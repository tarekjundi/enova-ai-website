
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, Zap, Brain, Users, BarChart3, Settings, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <MotionElement animation="slideUp" delay={100}>
              <h1 className="mb-6">
                Automate your workflow
                <br />
                with <span className="text-gradient">precision</span>
              </h1>
            </MotionElement>
            
            <MotionElement animation="slideUp" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Streamline your business processes and increase productivity with our cutting-edge automation solutions.
              </p>
            </MotionElement>
            
            <MotionElement animation="slideUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    Start Automating
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#features">
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-primary/5 hover:border-primary/30 text-base px-8 py-6 rounded-full font-medium"
                  >
                    See How It Works
                  </Button>
                </a>
              </div>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="section-divider mb-20" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <MotionElement animation="slideUp" delay={100}>
              <div className="text-center">
                <AnimatedCounter end={85} suffix="%" />
                <p className="text-muted-foreground text-sm mt-1">Reduction in manual tasks</p>
              </div>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <div className="text-center">
                <AnimatedCounter end={7.8} suffix="x" />
                <p className="text-muted-foreground text-sm mt-1">Increase in productivity</p>
              </div>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2 font-founders">24/7</p>
                <p className="text-muted-foreground text-sm mt-1">Continuous operation</p>
              </div>
            </MotionElement>
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                What we offer
              </p>
              <h2 className="mb-4">Powerful Automation Features</h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <p className="text-muted-foreground">
                Comprehensive tools to automate every aspect of your business.
              </p>
            </MotionElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Process Automation",
                desc: "Automate repetitive business processes",
                body: "Streamline workflows by automating manual, repetitive tasks with intelligent process automation that learns and adapts to your business needs.",
              },
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Smart Decision Making",
                desc: "AI-powered decision automation",
                body: "Let AI analyze data and make intelligent decisions based on your business rules, reducing human error and increasing efficiency.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Customer Engagement",
                desc: "Automated customer interactions",
                body: "Enhance customer experience with automated responses, personalized communication, and timely follow-ups that keep customers engaged.",
              },
            ].map((feature, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className="glass rounded-2xl p-8 h-full hover-lift group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.desc}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <MotionElement animation="slideUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                Our Process
              </p>
              <h2 className="mb-4">How Automation Works</h2>
            </MotionElement>
            <MotionElement animation="slideUp" delay={200}>
              <p className="text-muted-foreground">
                Our simple three-step process makes implementing automation seamless.
              </p>
            </MotionElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Analyze",
                desc: "We analyze your current workflows and identify opportunities for automation, focusing on high-impact areas that will deliver immediate results.",
              },
              {
                step: "02",
                icon: <Settings className="h-6 w-6" />,
                title: "Implement",
                desc: "Our experts design and implement custom automation solutions tailored to your specific business needs, integrating with your existing systems.",
              },
              {
                step: "03",
                icon: <Sparkles className="h-6 w-6" />,
                title: "Optimize",
                desc: "We continuously monitor and optimize your automated processes, ensuring they evolve with your business and deliver maximum ROI.",
              },
            ].map((item, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 150}>
                <div className="relative glass rounded-2xl p-8 hover-lift group">
                  <span className="text-6xl font-bold text-primary/[0.06] font-founders absolute top-4 right-6 select-none">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              
              <div className="relative z-10">
                <h2 className="text-primary-foreground mb-4">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
                  Join businesses that have transformed their operations with our automation platform.
                </p>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    Schedule a Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </MotionElement>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
