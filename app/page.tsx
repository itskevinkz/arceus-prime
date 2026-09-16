import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Path } from "@/components/Path";
import { Maximum } from "@/components/Maximum";
import { Bridging } from "@/components/Bridging";
import { Price } from "@/components/Price";
import { Terminal } from "@/components/Terminal";
import { Buy } from "@/components/Buy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Nav />
      <Hero />
      <Path />
      <Maximum />
      <Bridging />
      <Price />
      <Terminal />
      <Buy />
      <Footer />
    </main>
  );
}
