import logo from "../../../_material/images/logo.svg";
import { StyledHeader } from "./style.ts";
import { StyledP } from "../../Styles/typography.ts";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo SmartFit" />
      </div>
      <div>
        <h1>REABERTURA SMART FIT</h1>
        <div></div>
        <StyledP  fontSize="3" fontWeight="100" fontColor="red">
          O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por
          isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </StyledP>
      </div>
    </StyledHeader>
  )
}
