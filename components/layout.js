import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background: white;
`;
