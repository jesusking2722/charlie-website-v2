import Image from "next/image";
import BackgroundImage from "@/public/assets/pngs/hero_bg.png";
import MobileBackgroundImage from "@/public/assets/pngs/mobile_hero_bg.png";
import ArrowRightIcon from "@/public/assets/svgs/arrow_right.svg";
import { Button, Translate } from "../common";

const Hero = () => {
  const handleJoinPresale = () => {
    window.open("https://charlieunicornai-sale.eu", "_blank");
  };

  const handleLearnMore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full relative sm:mt-0">
      <Image
        src={BackgroundImage}
        alt="Hero Background"
        className="w-full h-auto object-cover xl:block lg:block hidden"
        priority
      />

      <Image
        src={MobileBackgroundImage}
        alt="Hero Background"
        className="w-full h-auto object-cover xl:hidden lg:hidden block"
      />

      <div className="absolute xl:flex lg:flex md:flex hidden w-full xl:h-1/2 lg:h-1/2 md:h-1/3 z-10 bottom-0 flex-col items-center justify-center">
        <div className="xl:w-[80%] lg:w-[80%] w-[90%] mx-auto flex xl:flex-row lg:flex-row flex-col xl:items-end lg:items-end xl:gap-0 lg:gap-0 gap-8">
          {/* Title & Buttons */}
          <div className="xl:w-1/2 lg:w-1/2 w-full lg:space-y-14 xl:space-y-14">
            <h1 className="text-white font-black xl:text-7xl lg:text-5xl text-4xl">
              Charlie Unicorn AI <Translate>Ecosystem</Translate>
            </h1>
            <div className="xl:flex lg:flex hidden items-center gap-6">
              <Button
                type="primary"
                label="JOIN PRESALE"
                icon={ArrowRightIcon}
                hovered={true}
                onClick={handleJoinPresale}
              />
              <Button
                type="outline"
                label="LEARN MORE"
                onClick={handleLearnMore}
              />
            </div>
          </div>

          {/* Description */}
          <div className="xl:w-1/2 lg:w-1/2 w-full">
            <p className="text-white text-2xl">
              <Translate>
                A New Era of Innovation Has Arrived At Charlie Unicorn AI, we
                don't just envision the future — we build it. Since December
                2024, we have created one of the most complete and ambitious
                ecosystems in Web3, delivering real-world applications and
                endless opportunities for growth. But that's just the beginning.
              </Translate>
            </p>
          </div>

          <div className="xl:hidden lg:hidden flex flex-col items-center w-full gap-6">
            <Button
              type="primary"
              label="JOIN PRESALE"
              icon={ArrowRightIcon}
              hovered={true}
              width="full"
              onClick={handleJoinPresale}
            />
            <Button
              type="outline"
              label="LEARN MORE"
              width="full"
              onClick={handleLearnMore}
            />
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden md:hidden absolute flex w-[90%] left-[2.5%] -bottom-64 flex-col gap-6">
        <h1 className="text-white font-black text-4xl">
          Charlie Unicorn AI <Translate> Ecosystem</Translate>
        </h1>
        <p className="text-white text-[16px]">
          <Translate>
            A New Era of Innovation Has Arrived At Charlie Unicorn AI, we don't
            just envision the future — we build it. Since December 2024, we have
            created one of the most complete and ambitious ecosystems in Web3,
            delivering real-world applications and endless opportunities for
            growth. But that's just the beginning.
          </Translate>
        </p>
        <div className="flex flex-col items-center w-full gap-6">
          <Button
            type="primary"
            label="JOIN PRESALE"
            icon={ArrowRightIcon}
            hovered={true}
            width="full"
            onClick={handleJoinPresale}
          />
          <Button
            type="outline"
            label="LEARN MORE"
            width="full"
            onClick={handleLearnMore}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
