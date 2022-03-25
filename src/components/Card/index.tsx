import { Dispatch } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddCartActions } from "src/store/actions/cartActions";

import {
  Card as Container,
  CardPicture,
  CardHeading,
  CardDetails,
  CardCta,
  PriceBox,
  PriceOnly,
  PriceValue,
  BtnCard,
} from "./styles";

type CardProps = {
  title: string;
  imagePath: string;
  price: string;
  amountReview: string;
};

export function Card({ title, imagePath, price, amountReview }: CardProps) {
  const addCartDispatch = useDispatch<Dispatch<AddCartActions>>();

  const handleAddCart = () => {
    addCartDispatch({ type: "@ADD_CART" });
  };

  return (
    <Container>
      <div className="card__side card__side--front">
        <CardPicture imagePath={imagePath} />
        <CardHeading>
          <span>{title}</span>
        </CardHeading>
        <CardDetails>
          <p>
            Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
            nulla aspernatur.
          </p>
          <div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span>Reviews ({amountReview})</span>
          </div>
        </CardDetails>
      </div>
      <div className="card__side card__side--back">
        <CardCta>
          <PriceBox>
            <PriceOnly>Only</PriceOnly>
            <PriceValue>${price}</PriceValue>
          </PriceBox>
          <BtnCard onClick={handleAddCart} href="#tours">
            Add cart!
          </BtnCard>
        </CardCta>
      </div>
    </Container>
  );
}
