import BackgroundImage from "@/public/assets/pngs/games_bg.png";
import UnicornRacingImage from "@/public/assets/pngs/unicorn_racing.png";
import UnicornBattleImage from "@/public/assets/pngs/unicorn_battle.png";
import Slider, { ISlide } from "../common/Slider";
import Image from "next/image";
import { Translate } from "../common";

const Games = () => {
  const slides: ISlide[] = [
    {
      img: UnicornRacingImage,
      title: "Unicorn Racing World",
      description:
        "Unicorn Racing World is an innovative PC game that combines elements of breeding racing and trading in a dynamic virtual world. The game offers players the opportunity to raise, train, and race their own unicorns in an exciting multiplayer mode. It features an integrated economy based on the $CHRLE token and a marketplace for trading unicorns.$CHRLE",
    },
    {
      img: UnicornBattleImage,
      title: "Legendary Battles",
      description:
        "Unicorn Chronicles is a strategic card game that combines unique character features, dynamic combat mechanics and a Play-to-Earn (P2E) system. Players create decks of character cards, skills, and items to compete in epic battles in a world full of magic unicorns. In the game, players discover combination strategies, develop their skills and engage in thrilling encounters. $CHRLE",
    },
  ];

  return (
    <section id="games" className="w-full relative overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="Games background"
        className="w-full h-auto xl:flex lg:flex hidden"
      />

      <div className="absolute inset-0 xl:flex lg:flex hidden flex-col items-center justify-center py-14">
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-8">
          <h2 className="text-[#E0E0E0] text-2xl text-center">
            <Translate>Upcoming games</Translate>
            <br />
            <Translate>Q3 2025/Q1 2026</Translate>
            <br />
            <Translate>Your $CHRLE token as a game currency</Translate>
          </h2>
          <h1 className="text-white font-black text-7xl">
            <Translate>Games</Translate>
          </h1>
          <Slider slides={slides} />
          <p className="text-[#E0E0E0] font-semibold text-[32px]">
            <Translate>You can play now our P2E game on telegram</Translate>
          </p>
        </div>
      </div>

      <div className="xl:hidden lg:hidden flex w-[90%] mx-auto flex-col items-center justify-center gap-6">
        <h2 className="text-[#E0E0E0] md:text-xl text-lg text-center">
          <Translate>Upcoming games</Translate>
          <br />
          <Translate>Q3 2025/Q1 2026</Translate>
          <br />
          <Translate>Your $CHRLE token as a game currency</Translate>
        </h2>
        <h1 className="text-white font-black text-4xl">Games</h1>
        <Slider slides={slides} />
        <p className="text-[#E0E0E0] font-semibold md:text-xl text-lg text-center">
          <Translate>You can play now our P2E game on telegram</Translate>
        </p>
      </div>
    </section>
  );
};

export default Games;
