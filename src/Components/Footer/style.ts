import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  img{
    width: 4.375rem;
    height: 3.125rem;
  }

  @media (min-width: 34.375rem) {
    p{
      font-size: .875rem;
    }
  }
`
