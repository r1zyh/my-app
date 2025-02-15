import { JSX } from "react";
import { Header } from "../../components/header/header";
import { Container } from "../../components/container";

export function Form(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Форма размещения заявки</h1>
      </Container>
    </>
  );
}
