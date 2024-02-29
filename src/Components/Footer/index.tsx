import { StyledFooter } from "./style.ts";
import logo from "../../../_material/images/logo.svg";

export const Footer = () => {
    return(
        <StyledFooter>
          <img src={logo} alt="logo SmartFit" />
          <p>Todos os direitos reservados - 2020</p>
        </StyledFooter>
    )
}
