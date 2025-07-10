import Image from "next/image";
import BackgroundImage from "@/public/assets/pngs/about_bg.png";
import Card, { ICard } from "../common/Card";
import EventUpIcon from "@/public/assets/svgs/eventup.svg";
import NFTMaIcon from "@/public/assets/svgs/nft_ma.svg";
import StylizedGoldenIcon from "@/public/assets/svgs/stylized_golden.svg";
import MultiChainIcon from "@/public/assets/svgs/multi_chain.svg";
import DateIcon from "@/public/assets/svgs/date.svg";
import CombiningTwoIcon from "@/public/assets/svgs/combining_two.svg";

const About = () => {
  const cards: ICard[] = [
    {
      icon: EventUpIcon,
      title: "EventUp WebParty App",
      description:
        "Development completed. A fully functional, user-friendly app bridging real-world events with blockchain innovation.",
    },
    {
      icon: NFTMaIcon,
      title: "NFT Marketplace",
      description:
        "Live on BNB Chain, enabling users to trade and mint NFTs easily and securely.",
    },
    {
      icon: StylizedGoldenIcon,
      title: "Telegram Play-to-Earn Game",
      description:
        "A groundbreaking farming and reward experience where users can earn by farmingtokens and engaging with ads.",
    },

    {
      icon: MultiChainIcon,
      title: "Multi-Chain Pre-Sale Platform",
      description:
        "Seamless investing across all major blockchains, designed for maximum user accessibility.",
    },
    {
      icon: DateIcon,
      title: "AI-Powered Dating App",
      description:
        "Ready to launch soon after EventUp, bringing smart matchmaking to Web3.",
    },
    {
      icon: CombiningTwoIcon,
      title: "Image Generator & Integrated ChatGPT",
      description:
        "Already operating within our Telegram community, creating an unmatched interactive experience.",
    },
  ];

  return (
    <section className="w-full relative">
      <Image
        src={BackgroundImage}
        alt="About Background"
        className="w-full h-auto object-cover"
      />

      {/* Achievements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-8">
          <div className="w-full relative flex justify-between">
            {cards.slice(0, 3).map((card, index) => (
              <Card
                key={index}
                {...card}
                className={index === 1 ? "-translate-y-15" : ""}
              />
            ))}
          </div>

          <h1 className="text-white font-black text-7xl">Our Achievements</h1>

          <div className="w-full relative flex justify-between">
            {cards.slice(3, 6).map((card, index) => (
              <Card
                key={index}
                {...card}
                className={index === 1 ? "translate-y-15" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
