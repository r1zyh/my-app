import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { InputGeneral } from "./components/input-general";

export function Form() {

  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Форма размещения заявки</h1>
        <InputGeneral />{" "}
      </Container>
    </>
  );
}
