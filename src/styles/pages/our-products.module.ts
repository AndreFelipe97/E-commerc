import styled from "styled-components";

export const NavHeading = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13rem;
  margin-bottom: 6rem;
  border-bottom: 1px solid var(--color-grey);
`;

export const NavItem = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-black-2);
  display: inline-block;
  transition: all .3s;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: var(--color-primary-red);
  }

  &:focus {
    color: var(--color-primary-red);
  }
`;