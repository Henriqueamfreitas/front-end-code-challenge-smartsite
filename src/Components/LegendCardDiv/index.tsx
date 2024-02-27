import { StyledLegendCardDiv } from "./style.js";

interface ILegendCardDivProps {
  img: string,
  text: string,
}

export const LegendCardDiv = ({ img, text }: ILegendCardDivProps) => {
  return (
      <StyledLegendCardDiv>
        <img src={img} alt="" />
        <p>{text}</p>
      </StyledLegendCardDiv>
  )
}
