import Image from "next/image";
import BackgroundImage from "@/public/assets/pngs/hero_bg.png";
import ArrowRightIcon from "@/public/assets/svgs/arrow_right.svg";
import { Button } from "../common";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Image
        src={BackgroundImage}
        alt="Hero Background"
        className="w-full h-auto object-cover"
        priority
      />

      <div className="absolute w-full h-1/2 z-10 bottom-0 flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto flex items-end gap-0">
          {/* Title & Buttons */}
          <div className="w-1/2 space-y-14">
            <h1 className="text-white font-black text-7xl">
              Charlie Unicorn AI Ecosystem
            </h1>
            <div className="flex items-center gap-6">
              <Button
                type="primary"
                label="JOIN PRESALE"
                icon={ArrowRightIcon}
              />
              <Button type="outline" label="LEARN MORE" />
            </div>
          </div>

          {/* Description */}
          <div className="w-1/2">
            <p className="text-white text-2xl">
              A New Era of Innovation Has Arrived At Charlie Unicorn AI, we
              don't just envision the future — we build it. Since December 2024,
              we have created one of the most complete and ambitious ecosystems
              in Web3, delivering real-world applications and endless
              opportunities for growth. But that's just the beginning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
