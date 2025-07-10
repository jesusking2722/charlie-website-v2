import Image from "next/image";
import P2ERevolutionImage from "@/public/assets/pngs/p2e_revolution_bg.png";
import AppStoreImage from "@/public/assets/svgs/app_store.svg";
import GooglePlayImage from "@/public/assets/svgs/google_play.svg";
import TelegramButtonImage from "@/public/assets/svgs/telegram_button.svg";
import { Radio } from "../common";
import Link from "next/link";

const P2ERevolution = () => {
  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto flex items-center justify-between gap-14">
        <div className="w-1/2 flex flex-col items-start gap-8">
          <h1 className="text-white font-black text-7xl">P2E Revolution: </h1>

          <h2 className="text-white font-medium text-6xl">
            The Future of GameFi / DeFi Tycoons
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-6">
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
            <button className="cursor-pointer hover:scale-105 transition-all duration-200">
              <Image
                src={TelegramButtonImage}
                alt="Telegram"
                className="w-full h-auto object-cover"
              />
            </button>
          </div>

          <p className="text-[#D9D9D9] text-[20px]">
            Check out our amazing app—it has it all: minigames, farming, a
            marketplace, news updated and much more! Whether you’re looking to
            challenge your skills with exciting minigames, grow your own virtual
            farming rate, or stay updated with the latest news. our app has
            everything you need. Join a vibrant community, trade items in the
            marketplace and experience the full range of features designed to
            keep you entertained and engaged.
            <br />
            <br />
            Don’t miss out—download now and start your adventure!
          </p>

          <div className="flex items-start gap-4">
            <Radio name="" value={null} checked={true} disabled={true} />
            <div className="flex flex-col items-start -mt-1">
              <span className="text-[#D9D9D9] text-[20px]">
                Check it out on Telegram
              </span>
              <Link
                href="https://t.me/CharliegameBot"
                className="text-primary-gradient text-[20px] font-semibold"
              >
                @Charliegamebot (https://t.me/CharliegameBot)
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[32px] bg-primary-gradient">
            <div className="absolute inset-[1px] bg-[#1A062A] grid grid-cols-4">
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#D9D9D9] text-[20px]">MULTICHAIN</span>
              </div>
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#D9D9D9] text-[20px]">DEX</span>
              </div>
              <div className="border-primary-gradient-right px-5 flex items-center justify-center">
                <span className=" text-[#D9D9D9] text-[20px]">LAUNCHPAD</span>
              </div>
              <div className="px-5 flex items-center justify-center">
                <span className=" text-[#D9D9D9] text-[20px]">PC GAME</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={P2ERevolutionImage}
          alt="P2E Revolution"
          className="w-1/2 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default P2ERevolution;
