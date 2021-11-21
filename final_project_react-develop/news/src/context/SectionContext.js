import { useState, createContext } from "react";

export const SectionContext = createContext();

export const SectionContextProvider = ({children}) => {

    const key = 'OWbQe4r9uvxeALOhPhKIG6meADLToujf';
    const [section, setSection] = useState([]);
    const [loading, setLoading] = useState(true);

  return (
    <SectionContext.Provider value={{section,setSection,key,loading,setLoading}}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionContextProvider;