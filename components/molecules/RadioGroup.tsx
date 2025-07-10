import Radio, { IRadio } from "../common/Radio";

interface RadioGroupProps {
  radios: IRadio[];
  activedIndex: number;
  onSelect: (index: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  radios,
  activedIndex,
  onSelect,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {radios.map((radio, index) => (
        <Radio
          key={index}
          {...radio}
          checked={index === activedIndex}
          onChange={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
