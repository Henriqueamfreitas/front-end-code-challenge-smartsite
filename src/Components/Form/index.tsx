import clock from "../../../_material/images/icon-hour.png";
import { StyledForm } from "./style.ts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ILocations } from "../../Providers/GymContext/@types.ts";
import { GymContext } from "../../Providers/GymContext/GymContext.tsx";
import { InputDiv } from "../InputDiv/index.tsx";
import { StyledH2, StyledP, StyledSpan } from "../../Styles/typography.ts";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<IForm>()

  const { gymInfo, filteredLocations, setFilteredLocations } = useContext(GymContext)

  interface IForm {
    period: string;
    closedUnits: boolean;
  }

  const [formData, setFormData] = useState<IForm>({
    period: "",
    closedUnits: true,
  })

  useEffect(() => {
    filterLocations(formData.period, formData.closedUnits);
  }, [formData, gymInfo])

  const locations = filteredLocations.length > 0 ? filteredLocations : gymInfo.locations;

  const submit = (data: IForm): void => {
    setFormData(data)
    reset({ period: "" })
  }

  const handleClear = () => {
    reset()
  }

  const filterLocations = (period: string, closedUnits: boolean) => {
    let filtered: ILocations[] = gymInfo.locations;

    if (!closedUnits) {
      filtered = filtered.filter(location => {
        return location.opened;
      });
    }

    if (period === "morning") {
      let returnArray: ILocations[] = []
      filtered.forEach(filter => {
        filter.schedules?.forEach(schedule => {
          const numbers = schedule.hour.match(/\d+/g);
          if (numbers) {
            let first_number = Number(numbers[0])
            if (first_number >= 6 && first_number < 12) {
              returnArray.push(filter)
            }
          }
        })
      })
      const uniquereturnArray = [...new Set(returnArray)];
      filtered = (uniquereturnArray)
    }

    if (period === "afternoon") {
      let returnArray: ILocations[] = []
      filtered.forEach(filter => {
        filter.schedules?.forEach(schedule => {
          const numbers = schedule.hour.match(/\d+/g);
          if (numbers) {
            let first_number = Number(numbers[0])
            let second_number = Number(numbers[1])
            if (
              (first_number <= 12 && 12 < second_number && second_number <= 18) ||
              (first_number <= 12 && second_number >= 18) ||
              (first_number >= 12 && first_number < 18 && 12 < second_number && second_number <= 18) ||
              (first_number >= 12 && first_number < 18 && second_number >= 18)
            ) {
              returnArray.push(filter)
            }
          }
        })
      })
      const uniquereturnArray = [...new Set(returnArray)];

      filtered = (uniquereturnArray)
    }

    if (period === "night") {
      let returnArray: ILocations[] = []
      filtered.forEach(filter => {
        filter.schedules?.forEach(schedule => {
          const numbers = schedule.hour.match(/\d+/g);
          if (numbers) {
            let second_number = Number(numbers[1])
            if (second_number > 18 || second_number === 0) {
              returnArray.push(filter)
            }
          }
        })
      })
      const uniquereturnArray = [...new Set(returnArray)];
      filtered = (uniquereturnArray)
    }

    setFilteredLocations(filtered);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <img src={clock} alt="desenho de relógio amarelo marcando 9h" />
        <StyledH2 fontSize=".875" fontWeight="300" fontColor="grey-4">Horário</StyledH2>
      </div>
      <StyledP fontSize="1.375" fontWeight="100" fontColor="grey-5">Qual período quer treinar?</StyledP>
      <InputDiv
        id={"morning"}
        type={"radio"}
        value={"morning"}
        label={"Manhã"}
        spanText={"06:00 às 12:00"}
        registerName={"period"}
        register={register}
      />
      <InputDiv
        id={"afternoon"}
        type={"radio"}
        value={"afternoon"}
        label={"Tarde"}
        spanText={"12:01 às 18:00"}
        registerName={"period"}
        register={register}
      />
      <InputDiv
        id={"night"}
        type={"radio"}
        value={"night"}
        label={"Noite"}
        spanText={"18:01 às 23:00"}
        registerName={"period"}
        register={register}
      />
      <div>
        <InputDiv
          id={"closedUnits"}
          type={"checkbox"}
          label={"Exibir unidades fechadas"}
          registerName={"closedUnits"}
          register={register}
        />
        <StyledP fontSize="1" fontWeight="100" fontColor="grey-1">
          Resultados encontrados:
          <StyledSpan fontSize="1.125" fontWeight="700" fontColor="grey-1">{locations.length}</StyledSpan>
        </StyledP>
      </div>

      <div>
        <button type="submit">ENCONTRAR UNIDADE</button>
        <button type="button" onClick={handleClear}>LIMPAR</button>
      </div>
    </StyledForm>
  )
}
