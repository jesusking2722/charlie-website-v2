import { Translate } from "../common";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // speed — lower = faster
        ease: "linear",
      },
    },
  },
};

const SafetyBanner = () => {
  return (
    <div className="w-full bg-[#623D88] py-2 overflow-hidden z-10 absolute top-0">
      <div className="mx-auto px-2 sm:px-3 w-full">
        <div
          className="flex items-center justify-center px-2 sm:px-4 py-1 border-2 sm:border-4 border-dashed border-[#623D88] rounded-sm"
          style={{
            background:
              "linear-gradient(90deg, #C427E0 23.2%, #844AFF 51.01%, #9812FF 73.07%)",
          }}
        >
          <div className="w-full overflow-hidden whitespace-nowrap">
            <motion.div
              className="flex"
              variants={marqueeVariants as any}
              animate="animate"
            >
              {/* The text block is duplicated for seamless loop */}
              <MarqueeText />
              <MarqueeText />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted for reuse
const MarqueeText = () => (
  <p className="text-[#E0E0E0] text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-relaxed pr-12">
    <Translate>
      - Safety Warning | Beware of Scams! | The Little Pepe Team will NEVER
      contact you directly through social media or messaging platforms. Always
      verify official links only through our website: charlieunicornai.eu |
      NEVER share your seed phrase or private key with anyone, not even with
      someone claiming to be from the team -
    </Translate>
  </p>
);

export default SafetyBanner;
