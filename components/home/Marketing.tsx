import BackgroundImage from "@/public/assets/pngs/marketing_bg.png";
import Image from "next/image";
import { Translate } from "../common";

type TCard = {
  title: string;
  description: string;
};

const Marketing = () => {
  const cards: TCard[] = [
    {
      title: "Charlie AI",
      description:
        "Engage directly with Charlie himself through our cutting-edge Artificial Intelligence chatbot. Crafted to embody the essence of Charlie, our chatbot delivers a delightful blend of practical assistance and uproarious humor.",
    },
    {
      title: "Claim and Stake Your Charlie Tokens during the Presale!",
      description:
        "Unlock the full potential of your Charlie tokens through staking! It's a simple, effective, and rewarding process. Claim your $CHRLE tokens right after your purchase! Stake them for juicy APY and extra gains. Add to your wallet: 0xb9c337151178cf0ec9a6b13a121c661065a80f36. Let’s grow together!",
    },
    {
      title: "Charlie Blockchain",
      description:
        "We are developing our own blockchain that will be ultra fast,ecological and economical more information soon.",
    },
    {
      title: "Utility and Partnerships",
      description:
        "We are exploring partnerships and collaborations with other projects and influencers. Our goal is to unite the entire cryptocurrency community and we’re excited to create unique collaborations that drive mutual growth and innovation.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="Marketing Background"
        className="w-full h-auto object-cover xl:flex lg:flex hidden"
      />

      <div className="absolute inset-0 xl:flex lg:flex hidden flex-col items-center justify-center">
        <div className="w-[80%] mx-auto">
          <div className="w-full grid grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="roadmap-card w-full h-[320px] p-6">
                <h1 className="text-white font-bold text-[32px]">
                  <Translate>{card.title}</Translate>
                </h1>
                <p className="text-[#E0E0E0] text-[20px]">
                  <Translate>{card.description}</Translate>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden flex flex-col items-center gap-6 w-[90%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="roadmap-card w-full md:h-[300px] p-6 space-y-4"
          >
            <h1 className="text-white font-bold xl:text-[32px] lg:text-[32px] md:text-[32px] text-2xl">
              <Translate>{card.title}</Translate>
            </h1>
            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              <Translate>{card.description}</Translate>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketing;
