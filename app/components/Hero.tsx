import React from "react";
import Image from "next/image";
import HeroImage from "../../public/assets/images/HeroImage.png";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-2/4 pr-5">
        <Image src={HeroImage} alt="Hero" className="" />
      </div>
      <div className="w-2/4 flex-col  gap-5 ">
        <h1>Bienvenue chez 900.care !</h1>
        <p>
          Si vous lisez ce livret, c’est que vous avez décidé de faire un “happy
          change” dans votre salle de bain : de réduire vos déchets plastiques,
          de transporter moins d’eau pour rien, de consommer local et de lutter
          contre la surproduction. Et pour cela on vous dit...
        </p>
        <h3>Merci, bravo et BIENVENUE !</h3>
        <p>
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
