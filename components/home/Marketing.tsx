import BackgroundImage from "@/public/assets/pngs/marketing_bg.png";
import Image from "next/image";

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
      title: "Stake Your Charlie Tokens Once the Presale Ends!",
      description:
        "Unlock the full potential of your Charlie tokens through staking! It's a simple, effective, and rewarding process. By staking your Charlie tokens, you actively contribute to the growth of the Charlie ecosystem. Stake your 'CHRLE' tokens to earn competitive APYs in 'CHRLE,' along with an additional governance token.",
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
                  {card.title}
                </h1>
                <p className="text-[#E0E0E0] text-[20px]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden flex flex-col items-center gap-6 w-[95%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="roadmap-card w-full md:h-[300px] p-6 space-y-4"
          >
            <h1 className="text-white font-bold xl:text-[32px] lg:text-[32px] md:text-[32px] text-2xl">
              {card.title}
            </h1>
            <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketing;
