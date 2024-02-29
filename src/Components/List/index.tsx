import { GymContext } from "../../Providers/GymContext/GymContext";
import { useContext } from "react";
import { ListCard } from "../ListCard/index.tsx";
import { StyledList } from "./style.ts";
import { v4 as uuidv4 } from 'uuid';


export const List = () => {
  const { filteredLocations } = useContext(GymContext)

  return (
    <StyledList>
      {
        filteredLocations?.map(element => {
          return(
            <ListCard key={uuidv4()} object={element}></ListCard>
          )
        })
      }
    </StyledList>
  )
}
