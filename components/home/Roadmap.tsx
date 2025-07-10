import BackgroundImage from "@/public/assets/pngs/roadmap_bg.png";
import Image from "next/image";
import { RoadmapCard } from "../molecules";

const Roadmap = () => {
  return (
    <section id="roadmap" className="w-full relative">
      <Image
        src={BackgroundImage}
        alt="Roadmap Background"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto space-y-14">
          <h1 className="text-white font-black text-7xl text-center">
            Road Map
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
                    "Build NFT Minting Website.",
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
                    "Design & craft the official 10K NFT collection.",
                  ],
                },
                {
                  subtitle: "Build Minigame",
                  labels: [
                    "Build our NFT marketplace.",
                    "Design & craft the official 10K NFT collection.",
                    "Build a P2E application for telegram and App Store.",
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
                        "Build our official Website.",
                        "Launch our NFT Collection.",
                        "Start Token Presale.",
                        "Launch P2E Game on Telegram.",
                        "Actively search for partnerships and collaborations.",
                        "Start Marketing.",
                        "Build Community Engagement.",
                        "Write and animate Charlie’s Animation Series.",
                        "Charlie Band Music Album on YT.",
                        "Develop Cross chain Bridge.",
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
                        "Develop DEX.",
                        "Develop staking and farms.",
                        "End season one on P2E Game.",
                        "Develop NFT games for PC and Mobile devices.",
                        "Develop our own blockchain.",
                        "Develop launchpad.",
                        "Start building blockchain.",
                        "Start building launchpad.",
                        "Create online store.",
                        "Improvements and upgrades to our Artificial intelligence.",
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
                        "Develop Charlie Wallet.",
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
    </section>
  );
};

export default Roadmap;
