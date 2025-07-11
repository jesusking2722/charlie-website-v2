import Image from "next/image";
import AirdropImage from "@/public/assets/pngs/airdrops.png";
import HeavyMarketingImage from "@/public/assets/pngs/heavy_marketing.png";
import { Radio, Translate } from "../common";

const ServiceIntro = () => {
  return (
    <section className="w-full">
      <div className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto xl:space-y-0 lg:space-y-0 space-y-14">
        {/* Airdroid & Giveaways */}
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:gap-14 lg:gap-14 gap-6 rounded-2xl bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6">
          <div className="xl:w-2/3 lg:w-2/3 w-full xl:space-y-14 lg:space-y-14 space-y-6">
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <strong className="text-primary-gradient">$500,000</strong>{" "}
              <Translate>in Airdrops and Giveaways</Translate>
            </h1>
            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              <Translate>
                We are thrilled to dedicate $500,000 to airdrops and giveaways
                as part of our mission to reward and engage our community. Over
                the next 30 months (2.5 years), expect regular airdrops and
                promotional events designed to foster excitement and
                appreciation. and appreciation.
              </Translate>
            </p>
          </div>
          <Image
            src={AirdropImage}
            alt="Airdrop & Giveaways"
            className="xl:w-1/3 lg:w-1/3 w-full h-auto object-cover"
          />
        </div>

        {/* Divider */}
        <div className="w-[80%] mx-auto xl:flex lg:flex hidden items-center justify-between">
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
          <div className="w-[42px] h-[42px] bg-[#280C3F]"></div>
        </div>

        {/* Heavy marketing */}
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:gap-14 lg:gap-14 gap-6 rounded-2xl bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6">
          <Image
            src={HeavyMarketingImage}
            alt="Heavy Marketing"
            className="w-1/3 xl:flex lg:flex hidden h-auto object-cover"
          />

          <div className="xl:w-2/3 lg:w-2/3 w-full xl:space-y-8 lg:space-y-8 space-y-6">
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
              <Translate>Heavy Marketing</Translate>
            </h1>
            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              <Translate>
                To ensure the long-term success of our project, we've allocated
                a massive $1,000,000 to marketing. Our strategy includes:
              </Translate>
            </p>

            <div className="w-full xl:space-y-6 lg:space-y-6 space-y-4">
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

          <Image
            src={HeavyMarketingImage}
            alt="Heavy Marketing"
            className="w-full xl:hidden lg:hidden flex h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
