// import { useContext, useEffect } from "react";
// import { GymContext } from "../../Providers/GymContext/GymContext";
// import { ListCard } from "../ListCard";
import { StyledList } from "./style.js"

export const List = () => {
  // const { gym, setGym, getGym } = useContext(GymContext);

  // useEffect(() => {
  //   getGym();
  // }, []); //
  // const locations = (gym.locations)
  // console.log(locations)

  return (
    <StyledList>
      {
        // locations?.map(element => {
        //   return(
        //     <ListCard object={element}></ListCard>
        //   )
        // })
      }
    </StyledList>
  )
}
