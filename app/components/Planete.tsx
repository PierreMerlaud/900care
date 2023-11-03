import React from "react";

const Planete = () => {
  return (
    <div className="bg-[#FFE967] py-20  px-0 flex flex-col items-center gap-10 text-center">
      <div>
        <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:text-[4rem]">
          Meilleur pour notre planète
        </h2>
      </div>
      <div>
        <p className="w-60 font-[Ultra-Ultra] text-[1.5rem] not-italic font-[700] leading-7 lg:w-96">
          Grâce à l’utilisation des produits 900.care, pour une joyeuse tribu de
          4 personnes et par an, c’est plus de :
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center text-center lg:flex-row lg:items-start">
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] p-7 lg:w-1/5">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            110
          </p>
          <p className="font-[Poppins] text-[1rem] not-italic font-semibold leading-5">
            kilos de CO2 économisés, soit un trajet Paris - Barcelone en voiture
            (1035 km)
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] p-7 lg:w-1/5">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            6
          </p>
          <p className="font-[Poppins] text-[1rem] not-italic font-semibold leading-5">
            fois moins d’émissions de CO2
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] p-7 lg:w-1/5">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            35
          </p>
          <p className="font-[Poppins] text-[1rem] not-italic font-semibold leading-5">
            litres d’eau non-transportés par camion ou avion
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] p-7 lg:w-1/5">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            6,5
          </p>
          <p className="font-[Poppins] text-[1rem] not-italic font-semibold leading-5">
            kilos de plastique évité par an
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Planete;
