import { JSX } from "react";
import { VacancyListItem } from "../vacancy-list-item/vacancy-list-item";

export function VacancyList(): JSX.Element {
  return (
    <ul className="vacancy__list">
      <VacancyListItem />
      <VacancyListItem />
      <VacancyListItem />
    </ul>
  );
}
