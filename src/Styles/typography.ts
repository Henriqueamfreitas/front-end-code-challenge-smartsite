import styled, { css } from "styled-components";
// import { StyledFooter } from "./style.ts";
// import logo from "../../../_material/images/logo.svg";

interface HeadlineStylesProps {
  fontSize: ".75" | ".875" | "1" | "1.125" | "1.375" | "1.5" | "2" | "2.5" | "3";
  fontWeight: "100" | "300" | "500" | "600" | "700" | "1000";
  fontColor: "black" | "grey-0" | "grey-1" | "grey-2" | "grey-3" | "grey-4" | "grey-5" | "yellow" | "red" | "green";
}

const HeadlineStyles = ({ fontSize, fontWeight, fontColor }: HeadlineStylesProps) => {
  const mapaTamanhos: Record<string, string> = {
    ".75": ".75rem",
    ".875": ".875rem",
    "1": "1rem",
    "1.125": "1.125rem",
    "1.375": "1.375rem",
    "1.5": "1.5rem",
    "2": "2rem",
    "2.5": "2.5rem",
    "3": "3rem"
  };

  const mapaSize: Record<string, string> = {
    "100": "100",
    "300": "300",
    "500": "500",
    "600": "600",
    "700": "700",
    "1000": "1000",
  };

  const mapaColor: Record<string, string> = {
    "black": "var(--black)",
    "grey-0": "var(--grey-0)",
    "grey-1": "var(--grey-1)",
    "grey-2": "var(--grey-2)",
    "grey-3": "var(--grey-3)",
    "grey-4": "var(--grey-4)",
    "grey-5": "var(--grey-5)",
    "yellow": "var(--yellow)",
    "red": "var(--red)",
    "green": "var(--green)",
  };

  return css`
    line-height: normal;
    font-size: ${mapaTamanhos[fontSize] || "1rem"};
    font-weight: ${mapaSize[fontWeight] || "100"};
    color: ${mapaColor[fontColor] || "inherit"};
  `;
};

export const StyledH1 = styled.h1<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledH2 = styled.h2<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledH3 = styled.h3<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledH4 = styled.h4<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledP = styled.p<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledLabel = styled.label<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;

export const StyledSpan = styled.span<HeadlineStylesProps>`
  ${(props) => HeadlineStyles(props)}
`;
