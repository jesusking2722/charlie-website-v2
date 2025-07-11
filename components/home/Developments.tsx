import { Button, Translate } from "../common";

const Developments = () => {
  const completedDevelopments = [
    { title: "Website", path: "https://charlieunicornai.eu" },
    {
      title: "NFT marketplace",
      path: "https://charlieunicornaimarketplace.eu",
    },
    {
      title: "Party app AppStore",
      path: "https://apps.apple.com/pl/app/charlie-party/id6746444288",
    },
    { title: "Charlie party website", path: "https://charlieparty.eu" },
    { title: "P2E TG", path: "https://t.me/CharliegameBot" },
    { title: "Chat bot", path: "https://t.me/CharlieUnicornaiOfficial" },
    {
      title: "Free image generator",
      path: "https://t.me/CharlieUnicornaiOfficial",
    },
  ];

  const ongoingDevelopments: string[] = [
    "P2E Game On PC",
    "DEX",
    "AI Video generator",
    "Launchpad",
    "Freelancing Job board",
    "Multichain",
  ];

  const handleDevelopment = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <section className="w-full">
      <div className="xl:w-[80%] lg:w-[80%] w-[90%] mx-auto space-y-28">
        {/* Completed developments */}
        <div className="w-full xl:space-y-14 lg:space-y-14 space-y-6">
          <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl text-center">
            <Translate>Completed Developments</Translate>
          </h1>

          <div className="w-full grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-6">
            {completedDevelopments.map((dev, index) => (
              <Button
                key={index}
                type="outline-primary"
                label={dev.title}
                onClick={() => handleDevelopment(dev.path)}
              />
            ))}
          </div>
        </div>

        {/* Ongoing developments */}
        {/* <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center gap-6">
          <div className="xl:w-2/5 lg:w-2/5 w-full">
            <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl xl:text-left lg:text-left text-center">
              <Translate>Ongoing Developments</Translate>
            </h1>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 w-full grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6">
            {ongoingDevelopments.map((dev, index) => (
              <div
                key={index}
                className="relative w-full h-[68px] bg-gradient-to-r from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)] rounded-xl"
              >
                <div className="absolute inset-[1px] bg-[rgba(40,12,63,0.8)] rounded-xl flex items-center justify-center">
                  <span className="text-[#E0E0E0] font-semibold text-[28px]">
                    <Translate>{dev}</Translate>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Developments;
