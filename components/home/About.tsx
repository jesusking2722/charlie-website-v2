import Image from "next/image";
import BackgroundImage from "@/public/assets/pngs/about_bg.png";
import Card, { ICard } from "../common/Card";
import EventUpIcon from "@/public/assets/svgs/eventup.svg";
import NFTMaIcon from "@/public/assets/svgs/nft_ma.svg";
import StylizedGoldenIcon from "@/public/assets/svgs/stylized_golden.svg";
import MultiChainIcon from "@/public/assets/svgs/multi_chain.svg";
import DateIcon from "@/public/assets/svgs/date.svg";
import CombiningTwoIcon from "@/public/assets/svgs/combining_two.svg";
import { Translate } from "../common";

const About = () => {
  const cards: ICard[] = [
    {
      icon: EventUpIcon,
      title: "EventUp WebParty App",
      description:
        "Development completed. A fully functional, user-friendly app bridging real-world events with blockchain innovation.",
      path: "https://charlieparty.eu",
    },
    {
      icon: EventUpIcon,
      title: "Charlie Party App Store",
      description:
        "Development completed. A fully functional, user-friendly iOS app bridging real-world events with blockchain innovation.",
      // path: "https://apps.apple.com/pl/app/charlie-party/id6746444288",
    },
    {
      icon: EventUpIcon,
      title: "Charlie Party Google Play",
      description:
        "Development completed. A fully functional, user-friendly Android app bridging real-world events with blockchain innovation.",
      // path: "https://play.google.com/store/apps/details?id=com.charlieunicornai.charlieparty",
    },
    {
      icon: NFTMaIcon,
      title: "NFT Marketplace",
      description:
        "Live on BNB Chain, enabling users to trade and mint NFTs easily and securely.",
      path: "https://charlieunicornaimarketplace.eu",
    },
    {
      icon: StylizedGoldenIcon,
      title: "Telegram Play-to-Earn Game",
      description:
        "A groundbreaking farming and reward experience where users can earn by farmingtokens and engaging with ads.",
      path: "https://t.me/CharliegameBot",
    },

    {
      icon: MultiChainIcon,
      title: "Multi-Chain Pre-Sale Platform",
      description:
        "Seamless investing across all major blockchains, designed for maximum user accessibility.",
      path: "https://charlieunicornai-sale.eu",
    },

    {
      icon: MultiChainIcon,
      title: "Staking",
      description:
        "Unlock the full potential of your Charlie tokens through staking! It's a simple, effective, and rewarding process.",
      path: "https://charlieunicornai-sale.eu",
    },
    // {
    //   icon: DateIcon,
    //   title: "AI-Powered Dating App",
    //   description:
    //     "Ready to launch soon after EventUp, bringing smart matchmaking to Web3.",
    // },
    {
      icon: CombiningTwoIcon,
      title: "Image Generator & Integrated ChatGPT",
      description:
        "Already operating within our Telegram community, creating an unmatched interactive experience.",
      path: "https://t.me/CharlieUnicornaiOfficial",
    },
  ];

  return (
    <section
      id="about"
      className="w-full relative xl:mt-0 lg:mt-0 md:mt-[200px] mt-[305px]"
    >
      <Image
        src={BackgroundImage}
        alt="About Background"
        className="w-full h-auto object-cover xl:block lg:block hidden about-bg"
      />

      {/* Achievements */}
      <div className="absolute inset-0 xl:flex lg:flex hidden flex-col items-center justify-center">
        <div className="w-[95%] mx-auto flex flex-col items-center justify-center gap-8">
          <div className="w-full relative flex justify-between">
            {cards.slice(0, 4).map((card, index) => (
              <Card
                key={index}
                {...card}
                className={index === 1 || index === 2 ? "-translate-y-15" : ""}
              />
            ))}
          </div>

          <h1 className="text-white font-black text-7xl">
            <Translate>Our Achievements</Translate>
          </h1>

          <div className="w-full relative flex justify-between">
            {cards.slice(4, 8).map((card, index) => (
              <Card
                key={index}
                {...card}
                className={index === 1 || index === 2 ? "translate-y-15" : ""}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden w-[90%] mx-auto flex flex-col items-center gap-6">
        <h1 className="text-white font-black text-4xl">
          <Translate>Our Achievements</Translate>
        </h1>
        <div className="space-y-4 w-full">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
