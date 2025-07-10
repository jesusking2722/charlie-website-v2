import Image from "next/image";
import AirdropImage from "@/public/assets/pngs/airdrops.png";
import HeavyMarketingImage from "@/public/assets/pngs/heavy_marketing.png";
import { Radio } from "../common";

const ServiceIntro = () => {
  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto">
        {/* Airdroid & Giveaways */}
        <div className="w-full flex items-center gap-14 rounded-2xl bg-[#280C3F] p-10">
          <div className="w-2/3 space-y-14">
            <h1 className="text-white font-black text-7xl">
              <strong className="text-primary-gradient">$500,000</strong> in
              Airdrops and Giveaways
            </h1>
            <p className="text-[#D9D9D9] text-[20px]">
              We are thrilled to dedicate $500,000 to airdrops and giveaways as
              part of our mission to reward and engage our community. Over the
              next 30 months (2.5 years), expect regular airdrops and
              promotional events designed to foster excitement and appreciation.
              and appreciation.
            </p>
          </div>
          <Image
            src={AirdropImage}
            alt="Airdrop & Giveaways"
            className="w-1/3 h-auto object-cover"
          />
        </div>
        <div className="w-[80%] mx-auto flex items-center justify-between">
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
        </div>
        <div className="w-full flex items-center gap-14 rounded-2xl bg-[#280C3F] p-10">
          <Image
            src={HeavyMarketingImage}
            alt="Heavy Marketing"
            className="w-1/3 h-auto object-cover"
          />

          <div className="w-2/3 space-y-8">
            <h1 className="text-white font-black text-7xl">Heavy Marketing</h1>
            <p className="text-[#D9D9D9] text-[20px]">
              To ensure the long-term success of our project, we've allocated a
              massive $1,000,000 to marketing. Our strategy includes:
            </p>

            <div className="w-full space-y-6">
              <Radio
                name=""
                label="Influencer partnerships to boost visibility."
                checked={true}
                value={null}
                disabled={true}
              />
              <Radio
                name=""
                label="Social media campaigns on Twitter, YouTube, TikTok."
                checked={true}
                value={null}
                disabled={true}
              />
              <Radio
                name=""
                label="Strategic ads on CoinSniper, CoinCodex and much more."
                checked={true}
                value={null}
                disabled={true}
              />
              <Radio
                name=""
                label=" Collaborations with other crypto and NFT projects."
                checked={true}
                value={null}
                disabled={true}
              />
              <Radio
                name=""
                label="Weekly NFT drops to drive community engagement."
                checked={true}
                value={null}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
