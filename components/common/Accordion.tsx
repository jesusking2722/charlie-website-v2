import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ArrowDownIcon from "@/public/assets/svgs/arrow_down.svg";
import Translate from "./Translate";

export interface IAccordion {
  title: string;
  description: string;
  content?: string[];
  checked?: boolean;
  onSelect?: () => void;
}

const Accordion: React.FC<IAccordion> = ({
  title,
  description,
  content,
  checked,
  onSelect,
}) => {
  return (
    <div className="bg-[#2F1148] relative w-full rounded-lg p-8">
      <button
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={onSelect}
      >
        <span className="text-white font-semibold xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px]">
          <Translate>{title}</Translate>
        </span>

        <motion.div
          animate={{ rotate: checked ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image src={ArrowDownIcon} alt="Arrow down" className="w-8 h-8" />
        </motion.div>
      </button>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-lg mt-4 text-left"
            >
              <Translate>{description}</Translate>
            </motion.p>

            {content && (
              <ul className="list-decimal pl-2 w-full mt-2">
                {content.map((c, index) => (
                  <li key={index}>
                    <span className="text-[#E0E0E0] xl:text-lg lg:text-lg md:text-lg text-base">
                      <Translate>{c}</Translate>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 rounded-l-lg bg-gradient-to-b from-[#c427e0] via-[#844aff] to-[#12a9ff] bg-opacity-40 w-[2px] h-full top-0 origin-top"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
