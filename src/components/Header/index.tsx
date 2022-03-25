import Link from "next/link";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import { AppState } from "src/store/reducers/rootReducer";

import {
  Header as StyledHeader,
  Title,
  RightDiv,
  MenuList,
  MenuItem,
  MenuLink,
  Cart,
} from "./styles";

export function Header() {
  const { product } = useSelector((state: AppState) => state.cart);

  return (
    <StyledHeader>
      <Title>
        hundred <span>clothing</span>
      </Title>
      <RightDiv>
        <MenuList>
          <MenuItem>
            <Link href="/" passHref>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/our-products" passHref>
              <MenuLink>Our Products</MenuLink>
            </Link>
          </MenuItem>
        </MenuList>
        <Link href="/cart" passHref>
          <Cart>
            <FaShoppingCart />
            <span>{product.amount}</span>
          </Cart>
        </Link>
      </RightDiv>
    </StyledHeader>
  );
}
