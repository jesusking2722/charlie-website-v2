import { createContext, useState, useContext, useEffect } from "react";

export const AVAILABLE_LANGUAGES = {
  // Europe
  en: "English",
  pl: "Polski",
  fr: "Français",
  pt: "Português",
  ru: "Русский",
  de: "Deutsch",
  it: "Italiano",
  tr: "Türkçe",
  es: "Español",
  nl: "Nederlands",
  sv: "Svenska",
  da: "Dansk", // Changed from 'dk' to 'da'
  fi: "Suomi",
  no: "Norsk",
  cs: "Čeština", // Changed from 'cz' to 'cs'
  sk: "Slovenčina",
  hu: "Magyar",
  ro: "Română",
  bg: "Български",
  el: "Ελληνικά", // Changed from 'gr' to 'el'
  hr: "Hrvatski",
  sr: "Српски",
  uk: "Українська", // Changed from 'ua' to 'uk'

  // Asia
  zh: "中文", // Changed from 'cn' to 'zh'
  ja: "日本語", // Changed from 'jp' to 'ja'
  ko: "한국어", // Changed from 'kr' to 'ko'
  th: "ไทย",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  hi: "हिन्दी", // Changed from 'in' to 'hi'
};

export const LANGUAGE_TO_FLAG_MAP = {
  en: "gb-ukm",
  pl: "pl",
  fr: "fr",
  pt: "pt",
  ru: "ru",
  de: "de",
  it: "it",
  tr: "tr",
  es: "es",
  nl: "nl",
  sv: "se",
  da: "dk", // Flag uses country code 'dk' for Denmark
  fi: "fi",
  no: "no",
  cs: "cz", // Flag uses country code 'cz' for Czech Republic
  sk: "sk",
  hu: "hu",
  ro: "ro",
  bg: "bg",
  el: "gr", // Flag uses country code 'gr' for Greece
  hr: "hr",
  sr: "rs", // Serbia flag code
  uk: "ua", // Flag uses country code 'ua' for Ukraine
  zh: "cn", // Flag uses country code 'cn' for China
  ja: "jp", // Flag uses country code 'jp' for Japan
  ko: "kr", // Flag uses country code 'kr' for South Korea
  th: "th",
  vi: "vn", // Flag uses country code 'vn' for Vietnam
  id: "id",
  ms: "my", // Flag uses country code 'my' for Malaysia
  hi: "in", // Flag uses country code 'in' for India
};

// Create context with default values
const LanguageContext = createContext({
  language: "en",
  setLanguage: (code: string) => {},
  availableLanguages: AVAILABLE_LANGUAGES,
  isChangingLanguage: false,
});

/**
 * Provider component for language selection
 */
export const LanguageProvider = ({
  children,
  defaultLanguage = "en",
}: {
  children: React.ReactNode;
  defaultLanguage: string;
}) => {
  // Get stored language preference or detect from browser
  const getInitialLanguage = () => {
    try {
      // First try localStorage
      const savedLanguage = localStorage.getItem("preferredLanguage");
      if (
        savedLanguage &&
        Object.keys(AVAILABLE_LANGUAGES).includes(savedLanguage)
      ) {
        return savedLanguage;
      }

      // Then try to use browser language
      const browserLang = navigator.language.split("-")[0];
      if (Object.keys(AVAILABLE_LANGUAGES).includes(browserLang)) {
        return browserLang;
      }

      // Fallback to default
      return defaultLanguage;
    } catch (err) {
      console.error("Error determining language:", err);
      return defaultLanguage;
    }
  };

  const [language, setLanguageState] = useState(getInitialLanguage());
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Persist language choice to localStorage
  const setLanguage = async (lang: string) => {
    try {
      // Validate language code
      if (!Object.keys(AVAILABLE_LANGUAGES).includes(lang)) {
        lang = "en";
      }

      // Show loading state while changing language
      setIsChangingLanguage(true);

      // Store in localStorage
      localStorage.setItem("preferredLanguage", lang);

      // Update state
      setLanguageState(lang);

      // Reset loading state after a short delay to allow UI to update
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 500);
    } catch (err) {
      setIsChangingLanguage(false);
    }
  };

  // Detect when user changes browser language
  useEffect(() => {
    const handleLanguageChange = () => {
      const browserLang = navigator.language.split("-")[0];
      if (
        browserLang !== language &&
        Object.keys(AVAILABLE_LANGUAGES).includes(browserLang)
      ) {
        // Don't automatically change language, but log it
      }
    };

    // This is mostly future-proofing as the languagechange event
    // is not widely supported yet
    window.addEventListener("languagechange", handleLanguageChange);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, [language]);

  // Provide context value
  const contextValue = {
    language,
    setLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
    isChangingLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue as any}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook for accessing the language context
 * @returns Language context value
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default { LanguageProvider, useLanguage, AVAILABLE_LANGUAGES };
