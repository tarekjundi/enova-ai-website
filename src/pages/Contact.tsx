
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real application, you would send this data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen bg-darkTeal text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In <span className="text-neonGreen">Touch</span></h1>
          <p className="text-xl text-gray-300 mb-8">
            Have questions about our automation solutions? We're here to help.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInSection>
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form or contact us directly using the information below. Our team is ready to assist you with any questions you may have.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-neonGreen mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-neonGreen mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email</h3>
                      <p className="text-gray-300">info@automatex.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-neonGreen mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Office</h3>
                      <p className="text-gray-300">
                        123 Innovation Drive<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection>
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-1">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen"
                        ></textarea>
                      </div>
                      
                      <Button type="submit" className="w-full bg-neonGreen text-darkTeal hover:bg-neonGreen/90 py-6">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
                  <p className="text-gray-300">
                    Our automation solutions are designed to serve a wide range of industries, including manufacturing, finance, healthcare, retail, logistics, and professional services. Our expertise spans across multiple sectors, allowing us to deliver tailored solutions regardless of your industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
                  <p className="text-gray-300">
                    Implementation timelines vary based on the complexity of your needs and the scope of automation. Simple workflows can be automated in as little as 2-4 weeks, while more complex enterprise-wide solutions may take 2-3 months. Our team works closely with you to establish a realistic timeline during the initial consultation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Do you offer custom solutions or only pre-built packages?</h3>
                  <p className="text-gray-300">
                    We offer both pre-built automation packages for common business processes and fully customized solutions tailored to your specific needs. Our experts will work with you to determine the right approach based on your requirements, timeline, and budget.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-darkTeal/50 border-neonGreen/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What kind of support do you provide after implementation?</h3>
                  <p className="text-gray-300">
                    We provide comprehensive post-implementation support, including 24/7 technical assistance, regular maintenance, performance monitoring, and continuous optimization. Our support packages are designed to ensure your automation solutions continue to deliver value long after implementation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
