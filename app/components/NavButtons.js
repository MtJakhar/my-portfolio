import React from "react";

const NavButtons = () => {
  const scrollToSection = (event) => {
    const value = event.target.getAttribute("data-value");
    const selectedSection = document.getElementById(value);
    let blockVal;
    if (value === "skills") {
      blockVal = "center";
    } else {
      blockVal = "start";
    }

    if (selectedSection) {
      return selectedSection.scrollIntoView({
        behavior: "smooth",
        block: blockVal,
      });
    }
  };

  return (
    <div className="bg-neutral-900 bg-opacity-80 border-solid border-2 border-indigo-500 text-neutral-100 rounded-tl-[25px] rounded-br-[25px] flex">
      <div
        className="py-1 pr-2 pl-2 ml-6 hover:bg-indigo-500 hover:text-orange-500"
        data-value="about"
        onClick={scrollToSection}
      >
        About
      </div>
      <div
        className="py-1 px-2 hover:bg-indigo-500 hover:text-orange-500"
        data-value="skills"
        onClick={scrollToSection}
      >
        Skills
      </div>
      <div
        className="py-1 px-2 hover:bg-indigo-500 hover:text-orange-500"
        data-value="projects"
        onClick={scrollToSection}
      >
        Projects
      </div>
      <div
        className="py-1 p-2 pr-6 rounded-br-[22px] text-orange-500 bg-indigo-500 hover:bg-indigo-600"
        data-value="contact"
        onClick={scrollToSection}
      >
        Contact
      </div>
    </div>
  );
};

export default NavButtons;
