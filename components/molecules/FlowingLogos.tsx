import LogoImage from "@/public/assets/pngs/logo.png";
import Image from "next/image";

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
            className="relative flex items-center justify-center px-20 h-[74px] border-primary-gradient"
          >
            {/* Text stays in one line and uses gradient */}
            <span className="text-primary-gradient text-[28px] font-semibold whitespace-nowrap">
              {label.toUpperCase()}
            </span>

            {/* Logo positioned top and slightly outside left edge */}
            <Image
              src={LogoImage}
              alt="Logo"
              className="absolute w-[91px] h-[100px] object-cover -left-6 -top-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowingLogos;
