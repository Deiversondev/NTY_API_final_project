import { useState, createContext } from "react";

export const SectionContext = createContext();

export const SectionContextProvider = ({children}) => {

    const key = 'OWbQe4r9uvxeALOhPhKIG6meADLToujf'
    const [section, setSection] = useState([]);

  return (
    <SectionContext.Provider value={{section,setSection,key}}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionContextProvider;