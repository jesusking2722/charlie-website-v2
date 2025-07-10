import Image from "next/image";
import ArrowDownIcon from "@/public/assets/svgs/arrow_down.svg";

export interface IAccordion {
  title: string;
  description: string;
  checked?: boolean;
  onSelect?: () => void;
}

const Accordion: React.FC<IAccordion> = ({
  title,
  description,
  checked,
  onSelect,
}) => {
  return (
    <div className="bg-[#2F1148] relative w-full rounded-lg p-8">
      <button
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={onSelect}
      >
        <span className="text-white font-semibold text-[28px]">{title}</span>

        <Image
          src={ArrowDownIcon}
          alt="Arrow down"
          className={`w-8 h-8 ${
            checked ? "rotate-90" : "rotate-0"
          } transition-all duration-200`}
        />
      </button>

      {checked && (
        <p className="text-[#E0E0E0] text-[20px] mt-4 text-left">
          {description}
        </p>
      )}

      {checked && (
        <div className="absolute left-0 rounded-l-lg bg-gradient-to-b from-[#c427e0] via-[#844aff] to-[#12a9ff] bg-opacity-40 w-[2px] h-full top-0"></div>
      )}
    </div>
  );
};

export default Accordion;
