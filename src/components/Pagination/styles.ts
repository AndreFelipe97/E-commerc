import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const PaginationItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 4.4rem;
  line-height: 4.2rem;
  border: 1px solid var(--color-grey);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-black-2);
  transition: all .3s;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    background-color: var(--color-primary-red);
    color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-primary-red);
    color: var(--color-white);
  }
`;