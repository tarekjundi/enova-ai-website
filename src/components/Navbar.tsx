
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto py-6 px-4">
      <div className={`flex justify-between items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
        <Link to="/" className={`text-2xl font-bold text-neonGreen ${language === 'ar' ? 'order-last' : 'order-first'}`}>ENOVA</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-3">
            <Link 
              to="/solutions" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
            >
              {t('solutions')}
            </Link>
            <Link 
              to="/about" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
            >
              {t('aboutUs')}
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-3 rounded-lg bg-darkTeal/20 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
            >
              {t('contact')}
            </Link>
          </div>
          <LanguageSwitcher />
          <a 
            href="https://cal.com/tareqjundi/free-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal transition-colors"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t('letsTalk')}
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-neonGreen ${language === 'ar' ? 'order-first' : 'order-last'}`}
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
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('solutions')}
            </Link>
            <Link 
              to="/about" 
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('aboutUs')}
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-3 rounded-lg bg-darkTeal/50 text-white hover:bg-[#e0ff4f] hover:text-darkTeal transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            <a 
              href="https://cal.com/tareqjundi/free-consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="outline" 
                className="w-full border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t('letsTalk')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
