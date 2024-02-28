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

  p:nth-child(2){
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
    margin-top: .5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  p:nth-child(7){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .15rem;
    font-size: 16px;
    font-weight: lighter;

    span{
      font-weight: bold;
      font-size: 18px;
    }
  }

  button{
    border: none;
    border-radius: .25rem;
    padding: 1rem 2rem;
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
`

