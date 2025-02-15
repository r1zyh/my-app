import { JSX } from "react";
import { VacancyList } from "./vacancy-list";

export function VacancySection(): JSX.Element {
  return (
    <section className="vacancy">
      <VacancyList />
    </section>
  );
}
