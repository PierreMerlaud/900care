import React from "react";
import Image from "next/image";
import StepModele from "./StepModele";
import ProduitsImage from "../../public/assets/images/ProduitsImage.png";
import Gel1 from "../../public/assets/images/Gel1.png";
import Step1 from "../../public/assets/images/Step1.png";
import Gel2 from "../../public/assets/images/Gel2.png";
import Step2 from "../../public/assets/images/Step2.png";
import Gel3 from "../../public/assets/images/Gel3.png";
import Step3 from "../../public/assets/images/Step3.png";
import Gel4 from "../../public/assets/images/Gel4.png";
import Step4 from "../../public/assets/images/Step4.png";

const Produits = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-5">
        <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] text-center p-5 lg:text-[4rem] ">
          Nos produits à reconstituer
        </h2>
        <Image src={ProduitsImage} alt="Produits" className="w-[85%] m-auto" />
      </div>
      <details className="rounded-[1.125rem] border-[1px] border-[var(--new-palette-900-grey,#BBBABA)] w-3/4 lg:w-1/2">
        <summary className="text-[0.9rem] not-italic font-semibold p-6 block after:ml-[1ch] after:inline-block after:content-['+'] after:[transition:0.2s] lg:text-[1.25rem]">
          Comment utiliser mon gel douche ?
        </summary>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:content-start">
          <StepModele
            stepInfo={{
              srcGelImage: Gel1,
              altGelImage: "Gel1",
              srcStepImage: Step1,
              altStepImage: "Step1",
              stepText:
                "Insérez deux batônnets dans votre bouteille réutilisable",
            }}
          />
          <StepModele
            stepInfo={{
              srcGelImage: Gel2,
              altGelImage: "Gel2",
              srcStepImage: Step2,
              altStepImage: "Step2",
              stepText: "Ajoutez de l’eau chaude jusqu’au trait (240 mL)",
            }}
          />
          <StepModele
            stepInfo={{
              srcGelImage: Gel3,
              altGelImage: "Gel3",
              srcStepImage: Step3,
              altStepImage: "Step3",
              stepText:
                "Posez votre flacon tête en haut, languette ouverte et laissez reposer 6h minimum",
            }}
          />
          <StepModele
            stepInfo={{
              srcGelImage: Gel4,
              altGelImage: "Gel4",
              srcStepImage: Step4,
              altStepImage: "Step4",
              stepText: "Refermez la languette, secouez un peu, moussez !",
            }}
          />
        </div>
      </details>
    </div>
  );
};

export default Produits;