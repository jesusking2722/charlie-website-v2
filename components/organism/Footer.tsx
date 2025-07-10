import LogoImage from "@/public/assets/pngs/logo.png";
import Image from "next/image";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";
import TwitterIcon from "@/public/assets/svgs/twitter.svg";
import FacebookIcon from "@/public/assets/svgs/facebook.svg";
import { Button } from "../common";

const Footer = () => {
  return (
    <footer className="w-full bg-[#12051D] py-6 flex flex-col items-center justify-center">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <span className="text-[#F5F5F5] text-lg font-light">
          ©Copyright {new Date().getFullYear()} | All rights reserved
        </span>
        <Image
          src={LogoImage}
          alt="Logo"
          className="w-[80px] h-auto object-cover"
        />
        <div className="flex items-center gap-4">
          <Button type="icon" icon={TelegramIcon} />
          <Button type="icon" icon={TwitterIcon} />
          <Button type="icon" icon={FacebookIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
