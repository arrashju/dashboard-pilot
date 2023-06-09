import styled from "styled-components";
import theme from "../library/styled";
import Shuddle from "../components/assets/shuddle";
import {
  Facebook,
  Instagram,
  LinkedIn,
  TikTok,
  Twitter,
  YouTube,
} from "./assets/social-media";

const Footer = () => {
  return (
    <>
      <Background>
        <Top>
          <CompanyInfo />
          <FooterItem
            header={"About Us"}
            body={["Our Mission", "Leadership", "Safety Standards", "Partners"]}
          />
          <FooterItem
            header={"Contact"}
            body={["Our Mission", "Leadership", "Safety Standards", "Partners"]}
          />
          <FooterItem
            header={"Resources"}
            body={[
              "FAQs",
              "Galactic Weather",
              "Transit Tips",
              "Shuddle Glossary",
            ]}
          />
          <FooterItem
            header={"Community"}
            body={[
              "Outreach Programs",
              "Volunteer Opportunities",
              "Educational Partnerships",
              "Traveler Stories",
            ]}
          />
        </Top>
        <Bottom>
          <B2>{"© 2023 Shuddle. All rights reserved"}</B2>
          <Icons>
            <Facebook />
            <Instagram />
            <LinkedIn />
            <TikTok />
            <Twitter />
            <YouTube />
          </Icons>
        </Bottom>
      </Background>
    </>
  );
};

const FooterItem = ({ header, body }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <B2bold>{header}</B2bold>
      {body.map((item) => (
        <B2>{item}</B2>
      ))}
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Logo>
        <Shuddle />
      </Logo>
      <B2alt>{"Shuddle Corporation"}</B2alt>
      <B2alt>{"123 Galactic Avenue"}</B2alt>
      <B2alt>{"Stellar City, Alpha Centauri"}</B2alt>
      <B2alt>{"XYZ 98765"}</B2alt>
    </div>
  );
};

const Logo = styled.div`
  margin-bottom: 25px;
`;

const B2bold = styled.div`
  ${theme.color.B2bold}
  line-height: 60px;
`;

const B2 = styled.div`
  ${theme.color.B2}
  line-height: 40px;
`;

const B2alt = styled.div`
  ${theme.color.B2}
  line-height: 31px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 110px 0;
  background-color: ${theme.color.amethyst};
  padding: 59px 7.5%;
  color: white;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(4, auto);
  grid-gap: 74px;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export default Footer;
