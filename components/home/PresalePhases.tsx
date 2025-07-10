import { IPresalePhaseCard } from "../molecules/PresalePhaseCard";
import { PresalePhaseCard } from "../molecules";

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
      <div className="w-[80%] mx-auto space-y-14">
        <h1 className="text-center text-white font-black text-7xl">
          Presale Phases
        </h1>

        {/* Phases card */}
        <div className="w-full grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <PresalePhaseCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresalePhases;
