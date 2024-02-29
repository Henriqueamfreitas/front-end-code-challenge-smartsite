import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 2rem;
  height: 60vh;
  overflow-y: scroll;
  margin-bottom: 2.5rem;

  @media (min-width: 550px) {
    height: 415px;
    overflow-y: hidden;
    overflow-x: scroll;
    flex-direction: row;
    margin: 0rem 10rem 2rem 10rem;
    padding: 0rem 0rem 1rem 0rem;
  }
`
