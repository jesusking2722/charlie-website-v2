import Image from "next/image";
import MainChatImage from "@/public/assets/pngs/main_chart.png";
import MobileMainChatImage from "@/public/assets/svgs/mobile_main_chart.svg";

import LegendNodeStakingIcon from "@/public/assets/svgs/legend_node_staking.svg";
import LegendNodeTeamIcon from "@/public/assets/svgs/legent_node_team.svg";
import LegendNodeReverseIcon from "@/public/assets/svgs/legend_node_reverse.svg";
import LegendNodeLiquidityIcon from "@/public/assets/svgs/legend_node_liquidity.svg";
import LegendNodePresaleIcon from "@/public/assets/svgs/legend_node_presale.svg";
import { Translate } from "../common";

const Tokenomics = () => {
  return (
    <section className="w-full -mt-24">
      <div className="xl:w-[80%] lg:w-[80%] w-[90%] mx-auto flex xl:flex-row lg:flex-row flex-col items-center justify-center xl:gap-14 lg:gap-14 gap-0">
        <div className="xl:w-1/3 lg:w-1/3 w-full flex flex-col items-center gap-8">
          <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
            <Translate>Tokenomics</Translate>
          </h1>
          <div
            className="w-full h-[190px] relative  bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)] rounded-xl"
          >
            <div className="absolute inset-[1px] bg-[#220937] rounded-xl flex flex-col items-center justify-center gap-6">
              <h2 className="text-[#E0E0E0] font-bold xl:text-4xl lg:text-4xl text-2xl">
                <Translate>Token</Translate>
              </h2>
              <span className="text-primary-gradient font-bold xl:text-6xl lg:text-6xl text-[32px]">
                <Translate>100 Billion</Translate>
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-center gap-6">
          <Image
            src={MainChatImage}
            alt="Main Chart"
            className="w-[420px] h-auto object-cover xl:flex lg:flex hidden"
          />

          <Image
            src={MobileMainChatImage}
            alt="Main Chart"
            className="w-[264px] h-auto object-cover xl:hidden lg:hidden flex"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeStakingIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px]">
                <Translate>Staking & Airdrops 15%</Translate>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeTeamIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px]">
                <Translate>Team 5%</Translate>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeReverseIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px]">
                <Translate>Strategic Reserve 5%</Translate>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeLiquidityIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px]">
                <Translate>Liquidity 15%</Translate>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodePresaleIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px]">
                <Translate>Presale 60%</Translate>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
