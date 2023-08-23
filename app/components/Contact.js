import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <div className="grid grid-cols-3">
        <div className="bg-gray-500 hover:bg-gray-700">Github</div>
        <div className="bg-sky-700 hover:bg-sky-900">LinkedIn</div>
        <div className="bg-sky-400 hover:bg-sky-600">Twitter | X</div>
      </div>
      <div className="bg-green-500 hover:bg-green-700">Email Me</div>
      <div className="bg-gray-900 text-sky-600">
        Built from scratch @Copyright Muizz Jakhar
      </div>
    </div>
  );
};

export default Contact;
