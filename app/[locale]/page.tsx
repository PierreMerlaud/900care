"use client";

import MobileHeader from "./components/MobileHeader";
import { Hero } from "./components/Hero/client";
import { Planete } from "./components/Planete/client";
import { Abonnement } from "./components/Abonnement/client";
import { Produits } from "./components/Produits/client";

//Node.js 18.17
export default function Home({ params: { locale } }) {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col">
        <MobileHeader />
        <Hero lng={locale} />
        <Planete lng={locale} />
        <Abonnement lng={locale} />
        <Produits lng={locale} />
      </div>
    </main>
  );
}
