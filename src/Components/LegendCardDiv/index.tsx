import { StyledLegendCardDiv } from "./style.ts";
import { StyledP } from "../../Styles/typography.ts";

interface ILegendCardDivProps {
  img: string,
  text: string,
}

export const LegendCardDiv = ({ img, text }: ILegendCardDivProps) => {
  return (
      <StyledLegendCardDiv>
        <img src={img} alt="" />
        <StyledP fontSize=".875" fontWeight="300" fontColor="grey-0">{text}</StyledP>
      </StyledLegendCardDiv>
  )
}
