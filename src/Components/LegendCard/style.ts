import styled from "styled-components";

export const StyledLegendCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: .5rem;
  }
  h2{
    margin-bottom: .75rem;
  }

  @media (min-width: 34.375rem) {
    h2{
      font-size: 1.1875rem;
    }
  }
`
