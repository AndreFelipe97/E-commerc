import styled from "styled-components";

export const ButtonLink = styled.a`
  margin-top: 0.5rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  height: 2rem;
  font-weight: 700;
  color: var(--color-primary-red);

  &:hover {
    background-color: var(--color-primary-red);
    color: var(--color-white);
  }
`;