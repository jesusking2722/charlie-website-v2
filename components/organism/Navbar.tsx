import Image from "next/image";
import LogoImage from "@/public/assets/pngs/logo.png";

const Navbar = () => {
  return (
    <header className="w-[80%] mx-auto flex flex-row items-center justify-between">
      {/* Logo */}
      <Image
        src={LogoImage}
        alt="Charlie Unicorn AI"
        className="w-[91px] h-[100px]"
      />
    </header>
  );
};

export default Navbar;
