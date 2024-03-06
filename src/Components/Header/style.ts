import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-bottom: 3rem;

  img{
    background-color: var(--black);
    padding: 2rem 4rem;
    margin-bottom: 3rem;
  }

  div:nth-child(2){
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
    gap: 1.5rem;

    h1{
      color: var(--grey-0);
      font-size: 2rem;
      font-weight: 1000;
      line-height: normal;
    }

    div{
      background-color: var(--grey-0);
      width: 1.5625rem;
      height: .625rem;
    }

    p{
      font-size: 1rem;
      line-height: normal;
      font-weight: 500;
      color: var(--grey-2);
    }
  }

  @media (min-width: 34.375rem) {
    div:nth-child(1){
      background-color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
    }
    img{
      width: 11.25rem;
      height: 9.6875rem;
      margin-bottom: 0rem;
      padding: 0rem;
    }


    div:nth-child(2){
      padding: 0rem 10rem;

      h1{
        font-size: 2.4rem;
        line-height: normal;
        width: 15.625rem;
      }

      p{
        font-size: 1.2rem;
      }
    }
  }
`
