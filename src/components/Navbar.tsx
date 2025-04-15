import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-neonGreen">ENOVA</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/solutions" className="hover:text-neonGreen transition-colors">Solutions</Link>
          <Link to="/about" className="hover:text-neonGreen transition-colors">About Us</Link>
          <Link to="/careers" className="hover:text-neonGreen transition-colors">Careers</Link>
          <Link to="/blog" className="hover:text-neonGreen transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-neonGreen transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neonGreen"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-2 bg-darkTeal/90 rounded-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/solutions" 
              className="hover:text-neonGreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/about" 
              className="hover:text-neonGreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/careers" 
              className="hover:text-neonGreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/blog" 
              className="hover:text-neonGreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-neonGreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-neonGreen text-darkTeal hover:bg-neonGreen/90 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
