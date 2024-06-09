import React from "react";
import Email from "../../Images/email.png";
import Phone from "../../Images/telephone-call.png";
import Location from "../../Images/location.png";

function Contact() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:grid-cols-12 px-5 md:px-28 lg:px-36 xl:px-52">
      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-5 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <h2>Contact Me</h2>
        <div className="flex flex-col bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row justify-between">
          <div className="flex items-center">
            <img
              src={Email}
              alt="email"
              className="m-3 h-8 w-8 md:h-14 md:w-14"
            />
            karenbonillamoreno@gmail.com
          </div>
          <div className="flex items-center">
            <img
              src={Phone}
              alt="email"
              className="m-3 h-8 w-8 md:h-14 md:w-14"
            />
            +46 70 172 20 52
          </div>
          <div className="flex items-center">
            <img
              src={Location}
              alt="email"
              className="m-3 h-8 w-8 md:h-14 md:w-14"
            />
            Stockholm, Sweden
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
