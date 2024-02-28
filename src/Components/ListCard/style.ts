import styled from "styled-components";

interface IStyledListCardProps {
  opened: boolean;
}

export const StyledListCard = styled.li<IStyledListCardProps>`
  background-color: var(--light-grey);
  border-radius: .5rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-bottom: solid 1px var(--dark-grey);
    padding: 0rem 0rem 1rem 0rem;
    span:nth-child(1) {
      color: ${props => props.opened ? "var(--green)" : "var(--red)"};
      font-weight: 600;
    }

    h3{
      font-size: 24px;
      font-weight: bold;
    }

    p{
      font-size: 14px;
      font-weight: 300;
      line-height: normal;
    }

  }

  img{
    width: 3rem;
    height: 3rem;
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
      font-size: 20px;
      font-weight: bold;
      line-height: normal;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }
  }
`
