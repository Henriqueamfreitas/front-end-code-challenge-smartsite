import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-bottom: 3rem;

  img{
    background-color: var(--black);
    padding: 2rem 4rem;
    margin-bottom: 3rem;
  }

  div{
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
    gap: 1.5rem;

    h1{
      color: var(--dark-grey);
      font-size: 2rem;
      font-weight: 1000;
    }

    div{
      background-color: var(--dark-grey);
      width: 1.5625rem;
      height: .625rem;
    }

    p{
      font-size: 1rem;
      line-height: normal;
      font-weight: 500;
      color: var(--dark-grey);
    }
  }

`
