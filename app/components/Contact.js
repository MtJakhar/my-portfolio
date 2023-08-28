import React from "react";
import Image from "next/image";
import gitHub from "../../public/images/github.png";
import linkedIn from "../../public/images/linkedin.png";
import twitter from "../../public/images/twitter.png";
import email from "../../public/images/email-1.png";

const Contact = () => {
  let contactImages = [
    {
      image: email,
      alt: "email",
    },
    {
      image: linkedIn,
      alt: "linkedIn",
    },
    {
      image: gitHub,
      alt: "github",
    },
    {
      image: twitter,
      alt: "twitter|X",
    },
  ];
  return (
    <div className="bg-blue-950 text-sky-400 bg-opacity-50 p-4 rounded-lg mx-auto my-auto">
      <div className="mb-5">
        <h1>///.Contact.module</h1>
        <h4>loading...</h4>
      </div>
      <div className="grid grid-cols-4">
        {contactImages.map((data) => {
          return (
            <div className="mx-2 my-3 text-center hover:scale-110">
              <Image src={data.image} width={200} height={200} alt={data.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
