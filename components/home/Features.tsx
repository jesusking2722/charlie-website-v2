import Image from "next/image";
import { ICard } from "../common/Card";
import { Button, Card, Radio, Translate } from "../common";
import PowerCharlieImage from "@/public/assets/pngs/power_charlie.png";
import InvestCharlieImage from "@/public/assets/pngs/invest_charlie.png";
import JoinRevolutionImage from "@/public/assets/pngs/join_revolution.png";
import MobileJoinRevolutionImage from "@/public/assets/pngs/mobile_join_revolution.png";
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

  const handleBuyPresale = () => {
    window.open("https://charlieunicornai-sale.eu", "_blank");
  };

  const handleWhitepaper = () => {
    window.open("https://charlieunicornai.eu/whitepaper", "_blank");
  };

  return (
    <section
      id="features"
      className="w-full xl:space-y-28 lg:space-y-28 md:space-y-28 space-y-14"
    >
      <div className="xl:w-[80%] lg:w-[80%] w-[90%] mx-auto space-y-32">
        {/* Features */}
        <div className="w-full xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 flex flex-col xl:gap-14 lg:gap-14 gap-6">
          <div className="">
            <h1 className="text-white font-black xl:text-7xl lg:text-5xl text-4xl">
              <Translate>Our Future Builds</Translate>
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
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:justify-between lg:justify-between gap-14">
          <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col items-start gap-8">
            {/* Title */}
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <Translate>The Power of Charlie</Translate> (CHRLE)
            </h1>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                <Translate>
                  Every component in our ecosystem strengthens our Charlie Token
                  (CHRLE). Through an innovative 20% automatic buy-and-burn
                  mechanism on all payments (subscriptions, purchases,
                  marketplace activity, game spending, and more), CHRLE supply
                  is constantly reduced — driving scarcity, value, and investor
                  rewards.
                </Translate>
              </p>
              <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                <Translate>
                  With hundreds of thousands of users expected across our
                  platforms, this relentless burning process guarantees a
                  continuously rising token floor.
                </Translate>
              </p>
            </div>

            {/* Title & Radio Group */}
            <div className="w-[80%] space-y-4">
              {/* Title */}
              <h2 className="text-white xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] font-semibold">
                <Translate>Our philosophy is simple:</Translate>
              </h2>

              {/* Radio Group */}
              <div className="w-full xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col gap-4">
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

            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              <Translate>
                We are not just another project. We are an unstoppable force,
                combining technology, utility, and visionary leadership to
                reshape Web3 forever.
              </Translate>
            </p>
          </div>
          <Image
            src={PowerCharlieImage}
            alt="Power of Charlie"
            className="xl:w-1/2 lg:w-1/2 w-full h-auto object-cover"
          />
        </div>

        {/* Invest Charlie */}
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center justify-between xl:gap-14 lg:gap-14 gap-6">
          <Image
            src={InvestCharlieImage}
            alt="Power of Charlie"
            className="w-1/2 xl:flex lg:flex hidden h-auto object-cover"
          />

          <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col items-start gap-8">
            {/* Title */}
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <Translate>Why Invest in Charlie Unicorn AI?</Translate>
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

            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              <Translate>
                Charlie Unicorn AI isn't following trends — We are setting them.
              </Translate>
              <br />
              <br />
              <Translate>
                If you're looking for a project that delivers, a team that
                executes relentlessly, and a vision that transcends the
                ordinary, Charlie Unicorn AI is your once-in-a-lifetime
                opportunity.
              </Translate>
            </p>
          </div>

          <Image
            src={InvestCharlieImage}
            alt="Power of Charlie"
            className="w-full xl:hidden lg:hidden flex h-auto object-cover"
          />
        </div>

        {/* Join Revolution */}
        <div className="w-full relative xl:flex lg:flex hidden">
          <Image
            src={JoinRevolutionImage}
            alt="Join Revolution"
            className="w-full xl:flex lg:flex hidden h-auto object-cover"
          />

          <Image
            src={MobileJoinRevolutionImage}
            alt="Join Revolution"
            className="w-full xl:hidden lg:hidden flex h-auto object-cover"
          />

          <div className="absolute bottom-24 w-full">
            <div className="w-[90%] mx-auto space-y-8">
              <h1 className="text-white font-medium xl:text-[42px] lg:text-[42px] md:text-[42px] text-[32px]">
                <Translate>Join the Revolution.</Translate>
                <br />
                <Translate>Be Part of the Unicorn Legacy.</Translate>
              </h1>

              <div className="w-full xl:flex lg:flex hidden items-center gap-6">
                <Button
                  type="primary"
                  label="BUY PRESALE"
                  icon={ArrowRightIcon}
                  hovered={true}
                  onClick={handleBuyPresale}
                />
                <Button
                  type="outline-secondary"
                  label="WHITE PAPER"
                  onClick={handleWhitepaper}
                />
              </div>

              <div className="w-full xl:hidden lg:hidden flex flex-col items-center gap-6">
                <Button
                  type="primary"
                  label="BUY PRESALE"
                  icon={ArrowRightIcon}
                  hovered={true}
                  width="full"
                  onClick={handleBuyPresale}
                />
                <Button
                  type="outline-secondary"
                  label="WHITE PAPER"
                  width="full"
                  onClick={handleWhitepaper}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative xl:hidden lg:hidden flex">
        <Image
          src={JoinRevolutionImage}
          alt="Join Revolution"
          className="w-full xl:flex lg:flex hidden h-auto object-cover"
        />

        <Image
          src={MobileJoinRevolutionImage}
          alt="Join Revolution"
          className="w-full xl:hidden lg:hidden flex h-auto object-cover"
        />

        <div className="absolute md:bottom-24 bottom-6 w-full">
          <div className="w-[90%] mx-auto space-y-8">
            <h1 className="text-white font-medium xl:text-[42px] lg:text-[42px] md:text-[42px] text-[32px]">
              <Translate>Join the Revolution.</Translate>
              <br />
              <Translate>Be Part of the Unicorn Legacy.</Translate>
            </h1>

            <div className="w-full xl:flex lg:flex hidden items-center gap-6">
              <Button
                type="primary"
                label="BUY PRESALE"
                icon={ArrowRightIcon}
                hovered={true}
                onClick={handleBuyPresale}
              />
              <Button
                type="outline-secondary"
                label="WHITE PAPER"
                onClick={handleWhitepaper}
              />
            </div>

            <div className="w-full xl:hidden lg:hidden flex flex-col items-center gap-6">
              <Button
                type="primary"
                label="BUY PRESALE"
                icon={ArrowRightIcon}
                hovered={true}
                width="full"
                onClick={handleBuyPresale}
              />
              <Button
                type="outline-secondary"
                label="WHITE PAPER"
                width="full"
                onClick={handleWhitepaper}
              />
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
