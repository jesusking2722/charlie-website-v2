import GoalsImage from "@/public/assets/pngs/goals.png";
import Image from "next/image";
import { IAccordion } from "../common/Accordion";
import { AccordionGroup } from "../molecules";

const Goals = () => {
  const goals: IAccordion[] = [
    {
      title: "Primary Goal",
      description:
        "Our primary goal is to create a unique ecosystem that will stand the test of time and safely take our community on an adventure to the moon! All without stealing your organs!",
    },
    {
      title: "Blockchain Goal",
      description:
        "Our primary goal is to create a unique ecosystem that will stand the test of time and safely take our community on an adventure to the moon! All without stealing your organs!",
    },
    {
      title: "CEX Goal",
      description:
        "Our primary goal is to create a unique ecosystem that will stand the test of time and safely take our community on an adventure to the moon! All without stealing your organs!",
    },
    {
      title: "Fundraising Goal",
      description:
        "Our primary goal is to create a unique ecosystem that will stand the test of time and safely take our community on an adventure to the moon! All without stealing your organs!",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto flex items-center justify-between gap-14 bg-[#280C3F] p-10 rounded-2xl">
        <div className="w-2/5 space-y-14">
          <h1 className="text-white font-black text-7xl">Our Goals</h1>
          <Image
            src={GoalsImage}
            alt="Goals"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-3/5">
          <AccordionGroup accordions={goals} />
        </div>
      </div>
    </section>
  );
};

export default Goals;
