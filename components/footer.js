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
            <CompanyInfo />
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
            <B2>{"© 2023 Shuddle. All rights reserved"}</B2>
          </Bottom>
        </Background>
      </ThemeProvider>
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

const FooterList = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(4, auto);
  grid-gap: 74px;
  margin-right: -74px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
    margin-right: 0;
  }
`;

const B2bold = styled.div`
  ${theme.typography.B2bold}
  line-height: 60px;
`;

const B2 = styled.div`
  ${theme.typography.B2}
  line-height: 40px;
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

  @media (max-width: 900px) {
    gap: 80px 0;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: column;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    margin-bottom: 60px;
  }
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export default Footer;
