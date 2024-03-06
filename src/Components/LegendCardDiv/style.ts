import styled from "styled-components";

export const StyledLegendCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: .875rem;
    font-weight: 300;
    line-height: normal;
    color: var(--grey-0);
  }
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
