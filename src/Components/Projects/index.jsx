import React from "react";
import ShopNet from "../../Images/The-shopNet-.jpg";
import DecorAuction from "../../Images/DecorAuction.jpg";
import Holidaze from "../../Images/Holidaze.jpg";
import ExternalLink from "../../Images/external-link.png";
import Github from "../../Images/github.png";

function Projects() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 px-5 md:px-28 lg:px-36 xl:px-52">
      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-5 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <div>
          <div className="flex flex-col bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <div className="flex-1 py-6 md:p-6 sm:mr-6 sm:px-0">
              <div className="flex gap-4 mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  Decor Auction
                </h3>
              </div>
              <p>
                This is a web application for a Home Decor Auction platform,
                allowing users to buy and sell home decor items through an
                online auction. The application is built using HTML, CSS,
                JavaScript, and Bootstrap to create an intuitive and visually
                appealing user interface.
              </p>
              <div className="flex justify-around pt-5">
                <a
                  href="https://github.com/KarenBonillaM/2023-12-17_Semester-Project-2_Karen-Bonilla.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Code
                  <img
                    src={Github}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
                <a
                  href="https://lucky-lollipop-d98d9b.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Live Demo
                  <img
                    src={ExternalLink}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 mt-11 md:mt-0">
              <div className="h-64 w-44 m-auto md:h-full md:w-full border-8 border-purple-700 relative md:m-0">
                <div className="absolute h-64 w-44 md:h-full md:w-full overflow-scroll -top-11 -right-11 z-50">
                  <img
                    src={DecorAuction}
                    style={{
                      width: "auto",
                      height: "auto",
                      minWidth: "100%",
                      minHeight: "100%",
                    }}
                    alt="Decor Auction project"
                    className="object-cover"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-5 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <div>
          <div className="flex flex-col bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <div className="flex-1 mt-11 md:mt-0">
              <div className="h-64 w-44 m-auto md:h-full md:w-full border-8 border-purple-700 relative md:m-0">
                <div className="absolute h-64 w-44 md:h-full md:w-full overflow-scroll -top-11 -left-11 z-50">
                  <img
                    src={ShopNet}
                    style={{
                      width: "auto",
                      height: "auto",
                      minWidth: "100%",
                      minHeight: "100%",
                    }}
                    alt="The ShopNet project"
                    className="object-cover "></img>
                </div>
              </div>
            </div>
            <div className="flex-1 py-6 md:p-6 sm:mr-6 sm:px-0">
              <div className="flex gap-4 mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  The ShopNet
                </h3>
              </div>
              <p>
                This school project is an e-commerce store built using React.
                The goal is to apply knowledge of React to create a intuitive,
                responsive and visually appealing user interface with various
                pages for an online shop, including the homepage, individual
                product page, cart page, and checkout success page. The goal of
                this project is to apply React skills to build a functional
                e-commerce store. It involves creating multiple pages, fetching
                data from an API, implementing routing with React Router, and
                ensuring responsiveness.
              </p>
              <div className="flex justify-around pt-5">
                <a
                  href="https://github.com/KarenBonillaM/2024-04-07_front-end-frameworks_karen-bonilla.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Code
                  <img
                    src={Github}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
                <a
                  href="https://illustrious-beignet-9eda1e.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Live Demo
                  <img
                    src={ExternalLink}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-5 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <div>
          <div className="flex flex-col bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <div className="flex-1 py-6 md:p-6 sm:mr-6 sm:px-0">
              <div className="flex gap-4 mb-4">
                <h3 className="text-xl font-medium text-slate-700">Holidaze</h3>
              </div>
              <p>
                This project is an accommodation booking site built using React
                and Tailwind CSS. The site allows users to browse, book, and
                manage accommodations seamlessly. It includes features such as
                search functionality, user authentication, and a responsive
                design to ensure a great user experience across different
                devices.
              </p>
              <div className="flex justify-around pt-5">
                <a
                  href="https://github.com/KarenBonillaM/2024-05-26_project-exam-2_karen-bonilla.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Code
                  <img
                    src={Github}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
                <a
                  href="https://holidazesemesterproject.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-bold text-black items-center">
                  Live Demo
                  <img
                    src={ExternalLink}
                    alt="Github icon"
                    width="40px"
                    className="pl-2"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 mt-11 md:mt-0">
              <div className="h-64 w-44 m-auto md:h-full md:w-full border-8 border-purple-700 relative">
                <div className="absolute h-64 w-44 md:h-full md:w-full overflow-scroll -top-11 -right-11 z-50">
                  <img
                    src={Holidaze}
                    style={{
                      width: "auto",
                      height: "auto",
                      minWidth: "100%",
                      minHeight: "100%",
                    }}
                    alt="Holidaze project"
                    className="object-cover "></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
