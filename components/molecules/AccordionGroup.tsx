import { useState } from "react";
import Accordion, { IAccordion } from "../common/Accordion";

interface AccordionGroupProps {
  accordions: IAccordion[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ accordions }) => {
  const [activedIndex, setActivedIndex] = useState(0);

  return (
    <div className="w-full space-y-6">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          {...accordion}
          checked={index === activedIndex}
          onSelect={() => setActivedIndex(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
