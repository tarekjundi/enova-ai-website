import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-neonGreen">ENOVA</span></h1>
          <p className="text-xl text-gray-300 mb-8">
            Transforming businesses through intelligent automation since 2020.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-darkTeal/80">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <p className="text-xl mb-6">
                At ENOVA, we believe that automation is the key to unlocking human potential. Our mission is to empower businesses of all sizes to streamline operations, reduce costs, and free up their teams to focus on innovation and growth.
              </p>
              <p className="text-xl">
                We're committed to developing cutting-edge automation solutions that are accessible, intuitive, and effective. By harnessing the power of artificial intelligence and machine learning, we're helping businesses around the world transform their operations and achieve more than they ever thought possible.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-darkTeal/50 border-2 border-neonGreen/40 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-neonGreen/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-neonGreen/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Alex Morgan</h3>
                <p className="text-neonGreen mb-3">CEO & Founder</p>
                <p className="text-gray-300">
                  With 15+ years in tech leadership, Alex founded AutomateX to revolutionize how businesses operate.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-darkTeal/50 border-2 border-neonGreen/40 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-neonGreen/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-neonGreen/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Samantha Lee</h3>
                <p className="text-neonGreen mb-3">CTO</p>
                <p className="text-gray-300">
                  Sam leads our technical innovation, bringing expertise in AI and machine learning to our platform.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-darkTeal/50 border-2 border-neonGreen/40 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-neonGreen/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-neonGreen/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Marcus Johnson</h3>
                <p className="text-neonGreen mb-3">COO</p>
                <p className="text-gray-300">
                  Marcus ensures our operations run smoothly while helping clients implement our solutions effectively.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-darkTeal/40 p-8 rounded-lg border border-neonGreen/20">
                <div className="text-neonGreen mb-4 text-4xl">01</div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p>We're constantly pushing the boundaries of what's possible with automation technology.</p>
              </div>
              
              <div className="bg-darkTeal/40 p-8 rounded-lg border border-neonGreen/20">
                <div className="text-neonGreen mb-4 text-4xl">02</div>
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p>We believe powerful automation should be accessible to businesses of all sizes.</p>
              </div>
              
              <div className="bg-darkTeal/40 p-8 rounded-lg border border-neonGreen/20">
                <div className="text-neonGreen mb-4 text-4xl">03</div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p>We operate with transparency and honesty in everything we do.</p>
              </div>
              
              <div className="bg-darkTeal/40 p-8 rounded-lg border border-neonGreen/20">
                <div className="text-neonGreen mb-4 text-4xl">04</div>
                <h3 className="text-xl font-bold mb-3">Customer Success</h3>
                <p>Your success is our success. We're dedicated to helping you achieve your goals.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
