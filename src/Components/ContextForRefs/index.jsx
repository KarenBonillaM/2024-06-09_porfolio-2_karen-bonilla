import React, { createContext, useRef } from "react";

export const SectionRefsContext = createContext();

export const SectionRefsProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <SectionRefsContext.Provider
      value={{ homeRef, aboutRef, projectsRef, contactRef }}>
      {children}
    </SectionRefsContext.Provider>
  );
};
