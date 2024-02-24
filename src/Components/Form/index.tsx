import clock from "../../../_material/images/icon-hour.png"
import { StyledForm } from "../Form/style.js"

export const Form = () => {
    return(
        <StyledForm>
          <div>
            <img src={clock} alt="" />
            <h2>Horário</h2>
          </div>
          <p>Qual período quer treinar?</p>
          <div>
            <input type="radio" id="morning" name="period"/>
            <label htmlFor="morning">Manhã 06:00 às 12:00</label>
          </div>
          <div>
            <input type="radio" id="afternoon" name="period"/>
            <label htmlFor="afternoon">Tarde 12:01 às 18:00</label>
          </div>
          <div>
            <input type="radio" id="night" name="period"/>
            <label htmlFor="night">Noite 18:01 às 23:00</label>
          </div>

          <div>
            <input type="checkbox" id="closedUnits" name="closedUnits"/>
            <label htmlFor="closedUnits">Exibir unidades fechadas</label>
          </div>

          <p>Resultados encontrados: <span>0</span></p>

          <button>Encontrar unidade</button>
          <button>Limpar</button>
        </StyledForm>
    )
}
