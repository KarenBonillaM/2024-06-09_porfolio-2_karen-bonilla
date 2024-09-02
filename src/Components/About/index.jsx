import React from "react";

function About() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 px-5 md:px-28 lg:px-36 xl:px-52">
      <div className="col-span-4 md:col-span-8 lg:col-span-12 my-16 mx-2 md:mx-12 lg:mx-16 md:my-24 lg:my-32">
        <div className="md:flex bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          <div className="border-8 relative border-purple-700 w-44 h-56 lg:w-64 m-auto lg:h-96 md:w-52 md:h-72 rounded md:m-0">
            <div className="about-me-photo absolute -top-11 -left-9 w-44 h-56 lg:w-64 lg:h-96 md:w-52 md:h-72 rounded"></div>
          </div>
          <div className="flex-1 md:pl-6 sm:mx-6 sm:px-0 pt-5 px-2 pb-2 md:pt-0">
            <h2 className="text-xl font-bold pb-4 text-black md:text-2xl lg:text-4xl">
              About Me
            </h2>
            <p className="text-lg pb-3 md:text-xl">
              A passionate Front-End Developer with a unique background in law.
              My journey from law to technology has equipped me with a diverse
              skill set that I bring to every project.
            </p>
            <p className="pb-2">
              As a junior Front-End Developer, I possess skills in HTML, CSS,
              JavaScript, React, Tailwind, Bootstrap, and SCSS. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I thrive on
              creating visually appealing and user-friendly websites, always
              aiming to optimize performance.
            </p>
            <p>
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding web applications.
              Eager to explore internship and job opportunities in the dynamic
              field of front-end development, I am a dedicated and motivated
              with a distinctive blend of legal and tech expertise, ready to
              contribute to innovative projects and teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
