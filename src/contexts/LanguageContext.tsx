
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    solutions: 'Solutions',
    aboutUs: 'About Us',
    contact: 'Contact',
    letsTalk: "Let's Talk",
    
    // Footer
    transforming: 'Transforming businesses through intelligent automation solutions.',
    processAutomation: 'Process Automation',
    decisionIntelligence: 'Decision Intelligence',
    customerEngagement: 'Customer Engagement',
    agency: 'Agency',
    privacyPolicy: 'Privacy Policy',
    connect: 'Connect',
    email: 'Email',
    phone: 'Phone',
    allRightsReserved: 'All rights reserved.',
    
    // Privacy Policy
    privacyPolicyTitle: 'Privacy Policy',
    introduction: 'Introduction',
    introText: 'At ENOVA, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.',
    informationWeCollect: 'Information We Collect',
    contactInfo: 'Contact information (name, email, phone number)',
    companyInfo: 'Company information',
    websiteUsage: 'Website usage data',
    howWeUse: 'How We Use Your Information',
    provideServices: 'To provide and improve our services',
    communicate: 'To communicate with you about our services',
    marketing: 'To send you marketing communications (with your consent)',
    dataProtection: 'Data Protection',
    dataProtectionText: 'We implement appropriate technical and organizational measures to protect your personal information.',
    contactUsTitle: 'Contact Us',
    contactUsText: 'If you have any questions about this Privacy Policy, please contact us at tareq@enovaagency.com'
  },
  ar: {
    // Navbar
    solutions: 'الحلول',
    aboutUs: 'من نحن',
    contact: 'اتصل بنا',
    letsTalk: 'لنتحدث',
    
    // Footer
    transforming: 'تحويل الأعمال من خلال حلول الأتمتة الذكية.',
    processAutomation: 'أتمتة العمليات',
    decisionIntelligence: 'ذكاء القرارات',
    customerEngagement: 'تفاعل العملاء',
    agency: 'الوكالة',
    privacyPolicy: 'سياسة الخصوصية',
    connect: 'تواصل',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    
    // Privacy Policy
    privacyPolicyTitle: 'سياسة الخصوصية',
    introduction: 'مقدمة',
    introText: 'في ENOVA، نأخذ خصوصيتك على محمل الجد. تصف هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.',
    informationWeCollect: 'المعلومات التي نجمعها',
    contactInfo: 'معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)',
    companyInfo: 'معلومات الشركة',
    websiteUsage: 'بيانات استخدام الموقع',
    howWeUse: 'كيف نستخدم معلوماتك',
    provideServices: 'لتقديم وتحسين خدماتنا',
    communicate: 'للتواصل معك حول خدماتنا',
    marketing: 'لإرسال اتصالات تسويقية (بموافقتك)',
    dataProtection: 'حماية البيانات',
    dataProtectionText: 'نطبق التدابير التقنية والتنظيمية المناسبة لحماية معلوماتك الشخصية.',
    contactUsTitle: 'اتصل بنا',
    contactUsText: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على tareq@enovaagency.com'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
