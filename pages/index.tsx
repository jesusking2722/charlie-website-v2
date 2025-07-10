import { Container } from "@/components/common";
import { SafetyBanner } from "@/components/molecules";
import { Inter } from "next/font/google";
import { Hero } from "@/components/home";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={inter.variable}>
      <Container>
        <main className="w-full relative">
          <SafetyBanner />
          <Hero />
        </main>
      </Container>
    </div>
  );
}
