import styled from "styled-components";

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 6rem;
  border-bottom: 1px solid var(--color-grey);
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  color: var(--color-black);
  margin-bottom: 1.5rem;
  
  @media only screen and (max-width: 56.25em)  {
    font-size: 1.4rem;
  }
`;