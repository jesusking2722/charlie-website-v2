import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../common";
import ArrowIcon from "@/public/assets/svgs/arrow_right.svg";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [-5, 5, -5],
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-16 h-16 flex items-center justify-center fixed bottom-5 right-5 z-50"
        >
          <Button
            type="primary-icon"
            icon={ArrowIcon}
            iconClassName="-rotate-90"
            hovered={true}
            onClick={handleTop}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopButton;
