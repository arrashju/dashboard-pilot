import Image from "next/image";
import { Card } from "shuddle";
import styled from "styled-components";
import theme from "../library/styled";

export default function Home() {
  return (
    <>
      <Container>
        <Section
          style={{
            gridArea: "on",
            backgroundColor: "#eee9f1",
          }}
        >
          <Hero>
            <Card
              style={{ gridArea: "A" }}
              kind="C2"
              background={theme.color.amethyst}
            >
              <Card.Img>
                <Image
                  src="/home/maiden-voyage.png"
                  alt="Maiden Voyage"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body style={{ minHeight: "100px" }}>
                <B4 style={{ color: "white" }}>
                  {"Get Ready, Mars! Shuddles Maiden Voyage Awaits!"}
                </B4>
              </Card.Body>
            </Card>
            <Card
              style={{ gridArea: "B" }}
              kind="C2"
              background={theme.color.amethyst}
            >
              <Card.Img>
                <Image
                  src="/home/hidden-secrets.png"
                  alt="Moon's Hidden Secrets"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body style={{ minHeight: "100px" }}>
                <B4 style={{ color: "white" }}>
                  {"Moon's Hidden Secrets: Ready for You to Uncover"}
                </B4>
              </Card.Body>
            </Card>
            <Card
              style={{ gridArea: "C" }}
              kind="C2"
              background={theme.color.amethyst}
            >
              <Card.Img>
                <Image
                  src="/home/mercury-express.png"
                  alt="Mercury Express"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body style={{ minHeight: "100px" }}>
                <B4 style={{ color: "white" }}>
                  {"Mercury Express: Fast, Faster, Fastest Yet! Made History!"}
                </B4>
              </Card.Body>
            </Card>
          </Hero>
        </Section>
        <Section style={{ gridArea: "tw" }}>
          <Middle>
            <Card style={{ gridArea: "A" }} kind="C1">
              <Card.Img accent={theme.color.amethyst}>
                <Image
                  src="/home/titan-station.png"
                  alt="Titan Station"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "132px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                <B3>Titan Station</B3>
                <B4>Witness the Charm of Saturn Unfolding</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "B" }} kind="C1">
              <Card.Img accent={theme.color.amethyst}>
                <Image
                  src="/home/pioneer-partner.png"
                  alt="Pioneer Partnership"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "132px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                <B3>{"Martian Unity"}</B3>
                <B4>{"Shuddle's Pioneering Partnership"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "C" }} kind="C1">
              <Card.Img accent={theme.color.amethyst}>
                <Image
                  src="/home/support-systems.png"
                  alt="Support Systems"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "132px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                <B3>{"Putting You First"}</B3>
                <B4>{"Life Support Systems Unveiled"}</B4>
              </Card.Body>
            </Card>
          </Middle>
        </Section>
        <Section
          style={{
            gridArea: "th",
          }}
        >
          <Lower>
            <Card style={{ gridArea: "A" }} kind="C3" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/explorer-club.png"
                  alt="Explorer's Club"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  maxWidth: "71%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <B3>{"Join the Adventure"}</B3>
                <B4>{"Be a Part of Shuddle's Exciting Explorers Club"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "B" }} kind="C3" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/space-chefs.png"
                  alt="Space Chefs"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  maxWidth: "71%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <B3>{"Dine Among the Stars"}</B3>
                <B4>{"Meet Shuddle's Stellar Space Chefs!"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "C" }} kind="C2" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/icy-giant.png"
                  alt="Icy Giant"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "100px",
                  padding: "20px 30px",
                  textAlign: "center",
                }}
              >
                <B4>{"Record-Breaking Journey to the Icy Giant"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "D" }} kind="C2" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/unveil-unknown.png"
                  alt="Pluto Pioneer"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "100px",
                  padding: "20px 30px",
                  textAlign: "center",
                }}
              >
                <B4>{"Unveil the Unknown with Shuddle"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "E" }} kind="C2" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/pluto-pioneer.png"
                  alt="Lunar Mystery"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "100px",
                  padding: "20px 30px",
                  textAlign: "center",
                }}
              >
                <B4>{"Pluto Pioneer: Dare to be Adventurous"}</B4>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "F" }} kind="C2" background="#EEE9F1">
              <Card.Img>
                <Image
                  src="/home/lunar-mystery.png"
                  alt="Support Systems"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  minHeight: "100px",
                  padding: "20px 30px",
                  textAlign: "center",
                }}
              >
                <B4>{"Lunar Mysteries: The Shuddle Journey"}</B4>
              </Card.Body>
            </Card>
          </Lower>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  row-gap: 69px;

  @media (min-width: 540px) {
    padding: 5%;
  }

  grid-template-areas:
    "on on on on on on on on on on on on on on"
    "C tw tw tw tw tw tw tw tw tw tw tw tw D"
    "th th th th th th th th th th th th th th";
`;

const Section = styled.div`
  border-radius: 13px;
`;

const B4 = styled.div`
  ${theme.typography.B4}
  line-height: 155%;
`;

const B3 = styled.div`
  ${theme.typography.B3}
  font-family: ${theme.font.heading};
  color: #5b5b5b;
  margin-bottom: 10px;
  line-height: 155%;
`;

const Hero = styled.div`
  display: grid;
  padding: 7.5% 0;
  grid-gap: 20px;
  grid-template-columns: repeat(14, 1fr);
  grid-template-areas:
    "Z A A A A A A B B B B B B Y"
    "X A A A A A A C C C C C C W";

  @media (max-width: 900px) {
    padding: 7.5%;
    grid-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "A"
      "B"
      "C";
  }
`;

const Middle = styled.div`
  display: grid;
  padding: 5% 0;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "A B C";

  @media (max-width: 900px) {
    padding: 7.5%;
    grid-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "A"
      "B"
      "C";
  }
`;

const Lower = styled.div`
  display: grid;
  padding: 5% 0;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "A A C D"
    "B B E F";

  @media (max-width: 900px) {
    padding: 7.5%;
    grid-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "A"
      "B"
      "C"
      "D"
      "E"
      "F";
  }
`;
