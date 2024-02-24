import { StyledLegendCard } from "../LegendCard/style.js";
import { LegendCardDiv } from "../LegendCardDiv/index.js";

export const LegendCard = ({ item, img1, text1, img2, text2, img3, text3 }) => {
  return (
    <StyledLegendCard>
      <h2>{item}</h2>
      <div>
        <LegendCardDiv img={img1} text={text1} />
        <LegendCardDiv img={img2} text={text2} />
        {img3 ? <LegendCardDiv img={img3} text={text3} /> : null}
      </div>
    </StyledLegendCard>
  )
}
