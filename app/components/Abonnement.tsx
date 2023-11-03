import React from "react";

const Abonnement = () => {
  return (
    <div className="bg-[var(--new-palette-900-very-light-green,_#E4FFEE)] flex flex-col items-center text-center gap-6 py-10 lg:gap-10">
      <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:leading-[3.75rem] lg:text-[4rem] lg:w-2/3">
        L’abonnement 900% libre, pourquoi ?
      </h2>
      <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
        Pourquoi l'abonnement ?
      </h3>
      <div className="flex flex-col items-center gap-6 w-1/2 lg:flex-row lg:gap-12 lg:w-2/3 lg:items-start">
        <div className="w-72">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            C’est + écologique
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            Pas de surproduction ni de stock périmés, des livraisons regroupées
            et neutres en carbone.
          </p>
        </div>
        <div className="w-72">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            C’est + économique
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            Nous pouvons vous offrir le prix le plus juste en étant sûrs de nos
            revenus à long terme.
          </p>
        </div>
        <div className="w-72">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            C’est + pratique
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            Vous n’oubliez jamais qu’il fallait acheter du dentifrice. Bye bye
            la charge mentale !
          </p>
        </div>
      </div>
      <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
        Comment ça marche ?
      </h3>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-36">
        <div className="bg-[var(--new-palette-900-light-blue,_#C7E5FA)] rounded-full flex flex-col gap-2 w-72 p-12 lg:w-[22.0625rem]">
          <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:leading-[3.75rem] lg:text-[4rem]">
            #1
          </h2>
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem] lg:leading-[1.875rem]">
            Réception de votre kit d’essai
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5 lg:text-[1.25rem] lg:font-normal lg:leading-6">
            Vous permet de tester nos produits pendant 2 semaines !
          </p>
        </div>
        <div className="bg-[var(--new-palette-900-light-pink,_#FFADD5)] rounded-full flex flex-col gap-2 w-72 p-12 lg:w-[22.0625rem]">
          <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:leading-[3.75rem] lg:text-[4rem]">
            #2
          </h2>
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem] lg:leading-[1.875rem]">
            Et dans 20 jours
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5 lg:text-[1.25rem] lg:font-normal lg:leading-6">
            Vous recevez votre première livraison de recharges, directement dans
            votre boite aux lettres !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abonnement;
