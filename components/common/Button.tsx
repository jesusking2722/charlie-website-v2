import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import Translate from "./Translate";

interface ButtonProps {
  type:
    | "primary"
    | "outline"
    | "outline-primary"
    | "outline-secondary"
    | "icon"
    | "primary-icon"
    | "outline-icon";
  label?: string;
  icon?: StaticImageData;
  hovered?: boolean;
  loading?: boolean;
  iconClassName?: string;
  width?: "full";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  hovered,
  loading,
  iconClassName,
  width,
  onClick,
}) => {
  if (type === "icon" && icon) {
    return (
      <div className="relative w-10 h-10 bg-primary-gradient rounded-md transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
        <button
          className="absolute inset-[1px] flex items-center justify-center bg-[#1A062A] rounded-md p-1 cursor-pointer"
          onClick={onClick}
        >
          <Image src={icon} alt="Icon" className="w-9 h-9" />
        </button>
      </div>
    );
  }

  if (type === "primary") {
    return (
      <button
        className={`bg-primary-gradient flex items-center justify-center rounded-full border-2 border-white 
        text-white font-semibold text-lg ${
          width ? "w-full" : "px-8"
        } xl:h-16 lg:h-16 md:h-16 h-[56px] gap-2 transition-all duration-300 ${
          hovered
            ? `shadow-[0_0_10px_rgba(196,39,224,0.9),0_0_14px_rgba(132,74,255,0.7),0_0_18px_rgba(18,169,255,0.5)]
            ${
              !loading
                ? "hover:shadow-[0_0_20px_rgba(196,39,224,1),0_0_30px_rgba(132,74,255,0.9),0_0_40px_rgba(18,169,255,0.8)]"
                : ""
            }`
            : `${
                loading
                  ? ""
                  : "hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]"
              }`
        } ${
          loading
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }
      `}
        disabled={loading}
        onClick={onClick}
      >
        <Translate>{label}</Translate>
        {icon && !loading && (
          <Image src={icon} alt="Icon" className={`w-5 h-5 ${iconClassName}`} />
        )}
        {loading && (
          <Icon
            icon="svg-spinners:ring-resize"
            className="text-[#E0E0E0] w-5 h-5"
          />
        )}
      </button>
    );
  }

  if (type === "primary-icon" && icon) {
    return (
      <button
        className={`bg-primary-gradient flex items-center justify-center rounded-full border-2 border-white 
        text-white font-semibold text-lg w-16 xl:h-16 lg:h-16 md:h-16 h-[56px] gap-2 transition-all duration-300 ${
          hovered
            ? `shadow-[0_0_10px_rgba(196,39,224,0.9),0_0_14px_rgba(132,74,255,0.7),0_0_18px_rgba(18,169,255,0.5)]
            ${
              !loading
                ? "hover:shadow-[0_0_20px_rgba(196,39,224,1),0_0_30px_rgba(132,74,255,0.9),0_0_40px_rgba(18,169,255,0.8)]"
                : ""
            }`
            : `${
                loading
                  ? ""
                  : "hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]"
              }`
        } ${
          loading
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }
      `}
        disabled={loading}
        onClick={onClick}
      >
        <Image src={icon} alt="Icon" className={`w-5 h-5 ${iconClassName}`} />
      </button>
    );
  }

  if (type === "outline") {
    return (
      <div
        className={`relative ${
          width ? "w-full" : "w-52"
        } xl:h-16 lg:h-16 md:h-16 h-[56px] bg-primary-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]`}
      >
        <button
          className="
      absolute inset-[1px]
      flex items-center justify-center
      bg-[#1A062A] rounded-full
       py-2 px-5 cursor-pointer gap-2
    "
          onClick={onClick}
        >
          <span
            className="font-semibold text-lg bg-gradient-to-r from-[#c427e0] via-[#844aff] to-[#12a9ff]
      bg-clip-text text-transparent"
          >
            <Translate>{label}</Translate>
          </span>
          {icon && <Image src={icon} alt="Icon" className="w-5 h-5" />}
        </button>
      </div>
    );
  }

  if (type === "outline-primary") {
    return (
      <div className="relative w-full h-[72px] bg-primary-gradient hover:border hover:border-white group rounded-full transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
        <button
          className="
      absolute inset-[1px]
      flex items-center justify-center
      bg-[#1A062A] rounded-full
       py-2 px-5 cursor-pointer gap-2 group-hover:bg-transparent transition-all duration-200
    "
          onClick={onClick}
        >
          <span className="font-semibold text-white text-[28px] transition-all duration-200">
            <Translate>{label}</Translate>
          </span>
          {icon && <Image src={icon} alt="Icon" className="w-5 h-5" />}
        </button>
      </div>
    );
  }

  if (type === "outline-secondary") {
    return (
      <button
        className={`relative bg-secondary-gradient
      ${width ? "w-full" : "w-52"} xl:h-16 lg:h-16 md:h-16 h-[56px]
      flex items-center justify-center
      bg-transparent
      text-white
      rounded-full
      transition-all duration-300
      gap-2
      overflow-hidden cursor-pointer
      p-[2px]
      hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]`}
        onClick={onClick}
      >
        <span className="relative z-10 font-semibold text-lg bg-gradient-to-r from-[#ffa8d1] via-[#c3b1ff] to-[#aee2ff] bg-clip-text text-transparent">
          <Translate>{label}</Translate>
        </span>
        {icon && (
          <Image src={icon} alt="Icon" className="relative z-10 w-5 h-5" />
        )}
      </button>
    );
  }
};

export default Button;
