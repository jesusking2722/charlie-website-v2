import LogoImage from "@/public/assets/pngs/logo.png";
import Image from "next/image";
import { Translate } from "../common";

interface FlowingLogosProps {
  labels: string[];
}

const FlowingLogos: React.FC<FlowingLogosProps> = ({ labels }) => {
  return (
    <div className="w-full overflow-x-hidden py-4">
      <div className="flex animate-marquee gap-14">
        {labels.map((label, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center px-20 xl:h-[74px] lg:h-[74px] md:h-[74px] h-[51px] border-primary-gradient"
          >
            {/* Text stays in one line and uses gradient */}
            <span className="text-primary-gradient xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-semibold whitespace-nowrap">
              <Translate>{label.toUpperCase()}</Translate>
            </span>

            {/* Logo positioned top and slightly outside left edge */}
            <Image
              src={LogoImage}
              alt="Logo"
              className="absolute xl:w-[91px] xl:h-[100px] lg:w-[91px] lg:h-[100px] md:w-[91px] md:h-[100px] w-[64px] h-[70px] object-cover xl:-left-6 xl:-top-4 lg:-left-6 lg:-top-4 md:-left-6 md:-top-4 -left-6 -top-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowingLogos;
