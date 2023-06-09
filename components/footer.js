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
                  "Our Mission",
                  "Leadership",
                  "Safety Standards",
                  "Partners",
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
                <IconRow>
                  <Facebook />
                  <Instagram />
                  <LinkedIn />
                </IconRow>
                <IconRow>
                  <TikTok />
                  <Twitter />
                  <YouTube />
                </IconRow>
              </Icons>

              <CompanyInfo />
              <B2>{"© 2023 Shuddle. All rights reserved"}</B2>
            </OtherItems>
          </Bottom>
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 70px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: auto;
`;

export default Footer;
