import styled from 'styled-components';

export const EachSlide = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 50rem;
  }

  span.text-1 {
    color: var(--color-primary-red);
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  span.text-2 {
    color: var(--color-white);
    font-size: 6.2rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }
`;
