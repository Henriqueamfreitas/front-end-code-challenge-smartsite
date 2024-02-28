import styled from "styled-components";

export const StyledLegend = styled.ul`
  margin: 0rem 2rem 2rem 2rem;
  padding: 2.5rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 2.5rem;
  background-color: var(--light-grey);

  @media (min-width: 550px) {
    margin: 0rem 10rem 2rem 10rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1rem;
  }
`
