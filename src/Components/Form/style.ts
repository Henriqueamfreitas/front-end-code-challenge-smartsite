import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 1rem;
  margin: 0rem 2rem 2rem 2rem;
  border-radius: .5rem;
  border: .125rem solid var(--grey-5);
  gap: 1rem;
  display: flex;
  flex-direction: column;

  div:nth-child(1){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    img{
      width: 2rem;
      height: 2rem;
    }
    h2{
      color: var(--grey-4);
      font-size: .875rem;
      line-height: normal;
      font-weight: 300;
    }
  }

  p{
    color: var(--grey-3);
    font-size: 1.375rem;
    font-weight: lighter;
    padding: 0rem .75rem .75rem .75rem;
    line-height: normal;
    border-bottom: solid var(--grey-5) .125rem;
  }

  div:nth-child(3), div:nth-child(4), div:nth-child(5){
    align-items: center;
    gap: .5rem;
    padding: .6rem 0rem;
    border-bottom: solid .125rem var(--grey-5);
    label{
      display: flex;
      width: 100%;

      justify-content: space-between;
      color: var(--grey-3);
      font-size: 1rem;
      line-height: normal;
      font-weight: lighter;
    }
  }

  div:nth-child(6){
    div{
      color: var(--grey-1);
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .15rem;
      border: none;
      font-size: 1rem;
      line-height: normal;
      font-weight: lighter;
      color: var(--grey-1);

      span{
        line-height: normal;
        font-weight: bold;
        font-size: 1.125rem;
      }
    }
  }

  div:nth-child(7){
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  button{
    border: none;
    width: 100%;
    border-radius: .25rem;
    padding: 1rem 3rem;
    text-align: center;
    font-weight: bold;
    font-size: .875rem;
    line-height: normal;
    transition: .5s;
  }

  button:nth-of-type(1){
    background-color: var(--yellow);
  }

  button:nth-of-type(2){
    border: solid .125rem var(--grey-5);
    background-color: transparent;
  }

  button:nth-of-type(1):hover{
    background-color: var(--yellow-hover);
    transition: .5s;
  }

  button:nth-of-type(2):hover{
    border: solid .125rem var(--grey-5);
    background-color: var(--grey-5);
    transition: .5s;
  }

  @media (min-width: 34.375rem) {
    margin: 0rem 10rem 2rem 10rem;
    padding: 1.5rem;
    border: .1875rem solid var(--grey-5);
    button{
      cursor: pointer;
    }

    div:nth-child(1){
      font-size: 1.05rem;
      margin-bottom: 1rem;
      img{
        width: 2.4rem;
        height: 2.4rem;
      }
      h2{
        font-size: 1.05rem;
      }
    }

    p:nth-child(2){
      font-size: 1.625rem;
    }

    div:nth-child(3), div:nth-child(4), div:nth-child(5){
      label{
        font-size: 1.1875rem;
      }
    }

    div:nth-child(6){
      margin-top: 1.5rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      p{
        font-size: 1.125rem;

        span{
          font-size: 1.3125rem;
        }
      }
    }

    div:nth-child(7){
      flex-direction: row;
      width: 80%;
      align-self: center;
    }

    button{
      padding: 1rem 1rem;
      font-size: 1rem;
    }
  }
`
