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

  @media (min-width: 550px) {
    div:nth-child(1){
      background-color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
    }
    img{
      width: 180px;
      height: 155px;
      margin-bottom: 0px;
      padding: 0rem;
    }


    div:nth-child(2){
      padding: 0rem 10rem;

      h1{
        font-size: 2.6rem;
        line-height: normal;
        width: 250px;
      }

      p{
        font-size: 1.3rem;
      }
    }

  }
`
