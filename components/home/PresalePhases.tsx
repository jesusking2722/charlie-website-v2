import { IPresalePhaseCard } from "../molecules/PresalePhaseCard";
import { PresalePhaseCard } from "../molecules";
import { Translate } from "../common";

const PresalePhases = () => {
  const cards: IPresalePhaseCard[] = [
    {
      title: "Phase 1",
      description: "10 billion tokens sold * $0.00020/token = $2,000,000",
    },
    {
      title: "Phase 2",
      description:
        "10 billion tokens sold * $0.00024/token = $2,400,000 (20% price increase)",
    },
    {
      title: "Phase 3",
      description:
        "10 billion tokens sold * $0.00028/token = $2,880,000 (16% price increase)",
    },
    {
      title: "Phase 4",
      description:
        "10 billion tokens sold * $0.000345/token = $3,450,000 (23% price increase)",
    },
    {
      title: "Phase 5",
      description:
        "10 billion tokens sold * $0.000414/token = $4,140,000 (20% price increase)",
    },
    {
      title: "Phase 6",
      description:
        "10 billion tokens sold * $0.000496/token = $4,960,000 (10% price increase) Total of 6 phases raised : $19 830 000",
    },
  ];

  return (
    <section className="w-full -mt-24">
      <div className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto xl:space-y-14 lg:space-y-14 space-y-6">
        <h1 className="text-center text-white font-black xl:text-7xl lg:text-7xl text-4xl">
          <Translate>Presale Phases</Translate>
        </h1>

        {/* Phases card */}
        <div className="w-full grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <PresalePhaseCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresalePhases;
