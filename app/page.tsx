import Image from "next/image";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Planete from "./components/Planete";
import Abonnement from "./components/Abonnement";
import Produits from "./components/Produits";
//Node.js 18.17
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col">
        <MobileHeader />
        <Hero />
        <Planete />
        <Abonnement />
        <Produits />
      </div>
    </main>
  );
}
