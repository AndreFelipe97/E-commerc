import styled from "styled-components";

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 6rem;
  border-bottom: 1px solid var(--color-grey);

  a {
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-primary-red);
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  color: var(--color-black);
  margin-bottom: 1.5rem;
`;