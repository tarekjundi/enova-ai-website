import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our <span className="text-neonGreen">Solutions</span></h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </FadeInSection>
        </div>
      </section>
      
      {/* Solutions Overview */}
      <section className="py-16 bg-darkTeal/80">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white animate-slide-in-left hover-float transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen animate-bounce-in">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M8 18v-1" />
                      <path d="M12 18v-6" />
                      <path d="M16 18v-3" />
                    </svg>
                    Process Automation
                  </CardTitle>
                  <CardDescription className="text-gray-300 animate-slide-up">
                    Streamline repetitive tasks and workflows
                  </CardDescription>
                </CardHeader>
                <CardContent className="animate-fade-in pb-6">
                  <p className="mb-4">Our process automation solutions help businesses eliminate manual, repetitive tasks, freeing up time and resources for more valuable work.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Document processing and data extraction</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Workflow optimization and management</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Task scheduling and monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white animate-fade-in hover-float transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen animate-bounce-in">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.29 7 12 12l8.71-5" />
                      <path d="M12 22V12" />
                    </svg>
                    Decision Intelligence
                  </CardTitle>
                  <CardDescription className="text-gray-300 animate-slide-up">
                    AI-powered decision automation
                  </CardDescription>
                </CardHeader>
                <CardContent className="animate-fade-in pb-6">
                  <p className="mb-4">Our decision intelligence platform uses AI and machine learning to help businesses make better decisions faster and with greater confidence.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Predictive analytics and forecasting</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Risk assessment and mitigation</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Automated decision frameworks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white animate-slide-in-right hover-float transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen animate-bounce-in">
                      <path d="M22 8.5c0 1.5-3 3-3 3m3-3c0-1.5-3-3-3-3m3 3h-6m-7-3C6 7 3 8.5 3 10m3-4.5c2 1.5 2 5 2 5m-5 2c0 1.5 3 3 3 3m-3-3c0-1.5 3-3 3-3m-3 3h6" />
                      <path d="M9 17.25c0 .97.75 1.75 1.67 1.75h2.66c.92 0 1.67-.78 1.67-1.75v-3.25h-6v3.25Z" />
                      <path d="M13 14v4" />
                      <path d="M10 14v4" />
                      <path d="M14 10a2 2 0 0 0-4 0" />
                    </svg>
                    Customer Engagement
                  </CardTitle>
                  <CardDescription className="text-gray-300 animate-slide-up">
                    Enhanced customer interaction automation
                  </CardDescription>
                </CardHeader>
                <CardContent className="animate-fade-in pb-6">
                  <p className="mb-4">Our customer engagement solutions help businesses deliver personalized, timely, and relevant communications to their customers.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Automated customer service responses</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Personalized marketing campaigns</span>
                    </li>
                    <li className="flex items-start gap-2 animate-slide-in-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen mt-1">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Customer journey optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-neonGreen">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-6 text-darkTeal animate-fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-darkTeal/80 max-w-3xl mx-auto mb-8 animate-slide-up">
              Schedule a consultation with our automation experts to discover the right solutions for your business needs.
            </p>

            <div className="animate-bounce-in">
              <a
                href="https://cal.com/tarek-jundi/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-darkTeal text-neonGreen hover:bg-darkTeal/90 text-lg px-8 py-6 hover-glow transition-all duration-300">
                  Book a Demo
                </Button>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Solutions;
