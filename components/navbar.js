import { Nav } from "shuddle";
import Image from "next/image";
import Shuddle from "../components/assets/shuddle";
import ShuddleVisit from "../components/assets/shuddle-visit";
import theme from "../library/styled";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import _ from "lodash";

const Navbar = () => {
  const [navColor, setNavColor] = useState(theme.color.amethyst);
  const router = useRouter();
  const links = {
    horizontal: [
      { text: "Shuddle", active: true, href: "/" },
      { text: "Visit", active: false, href: "/visit" },
      { text: "Ride", active: false, href: "" },
    ],
    dropdown: [
      {
        text: "Sign Out",
        active: false,
        href: "",
      },
    ],
  };

  const logged = true;

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setNavColor(theme.color.amethyst);
        break;
      case "/visit":
        setNavColor(theme.color.green);
        break;
      default:
        setNavColor(theme.color.amethyst);
        break;
    }
  }, [router]);

  return (
    <>
      <Nav background={navColor}>
        <Nav.Brand>
          {(() => {
            switch (router.pathname) {
              case "/":
                return <Shuddle />;
              case "/visit":
                return <ShuddleVisit />;
              default:
                return <Shuddle />;
            }
          })()}
        </Nav.Brand>
        <Nav.ItemGroup>
          {links.horizontal?.map((link, index) => {
            const { text, href } = link;
            return (
              <Nav.Item key={index} href={href}>
                <B2>
                  {_.isEmpty(href) ? text : <Link href={href}>{text}</Link>}
                </B2>
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
              const { text, href } = link;
              return (
                <Nav.DropdownItem key={index} href={href} horizontal={true}>
                  <B2>
                    {_.isEmpty(href) ? text : <Link href={href}>{text}</Link>}
                  </B2>
                </Nav.DropdownItem>
              );
            })}
            {links.dropdown?.map((link, index) => {
              const { text, href } = link;
              return (
                <>
                  <Nav.DropdownItem
                    key={index}
                    active={`/${href}` == router.pathname}
                    horizontal={false}
                  >
                    <B2>
                      {_.isEmpty(href) ? text : <Link href={href}>{text}</Link>}
                    </B2>
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
  :hover {
    text-decoration: underline;
  }
`;

export default Navbar;
