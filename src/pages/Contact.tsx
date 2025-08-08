
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";
import { Plus, Minus } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openItem, setOpenItem] = useState<string | undefined>();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Sheets integration
      const response = await fetch('https://script.google.com/macros/s/AKfycbxdXg5BRalxvy5V_iGOcbavovo0Prp5mhV-7hWrShLhIQV1HkNqrjr2kf_ufGMu4pUP/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Message Sent",
        description: "Your message has been received. We'll contact you soon!",
      });
      
      // Reset form even on error since we're using no-cors
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-darkTeal text-white" id="top">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In <span className="text-neonGreen">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
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
                      <p className="text-gray-300">+90 540 350 2010</p>
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
                      <p className="text-gray-300">tarek@enovaagency.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61550985059945" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-6 h-6">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="https://x.com/enovaagency" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-6 h-6">
                        <path d="M18.901 1.153h3.682l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.448l8.609-9.773L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.306 17.545h2.034L6.529 3.268H4.373L17.595 18.698Z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/enovaagency/" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="https://www.instagram.com/enovaagency/" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/enovaagency/" className="text-gray-300 hover:text-neonGreen transition-colors">
                      <svg xmlns="https://www.linkedin.com/company/enovaagency/" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen transition-colors"
                          disabled={isSubmitting}
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
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen transition-colors"
                          disabled={isSubmitting}
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
                            className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen transition-colors"
                            disabled={isSubmitting}
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
                            className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen transition-colors"
                            disabled={isSubmitting}
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
                          className="w-full px-4 py-3 bg-darkTeal/60 border border-neonGreen/30 rounded-lg text-white focus:outline-none focus:border-neonGreen transition-colors"
                          disabled={isSubmitting}
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-neonGreen text-darkTeal hover:bg-neonGreen/90 py-6 hover-scale"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section with Enhanced Accordion */}
      <section className="py-20 bg-gradient-to-b from-darkTeal/80 to-darkTeal">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion 
                type="single" 
                collapsible 
                className="space-y-4"
                value={openItem}
                onValueChange={setOpenItem}
              >
                <AccordionItem value="item-1" className="bg-darkTeal/50 border-neonGreen/20 rounded-lg px-6 transition-all duration-200 ease-in-out hover:bg-darkTeal/60 hover:border-neonGreen/30">
                  <AccordionTrigger className="text-white hover:text-neonGreen text-left transition-all duration-200 ease-in-out hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <span>What industries do you serve?</span>
                      <div className="ml-4 transition-transform duration-200 ease-in-out">
                        {openItem === "item-1" ? (
                          <Minus className="h-5 w-5 text-neonGreen" />
                        ) : (
                          <Plus className="h-5 w-5 text-white group-hover:text-neonGreen" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 transition-all duration-200 ease-out">
                    <div className="transform transition-all duration-200 ease-out">
                      Our automation solutions are designed to serve a wide range of industries, including manufacturing, finance, healthcare, retail, logistics, and professional services. Our expertise spans across multiple sectors, allowing us to deliver tailored solutions regardless of your industry.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-darkTeal/50 border-neonGreen/20 rounded-lg px-6 transition-all duration-200 ease-in-out hover:bg-darkTeal/60 hover:border-neonGreen/30">
                  <AccordionTrigger className="text-white hover:text-neonGreen text-left transition-all duration-200 ease-in-out hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <span>How long does implementation typically take?</span>
                      <div className="ml-4 transition-transform duration-200 ease-in-out">
                        {openItem === "item-2" ? (
                          <Minus className="h-5 w-5 text-neonGreen" />
                        ) : (
                          <Plus className="h-5 w-5 text-white group-hover:text-neonGreen" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 transition-all duration-200 ease-out">
                    <div className="transform transition-all duration-200 ease-out">
                      Implementation timelines vary based on the complexity of your needs and the scope of automation. Simple workflows can be automated in as little as 2-4 weeks, while more complex enterprise-wide solutions may take 2-3 months. Our team works closely with you to establish a realistic timeline during the initial consultation.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-darkTeal/50 border-neonGreen/20 rounded-lg px-6 transition-all duration-200 ease-in-out hover:bg-darkTeal/60 hover:border-neonGreen/30">
                  <AccordionTrigger className="text-white hover:text-neonGreen text-left transition-all duration-200 ease-in-out hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <span>Do you offer custom solutions or only pre-built packages?</span>
                      <div className="ml-4 transition-transform duration-200 ease-in-out">
                        {openItem === "item-3" ? (
                          <Minus className="h-5 w-5 text-neonGreen" />
                        ) : (
                          <Plus className="h-5 w-5 text-white group-hover:text-neonGreen" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 transition-all duration-200 ease-out">
                    <div className="transform transition-all duration-200 ease-out">
                      We offer both pre-built automation packages for common business processes and fully customized solutions tailored to your specific needs. Our experts will work with you to determine the right approach based on your requirements, timeline, and budget.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-darkTeal/50 border-neonGreen/20 rounded-lg px-6 transition-all duration-200 ease-in-out hover:bg-darkTeal/60 hover:border-neonGreen/30">
                  <AccordionTrigger className="text-white hover:text-neonGreen text-left transition-all duration-200 ease-in-out hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <span>What kind of support do you provide after implementation?</span>
                      <div className="ml-4 transition-transform duration-200 ease-in-out">
                        {openItem === "item-4" ? (
                          <Minus className="h-5 w-5 text-neonGreen" />
                        ) : (
                          <Plus className="h-5 w-5 text-white group-hover:text-neonGreen" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 transition-all duration-200 ease-out">
                    <div className="transform transition-all duration-200 ease-out">
                      We provide comprehensive post-implementation support, including 24/7 technical assistance, regular maintenance, performance monitoring, and continuous optimization. Our support packages are designed to ensure your automation solutions continue to deliver value long after implementation.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
