import { FaStar } from 'react-icons/fa';

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
} from './styles';

type CardProps = {
  title: string;
  imagePath: string;
  price: string;
  amountReview: string;
};

export function Card({ title, imagePath, price, amountReview }: CardProps) {
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
          <BtnCard onClick={() => console.log('Add')} href="#tours">
            Add cart!
          </BtnCard>
        </CardCta>
      </div>
    </Container>
  );
}
