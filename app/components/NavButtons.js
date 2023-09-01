import React from "react";

const NavButtons = () => {
  return (
    <div
      id="container"
      className="bg-neutral-900 bg-opacity-80 border-solid border-2 border-indigo-500 text-neutral-100 rounded-tl-[25px] rounded-br-[25px] flex"
    >
      <div className="py-1 pr-2 pl-2 ml-6 hover:bg-indigo-500 hover:text-orange-500">
        About
      </div>
      <div className="py-1 px-2 hover:bg-indigo-500 hover:text-orange-500">
        Skills
      </div>
      <div className="py-1 px-2 hover:bg-indigo-500 hover:text-orange-500">
        Projects
      </div>
      <div className="py-1 p-2 pr-6 rounded-br-[22px] text-orange-500 bg-indigo-500 hover:bg-indigo-600">
        Contact
      </div>
    </div>
  );
};

export default NavButtons;
