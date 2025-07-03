
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' 
          ? 'bg-neonGreen text-darkTeal hover:bg-neonGreen/90' 
          : 'border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal'
        }
      >
        EN
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className={language === 'ar' 
          ? 'bg-neonGreen text-darkTeal hover:bg-neonGreen/90' 
          : 'border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-darkTeal'
        }
      >
        AR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
