import Layout from "../components/layout";
import styled from "styled-components";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
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
