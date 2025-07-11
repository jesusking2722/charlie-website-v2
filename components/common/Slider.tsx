import Image, { StaticImageData } from "next/image";
import { IRadio } from "./Radio";
import { useState, useEffect } from "react";
import { RadioGroup } from "../molecules";
import { motion, AnimatePresence } from "motion/react";

export interface ISlide {
  img: StaticImageData;
  title: string;
  description: string;
}

interface SliderProps {
  slides: ISlide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activedIndex, setActivedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate radios based on view mode
  const generateRadios = (): IRadio[] => {
    const radioCount = isMobile ? slides.length : Math.ceil(slides.length / 2);
    return Array.from({ length: radioCount }, (_, index) => ({
      name: `slide-${index}`,
      value: index,
      checked: index === activedIndex,
    }));
  };

  const radios: IRadio[] = generateRadios();

  // Handle radio selection
  const handleRadioSelect = (index: number) => {
    setActivedIndex(index);
  };

  // Get visible slides based on view mode
  const getVisibleSlides = () => {
    if (isMobile) {
      return [slides[activedIndex]];
    }

    // Desktop: show 2 slides at a time
    const startIndex = activedIndex * 2;
    return slides.slice(startIndex, startIndex + 2);
  };

  const visibleSlides = getVisibleSlides();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="w-full space-y-8 overflow-hidden">
      <div className="w-full relative">
        {isMobile ? (
          // Mobile: Single slide with swipe animation
          <div className="relative h-auto overflow-hidden">
            <AnimatePresence mode="wait" custom={activedIndex}>
              <motion.div
                key={activedIndex}
                custom={activedIndex}
                variants={mobileSlideVariants as any}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="w-full bg-[rgba(40,12,63,0.75)] relative rounded-3xl overflow-hidden">
                  <div className="relative">
                    <Image
                      src={visibleSlides[0].img}
                      alt={visibleSlides[0].title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,12,63,0.9)] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <motion.h1
                      className="text-white font-bold text-[32px] sm:text-[42px] leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {visibleSlides[0].title}
                    </motion.h1>
                    <motion.p
                      className="text-[#E0E0E0] text-[18px] sm:text-[20px] leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {visibleSlides[0].description}
                    </motion.p>
                  </div>
                  <div className="absolute h-2 bg-primary-gradient rounded-b-3xl left-0 right-0 bottom-0"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          // Desktop: Two slides with grid layout
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 flex xl:gap-14 lg:gap-14 gap-6"
          >
            <AnimatePresence mode="wait">
              {visibleSlides.map((slide, index) => (
                <motion.div
                  key={`${activedIndex}-${index}`}
                  variants={slideVariants as any}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full bg-[rgba(40,12,63,0.75)] relative rounded-3xl overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,12,63,0.9)] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h1 className="text-white font-bold text-[32px] xl:text-[42px] leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-[#E0E0E0] text-[18px] xl:text-[20px] leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <motion.div
                    className="absolute h-2 bg-primary-gradient rounded-b-3xl left-0 right-0 bottom-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Radio Group with smooth transitions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <RadioGroup
          radios={radios}
          activedIndex={activedIndex}
          onSelect={handleRadioSelect}
        />
      </motion.div>
    </div>
  );
};

export default Slider;
