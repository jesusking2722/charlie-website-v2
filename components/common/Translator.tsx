import React, { createContext, useState, useContext } from "react";

// Create a context for the translator with default values
export const TranslatorContext = createContext({
  from: "en",
  to: "en",
  loading: false,
  error: null,
  translateText: async (text: any) => text,
  setLanguage: () => {},
});

/**
 * Main translator component that provides translation context
 */
const Translator = ({
  children,
  from,
  to,
  googleApiKey,
  cacheProvider,
}: {
  children: React.ReactNode;
  from: string;
  to: string;
  googleApiKey: string;
  cacheProvider: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(to);
  const [cachedCount, setCachedCount] = useState(0);
  const [lastTranslationTime, setLastTranslationTime] = useState(0);

  // Rate limiting function to prevent API abuse
  const rateLimitTranslation = async (fn: any) => {
    const now = Date.now();
    const timeSinceLastRequest = now - lastTranslationTime;
    const minDelay = 200; // milliseconds between requests

    // If we've made a request recently, wait before making another
    if (timeSinceLastRequest < minDelay) {
      await new Promise((resolve) =>
        setTimeout(resolve, minDelay - timeSinceLastRequest)
      );
    }

    setLastTranslationTime(Date.now());
    return fn();
  };

  // Function to translate text using Google Translate API
  const translateText = async (text: any) => {
    // Skip empty strings
    if (!text || text.trim() === "") {
      return text;
    }

    // Skip translation if languages are the same
    if (from === targetLanguage) {
      return text;
    }

    // Check if the translation is cached
    if (cacheProvider) {
      const cachedTranslation = cacheProvider.get(targetLanguage, text);
      if (cachedTranslation) {
        setCachedCount((prev) => prev + 1);
        return cachedTranslation;
      }
    }

    // If no translation in cache, use Google Translate API
    try {
      setLoading(true);
      setError(null);

      // Apply rate limiting to API calls
      const translatedText = await rateLimitTranslation(async () => {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${googleApiKey}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: text,
            source: from,
            target: targetLanguage,
            format: "text",
          }),
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error.message || "Translation error");
        }

        if (
          !data.data ||
          !data.data.translations ||
          !data.data.translations[0]
        ) {
          throw new Error("Invalid API response format");
        }

        return data.data.translations[0].translatedText;
      });

      if (cacheProvider) {
        cacheProvider.set(targetLanguage, text, translatedText);
      }
      setLoading(false);
      return translatedText;
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Translation failed");
      return text; // Return original text on error
    }
  };

  // Context value to be provided
  const contextValue = {
    from,
    to: targetLanguage,
    loading,
    error,
    translateText,
    setLanguage: setTargetLanguage,
  };

  return (
    <TranslatorContext.Provider value={contextValue as any}>
      {children}
    </TranslatorContext.Provider>
  );
};

// Hook for easy access to the translator context
export const useTranslator = () => {
  const context = useContext(TranslatorContext);
  if (!context) {
    console.error("useTranslator must be used within a Translator component");
  }
  return context;
};

export default Translator;
