
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkTeal/90 py-10" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-neonGreen mb-4">ENOVA</h3>
            <p className="text-gray-300">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/solutions#top" className="hover:text-neonGreen">Process Automation</Link></li>
              <li><Link to="/solutions#top" className="hover:text-neonGreen">Workflow Optimization</Link></li>
              <li><Link to="/solutions#top" className="hover:text-neonGreen">Decision Intelligence</Link></li>
              <li><Link to="/solutions#top" className="hover:text-neonGreen">Customer Engagement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Agency</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about#top" className="hover:text-neonGreen">About Us</Link></li>
              <li><Link to="/contact#top" className="hover:text-neonGreen">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: tareq@enovaagency.com</li>
              <li>Phone: +90 540 350 2010</li>
              <li className="flex space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neonGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-center text-gray-400">
          <p>&copy; 2025 ENOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
