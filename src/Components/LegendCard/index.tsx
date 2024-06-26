import { StyledLegendCard } from "./style.ts";
import { LegendCardDiv } from "../LegendCardDiv/index.tsx";
import { StyledH2 } from "../../Styles/typography.ts";

interface ILegendCardProps {
  item: string,
  img1: string,
  text1: string,
  img2: string,
  text2: string,
  img3: string|null,
  text3: string|null,
}

export const LegendCard = ({ item, img1, text1, img2, text2, img3, text3 }:ILegendCardProps) => {
  return (
    <StyledLegendCard>
      <StyledH2 fontSize="1" fontWeight="600" fontColor="grey-0">{item}</StyledH2>
      <div>
        <LegendCardDiv img={img1} text={text1} />
        <LegendCardDiv img={img2} text={text2} />
        {img3 && text3? <LegendCardDiv img={img3} text={text3} /> : null}
      </div>
    </StyledLegendCard>
  )
}
