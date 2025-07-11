import BackgroundImage from "@/public/assets/pngs/roadmap_bg.png";
import Image from "next/image";
import { RoadmapCard } from "../molecules";
import { Translate } from "../common";

const Roadmap = () => {
  return (
    <section id="roadmap" className="w-full relative overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="Roadmap Background"
        className="w-full h-auto xl:flex lg:flex hidden object-cover"
      />

      <div className="absolute inset-0 xl:flex lg:flex hidden flex-col items-center justify-center">
        <div className="w-[80%] mx-auto space-y-14">
          <h1 className="text-white font-black text-7xl text-center">
            <Translate>Road Map</Translate>
          </h1>

          {/* Roadmap card group */}
          <div className="w-full grid grid-cols-3 gap-14">
            <RoadmapCard
              title="Phase-1"
              contents={[
                {
                  labels: [
                    "Create Whitepaper.",
                    "Start development.",
                    "Create landing website.",
                    "Build Token Presale Website.",
                    "Create social media accounts.",
                  ],
                },
                {
                  subtitle: "Create Token-nomics",
                  labels: [
                    "Create token smart contract.",
                    "Undergo a KYC and AUDIT.",
                    "Build the Charlie AI Chatbot.",
                  ],
                },
                {
                  subtitle: "Build Minigame",
                  labels: [
                    "Build our NFT marketplace.",
                    "Build a P2E application for telegram.",
                  ],
                },
              ]}
              className=""
            />

            <div className="col-span-2 flex flex-col items-center justify-between gap-14">
              <div className="w-full grid grid-cols-2 gap-14">
                <RoadmapCard
                  title="Phase-2"
                  contents={[
                    {
                      labels: [
                        "Start Token Presale.",
                        "Launch P2E Game on Telegram.",
                        "Actively search for partnerships and collaborations.",
                        "Build Community Engagement.",
                      ],
                    },
                  ]}
                  className="w-full"
                />
                <RoadmapCard
                  title="Phase-3"
                  contents={[
                    {
                      labels: [
                        "Implement Battles in the P2E Game",
                        "Unreal Engine 5 Game Development (PC & Mobile)",
                        "Presale Staking with JuicyAPY – ✅ Completed",
                        "Custom Burning Bot – ✅ Completed",
                        "Charlie Party App (iOS, Android & Web) – ✅ Completed",
                        "Charlie Presale Bot – ✅ Completed",
                      ],
                    },
                  ]}
                  className="w-full"
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-14">
                <RoadmapCard
                  title="Phase-4"
                  contents={[
                    {
                      labels: [
                        "Develop Charlie’s Dating Application.",
                        "Start Season two on the P2E Game.",
                        "Develop DEX.",
                        "Develop launchpad.",
                        "Develop Charlie Wallet.",
                        "Develop Charlie's own blockchain",
                        "Improvements and upgrades to our Artificial intelligence.",
                      ],
                    },
                  ]}
                  className="w-full"
                />
                <RoadmapCard
                  title="Phase-5"
                  contents={[
                    {
                      labels: [
                        "Global Central Exchange (CEX).",
                        "The First Crypto Bank.",
                      ],
                    },
                  ]}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto xl:hidden lg:hidden flex flex-col items-center gap-6">
        <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl text-center">
          <Translate>Road Map</Translate>
        </h1>

        <div className="w-full flex flex-col gap-6">
          <RoadmapCard
            title="Phase-1"
            contents={[
              {
                labels: [
                  "Create Whitepaper.",
                  "Start development.",
                  "Create landing website.",
                  "Build Token Presale Website.",
                  "Create social media accounts.",
                ],
              },
              {
                subtitle: "Create Token-nomics",
                labels: [
                  "Create token smart contract.",
                  "Undergo a KYC and AUDIT.",
                  "Build the Charlie AI Chatbot.",
                ],
              },
              {
                subtitle: "Build Minigame",
                labels: [
                  "Build our NFT marketplace.",
                  "Build a P2E application for telegram.",
                ],
              },
            ]}
            className=""
          />

          <RoadmapCard
            title="Phase-2"
            contents={[
              {
                labels: [
                  "Start Token Presale.",
                  "Launch P2E Game on Telegram.",
                  "Actively search for partnerships and collaborations.",
                  "Build Community Engagement.",
                ],
              },
            ]}
            className="w-full"
          />
          <RoadmapCard
            title="Phase-3"
            contents={[
              {
                labels: [
                  "Implement Battles in the P2E Game",
                  "Unreal Engine 5 Game Development (PC & Mobile)",
                  "Presale Staking with JuicyAPY – ✅ Completed",
                  "Custom Burning Bot – ✅ Completed",
                  "Charlie Party App (iOS, Android & Web) – ✅ Completed",
                  "Charlie Presale Bot – ✅ Completed",
                ],
              },
            ]}
            className="w-full"
          />

          <RoadmapCard
            title="Phase-4"
            contents={[
              {
                labels: [
                  "Develop Charlie’s Dating Application.",
                  "Start Season two on the P2E Game.",
                  "Develop DEX.",
                  "Develop launchpad.",
                  "Develop Charlie Wallet.",
                  "Develop Charlie's own blockchain",
                  "Improvements and upgrades to our Artificial intelligence.",
                ],
              },
            ]}
            className="w-full"
          />
          <RoadmapCard
            title="Phase-5"
            contents={[
              {
                labels: [
                  "Global Central Exchange (CEX).",
                  "The First Crypto Bank.",
                ],
              },
            ]}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
