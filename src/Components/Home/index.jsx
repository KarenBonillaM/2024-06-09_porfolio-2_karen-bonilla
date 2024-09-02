import React from "react";
import Linkedin from "../../Images/linkedin.png";
import Github from "../../Images/github.png";
import Css from "../../Images/css.png";
import Html from "../../Images/html.png";
import Javascript from "../../Images/js.png";
import ReactLogo from "../../Images/React.png";
import Tailwind from "../../Images/Tailwind.png";
import Bootstrap from "../../Images/bootstrap.png";
import Sass from "../../Images/Sass.png";
// import Photo from "../../Images/IMG_20240605_105006_965.jpg";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 px-5 md:px-28 lg:px-36 xl:px-52">
      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-2 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <div className="grid md:flex lg:flex">
          <div className="grid content-center">
            <h1 className="text-xl font-bold pb-8 md:text-3xl lg:text-5xl">
              Front-End Developer
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-slate-500">
              Hi, I'm Karen Bonilla. A passionate Front-end Developer based in
              Stockholm, Sweden.
            </p>
            <div className="flex pb-10 pt-6">
              <div>
                <a
                  href="https://www.linkedin.com/in/karen-sofia-bonilla-moreno-451050172/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mr-5 hover:scale-125 transform transition duration-500 ease-in-out"
                    src={Linkedin}
                    alt="Linkedin logo"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KarenBonillaM"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 hover:scale-125 transform transition duration-500 ease-in-out"
                    src={Github}
                    alt="GitHub logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="photo flex-1">
              {/* <img
                src={Photo}
                alt="Karen Bonilla"
                className="w-96 h-96 object-cover min-h-full aspect-auto absolute -top-11 -right-9"></img> */}
            </div>
          </div>
        </div>
        <div className="md:flex w-full md:w-11/12 lg:w-4/5 items-center pt-8">
          <div className="w-4/12 md:w-2/12">
            <h2 className="text-lg">Tech Stack</h2>
          </div>
          <div className="flex justify-around w-full md:border-l-4 border-black">
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Css}
              alt="CSS logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Html}
              alt="HTML logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Javascript}
              alt="JavaScript logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Bootstrap}
              alt="Bootstrap logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Tailwind}
              alt="Tailwind logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={ReactLogo}
              alt="React logo"
            />
            <img
              className="h-6 w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
              src={Sass}
              alt="Sass logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
