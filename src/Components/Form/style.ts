import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 1rem;
  margin: 0px 2rem 2rem 2rem;
  border-radius: .5rem;
  border: 2px solid var(--light-grey);
  gap: 1rem;
  display: flex;
  flex-direction: column;

  div:nth-child(1){
    color: var(--dark-grey);
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    img{
      width: 2rem;
      height: 2rem;
    }
  }

  p{
    color: var(--dark-grey);
    font-size: 22px;
    font-weight: lighter;
    padding: 0rem .75rem .75rem .75rem;
    line-height: normal;
    border-bottom: solid var(--light-grey) 2px;
  }

  div:nth-child(3), div:nth-child(4), div:nth-child(5){
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem 0rem;
    border-bottom: solid 2px var(--light-grey);
    label{
      display: flex;
      width: 100%;
      color: var(--dark-grey);
      justify-content: space-between;
      font-size: 16px;
      font-weight: lighter;
    }
  }

  div:nth-child(6){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .15rem;
      font-size: 16px;
      font-weight: lighter;
      border: none;

      span{
        font-weight: bold;
        font-size: 18px;
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
    font-size: 14px;
  }

  button:nth-of-type(1){
    background-color: var(--yellow);
  }

  button:nth-of-type(2){
    border: solid 2px var(--light-grey);
    background-color: transparent;
  }

  @media (min-width: 550px) {
    margin: 0rem 10rem 2rem 10rem;
    padding: 1.5rem;
    border: 4px solid var(--light-grey);
    button{
      cursor: pointer;
    }

    div:nth-child(1){
      font-size: 16.8px;
      margin-bottom: 1rem;
      img{
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    p:nth-child(2){
      font-size: 26px;
    }

    div:nth-child(3), div:nth-child(4), div:nth-child(5){
      label{
        font-size: 19px;
      }
    }

    div:nth-child(6){
      margin-top: 1.5rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      label{
        font-size: 18px;
      }
      p{
        font-size: 18px;

        span{
          font-size: 21px;
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
      font-size: 16px;
    }

  }
`

