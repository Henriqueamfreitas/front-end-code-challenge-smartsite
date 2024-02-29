import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IGymProviderProps, ILocations } from "./@types";
import { IGymContext, IGymInfo } from "./@types";

export const GymContext = createContext({} as IGymContext)

export const GymProvider = ({ children }: IGymProviderProps) => {
  const [gymInfo, setGymInfo] = useState<IGymInfo>({
    current_country_id: 0,
    locations: [],
    success: false,
    total: 0,
    wp_total: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<ILocations[]>([]);


  useEffect(() => {
    const loadGymInfo = async () => {
       try {
          setIsLoading(true);
          const response = await api.get("/data/locations.json");
          setGymInfo(response.data);
       } catch (error) {
          console.log(error);
       } finally {
          setIsLoading(false);
       }
    }
    loadGymInfo();
}, []);


  return (
     <GymContext.Provider value={{ gymInfo, setGymInfo, isLoading, filteredLocations, setFilteredLocations }}>
        {children}
     </GymContext.Provider>
  );
};
