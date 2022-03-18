import styled from 'styled-components';

export const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  flex: 0 0 35rem;

  margin: 1rem;

  .card__side {
    background-color: orangered;
    color: var(--color-white);
    font-size: 2rem;
    height: 50rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  }

  .card__side--front {
    background-color: var(--color-white);
  }

  .card__side--back {
    background-color: var(--color-primary-red);
    transform: rotateY(180deg);
  }

  &:hover .card__side--front {
    transform: rotateY(-180deg);
  }

  &:hover .card__side--back {
    transform: rotateY(0);
  }

  @media only screen and (max-width: 56.25em) {
    height: auto;
    border-radius: 3px;
    background-color: var(--color-white);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

    .card__side {
      height: auto;
      position: relative;
      box-shadow: none;
    }

    .card__side--back {
      transform: rotateY(0);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    }

    &:hover .card__side--front {
      transform: rotateY(0);
    }
  }
`;

type CardPictureProps = {
  imagePath: String;
};

export const CardPicture = styled.div<CardPictureProps>`
  background-size: contain;
  background-repeat: no-repeat;
  height: 25rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  background-image: url(${props => String(props.imagePath)});
`;

export const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: var(--color-white);
  position: absolute;
  top: 18rem;
  right: 2rem;
  width: 75%;

  span {
    padding: 1rem 1.5rem;
    -webkit-decoration-break: clone;
    box-decoration-break: clone;
    background-color: var(--color-primary-red);
  }
`;

export const CardDetails = styled.div`
  padding: 3rem;

  @media only screen and (max-width: 56.25em) {
    padding: 1rem 3rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-grey-2);
    line-height: 2.4rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-primary-red);
    padding: 3rem 0;

    .stars {
      display: flex;

      svg {
        color: currentColor;
        font-size: 1.4rem;
      }
    }

    span {
      color: currentColor;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export const CardCta = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;

  @media only screen and (max-width: 56.25em) {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

export const PriceBox = styled.div`
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em) {
    margin-bottom: 3rem;
  }
`;

export const PriceOnly = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const PriceValue = styled.p`
  font-size: 6rem;
  font-weight: 100;

  @media only screen and (max-width: 56.25em) {
    font-size: 4rem;
  }
`;

export const BtnCard = styled.a`
  background-color: var(--color-white) !important;
  color: var(--color-primary-red);

  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    position: relative;
    font-size: var(--default-font-size);
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: rgba(0 0.5rem 1rem, rgba(0, 0, 0, 0.2));
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn-white::after {
    background-color: var(--color-white);
  }

  .btn-white:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
`;
