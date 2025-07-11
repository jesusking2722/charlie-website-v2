import Image from "next/image";
import LogoImage from "@/public/assets/pngs/logo.png";
import Link from "next/link";
import { Button, Translate } from "../common";
import TelegramIcon from "@/public/assets/svgs/telegram-plane.svg";
import TwitterIcon from "@/public/assets/svgs/twitter.svg";
import FacebookIcon from "@/public/assets/svgs/facebook.svg";
import MenuIcon from "@/public/assets/svgs/menu.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LanguageDropdown, MobileLangaugeDropdown } from "../molecules";

type TNavItem = {
  label: string;
  path: string;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

  const navs: TNavItem[] = [
    { label: "Features", path: "features" },
    { label: "Games", path: "games" },
    { label: "Roadmap", path: "roadmap" },
    { label: "Team", path: "team" },
    { label: "Partners", path: "partners" },
    { label: "Contact", path: "contact" },
  ];

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <header className="xl:w-[80%] lg:w-[80%] w-[95%] mx-auto flex flex-row items-center justify-between p-2 relative z-40">
      {/* Logo */}
      <Image
        src={LogoImage}
        alt="Charlie Unicorn AI"
        className="w-[91px] h-[100px]"
      />

      {/* Desktop Navigation */}
      <nav className="xl:block lg:block hidden">
        <ul className="flex flex-row items-center gap-8">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                href={`#${nav.path}`}
                className="text-white text-2xl font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#c427e0] hover:via-[#844aff] hover:to-[#12a9ff] hover:bg-clip-text hover:text-transparent"
              >
                <Translate>{nav.label}</Translate>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Social Buttons */}
      <div className="xl:flex lg:flex hidden items-center gap-6">
        <div className="flex items-center gap-4">
          <Button type="icon" icon={TelegramIcon} onClick={handleTelegram} />
          <Button type="icon" icon={TwitterIcon} onClick={handleTwitter} />
          <Button type="icon" icon={FacebookIcon} onClick={handleFacebook} />
        </div>

        <LanguageDropdown />
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden lg:hidden flex items-center justify-center">
        <motion.button
          className="cursor-pointer z-50 relative"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={MenuIcon} alt="Menu" className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-0 right-0 w-80 min-h-screen bg-[#1A062A] z-50 shadow-2xl"
              variants={menuVariants as any}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 space-y-8">
                {/* Close Button and Logo */}
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      src={LogoImage}
                      alt="Charlie Unicorn AI"
                      className="w-[60px] h-auto object-cover"
                    />
                  </motion.div>

                  <motion.button
                    className="text-white text-3xl font-light hover:text-red-400 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    ×
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-6 mt-12">
                  {navs.map((nav, index) => (
                    <motion.li
                      key={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      <Link
                        href={`#${nav.path}`}
                        className="block text-white text-2xl font-semibold hover:text-blue-300 transition-colors duration-200 border-b border-white/20 pb-3"
                        onClick={() => setOpen(false)}
                      >
                        <Translate>{nav.label}</Translate>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6 mt-12">
                  {[TelegramIcon, TwitterIcon, FacebookIcon].map(
                    (Icon, index) => (
                      <motion.div
                        key={index}
                        variants={socialIconVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                      >
                        <Button
                          type="icon"
                          icon={Icon}
                          onClick={
                            index === 0
                              ? handleTelegram
                              : index === 1
                              ? handleTwitter
                              : handleFacebook
                          }
                        />
                      </motion.div>
                    )
                  )}
                </div>

                <div className="w-full">
                  <MobileLangaugeDropdown />
                </div>

                {/* Footer Text */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-lg font-semibold text-primary-gradient">
                    Charlie Unicorn AI
                  </span>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
