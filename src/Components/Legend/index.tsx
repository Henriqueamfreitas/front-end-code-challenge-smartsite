import { StyledLegend } from "./style.ts";
import { LegendCard } from "../LegendCard/index.tsx";

import requiredTowel from "../../../_material/images/required-towel.png";
import recommendedMask from '../../../_material/images/recommended-mask.png';

import recommendTowel from "../../../_material/images/recommended-towel.png";
import requiredMask from "../../../_material/images/required-mask.png";

import forbiddenFountain from "../../../_material/images/forbidden-fountain.png";
import partialFountain from "../../../_material/images/partial-fountain.png";

import requiredLockerroom from "../../../_material/images/required-lockerroom.png";
import partialLockerroom from "../../../_material/images/partial-lockerroom.png";
import forbiddenLockerroom from "../../../_material/images/forbidden-lockerroom.png";

export const Legend = () => {
  return (
    <StyledLegend>
      <LegendCard
        item={"Máscara"}
        img1={requiredMask}
        text1={"Obrigatório"}
        img2={recommendedMask}
        text2={"Recomendado"}
        img3={null}
        text3={null}
      />
      <LegendCard
        item={"Toalha"}
        img1={requiredTowel}
        text1={"Obrigatório"}
        img2={recommendTowel}
        text2={"Recomendado"}
        img3={null}
        text3={null}
      />
      <LegendCard
        item={"Bebedouro"}
        img1={partialFountain}
        text1={"Parcial"}
        img2={forbiddenFountain}
        text2={"Proibido"}
        img3={null}
        text3={null}
      />
      <LegendCard
        item={"Vestiários"}
        img1={requiredLockerroom}
        text1={"Liberado"}
        img2={partialLockerroom}
        text2={"Parcial"}
        img3={forbiddenLockerroom}
        text3={"Fechado"}
      />
    </StyledLegend>
  )
}
