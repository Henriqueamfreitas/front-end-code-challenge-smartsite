import { StyledInputRadio } from "../InputRadio/style.js"
import { useForm } from "react-hook-form"


export const InputRadio = ( {period, label} ) => {
  const { register } = useForm()

  return (
    <StyledInputRadio >
      <div>
        <input type="radio" id={period} value={period} {...register("period")}/>
        <label htmlFor={period}>{label}</label>
      </div>
    </StyledInputRadio>
  )
}
