
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-bold text-neonGreen font-founders tracking-tight transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-neonGreen/30"
        >
          ENOVA
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-3">
            <Link 
              to="/solutions" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:shadow-lg hover:shadow-neonGreen/20 hover:-translate-y-1"
            >
              Solutions
            </Link>
            <Link 
              to="/about" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:shadow-lg hover:shadow-neonGreen/20 hover:-translate-y-1"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:shadow-lg hover:shadow-neonGreen/20 hover:-translate-y-1"
            >
              Contact
            </Link>
          </div>
          <a 
            href="https://cal.com/tarek-jundi/free-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal transition-all duration-300 font-founders font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-neonGreen/30 hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-4 w-4 animate-bounce" />
              Let's Talk
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neonGreen transform hover:scale-110 transition-all duration-300 hover:rotate-180"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-2 bg-darkTeal/90 rounded-lg animate-fade-in transform animate-scale-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/solutions" 
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/about" 
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#f8ff2c] hover:text-darkTeal transition-all duration-300 font-founders font-medium tracking-tight transform hover:scale-105 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://cal.com/tarek-jundi/free-consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="outline" 
                className="w-full border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal transition-all duration-300 font-founders font-medium transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-4 w-4 animate-bounce" />
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
