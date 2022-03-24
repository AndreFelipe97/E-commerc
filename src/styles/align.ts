import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 56.25em)  {
    align-items: center;
    justify-content: flex-start;
    margin: auto 3rem;
  }
`;

export const Content = styled.div`
  flex: 0 0 45%;

  @media only screen and (max-width: 56.25em)  {
    flex: 0 0 100%;
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;