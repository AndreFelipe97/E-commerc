import Link from "next/link";

import { Card } from "../../components/Card";
import { Container, Content, Products } from "../../styles/align";
import { SectionHeading, Title } from "../../styles/typography";

export default function Home() {
  return (
    <Container>
      <Content>
        <SectionHeading>
          <Title>Latest Products</Title>
          <Link href="/our-products" passHref>
            <a>View all products &gt;</a>
          </Link>
        </SectionHeading>
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
  );
}
