import { Nav } from "shuddle";
import Image from "next/image";
import Shuddle from "../components/assets/shuddle";
import theme from "../library/styled";
import styled from "styled-components";

const Navbar = () => {
  const links = {
    horizontal: [
      { text: "Shuddle", active: true, href: "/" },
      { text: "Visit", active: false, href: "/visit" },
      { text: "Ride", active: false, href: "/ride" },
    ],
    dropdown: [
      {
        text: "Sign Out",
        active: false,
        href: "/auth/signout",
      },
    ],
  };

  const logged = true;

  return (
    <>
      <Nav background={theme.color.amethyst}>
        <Nav.Brand>
          <Shuddle />
        </Nav.Brand>
        <Nav.ItemGroup>
          {links.horizontal?.map((link, index) => {
            const { text, active } = link;
            return (
              <Nav.Item key={index} active={active}>
                {text}
              </Nav.Item>
            );
          })}
        </Nav.ItemGroup>
        <Nav.DropdownGroup>
          <Nav.Img
            kind={logged ? "image" : "hamburger"}
            color="white"
            initials="JA"
          >
            <Image src="/me.png" alt="Justin" width={40} height={41} priority />
          </Nav.Img>
          <Nav.Dropdown>
            {links.horizontal?.map((link, index) => {
              const { text, active } = link;
              return (
                <>
                  <Nav.DropdownItem
                    key={index}
                    active={active}
                    horizontal={true}
                  >
                    {text}
                  </Nav.DropdownItem>
                </>
              );
            })}
            {links.dropdown?.map((link, index) => {
              const { text, active } = link;
              return (
                <>
                  <Nav.DropdownItem
                    key={index}
                    active={active}
                    horizontal={false}
                  >
                    <B2>{text}</B2>
                  </Nav.DropdownItem>
                </>
              );
            })}
          </Nav.Dropdown>
        </Nav.DropdownGroup>
      </Nav>
    </>
  );
};

const B2 = styled.div`
  ${theme.typography.B2}
`;

export default Navbar;
