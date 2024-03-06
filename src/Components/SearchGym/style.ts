import styled from "styled-components";

export const StyledSearchGym = styled.form`
  margin: 0rem 2rem 1rem 2rem;
  padding: .5rem .5rem;
  display: flex;
  justify-content: space-between;
  border: solid .0625rem var(--grey-3);
  border-radius: .25rem;
  img{
    width: 1.25rem;
    height: 1.25rem;
  }
  input {
    border: none;
    width: 75%;
    outline: none;
    font-size: .875rem;
    line-height: normal;
    font-weight: lighter;
    color: var(--grey-1);
  }
  button{
    padding: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
  }

  @media (min-width: 34.375rem) {
    margin: 0rem 10rem 1rem 10rem;
    input {
      font-size: 1.0625rem;
  }
  }
`
