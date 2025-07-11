import Image, { StaticImageData } from "next/image";
import Translate from "./Translate";
import Link from "next/link";
import AppStoreImage from "@/public/assets/svgs/app_store.svg";
import GooglePlayImage from "@/public/assets/svgs/google_play.svg";

export interface ICard {
  icon: StaticImageData;
  title: string;
  description: string;
  className?: string;
  innerClassName?: string;
  gap?: string;
  opacity?: number;
  path?: string;
}

const Card: React.FC<ICard> = ({
  icon,
  title,
  description,
  className,
  innerClassName,
  gap,
  opacity,
  path,
}) => {
  const bgOpacityClass = opacity
    ? `bg-[rgba(40,12,63,${opacity})]`
    : "bg-[rgba(40,12,63,0.4)]";

  const handleGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.charlieunicornai.charlieparty",
      "_blank"
    );
  };

  const handleAppStore = () => {
    window.open(
      "https://apps.apple.com/pl/app/charlie-party/id6746444288",
      "_blank"
    );
  };

  return (
    <div className={className}>
      {path ? (
        <Link href={path}>
          <div
            className={`relative
    bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)]
    rounded-lg xl:w-[432px] lg:w-[432px] w-full xl:h-[360px] lg:h-[360px] h-[300px] ${innerClassName} overflow-hidden`}
          >
            <div
              className={`absolute inset-[1px] ${bgOpacityClass} rounded-lg`}
            >
              <div
                className={`w-full flex flex-col items-start ${
                  gap ? gap : "gap-4"
                } xl:p-6 lg:p-6 md:p-6 p-4 overflow-hidden`}
              >
                <Image src={icon} alt={title} className="w-[104px] h-[104px]" />

                <h1 className="text-white font-bold xl:text-[32px] lg:text-[32px] md:text-[32px] text-2xl">
                  <Translate>{title}</Translate>
                </h1>

                <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                  <Translate>{description}</Translate>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={`relative
    bg-gradient-to-r
    from-[rgba(196,39,224,0.2)]
    via-[rgba(132,74,255,0.2)]
    to-[rgba(18,169,255,0.2)]
    rounded-lg xl:w-[432px] lg:w-[432px] w-full xl:h-[360px] lg:h-[360px] h-[300px] ${innerClassName} overflow-hidden`}
        >
          <div className={`absolute inset-[1px] ${bgOpacityClass} rounded-lg`}>
            <div
              className={`w-full flex flex-col items-start ${
                gap ? gap : "gap-4"
              } xl:p-6 lg:p-6 md:p-6 p-4 overflow-hidden`}
            >
              <div className="w-full flex items-center justify-between">
                <Image src={icon} alt={title} className="w-[104px] h-[104px]" />
                {title.includes("App Store") && (
                  <button
                    className="cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={handleAppStore}
                  >
                    <Image
                      src={AppStoreImage}
                      alt="App store"
                      className="w-[120px] h-auto object-cover"
                    />
                  </button>
                )}

                {title.includes("Google Play") && (
                  <button
                    className="cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={handleGooglePlay}
                  >
                    <Image
                      src={GooglePlayImage}
                      alt="Google play"
                      className="w-[120px] h-auto object-cover"
                    />
                  </button>
                )}
              </div>

              <h1 className="text-white font-bold xl:text-[32px] lg:text-[32px] md:text-[32px] text-2xl">
                <Translate>{title}</Translate>
              </h1>

              <p className="text-[#E0E0E0] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                <Translate>{description}</Translate>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
