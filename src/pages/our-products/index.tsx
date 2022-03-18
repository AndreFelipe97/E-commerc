import { Card } from "../../components/Card";
import { LayoutDefault } from "../../components/Layout";
import { Container, Content, Products } from "../../styles/align";
import { NavHeading, NavItem } from "../../styles/pages/our-products";

export default function OurProduct() {
  return (
    <LayoutDefault title="HundredClothing|Our Products">
      <Container>
        <Content>
          <NavHeading>
            <NavItem>all products</NavItem>
            <NavItem>featured</NavItem>
            <NavItem>flash deals</NavItem>
            <NavItem>last minute</NavItem>
          </NavHeading>

          <Products>
            <Card
              title="title goes here"
              imagePath="./assets/img/product_01.jpg"
              price="25.75"
              amountReview="24"
            />
            <Card
              title="title goes here"
              imagePath="./assets/img/product_02.jpg"
              price="30.25"
              amountReview="21"
            />
            <Card
              title="title goes here"
              imagePath="./assets/img/product_03.jpg"
              price="20.45"
              amountReview="36"
            />
            <Card
              title="title goes here"
              imagePath="./assets/img/product_04.jpg"
              price="15.25"
              amountReview="48"
            />
            <Card
              title="title goes here"
              imagePath="./assets/img/product_05.jpg"
              price="12.50"
              amountReview="16"
            />
            <Card
              title="title goes here"
              imagePath="./assets/img/product_06.jpg"
              price="22.50"
              amountReview="32"
            />
          </Products>
        </Content>
      </Container>
    </LayoutDefault>
  );
}
