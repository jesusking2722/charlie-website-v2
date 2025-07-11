import Image from "next/image";
import P2ERevolutionImage from "@/public/assets/pngs/p2e_revolution_bg.png";
import AppStoreImage from "@/public/assets/svgs/app_store.svg";
import GooglePlayImage from "@/public/assets/svgs/google_play.svg";
import TelegramButtonImage from "@/public/assets/svgs/telegram_button.svg";
import MobileTelegramButtonImage from "@/public/assets/svgs/mobile_telegram_button.svg";
import { Radio, Translate } from "../common";
import Link from "next/link";

const P2ERevolution = () => {
  const handleTelegram = () => {
    window.open("https://t.me/CharliegameBot", "_blank");
  };

  return (
    <section className="w-full">
      <div className="xl:w-[80%] lg:w-[80%] w-[90%] mx-auto flex xl:flex-row lg:flex-row flex-col items-center xl:justify-between lg:justify-between xl:gap-14 lg:gap-14 gap-6">
        <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col items-start gap-8">
          <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
            <Translate>P2E Revolution:</Translate>
          </h1>

          <h2 className="text-white font-medium xl:text-6xl lg:text-6xl text-[32px]">
            <Translate>The Future of GameFi / DeFi Tycoons</Translate>
          </h2>

          {/* Buttons */}
          <div className="xl:flex lg:flex hidden items-center gap-6">
            {/* <button className="cursor-pointer hover:scale-105 transition-all duration-200">
              <Image
                src={AppStoreImage}
                alt="Download from App store"
                className="w-full h-auto object-cover"
              />
            </button>
            <button className="cursor-pointer hover:scale-105 transition-all duration-200">
              <Image
                src={GooglePlayImage}
                alt="Download from Google play"
                className="w-full h-auto object-cover"
              />
            </button> */}
            <button
              className="cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={handleTelegram}
            >
              <Image
                src={TelegramButtonImage}
                alt="Telegram"
                className="w-full h-auto object-cover"
              />
            </button>
          </div>

          {/* Buttons */}
          <div className="xl:hidden lg:hidden flex flex-col w-full items-center gap-6">
            {/* <div className="w-full grid grid-cols-2 gap-6">
              <button className="cursor-pointer hover:scale-105 transition-all duration-200">
                <Image
                  src={AppStoreImage}
                  alt="Download from App store"
                  className="w-full h-auto object-cover"
                />
              </button>
              <button className="cursor-pointer hover:scale-105 transition-all duration-200">
                <Image
                  src={GooglePlayImage}
                  alt="Download from Google play"
                  className="w-full h-auto object-cover"
                />
              </button>
            </div> */}

            <button
              className="cursor-pointer hover:scale-105 transition-all duration-200 w-full"
              onClick={handleTelegram}
            >
              <Image
                src={MobileTelegramButtonImage}
                alt="Telegram"
                className="w-full h-auto object-cover"
              />
            </button>
          </div>

          <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
            <Translate>
              Check out our amazing app—it has it all: minigames, farming, a
              marketplace, news updated and much more! Whether you’re looking to
              challenge your skills with exciting minigames, grow your own
              virtual farming rate, or stay updated with the latest news. our
              app has everything you need. Join a vibrant community, trade items
              in the marketplace and experience the full range of features
              designed to keep you entertained and engaged.
            </Translate>
            <br />
            <br />
            <Translate>
              Don’t miss out—download now and start your adventure!
            </Translate>
          </p>

          <div className="flex items-start gap-4">
            <Radio name="" value={null} checked={true} disabled={true} />
            <div className="flex flex-col items-start -mt-1">
              <span className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                <Translate>Check it out on Telegram</Translate>
              </span>
              <Link
                href="https://t.me/CharliegameBot"
                className="text-primary-gradient xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] font-semibold"
              >
                @Charliegamebot (https://t.me/CharliegameBot)
              </Link>
            </div>
          </div>

          {/* <div className="relative w-full h-[32px] xl:block lg:block hidden bg-primary-gradient">
            <div className="absolute inset-[1px] bg-[#1A062A] grid grid-cols-4">
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#E0E0E0] text-[20px]">
                  <Translate>MULTICHAIN</Translate>
                </span>
              </div>
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#E0E0E0] text-[20px]">
                  <Translate>DEX</Translate>
                </span>
              </div>
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#E0E0E0] text-[20px]">
                  <Translate>LAUNCHPAD</Translate>
                </span>
              </div>
              <div className="px-5 flex items-center justify-center">
                <span className=" text-[#E0E0E0] text-[20px] whitespace-nowrap">
                  <Translate>PC GAME</Translate>
                </span>
              </div>
            </div>
          </div> */}

          {/* <div className="relative w-full xl:hidden lg:hidden grid grid-cols-2 p-6 gap-6 border-primary-gradient">
            <p className=" text-[#E0E0E0] text-[20px] text-center">
              <Translate>MULTICHAIN</Translate>
            </p>
            <p className=" text-[#E0E0E0] text-[20px] text-center">
              <Translate>DEX</Translate>
            </p>
            <p className=" text-[#E0E0E0] text-[20px] text-center">
              <Translate>LAUNCHPAD</Translate>
            </p>
            <p className=" text-[#E0E0E0] text-[20px] text-center whitespace-nowrap">
              <Translate>PC GAME</Translate>
            </p>
          </div> */}
        </div>
        <Image
          src={P2ERevolutionImage}
          alt="P2E Revolution"
          className="xl:w-1/2 lg:w-1/2 w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default P2ERevolution;
