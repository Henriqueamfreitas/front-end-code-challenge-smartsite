import { StyledFooter } from "./style.js"
import logo from "../../../_material/images/logo.svg"

export const Footer = () => {
    return(
        <StyledFooter>
          <img src={logo} alt="" />
          <p>Todos os direitos reservados - 2020</p>
        </StyledFooter>
    )
}
