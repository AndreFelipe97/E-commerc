import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";

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
  return (
    <StyledHeader>
      <Title>
        hundred <span>clothing</span>
      </Title>
      <RightDiv>
        <MenuList>
          <MenuItem>
            <Link href="#" passHref>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#" passHref>
              <MenuLink>Our Products</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#" passHref>
              <MenuLink>Contact Us</MenuLink>
            </Link>
          </MenuItem>
        </MenuList>
        <Cart>
          <FaShoppingCart />
          <span>13</span>
        </Cart>
      </RightDiv>
    </StyledHeader>
  );
}
