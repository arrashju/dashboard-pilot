import Image from "next/image";
import { Card, Input, Button } from "shuddle";
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
            <HeroDiv style={{ gridArea: "A" }}>
              <div>
                <H1 style={{ color: "#fff", marginBottom: "6%" }}>
                  {"Meet Shuddle Visit"}
                </H1>
                <H2 style={{ color: "#eff1ef" }}>
                  {"Your cosmic adventure starts here!"}
                </H2>
              </div>
              <Button
                outline={true}
                style={{ color: "#fff" }}
                color={theme.color.apricot}
              >
                <B2 style={{ fontSize: "18px" }}>{"Book Your Adventure!"}</B2>
              </Button>
            </HeroDiv>
            <HeroInput style={{ gridArea: "B" }}>
              <Input color={theme.color.apricot} />
            </HeroInput>
          </Hero>
        </Section>
        <Section style={{ gridArea: "tw" }}>
          <Middle>
            <H2 style={{ gridArea: "A", marginBottom: "50px" }}>
              {"Exploring the Cosmic Delights of Our Celestial Getaways"}
            </H2>
            <MiddleGrid style={{ gridArea: "C" }}>
              <Card style={{ gridArea: "A" }} kind="C2" background={"white"}>
                <Card.Img accent={theme.color.apricot}>
                  <Image
                    src="/visit/unveil-mars.png"
                    alt="Unveil Mars"
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
                  <B4>{"Unveil the Marvels of Mars"}</B4>
                </Card.Body>
              </Card>
              <Card style={{ gridArea: "B" }} kind="C2" background={"white"}>
                <Card.Img accent={theme.color.apricot}>
                  <Image
                    src="/visit/venus-luxury.png"
                    alt="Luxurious Escapes on Venus"
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
                  <B4>{"Luxury Escapes on Venus Await"}</B4>
                </Card.Body>
              </Card>
              <Card style={{ gridArea: "C" }} kind="C2" background={"white"}>
                <Card.Img accent={theme.color.apricot}>
                  <Image
                    src="/visit/europa-adventures.png"
                    alt="Europa's Adventures"
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
                  <B4>{"Experience Thrilling Adventures on Europa"}</B4>
                </Card.Body>
              </Card>
            </MiddleGrid>
          </Middle>
        </Section>
        <Section
          style={{
            gridArea: "th",
          }}
        >
          <Lower>
            <Card style={{ gridArea: "A" }} kind="C1">
              <Card.Img accent={theme.color.apricot}>
                <Image
                  src="/visit/enchanting-exploration.png"
                  alt="Enchanting Lunar Exploration Awaits"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  maxHeight: "100px",
                  textAlign: "center",
                }}
              >
                <B5>{"Enchanting Lunar Exploration Awaits"}</B5>
              </Card.Body>
            </Card>
            <Card style={{ gridArea: "B" }} kind="C1">
              <Card.Img accent={theme.color.apricot}>
                <Image
                  src="/visit/VR-immersion.png"
                  alt="Experience Virtual Reality (VR) Immersion"
                  width={870}
                  height={881}
                />
              </Card.Img>
              <Card.Body
                style={{
                  maxHeight: "100px",
                  padding: "20px 30px",
                  textAlign: "center",
                }}
              >
                <B5>{"Experience Virtual Reality Immersion"}</B5>
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
  grid-template-columns: repeat(13, 1fr);
  row-gap: 120px;

  grid-template-areas:
    "on on on on on on on on on on on on on"
    "C tw tw tw tw tw tw tw tw tw tw tw D"
    "E th th th th th th th th th th th F";
`;

const Section = styled.div`
  border-radius: 13px;
`;

const B5 = styled.div`
  ${theme.typography.B5}
  line-height: 155%;
  color: ${theme.color.green};
`;

const B4 = styled.div`
  ${theme.typography.B4}
  line-height: 155%;
  color: ${theme.color.green};
`;

const B2 = styled.div`
  ${theme.typography.B2}
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  gap: 70px;
  max-width: 600px;
  margin: 0 auto;

  background: rgba(66, 107, 86, 0.7);
  border-radius: 13px;

  @media (max-width: 1200px) {
    height: auto;
    align-items: center;
  }
`;

const H1 = styled.div`
  ${theme.typography.H1}
  display: inline-block;
  width: 100%;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const H2 = styled.div`
  ${theme.typography.H2}
  color: white;
`;

const HeroInput = styled.div`
  display: flex;
  justify-content: center;
`;

const Hero = styled.div`
  display: grid;
  grid-template-areas: "C A A A A A D B B B B B E";
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: 1fr;
  min-height: 716px;

  @media (max-width: 1200px) {
    padding: 7.5%;
    grid-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "A"
      "B";
    height: auto;
  }

  justify-content: center;
  align-items: center;
  padding: 50px 0;
  gap: 10px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 97, 48, 0.3),
      rgba(0, 97, 48, 0.3)
    ),
    url("visit/hero.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 65%;
  background-size: cover;
`;

const MiddleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "A B C";
  grid-gap: 27px;

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

const Middle = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-areas:
    "F A A A A A A A A A H"
    "B C C C C C C C C C D";
  background: linear-gradient(
    99.22deg,
    #f28b74 0%,
    rgba(242, 139, 116, 0.87) 100%
  );
  border-radius: 13px;
  padding: 60px 0;
  text-align: center;
`;

const Lower = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "A B";

  @media (max-width: 900px) {
    grid-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "A"
      "B";
  }

  margin-bottom: 120px;
`;
