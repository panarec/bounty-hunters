import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
