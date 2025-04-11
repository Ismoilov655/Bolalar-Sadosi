import { createContext, useContext, useState } from "react";
import { malumot } from "../data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");

  return (
    <DataContext.Provider value={{ malumot, language, setLanguage }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};