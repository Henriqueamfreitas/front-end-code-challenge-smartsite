import { StyledLegendCardDiv } from "./style.ts";

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
