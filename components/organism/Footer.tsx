import LogoImage from "@/public/assets/pngs/logo.png";
import Image from "next/image";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";
import TwitterIcon from "@/public/assets/svgs/twitter.svg";
import FacebookIcon from "@/public/assets/svgs/facebook.svg";
import { Button } from "../common";

const Footer = () => {
  const handleTelegram = () => {
    window.open("https://t.me/CharlieUnicornaiOfficial", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://x.com/CHRLEunicornAI", "_blank");
  };

  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61572583794294",
      "_blank"
    );
  };

  return (
    <footer className="w-full bg-[#12051D] py-6 flex flex-col items-center justify-center">
      <div className="w-[80%] mx-auto xl:flex lg:flex hidden items-center justify-between">
        <span className="text-[#F5F5F5] text-lg font-light">
          ©Copyright {new Date().getFullYear()} | All rights reserved
        </span>
        <Image
          src={LogoImage}
          alt="Logo"
          className="w-[80px] h-auto object-cover"
        />
        <div className="flex items-center gap-4">
          <Button type="icon" icon={TelegramIcon} onClick={handleTelegram} />
          <Button type="icon" icon={TwitterIcon} onClick={handleTwitter} />
          <Button type="icon" icon={FacebookIcon} onClick={handleFacebook} />
        </div>
      </div>

      <div className="w-full mx-auto xl:hidden lg:hidden flex flex-col items-center justify-center gap-4">
        <Image
          src={LogoImage}
          alt="Logo"
          className="w-[80px] h-auto object-cover"
        />

        <div className="flex items-center gap-2">
          <Button type="icon" icon={TelegramIcon} onClick={handleTelegram} />
          <Button type="icon" icon={TwitterIcon} onClick={handleTwitter} />
          <Button type="icon" icon={FacebookIcon} onClick={handleFacebook} />
        </div>

        <span className="text-[#F5F5F5] text-lg font-light">
          ©Copyright {new Date().getFullYear()} | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
