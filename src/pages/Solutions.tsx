
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { MotionElement } from "@/components/MotionElements";
import { ArrowRight, FileText, Box, Headphones, Check } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Process Automation",
      desc: "Streamline repetitive tasks and workflows",
      body: "Our process automation solutions help businesses eliminate manual, repetitive tasks, freeing up time and resources for more valuable work.",
      features: [
        "Document processing and data extraction",
        "Workflow optimization and management",
        "Task scheduling and monitoring systems",
      ],
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Decision Intelligence",
      desc: "AI-powered decision automation",
      body: "Our decision intelligence platform uses AI and machine learning to help businesses make better decisions faster and with greater confidence.",
      features: [
        "Predictive analytics and forecasting",
        "Risk assessment and mitigation tools",
        "Automated decision frameworks",
      ],
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Engagement",
      desc: "Enhanced customer interaction automation",
      body: "Our customer engagement solutions help businesses deliver personalized, timely, and relevant communications to their customers.",
      features: [
        "Automated customer service responses",
        "Personalized marketing campaigns",
        "Customer journey optimization tools",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionElement animation="slideUp" delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">
                What we do
              </p>
              <h1 className="mb-6">
                Our <span className="text-gradient">Solutions</span>
              </h1>
            </MotionElement>
            <MotionElement animation="slideUp" delay={300}>
              <p className="text-lg text-muted-foreground">
                Comprehensive automation solutions tailored to your business needs.
              </p>
            </MotionElement>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <MotionElement key={i} animation="slideUp" delay={100 + i * 100}>
                <div className="glass rounded-2xl p-8 h-full hover-lift group flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{sol.desc}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">{sol.body}</p>
                  <ul className="space-y-3 mt-auto">
                    {sol.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-foreground/70">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionElement animation="slideUp">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <div className="relative z-10">
                <h2 className="text-primary-foreground mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
                  Schedule a consultation with our automation experts to discover the right solutions for your business needs.
                </p>
                <a
                  href="https://cal.com/tarek-jundi/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-full font-medium gap-2 group">
                    Book a Demo
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

export default Solutions;
