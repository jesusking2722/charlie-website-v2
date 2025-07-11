// Set cache expiration time (24 hours by default)
const CACHE_TTL = 24 * 60 * 60 * 1000;
const CACHE_PREFIX = "Party App_translation_";
const MAX_CACHE_SIZE_MB = 5; // Maximum cache size in MB

/**
 * Clean expired entries from the cache
 *
 * @param translations Cache object to clean
 */
const cleanCache = (translations: any) => {
  try {
    // Get current time
    const now = Date.now();

    // Check each key in the cache
    Object.keys(translations).forEach((textKey) => {
      Object.keys(translations[textKey]).forEach((lang) => {
        // Remove if expired
        if (now - translations[textKey][lang].timestamp > CACHE_TTL) {
          delete translations[textKey][lang];
        }
      });

      // Remove empty entries
      if (Object.keys(translations[textKey]).length === 0) {
        delete translations[textKey];
      }
    });
  } catch (err) {
    console.error("Error cleaning cache:", err);
  }
};

/**
 * Check the current size of the cache in bytes
 *
 * @param translations Cache object to check
 * @returns Size in bytes
 */
const checkCacheSize = (translations: any) => {
  try {
    const jsonString = JSON.stringify(translations);
    return jsonString.length * 2; // Approximate size in bytes (each char is 2 bytes in JS)
  } catch (err) {
    console.error("Error checking cache size:", err);
    return 0;
  }
};

/**
 * Reduce cache size by removing oldest entries first
 *
 * @param translations Cache object to reduce
 */
const reduceCacheSize = (translations: any) => {
  try {
    // Get all entries with their timestamps
    const entries = [] as any;

    Object.keys(translations).forEach((textKey) => {
      Object.keys(translations[textKey]).forEach((lang) => {
        entries.push({
          key: textKey,
          lang,
          timestamp: translations[textKey][lang].timestamp,
        });
      });
    });

    // Sort by timestamp (oldest first)
    entries.sort((a: any, b: any) => a.timestamp - b.timestamp);

    // Remove oldest entries until we're under the size limit
    let currentSize = checkCacheSize(translations);
    let targetSize = MAX_CACHE_SIZE_MB * 1024 * 1024 * 0.8; // Target 80% of max size

    let removed = 0;
    while (currentSize > targetSize && entries.length > 0) {
      const oldestEntry = entries.shift();
      if (oldestEntry) {
        delete translations[oldestEntry.key][oldestEntry.lang];

        // Remove empty keys
        if (Object.keys(translations[oldestEntry.key]).length === 0) {
          delete translations[oldestEntry.key];
        }

        removed++;
      }

      // Recalculate size
      currentSize = checkCacheSize(translations);
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`Cache cleaned: removed ${removed} old entries`);
    }
  } catch (err) {
    console.error("Error reducing cache size:", err);
  }
};

/**
 * Enhanced cache provider for translations with expiration and size management
 */
const cacheProvider = {
  /**
   * Get a translation from the cache
   *
   * @param language Target language code
   * @param key Original text to translate
   * @returns Cached translation or undefined if not found or expired
   */
  get: (language: any, key: any) => {
    try {
      // Create a cache key specific to the domain/app
      const cacheKey = `${CACHE_PREFIX}${window.location.hostname || "app"}`;
      const translations = JSON.parse(
        window.localStorage.getItem(cacheKey) || "{}"
      );

      // If key doesn't exist or language doesn't exist, return undefined
      if (!translations[key] || !translations[key][language]) {
        return undefined;
      }

      const cached = translations[key][language];

      // Check if cache has expired
      if (cached.timestamp && Date.now() - cached.timestamp > CACHE_TTL) {
        if (process.env.NODE_ENV !== "production") {
          console.log(
            `Cache expired for "${key.substring(0, 30)}..." in ${language}`
          );
        }

        // Remove expired entry
        delete translations[key][language];
        window.localStorage.setItem(cacheKey, JSON.stringify(translations));
        return undefined;
      }

      return cached.translation;
    } catch (err) {
      console.error("Error retrieving translation from cache:", err);

      // If there's any error with the cache, try to clear it
      try {
        window.localStorage.removeItem(
          `${CACHE_PREFIX}${window.location.hostname || "app"}`
        );
      } catch (clearErr) {
        console.error("Error clearing cache:", clearErr);
      }

      return undefined;
    }
  },

  /**
   * Store a translation in the cache
   *
   * @param language Target language code
   * @param key Original text
   * @param translation Translated text
   */
  set: (language: any, key: any, translation: any) => {
    try {
      // Create a cache key specific to the domain/app
      const cacheKey = `${CACHE_PREFIX}${window.location.hostname || "app"}`;
      const translations = JSON.parse(
        window.localStorage.getItem(cacheKey) || "{}"
      );

      // Create the key structure if it doesn't exist
      if (!translations[key]) {
        translations[key] = {};
      }

      // Store translation with timestamp
      translations[key][language] = {
        translation,
        timestamp: Date.now(),
      };

      // Clean up expired entries to save space
      cleanCache(translations);

      // Check cache size and remove oldest entries if needed
      const cacheSize = checkCacheSize(translations);
      if (cacheSize > MAX_CACHE_SIZE_MB * 1024 * 1024) {
        reduceCacheSize(translations);
      }

      // Save updated cache
      window.localStorage.setItem(cacheKey, JSON.stringify(translations));

      if (process.env.NODE_ENV !== "production") {
        console.log(
          `Cached translation for "${key.substring(0, 30)}..." in ${language}`
        );
      }
    } catch (err) {
      console.error("Error storing translation in cache:", err);
    }
  },

  /**
   * Clear all cached translations
   */
  clear: () => {
    try {
      // Get all translation cache keys
      const cacheKey = `${CACHE_PREFIX}${window.location.hostname || "app"}`;
      window.localStorage.removeItem(cacheKey);
      console.log("Translation cache cleared");
    } catch (err) {
      console.error("Error clearing translation cache:", err);
    }
  },

  /**
   * Get statistics about the cache
   *
   * @returns Cache statistics object
   */
  getStats: () => {
    try {
      const cacheKey = `${CACHE_PREFIX}${window.location.hostname || "app"}`;
      const cache = window.localStorage.getItem(cacheKey);

      if (!cache) {
        return {
          entries: 0,
          languages: [],
          size: "0 KB",
          oldestEntry: "-",
        };
      }

      const translations = JSON.parse(cache);
      const languages = new Set();
      let entries = 0;
      let oldestTimestamp = Date.now();

      Object.keys(translations).forEach((key) => {
        Object.keys(translations[key]).forEach((lang) => {
          languages.add(lang);
          entries++;

          if (translations[key][lang].timestamp < oldestTimestamp) {
            oldestTimestamp = translations[key][lang].timestamp;
          }
        });
      });

      const size = (cache.length / 1024).toFixed(2) + " KB";
      const oldestEntry = new Date(oldestTimestamp).toLocaleString();

      return {
        entries,
        languages: Array.from(languages),
        size,
        oldestEntry,
      };
    } catch (err) {
      console.error("Error getting cache stats:", err);
      return {
        entries: 0,
        languages: [],
        size: "0 KB",
        oldestEntry: "-",
      };
    }
  },
};

export default cacheProvider;
