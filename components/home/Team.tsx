import Link from "next/link";
import Image from "next/image";
import CEOImage from "@/public/assets/pngs/ceo.png";
import LineIcon from "@/public/assets/svgs/line.svg";
import LinkedinIcon from "@/public/assets/svgs/linkedin.svg";
import PolandFlagIcon from "@/public/assets/svgs/poland.svg";
import EUFlagIcon from "@/public/assets/svgs/eu.svg";

const Team = () => {
  return (
    <section className="w-full">
      <div className="w-[70%] mx-auto space-y-14">
        <h1 className="text-white font-black text-7xl">CEO</h1>
        <div className="w-full flex items-center gap-24">
          <div className="w-2/5">
            <Image src={CEOImage} alt="CEO" className="w-full h-auto" />
          </div>

          <div className="w-3/5 space-y-4">
            <h1 className="text-white font-bold text-[42px]">
              Lukasz Szymborski
            </h1>
            <div className="flex items-center gap-4">
              <Image
                src={LineIcon}
                alt="Line"
                className="w-[52px] h-auto object-cover"
              />
              <span className="text-white font-medium text-[28px]">CEO</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="">
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
