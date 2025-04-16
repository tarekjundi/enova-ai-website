
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkTeal/90 py-10" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        </div>
        <div className="border-t border-gray-600 pt-6 text-center text-gray-400">
          <p>&copy; 2025 ENOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
