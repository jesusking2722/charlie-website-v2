import Link from "next/link";
import Image from "next/image";
import CEOImage from "@/public/assets/pngs/ceo.png";
import LineIcon from "@/public/assets/svgs/line.svg";
import LinkedinIcon from "@/public/assets/svgs/linkedin.svg";
import PolandFlagIcon from "@/public/assets/svgs/poland.svg";
import EUFlagIcon from "@/public/assets/svgs/eu.svg";
import { Translate } from "../common";

const Team = () => {
  return (
    <section id="team" className="w-full">
      <div className="xl:w-[70%] lg:w-[70%] w-[95%] mx-auto xl:space-y-14 lg:space-y-14 space-y-6">
        <h1 className="text-white font-black xl:text-7xl lg:text-7xl text-4xl">
          <Translate>CEO</Translate>
        </h1>
        <div className="w-full flex xl:flex-row lg:flex-row flex-col items-center xl:gap-24 lg:gap-24 gap-6">
          <div className="xl:w-2/5 lg:w-2/5 w-full">
            <Image src={CEOImage} alt="CEO" className="w-full h-auto" />
          </div>

          <div className="xl:w-3/5 lg:w-3/5 w-full space-y-4">
            <h1 className="text-white font-bold xl:text-[42px] lg:text-[42px] text-[28px]">
              <Translate>Lukasz Szymborski</Translate>
            </h1>
            <div className="flex items-center gap-4">
              <Image
                src={LineIcon}
                alt="Line"
                className="w-[52px] h-auto object-cover"
              />
              <span className="text-white font-medium xl:text-[28px] lg:text-[28px] text-[20px]">
                <Translate>CEO</Translate>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://pl.linkedin.com/in/%C5%82ukasz-szymborski-8bab38205?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile">
                <Image
                  src={LinkedinIcon}
                  alt="Linkedin"
                  className="w-9 h-auto"
                />
              </Link>
              <Image
                src={PolandFlagIcon}
                alt="Poland"
                className="w-[50px] h-auto"
              />
              <Image src={EUFlagIcon} alt="EU" className="w-[50px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
