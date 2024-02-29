import { GymContext } from "../../Providers/GymContext/GymContext";
import { useContext } from "react"
import { ListCard } from "../ListCard/index.tsx";
import { StyledList } from "./style.ts"

export const List = () => {
  const { filteredLocations } = useContext(GymContext)

  return (
    <StyledList>
      {
        filteredLocations?.map(element => {
          return(
            <ListCard object={element}></ListCard>
          )
        })
      }
    </StyledList>
  )
}
