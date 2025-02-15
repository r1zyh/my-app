import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { InputConditions } from "./components/input-conditions";
import { InputCriteria } from "./components/input-criteria";
import { InputGeneral } from "./components/input-general";

export function Form() {
  // Посмотреть компоненты на возможность вынести в пере используемые с передачей данных полей через props
  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Форма размещения заявки</h1>
        <form action="post">
          <InputGeneral />
          <InputConditions />
          <InputCriteria />
        </form>
      </Container>
    </>
  );
}
