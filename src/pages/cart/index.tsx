import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { LayoutDefault } from "src/components/Layout";
import { SectionHeading, Title } from "src/styles/typography";
import {
  Amount,
  AmountButton,
  ProductImage,
  ProductsCart,
  ProductTitle,
} from "./cart.module";

const Cart: NextPage = () => {
  const [amount, setAmount] = useState(0);

  function handleAdd() {
    setAmount(amount + 1);
  }

  function handleRemove() {
    setAmount(amount - 1);
  }

  return (
    <LayoutDefault title="HundredClothing|home">
      <SectionHeading>
        <Title>Cart</Title>
      </SectionHeading>
      <ProductsCart>
        <ProductImage src="/assets/img/product_01.jpg" alt="product 1" />
        <ProductTitle>title goes here</ProductTitle>
        <AmountButton type="button" onClick={handleAdd}>
          <FaPlus />
        </AmountButton>
        <Amount>{amount}</Amount>
        <AmountButton type="button" onClick={handleRemove}>
          <FaMinus />
        </AmountButton>
      </ProductsCart>
    </LayoutDefault>
  );
};

export default Cart;
