import { Radio, Translate } from "../common";

type TRoadmapContent = {
  subtitle?: string;
  labels: string[];
};

interface RoadmapCardProps {
  title: string;
  contents: TRoadmapContent[];
  className?: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  title,
  contents,
  className,
}) => {
  return (
    <div
      className={`roadmap-card relative bg-opacity-20 space-y-6 p-6 ${className}`}
    >
      <h1 className="text-white font-bold xl:text-4xl lg::text-4xl md:text-4xl text-2xl">
        <Translate>{title}</Translate>
      </h1>

      {contents.map((content, index) => (
        <div key={index} className="w-full space-y-6">
          {content.subtitle && (
            <h2 className="text-white font-semibold xl:text-2xl lg:text-2xl md:text-2xl text-[20px]">
              <Translate>{content.subtitle}</Translate>
            </h2>
          )}
          <div className="w-full space-y-4">
            {content.labels.map((label, index) => (
              <Radio
                key={index}
                name=""
                label={label}
                checked={true}
                disabled={false}
                value={null}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapCard;
