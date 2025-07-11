import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useTranslator as useGoogleTranslator } from "../common/Translator";
import {
  AVAILABLE_LANGUAGES,
  LANGUAGE_TO_FLAG_MAP,
  useLanguage,
} from "../providers/LanguageProvider";

const MobileLangaugeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const dropdownRef = useRef<any>(null);

  const { setLanguage: setGoogleLanguage } = useLanguage();
  const { setLanguage: setGoogleTranslatorLanguage } = useGoogleTranslator();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
    setGoogleLanguage(code.toLowerCase());
    setGoogleTranslatorLanguage(code.toLowerCase());
  };

  const getSelectedLanguageIcon = () => {
    return (
      LANGUAGE_TO_FLAG_MAP[
        selectedLanguage as keyof typeof LANGUAGE_TO_FLAG_MAP
      ] || selectedLanguage
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <div className="relative">
        <motion.div
          className="relative w-full h-10 bg-primary-gradient rounded-md transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="absolute inset-[1px] flex items-center justify-center bg-[#1A062A] rounded-md p-1 cursor-pointer gap-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <Icon
              icon={`flagpack:${getSelectedLanguageIcon()}`}
              className="w-5 h-auto"
            />
            <span className="text-sm text-white">
              {
                AVAILABLE_LANGUAGES[
                  selectedLanguage as keyof typeof AVAILABLE_LANGUAGES
                ]
              }
            </span>
          </button>
        </motion.div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              scale: { type: "spring", stiffness: 300, damping: 30 },
            }}
            className="absolute bottom-full left-0 mb-2 z-50 min-w-[200px] bg-[#1A062A] rounded-md border border-purple-500/20 shadow-lg max-h-[400px] overflow-x-hidden overflow-y-scroll"
            style={{
              boxShadow:
                "0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(196, 39, 224, 0.1)",
            }}
          >
            <motion.ul
              className="w-full flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.02, staggerDirection: -1 },
                },
              }}
            >
              {Object.entries(AVAILABLE_LANGUAGES).map(
                ([code, label], index) => (
                  <motion.li
                    key={code}
                    variants={{
                      open: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        },
                      },
                      closed: {
                        opacity: 0,
                        x: -20,
                        transition: { duration: 0.1 },
                      },
                    }}
                    className={`cursor-pointer w-full flex items-center gap-3 p-3 transition-colors duration-200 ${
                      selectedLanguage === code
                        ? "bg-purple-600/20 border-l-2 border-purple-400"
                        : "hover:bg-purple-600/10"
                    }`}
                    onClick={() => handleLanguageSelect(code)}
                    whileHover={{
                      backgroundColor:
                        selectedLanguage === code
                          ? "rgba(147, 51, 234, 0.25)"
                          : "rgba(147, 51, 234, 0.15)",
                      x: 4,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon
                      icon={`flagpack:${
                        LANGUAGE_TO_FLAG_MAP[
                          code as keyof typeof LANGUAGE_TO_FLAG_MAP
                        ] || code
                      }`}
                      className="w-5 h-auto flex-shrink-0"
                    />
                    <span className="text-white text-sm font-medium">
                      {label}
                    </span>
                    {selectedLanguage === code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto"
                      >
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-purple-400"
                        />
                      </motion.div>
                    )}
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileLangaugeDropdown;
