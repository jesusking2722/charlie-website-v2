import React from "react";

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
        onChange={onChange}
        name={name}
        value={value}
        className="sr-only"
      />
      <div className="flex items-start gap-3 flex-1">
        <div
          className={`
            w-6 h-6 bg-white flex items-center justify-center rounded-full border-2 border-gray-300 
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
              w-[15px] h-[15px] rounded-full transition-all duration-200 ease-in-out
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
            className={`text-[#D9D9D9] text-[20px] font-semibold cursor-pointer -mt-1 flex-1 ${
              !disabled && "cursor-pointer"
            }`}
            onClick={() => !disabled && onChange && onChange()}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default Radio;
