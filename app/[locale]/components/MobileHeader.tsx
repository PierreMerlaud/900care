import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";

import { useState } from "react"; // Import useState hook

const MobileHeader = () => {
  // Define state to hold the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("fr"); // Default to 'fr' for Français

  // Event handler to update the selected language
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);

    // Update the URL based on the selected language
    const newURL = `http://localhost:3000/${newLanguage}`;
    window.location.href = newURL;
  };
  return (
    <div className="flex flex-row justify-between w-full border-b border-solid border-[#FFDA00]">
      <div className="flex flex-row justify-center items-center p-4">
        <Image src={Logo} alt="Logo" className="max-h-10" />
      </div>
      <div className="flex flex-row justify-around items-center w-full gap-2.5 pr-4">
        <input className="w-full" type="text"></input>
        <div className="border border-solid rounded-lg border-[#BBBABA]">
          <select
            className="text-[1.25rem] not-italic font-semibold p-2"
            name="search"
            value={selectedLanguage} // Set the selected value based on state
            onChange={handleLanguageChange} // Attach the event handler
          >
            <option value="fr">Français 🇫🇷</option>
            <option value="en">Anglais 🇬🇧</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
