import Image from "next/image";
import { ICard } from "../common/Card";
import { Button, Card, Radio } from "../common";
import PowerCharlieImage from "@/public/assets/pngs/power_charlie.png";
import InvestCharlieImage from "@/public/assets/pngs/invest_charlie.png";
import JoinRevolutionImage from "@/public/assets/pngs/join_revolution.png";
import DexIcon from "@/public/assets/svgs/dex.svg";
import FuturisticIcon from "@/public/assets/svgs/futuristic.svg";
import CrossBridgeIcon from "@/public/assets/svgs/cross_bridge.svg";
import CharlieChainIcon from "@/public/assets/svgs/charlie_chain.svg";
import GlobalFreeIcon from "@/public/assets/svgs/global_free.svg";
import ArrowRightIcon from "@/public/assets/svgs/arrow_right.svg";
import { FlowingLogos } from "../molecules";

const Features = () => {
  const featuresCards: ICard[] = [
    {
      icon: DexIcon,
      title: "DEX Platform",
      description:
        "Currently in advanced development, designed for seamless, low-cost token trading across the ecosystem.",
    },
    {
      icon: FuturisticIcon,
      title: "Unicorn Racing World Game",
      description:
        "A masterpiece developed in Unreal Engine 5. Open world, racing, breeding, betting, and crafting. Expected completion: end of 2025.",
    },
    {
      icon: CrossBridgeIcon,
      title: "Cross-Chain Bridge",
      description:
        "Connecting all major blockchain networks for effortless asset movement.",
    },

    {
      icon: CharlieChainIcon,
      title: "Charlie Unicorn Blockchain",
      description:
        "Ultra-fast, low-fee, eco-friendly blockchain powering the next generation of decentralized apps.",
    },
    {
      icon: GlobalFreeIcon,
      title: "Freelancer Job Site",
      description:
        "Currently in development, a global platform where freelancers can find work opportunities worldwide, integrating blockchain payments for speed, transparency, and security.",
    },
  ];

  const flowingItems: string[] = [
    "dex",
    "PC Game",
    "Marketplace",
    "Lauchpad",
    "Multichain",
    "dex",
    "PC Game",
    "Marketplace",
    "Lauchpad",
    "Multichain",
    "dex",
    "PC Game",
    "Marketplace",
    "Lauchpad",
    "Multichain",
    "dex",
    "PC Game",
    "Marketplace",
    "Lauchpad",
    "Multichain",
  ];

  return (
    <section id="features" className="w-full space-y-28">
      <div className="w-[80%] mx-auto space-y-32">
        {/* Features */}
        <div className="w-full grid grid-cols-3 gap-14">
          <div className="">
            <h1 className="text-white font-black text-7xl">
              Our
              <br />
              Future
              <br />
              Builds
            </h1>
          </div>

          {featuresCards.map((card, index) => (
            <Card
              key={index}
              {...card}
              innerClassName="h-[380px]"
              gap="gap-2"
              opacity={0.8}
            />
          ))}
        </div>

        {/* Power of Charlie */}
        <div className="w-full flex items-center justify-between gap-14">
          <div className="w-1/2 flex flex-col items-start gap-8">
            {/* Title */}
            <h1 className="text-white font-black text-7xl">
              The Power of Charlie (CHRLE)
            </h1>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-[#E0E0E0] text-[20px]">
                Every component in our ecosystem strengthens our Charlie Token
                (CHRLE). Through an innovative 20% automatic buy-and-burn
                mechanism on all payments (subscriptions, purchases, marketplace
                activity, game spending, and more), CHRLE supply is constantly
                reduced — driving scarcity, value, and investor rewards.
              </p>
              <p className="text-[#E0E0E0] text-[20px]">
                With hundreds of thousands of users expected across our
                platforms, this relentless burning process guarantees a
                continuously rising token floor.
              </p>
            </div>

            {/* Title & Radio Group */}
            <div className="w-[80%] space-y-4">
              {/* Title */}
              <h2 className="text-white text-[20px] font-semibold">
                Our philosophy is simple:
              </h2>

              {/* Radio Group */}
              <div className="w-full grid grid-cols-2 gap-4">
                <Radio
                  label="More users"
                  name="moreUsers"
                  value={null}
                  checked={true}
                  disabled={true}
                />
                <Radio
                  label="More utility"
                  name="moreUtility"
                  value={null}
                  checked={true}
                  disabled={true}
                />
                <Radio
                  label="More Charlie burned"
                  name="moreCharlieBurned"
                  value={null}
                  checked={true}
                  disabled={true}
                />
                <Radio
                  label="Higher value for investors"
                  name="higherValueForInvestors"
                  value={null}
                  checked={true}
                  disabled={true}
                />
              </div>
            </div>

            <p className="text-[#E0E0E0] text-[20px]">
              We are not just another project. We are an unstoppable force,
              combining technology, utility, and visionary leadership to reshape
              Web3 forever.
            </p>
          </div>
          <Image
            src={PowerCharlieImage}
            alt="Power of Charlie"
            className="w-1/2 h-auto object-cover"
          />
        </div>

        {/* Invest Charlie */}
        <div className="w-full flex items-center justify-between gap-14">
          <Image
            src={InvestCharlieImage}
            alt="Power of Charlie"
            className="w-1/2 h-auto object-cover"
          />
          <div className="w-1/2 flex flex-col items-start gap-8">
            {/* Title */}
            <h1 className="text-white font-black text-7xl">
              Why Invest in Charlie Unicorn AI?
            </h1>

            {/* Radio Group */}
            <div className="w-full space-y-4">
              <Radio
                label="A fully working ecosystem — not empty promises, but real achievements."
                name=""
                value={null}
                checked={true}
                disabled={true}
              />
              <Radio
                label="Professional-grade development across every app, platform, and game."
                name=""
                value={null}
                checked={true}
                disabled={true}
              />
              <Radio
                label="Rapid execution — From concept to real product in record time."
                name=""
                value={null}
                checked={true}
                disabled={true}
              />
              <Radio
                label="An aggressive, smart tokenomics model that rewards long-term holders and early believers."
                name=""
                value={null}
                checked={true}
                disabled={true}
              />
              <Radio
                label="A bold, scalable roadmap with massive future potential."
                name=""
                value={null}
                checked={true}
                disabled={true}
              />
            </div>

            <p className="text-[#E0E0E0] text-[20px]">
              Charlie Unicorn AI isn't following trends — We are setting them.
              <br />
              <br />
              If you're looking for a project that delivers, a team that
              executes relentlessly, and a vision that transcends the ordinary,
              Charlie Unicorn AI is your once-in-a-lifetime opportunity.
            </p>
          </div>
        </div>

        {/* Join Revolution */}
        <div className="w-full relative">
          <Image
            src={JoinRevolutionImage}
            alt="Join Revolution"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-24 w-full">
            <div className="w-[90%] mx-auto space-y-8">
              <h1 className="text-white font-medium text-[42px]">
                Join the Revolution.
                <br />
                Be Part of the Unicorn Legacy.
              </h1>

              <div className="flex items-center gap-6">
                <Button
                  type="primary"
                  label="BUY PRESALE"
                  icon={ArrowRightIcon}
                  hovered={true}
                />
                <Button type="outline-secondary" label="WHITE PAPER" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowing logos */}
      <FlowingLogos labels={flowingItems} />
    </section>
  );
};

export default Features;
