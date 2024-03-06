import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { StyledSearchGym } from "./style.ts";
import { useContext, useEffect, useState } from "react";
import { GymContext } from "../../Providers/GymContext/GymContext.tsx";
import { ILocations } from "../../Providers/GymContext/@types.ts";
import lupa from "../../../_material/images/lupa.webp"

export const SearchGym = () => {
  const { register, handleSubmit, reset } = useForm()

  const { gymInfo, setFilteredLocations } = useContext(GymContext)

  interface ISearch {
    gym_city: string,
  }

  const [searchData, setSearchData] = useState<ISearch>({
    gym_city: "",
  })

  useEffect(() => {
    filterLocations(searchData.gym_city);
  }, [searchData, gymInfo])

  const submit: SubmitHandler<FieldValues> = (data) => {
    setSearchData(data as ISearch);
    reset();
  };

  const filterLocations = (gym_city: string) => {
    let filtered: ILocations[] = gymInfo.locations;

    if (gym_city === "") {
      filtered = gymInfo.locations;
    } else {
      filtered = gymInfo.locations.filter((location) => {
        const gymLocation = location.title?.toLowerCase()

        return (
          gymLocation && gymLocation.includes(gym_city.toLowerCase())
        )
      });
    }
    setFilteredLocations(filtered);
  };


  return (
    <StyledSearchGym onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Digite o nome da academia" {...register("gym_city")}/>
      <button><img src={lupa} alt="lupa de pesquisa" /></button>
    </StyledSearchGym>
  )
}
