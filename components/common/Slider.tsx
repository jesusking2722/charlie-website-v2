import Image, { StaticImageData } from "next/image";
import { IRadio } from "./Radio";
import { useState } from "react";
import { RadioGroup } from "../molecules";

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

  const radios: IRadio[] = [
    { name: "", value: null, checked: false },
    { name: "", value: null, checked: false },
    { name: "", value: null, checked: false },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="w-full grid grid-cols-2 gap-14 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full bg-[rgba(40,12,63,0.75)] relative rounded-3xl"
          >
            <Image
              src={slide.img}
              alt={slide.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-6 space-y-4 rounded-b-3xl">
              <h1 className="text-white font-bold text-[42px]">
                {slide.title}
              </h1>
              <p className="text-[#D9D9D9] text-[20px]">{slide.description}</p>
            </div>
            <div className="absolute h-2 bg-primary-gradient rounded-b-3xl left-0 right-0 bottom-0"></div>
          </div>
        ))}
      </div>

      <RadioGroup
        radios={radios}
        activedIndex={activedIndex}
        onSelect={setActivedIndex}
      />
    </div>
  );
};

export default Slider;
