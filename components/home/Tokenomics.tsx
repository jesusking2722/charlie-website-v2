import Image from "next/image";
import MainChatImage from "@/public/assets/pngs/main_chart.png";
import LegendNodeStakingIcon from "@/public/assets/svgs/legend_node_staking.svg";
import LegendNodeTeamIcon from "@/public/assets/svgs/legent_node_team.svg";
import LegendNodeReverseIcon from "@/public/assets/svgs/legend_node_reverse.svg";
import LegendNodeLiquidityIcon from "@/public/assets/svgs/legend_node_liquidity.svg";
import LegendNodePresaleIcon from "@/public/assets/svgs/legend_node_presale.svg";

const Tokenomics = () => {
  return (
    <section className="w-full -mt-24">
      <div className="w-[80%] mx-auto flex items-center justify-center gap-14">
        <div className="w-1/3 flex flex-col items-center gap-8">
          <h1 className="text-white font-black text-7xl">Tokenomics</h1>
          <div
            className="w-full h-[190px] relative  bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)] rounded-xl"
          >
            <div className="absolute inset-[1px] bg-[#220937] rounded-xl flex flex-col items-center justify-center gap-6">
              <h2 className="text-[#E0E0E0] font-bold text-4xl">Token</h2>
              <span className="text-primary-gradient font-bold text-6xl">
                100 Billion
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-center gap-6">
          <Image
            src={MainChatImage}
            alt="Main Chart"
            className="w-[420px] h-auto object-cover"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeStakingIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold text-[20px]">
                Staking & Airdrops 15%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeTeamIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold text-[20px]">
                Team 5%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeReverseIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold text-[20px]">
                Strategic Reserve 5%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodeLiquidityIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold text-[20px]">
                Liquidity 15%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LegendNodePresaleIcon}
                alt="Legend Node Staking"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold text-[20px]">
                Presale 60%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
