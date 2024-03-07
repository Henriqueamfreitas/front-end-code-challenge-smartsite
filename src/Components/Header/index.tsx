import logo from "../../../_material/images/logo.svg";
import { StyledHeader } from "./style.ts";
import { StyledH1, StyledP } from "../../Styles/typography.ts";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo SmartFit" />
      </div>
      <div>
        <StyledH1 fontSize="2" fontWeight="1000" fontColor="grey-0">REABERTURA SMART FIT</StyledH1>
        <div></div>
        <StyledP fontSize="1" fontWeight="500" fontColor="grey-2">
          O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por
          isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </StyledP>
      </div>
    </StyledHeader>
  )
}
