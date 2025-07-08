import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  return (
    <div className="min-h-screen bg-darkTeal text-white" id="top">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Automate your workflow with <span className="text-neonGreen animate-pulse">precision</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-fade-in">
            Streamline your business processes and increase productivity with our cutting-edge automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <a
              href="https://cal.com/tarek-jundi/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 text-lg px-8 py-6 hover-scale">
                Start Automating
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="bg-darkTeal/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter end={85} suffix="%" />
              <p className="text-xl">Reduction in manual tasks</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter end={7.8} suffix="x" />
              <p className="text-xl">Increase in productivity</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-5xl font-bold text-neonGreen mb-2">24/7</p>
              <p className="text-xl">Continuous operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Automation Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our agency provides comprehensive tools to automate every aspect of your business.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInSection>
            <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <rect width="8" height="8" x="8" y="8" rx="2" />
                    <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
                    <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
                    <path d="M4 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" />
                    <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2" />
                    <path d="M14 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2" />
                    <path d="M20 14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" />
                  </svg>
                  Process Automation
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Automate repetitive business processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Streamline workflows by automating manual, repetitive tasks with intelligent process automation that learns and adapts to your business needs.</p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection>
            <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                    <path d="M3 8a9 9 0 0 1 9-5.5c5 0 9 3.5 9 8.5 0 2.5-2 4.5-4 6.5-2 2-3 5.5-3 5.5H6s-1-3.5-3-5.5C1 15.5 3 8 3 8z" />
                  </svg>
                  Smart Decision Making
                </CardTitle>
                <CardDescription className="text-gray-300">
                  AI-powered decision automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Let AI analyze data and make intelligent decisions based on your business rules, reducing human error and increasing efficiency.</p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection>
            <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  Customer Engagement
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Automated customer interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Enhance customer experience with automated responses, personalized communication, and timely follow-ups that keep customers engaged.</p>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How Automation Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our simple three-step process makes implementing automation seamless.
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neonGreen/30 -translate-x-1/2"></div>
            
            <div className="space-y-20">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="hidden md:block absolute top-0 left-1/2 w-6 h-6 rounded-full bg-neonGreen -translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-3">1. Analyze</h3>
                  <p className="text-gray-300">
                    We analyze your current workflows and identify opportunities for automation, focusing on high-impact areas that will deliver immediate results.
                  </p>
                </div>
                <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mx-auto mb-4">
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 4 4 6-6" />
                  </svg>
                </div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="hidden md:block absolute top-0 left-1/2 w-6 h-6 rounded-full bg-neonGreen -translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-3">2. Implement</h3>
                  <p className="text-gray-300">
                    Our experts design and implement custom automation solutions tailored to your specific business needs, integrating with your existing systems.
                  </p>
                </div>
                <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 md:order-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mx-auto mb-4">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66 1-1.73" />
                  </svg>
                </div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="hidden md:block absolute top-0 left-1/2 w-6 h-6 rounded-full bg-neonGreen -translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-3">3. Optimize</h3>
                  <p className="text-gray-300">
                    We continuously monitor and optimize your automated processes, ensuring they evolve with your business and deliver maximum ROI.
                  </p>
                </div>
                <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mx-auto mb-4">
                    <path d="M12 2v4" />
                    <path d="M5 5.5 7.5 8" />
                    <path d="M2 12h4" />
                    <path d="M5 18.5 7.5 16" />
                    <path d="M12 22v-4" />
                    <path d="m16.5 16 2.5 2.5" />
                    <path d="M22 12h-4" />
                    <path d="m16.5 8 2.5-2.5" />
                    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-neonGreen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-darkTeal">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-darkTeal/80 max-w-3xl mx-auto mb-10">
            Join thousands of businesses that have transformed their operations with automation platform.
          </p>
          
          <a
            href="https://cal.com/tarek-jundi/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-darkTeal text-neonGreen hover:bg-darkTeal/90 text-lg px-8 py-6 hover-scale">
              Schedule a Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
