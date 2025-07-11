export interface IPresalePhaseCard {
  title: string;
  description: string;
}

const PresalePhaseCard: React.FC<IPresalePhaseCard> = ({
  title,
  description,
}) => {
  return (
    <div
      className="w-full relative bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)] xl:h-[196px] lg:h-[196px] md:h-[160px] h-[172px] rounded-xl"
    >
      <div className="absolute inset-[1px] bg-[rgba(40,12,63,0.8)] p-6 space-y-6 rounded-xl">
        <h1 className="text-white font-bold xl:text-[32px] lg:text-[32px] md:text-[32px] text-2xl">
          {title}
        </h1>
        <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PresalePhaseCard;
