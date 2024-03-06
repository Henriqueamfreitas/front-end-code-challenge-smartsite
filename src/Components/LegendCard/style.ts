import styled from "styled-components";

export const StyledLegendCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: normal;
    font-weight: 600;
    color: var(--grey-0);
  }
  div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: .5rem;
  }

  @media (min-width: 34.375rem) {
    h2{
      font-size: 1.1875rem;
    }
  }
`
