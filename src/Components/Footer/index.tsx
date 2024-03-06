import { StyledFooter } from "./style.ts";
import logo from "../../../_material/images/logo.svg";
import { StyledP } from "../../Styles/typography.ts";

export const Footer = () => {
    return(
        <StyledFooter>
          <img src={logo} alt="logo SmartFit" />
          <StyledP fontSize="3" fontWeight="100" fontColor="red">Todos os direitos reservados - 2020</StyledP>
        </StyledFooter>
    )
}
