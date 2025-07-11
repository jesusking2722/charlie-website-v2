import Image from "next/image";
import ListingOnImage from "@/public/assets/pngs/listing_on.png";
import QuestionImage from "@/public/assets/pngs/question.png";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";
import { Translate } from "../common";

const Questions = () => {
  const handleTelegram = () => {
    window.open("https://t.me/CharlieUnicornaiOfficial", "_blank");
  };

  return (
    <section className="w-full">
      <div className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto xl:space-y-0 lg:space-y-0 space-y-14">
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:gap-14 lg:gap-14 gap-6 rounded-2xl bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6">
          <Image
            src={ListingOnImage}
            alt="Listings On"
            className="w-full h-auto object-cover xl:hidden lg:hidden flex"
          />

          <div className="xl:w-2/3 lg:w-2/3 w-full xl:space-y-8 lg:space-y-8 space-y-6">
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <Translate>Listings On</Translate>
            </h1>
            <p className="text-[#E0E0E0] font-medium xl:text-[32px] lg:text-[32px] text-[20px]">
              <Translate>Tier 1 and Tier 2 exchanges soon !</Translate>
            </p>
          </div>

          <Image
            src={ListingOnImage}
            alt="Listings On"
            className="w-1/3 h-auto object-cover xl:flex lg:flex hidden"
          />
        </div>

        <div className="w-[80%] mx-auto xl:flex lg:flex hidden items-center justify-between">
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
        </div>

        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:gap-14 lg:gap-14 gap-6 rounded-2xl bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6">
          <Image
            src={QuestionImage}
            alt="Question"
            className="xl:w-1/3 lg:w-1/3 w-full h-auto object-cover"
          />
          <div className="xl:w-2/3 lg:w-2/3 w-full xl:space-y-8 lg:space-y-8 space-y-6">
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <Translate>Questions??</Translate>
            </h1>
            <p className="text-[#E0E0E0] font-medium xl:text-[32px] lg:text-[32px] text-[20px]">
              <Translate>
                Team of our moderators will surely help and answer all your
                questions
              </Translate>
            </p>
            <div className="relative w-[71px] h-[71px] bg-primary-gradient rounded-md transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
              <button
                className="absolute inset-[1px] flex items-center justify-center bg-[#280C3F] rounded-md p-1 cursor-pointer"
                onClick={handleTelegram}
              >
                <Image src={TelegramIcon} alt="Icon" className="w-14 h-14" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
