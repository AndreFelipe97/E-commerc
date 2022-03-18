import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  flex: 0 0 70%;

  div {
    border-top: 1px solid var(--color-grey);
    flex: 0 0 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10rem;
  }

  p {
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-bottom: 0;
    font-weight: 300;
    color: var(--color-grey-2);
    line-height: 2.4rem;
  }
`;