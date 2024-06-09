import React, { useContext } from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Projects from "../../Components/Projects";
import Home from "../../Components/Home";
import { SectionRefsContext } from "../../Components/ContextForRefs";

function HomePage() {
  const { homeRef, aboutRef, projectsRef, contactRef } =
    useContext(SectionRefsContext);

  return (
    <main className="min-h-screen">
      <section ref={homeRef} className="bg-white">
        <Home />
      </section>
      <section ref={aboutRef} className="bg-white">
        <About />
      </section>
      <section ref={projectsRef} className=" bg-white">
        <Projects />
      </section>
      <section ref={contactRef} className="bg-white">
        <Contact />
      </section>
    </main>
  );
}

export default HomePage;
