import { StyledLegendCardDiv } from "./style.js";

export const LegendCardDiv = ({ img, text }) => {
  return (
      <StyledLegendCardDiv>
        <img src={img} alt="" />
        <p>{text}</p>
      </StyledLegendCardDiv>
  )
}
