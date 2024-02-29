import { StyledFooter } from "./style.ts"
import logo from "../../../_material/images/logo.svg"
// import logo from "../../../_material/images/logo.svg"

export const Footer = () => {
    return(
        <StyledFooter>
          <img src={logo} alt="" />
          <p>Todos os direitos reservados - 2020</p>
        </StyledFooter>
    )
}
