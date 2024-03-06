import styled from "styled-components";

interface IStyledListCardProps {
  isopen: string;
}

export const StyledListCard = styled.li<IStyledListCardProps>`
  background-color: var(--grey-5);
  border: .0625rem solid var(--grey-4);
  border-radius: .5rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-bottom: solid .0625rem var(--grey-4);
    padding: 0rem 0rem 1rem 0rem;
    span:nth-child(1) {
      color: ${props => props.isopen ? "var(--green)" : "var(--red)"};
      font-weight: 600;
      line-height: normal;
      font-size: .875rem;
    }

    h3{
      font-size: 1.5rem;
      font-weight: bold;
      line-height: normal;
      color: var(--grey-0);
    }

    p{
      font-size: .875rem;
      color: var(--grey-2);
      font-weight: 300;
      line-height: normal;
    }
  }

  div:nth-of-type(2){
    display: flex;
    justify-content: space-evenly;
    img{
      width: 3rem;
      height: 3rem;
    }
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    li{
      width: 47%;
      display: flex;
      flex-direction: column;
      gap: .35rem;
    }
    h4{
      font-size: 1.25rem;
      font-weight: bold;
      line-height: normal;
      color: var(--grey-0);
    }
    p{
      font-size: .875rem;
      font-weight: 400;
      line-height: normal;
      color: var(--grey-2);
    }
  }

  @media (min-width: 34.375rem) {
    min-width: 16.25rem;
    max-height: 24.375rem;
    padding: 1rem 1rem 0rem 1rem;

    div:nth-child(1){
      min-height: 8.4375rem;
      height: 8.4375rem;
      span:nth-child(1) {
        font-size: 1.0625rem;
      }
      h3{
        font-size: 1.6875rem;
      }

      p{
        font-size: 1.0625rem;
        font-weight: 300;
        line-height: normal;
      }
    }
  }

  ul{
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    li{
      height: 5rem;
    }
    h4{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`
