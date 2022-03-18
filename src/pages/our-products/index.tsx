import { useState } from "react";
import { Card } from "../../components/Card";
import { LayoutDefault } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { Container, Content, Products } from "../../styles/align";
import { NavHeading, NavItem } from "../../styles/pages/our-products";

type ProductProps = {
  imagePath: string;
  price: string;
  amountReview: string;
  type: string;
};
export default function OurProduct() {
  const productsAll = [
    {
      imagePath: "./assets/img/product_01.jpg",
      price: "25.75",
      amountReview: "24",
      type: "featured",
    },
    {
      imagePath: "./assets/img/product_06.jpg",
      price: "22.50",
      amountReview: "32",
      type: "featured",
    },
    {
      imagePath: "./assets/img/product_02.jpg",
      price: "30.25",
      amountReview: "21",
      type: "flashDeals",
    },
    {
      imagePath: "./assets/img/product_05.jpg",
      price: "12.50",
      amountReview: "16",
      type: "flashDeals",
    },
    {
      imagePath: "./assets/img/product_03.jpg",
      price: "20.45",
      amountReview: "36",
      type: "lastMinute",
    },
    {
      imagePath: "./assets/img/product_04.jpg",
      price: "15.25",
      amountReview: "48",
      type: "lastMinute",
    },
  ];

  const [products, setProducts] = useState<Array<ProductProps>>(productsAll);

  function handlteType(type: string) {
    if (type === "allProducts") {
      setProducts(productsAll);
    } else if (type === "featured") {
      const productFilter = productsAll.filter(
        (product: ProductProps) => product.type === "featured"
      );
      console.log(productFilter);
      setProducts(productFilter);
    } else if (type === "flashDeals") {
      const productFilter = productsAll.filter(
        (product: ProductProps) => product.type === "flashDeals"
      );
      console.log(productFilter);
      setProducts(productFilter);
    } else if (type === "lastMinute") {
      const productFilter = productsAll.filter(
        (product: ProductProps) => product.type === "lastMinute"
      );
      console.log(productFilter);
      setProducts(productFilter);
    }
  }

  return (
    <LayoutDefault title="HundredClothing|Our Products">
      <Container>
        <Content>
          <NavHeading>
            <NavItem onClick={() => handlteType("allProducts")}>
              all products
            </NavItem>
            <NavItem onClick={() => handlteType("featured")}>featured</NavItem>
            <NavItem onClick={() => handlteType("flashDeals")}>
              flash deals
            </NavItem>
            <NavItem onClick={() => handlteType("lastMinute")}>
              last minute
            </NavItem>
          </NavHeading>

          <Products>
            {products.map((product: ProductProps, index) => (
              <Card
                key={String(index + 1)}
                title="title goes here"
                imagePath={product.imagePath}
                price={product.price}
                amountReview={product.amountReview}
              />
            ))}
          </Products>
          <Pagination />
        </Content>
      </Container>
    </LayoutDefault>
  );
}
