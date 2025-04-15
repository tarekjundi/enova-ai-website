
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our <span className="text-neonGreen">Team</span></h1>
          <p className="text-xl text-gray-300 mb-8">
            Help us build the future of business automation and grow your career with AutomateX.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 bg-darkTeal/80">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Why Work at AutomateX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 text-center">
                <div className="w-16 h-16 rounded-full bg-neonGreen/10 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Work</h3>
                <p className="text-gray-300">
                  Work on cutting-edge automation technology that's transforming how businesses operate.
                </p>
              </div>
              
              <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 text-center">
                <div className="w-16 h-16 rounded-full bg-neonGreen/10 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Positive Culture</h3>
                <p className="text-gray-300">
                  Join a collaborative, supportive team that values work-life balance and personal growth.
                </p>
              </div>
              
              <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 text-center">
                <div className="w-16 h-16 rounded-full bg-neonGreen/10 mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neonGreen">
                    <line x1="12" x2="12" y1="2" y2="6" />
                    <line x1="12" x2="12" y1="18" y2="22" />
                    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                    <line x1="2" x2="6" y1="12" y2="12" />
                    <line x1="18" x2="22" y1="12" y2="12" />
                    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                <p className="text-gray-300">
                  Develop your skills and advance your career through our mentorship and professional development programs.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Healthcare</h3>
                    <p className="text-gray-300">Medical, dental, and vision coverage for you and your dependents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Flexible Work</h3>
                    <p className="text-gray-300">Remote-friendly options and flexible scheduling to fit your lifestyle.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Paid Time Off</h3>
                    <p className="text-gray-300">Generous vacation policy that encourages rest and rejuvenation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuing Education</h3>
                    <p className="text-gray-300">Learning stipends and dedicated time for professional development.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                      <path d="M16.5 9.4 7.55 4.24" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                      <circle cx="18.5" cy="15.5" r="2.5" />
                      <path d="M20.27 17.27 22 19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Competitive Retirement</h3>
                    <p className="text-gray-300">401(k) plan with generous company matching.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="12" x="2" y="6" rx="2" />
                      <path d="M12 12h.01" />
                      <path d="M17 12h.01" />
                      <path d="M7 12h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Employee Stock Options</h3>
                    <p className="text-gray-300">Share in the company's success with equity opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Senior AI Engineer</h3>
                      <p className="text-neonGreen mb-2">Engineering Department • Remote</p>
                      <p className="text-gray-300 mb-4 md:mb-0">
                        Lead the development of our AI-powered automation solutions.
                      </p>
                    </div>
                    <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Product Manager</h3>
                      <p className="text-neonGreen mb-2">Product Department • San Francisco, CA</p>
                      <p className="text-gray-300 mb-4 md:mb-0">
                        Shape the future of our automation platform through user-centric design.
                      </p>
                    </div>
                    <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Customer Success Manager</h3>
                      <p className="text-neonGreen mb-2">Customer Success Department • Boston, MA</p>
                      <p className="text-gray-300 mb-4 md:mb-0">
                        Help our customers implement and maximize the value of our solutions.
                      </p>
                    </div>
                    <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Marketing Specialist</h3>
                      <p className="text-neonGreen mb-2">Marketing Department • Remote</p>
                      <p className="text-gray-300 mb-4 md:mb-0">
                        Create compelling content that showcases our automation solutions.
                      </p>
                    </div>
                    <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl mb-6">Don't see the right position? Send us your resume anyway!</p>
              <Button variant="outline" className="border-neonGreen text-neonGreen hover:bg-neonGreen/10">
                Submit General Application
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Careers;
