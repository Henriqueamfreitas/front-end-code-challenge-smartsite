import styled from "styled-components";

export const StyledLegendCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 3.125rem;
    height: 3.125rem;
  }

  @media (min-width: 34.375rem) {
    p{
      font-size: 1.0625rem;
    }
  }
`
