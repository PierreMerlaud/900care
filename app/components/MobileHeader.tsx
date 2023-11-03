import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.png";

const MobileHeader = () => {
  return (
    <div className="flex flex-row justify-between w-full border-b border-solid border-[#FFDA00]  ]">
      <div className="flex flex-row justify-center items-center p-4">
        <Image src={Logo} alt="Logo" className="max-h-10" />
      </div>
      <div className="flex flex-row justify-around items-center w-full gap-2.5 pr-4">
        <input className="w-full " type="text"></input>
        <div className="border border-solid rounded-lg border-[#BBBABA]">
          <select
            className="text-[1.25rem] not-italic font-semibold p-2"
            name="search"
          >
            <option value="français">Français 🇫🇷</option>
            <option value="anglais">Anglais </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

// /* Frame 174 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 16px 0px 10px;
// gap: 10px;

// width: 130px;
// height: 90px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;

// /* Logo */

// width: 92px;
// height: 39px;

// /* NEW Palette 900/Hot Yellow */
// background: #FFDA00;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
