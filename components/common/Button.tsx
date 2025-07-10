import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  type: "primary" | "outline" | "outline-secondary" | "icon" | "outline-icon";
  label?: string;
  icon?: StaticImageData;
  hovered?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  hovered,
  onClick,
}) => {
  if (type === "icon" && icon) {
    return (
      <div className="relative w-10 h-10 bg-primary-gradient rounded-md transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
        <button className="absolute inset-[1px] flex items-center justify-center bg-[#1A062A] rounded-md p-1 cursor-pointer">
          <Image src={icon} alt="Icon" className="w-9 h-9" />
        </button>
      </div>
    );
  }

  if (type === "primary") {
    return (
      <button
        className={`bg-primary-gradient flex items-center justify-center rounded-full border-2 border-white 
        text-white font-semibold text-lg w-52 h-16 cursor-pointer gap-2 transition-all duration-300 ${
          hovered
            ? "shadow-[0_0_10px_rgba(196,39,224,0.9),0_0_14px_rgba(132,74,255,0.7),0_0_18px_rgba(18,169,255,0.5)] hover:shadow-[0_0_20px_rgba(196,39,224,1),0_0_30px_rgba(132,74,255,0.9),0_0_40px_rgba(18,169,255,0.8)]"
            : "hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]"
        } 
      `}
      >
        {label}
        {icon && <Image src={icon} alt="Icon" className="w-5 h-5" />}
      </button>
    );
  }

  if (type === "outline") {
    return (
      <div className="relative w-52 h-16 bg-primary-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
        <button
          className="
      absolute inset-[1px]
      flex items-center justify-center
      bg-[#1A062A] rounded-full
       py-2 px-5 cursor-pointer gap-2
    "
        >
          <span
            className="font-semibold text-lg bg-gradient-to-r from-[#c427e0] via-[#844aff] to-[#12a9ff]
      bg-clip-text text-transparent"
          >
            {label}
          </span>
          {icon && <Image src={icon} alt="Icon" className="w-5 h-5" />}
        </button>
      </div>
    );
  }

  if (type === "outline-secondary") {
    return (
      <button
        className="
      relative bg-secondary-gradient
      w-52 h-16
      flex items-center justify-center
      bg-transparent
      text-white
      rounded-full
      transition-all duration-300
      gap-2
      overflow-hidden cursor-pointer
      p-[2px]
      hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]
    "
      >
        <span className="relative z-10 font-semibold text-lg bg-gradient-to-r from-[#ffa8d1] via-[#c3b1ff] to-[#aee2ff] bg-clip-text text-transparent">
          {label}
        </span>
        {icon && (
          <Image src={icon} alt="Icon" className="relative z-10 w-5 h-5" />
        )}
      </button>
    );
  }
};

export default Button;
