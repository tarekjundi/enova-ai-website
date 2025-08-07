
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // First navigate to the path if it's different from current path
    navigate(path);
    
    // Then scroll to top after a small delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
  };

  return (
    <footer className="bg-darkTeal/90 py-10 animate-fade-in" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-neonGreen mb-4 animate-pulse">ENOVA</h3>
            <p className="text-gray-300 hover:text-white transition-colors duration-300">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 hover:text-neonGreen transition-colors duration-300">Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => handleNavigation('/solutions')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Process Automation</button></li>
              <li><button onClick={() => handleNavigation('/solutions')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Decision Intelligence</button></li>
              <li><button onClick={() => handleNavigation('/solutions')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Customer Engagement</button></li>
            </ul>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 hover:text-neonGreen transition-colors duration-300">Agency</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => handleNavigation('/about')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">About Us</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Contact</button></li>
              <li><button onClick={() => handleNavigation('/privacy')} className="hover:text-neonGreen text-left transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Privacy Policy</button></li>
            </ul>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 hover:text-neonGreen transition-colors duration-300">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">Email: tarek@enovaagency.com</li>
              <li className="hover:text-white transition-colors duration-300">Phone: +90 540 350 2010</li>
              <li className="flex space-x-4 mt-4">
                <a href="https://x.com/enovaagency" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen transform hover:scale-125 hover:rotate-12 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-6 h-6">
                    <path d="M18.901 1.153h3.682l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.448l8.609-9.773L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.306 17.545h2.034L6.529 3.268H4.373L17.595 18.698Z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/enovaagency/m" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen transform hover:scale-125 hover:rotate-12 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin animate-pulse">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/enovaagency/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen transform hover:scale-125 hover:rotate-12 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram animate-pulse">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-center text-gray-400 transform hover:scale-105 transition-all duration-300">
          <p className="hover:text-neonGreen transition-colors duration-300">&copy; 2025 ENOVA - AI Automation Agency. Empowering businesses through intelligent automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
