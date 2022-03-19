import styled from "styled-components";

export const ProductsCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ProductTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-black);
`;

export const ProductImage = styled.img`
  height: 20rem;
  width: 30rem;
`;

export const Amount = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const AmountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  height: 5rem;
  width: 5rem;

  &:hover {
    background-color: var(--color-primary-red);
    color: var(--color-white);
  }

  &:focus {
    background-color: var(--color-primary-red);
    color: var(--color-white);
  }
`;
