import { createContext, useState, useContext, useEffect } from "react";

// Available languages with their display names
export const AVAILABLE_LANGUAGES = {
  en: "English",
  pl: "Polski", // Polish
  fr: "Français", // French
  pt: "Português", // Portuguese
  ru: "Русский", // Russian
  de: "Deutsch", // German
  it: "Italiano", // Italian
  tr: "Türkçe", // Turkish
  es: "Español", // Spanish
};

// Create context with default values
const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
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
