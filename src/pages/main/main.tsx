import { JSX } from "react";
import { Header } from "../../components/header/header";
import { Container } from "./ui/container";
import { VacancySection } from "../../components/vacancy-section";

export function Main(): JSX.Element {
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
