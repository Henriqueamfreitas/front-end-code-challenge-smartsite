import { createContext, useState } from "react";
import { api } from "../../Services/api";

export const GymContext = createContext({})

export const GymProvider = ({ children }) => {
  const [gym, setGym] = useState({});

  async function getGym() {
    try {
      const response = await api.get("");
      const gymUnits = response.data;

      setGym(gymUnits)
      return gymUnits;
    } catch (error) {
      console.error('Erro ao carregar unidades:', error);
      throw error;
    }
  }


  return (
     <GymContext.Provider value={{ gym, setGym, getGym }}>
        {children}
     </GymContext.Provider>
  );
};
