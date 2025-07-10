import { Button } from "../common";

const Developments = () => {
  const completedDevelopments: string[] = [
    "Website",
    "NFT marketplace",
    "Staking",
    "Party app AppStore",
    "Presale",
    "Charlie party website",
    "P2E TG",
    "Chat bot",
    "Free image generator",
  ];

  const ongoingDevelopments: string[] = [
    "P2E Game On PC",
    "DEX",
    "AI Video generator",
    "Launchpad",
    "Freelancing Job board",
    "Multichain",
  ];

  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto space-y-28">
        {/* Completed developments */}
        <div className="w-full space-y-14">
          <h1 className="text-white font-black text-7xl text-center">
            Completed Developments
          </h1>

          <div className="w-full grid grid-cols-3 gap-6">
            {completedDevelopments.map((dev, index) => (
              <Button key={index} type="outline-primary" label={dev} />
            ))}
          </div>
        </div>

        {/* Ongoing developments */}
        <div className="w-full flex items-center gap-6">
          <div className="w-2/5">
            <h1 className="text-white font-black text-7xl">
              Ongoing Developments
            </h1>
          </div>
          <div className="w-3/5 grid grid-cols-2 gap-6">
            {ongoingDevelopments.map((dev, index) => (
              <div
                key={index}
                className="relative w-full h-[68px] bg-gradient-to-r from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)] rounded-xl"
              >
                <div className="absolute inset-[1px] bg-[rgba(40,12,63,0.8)] rounded-xl flex items-center justify-center">
                  <span className="text-[#E0E0E0] font-semibold text-[28px]">
                    {dev}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developments;
