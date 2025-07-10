import Image, { StaticImageData } from "next/image";

export interface ICard {
  icon: StaticImageData;
  title: string;
  description: string;
  className?: string;
  innerClassName?: string;
  gap?: string;
  opacity?: number;
}

const Card: React.FC<ICard> = ({
  icon,
  title,
  description,
  className,
  innerClassName,
  gap,
  opacity,
}) => {
  const bgOpacityClass = opacity
    ? `bg-[rgba(40,12,63,${opacity})]`
    : "bg-[rgba(40,12,63,0.4)]";

  return (
    <div className={className}>
      <div
        className={`relative
    bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)]
    rounded-lg w-[432px] h-[360px] ${innerClassName} overflow-hidden`}
      >
        <div className={`absolute inset-[1px] ${bgOpacityClass} rounded-lg`}>
          <div
            className={`w-full flex flex-col items-start ${
              gap ? gap : "gap-4"
            } p-6`}
          >
            <Image src={icon} alt={title} className="w-[104px] h-[104px]" />

            <h1 className="text-white font-bold text-[32px]">{title}</h1>

            <p className="text-[#D9D9D9] text-[20px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
