"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { AppDispatch, RootState } from '@/redux/store';
import { setLanguage } from '@/redux/language/LanguageSlice';

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector((state: RootState) => state.language.language);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? 'Français' : 'English'}
    </button>
  );
};

export default LanguageToggle;
