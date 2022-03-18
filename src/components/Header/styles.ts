import styled from 'styled-components';

export const Header = styled.header`
  background-color: #232323;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;

  span {
    font-style: normal;
    color: var(--color-primary-red);
  }
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 30%;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const MenuItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin: 0 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    transform: scaleX(0);
    transition: all 0.5s;
  }

  &:hover::before,
  &.active::before {
    transform: scaleX(1);
    border-bottom: 3px solid var(--color-primary-red);
    padding: 2.28rem;
    width: 100%;
  }

  &:active::before {
    border-bottom: 1px solid var(--color-primary-red);
  }
`;

export const MenuLink = styled.button`
  color: var(--color-white) !important;
    z-index: 10 !important;
    text-transform: capitalize !important;
    font-size: 1.5rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px !important;
    text-decoration: none !important;
    display: block !important;
    position: relative !important;
    z-index: 10 !important;
    display: flex !important;
    align-items: center !important;
    background-color: transparent;
    border: none;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    transform: scaleX(0);
    transition: all 0.5s;
  }

  &:hover::before,
  &.active::before {
    transform: scaleX(1);
    border-bottom: 3px solid var(--color-primary-red);
    padding: 3.8rem;
    width: 100%;
  }

  &:active::before {
    border-bottom: 1px solid var(--color-primary-red);
  }

  svg {
    color: var(--color-white);
    height: 2.5rem;
    width: 2.5rem;
  }

  span {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary-red);
    color: var(--color-white);
    position: absolute;
    top: -1rem;
    margin-left: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
