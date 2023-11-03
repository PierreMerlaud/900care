import React from "react";
import Image from "next/image";
import HeroImage from "../../public/assets/images/HeroImage.png";

const Hero = () => {
  return (
    <div className="mx-10 flex flex-col lg:flex lg:flex-row lg:m-0 lg:w-full">
      <div className="pb-4 order-2 lg:max-w-[50%] lg:pb-0">
        <Image src={HeroImage} alt="Hero" className="" />
      </div>
      <div className="flex flex-col gap-4 order-1 lg:order-2 lg:max-w-[50%] lg:py-10 lg:px-20 lg:gap-8">
        <h1 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:text-[4rem]">
          Bienvenue chez 900.care !
        </h1>
        <p className="text-[0.9rem] not-italic font-normal leading-6 lg:text-[1.25rem]">
          Si vous lisez ce livret, c’est que vous avez décidé de faire un “happy
          change” dans votre salle de bain : de réduire vos déchets plastiques,
          de transporter moins d’eau pour rien, de consommer local et de lutter
          contre la surproduction. Et pour cela on vous dit...
        </p>
        <h3 className="font-[Ultra] text-[1.2rem] not-italic font-bold lg:text-[1.5rem]">
          Merci, bravo et BIENVENUE !
        </h3>
        <p className="text-[0.9rem] not-italic font-normal leading-6 pb-5 lg:text-[1.25rem]">
          Chez 900.care, notre mission c’est de vous faire ADORER nos produits
          d’hygiène et de soins rechargeables pour que vous disiez bye-bye au
          plastique jetable. Nous avons créé pour vous (et avec vous !) des
          produits très naturels, qui sentent bon, qui moussent quand il faut,
          qui respectent votre peau, vos cheveux, vos dents et votre santé. Tout
          cela, en vous apportant un vrai moment de PLAISIR !
        </p>
      </div>
    </div>
  );
};

export default Hero;
