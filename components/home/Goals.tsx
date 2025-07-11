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
      <div className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto flex xl:flex-row lg:flex-row flex-col items-center xl:justify-between lg:justify-between xl:gap-14 lg:gap-14 gap-6 bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6 rounded-2xl">
        <div className="xl:w-2/5 lg:w-2/5 w-full space-y-14">
          <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl xl:text-left lg:text-left text-center">
            Our Goals
          </h1>
          <Image
            src={GoalsImage}
            alt="Goals"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="xl:w-3/5 lg:w-3/5 w-full">
          <AccordionGroup accordions={goals} />
        </div>
      </div>
    </section>
  );
};

export default Goals;
