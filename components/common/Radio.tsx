import React from "react";
import Translate from "./Translate";

export interface IRadio {
  name: string;
  value: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  className?: string;
}

const Radio: React.FC<IRadio> = ({
  className,
  name,
  value,
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange ? onChange : undefined}
        name={name}
        value={value}
        className="sr-only"
      />
      <div className="flex items-start gap-3 flex-1">
        <div
          className={`
            xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 w-[18px] h-[18px] bg-white flex items-center justify-center rounded-full border-2 border-gray-300 
            transition-all duration-200 ease-in-out
            ${
              disabled
                ? "cursor-not-allowed"
                : "hover:border-gray-400 cursor-pointer"
            }
          `}
          onClick={() => !disabled && onChange && onChange()}
        >
          <div
            className={`
              xl:w-[15px] xl:h-[15px] lg:w-[15px] lg:h-[15px] md:w-[15px] md:h-[15px] w-[11px] h-[11px] rounded-full transition-all duration-200 ease-in-out
              ${
                checked
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  : "bg-[#969696]"
              }
            `}
          />
        </div>
        {label && (
          <label
            className={`text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] font-semibold cursor-pointer -mt-1 flex-1 ${
              !disabled && "cursor-pointer"
            }`}
            onClick={() => !disabled && onChange && onChange()}
          >
            <Translate>{label}</Translate>
          </label>
        )}
      </div>
    </div>
  );
};

export default Radio;
