
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-darkTeal">
      <Navbar />
      <main className="container mx-auto px-4 py-16 text-gray-300">
        <h1 className="text-4xl font-bold text-neonGreen mb-8">{t('privacyPolicyTitle')}</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{t('introduction')}</h2>
            <p>{t('introText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{t('informationWeCollect')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('contactInfo')}</li>
              <li>{t('companyInfo')}</li>
              <li>{t('websiteUsage')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{t('howWeUse')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('provideServices')}</li>
              <li>{t('communicate')}</li>
              <li>{t('marketing')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{t('dataProtection')}</h2>
            <p>{t('dataProtectionText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{t('contactUsTitle')}</h2>
            <p>{t('contactUsText')}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
