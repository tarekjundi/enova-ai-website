
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-darkTeal">
      <Navbar />
      <main className="container mx-auto px-4 py-16 text-gray-300">
        <h1 className="text-4xl font-bold text-neonGreen mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>At ENOVA, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at tareq@enovaagency.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
