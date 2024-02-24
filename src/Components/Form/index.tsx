import clock from "../../../_material/images/icon-hour.png"
import { StyledForm } from "../Form/style.js"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const Form = () => {
  const { register, handleSubmit, reset } = useForm()
  const [formData, setFormData] = useState({
    period: "",
    closedUnits: false,
  })
  const submit = (data) => {
    setFormData(data)
    reset()
  }

  const handleClear = () => {
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <img src={clock} alt="" />
        <h2>Horário</h2>
      </div>
      <p>Qual período quer treinar?</p>
      <div>
        <input type="radio" id="morning" value={"morning"} {...register("period")}/>
        <label htmlFor="morning">Manhã 06:00 às 12:00</label>
      </div>
      <div>
        <input type="radio" id="afternoon" value={"afternoon"} {...register("period")} />
        <label htmlFor="afternoon">Tarde 12:01 às 18:00</label>
      </div>
      <div>
        <input type="radio" id="night" value={"night"} {...register("period")} />
        <label htmlFor="night">Noite 18:01 às 23:00</label>
      </div>

      <div>
        <input type="checkbox" id="closedUnits" {...register("closedUnits")} />
        <label htmlFor="closedUnits">Exibir unidades fechadas</label>
      </div>

      <p>Resultados encontrados: <span>0</span></p>

      <button type="submit">Encontrar unidade</button>
      <button type="button" onClick={handleClear}>Limpar</button>
    </StyledForm>
  )
}
