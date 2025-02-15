import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { VacancySection } from "./components/vacancy-section";

export function Main() {
  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Заявки на размещение вакансий</h1>
        <VacancySection />
      </Container>
    </>
  );
}
