import GoalsImage from "@/public/assets/pngs/goals.png";
import Image from "next/image";
import { IAccordion } from "../common/Accordion";
import { AccordionGroup } from "../molecules";
import { Translate } from "../common";

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
        "The primary goal of our blockchain technology is to provide a decentralized, secure, transparent, and immutable platform for recording transactions or data across a distributed network.",
      content: [
        "Decentralization: Eliminate the need for intermediaries (e.g., banks, brokers) by enabling peer-to-peer transactions and processes",
        "Transparency: Provide an open, verifiable, and tamper-proof ledger that all participants can access and audit.",
        "Security: Use cryptographic techniques to secure data and transactions, making it resistant to fraud, hacking, and unauthorized modifications.",
        "Immutability: Ensure that once a transaction is recorded, it cannot be altered or deleted, providing a reliable record of historical events.",
        "Efficiency: Streamline processes by automating transactions through smart contracts, reducing time, costs, and errors associated with traditional systems.",
        "Inclusivity: Enable broader access to financial systems and services, especially for underbanked and unbanked populations.",
      ],
    },
    {
      title: "CEX Goal",
      description:
        "Focused on elite CEX listings! While our strategy emphasizes broad blockchain and DEX integration, we're primed for top-tier CEX placements. Expect nothing less than major tier 1 and tier 2 exchange listings from us!",
    },
    {
      title: "Fundraising Goal",
      description:
        "Our fundraising target is $19,830,000. This amount empowers us to meticulously execute our vision, ensuring optimal outcomes for both our project and community. Detailed fundraising distribution and tokenomics are outlined below.",
    },
  ];

  return (
    <section className="w-full">
      <div className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto flex xl:flex-row lg:flex-row flex-col items-center xl:justify-between lg:justify-between xl:gap-14 lg:gap-14 gap-6 bg-[#280C3F] xl:p-10 lg:p-10 md:p-10 p-6 rounded-2xl">
        <div className="xl:w-2/5 lg:w-2/5 w-full space-y-14">
          <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl xl:text-left lg:text-left text-center">
            <Translate>Our Goals</Translate>
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
