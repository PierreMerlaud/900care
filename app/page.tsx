import Image from "next/image";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Planete from "./components/Planete";
//Node.js 18.17
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col">
        <MobileHeader />
        <Hero />
        <Planete />
      </div>
    </main>
  );
}
