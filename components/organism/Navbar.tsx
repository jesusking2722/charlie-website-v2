import Image from "next/image";
import LogoImage from "@/public/assets/pngs/logo.png";
import Link from "next/link";
import { Button } from "../common";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";
import TwitterIcon from "@/public/assets/svgs/twitter.svg";
import FacebookIcon from "@/public/assets/svgs/facebook.svg";
import MenuIcon from "@/public/assets/svgs/menu.svg";

type TNavItem = {
  label: string;
  path: string;
};

const Navbar = () => {
  const navs: TNavItem[] = [
    { label: "Features", path: "features" },
    { label: "Games", path: "games" },
    { label: "Roadmap", path: "roadmap" },
    { label: "Team", path: "team" },
    { label: "Partners", path: "partners" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <header className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto flex flex-row items-center justify-between p-2">
      {/* Logo */}
      <Image
        src={LogoImage}
        alt="Charlie Unicorn AI"
        className="w-[91px] h-[100px]"
      />

      {/* Navs */}
      <nav className="xl:block lg:block hidden">
        <ul className="flex flex-row items-center gap-8">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.path}
                className="text-white text-2xl font-semibold"
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Buttons */}
      <div className="xl:flex lg:flex hidden items-center gap-4">
        <Button type="icon" icon={TelegramIcon} />
        <Button type="icon" icon={TwitterIcon} />
        <Button type="icon" icon={FacebookIcon} />
      </div>

      <div className="xl:hidden lg:hidden flex items-center justify-center">
        <button className="cursor-pointer">
          <Image src={MenuIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
