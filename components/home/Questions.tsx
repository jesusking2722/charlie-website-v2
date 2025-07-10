import Image from "next/image";
import ListingOnImage from "@/public/assets/pngs/listing_on.png";
import QuestionImage from "@/public/assets/pngs/question.png";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";

const Questions = () => {
  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="w-full flex items-center gap-14 rounded-2xl bg-[#280C3F] p-10">
          <div className="w-2/3 space-y-8">
            <h1 className="text-white font-black text-7xl">Listings On</h1>
            <p className="text-[#E0E0E0] font-medium text-[32px]">
              Tier 1 and Tier 2 exchanges soon !
            </p>
          </div>
          <Image
            src={ListingOnImage}
            alt="Listings On"
            className="w-1/3 h-auto object-cover"
          />
        </div>

        <div className="w-[80%] mx-auto flex items-center justify-between">
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
        </div>

        <div className="w-full flex items-center gap-14 rounded-2xl bg-[#280C3F] p-10">
          <Image
            src={QuestionImage}
            alt="Question"
            className="w-1/3 h-auto object-cover"
          />
          <div className="w-2/3 space-y-8">
            <h1 className="text-white font-black text-7xl">Questions??</h1>
            <p className="text-[#E0E0E0] font-medium text-[32px]">
              Team of our moderators will surely help and answer all your
              questions
            </p>
            <div className="relative w-[71px] h-[71px] bg-primary-gradient rounded-md transition-all duration-300 hover:shadow-[0_0_8px_rgba(196,39,224,0.7),0_0_12px_rgba(132,74,255,0.5),0_0_16px_rgba(18,169,255,0.3)]">
              <button className="absolute inset-[1px] flex items-center justify-center bg-[#280C3F] rounded-md p-1 cursor-pointer">
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
