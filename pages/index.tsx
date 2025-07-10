import { Container } from "@/components/common";
import { SafetyBanner } from "@/components/molecules";
import { Inter } from "next/font/google";
import {
  About,
  Features,
  Hero,
  Games,
  P2ERevolution,
  ServiceIntro,
  Roadmap,
  Tokenomics,
  PresalePhases,
  Developments,
  Marketing,
  Goals,
  Questions,
  Team,
} from "@/components/home";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={inter.variable}>
      <Container>
        <main className="w-full relative space-y-32">
          <SafetyBanner />
          <Hero />
          <About />
          <Features />
          <Games />
          <P2ERevolution />
          <ServiceIntro />
          <Roadmap />
          <Tokenomics />
          <PresalePhases />
          <Developments />
          <Marketing />
          <Goals />
          <Questions />
          <Team />
        </main>
      </Container>
    </div>
  );
}
