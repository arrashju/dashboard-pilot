import styled, { ThemeProvider } from "styled-components";
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
  const breakpoint = "1000";
  return (
    <>
      <ThemeProvider theme={{ breakpoint }}>
        <Background>
          <Top>
            <FooterList>
              <FooterItem
                header={"About Us"}
                body={[
                  "Our Mission",
                  "Leadership",
                  "Safety Standards",
                  "Partners",
                ]}
              />
              <FooterItem
                header={"Contact"}
                body={[
                  "Customer Support",
                  "Press Inquiries",
                  "Partnership Opportunities",
                  "Careers",
                ]}
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
            </FooterList>
          </Top>
          <Bottom>
            <OtherItems>
              <Icons>
                <Instagram />
                <LinkedIn />
                <TikTok />
                <Facebook />
                <YouTube />
                <Twitter />
              </Icons>
              <CompanyInfo />
            </OtherItems>
          </Bottom>
          <B2 style={{ textAlign: "center" }}>
            {"© 2023 Shuddle. All rights reserved"}
          </B2>
        </Background>
      </ThemeProvider>
    </>
  );
};

const FooterItem = ({ header, body }) => {
  return (
    <Div style={{ textAlign: "center" }}>
      <B2bold>{header}</B2bold>
      {body.map((item, index) => (
        <B2 key={index}>{item}</B2>
      ))}
    </Div>
  );
};

const CompanyInfo = () => {
  return (
    <Company>
      <Logo>
        <Shuddle />
      </Logo>
      <B2alt>{"Shuddle Corporation"}</B2alt>
      <B2alt>{"123 Galactic Avenue"}</B2alt>
      <B2alt>{"Stellar City, Alpha Centauri"}</B2alt>
      <B2alt>{"XYZ 98765"}</B2alt>
    </Company>
  );
};
const Div = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Logo = styled.div`
  margin-bottom: 25px;
`;

const FooterList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 55px 90px;
`;

const B2bold = styled.div`
  ${theme.typography.B2bold}
  line-height: 60px;
`;

const B2 = styled.div`
  ${theme.typography.B2}
  line-height: 150%;
`;

const B2alt = styled.div`
  ${theme.typography.B2}
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

  @media (max-width: 607px) {
    gap: 100px;
  }
`;

const Top = styled.div`
  width: 100%;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Bottom = styled.div`
  width: 100%;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const OtherItems = styled.div`
  display: flex;
  grid-gap: 100px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: block;
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34px, 1fr));
  grid-gap: 32px;
  align-items: center;
  justify-content: center;
  max-width: 364px;

  @media (max-width: 800px) {
    margin: auto;
    margin-bottom: 100px;
  }
`;

const Company = styled.div`
  text-align: center;
`;

export default Footer;
