
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PencilSimple, Smiley, Sun, Shield, Briefcase, MapPin, GraduationCap, ChartLineUp, CreditCard } from "@phosphor-icons/react";

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
                  <PencilSimple size={32} weight="light" className="text-neonGreen" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Work</h3>
                <p className="text-gray-300">
                  Work on cutting-edge automation technology that's transforming how businesses operate.
                </p>
              </div>
              
              <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 text-center">
                <div className="w-16 h-16 rounded-full bg-neonGreen/10 mx-auto mb-6 flex items-center justify-center">
                  <Smiley size={32} weight="light" className="text-neonGreen" />
                </div>
                <h3 className="text-xl font-bold mb-3">Positive Culture</h3>
                <p className="text-gray-300">
                  Join a collaborative, supportive team that values work-life balance and personal growth.
                </p>
              </div>
              
              <div className="bg-darkTeal/40 p-6 rounded-lg border border-neonGreen/20 text-center">
                <div className="w-16 h-16 rounded-full bg-neonGreen/10 mx-auto mb-6 flex items-center justify-center">
                  <Sun size={32} weight="light" className="text-neonGreen" />
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
                    <Shield size={24} weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Healthcare</h3>
                    <p className="text-gray-300">Medical, dental, and vision coverage for you and your dependents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <Briefcase size={24} weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Flexible Work</h3>
                    <p className="text-gray-300">Remote-friendly options and flexible scheduling to fit your lifestyle.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <MapPin size={24} weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Paid Time Off</h3>
                    <p className="text-gray-300">Generous vacation policy that encourages rest and rejuvenation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <GraduationCap size={24} weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuing Education</h3>
                    <p className="text-gray-300">Learning stipends and dedicated time for professional development.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <ChartLineUp size={24} weight="light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Competitive Retirement</h3>
                    <p className="text-gray-300">401(k) plan with generous company matching.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-neonGreen">
                    <CreditCard size={24} weight="light" />
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
